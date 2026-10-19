# Integration Contracts

FrameOps workflows depend on stable internal contracts. Vendor adapters implement them. A failed optional adapter must leave a manual path.

## 1. General adapter rules

- Domain modules do not import vendor SDKs.
- Translate vendor payloads at the boundary.
- Store external IDs separately from internal IDs.
- Make inbound creation idempotent.
- Record provider, request correlation, safe status, and failure category.
- Do not log document contents, secure tokens, commercial values, or unnecessary personal data.
- Support a local/fake adapter for tests and development.

## 2. `PeopleProvider`

Purpose: retrieve operational person profiles and qualifications.

Core operations:

- get person by internal/provider reference;
- search active people by role/skill/tag;
- list event-safe contact snapshot;
- resolve current master record into an event snapshot.

Standalone: local People tables.  
Chen Media OS later: shared people/HR provider.

## 3. `AvailabilityProvider`

Purpose: evaluate whole-event and time-specific availability.

Core operations:

- get availability for people and interval;
- record manual/freelancer response;
- list conflicts with other FrameOps events;
- explain source and freshness.

Standalone: FrameOps events plus manual response.  
Chen Media OS later: Resource Plan and Absence/Availability.

## 4. `RateProvider`

Purpose: propose current rates used to create immutable event price snapshots.

Core operations:

- get effective rate cards by person and role;
- calculate estimated price inputs;
- return editing-included and overtime-rate metadata.

It never calculates actual payroll or authoritative overtime.

## 5. `IdentityProvider`

Purpose: authenticate accounts and map them to organization/user records.

Core operations:

- resolve authenticated identity;
- initiate/revoke sessions;
- support future SSO linking.

Authorization remains a FrameOps application concern using roles and event grants.

## 6. `DocumentProvider`

Purpose: securely store and retrieve source originals and derivatives.

Core operations:

- initiate upload;
- finalize with metadata/hash;
- create authorized short-lived read access;
- store derived text/preview;
- quarantine/delete according to policy.

FrameOps owns document relationships and provenance even when storage changes.

## 7. `ExtractionProvider`

Purpose: propose structured facts and agenda items from documents or correspondence.

Input includes:

- source references and allowed derived text;
- extraction schema/version;
- locale/time-zone context;
- event context permitted for the run.

Output includes:

- proposed field/value;
- Confirmed/Inferred/Missing/Conflicting classification;
- evidence locators;
- confidence where supported;
- provider/model/schema version;
- conflict group references;
- warnings/failure detail.

Provider output is never approved data. Persist the raw normalized response for reproducibility subject to retention policy.

## 8. `NotificationProvider`

Purpose: deliver availability, publication, material-change, and reminder messages.

Core operations:

- queue templated message;
- return provider message ID;
- process sent/delivered/bounced/failed callbacks;
- retry transient failures;
- cancel messages not yet sent.

MVP: email.  
Later: Slack, native WhatsApp where supported, other channels.

Never put rates or private details in a message unless the specific template and recipient permit it.

## 9. `MapProvider`

Purpose: estimate travel between separate locations.

Core operation returns:

- origin/destination normalization;
- transport mode;
- duration and distance;
- calculation time;
- provider reference.

Store manual padding separately. The UI must support manual duration/override when the provider fails.

## 10. `PdfProvider`

Purpose: render immutable published-plan views for permitted recipients.

Inputs use a field-safe plan snapshot, never unrestricted live entities. Outputs include personal PDF and permitted complete-event PDF, content hash, generation state, and storage reference.

## 11. `ExternalDealProvider`

Purpose: reference or later import signed deals.

MVP:

- validate/store a HubSpot URL and external deal ID manually.

P1:

- receive configurable signed/closed-won event;
- retrieve permitted deal/company/contact metadata;
- create one draft event idempotently;
- link duplicates to the existing FrameOps event;
- never make HubSpot the owner of FrameOps operational status.

## 12. Agenda import adapters

Supported pathways:

- manual entry;
- uploaded PDF;
- uploaded Word document;
- uploaded spreadsheet;
- Google Sheets link/export.

Every adapter produces the same normalized immutable agenda-source model and retains source row/page/cell locators. P1 live synchronization must still create explicit versions rather than silently mutating the working plan.

## 13. Delivery platform adapters

MVP stores validated external URLs and statuses for:

- Pixieset;
- Picflow;
- Frame.io.

P1 may create projects through provider adapters. FrameOps does not ingest, host, transfer, or rename media in MVP.

## 14. WhatsApp and Slack

MVP WhatsApp support stores a group URL and generates ready-to-paste update text containing:

- affected people;
- concise material changes;
- current secure schedule link.

There is no automated send/read-state assumption. Slack distribution is post-MVP through `NotificationProvider`.

## 15. Domain events

Stable event contracts should include an event ID, organization ID, occurred time, actor/correlation context, schema version, and minimal payload.

Initial events:

- `event.created`
- `event.intake_reviewed`
- `staffing.availability_received`
- `staffing.person_confirmed`
- `agenda.version_accepted`
- `coverage.assignment_changed`
- `plan.published`
- `plan.acknowledged`
- `deliverable.delivered`

During the modular-monolith stage these may run in process while still using explicit contracts and reliable outbox delivery for external side effects.

## 16. Failure behavior matrix

| Integration failure | Required behavior |
|---|---|
| Extraction unavailable | Allow manual fact entry and later retry |
| Email unavailable | Keep action valid, show failed delivery, allow copy/manual send |
| Maps unavailable | Manual duration, padding, and departure time |
| Google Sheets unavailable | Upload export or manual agenda entry |
| PDF generation fails | Published mobile/web plan remains available; retry PDF |
| Delivery platform unavailable | Store/update link manually; workflow remains usable |
| HubSpot unavailable | Create event manually with reference text/link |
| Chen Media OS provider unavailable later | Use cached/reference snapshot where safe and clearly show freshness |

