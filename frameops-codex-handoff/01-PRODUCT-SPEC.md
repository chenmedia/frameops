# FrameOps Final Product Specification

**Version:** 1.0  
**Status:** Final product definition for MVP planning  
**Product owner:** Kai / Chen Media  
**Last updated:** 18 October 2026  
**Supersedes:** Earlier FrameOps product-requirements and module-boundary drafts  

## 1. Product summary

FrameOps is a standalone event photo and video operations application. It begins when a deal is signed and turns contracts, email correspondence, changing event schedules, staffing availability, and coverage priorities into one reliable operational plan.

FrameOps answers:

1. What has Chen Media agreed to deliver?
2. What operational information is missing or contradictory?
3. How many photographers, videographers, and supporting roles are needed?
4. Who is available, suitable, and confirmed?
5. Who covers each stage, session, location, and priority moment?
6. Does every crew member have the latest practical schedule?
7. Is enough time allocated for travel, setup, editing, backup, and delivery?

FrameOps will operate independently at first and later become a specialist module inside Chen Media OS.

### Product statement

> **FrameOps converts signed event work into a staffed, versioned, conflict-aware coverage plan and gives every crew member the practical schedule they need to deliver it.**

## 2. Product boundary

### FrameOps permanently owns

- Event operational intake
- Contract and email interpretation
- Event-specific staffing
- Agenda versions and review
- Photo and video coverage planning
- Priorities, assignments, buffers, and conflicts
- Plan publishing and acknowledgement
- Mobile, offline, and printable run sheets
- Event deliverables and production coordination
- Event-level planned budget and cost view

### FrameOps temporarily provides while standalone

- Thin employee and freelancer directory
- Basic availability
- Role-specific rate cards
- Client and contact snapshots
- Organization settings
- Email, secure links, documents, and audit

These capabilities must be replaceable by Chen Media OS providers later.

### Chen Media OS owns later

- Master people and HR records
- Formal absence and organization-wide availability
- Actual timekeeping, overtime, additions, time bank, and payroll exports
- Expenses and reimbursements
- Billing cockpit and financial reporting
- Cross-project people and equipment planning
- Equipment and vehicle register
- Electronic site crew register
- HMS and KS case management
- Shared identity, documents, notifications, audit, and integrations

### External systems remain authoritative

| System | Responsibility |
|---|---|
| HubSpot | Leads, opportunities, sales history, companies, contacts, and deal status |
| Pixieset | Standard photo-gallery delivery |
| Picflow | Continuous photo-delivery workflow |
| Frame.io | Video review, revisions, and delivery |
| Google Maps | Estimated travel time between separate locations |
| Future Fiken integration | Accounting and invoicing workflows through Chen Media OS |

## 3. Problem statement

After a job is sold, its operational information is distributed across contracts, long email threads, attachments, schedule files, spreadsheets, and messaging channels.

The final agenda often arrives after signing and is revised several times. Contracted crew may no longer be sufficient once overlapping sessions, multiple stages, travel time, photo/video differences, or rapid delivery commitments are understood.

The owner must manually:

- Read and re-enter contract details
- Identify missing information
- Ask freelancers about availability and price
- Compare schedule versions
- Decide which moments need coverage
- Allocate people across overlapping sessions
- Account for setup, travel, editing, breaks, and backup
- Produce separate schedules for each crew member
- Communicate and confirm late changes

This creates administrative overhead and increases the risk of missed moments, unrealistic staffing, delayed delivery, accidental overtime, and confused crew.

## 4. Goals

### Primary goals

- Reduce administrative work between signing and event delivery.
- Create a trustworthy event brief from unstructured material.
- Surface missing information and conflicting commitments early.
- Recommend realistic staffing without making commitments automatically.
- Prevent uncovered priorities, overlaps, and impossible transitions.
- Give crew a clear, acknowledged schedule designed for phone use.
- Coordinate capture and delivery obligations on one operational timeline.
- Prepare the product for later Chen Media OS integration.

### Non-goals for the MVP

- Replacing HubSpot
- Contract creation or e-signature
- Payroll or timekeeping
- Absence management
- Expense reimbursement
- Billing or accounting
- Equipment inventory
- Electronic site attendance
- Full HMS/KS case management
- Media ingest, storage, renaming, transfer, or gallery hosting
- Full client portal
- Organization-wide resource planning

