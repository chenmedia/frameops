# FrameOps Module Architecture

**Purpose:** Organize FrameOps into clear business modules for product planning and phased implementation.  
**Approach:** Standalone modular monolith first; Chen Media OS module later.  
**Related document:** `frameops-product-requirements.md`  
**Last updated:** 18 October 2026  

## 1. Recommendation

FrameOps should begin as a **modular monolith** containing six business modules, supported by four platform modules. Future capabilities should remain separate modules rather than being partially embedded into the MVP.

### Business modules

1. Event Core & Intake
2. Crew Directory & Staffing
3. Agenda & Coverage Planning
4. Plan Publishing & Field Operations
5. Deliverables & Production
6. Commercial Control

### Platform modules

7. Identity, Access & Organizations
8. Communications & Secure Links
9. Documents, Intelligence & Rules
10. Integrations & Audit

### Future modules

11. Client Collaboration
12. Time & Compensation
13. HMS & Quality
14. Equipment & Resources
15. Chen Media OS Platform Adapter

This structure is deliberately larger than the app’s visible navigation. Modules are implementation and ownership boundaries, not menu items.

## 2. Why this structure works

- It follows business responsibilities rather than screens.
- It separates sales, event operations, workforce, and media-delivery concerns.
- It prevents the coverage planner from becoming responsible for people, money, messaging, files, and clients.
- It allows the dashboard and event command center to combine information without owning it.
- It can run in one codebase and database initially.
- It gives each module a clear path into Chen Media OS later.

## 3. Module map

```text
HubSpot / Contract / Email
            │
            ▼
┌────────────────────────────┐
│ 1. Event Core & Intake     │
└─────────────┬──────────────┘
              │ event
       ┌──────┴──────────┐
       ▼                 ▼
┌─────────────────┐  ┌────────────────────────┐
│ 2. Crew &       │  │ 3. Agenda & Coverage  │
│    Staffing     │──▶│    Planning            │
└────────┬────────┘  └───────────┬────────────┘
         │ confirmed crew        │ approved plan
         └────────────┬──────────┘
                      ▼
         ┌────────────────────────────┐
         │ 4. Publishing & Field Ops  │
         └─────────────┬──────────────┘
                       │ execution context
                       ▼
         ┌────────────────────────────┐
         │ 5. Deliverables &          │
         │    Production              │
         └────────────────────────────┘

┌────────────────────────────┐
│ 6. Commercial Control      │ observes staffing and production
└────────────────────────────┘

Cross-cutting support:
Identity & Access · Communications · Documents & Intelligence · Integrations & Audit
```

## 4. Business module 1: Event Core & Intake

### Responsibility

Own the operational identity and lifecycle of an event from signed handoff through archive.

### Owns

- Event identity and status
- Client and deal references
- Event name and type
- Photo, video, or combined service selection
- Dates, coverage window, and time zone
- Venues and primary locations
- Operational contacts
- Contract source and signed status
- Extracted facts and review decisions
- Missing and conflicting information
- Event-card summary data
- Recorded external client approval

### Main capabilities

- Create an event manually after signing.
- Upload a contract and relevant email material.
- Review confirmed, inferred, missing, and conflicting details.
- Preserve source references.
- Create the event in `Intake — needs review`.
- Advance the event through operational statuses.
- Produce a readiness summary from other modules.

### Does not own

- HubSpot deal lifecycle
- Crew profiles or availability
- Detailed agenda versions
- Coverage assignments
- Deliverable workflow
- Media files

### Exposes

- Event ID and summary
- Dates, locations, contacts, and service types
- Current event status
- Contracted scope and source evidence

### Consumes

- Deal and document data from integrations
- Readiness results from staffing, coverage, publishing, and production

### Key events

- `event.created`
- `event.intake_reviewed`
- `event.status_changed`
- `event.client_approval_recorded`

## 5. Business module 2: Crew Directory & Staffing

### Responsibility

Own people relevant to event operations and the process of finding, checking, holding, and confirming them for an event.

### Owns

- Employee and freelancer profiles
- Role qualifications
- Experience
- Private personal ranking
- Relevant owned gear
- Contact details
- Default availability
- Event-specific availability
- Suggested, requested, available, held, confirmed, declined, and cancelled states
- Staffing requirements by role
- Candidate recommendations
- Assignment confirmation

### Main capabilities

