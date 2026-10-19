# FrameOps MVP Backlog

The backlog is ordered by dependency and operational value. Complete one demonstrable slice at a time. `P0` is required for the first live pilot; `P1` follows pilot learning.

## Milestone 0 — Foundation

### M0.1 Organization and identity — P0

- Create organization-aware identity model.
- Create admin and coordinator roles plus event-scoped grants.
- Enforce organization isolation in data access.
- Seed Kai as the initial employee and administrator-linked person.

Done when two organizations cannot access each other's event data and permissions are tested server-side.

### M0.2 Module boundaries and stable IDs — P0

- Establish module folders/services for the five business modules.
- Establish provider interfaces and local adapters.
- Separate external IDs from internal IDs.
- Add domain-event contracts.

### M0.3 Documents and audit — P0

- Upload/store document metadata and content via a provider.
- Retain source hashes and locators.
- Add append-only audit entries with sensitive-field redaction.
- Add a human-readable event history view.

## Milestone 1 — Signed job to reviewed event

### M1.1 Event creation — P0

- Create an event manually after signing.
- Capture HubSpot URL/reference without depending on HubSpot.
- Support photo, video, and combined service mix.
- Store date, time zone, location summary, and client.

### M1.2 Source ingestion and extraction — P0

- Upload a signed contract and additional sources.
- Run extraction asynchronously.
- Create proposed facts with Confirmed/Inferred/Missing/Conflicting classification.
- Link each proposal to evidence.
- Provide deterministic fixtures when a production extraction provider is unavailable.

### M1.3 Human review — P0

- Accept, edit, or reject each proposal.
- Compare conflicting sources.
- Record reviewer and decision.
- Produce the approved operational brief.

### M1.4 Dashboard and readiness — P0

- Implement compact/team card toggle.
- Show event status, service mix, crew counts, warning, and next action.
- Add brief completeness and initial warnings.

## Milestone 2 — Reviewed event to confirmed team

### M2.1 People and qualifications — P0

- Thin employee/freelancer directory.
- Configurable roles, qualifications, experience, gear tags, private ranking, and handle.
- Admin-only ranking and rate access.

### M2.2 Rate cards and snapshots — P0

- Hourly, half-day 4h, full-day 8h, and custom rates.
- Role-specific rates and editing-included flag.
- Event-specific override and immutable price snapshot.
- Planned cost view for admins.

### M2.3 Staffing requirements and recommendation — P0

- Capture contracted counts by role/discipline.
- Generate preliminary recommended range with explanation.
- Show contracted/recommended/allocated separately.
- Rank suitable available candidates and explain reasoning.

### M2.4 Availability requests — P0

- Email/outbox request flow.
- Recipient-scoped expiring secure response link.
- Whole-event and partial availability.
- Available does not equal confirmed.
- Admin separately holds/confirms/cancels.

## Milestone 3 — Agenda to coverage plan

### M3.1 Agenda import and immutable versions — P0

- Manual entry plus PDF, spreadsheet, and document import pathways.
- Retain original source and normalized immutable version.
- Create additions/removals/renames/time/location diffs.

### M3.2 Agenda review and priorities — P0

- Every item starts Not reviewed.
- Set coverage required/not required/undecided.
- Set separate photo and video priorities.
- Record priority actor and reason where relevant.

### M3.3 Coverage assignments — P0

- Timeline by day/venue/stage/room/track.
- Assign confirmed people with active role and discipline.
- Store must-capture notes, named people, handoff, and delivery responsibility.

### M3.4 Operational blocks and travel — P0

- 30-minute default preparation.
- Custom setup for interviews/rigging.
- Travel estimate adapter, padding, override, and departure time.
- Break, protected edit, backup, handoff, equipment reset, and drone blocks.

### M3.5 Conflict engine — P0

- Uncovered Must cover/Important.
- Assignment overlap and unavailability.
- Insufficient setup/travel.
- Protected editing conflict.
- Missing qualified role/drone preparation/break.
- Delivery without production capacity.
- Unconfirmed person on critical work.
- Override with reason and audit.

## Milestone 4 — Coverage plan to crew run sheets

### M4.1 Publish immutable plans — P0

- Publish numbered plan versions.
- Snapshot recipients and permitted contacts.
- Preview affected crew and views.
- Keep drafts private.

### M4.2 Secure field schedule — P0

- Accountless recipient-scoped schedule link.
- Personal and full-event published views.
- Now/Next/Later layout and assignment detail.
- Contact visibility by role.

### M4.3 Acknowledgements and material changes — P0

- Acknowledge exact plan version.
- Structured plan diff and default material classification.
- Notify and re-acknowledge affected crew.
- Allow authorized override with reason.

### M4.4 Lead controls — P0

- Lead photographer changes photography assignments only.
- Lead videographer changes video assignments only.
- Changes publish immediately with audit and affected-recipient handling.
- Never expose commercial data.

### M4.5 Offline, PDF, WhatsApp helper — P0

- Cache latest published personal/full schedule and selected references.
- Show last sync and stale state.
- Generate personal and permitted complete-event PDFs.
- Store WhatsApp group link and generate a ready-to-paste change message.

## Milestone 5 — Capture to delivery readiness

### M5.1 Deliverables and checkpoints — P0

- Photo highlights: continuous/same-day/next-day.
- Video: recap, recap with interviews, vertical clips.
- Owner, editor, fixed deadline/time zone, destination, and status.
- Continuous delivery checkpoints and social-media contact.

### M5.2 Production blocks and risk — P0

- Capture through delivered workflow.
- Explicit workstation/editing plan.
- Protected editing time projected into coverage.
- Unrealistic turnaround warnings.

### M5.3 Revisions, backup, and handoff — P0

- One included video revision where applicable.
- Track used and additional revisions; price admin-only.
- End-of-day backup confirmation.
- Generate filename and handoff instructions.
- Store Pixieset, Picflow, and Frame.io links.

## Milestone 6 — Pilot hardening

### M6.1 Reliability and recovery — P0

- Retryable background jobs and delivery outbox.
- Manual fallback for optional integrations.
- Backup/restore and export validation.
- Printable fallback.

### M6.2 Accessibility and performance — P0

- Keyboard planner alternatives.
- No color-only state.
- Mobile weak-network performance.
- Large agenda remains navigable.

### M6.3 Security review — P0

- Tenant isolation tests.
- Broken-access-control tests.
- Secure-link token and expiry tests.
- Commercial and contact-field leakage tests.
- Audit coverage review.

### M6.4 Historical and live pilot — P0

- Validate with historical documents.
- Run a qualifying multi-role, multi-stage live event.
- Capture time saved, missed warnings, false alerts, and crew comprehension.

## P1 backlog after pilot

- Automatic HubSpot event creation with idempotency.
- Deeper email-thread ingestion.
- Live Google Sheets synchronization.
- Refined recommendation ranking.
- Reusable event and venue templates.
- Native notifications and Slack distribution.
- Delivery-platform project creation.
- Optional freelancer accounts.
- Client collaboration module.

## Explicitly not in this backlog

Do not add time clock, payroll/overtime engine, absence, expenses, billing, Fiken export, equipment/vehicle register, QR/geofence site register, HMS/KS case management, company-wide resource planning, media hosting/transfer, or native CRM. These belong to Chen Media OS or external systems.