## 5. Users and permissions

### Administrator / owner

- Full event access
- Commercial information
- Event intake and planning
- Crew selection and confirmation
- Full publishing authority
- Warning overrides with reasons

### Coordinator

- Assigned-event operations
- Staffing and coverage permissions as granted
- Publishing authority as granted
- No commercial information unless explicitly granted

### Lead photographer

- Complete published event schedule
- Photography assignments
- Immediate adjustment of photography assignments
- Team contacts required for operations
- No commercial information

### Lead videographer

- Complete published event schedule
- Video assignments
- Immediate adjustment of video assignments
- Team contacts required for operations
- No commercial information

### Crew member / freelancer

- Secure-link availability and assignment response
- Personal and complete published schedules
- Acknowledgement
- Required contacts and field information
- No drafts or commercial information

### Future client collaborator

- Planned after the MVP
- Proposed schedule uploads, priorities, comments, and plan approval
- No direct publication to crew

## 6. Product principles

1. **Coverage is the core.** FrameOps is not a generic CRM or task manager.
2. **One operational plan, several views.** Admin, lead, crew, PDF, and future client views derive from one source.
3. **Suggestions remain proposals.** AI can extract and recommend but cannot confirm commercial facts, crew, priorities, or assignments.
4. **Contracted, recommended, and allocated are different.** Always show them separately.
5. **Drafts remain private.** Crew only see published versions.
6. **Changes are explicit.** Material changes identify affected people and require renewed acknowledgement.
7. **Field interaction stays minimal.** Crew read, navigate, acknowledge, and report important issues rather than continuously updating statuses.
8. **Offline is a reliability requirement.** The last published schedule remains usable without connectivity.
9. **Shared business functions stay outside FrameOps.** Use thin adapters until Chen Media OS provides them.

## 7. Final module structure

FrameOps is a modular monolith containing five business modules and supporting platform services.

### Business modules

1. Event Intake
2. Event Staffing
3. Agenda & Coverage
4. Publishing & Field Operations
5. Deliverables & Production

### Supporting services

- Thin People and Rates provider
- Identity and permissions
- Documents and source evidence
- Communications and secure links
- Rules and recommendation engine
- Integration adapters
- Audit history

The dashboard and event command center are composed interfaces, not data-owning modules.

## 8. End-to-end event lifecycle

```text
Signed deal
  → Event intake
  → Intake review
  → Preliminary staffing
  → Availability and pricing
  → Crew confirmation
  → Agenda import
  → Agenda review
  → Coverage planning
  → Client approval recorded
  → Plan publication
  → Crew acknowledgement
  → Event execution and changes
  → Production and delivery
  → Event archive
```

## 9. Module 1: Event Intake

### Purpose

Turn a signed job and its source material into a reviewed operational event.

### 9.1 Event creation

#### MVP

- The deal remains in HubSpot before signing.
- An administrator manually creates the FrameOps event after signing.
- The administrator records or pastes the HubSpot deal link.
- The administrator uploads the signed contract and relevant source material.

#### Later

- A HubSpot adapter automatically creates a draft event from a configurable signed or closed-won trigger.
- Duplicate creation is prevented using the external deal ID.

### 9.2 Supported sources

- Signed contract or proposal
- Email thread or pasted correspondence
- PDF
- Excel
- Google Sheets link or export
- Word document
- Other event attachments

### 9.3 Extraction categories

Each extracted item is classified as:

- **Confirmed:** Explicitly supported by a source.
- **Inferred:** Reasonable but requires confirmation.
- **Missing:** Required for operations but not found.
- **Conflicting:** Sources disagree.

The source passage or document location remains visible. An administrator can accept, edit, or reject every proposed value.

### 9.4 Extracted event information

- Event name and type
- Client and company
- HubSpot deal reference
- Photography, video, or both
- Dates, coverage hours, and time zone
- Venues and locations
- Client and on-site contacts
- Contracted team count and roles
- Deliverables and deadlines
- Same-day, next-day, or continuous-delivery commitments
- Travel and accommodation
- Access and accreditation
- VIPs, speakers, sponsors, and known priorities
- Restrictions and special requirements
- Editing and revision commitments
- Commercial information required for planning

