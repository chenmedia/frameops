# FrameOps vs. Chen Media OS Boundary Decision

**Purpose:** Decide what FrameOps should own permanently, what it needs temporarily while standalone, and what should wait for Chen Media OS.  
**Status:** Recommended product boundary  
**Last updated:** 18 October 2026  

## 1. Decision summary

FrameOps should retain everything that translates a signed event into a workable photo/video operation:

- Event intake
- Event-specific staffing
- Agenda and coverage planning
- Plan publishing
- Crew run sheets
- Change control
- Event deliverables and production coordination

Chen Media OS should own capabilities that apply across the whole company and across many types of work:

- Master people records
- Formal absence and availability
- Actual time and compensation
- Expenses and reimbursements
- Billing and financial reporting
- Cross-project resource planning
- Equipment and vehicles
- Site crew registers
- HMS and KS
- Identity, documents, notifications, audit, and integrations

While FrameOps is standalone, it needs small local versions of some shared capabilities. These should be designed as replaceable adapters, not developed into full HR, finance, CRM, or asset-management systems.

## 2. The four placement categories

### Category A — Keep permanently in FrameOps

The capability is specific to event photo/video operations and remains part of FrameOps after it joins Chen Media OS.

### Category B — Build a thin standalone version, then use Chen Media OS

FrameOps needs the capability to work now, but Chen Media OS should eventually become the master source. FrameOps retains only event-specific snapshots and references.

### Category C — Defer to Chen Media OS

The capability is not needed to validate the core FrameOps workflow. Do not build a partial version inside FrameOps.

### Category D — Shared platform service

The capability supports FrameOps but is not event-domain logic. Implement it behind an interface so a Chen Media OS service can replace or host it later.

## 3. Category A: keep permanently in FrameOps

These capabilities are FrameOps’ long-term product identity.

### 3.1 Event operational record

Keep:

- Event identity inside operations
- Photo, video, or combined service structure
- Event dates, operating hours, time zone, venues, and event-specific contacts
- Event status and readiness
- Contracted operational scope
- Missing and conflicting event information
- Event dashboard cards and operational warnings

Reason: this is the container for all event-specific planning.

### 3.2 Contract-to-event interpretation

Keep:

- Contract and email extraction workflow
- Confirmed, inferred, missing, and conflicting classifications
- Human review of extracted information
- Event-specific source citations
- Operational questions generated from missing information

Shared document and AI services may process files later, but FrameOps decides what extracted information means for an event.

### 3.3 Event staffing requirements

Keep:

- Roles required for an event
- Contracted crew count
- Recommended crew range
- Allocated event team
- Event-specific holds and confirmations
- Event-specific negotiated role and assignment
- Staffing readiness and warnings

FrameOps should continue to answer: “Who is working this event and in which event role?”

### 3.4 Agenda versions and event schedule review

Keep:

- Event schedule imports
- Agenda versions
- Schedule comparison
- Agenda-item review
- Accepted or rejected operational changes
- Effect of a schedule change on the event plan

Reason: the client’s event schedule is direct input to coverage planning.

### 3.5 Photo and video coverage planning

Keep:

- Coverage requirements
- Must cover, Important, Standard, and Optional priorities
- Separate photo and video priorities
- Assignment of people to stages, rooms, sessions, and moments
- Setup, travel, handoff, protected editing, break, and backup blocks
- Conflict and gap detection
- Suggested reassignments
- Drone preparation within an event

This is FrameOps’ strongest differentiator and should never move into a generic resource planner.

### 3.6 Publishing and field run sheets

Keep:

- Draft and published plan versions
- Personal and complete event schedules
- Now, Next, Later, and Updates views
- Material-change classification
- Acknowledgements
- Lead photographer and videographer assignment edits
- Offline schedules
- Printable run sheets
- Event WhatsApp group reference and generated change text

Reason: these capabilities turn the coverage plan into field execution.

### 3.7 Event deliverables and production coordination

Keep:

- Contracted event deliverables
- Continuous, same-day, and next-day delivery checkpoints
- Event production timeline
- Capture, ingest, backup, selection, editing, review, and delivery status
- Editing ownership
- Protected editing time
- Revision allowance
- Event-specific naming and handoff instructions
- Pixieset, Picflow, and Frame.io destination references

Actual file storage and transfer may live elsewhere, but FrameOps keeps the operational commitment and timeline.

