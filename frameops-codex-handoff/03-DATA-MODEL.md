# FrameOps Logical Data Model

This is an implementation-neutral logical model. Names may be adapted to repository conventions, but history, ownership, and access boundaries must remain intact.

## 1. Conventions

Every mutable record should normally include:

- stable UUID/ULID-style `id`;
- `organization_id`;
- `created_at`, `updated_at`;
- creator/updater actor references where relevant;
- optimistic concurrency version for high-conflict planning records;
- soft archival rather than destructive deletion for operational history.

Store event-local snapshots where later master-data edits must not rewrite history.

## 2. Identity and organization

### Organization

- id
- name
- default time zone
- locale
- active state

### User

- id
- organization id
- authentication identity reference
- linked person id, nullable
- display name
- email
- system role: `ADMIN`, `COORDINATOR`, `MEMBER`
- active state

### EventPermissionGrant

- event id
- user/person id
- scope: `ADMIN`, `COORDINATOR`, `LEAD_PHOTO`, `LEAD_VIDEO`, `CREW`
- capabilities granted or revoked
- effective dates

## 3. People and rates

### Person

- id
- provider/external person id, nullable
- type: `EMPLOYEE`, `FREELANCER`
- name, email, phone
- photographer handle
- role qualifications
- experience tags
- gear tags
- private ranking
- active state

Private ranking and default rates are admin-only.

### RateCard

- person id
- role id
- rate type: `HOURLY`, `HALF_DAY`, `FULL_DAY`, `CUSTOM`
- currency and amount
- half-day hours, default 4
- full-day hours, default 8
- overtime hourly amount, nullable
- editing included
- effective dates

### AvailabilityWindow

- person id
- event id, nullable
- start and end
- state: `AVAILABLE`, `BUSY`, `TENTATIVE`, `UNKNOWN`
- source and notes

## 4. Event intake

### Event

- id
- event name
- client/company name and external references
- HubSpot deal URL and external deal ID, nullable
- status
- service mix: `PHOTO`, `VIDEO`, `PHOTO_AND_VIDEO`
- start, end, time zone
- primary location summary
- intake owner
- WhatsApp group URL, nullable
- archive time

Event status values:

```text
INTAKE_NEEDS_REVIEW
NEEDS_CLIENT_INFORMATION
READY_FOR_STAFFING
STAFFING_IN_PROGRESS
READY_FOR_COVERAGE_PLANNING
COVERAGE_PLAN_DRAFT
AWAITING_CLIENT_APPROVAL
PUBLISHED
IN_PROGRESS
POST_PRODUCTION
DELIVERED
ARCHIVED
```

### EventServiceBudget

- event id
- budget mode: `COMBINED`, `SEPARATE`
- contract value reference
- photo allocation, nullable
- video allocation, nullable
- expected crew cost
- planned additional cost
- projected margin
- currency

Admin-only; this is planning context, not accounting truth.

### EventLocation

- event id
- name, address, coordinates
- venue/stage/room/track hierarchy
- access notes
- travel notes
- external map place ID, nullable

### EventContact

- event id
- source person/contact reference, nullable
- snapshot name, organization, role, email, phone
- contact type: client, coordinator, on-site, emergency, social-media, other
- crew visibility scope

### SourceDocument

- event id
- document type
- original filename/title
- storage reference
- MIME type and size
- content hash
- source date
- uploaded actor/time
- extraction state

### SourceEvidence

- source document id
- page/sheet/message/section locator
- excerpt or normalized evidence
- structured locator metadata

### ExtractedFact

- event id
- field key
- proposed normalized value
- display value
- classification: `CONFIRMED`, `INFERRED`, `MISSING`, `CONFLICTING`
- review state: `PENDING`, `ACCEPTED`, `EDITED`, `REJECTED`
- confidence, nullable
- evidence links
- reviewer and review time
- accepted value and edit reason
- extraction run/provider version

## 5. Staffing

### CrewRole

- id and key
- display name
- discipline: `PHOTO`, `VIDEO`, `CROSS_DISCIPLINE`
- configurable active state

Initial keys: lead photographer, lead videographer, photographer, videographer, photo assistant, assistant, drone operator, on-site editor.

### StaffingRequirement

- event id
- role id
- discipline
- contracted count, nullable
- recommended minimum and maximum
- recommendation explanation
- required start/end, nullable
- status/open count

### StaffingCandidate

- staffing requirement id
- person id
- rank/order
- suitability score, nullable
- explanation
- conflict flags
- expected cost
- recommendation state

### StaffingEngagement

- event id
- person id
- role id
- stage: `SUGGESTED`, `AVAILABILITY_REQUESTED`, `AVAILABLE`, `HELD`, `CONFIRMED`, `DECLINED`, `CANCELLED`
- proposed event window
- response deadline
- availability notes/windows
- request and response timestamps
- confirmation actor/time

### EventPriceSnapshot

- engagement id
- event id and person id
- active role
- rate type
- amount and currency
- included hours
- overtime amount
- editing included
- travel/accommodation/meals/parking/equipment assumptions
- source rate card id, nullable
- agreed actor/time

## 6. Agenda and coverage

### AgendaSourceVersion

- event id
- source document id
- sequence number
- imported actor/time
- immutable normalized payload reference/hash
- comparison base version id, nullable
- processing state