### 9.5 Source hierarchy

- The signed contract is the commercial baseline.
- Later messages may contain updated operational details.
- An apparent contradiction is flagged rather than silently resolved.
- Client approval does not automatically alter a signed commercial obligation.

### 9.6 Event statuses

- Intake — needs review
- Needs client information
- Ready for staffing
- Staffing in progress
- Ready for coverage planning
- Coverage plan in draft
- Awaiting client approval
- Published
- In progress
- Post-production
- Delivered
- Archived

### 9.7 Event dashboard

#### Compact view

- Event name
- Client
- Date
- Coverage hours
- Location or location count
- Photo, Video, or Photo + Video
- Allocated crew count
- Recommended crew range
- Highest-priority warning
- Next action

#### Team view

Adds:

- Crew names
- Roles
- Confirmation state
- Open positions
- Contracted, recommended, and allocated counts by discipline

### 9.8 Required warnings

- Insufficient crew
- Missing schedule
- Uncovered Must cover or Important item
- Unconfirmed critical crew
- Conflicting time or location information
- Missing client or on-site contact
- Missing access, accreditation, or travel information
- Contracted deliverable absent from the operational plan
- Unrealistic delivery commitment

Warnings appear early and increase in urgency as the event approaches or planning becomes blocked.

## 10. Module 2: Event Staffing

### Purpose

Define event roles, recommend suitable people, check availability and price, and confirm the event team.

### 10.1 Initial roles

- Lead photographer
- Lead videographer
- Photographer
- Videographer
- Photo assistant
- Assistant
- Drone operator
- On-site editor

Roles remain configurable and extensible.

### 10.2 Multi-role people

- One person may have several qualifications.
- One person may perform several roles during one event.
- Every coverage assignment still identifies the active role.
- The planner detects overlapping multi-role assignments.

### 10.3 Thin standalone people directory

Store only what FrameOps needs:

- Name and contact information
- Employee or freelancer
- Roles and skills
- Relevant experience
- Private administrator ranking
- Relevant owned gear tags
- Photographer handle
- Active or inactive state

Kai is the current in-house employee and should be suggested for suitable lead assignments when available.

Later, Chen Media OS owns master people records; FrameOps retains event-specific references and history.

### 10.4 Staffing stages

- Suggested
- Availability requested
- Available
- Held
- Confirmed
- Declined
- Cancelled

Availability does not mean booked. Only the appropriate confirmed state counts as allocated.

### 10.5 Availability and pricing request

The first-version request is sent by email and answered through a secure FrameOps link without an account.

Show:

- Event date
- Approximate hours
- Role
- Location
- Editing expectations
- Proposed rate or request for price
- Response deadline

The administrator confirms the actual assignment separately.

### 10.6 Availability detail

- Whole-event availability is the default.
- When few suitable people are available, show exact busy and free periods.
- Partial availability may make someone suitable for specific coverage blocks.
- Existing FrameOps events prevent double booking.
- Future Chen Media OS Resource Plan provides company-wide availability.

### 10.7 Candidate recommendations

Recommendations consider:

- Role suitability
- Whole-event or time-specific availability
- Relevant experience
- Private personal ranking
- Relevant gear
- Location and travel feasibility
- Expected cost
- Existing conflicts

Recommendations explain their reasoning. They never send messages or commit a person automatically.

### 10.8 Staffing estimate

#### Before the detailed agenda

Return a preliminary range based on:

- Photo, video, or both
- Coverage hours
- Known locations
- Vague agenda
- Contracted deliverables
- Known priorities

#### After agenda review

Recalculate from:

- Stages, rooms, and locations
- Simultaneous program elements
- Separate photo and video requirements
- Priority moments
- Travel and setup
- Editing and rapid-delivery commitments

Always display:

- Contracted crew
- Recommended crew
- Allocated crew
- Reason for any difference

### 10.9 Rates

Supported types:

- Hourly
- Half-day: 4 working hours
- Full day: 8 working hours
- Custom fixed price

Rules:

