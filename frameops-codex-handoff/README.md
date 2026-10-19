# FrameOps Codex Handoff

Version: 1.0  
Prepared: 2026-10-19  
Product owner: Kai Chen / Chen Media

This folder is the implementation handoff for FrameOps. Upload the complete folder or the accompanying ZIP into a Codex chat. It is designed to remove product ambiguity while allowing Codex to adapt the implementation to the repository it receives.

## What FrameOps is

FrameOps turns a signed event-photography or event-video job into:

1. a reviewed operational event;
2. a suitable, confirmed team;
3. a conflict-aware coverage plan;
4. a published and acknowledged mobile field schedule; and
5. a coordinated set of deliverables.

FrameOps is standalone first, but must later fit inside Chen Media OS without duplicating HR, time, finance, equipment, safety, CRM, or company-wide planning.

## Read order

1. `00-CODEX-KICKOFF-PROMPT.md`
2. `01-PRODUCT-SPEC.md` — canonical product source of truth
3. `02-IMPLEMENTATION-BRIEF.md`
4. `03-DATA-MODEL.md`
5. `04-SCREEN-AND-FLOW-SPEC.md`
6. `05-MVP-BACKLOG.md`
7. `06-ACCEPTANCE-TESTS.md`
8. `07-OPEN-DECISIONS.md`
9. `08-SEED-DATA.md`
10. `09-SECURITY-AND-PERMISSIONS.md`
11. `10-INTEGRATION-CONTRACTS.md`

The `reference/` directory contains non-canonical supporting material:

- the approved UI direction and working Radix prototype source;
- screenshots for visual reference;
- the detailed module architecture;
- the FrameOps versus Chen Media OS boundary analysis.

If documents conflict, `01-PRODUCT-SPEC.md` wins. Record any deliberate deviation in a decision log rather than silently changing the product.

## Recommended use in Codex

1. Add this handoff and the target code repository to one Codex chat.
2. Paste the contents of `00-CODEX-KICKOFF-PROMPT.md`.
3. Ask Codex to inspect the repository and report conflicts before coding.
4. Approve the proposed foundation and open decisions.
5. Build milestones in order. Each milestone must remain demonstrable and testable.

## Package status

- Product scope: finalized for MVP planning
- Product boundary: finalized
- Roles and permissions: specified
- Core states and data model: specified
- Screen behavior: specified
- Backlog and acceptance tests: specified
- Production vendors: intentionally replaceable
- Remaining decisions: isolated in `07-OPEN-DECISIONS.md`

## Definition of a successful handoff

A new Codex chat should be able to answer these questions without inventing product behavior:

- What belongs in FrameOps and what belongs in Chen Media OS?
- Who can see or change each type of information?
- What are the event, staffing, agenda, publication, and deliverable states?
- What makes a plan publishable?
- What is a material change?
- What must work offline?
- Which vendor integrations are optional adapters?
- What is the first end-to-end slice to implement?