- Suggest Kai for suitable lead work when available.
- Rank suitable employees and freelancers.
- Request availability and pricing.
- Accept secure-link responses.
- Show whole-event availability by default.
- Reveal partial availability when the pool is limited.
- Confirm the selected crew separately from availability.
- Compare contracted, recommended, and allocated crew.

### Important boundary

This module owns **event-level staffing commitments**. It does not own detailed coverage blocks.

A confirmed photographer belongs to the event team. The Coverage module decides which sessions that person covers.

### Does not own

- Event agenda
- Coverage timeline
- Published run sheets
- Payroll or actual worked time
- Equipment inventory

### Exposes

- Confirmed event team
- Candidate list and recommendation explanation
- Availability windows
- Role qualifications
- Staffing readiness

### Consumes

- Event dates and requirements
- Rate visibility from Commercial Control
- Email and secure links from Communications

### Key events

- `staffing.requirement_created`
- `staffing.availability_requested`
- `staffing.availability_received`
- `staffing.person_held`
- `staffing.person_confirmed`
- `staffing.person_declined`

## 6. Business module 3: Agenda & Coverage Planning

### Responsibility

Turn client schedules into a reviewed, prioritized, conflict-aware photo and video coverage plan.

### Owns

- Agenda sources and versions
- Agenda items
- Schedule comparison and proposed changes
- Review states
- Photo and video coverage requirements
- Priority levels
- Time-bounded coverage assignments
- Setup, travel, handoff, editing-protection, break, and backup blocks
- Coverage conflicts and warnings
- Google Maps travel estimate references
- Drone preparation requirements
- Coverage-plan draft

### Main capabilities

- Import schedules from common formats.
- Preserve every version.
- Compare versions and show changes.
- Place each agenda item into review.
- Suggest coverage requirements without confirming them.
- Set separate photo and video priorities.
- Assign confirmed crew to coverage blocks.
- Detect conflicts, gaps, and unrealistic transitions.
- Suggest reassignments without applying them automatically.

### Important boundary

This module owns the **working plan**, not what crew can currently see. Publishing copies an approved plan into an immutable version.

### Does not own

- Person master records
- Staffing commitments
- Email delivery
- Plan acknowledgements
- Post-production deliverable status

### Exposes

- Current draft coverage plan
- Conflicts and warnings
- Affected people from proposed schedule changes
- Coverage readiness

### Consumes

- Event dates, venues, and service types
- Confirmed crew and availability
- Contracted deliverables
- Google Maps estimates

### Key events

- `agenda.version_imported`
- `agenda.changes_accepted`
- `coverage.requirement_confirmed`
- `coverage.assignment_changed`
- `coverage.conflict_detected`
- `coverage.plan_ready`

## 7. Business module 4: Plan Publishing & Field Operations

### Responsibility

Convert the working coverage plan into a stable published plan and deliver a reliable field experience to crew.

### Owns

- Published plan versions
- Personal run-sheet projections
- Complete published event view
- Material-change classification
- Crew acknowledgements
- Lead photo/video editing permissions
- Offline schedule cache and sync state
- Printable PDF generation
- Event WhatsApp group reference
- Ready-to-paste change summaries
- Field contact visibility

### Main capabilities

- Preview and publish the plan.
- Distribute secure schedule links.
- Track acknowledgement by person and version.
- Ask affected people to re-acknowledge material changes.
- Let crew switch between personal and complete views.
- Provide Now, Next, Later, and Updates views.
- Allow photo and video leads to make immediate changes within their discipline.
- Record every lead change in the audit history.
- Keep the latest schedule available offline.

### Important boundary

This module does not edit the client agenda. A lead assignment adjustment changes the operational coverage plan and republishes the affected field view; it does not rewrite the source schedule.

### Does not own

- Agenda-source documents
- Crew availability
- Freelancer rates
- Media transfer
- HMS/KS case management

### Exposes

- Latest published version
- Personal and complete run sheets
- Acknowledgement status
- Affected-recipient list
- Publishing readiness

### Consumes

- Approved plan from Coverage
- Contacts from Event Core and Crew Directory
- Notifications and secure links
- Audit recording

### Key events

- `plan.published`
- `plan.material_change_published`
- `plan.acknowledged`
- `field.lead_assignment_changed`
- `field.offline_plan_synced`

## 8. Business module 5: Deliverables & Production

### Responsibility

Plan and track contractual photo and video outputs from capture through delivery.

### Owns