- One person may have different rates by role.
- Editing-included status is explicit.
- Event-specific pricing can override the default without changing it.
- Overtime is estimated with an hourly rate.
- Additional categories include travel, accommodation, meals, parking, and equipment rental.
- Rates and rankings are admin-only.

Actual hours and overtime calculation belong to the future Chen Media OS Time & Compensation module.

## 11. Module 3: Agenda & Coverage

### Purpose

Turn changing client schedules into a reviewed, prioritized, conflict-aware photo and video coverage plan.

### 11.1 Agenda sources

- Email
- PDF
- Excel
- Google Sheets
- Word
- Manual entry

The original source and import metadata are retained.

### 11.2 Versioning

- Every imported agenda becomes an immutable version.
- A new version is compared with the current working version.
- Detect additions, removals, renames, time changes, location changes, and other edits.
- Incoming changes remain proposed until accepted.
- Accepted changes identify affected coverage, crew, travel, buffers, and deliverables.

### 11.3 Agenda review states

- Not reviewed
- Coverage required
- Coverage not required
- Undecided

Every imported item starts in review. FrameOps may suggest a state, discipline, and priority but cannot confirm it automatically.

### 11.4 Priorities

- Must cover
- Important
- Standard
- Optional

The client normally leads priorities, with professional advice from Chen Media. Photo and video may have different priorities for the same agenda item.

Record who changed a priority and why when relevant.

### 11.5 Coverage planning view

Display agenda items on a timeline grouped by:

- Day
- Venue
- Stage
- Room
- Track
- Location

Allow filtering by:

- Photo or video
- Priority
- Person
- Role
- Assignment state
- Warning

### 11.6 Coverage assignment

Each assignment contains:

- Person
- Active role
- Photo or video discipline
- Agenda item or operational block
- Start and end time
- Location
- Priority
- Must-capture notes
- Named people or VIPs
- Setup and movement requirement
- Handoff or delivery responsibility

### 11.7 Buffer model

Supported blocks:

- Event arrival and check-in
- Assignment preparation
- Movement and travel
- Crew handoff or overlap
- Protected editing
- File ingest and backup
- Equipment reset
- Meal and rest break
- Drone preparation and compliance

Rules:

- Each event has defaults with assignment-level overrides.
- Standard photo and video preparation defaults to 30 minutes.
- Interviews, rigging, and specialist work may use custom setup.
- Meal and rest breaks are suggested and adjustable.
- End-of-production-day backup is suggested.

### 11.8 Travel

- Google Maps estimates travel between separate locations.
- Store transport mode and calculation time.
- Allow manual override and extra padding.
- Calculate and show recommended departure time.
- Indoor room-to-room travel does not require a reusable venue matrix in the MVP.

### 11.9 Drone work

Drone assignments use a dedicated preparation and compliance block informed by Chen Media’s drone handbook.

May include:

- Permission check
- Site or airspace constraint
- Weather suitability
- Safety preparation
- Responsible operator

The full handbook and competence register later belong to Chen Media OS HMS/KS.

### 11.10 Conflict detection

Detect:

- Uncovered Must cover or Important requirement
- Overlapping assignments
- Person unavailable for all or part of a block
- Insufficient travel or setup time
- Coverage conflicting with protected editing
- Missing qualified role
- Drone work without required preparation
- Missing meal or rest opportunity on a long event
- Delivery commitment without editor, workstation, ingest, or production time
- Unconfirmed person assigned to a critical item

FrameOps warns and suggests alternatives. It does not silently reassign people.

Authorized users may override a warning with a reason.

## 12. Module 4: Publishing & Field Operations

### Purpose

Convert the working coverage plan into a stable, acknowledged, mobile field schedule.

### 12.1 Publishing

- Crew see only published plans.
- Publishing creates an immutable numbered version.
- Draft work remains private.
- Preview affected recipients before publication.
- Send each crew member a secure schedule link.
- Track delivery and acknowledgement.

### 12.2 Crew views

Crew can switch between:

- Personal assignments
- Complete published event schedule

Provide:

- Mobile view
- Offline view
- Personal PDF
- Complete-event PDF where permitted

### 12.3 Mobile layout

- Now
- Next
- Later
- Updates since last acknowledgement

### 12.4 Assignment information