### 3.8 Event-level commercial planning

Keep a narrow operational view:

- Contract value reference
- Photo/video internal budget split
- Expected event crew cost
- Planned additional event costs
- Projected event margin
- Commercial warnings created by the operational plan

FrameOps should not become accounting, but it needs enough commercial context to flag an unaffordable staffing plan.

## 4. Category B: thin standalone version now, Chen Media OS later

These capabilities are required for a useful standalone product but should not grow into separate full systems inside FrameOps.

### 4.1 People directory

FrameOps now needs:

- Name and contact information
- Employee or freelancer classification
- Event roles and skills
- Experience and private ranking
- Relevant owned gear tags
- Photographer handle
- Active or inactive status

Chen Media OS later owns:

- Master employee and contractor records
- Employment and contractor details
- Shared contacts
- Competence and certification records
- Organization-wide status

FrameOps retains:

- Event role
- Event-specific suitability
- Staffing response
- Assignment and event history

### 4.2 Availability

FrameOps now needs:

- Available or unavailable for the whole event
- Optional time-specific availability
- Existing FrameOps event conflicts

Chen Media OS later calculates availability from:

- Formal absence
- Other projects
- Resource reservations
- Freelancer unavailability
- Working-time constraints where relevant

FrameOps retains the availability response made for the specific event.

### 4.3 Rate cards

FrameOps now needs:

- Hourly, half-day, full-day, and custom rates
- Role-specific rates
- Editing-included status
- Event-specific negotiated price
- Expected overtime rate

Chen Media OS later owns shared default rates and commercial terms.

FrameOps retains the agreed price snapshot used for the event so later changes to a person’s default rate do not rewrite history.

### 4.4 Clients and contacts

FrameOps now needs:

- Client name
- Relevant contacts
- Event-specific roles such as decision-maker, social-media contact, and on-site contact
- Contact details required in the field

HubSpot and Chen Media OS later own the master client and contact records.

FrameOps retains event-specific contact roles and a historical snapshot of essential details.

### 4.5 Basic event cost estimate

FrameOps now needs enough cost data to compare the plan with the event budget.

Chen Media OS later owns:

- Actual costs
- Payroll and contractor payments
- Expenses
- Invoicing
- Financial reporting

FrameOps retains the planned budget and cost snapshot.

### 4.6 Organization settings

FrameOps now needs:

- Half-day and full-day definitions
- Default preparation buffers
- Priority labels
- Crew roles
- Filename template
- Basic permission roles

Chen Media OS later provides organization-wide settings and identity while FrameOps keeps event-domain configuration.

## 5. Category C: defer entirely to Chen Media OS

Do not add these to the FrameOps MVP.

### 5.1 Time and compensation

Defer:

- Clock in and out
- Manual actual-time entry
- Overtime calculation
- Additions and allowances
- Time bank
- Multi-level approval
- Weekly locking
- Payroll export
- Contractor-fee export

FrameOps only supplies planned event and assignment times.

### 5.2 Absence management

Defer:

- Self-certified sickness absence
- Medical leave
- Holiday requests
- Time off in lieu
- Absence approval
- Management holiday calendar
- Entitlement logic

FrameOps consumes a resulting availability state later.

### 5.3 Expenses and reimbursements

Defer:

- Receipt submission
- Expense approval
- Reimbursement
- Accounting categories
- Re-invoiceable expense workflow
- Fiken expense export

FrameOps may link an expense to an event but should not own it.

### 5.4 Billing and financial reporting

Defer:

- Unbilled-time cockpit
- Mark as billed
- Customer timesheets
- Invoice preparation
- PDF and CSV financial exports
- Budget-versus-actual reporting
- Fiken invoice or accounting export

FrameOps may expose planned event budget and delivery milestones as inputs.

### 5.5 Formal resource planning

Defer the organization-wide planner:

- Multi-project people capacity
- Equipment reservations
- Absence overlay
- Company-wide day and week planning
- Cross-project conflict resolution

FrameOps still needs a narrow view of other FrameOps event conflicts while standalone.

### 5.6 Equipment and vehicles

Defer:

- Equipment register
- Vehicle register
- Checkout and return
- Mileage log
- Cost log
- Service and maintenance alerts
- Damage and readiness status
- Depreciation and replacement planning

FrameOps may record required equipment types and simple crew-owned gear tags.

### 5.7 Site crew register

Defer:

