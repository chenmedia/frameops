# Codex Import Checklist

## Before opening the implementation chat

- [ ] Upload `frameops-codex-handoff.zip` or the complete handoff folder.
- [ ] Attach or open the target code repository in the same Codex chat.
- [ ] Confirm no real client contracts, phone numbers, email addresses, rates, or tokens are included.
- [ ] Decide whether the first goal is a clickable prototype or the production foundation. The recommended next step is the production foundation plus one intake vertical slice.

## First message

- [ ] Paste `00-CODEX-KICKOFF-PROMPT.md`.
- [ ] Tell Codex whether the repository is empty or existing if that is not obvious.
- [ ] Mention any fixed stack/hosting choice already made.
- [ ] Ask Codex to preserve existing uncommitted work.

## Review Codex's first response

- [ ] It has read the canonical spec and repository instructions.
- [ ] It identifies the five business modules.
- [ ] It preserves the FrameOps/Chen Media OS boundary.
- [ ] It proposes provider interfaces rather than vendor coupling.
- [ ] It starts with Milestone 0 and the intake vertical slice.
- [ ] It does not propose building timekeeping, payroll, expenses, equipment, HMS/KS, or native CRM.
- [ ] It calls out only genuinely blocking decisions.

## Review each implementation milestone

- [ ] The interface behavior is demonstrable.
- [ ] Server-side permissions are tested.
- [ ] Audit coverage is present.
- [ ] Error, empty, loading, and retry states exist.
- [ ] Field-facing screens are checked on mobile.
- [ ] No color-only status signals are used.
- [ ] Relevant acceptance tests pass.
- [ ] Schema migrations and decisions are documented.
- [ ] The next milestone does not depend on an avoidable vendor lock-in.

## Before a live pilot

- [ ] Complete historical validation with old, sanitized events.
- [ ] Confirm EU/EEA hosting and privacy/retention decisions.
- [ ] Test cross-organization and secure-link access controls.
- [ ] Test offline schedule behavior at a weak-connectivity venue.
- [ ] Test PDF/print fallback.
- [ ] Test failed email, extraction, and map-provider fallbacks.
- [ ] Confirm that rates, rankings, budgets, and margin never reach crew views or caches.
- [ ] Run the qualifying live-pilot scenario in the product spec.
- [ ] Record baseline administrative time and pilot success metrics.