- Start and end time
- Role
- Priority
- Program item
- Location and address
- Map link
- Departure time
- Setup requirement
- Must-capture notes
- VIPs and named subjects
- Client, coordinator, and on-site contacts
- Access instructions
- Handoff and delivery responsibility
- Reference images

### 12.5 Offline behavior

- Cache the latest published personal and complete schedule.
- Cache essential reference images selected for field use.
- Show last synchronization time.
- Warn when a newer version may exist.
- Keep addresses and written instructions readable without maps.

### 12.6 Acknowledgements

- Every assigned crew member acknowledges the published plan.
- Store person, version, and acknowledgement time.
- Affected crew acknowledge material changes again.

### 12.7 Material changes

A material change affects what a person must do, where or when they must do it, or whether an important obligation is covered.

Includes:

- Assignment added, removed, or reassigned
- Start, end, call, departure, or deadline changed
- Room, stage, venue, or meeting point changed
- Role or responsibility changed
- Priority changed to or from Must cover or Important
- Must-capture requirement, named subject, shot list, or video requirement changed
- Access, accreditation, safety, or travel instruction changed in a way that affects execution
- Editing, backup, handoff, or delivery responsibility changed

Cosmetic edits do not require renewed acknowledgement. Authorized users may change the classification with a recorded reason.

### 12.8 Lead permissions

- Lead photographers may change photography assignments.
- Lead videographers may change video assignments.
- Changes go live immediately.
- Every change is audited.
- Material changes trigger notification and acknowledgement.
- Leads do not gain access to commercial information.

### 12.9 Contact visibility

- All confirmed crew see the coordinator and emergency or on-site contacts.
- Leads see the complete event-team contact list.
- Other crew see the people needed for coordination and handoff.
- Personal phone numbers are shared only within the confirmed team.
- Private notes, rates, and rankings remain admin-only.

### 12.10 Interaction model

Crew are not required to mark routine assignments started or completed. There is insufficient time for repetitive event-day administration.

The field experience prioritizes:

- Reading
- Navigation
- Acknowledgement
- Important updates
- Reporting a serious issue through a future HMS/KS integration

### 12.11 WhatsApp

- Store the event WhatsApp group link.
- Generate a ready-to-paste update containing affected people, concise changes, and the current schedule link.
- Native WhatsApp automation is post-MVP.

## 13. Module 5: Deliverables & Production

### Purpose

Track contractual event outputs and the operational work required from capture through delivery.

### 13.1 Photography

- Deliver the best curated highlights.
- Support continuous, same-day, and next-day delivery.
- Continuous batches do not require a standard image count.
- Coordinate checkpoints with the client’s social-media team.

Each checkpoint records:

- Internal owner
- Client coordinating contact
- Destination
- Exact deadline and time zone
- Required production blocks

### 13.2 Video

Initial deliverable types:

- Recap video
- Recap video with interviews
- Vertical social clips

The model remains extensible.

### 13.3 Workflow

- Capture
- Ingest
- Backup
- Selection
- Editing
- Review
- Delivered

Steps may be skipped or combined when irrelevant.

### 13.4 Ownership and scheduling

- Every deliverable has an owner, fixed deadline, time zone, and status.
- Editing responsibility and workstation plan are explicit.
- The capture person usually edits but another editor may be assigned.
- Protected editing blocks prevent simultaneous coverage unless an admin overrides the warning.
- FrameOps proposes a timeline from event start through delivery.
- Warn when turnaround is unrealistic for the allocated team.

### 13.5 Video revisions

- One revision is included.
- Additional revisions are chargeable.
- Track included allowance, used revisions, additional revisions, editor, review deadline, and final deadline.
- Additional-revision pricing is admin-only.

### 13.6 Delivery destinations

- Pixieset for standard photo galleries
- Picflow for continuous photography delivery
- Frame.io for video review and final delivery

The MVP stores links and statuses. It does not transfer files.

### 13.7 Filename convention

Template:

`YYYYMMDD_HHMM_ChenMedia_EVENTNAME_KEYWORD_ORIGINALSUFFIX_PHOTOGRAPHERHANDLE`

Example:

`20261018_1430_ChenMedia_ByggReisDeg26_Stands_00485_@iamkaichen`

