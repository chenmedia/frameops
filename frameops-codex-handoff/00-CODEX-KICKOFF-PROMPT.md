# Copy-ready Codex kickoff prompt

Use the following as the first instruction in the implementation chat.

---

You are implementing FrameOps, an event-photo and event-video operations product for Chen Media.

Read the complete `frameops-codex-handoff` package before changing code. Treat `01-PRODUCT-SPEC.md` as the canonical product source. Use the other files to translate that product specification into implementation. The prototype under `reference/prototype-src/` is visual and interaction guidance, not production architecture.

FrameOps owns the workflow from signed job to staffed coverage plan, acknowledged field schedule, and coordinated deliverables. It must not become a duplicate CRM, HR, payroll, accounting, timekeeping, equipment, HMS/KS, or company-wide resource-planning system. Those capabilities belong to HubSpot, external services, or the future Chen Media OS, as described in the boundary documents.

Before implementation:

1. Read repository instructions and inspect the current code, data model, tests, and uncommitted work.
2. Compare the repository against this handoff and list any meaningful conflicts.
3. Propose a short implementation plan mapped to the numbered milestones in `05-MVP-BACKLOG.md`.
4. Surface only decisions that truly block the next slice. Use the recommended assumptions in `07-OPEN-DECISIONS.md` for everything else and record them in a decision log.
5. Preserve existing user work and avoid unrelated rewrites.

Implementation rules:

- Build a modular monolith with explicit module boundaries and provider interfaces.
- Keep domain logic independent of UI and vendor SDKs.
- Use stable internal IDs and separate external IDs.
- Preserve immutable source, agenda, price, and published-plan history.
- Treat AI extraction and recommendations as proposals requiring human approval.
- Enforce permissions on the server, not only in the interface.
- Keep commercial data admin-only.
- Build mobile-first field schedules and cache the latest published plan for offline use.
- Use Radix UI for production interface primitives and follow `reference/DESIGN-SYSTEM.md`.
- Do not use color as the only status signal.
- Add audit entries for the actions named in the spec.
- Add automated tests for domain rules, permissions, publication, material changes, and secure links.
- Never let an optional integration block the core manual workflow.

Start with Milestone 0 and the smallest demonstrable Milestone 1 vertical slice:

`create event → attach source → review proposed facts → confirm event → show event card and readiness warnings`

Do not attempt the entire MVP in one unreviewed pass. At the end of each slice, provide:

- what works;
- screenshots or a runnable preview where useful;
- tests and verification results;
- schema or migration changes;
- decisions made;
- remaining gaps against the milestone acceptance criteria.

Your first response should be the repository audit, conflicts, proposed architecture, and the exact first slice you will implement. Then proceed unless a genuinely blocking decision requires my input.

---