- Photo and video deliverables
- Fixed deadlines and time zones
- Continuous-delivery checkpoints
- Production timeline
- Capture, ingest, backup, selection, editing, review, and delivered states
- Deliverable owner and editor
- Protected editing blocks requested from Coverage
- Workstation and handoff plan
- Video revision allowance and use
- Pixieset, Picflow, and Frame.io links
- Filename and folder instructions
- End-of-day backup and handoff confirmation

### Main capabilities

- Convert contract commitments into deliverables.
- Propose a production timeline.
- Coordinate continuous batches with the client social-media contact.
- Protect editing time from coverage assignments.
- Warn about unrealistic turnaround.
- Track one included video revision and additional chargeable revisions.
- Generate event-specific naming and handoff instructions.

### Important boundary

The MVP tracks work, responsibility, deadlines, and destination links. It does not ingest, rename, transfer, or deliver media files.

### Does not own

- Gallery assets
- Frame.io media
- Actual file storage
- Client invoicing
- Payroll

### Exposes

- Production blocks required by Coverage
- Delivery readiness and warnings
- Current deliverable status
- Destination links

### Consumes

- Contracted deliverables from Event Core
- Event timeline and crew from Coverage
- Revision pricing from Commercial Control

### Key events

- `deliverable.created`
- `deliverable.owner_assigned`
- `production.block_requested`
- `deliverable.status_changed`
- `deliverable.revision_requested`
- `deliverable.delivered`

## 9. Business module 6: Commercial Control

### Responsibility

Own internal event economics without exposing them to crew or clients.

### Owns

- Rate cards by person and role
- Hourly, half-day, full-day, and custom pricing
- Editing-included settings
- Event-specific negotiated prices
- Overtime hourly rate
- Travel, accommodation, meals, parking, and rental costs
- Combined and separated photo/video budgets
- Internal photo/video budget allocation
- Estimated staffing cost
- Projected margin
- Chargeable additional video revisions

### Main capabilities

- Calculate expected crew cost from the planned event.
- Compare contracted budget with planned staffing and production.
- Keep commercial information admin-only.
- Support future planned-versus-actual reporting.

### Important boundary

This is an internal planning module, not accounting, invoicing, payroll, or timekeeping.

### Does not own

- Actual worked hours
- Wage or tax calculation
- Invoice generation
- Deal pipeline

### Exposes

- Admin-only cost and budget summaries
- Expected rate for a staffing request
- Commercial warning when the plan exceeds budget

### Consumes

- Planned staff and roles
- Planned hours and production blocks
- Contract value from the deal or event record

### Key events

- `commercial.rate_changed`
- `commercial.event_price_agreed`
- `commercial.budget_allocated`
- `commercial.cost_warning_created`

## 10. Platform module 7: Identity, Access & Organizations

### Responsibility

Provide standalone accounts now and a clean path to Chen Media OS identity later.

### Owns

- Organizations and membership
- User identities
- Authentication mapping
- Roles and permission grants
- Secure sessions

### Rules

- Keep authentication-provider IDs separate from domain person IDs.
- Enforce organization and event boundaries.
- Support admin, coordinator, photo lead, video lead, and crew permissions.
- Allow future single sign-on without changing event ownership.

## 11. Platform module 8: Communications & Secure Links

### Responsibility

Send messages and grant narrow accountless access without owning the business workflow.

### Owns

- Email templates
- Delivery attempts and failures
- Secure-link tokens
- Expiration and revocation
- Recipient verification context
- Message history
- Notification preferences

### Supports

- Availability and pricing requests
- Assignment confirmations
- Published schedules
- Acknowledgement requests
- Material-change notices
- Ready-to-paste WhatsApp summaries

### Boundary rule

The calling business module decides why a message is sent and what response means. Communications only delivers it and returns the result.

## 12. Platform module 9: Documents, Intelligence & Rules

### Responsibility

Provide reusable document processing, suggestions, classification, and rules without owning operational truth.

### Owns

- Uploaded source metadata
- Text extraction results
- Structured extraction proposals
- Confidence and source citations
- Schedule-diff proposals
- Staffing and coverage suggestions
- Warning-rule evaluation
- Explanation data

### Rules

- Every extracted or suggested value retains evidence.
- AI output remains proposed until a business module accepts it.
- The module never publishes a plan, confirms a person, or resolves a contract conflict.
- Recommendation explanations are stored with their result.

### Why intelligence is not a business module

“AI” should not own event information. Event Core owns accepted event facts, Staffing owns accepted personnel decisions, and Coverage owns accepted schedule decisions.

## 13. Platform module 10: Integrations & Audit

This can begin as two packages under one platform area and split later if needed.

### Integration adapters