### AgendaChangeProposal

- from and to agenda versions
- change type: add, remove, rename, time, location, content
- previous/new normalized values
- affected coverage/people/travel/deliverables
- state: `PROPOSED`, `ACCEPTED`, `REJECTED`
- decision actor/time/reason

### AgendaItem

- agenda version id
- stable lineage key across versions
- title and description
- start/end and time zone
- event location id
- stage/room/track
- participants/speakers/VIPs
- source locator
- review state: `NOT_REVIEWED`, `COVERAGE_REQUIRED`, `COVERAGE_NOT_REQUIRED`, `UNDECIDED`

### CoverageRequirement

- agenda item lineage/version id
- discipline
- priority: `MUST_COVER`, `IMPORTANT`, `STANDARD`, `OPTIONAL`
- required role/skills
- must-capture notes
- named subjects
- requested by and rationale
- review/approval state

The same agenda item may have separate photo and video requirements.

### OperationalBlock

- event id
- optional agenda item/assignment/deliverable link
- block type: `ARRIVAL`, `PREPARATION`, `TRAVEL`, `HANDOFF`, `EDITING`, `INGEST_BACKUP`, `EQUIPMENT_RESET`, `BREAK`, `DRONE_COMPLIANCE`, `OTHER`
- start/end
- location start/end
- responsible person
- protected state
- generated or manual source

### CoverageAssignment

- event id
- agenda item or operational block id
- person id
- staffing engagement id
- active role id
- discipline
- start/end
- location
- priority snapshot
- must-capture snapshot
- handoff/delivery responsibility
- state: `DRAFT`, `PUBLISHED`, `CANCELLED`

### TravelEstimate

- from/to locations
- transport mode
- provider
- calculated time
- duration and distance
- manual padding
- manual override
- recommended departure

### Warning

- event id
- owner module
- warning type
- severity: `INFO`, `WARNING`, `BLOCKING`
- affected object references
- title and explanation
- suggested actions
- state: `OPEN`, `RESOLVED`, `OVERRIDDEN`, `DISMISSED`
- override actor/time/reason
- first/last evaluated time

## 7. Publication and field operations

### PlanVersion

- event id
- version number
- immutable plan snapshot reference/hash
- created from draft revision
- published actor/time
- summary/change note
- prior version id
- status: `PUBLISHED`, `SUPERSEDED`, `WITHDRAWN`

### PlanRecipient

- plan version id
- person id
- visibility scope
- secure-link id
- notification state
- requires acknowledgement
- affected-by-material-change flag

### PlanChange

- from/to plan versions
- affected person ids
- change category
- material classification
- default classification reason
- override actor/reason, nullable
- human-readable summary

### Acknowledgement

- plan version id
- person id
- acknowledged time
- channel
- secure-link/session reference
- client metadata suitable for audit, without invasive tracking

### SecureLink

- organization and event id
- recipient/person id
- purpose: `AVAILABILITY_RESPONSE`, `SCHEDULE_VIEW`, `ACKNOWLEDGEMENT`
- hashed token only
- expiry and revoked time
- allowed operations
- latest-use time and use count

## 8. Deliverables and production

### Deliverable

- event id
- discipline
- type: curated highlights, continuous photo, same-day photo, next-day photo, recap video, recap with interviews, vertical clips, custom
- title and contractual reference
- owner person id
- deadline and time zone
- status: `PLANNED`, `CAPTURE`, `INGEST`, `BACKUP`, `SELECTION`, `EDITING`, `REVIEW`, `DELIVERED`, `CANCELLED`
- destination type and URL
- editor person id
- workstation plan
- included revisions, default 1 for video where applicable
- used revisions and additional revisions
- additional-revision price snapshot, admin-only

### DeliveryCheckpoint

- deliverable id
- title
- deadline/time zone
- internal owner
- client coordinating contact
- destination
- status

### HandoffInstruction

- deliverable id
- responsible person
- source-file description
- naming template
- destination
- deadline
- backup requirement
- confirmation requirement
- confirmed actor/time

## 9. Audit and jobs

### AuditEntry

- organization/event id
- actor type and id
- module
- action
- object type/id
- previous/new value diff with sensitive-field redaction
- source or reason
- plan version id, nullable
- timestamp and correlation ID

### BackgroundJob

- job type and owning module
- object reference
- state: `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELLED`
- attempt count
- safe error summary
- provider reference
- timestamps

### NotificationOutbox

- recipient snapshot
- template and payload
- channel
- state: `PENDING`, `SENT`, `FAILED`, `BOUNCED`, `CANCELLED`
- retry metadata
- related secure link/plan/event

## 10. Important invariants

1. Every business record is organization-scoped.
2. A confirmed engagement used in an assignment has an event price snapshot, even if zero or custom.
3. An availability response never confirms a booking.
4. A crew user cannot read draft plans or commercial fields.
5. A published plan and its recipient snapshot are immutable.
6. Acknowledgement always names an exact plan version.
7. An accepted fact retains at least one evidence link or an explicit manual-entry reason.
8. A lead can edit only the authorized discipline.
9. Material changes identify affected recipients.
10. A secure-link token is never stored in plaintext.
11. Event history is not rewritten by later changes to master people or rates.
12. AI output cannot directly create a confirmed crew booking or published assignment.