FrameOps generates instructions. Automatic renaming remains outside the MVP.

### 13.8 Handoff instructions

Generate an event-specific handoff brief containing:

- Responsible person
- Source files
- Naming template
- Destination
- Deadline
- Backup requirement
- Confirmation requirement

Crew may confirm end-of-day backup and handoff.

## 14. Event-level commercial view

FrameOps needs limited commercial context for planning.

### Store

- Contract value reference
- Combined or separate photo/video budget
- Internal photo/video allocation
- Expected crew cost
- Planned additional costs
- Projected event margin

### Do not store as authoritative finance

- Actual payroll
- Actual time cost
- Reimbursements
- Invoice status
- Accounting entries
- Tax data

### Permissions

Only administrators can view:

- Rates
- Costs
- Budgets
- Internal split
- Projected margin
- Chargeable additional revisions

## 15. Supporting services

### 15.1 Identity and organizations

- Standalone FrameOps accounts initially
- Organization-aware data
- Authentication identity separated from person identity
- Future Chen Media OS single sign-on

### 15.2 Documents

- Contracts
- Email source material
- Schedules
- Reference images
- Approval evidence

FrameOps owns document relationships; the storage provider is replaceable.

### 15.3 Communications and secure links

- Email is the MVP channel.
- Links are recipient-scoped, revocable, and expiring.
- Freelancers and crew do not require accounts.
- Message delivery and response are auditable.

### 15.4 Intelligence and rules

- Contract extraction
- Email interpretation
- Schedule parsing and comparison
- Staffing suggestions
- Coverage suggestions
- Warning evaluation

All outputs retain evidence or explanation and remain proposals until accepted.

### 15.5 Audit

Record:

- Actor
- Time
- Module
- Object
- Previous and new value where relevant
- Source or reason
- Published plan version affected

Audit applies to intake decisions, staffing commitments, agenda acceptance, assignment changes, publishing, acknowledgements, lead changes, and overrides.

## 16. Integrations

### MVP adapters

- Email
- Google Maps
- Google Sheets import or link
- External delivery links
- HubSpot deal reference

### Post-MVP adapters

- Automatic HubSpot event creation
- Native Google Sheets synchronization
- WhatsApp automation
- Pixieset project or gallery creation
- Picflow project creation
- Frame.io project or review creation
- Slack distribution

### Adapter rule

Business modules must not call vendor-specific SDKs directly. Integrations translate between the vendor and a stable FrameOps contract.

## 17. Core objects

| Object | Owner |
|---|---|
| Organization | Identity service |
| User | Identity service |
| Person reference | Thin People provider, later Chen Media OS |
| Crew role | Event Staffing |
| Event | Event Intake |
| Source document | Documents service with Event Intake relationship |
| Extracted fact | Event Intake |
| Venue or location | Event Intake |
| Staffing requirement | Event Staffing |
| Availability response | Event Staffing |
| Event price snapshot | Event Staffing / commercial view |
| Agenda version | Agenda & Coverage |
| Agenda item | Agenda & Coverage |
| Coverage requirement | Agenda & Coverage |
| Coverage assignment | Agenda & Coverage |
| Plan version | Publishing & Field Operations |
| Acknowledgement | Publishing & Field Operations |
| Deliverable | Deliverables & Production |
| Production block | Deliverables & Production with Coverage projection |
| Warning | Owning business module, aggregated in the dashboard |
| Audit entry | Audit service |

## 18. Readiness model

Do not hide readiness behind one unexplained score. Show separate dimensions:

- Brief completeness
- Schedule readiness
- Staffing readiness
- Coverage readiness
- Delivery readiness
- Acknowledgement readiness

Each dimension shows its blocking issues and next action.

## 19. MVP requirements

### P0 — required for the first live pilot

#### Event intake

- Manual event creation after signing
- Contract upload and extraction
- Source-linked review
- Missing and conflicting information
- Photo, video, or combined event
- Event cards and warnings

#### Staffing

- Thin employee and freelancer directory
- Roles and qualifications
- Rate cards and event price snapshots
- Availability request by email
- Secure accountless response
- Staffing states
- Preliminary staffing recommendation
- Contracted, recommended, and allocated comparison

