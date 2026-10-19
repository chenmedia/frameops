# Security and Permissions Specification

## 1. Principles

- Deny by default.
- Enforce authorization on the server for every read and mutation.
- Scope all data by organization and, where needed, event.
- Separate authentication identity from operational person identity.
- Return only fields the caller may see; do not merely hide them in the UI.
- Keep secure links recipient-scoped, purpose-scoped, revocable, and expiring.
- Audit sensitive operational changes without logging secrets.

## 2. Role matrix

Legend: `R` read, `W` create/edit, `P` publish/commit, `—` no access, `Scoped` only own/authorized discipline.

| Capability | Admin | Coordinator | Lead photo | Lead video | Crew/freelancer | Future client |
|---|---:|---:|---:|---:|---:|---:|
| All organization events | R/W | Granted events | Assigned event | Assigned event | Assigned event | Shared events only |
| Intake sources and review | R/W | Granted R/W | — | — | — | Later: submitted sources |
| Draft agenda | R/W | Granted R/W | Granted R | Granted R | — | Later: proposal/comment |
| Published full schedule | R | R | R | R | R | Later: approved subset |
| Personal schedule | R | R | R | R | R own | — |
| Staffing requirements | R/W | Granted R/W | R relevant | R relevant | Own request only | — |
| Candidate ranking/notes | R/W | Only if explicitly granted, excluding private ranking by default | — | — | — | — |
| Confirm/cancel crew | P | If granted | — | — | — | — |
| Photo assignments | R/W/P | Granted R/W/P | Scoped W/P | R | R published | Later: comment |
| Video assignments | R/W/P | Granted R/W/P | R | Scoped W/P | R published | Later: comment |
| Publish full plan | P | If granted | Scoped immediate change | Scoped immediate change | — | — |
| Acknowledge plan | R/W | R/W | R/W own | R/W own | R/W own | — |
| Contacts | All | Operational | Full team | Full team | Need-to-coordinate | Later: own contacts |
| Rates/budgets/cost/margin | R/W | Only explicit commercial grant | — | — | — | — |
| Private rankings | R/W | — unless separately authorized | — | — | — | — |
| Deliverables | R/W | Granted R/W | Relevant R/W | Relevant R/W | Assigned R/W | Later: comment/approval |
| Warning override | P | If granted | Scoped assignment warnings | Scoped assignment warnings | — | — |
| Audit history | R | Granted operational subset | Own/relevant subset | Own/relevant subset | Own actions | Later: own actions |

## 3. Commercial field classification

The following are always admin-only unless an explicit administrator-level commercial grant exists:

- default and event-specific rates;
- private rankings;
- budgets and photo/video internal split;
- expected crew cost and projected margin;
- additional-revision pricing;
- internal commercial notes.

These fields must be excluded from crew APIs, serialized plan snapshots, PDFs, offline bundles, notification templates, analytics events, and client error messages.

## 4. Contact visibility

- All confirmed crew: coordinator, emergency, and on-site contacts.
- Leads: complete confirmed event-team contact list.
- Other crew: people needed for assignment coordination and handoff.
- Unconfirmed candidates: only the contact details included in their availability request.
- Personal phone numbers: only the confirmed event team and authorized coordinators.
- Never expose private notes with contact records.

## 5. Secure-link design

### Requirements

- Generate at least 128 bits of cryptographically secure randomness.
- Store only a keyed hash or strong hash of the token.
- Bind the token to organization, event, recipient, and one purpose.
- Define allowed operations explicitly.
- Use an expiry appropriate to the event and purpose.
- Support immediate revocation and replacement.
- Rotate/revoke links when recipient scope changes materially.
- Apply rate limiting and safe failure responses.
- Do not place personal or event details in the URL itself.
- Avoid third-party resources on secure-link pages that could leak the token in referrers.

### Availability links

Allow only the named recipient's response. Do not reveal the wider team, commercial budget, other candidate rates, or draft coverage.

### Schedule links

Reveal only published versions and the recipient's allowed view. A link for one person must not be usable to enumerate another recipient.

### Revoked/expired behavior

Show no event data. Provide a generic explanation and a route to contact the coordinator or request a replacement.

## 6. Organization isolation

- Include organization scope in every repository/service query.
- Prefer database-supported isolation controls where practical in addition to application checks.
- Never authorize based on a client-supplied organization ID alone.
- Verify document and storage access against the owning organization/event.
- Use indistinguishable not-found/forbidden responses for guessed cross-organization IDs.
- Add automated negative tests for all high-value endpoints.

## 7. Document security

- Private storage by default.
- Short-lived signed download access after authorization.
- MIME/type and size validation.
- Malware scanning or quarantine pathway before production use.
- Content hashes for integrity and duplicate detection.
- Redact document contents and signed URLs from logs.
- Separate source originals from derived text/previews.
- Retention and deletion policies must preserve required operational/audit history while respecting privacy obligations.

## 8. Offline data security

- Cache only the latest published field-safe snapshot.
- Exclude commercial data, raw contracts, private notes, candidate data, and draft plans.
- Use browser/device storage appropriate to the sensitivity and authenticated/link scope.
- Expire or purge event caches after a configured period.
- Revocation should prevent further online access; document the practical limitation of already cached offline data.
- Show who the cached schedule belongs to on shared-device scenarios without exposing excessive detail on a lock screen.

## 9. Audit requirements

Audit at minimum:

- source upload and extraction run;
- fact accept/edit/reject;
- staffing request, response, hold, confirmation, cancellation;
- rate snapshot creation/change;
- agenda import and change acceptance;
- priority and coverage edits;
- warning override and reason;
- plan publication/withdrawal;
- acknowledgement;
- lead field change;
- secure-link issue/revoke/replace;
- backup/handoff confirmation;
- deliverable delivery.

Audit records are append-only to ordinary users. Sensitive previous/new values are redacted for non-admin viewers.

## 10. Threat-focused tests

- horizontal access: person A cannot view person B's secure schedule by changing IDs;
- cross-tenant access: organization A cannot access organization B documents/events;
- field leakage: crew responses contain no commercial fields;
- stale authorization: removed lead cannot continue editing;
- token leakage: raw tokens never appear in logs/database/admin tables;
- replay: single-purpose response actions behave idempotently;
- expiry/revocation: rejected before any data serialization;
- mass assignment: clients cannot set role, organization, confirmation, or commercial fields;
- file access: storage references alone do not authorize downloads;
- publication race: concurrent publish attempts do not create ambiguous current versions.

## 11. Privacy and operational policy items

Confirm before production:

- data processor/controller responsibilities;
- retention periods for contracts, crew contact data, secure-link access records, and archived events;
- lawful handling of freelancer rates and private rankings;
- incident response and breach notification process;
- backup location and restore testing;
- user access/export/correction processes;
- whether analytics tools are permitted on secure schedule pages.

This document is a product security specification, not legal advice.