- HubSpot
- Email
- Google Maps
- Google Sheets
- Pixieset
- Picflow
- Frame.io
- WhatsApp
- Future Chen Media OS services

Each adapter translates external data into FrameOps commands or references. Core modules must not call vendor-specific SDKs directly.

### Audit service

Records:

- Actor
- Time
- Module
- Object
- Previous and new value where appropriate
- Source or reason
- Published plan version affected

Audit history is required for intake decisions, staffing commitments, agenda acceptance, assignment changes, publishing, acknowledgements, lead changes, and admin overrides.

## 14. Future module 11: Client Collaboration

### Purpose

Allow clients to contribute without exposing internal operations or commercial information.

### Planned capabilities

- Secure client access
- Direct schedule uploads
- Proposed priorities and changes
- Decision-maker, schedule owner, social-media, and on-site roles
- Crew-name and role visibility
- Coverage-plan approval
- Comments in FrameOps and by email

### Boundary

Client changes are proposals. Urgent changes still require admin approval before crew publication.

## 15. Future module 12: Time & Compensation

### Planned capabilities

- Clock in and out
- Manual time entry
- Overtime and addition rules
- Multi-level approval
- Weekly locking
- Traceable history
- Planned-versus-actual comparison

### Boundary

The module consumes planned assignments and agreed rates. It must not own coverage planning.

## 16. Future module 13: HMS & Quality

### Planned capabilities

- Incident, deviation, and quality reports
- Photo evidence
- Responsible person
- Corrective actions
- KS checklists
- HMS handbook
- Competence register

### Integration with FrameOps

A report launched from the mobile run sheet inherits event, assignment, location, time, and reporter. Alerts go to the admin, relevant lead, and responsible person.

## 17. Future module 14: Equipment & Resources

### Planned capabilities

- Camera, video, lighting, audio, drone, computer, and vehicle inventory
- Availability and reservations
- Event allocation
- Checkout and return
- Maintenance and readiness
- Qualification or permission constraints

### Boundary

People remain in Crew Directory. Physical assets belong here.

## 18. Future module 15: Chen Media OS Platform Adapter

### Purpose

Replace standalone platform services with shared Chen Media OS capabilities without changing FrameOps business logic.

### Likely mappings

- FrameOps organizations → Chen Media OS organizations
- FrameOps users → shared identity and SSO
- Crew people → HR employee and freelancer records
- Clients and contacts → shared CRM/customer records
- Documents → shared files
- Communications → shared notifications
- Commercial summaries → finance and reporting
- Timekeeping → workforce module
- HMS/KS links → safety and quality module

## 19. What should not become standalone modules

### Dashboard

The dashboard is a composed read view across Event Core, Staffing, Coverage, Publishing, Production, and Commercial Control. It should not own event data.

### Event card

The card is a presentation of the event summary and readiness results. It is not a business module.

### AI

AI supports extraction and recommendations. It does not own accepted business decisions.

### Warnings

Warnings belong to the module that understands the rule. A central read model can display them together.

### Files

File storage is a platform capability. Contracts, schedules, references, and evidence remain owned by the relevant business module through references and metadata.

## 20. Recommended implementation structure

The exact language and framework are not yet chosen, but the codebase should reflect module ownership.

```text
frameops/
  modules/
    events-intake/
    crew-staffing/
    agenda-coverage/
    publishing-field/
    deliverables-production/
    commercial/
  platform/
    identity-access/
    communications-links/
    documents-intelligence-rules/
    integrations/
    audit/
  read-models/
    dashboard/
    event-command-center/
  shared/
    ids/
    time/
    money/
    result-types/
```

### Shared-code warning

Keep `shared/` intentionally small. Business rules must remain inside their owning module. A large shared folder is usually a sign that module boundaries are being bypassed.

## 21. Module communication rules

### Direct queries

Use direct module service calls for immediate reads needed by the current action, such as Coverage asking Staffing whether a person is available.

### Commands

Send an explicit command when another module must perform a state change, such as Publishing asking Communications to send acknowledgement requests.

### Domain events

Publish domain events when several consumers may react independently, such as:

- `event.created`
- `staffing.person_confirmed`
- `agenda.changes_accepted`
- `coverage.assignment_changed`
- `plan.published`
- `deliverable.delivered`

In the modular monolith, these events may run in-process. Their contracts should still be explicit so they can later connect to Chen Media OS.

### Data ownership rule

One module is the source of truth for each record. Other modules may store IDs and projections but must not update another module’s tables directly.