- QR check-in
- Geofence evidence
- Electronic overview list
- Employees and contractors on one presence list
- Immutable presence history
- Compliance exports and retention

FrameOps supplies the expected event team but does not equate booking with physical presence.

### 5.8 HMS and KS case management

Defer:

- Deviation register
- Type and severity workflow
- Case assignment
- Corrective actions
- Critical alerts
- KS checklist administration
- HMS handbook administration
- Competence register

FrameOps preserves a future “Report issue” entry point with event context.

### 5.9 Full reporting platform

Defer organization-wide analytics across:

- Time
- Expenses
- Invoices
- Absence
- Equipment
- HMS/KS
- Utilization
- Profitability

FrameOps may still include operational event views such as uncovered priorities and acknowledgement status.

## 6. Category D: shared platform services

FrameOps needs these capabilities, but their implementation should sit behind interfaces.

### 6.1 Identity and organizations

Standalone:

- FrameOps accounts and organization membership

Later:

- Chen Media OS single sign-on and shared permissions

Boundary:

- Keep domain person IDs separate from authentication-provider IDs.

### 6.2 Documents and attachments

Standalone:

- Upload and access contracts, schedules, reference images, and approval evidence

Later:

- Chen Media OS shared document storage

Boundary:

- FrameOps owns the meaning and relationship; the platform owns file storage.

### 6.3 Communications and secure links

Standalone:

- Email delivery
- Secure freelancer and crew links
- Revocation and expiration
- Message history

Later:

- Shared Chen Media OS notifications, templates, and delivery channels

Boundary:

- FrameOps decides why the message is sent and what the response changes.

### 6.4 Audit

Standalone:

- FrameOps audit history

Later:

- Shared audit infrastructure and retention policy

Boundary:

- FrameOps continues to define which domain changes must be audited.

### 6.5 Integration adapters

Use adapters from the start for:

- HubSpot
- Email
- Google Maps
- Google Sheets
- WhatsApp
- Pixieset
- Picflow
- Frame.io

Later, Chen Media OS hosts or coordinates these adapters.

### 6.6 Document intelligence and recommendations

Shared services may later provide:

- Text extraction
- Contract parsing
- Schedule comparison
- Recommendation infrastructure

FrameOps remains responsible for accepting the result and converting it into operational state.

## 7. Detailed placement matrix

| Capability | FrameOps now | Long-term owner | Placement |
|---|---:|---|---|
| Signed-deal operational handoff | Yes | FrameOps | Keep |
| Contract and email review workflow | Yes | FrameOps | Keep |
| Raw document storage | Minimal | Chen Media OS Platform | Shared service |
| HubSpot deal pipeline | No | HubSpot | External |
| HubSpot event-creation trigger | Manual | CRM Bridge | Shared adapter |
| Event card and readiness | Yes | FrameOps | Keep |
| Event dates, venues, and contacts | Yes | FrameOps with master references | Keep/snapshot |
| Employee and freelancer master data | Minimal | People Directory | Thin now |
| Event role requirements | Yes | FrameOps | Keep |
| Freelancer availability request | Yes | FrameOps | Keep |
| Organization-wide availability | Minimal | Resource Plan | Thin now |
| Formal absence | No | Absence & Availability | Defer |
| Default rate cards | Yes | Commercial/People service | Thin now |
| Event-negotiated price snapshot | Yes | FrameOps | Keep |
| Actual hours | No | Time & Compensation | Defer |
| Agenda versions | Yes | FrameOps | Keep |
| Coverage priorities | Yes | FrameOps | Keep |
| Detailed coverage assignments | Yes | FrameOps | Keep |
| Cross-project resource planning | No | Resource Plan | Defer |
| Equipment requirements | Basic tags | FrameOps | Keep narrow |
| Equipment register | No | Equipment & Vehicles | Defer |
| Plan versions and acknowledgements | Yes | FrameOps | Keep |
| Offline crew run sheet | Yes | FrameOps | Keep |
| WhatsApp change text | Yes | FrameOps | Keep |
| Notification delivery infrastructure | Minimal | Platform | Shared service |
| Event deliverable timeline | Yes | FrameOps | Keep |
| Pixieset/Picflow/Frame.io links | Yes | FrameOps | Keep references |
| Actual media transfer | No | Delivery tools / future Media Ops | External/defer |
| Planned event budget | Yes | FrameOps | Keep |
| Expenses | No | Expenses & Reimbursements | Defer |
| Billing cockpit | No | Billing & Reporting | Defer |
| Mark as billed | No | Billing Operations | Defer |
| Event operational reporting | Yes | FrameOps | Keep |
| Company financial reporting | No | Reporting Platform | Defer |
| QR/geofence presence | No | Site Crew Register | Defer |
| HMS/KS case workflow | No | HMS & Quality | Defer |
| “Report issue” event context | Placeholder | FrameOps integration point | Keep narrow |
| Client coverage collaboration | Later | FrameOps client module | Keep later |
| Shared customer portal shell | No | Chen Media OS | Shared later |

