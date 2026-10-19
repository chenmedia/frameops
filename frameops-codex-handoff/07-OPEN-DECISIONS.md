# Open Decisions and Recommended Defaults

These decisions do not change the product boundary. Codex may use the recommended default for an initial vertical slice, but production commitment should be recorded in an architecture decision log.

## Decisions needed before production pilot

| Decision | Recommended default | Why | Needed by |
|---|---|---|---|
| Hosting region | EU/EEA region | Client documents and crew contact data | Production foundation |
| Production database | Managed PostgreSQL | Transactions, audit, relational planning model | Milestone 0 |
| Object storage | Private S3-compatible bucket with signed access | Replaceable and suitable for source documents | Milestone 0 |
| Authentication | Managed or framework auth behind `IdentityProvider` | Avoid auth coupling before Chen Media OS SSO | Milestone 0 |
| Email provider | Transactional email behind `NotificationProvider` | Delivery tracking and retries | Milestone 2 |
| Map provider | Google Maps adapter plus manual fallback | Matches product requirement without vendor coupling | Milestone 3 |
| AI/extraction provider | Provider abstraction with stored version and evidence | Models will change; outputs require review | Milestone 1 |
| Background jobs | Database-backed durable queue initially | Simple operations and retry visibility | Milestone 1 |
| PDF renderer | Server-side HTML-to-PDF provider | Reuse published schedule presentation | Milestone 4 |
| Monitoring/error tracking | EU-compatible application monitoring | Pilot reliability and job failures | Before live pilot |
| Retention policy | Event archive retained; secure links short-lived; configurable source retention | Operational history versus privacy | Before live pilot |

## Recommended assumptions for development

- One Chen Media organization is seeded, but all models and queries are organization-aware.
- Norwegian locale and `Europe/Oslo` are defaults; event time zone is always explicit.
- Currency defaults to NOK.
- Kai is the initial employee and admin; do not hard-code Kai into recommendation logic.
- Contract/email extraction may start with deterministic fixtures behind the production interface.
- Email may start with a local outbox preview.
- Map estimates may start with a fake adapter and manual duration entry.
- The prototype may use generated sample documents; never include real client contracts in a public repository.
- Accountless secure links are sufficient for freelancers and crew in MVP.
- Client access is P1 and should not be exposed in the initial navigation.
- One included video revision is a default that remains editable per deliverable.
- Continuous photo delivery does not require a fixed photo count.

## Product decisions already closed

- One event may include photo, video, or both.
- Photo/video budgets may be combined or separated.
- Half-day is 4 working hours; full day is 8 working hours.
- Rates may be hourly, half-day, full-day, or custom.
- Availability is not confirmation.
- Standard preparation is 30 minutes unless specialist setup requires more.
- All imported agenda items require review.
- Priorities are Must cover, Important, Standard, and Optional.
- Photo and video priorities may differ for one agenda item.
- Crew may view personal or complete published schedule.
- Published changes go live immediately when made by an authorized lead.
- Material changes require affected crew to acknowledge again.
- Offline access to the latest published schedule is mandatory.
- Crew do not continuously mark routine assignments started/completed.
- Rates, rankings, budgets, costs, and margin are admin-only.
- FrameOps stores delivery links; it does not host or transfer media in MVP.
- Client collaboration, timekeeping, HMS/KS, payroll, expenses, billing, equipment, and site attendance are outside MVP.

## Questions to revisit after the historical pilot

These should be informed by real usage rather than decided upfront:

- Which extraction fields are reliable enough to prefill aggressively?
- Which warnings are blocking versus advisory at each event stage?
- How should candidate recommendation factors be weighted?
- How long should crew secure links remain valid after an event?
- Which complete-schedule details should non-lead crew see by default?
- What PDF layouts are actually printed or shared?
- How many agenda formats require custom import mappers?
- Which deliverable templates recur enough to become reusable presets?
- Which notifications deserve email, WhatsApp helper text, or later Slack delivery?
- What event size triggers separate on-site editing capacity?

## Change-control rule

If implementation reveals a product ambiguity:

1. check the canonical spec;
2. choose the narrowest reversible assumption that preserves the boundary;
3. add it to the decision log;
4. do not silently expand FrameOps into a Chen Media OS module;
5. ask Kai only when the decision materially changes workflow, access, legal/privacy exposure, or production cost.

