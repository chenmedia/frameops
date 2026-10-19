# FrameOps Acceptance Tests

These scenarios form the product-level test contract. Automate at the most appropriate layer and retain a small browser-level happy path for each milestone.

## A. Event intake

### A1 — Reviewed event from contract

Given an administrator has created a combined photo/video event  
When they upload a signed contract and extraction finishes  
Then proposed event facts are grouped for review  
And every non-missing proposal links to source evidence  
And no proposal becomes approved operational truth until accepted or edited.

### A2 — Conflicting sources

Given the contract says coverage ends at 18:00  
And a later email says 19:00  
When sources are processed  
Then the end time is marked Conflicting  
And both sources are visible  
And the system does not silently choose one.

### A3 — Missing information

Given no on-site contact is found  
When intake is reviewed  
Then the brief shows the contact as Missing  
And an actionable warning appears on the event.

### A4 — Combined and separate budgets

Given an event contains photo and video  
When the admin records a combined budget or separate allocations  
Then both models are representable  
And only admins can view the values.

## B. Dashboard and readiness

### B1 — Practical event card

Given an upcoming event  
When the events dashboard loads  
Then its card shows name, client, date, hours, location, service mix, allocated count, recommended range, highest warning, and next action.

### B2 — Separate readiness dimensions

Given staffing is complete but the schedule is missing  
When readiness is displayed  
Then staffing and schedule readiness are shown separately  
And the system does not present one unexplained overall score.

## C. Staffing

### C1 — Suggest suitable candidate

Given Kai is qualified and available for lead photography  
When candidates are requested  
Then Kai appears with an explanation based on role and availability  
And confirming him still requires an admin action.

### C2 — Accountless availability

Given a freelancer receives a valid secure availability link  
When they respond with partial availability and a custom price  
Then the response is stored and audited  
And the staffing state becomes Available, not Confirmed.

### C3 — Rate snapshot

Given a freelancer's default full-day rate later changes  
When a previously confirmed event is opened  
Then the agreed event price remains unchanged.

### C4 — Contracted/recommended/allocated distinction

Given the contract has two photographers, the system recommends three, and two are confirmed  
Then the UI displays `2 contracted`, `2 allocated`, and `3 recommended` separately with the recommendation reason.

## D. Agenda and coverage

### D1 — Immutable agenda versions

Given agenda version 1 has been imported  
When an updated spreadsheet is imported  
Then version 1 remains unchanged  
And version 2 shows additions, removals, time changes, and location changes before acceptance.

### D2 — Separate discipline priorities

Given one keynote agenda item  
When photo is marked Must cover and video is marked Standard  
Then both requirements coexist without overwriting each other.

### D3 — Uncovered priority

Given a Must cover photo requirement has no assignment  
When conflicts are evaluated  
Then a blocking or high-urgency uncovered-priority warning is produced.

### D4 — Overlap and multi-role conflict

Given one person has photographer and on-site editor qualifications  
When they are assigned to overlapping capture and protected editing blocks  
Then a conflict is shown and no silent reassignment occurs.

### D5 — Setup and travel

Given assignments occur at separate venues  
And travel plus the 30-minute setup buffer exceeds the available gap  
Then the planner warns and suggests an earlier departure, reassignment, or schedule adjustment.

### D6 — Optional map provider failure

Given the map provider is unavailable  
When travel is planned  
Then the admin can enter travel duration and padding manually  
And coverage planning remains usable.

## E. Publishing and field operations

### E1 — Draft privacy

Given a draft plan exists  
When a crew member opens their link  
Then they see only the latest published plan, never the draft.

### E2 — Immutable publication

Given plan version 1 is published  
When an assignment is changed and republished  
Then version 1 remains unchanged  
And version 2 contains the change and structured diff.

### E3 — Personal/full schedule

Given a confirmed photographer has a valid schedule link  
When they switch views  
Then they can see their personal assignments and the permitted complete published schedule.

### E4 — Acknowledgement

Given plan version 3 requires acknowledgement  
When a crew member acknowledges  
Then person, exact version, channel, and time are recorded.

### E5 — Material change

Given a photographer acknowledged a 09:00 assignment in Room A  
When it changes to 08:30 in Room B and a new plan is published  
Then that photographer receives the concise change summary  
And must acknowledge the new version.

### E6 — Cosmetic change

Given a punctuation-only note correction  
When a new version is published and classified non-material  
Then existing acknowledgement is not unnecessarily invalidated  
And the classification remains auditable.

### E7 — Lead discipline boundary

Given a lead photographer and lead videographer  
When the lead photographer changes a photo assignment  
Then it goes live with audit and notification rules  
But that lead cannot modify video assignments or view commercial data.

### E8 — Offline schedule

Given a crew member synchronized the latest published plan  
When connectivity is lost  
Then the personal and permitted full schedule, written addresses, essential contacts, and selected references remain readable  
And the last synchronization time is shown.

### E9 — Stale offline plan

Given a newer published version exists  
When the device reconnects  
Then the user is warned that the cached version is stale and receives the update/acknowledgement flow.

## F. Deliverables

### F1 — Continuous photo delivery

Given continuous highlights are contracted  
When the deliverable is planned  
Then it can contain multiple checkpoints with owners, deadlines, destination, and client coordinating contact without requiring a fixed image count.

### F2 — Protected editing

Given the photographer must edit a same-day batch  
When that time overlaps coverage  
Then the system warns unless another qualified person covers the requirement or an authorized override is recorded.

### F3 — Video revisions

Given a recap video includes one revision  
When a second revision is recorded  
Then it is marked additional/chargeable  
And its price is visible only to admins.

### F4 — Handoff instructions

Given a photo deliverable  
When its handoff brief is generated  
Then it contains owner, source files, filename template, destination, deadline, backup requirement, and confirmation requirement.

### F5 — Filename format

Given the event and image metadata  
When instructions are generated  
Then the format is `YYYYMMDD_HHMM_ChenMedia_EVENTNAME_KEYWORD_ORIGINALSUFFIX_PHOTOGRAPHERHANDLE`  
And a valid example is `20261018_1430_ChenMedia_ByggReisDeg26_Stands_00485_@iamkaichen`.

## G. Security and resilience

### G1 — Organization isolation

Given users belong to different organizations  
When either user guesses the other's event or document ID  
Then access is denied without revealing whether the resource exists.

### G2 — Commercial confidentiality

Given a crew member or lead accesses every permitted event endpoint  
Then rates, budgets, rankings, margin, and chargeable revision prices are absent from responses and offline caches.

### G3 — Revoked or expired link

Given a secure link is revoked or expired  
When it is opened  
Then no event data is shown  
And the user receives a safe next step.

### G4 — Notification failure

Given publication succeeds but email delivery fails  
Then the plan remains published  
And the admin sees a retryable failed-delivery state and can use a manual fallback.

### G5 — Audit coverage

Given intake decisions, staffing confirmation, agenda acceptance, warning override, publication, acknowledgement, lead change, and delivery occur  
Then each action has an audit entry with actor, time, module, object, reason/source where applicable, and plan version where relevant.

