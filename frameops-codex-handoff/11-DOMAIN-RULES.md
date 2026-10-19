# Domain Rules and State Transitions

## 1. Event status

Status is an explicit operational state, not an automatic percentage.

Normal path:

```text
INTAKE_NEEDS_REVIEW
  → NEEDS_CLIENT_INFORMATION (optional loop)
  → READY_FOR_STAFFING
  → STAFFING_IN_PROGRESS
  → READY_FOR_COVERAGE_PLANNING
  → COVERAGE_PLAN_DRAFT
  → AWAITING_CLIENT_APPROVAL (when approval is required)
  → PUBLISHED
  → IN_PROGRESS
  → POST_PRODUCTION
  → DELIVERED
  → ARCHIVED
```

Rules:

- Status may move backward when new information invalidates readiness.
- Moving backward does not erase history or published versions.
- `PUBLISHED` means at least one current immutable plan exists.
- A later draft may coexist with the current published plan.
- `DELIVERED` requires all required deliverables delivered or an authorized exception.
- `ARCHIVED` is read-only for normal operations but remains exportable.

## 2. Staffing state

```text
SUGGESTED
  → AVAILABILITY_REQUESTED
  → AVAILABLE
  → HELD
  → CONFIRMED
```

Alternative terminal paths: `DECLINED`, `CANCELLED`.

Rules:

- A suggestion has no commitment.
- An availability request has no commitment.
- Available means willing/able for the stated time and price context; it is not booked.
- Held is an internal tentative reservation.
- Only Confirmed counts as allocated crew.
- Confirmation captures an event price snapshot.
- A confirmed person may later be cancelled, but the historical confirmation remains audited.
- A critical assignment to a non-confirmed person creates a warning.

## 3. Agenda versions

- Every import creates a new immutable source version.
- Imported items never directly rewrite the accepted working agenda.
- Changes are proposed and individually/bulk accepted or rejected.
- Bulk acceptance must not conceal conflicts or affected coverage.
- Accepted changes retain lineage to prior items and source locators.
- Removing an agenda item never deletes published assignment history.

## 4. Coverage rules

- Coverage requirements belong to a discipline and priority.
- One agenda item may have both photo and video requirements with different priorities.
- An assignment must name a person, active role, discipline, interval, and location.
- A person may hold several qualifications but has one active role per assignment.
- Overlapping assignments require explicit resolution or override.
- Must cover and Important requirements without valid assignment are warnings; Must cover should block publication by default.
- Default preparation for photo/video is 30 minutes; assignment overrides are allowed.
- Protected editing is treated as unavailable time for coverage unless overridden.
- Travel uses provider estimate plus manual padding or a manual override.

## 5. Publication gate

By default publication is blocked when:

- a Must cover requirement is uncovered;
- a critical assignment uses unconfirmed crew;
- a person has an unresolved impossible overlap;
- essential event date/time/time-zone data is absent or conflicting;
- required access or on-site contact information is absent close to event execution;
- a delivery commitment is impossible without an owner or necessary production time.

Important uncovered requirements and other severe warnings require resolution or an authorized reasoned override. Lower-severity warnings may remain visible after publication.

Publication always:

1. validates permissions and current draft revision;
2. evaluates warnings;
3. requires reasons for permitted overrides;
4. snapshots the plan and recipient-visible data;
5. assigns the next version number atomically;
6. calculates changes from the prior version;
7. records recipient/acknowledgement requirements;
8. commits the plan and notification outbox together;
9. generates offline/PDF artifacts asynchronously;
10. creates audit records.

## 6. Material-change classification

Material by default:

- assignment added, removed, or reassigned;
- call, start, end, departure, or deadline changed;
- stage, room, venue, address, or meeting point changed;
- active role or responsibility changed;
- priority changed to/from Must cover or Important;
- must-capture, named subject, shot list, or video requirement changed;
- execution-relevant access, accreditation, safety, or travel instruction changed;
- editing, backup, handoff, or delivery responsibility changed.

Non-material by default:

- punctuation, spelling, or formatting correction with no semantic change;
- internal admin note not present in a crew view;
- wording clarification that does not change action, place, time, priority, or responsibility.

Rules:

- Classification is evaluated per affected recipient, not only per plan.
- Authorized users may override the default with a recorded reason.
- Affected recipients acknowledge the new version.
- Unaffected recipients need not re-acknowledge unless organizational policy requires it.

## 7. Lead changes

- Lead photographer can change only photo assignments.
- Lead videographer can change only video assignments.
- Cross-discipline operational blocks require the relevant grant or admin/coordinator action.
- An authorized lead change creates a new published version immediately.
- It cannot bypass conflict evaluation, audit, notification, or material-change acknowledgement.
- Lead access never includes commercial fields.

## 8. Deliverable rules

- Every deliverable has one accountable owner, exact deadline, and explicit time zone.
- Editor may differ from capture owner.
- Production blocks participate in conflict detection.
- Workflow stages may be skipped only when irrelevant and the resulting state remains clear.
- One video revision is included by default but is editable per contract.
- Additional revisions are recorded separately and commercial details are admin-only.
- Delivery is a deliberate action; adding a destination URL does not automatically mark Delivered.
- End-of-production-day backup is suggested for every production day.

## 9. Warning lifecycle

```text
OPEN → RESOLVED
OPEN → OVERRIDDEN
OPEN → DISMISSED (only non-blocking/irrelevant warnings)
```

- Re-evaluation may reopen a warning when its underlying condition returns.
- An override records actor, reason, time, and affected plan version.
- A dismissed warning records why the rule did not apply.
- Warning urgency may increase as the event approaches.
- Recommendations never silently resolve warnings through reassignment.

## 10. Idempotency and concurrency

- Duplicate HubSpot triggers map to one event by organization and external deal ID.
- Repeated secure-link responses produce one current response plus history, not duplicate confirmations.
- Publication version numbers are allocated atomically.
- Concurrent planner edits use optimistic concurrency and show a resolvable conflict.
- Notification callbacks and domain-event handlers are idempotent.
- File/content hashes may identify duplicate uploads without deleting either source relationship automatically.