## 8. What FrameOps should store after joining Chen Media OS

FrameOps should continue to store event-owned records:

- Event ID
- External deal and client IDs
- Event-specific client/contact snapshots
- Event dates, venues, and time zone
- Service and deliverable commitments
- Contracted and recommended staffing
- Confirmed event-team references
- Event-specific role and price snapshots
- Agenda versions
- Coverage requirements and assignments
- Plan versions and acknowledgements
- Production timeline and delivery references
- Event-specific warnings and audit entries

It should reference, not duplicate as master data:

- Employee profile
- Freelancer profile
- Employment terms
- Formal absence
- Default rates
- Equipment records
- Actual timesheets
- Expenses
- Invoices
- HMS/KS cases

## 9. Standalone-to-OS migration design

### 9.1 Use stable internal IDs

Every FrameOps event, assignment, person reference, and document reference gets a FrameOps ID. External IDs are stored separately.

### 9.2 Introduce provider interfaces

Examples:

```text
PeopleProvider
AvailabilityProvider
RateProvider
DocumentProvider
NotificationProvider
IdentityProvider
IntegrationProvider
```

The standalone app uses local providers. Chen Media OS later supplies platform-backed providers.

### 9.3 Preserve event snapshots

When a freelancer accepts a rate or a client contact is published to crew, store the event-specific snapshot. Do not rely only on a live master record that can change later.

### 9.4 Avoid direct vendor dependencies

HubSpot, Google Maps, email, WhatsApp, Pixieset, Picflow, and Frame.io remain behind adapters.

### 9.5 Separate authentication from people

A freelancer can respond through a secure link without an account. A future account maps to the same person record rather than replacing it.

### 9.6 Publish explicit domain events

Useful contracts include:

- `event.created`
- `staffing.person_confirmed`
- `agenda.version_accepted`
- `coverage.plan_ready`
- `plan.published`
- `plan.acknowledged`
- `deliverable.delivered`

Chen Media OS modules can subscribe later without modifying FrameOps business logic.

## 10. Recommended FrameOps MVP after boundary reduction

### Build now

1. Event intake and contract review
2. Event cards and readiness warnings
3. Thin employee/freelancer directory
4. Thin rate cards and event-cost estimate
5. Availability request and staffing confirmation
6. Agenda import and versioning
7. Coverage planning and conflict detection
8. Published personal and complete schedules
9. Acknowledgement and material changes
10. Mobile/offline view and PDF
11. Deliverable and production timeline
12. Secure links, email, audit, and essential adapters

### Explicitly do not build now

1. Payroll or compensation export
2. Time bank
3. Absence administration
4. Expense reimbursement
5. Billing cockpit
6. Organization-wide resource planning
7. Equipment register
8. QR or geofence crew register
9. Full HMS/KS workflow
10. Company-wide reports
11. Native CRM

## 11. Decision test for future features

Ask these questions in order:

1. Does this feature exist because a photo/video event must be planned or executed?
2. Does it work on event-specific data rather than company-wide master data?
3. Would it still make sense if payroll, accounting, HR, and equipment systems were external?

If all answers are yes, it likely belongs in FrameOps.

If the feature manages people, money, assets, compliance, or reporting across many projects, it likely belongs in Chen Media OS.

If FrameOps needs a small part of it to function independently, build a thin provider-backed version and preserve the long-term ownership boundary.

## 12. Final boundary

> **Keep event intelligence and execution inside FrameOps. Move company-wide people, time, finance, safety, equipment, planning, and infrastructure into Chen Media OS.**

FrameOps should not be reduced to a passive screen inside Chen Media OS. Its event intake, coverage logic, versioning, publishing, and field experience remain a coherent specialist product and bounded domain.