#### Agenda and coverage

- Manual agenda and common document import
- Immutable schedule versions
- Version comparison and review
- Photo/video coverage requirement
- Priority levels
- Coverage assignments
- Conflict detection
- Setup, travel, protected editing, breaks, backup, and drone blocks
- Google Maps travel estimate

#### Publishing and field operations

- Immutable published versions
- Personal and complete event schedules
- Acknowledgements
- Material-change re-acknowledgement
- Lead photo/video editing by discipline
- Mobile view
- Offline latest schedule
- PDF output
- WhatsApp group link and update generator

#### Deliverables

- Deliverable owner and deadline
- Production workflow states
- Editing ownership and protected blocks
- Continuous-delivery checkpoints
- Revision tracking
- Backup and handoff confirmation
- Pixieset, Picflow, and Frame.io links
- Naming and handoff instructions

#### Security and audit

- Role-based access
- Admin-only commercial information
- Revocable secure links
- Audit trail
- Organization isolation

### P1 — after operational pilot

- Automatic HubSpot event creation
- Deeper email-thread ingestion
- Google Sheets synchronization
- Refined recommendation ranking
- Reusable event and venue templates
- Native notification channels
- Delivery-platform project creation
- Optional freelancer accounts
- Client collaboration module

### P2 — Chen Media OS dependencies

- Shared People Directory
- Resource Plan
- Time & Compensation
- Absence & Availability
- Expenses & Reimbursements
- Billing & Reporting
- Equipment & Vehicles
- Electronic Site Crew Register
- HMS & KS
- Shared identity, documents, notifications, audit, and integration hub

## 20. Explicitly excluded from the FrameOps MVP

- Clock in and out
- Actual-time entry
- Overtime rules and additions
- Time bank
- Payroll or contractor-fee export
- Holiday and sickness administration
- Expense receipts and reimbursement
- Mark as invoiced
- Fiken export
- Company-wide resource calendar
- Equipment service and vehicle logs
- QR or geofence check-in
- HMS/KS case workflow
- Cross-company analytics
- Media transfer or hosting
- Native CRM

## 21. Non-functional requirements

### Reliability

- Latest published schedule available offline
- Printable fallback
- Clear sync status
- Manual fallback when an integration fails

### Performance

- Mobile schedule optimized for weak connections
- Fast loading of current and next assignments
- Large agenda handled without blocking basic navigation

### Security and privacy

- Organization and event isolation
- Least-privilege access
- Admin-only commercial data
- Revocable secure links
- Controlled crew contact visibility
- Audit of sensitive operational changes

### Accessibility

- No color-only status signals
- Clear priority labels
- Accessible contrast
- Keyboard-capable planning interfaces
- Readable mobile typography

### Time and localization

- Event time zone stored explicitly
- Deadlines include exact time and time zone
- Dates and times presented consistently

### Data portability

- Export events, agendas, assignments, acknowledgements, contacts, deliverables, and planned commercial information
- Preserve source provenance

## 22. Success measures

Baselines and targets are set during the pilot.

### Primary measure

- Time from receiving usable source material to publishing a complete coverage plan. Establish the baseline and target during the pilot.

### Supporting measures

- Administrative time per event
- Percentage of Must cover and Important requirements assigned before the event
- Conflicts resolved before publication
- Crew acknowledgement before call time
- Clarification messages per crew member
- Missed priority moments caused by coordination failure
- Time required to process a schedule revision
- Unplanned overtime caused by scheduling conflicts
- Deliverables completed by fixed deadlines
- Repeat use across successive events

### Guardrails

- Incorrect extraction accepted without evidence
- Wrong recipient receives a secure link
- Commercial data exposed to crew or clients
- Excessive or low-value alerts
- Duplicate work between FrameOps and another system

## 23. MVP acceptance criteria

The MVP is ready for a live pilot when:

1. An administrator can create a reviewed event from a signed contract.
2. Extracted information links back to its source.
3. Photo, video, combined services, budgets, and deliverables are represented correctly.
4. The dashboard shows practical readiness and warnings.
5. An employee or freelancer can be suggested by role and availability.
6. A freelancer can respond through a secure email link without an account.
7. Contracted, recommended, and allocated crew are clearly separated.
8. A schedule can be imported, reviewed, versioned, and compared.
9. Photo and video priorities can differ for the same agenda item.
10. The planner detects uncovered priorities, overlaps, unavailability, insufficient travel/setup, and protected-editing conflicts.
11. A plan can be published and acknowledged.
12. Crew can switch between personal and complete schedules.
13. The latest schedule works offline and as a PDF.
14. Material changes notify affected crew and require renewed acknowledgement.
15. Leads can immediately adjust assignments within their discipline with audit history.
16. Deliverables, production blocks, revisions, backup, and destination links are tracked.
17. Commercial information remains admin-only.
18. Core workflows remain usable when an optional integration is unavailable.

## 24. Recommended implementation sequence

### Milestone 0 — Foundation

- Organization and admin access
- Permissions
- Stable IDs
- Module boundaries
- Documents
- Audit

### Milestone 1 — Signed job to reviewed event

- Event creation
- Contract extraction and review
- Event status
- Event cards
- Missing-information warnings

### Milestone 2 — Reviewed event to confirmed team

- Thin people directory
- Roles and rate cards
- Availability requests
- Secure responses
- Candidate suggestions
- Staffing confirmation
- Planned cost

### Milestone 3 — Agenda to coverage plan

- Agenda import
- Version comparison
- Review states and priorities
- Coverage assignments
- Conflict detection
- Buffers, travel, protected editing, and backup

### Milestone 4 — Coverage plan to crew run sheets

- Publishing
- Personal and complete schedules
- Acknowledgements
- Material changes
- Lead permissions
- Offline view
- PDF
- WhatsApp update generator

### Milestone 5 — Capture to delivery readiness

- Deliverables
- Production blocks
- Editing and revisions
- Continuous-delivery checkpoints
- Backup and handoff
- Destination links
- Naming instructions

### Milestone 6 — Pilot hardening

- Import quality
- Warning quality
- Offline reliability
- Mobile performance
- Permissions
- Audit visibility
- Recovery and exports

## 25. Pilot plan

### Historical validation

Use previous contracts, email threads, schedule versions, freelancer arrangements, and completed deliverables to test extraction and planning without event-day risk.

### Live pilot profile

Choose an event containing:

- Photo and video
- More than one role
- Multiple rooms, stages, or locations
- Simultaneous program items
- At least one Must cover requirement
- Schedule revision
- Setup or travel constraint
- Same-day or continuous photo delivery
- Video review and revision
- Material change after publication

### Pilot evaluation

- Measure saved administrative time.
- Record false or weak warnings.
- Observe where manual work is still duplicated.
- Test offline use at the venue.
- Validate whether crew understand the run sheet without explanation.
- Confirm that suggested staffing reflects real operational judgment.

## 26. Standalone-to-Chen-Media-OS migration design

### Provider interfaces

FrameOps should depend on interfaces such as:

- `PeopleProvider`
- `AvailabilityProvider`
- `RateProvider`
- `IdentityProvider`
- `DocumentProvider`
- `NotificationProvider`
- `IntegrationProvider`

The standalone app uses local providers. Chen Media OS later supplies shared providers.

### Stable references

- Use internal FrameOps IDs.
- Store HubSpot and other external IDs separately.
- Preserve event-specific snapshots of agreed rates, contacts, and published information.
- Never allow later master-data changes to rewrite event history.

### Domain events

Useful contracts include:

- `event.created`
- `event.intake_reviewed`
- `staffing.availability_received`
- `staffing.person_confirmed`
- `agenda.version_accepted`
- `coverage.assignment_changed`
- `plan.published`
- `plan.acknowledged`
- `deliverable.delivered`

These may run in-process during the modular-monolith stage.

## 27. Final product decision

FrameOps is the event intelligence and execution layer for Chen Media.

It should remain capable of operating alone, but it must not grow into a second HR, accounting, CRM, resource-management, or compliance platform.

The permanent boundary is:

> **FrameOps owns how a signed photo/video event becomes a staffed coverage plan, an acknowledged field schedule, and a coordinated set of deliverables. Chen Media OS owns the shared people, time, finance, safety, equipment, planning, and platform services around it.**