## 22. Dependency rules

Allowed business flow:

```text
Event Core
  ├── Crew & Staffing
  ├── Agenda & Coverage
  └── Deliverables & Production

Crew & Staffing ──▶ Agenda & Coverage
Agenda & Coverage ──▶ Publishing & Field
Deliverables & Production ──▶ Agenda & Coverage (requests protected blocks)
Commercial Control ◀── Crew & Staffing / Deliverables & Production
```

Avoid circular ownership:

- Coverage may reference a confirmed crew ID but cannot change the person’s staffing status.
- Production may request a protected editing block but cannot directly create coverage assignments.
- Commercial may calculate costs but cannot confirm a freelancer.
- Publishing may expose a plan but cannot rewrite the source agenda.

## 23. Recommended build sequence

### Milestone 0: Platform foundation

Build:

- Organizations and admin access
- Permission framework
- Durable IDs
- Audit mechanism
- File metadata and source storage
- Module boundaries

Expected result: a safe foundation that can later map into Chen Media OS.

### Milestone 1: Event Core & Intake

Build:

- Manual event creation
- Contract upload
- Extracted-fact review
- Event status
- Compact and team event-card projections
- Missing-information warnings

Expected result: a signed job becomes a usable reviewed event.

### Milestone 2: Crew, Staffing & Minimal Commercial

Build:

- Employee and freelancer directory
- Roles and qualifications
- Rate cards and event-specific rates
- Availability email and secure response link
- Staffing states
- Preliminary crew recommendation
- Contracted, recommended, and allocated comparison

Expected result: the event has a confirmed team and expected cost.

### Milestone 3: Agenda & Coverage

Build:

- Manual agenda
- Document import
- Agenda versioning and comparison
- Coverage review states
- Priorities by photo/video
- Coverage assignments
- Core conflict detection
- Buffers, travel, protected editing, and backup blocks

Expected result: the owner can produce a conflict-aware working coverage plan.

### Milestone 4: Publishing & Field Operations

Build:

- Plan versions
- Personal and complete schedules
- Secure links
- Acknowledgements
- Material changes
- Lead editing permissions
- Offline mobile view
- PDF output
- WhatsApp link and generated update text

Expected result: each crew member receives and acknowledges a practical field schedule.

### Milestone 5: Deliverables & Production

Build:

- Deliverables and fixed deadlines
- Production timeline
- Editing ownership and protected blocks
- Continuous-delivery checkpoints
- Backup and handoff confirmation
- Revision allowance
- Pixieset, Picflow, and Frame.io links
- Naming and handoff instructions

Expected result: capture and post-production commitments share one operational timeline.

### Milestone 6: Pilot hardening

Build or refine:

- Warning quality
- Import reliability
- Mobile performance
- Offline synchronization
- Audit views
- Permissions
- Export and recovery

Expected result: FrameOps can safely operate a real multi-room photo-and-video event.

## 24. MVP release slices

If a smaller first release is needed, divide the MVP into three usable slices.

### Slice A: Signed job to staffed event

- Event intake
- Contract extraction and review
- Event cards
- Crew directory
- Availability and pricing
- Confirmed event team

### Slice B: Agenda to coverage plan

- Schedule import and versions
- Coverage review
- Priorities
- Assignments
- Conflict detection
- Buffers and travel

### Slice C: Published plan to delivery readiness

- Mobile run sheets
- Acknowledgements
- Material changes
- Offline and PDF
- Deliverables and production timeline

Each slice produces a coherent operational outcome rather than only technical infrastructure.

## 25. Module readiness checklist

Before implementing a module, confirm:

1. Its responsibility can be stated in one sentence.
2. Its owned data is listed.
3. It has no need to update another module’s tables directly.
4. Its required inputs and outputs are explicit.
5. Admin, lead, crew, and future client permissions are defined.
6. Audit requirements are defined.
7. Failure of an external integration has a manual fallback.
8. The module can remain useful when FrameOps moves into Chen Media OS.

## 26. Recommended immediate planning artifacts

Create these next, in order:

1. **Module-level user stories** for Milestones 1–4.
2. **Domain model** showing IDs, ownership, and relationships.
3. **Event-state and publishing-state diagrams.**
4. **Wireframes** for event intake, dashboard, staffing, coverage planner, and mobile run sheet.
5. **API and domain-event contracts** only after the user flows are stable.

Do not design the future client, timekeeping, HMS/KS, or equipment modules in implementation detail until the core event workflow has been piloted.
