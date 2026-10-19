# Screen and Flow Specification

## 1. Information architecture

Primary navigation:

- Events
- People
- Templates, post-MVP
- Settings

An event opens into one command center with sections:

- Overview
- Brief
- Team
- Agenda
- Coverage
- Publish
- Deliverables
- Files
- History

Commercial information is a restricted panel, not a primary navigation destination for crew.

## 2. Global event header

Show consistently:

- event name and client;
- date range, time zone, and service mix;
- event status;
- compact readiness dimensions;
- highest-priority warning;
- next recommended action;
- last saved/synchronized state.

Admin actions may include edit, import, share/preview, publish, export, and archive depending on state.

## 3. Events dashboard

### Compact view

Each card shows event name, client, date, coverage hours, location/count, service mix, allocated crew count, recommended range, highest warning, and next action.

### Team view

Adds crew names, roles, confirmation states, open positions, and contracted/recommended/allocated counts by discipline.

### Required states

- upcoming with no warnings;
- needs schedule;
- insufficient crew;
- uncovered priority;
- awaiting acknowledgement;
- in progress;
- delivered/archived;
- empty dashboard;
- loading and retryable error.

## 4. Event creation and intake review

Flow:

1. Create event with minimal name/client/date or from a HubSpot reference.
2. Upload/paste sources.
3. Show extraction progress without blocking navigation.
4. Present proposed facts grouped by event, schedule, team, deliverables, contacts, logistics, and commercial details.
5. Each fact displays Confirmed/Inferred/Missing/Conflicting, source evidence, and Accept/Edit/Reject.
6. Conflicts show sources side by side.
7. Confirm review and move event forward or mark Needs client information.

Never present inferred information with the same visual treatment as confirmed information.

## 5. Brief and readiness

The Brief view is the approved operational truth derived from reviewed sources. Show:

- scope and service mix;
- dates/hours/time zone;
- locations and contacts;
- contracted team and deliverables;
- access, travel, restrictions, VIPs, and priorities;
- missing information requests;
- source/evidence links;
- change history.

Readiness cards show one state and one next action per dimension. Opening a card filters to its blockers.

## 6. Team and staffing

The default layout combines:

- contracted, recommended, and allocated count strip;
- open role requirements;
- candidate recommendations;
- confirmed team;
- planned crew cost for admins.

Candidate rows show suitability reasons, availability, experience, gear, estimated cost, conflicts, and private ranking for admins. Actions: request availability, hold, confirm, decline/cancel.

The availability request preview must show exactly what the freelancer will see. The secure response supports available, partially available, unavailable, pricing response, and notes. It explicitly states that availability is not a booking.

## 7. Agenda import and review

Show current working version and incoming immutable version. Provide:

- source metadata;
- additions, removals, renames, time and location changes;
- filters by change type and affected discipline;
- per-change accept/reject;
- accept-all only when conflicts are visible;
- impact preview for assignments, travel, buffers, and deliverables.

Every new agenda item starts Not reviewed. Admin/coordinator can set Coverage required, Coverage not required, or Undecided, and set separate photo/video priorities.

## 8. Coverage planner

Desktop layout:

- left rail: unscheduled requirements, filters, warnings;
- center: time grid grouped by venue/stage/room/track;
- assignment cards showing person, active role, discipline, priority, setup/travel state;
- right inspector: selected item details, capture notes, people, buffers, handoff, conflicts, history.

Required actions:

- assign/reassign/remove person;
- create operational blocks;
- edit setup, travel, break, editing, backup, and drone blocks;
- compare role coverage;
- filter personal/team/photo/video/priority/warning;
- resolve or override warnings with reason;
- preview recipient impact.

Avoid drag-and-drop as the only input method; all operations require keyboard-accessible alternatives.

## 9. Publish center

Before publication, show:

- blocking warnings;
- affected recipients;
- personal schedule preview per recipient;
- complete event preview;
- unresolved acknowledgements from prior version;
- material-change summary;
- PDF/offline bundle generation state.

Publishing creates an immutable numbered version. A retryable notification failure must be visible without invalidating the published plan.

## 10. Mobile field schedule

Default view:

- current date and event;
- offline/last-sync banner;
- Personal / Full event toggle;
- urgent update or acknowledgement banner;
- Now, Next, Later sections;
- one-tap map, call, and contact actions where permitted.

Assignment detail shows time, role, priority, program item, written address, map link, departure time, setup, must-capture notes, named subjects, access, contacts, handoff, delivery responsibility, and selected reference images.

Use large tap targets and readable type. Critical information cannot depend on hover, color alone, or constant connectivity.

## 11. Material change flow

When a draft changes from the latest published plan:

1. system creates a structured diff;
2. system proposes material/non-material classification;
3. authorized user reviews affected people;
4. optional classification override requires a reason;
5. publishing creates the next version;
6. affected crew receive a concise change summary and re-acknowledge;
7. unaffected acknowledgements remain valid where policy allows.

Leads may publish authorized discipline assignment changes immediately. The same diff, audit, notification, and acknowledgement rules still apply.

## 12. Deliverables

Show deliverables on a timeline from capture to deadline. Each card contains owner, editor, deadline/time zone, status, destination, production blocks, revision state, and risk warning.

Continuous delivery has explicit checkpoints coordinated with the client's social-media contact. Video review records the included revision, used revision, additional chargeable revisions, review deadline, and final deadline.

Provide generated naming and handoff instructions and allow backup/handoff confirmation.

## 13. Files and history

Files group contracts, correspondence, agendas, reference images, and approval evidence. Show version/source metadata and never overwrite prior agenda imports.

History is a human-readable audit timeline with filters by module, actor, object, and plan version. Sensitive commercial diffs are visible only to admins.

## 14. Responsive behavior

- Dashboard: cards collapse to one column with the next action kept prominent.
- Planner: desktop-first for editing; mobile provides read-focused lists and limited lead reassignment actions.
- Dense tables become labeled cards, not horizontally clipped tables.
- Field schedule is designed at narrow widths first.
- Admin planning on small screens may simplify, but must never expose crew-restricted data.

## 15. Visual direction

Use the supplied Radix prototype and design system as the baseline:

- warm neutral canvas;
- dark ink text;
- restrained amber accent;
- IBM Plex Sans for interface text;
- Barlow Condensed for operational labels and time-forward display;
- square-to-softly-rounded geometry;
- dense operational information with clear hierarchy;
- labels/icons in addition to color for all states.

