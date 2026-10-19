# FrameOps Implementation Brief

## 1. Objective

Build a dependable operations application for event photography and video. The MVP should reduce the time and mental load between contract signature and final delivery while reducing missed coverage, staffing conflicts, and unclear crew instructions.

The core operational loop is:

```text
source material
  → human-reviewed event facts
  → staffing requirements and confirmations
  → versioned agenda
  → coverage requirements and assignments
  → immutable published plan
  → crew acknowledgement
  → production and delivery tracking
```

## 2. Architectural direction

Use a modular monolith for the standalone product. Keep one deployable application and one primary transactional database, but organize business logic into explicit modules:

1. Event Intake
2. Event Staffing
3. Agenda & Coverage
4. Publishing & Field Operations
5. Deliverables & Production

Supporting platform services:

- identity and organizations;
- documents and source evidence;
- people, availability, and rates providers;
- notifications and secure links;
- rules and recommendations;
- audit;
- integration adapters.

Modules may communicate through application services and in-process domain events. Avoid a distributed system for the first version.

## 3. Recommended default stack

These are defaults, not product requirements. Adapt to a sound existing repository rather than replacing it.

- TypeScript throughout
- React with a full-stack framework such as Next.js
- Radix Themes and Radix Primitives
- PostgreSQL as the production database
- a type-safe migration-capable ORM
- S3-compatible object storage behind `DocumentProvider`
- background job mechanism for extraction, email, imports, and PDF generation
- PWA/service-worker support for published field schedules
- unit, integration, and browser-level tests

Avoid embedding vendor SDK types in domain entities. A local development adapter may use local files, a fake mail outbox, and deterministic extraction fixtures.

## 4. Source-of-truth rules

- The signed contract is the commercial baseline.
- Later communication may update operational details but cannot silently rewrite commercial commitments.
- Extracted facts are proposals until accepted.
- Every accepted fact retains source provenance.
- An agenda import creates an immutable source version.
- A published plan is immutable. Changes create a new version.
- Published event snapshots are not rewritten by later changes to a person, rate, or contact record.
- External systems are referenced by external IDs; they do not own FrameOps workflow state.

## 5. Human control points

The following always require an authorized human action:

- accepting, editing, or rejecting extracted facts;
- confirming contracted facts where sources conflict;
- confirming a crew member;
- accepting agenda changes;
- setting final priorities;
- publishing a plan;
- overriding a blocking warning;
- approving a warning's material/non-material classification when overridden;
- marking a deliverable delivered.

Recommendations may explain and prefill. They may not commit.

## 6. Provider boundaries

Create replaceable interfaces from the beginning:

- `PeopleProvider`
- `AvailabilityProvider`
- `RateProvider`
- `IdentityProvider`
- `DocumentProvider`
- `NotificationProvider`
- `MapProvider`
- `ExtractionProvider`
- `PdfProvider`
- `ExternalDealProvider`

Local providers power the standalone version. Chen Media OS or third-party integrations may replace them later without changing FrameOps domain workflows.

## 7. Consistency and transaction rules

Use database transactions for:

- confirmation of a person plus the event price snapshot;
- acceptance of an agenda version plus application of accepted changes;
- plan publication plus recipient snapshots and notification outbox records;
- lead assignment changes plus new plan version/material-change records;
- secure-link consumption when a token is single-purpose;
- acknowledgement plus plan-recipient state.

Use an outbox pattern or equivalent for email and other external side effects. A failed email must not roll back an otherwise valid published version; it should produce a visible retryable delivery state.

## 8. Recommendation and warning engine

Represent recommendations as explainable proposals:

- recommendation type;
- inputs used;
- generated output;
- explanation or evidence;
- confidence where meaningful;
- provider/model version;
- created time;
- accepted, edited, rejected, or expired state;
- decision actor and time.

Represent warnings separately from recommendations. A warning has severity, owner module, affected object, blocking state, explanation, suggested actions, lifecycle, and optional override reason.

Rules should be deterministic where possible. Examples include overlaps, insufficient travel, missing coverage, missing acknowledgement, and commercial visibility. AI is useful for extraction and suggestions, not basic invariants.

## 9. Readiness

Calculate and display separate readiness dimensions:

- brief completeness;
- schedule readiness;
- staffing readiness;
- coverage readiness;
- delivery readiness;
- acknowledgement readiness.

Each dimension returns a state, blocking issues, warnings, and next action. Do not collapse readiness into one unexplained percentage.

## 10. Offline field model

The offline bundle is generated only from a published plan and contains the minimum field-safe data:

- plan version and checksum;
- personal assignments;
- permitted complete schedule;
- selected contacts;
- access and travel instructions;
- selected reference-image derivatives;
- acknowledgement state;
- last synchronization time.

Do not cache rates, budgets, rankings, private admin notes, raw contracts, or draft plans on crew devices. When connectivity returns, compare the cached plan version to the latest version and clearly show stale state.

## 11. Background work

Suitable asynchronous jobs include:

- document text extraction and analysis;
- agenda parsing and version comparison;
- email delivery and retries;
- map travel estimation;
- PDF generation;
- offline bundle generation;
- readiness/warning recalculation after large imports;
- export generation.

Every job needs an observable state, retry policy, failure message, and manual fallback.

## 12. Observability

Capture structured events for:

- extraction started/completed/failed;
- secure link issued/opened/responded/revoked/expired;
- email queued/sent/bounced/failed;
- agenda import and comparison;
- warning created/resolved/overridden;
- plan publication;
- acknowledgement;
- offline synchronization;
- deliverable deadline risk.

Do not place source documents, tokens, rates, or sensitive contact data in application logs.

## 13. Quality gates

A milestone is complete only when:

- the behavior is reachable through the interface;
- server-side authorization is covered by tests;
- relevant audit entries are created;
- loading, empty, error, and retry states exist;
- mobile behavior is verified for field-facing screens;
- the feature has representative seed data;
- acceptance scenarios pass;
- documentation and decision log reflect meaningful changes.

## 14. Delivery strategy

Build thin vertical slices. The first slice should prove the architecture without depending on production AI or email:

1. create an organization and administrator;
2. create an event;
3. attach a source fixture;
4. return deterministic proposed facts with evidence;
5. review and accept/edit/reject proposals;
6. confirm the intake;
7. show an event card, readiness, and warnings;
8. verify organization isolation, audit, and permissions.

Subsequent milestones extend this stable core rather than creating parallel prototypes.

