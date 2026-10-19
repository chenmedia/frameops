---
name: FrameOps Transit Dispatch
description: A calm, exact operations system shaped by transit maps, production call sheets, and field-ready run sheets.
colors:
  paper: "#f2f2ec"
  surface: "#fbfbf7"
  ink: "#17211e"
  muted: "#56615c"
  line: "#c5cac2"
  cobalt: "#3559d5"
  cobalt-soft: "#dfe4fb"
  orange: "#d55c27"
  orange-soft: "#f7dfd3"
  jade: "#216d50"
  jade-soft: "#dcebe4"
  risk-red: "#aa3434"
  risk-red-soft: "#f2dcdc"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Condensed, IBM Plex Sans, sans-serif"
    fontSize: "35px"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Barlow Condensed, IBM Plex Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "9px"
    fontWeight: 700
    lineHeight: "16px"
    letterSpacing: "0.13em"
  clock:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "normal"
rounded:
  square: "0"
  control: "4px"
  phone: "34px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
components:
  route-block:
    backgroundColor: "{colors.cobalt-soft}"
    textColor: "{colors.cobalt}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    padding: "0 8px"
    height: "34px"
  priority-must:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "17px"
    width: "17px"
  priority-important:
    backgroundColor: "{colors.orange}"
    rounded: "{rounded.full}"
    height: "11px"
    width: "11px"
  field-now:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "15px"
---

# Design System: FrameOps Transit Dispatch

## Overview

**Creative North Star: "The Scandinavian Dispatch Atlas"**

FrameOps is an operational instrument, not a generic card dashboard. Its visual language combines enamel station signs, printed timetables, route diagrams, production call sheets, punched markers, and proof-sheet registration marks. Paper-white work areas and charcoal typography keep dense planning calm; a dark navigation spine makes the product immediately recognizable.

The system becomes more time-oriented as work approaches the live event. Desktop screens expose the plan, its dependencies, and exceptions. The phone view removes planning chrome and turns the same source of truth into an unmistakable Now / Next / Later run sheet. Character comes from typography, ruled grids, route geometry, and exact color semantics rather than decoration.

**Key Characteristics:**

- Flat, ruled, information-dense surfaces with square operational containers.
- Condensed headings paired with highly legible sans-serif body text and tabular clock data.
- Cobalt routes, orange active work, jade readiness, and red reserved for genuine risk.
- Priority expressed through shape, size, and labels as well as color.
- Desktop planning and mobile field views share data grammar but not composition.

## Colors

The palette is paper-led and restrained: charcoal and sage neutrals carry most of the interface, while four signal colors do specific operational jobs.

### Primary

- **System Cobalt:** Selected navigation, primary actions, active mobile navigation, the current assignment, and neutral route emphasis.

### Secondary

- **Active Orange:** Work happening now, active navigation markers, material changes, short buffers, and items requiring attention.
- **Ready Jade:** Covered assignments, confirmed states, successful acknowledgements, availability, and offline readiness.

### Tertiary

- **Risk Red:** Uncovered must-cover work, conflicts, and consequential schedule disruption only.

### Neutral

- **Dispatch Ink:** Primary text, the navigation spine, strong rules, and must-cover priority markers.
- **Paper:** The desktop canvas; its warm gray prevents dense screens from feeling clinical.
- **Surface:** Cards, lanes, and the mobile field canvas.
- **Muted Sage:** Secondary copy, timestamps, supporting metadata, and inactive controls.
- **Rule Line:** Grid lines, dividers, borders, and timeline structure.

**The Four Signals Rule.** Cobalt means system or route, orange means active or attention, jade means covered or ready, and red means actual risk. Do not use these colors decoratively or interchangeably.

**The Red Is Scarce Rule.** Red appears only when a user must understand or resolve a real operational problem; routine notices stay neutral, cobalt, or orange.

**The Color Is Never the Message Rule.** Every status and priority also receives a label, shape, size, placement, or icon treatment.

## Typography

**Display Font:** Barlow Condensed (with IBM Plex Sans fallback)  
**Body Font:** IBM Plex Sans (with sans-serif fallback)  
**Clock Font:** SFMono-Regular (with Consolas and Liberation Mono fallbacks)

**Character:** Barlow Condensed gives headings and route labels the compact authority of a station board. IBM Plex Sans stays calm and readable under dense operational load. Monospace is reserved for time, event codes, counts, version markers, and other data that benefits from stable alignment.

### Hierarchy

- **Display:** Condensed, semibold, tightly tracked; use once for the primary screen title.
- **Title:** Condensed and semibold; use for event names, lane titles, card titles, and route labels.
- **Body:** Regular IBM Plex Sans; keep instructional or explanatory lines short and use muted color for support copy.
- **Label:** Bold, uppercase, widely tracked; use for eyebrows, table headers, field names, and section coordinates—not sentences.
- **Clock:** Monospace; use for times, dates where alignment matters, codes, counts, and operational indices.

**The Timetable Type Rule.** Operational data aligns like a timetable: names are condensed, explanations are sans-serif, and clocks and codes are monospace. Do not apply monospace to general prose.

**The Small Text Has a Job Rule.** Nine-pixel labels are permitted only for short uppercase coordinates or metadata on desktop. Field labels increase at phone widths, and actionable or explanatory copy never uses the micro-label size.

## Layout

Desktop uses a fixed dark navigation spine (216px), a sticky top bar (64px), and a centered work area capped at 1580px with 32px horizontal padding. Primary planning screens use rectangular bands, data rows, and ruled grids rather than loose card mosaics. Main content and its operational rail form a two-column layout; the rail stays narrow because it contains exceptions, changes, and legends rather than a second workflow.

Use the spacing scale as a 4px rhythm. Dense component interiors typically use 8–16px; screen sections use 24–32px; only major framing uses 48–64px. Rules and alignment should visibly connect related content. Favor shared baselines and column edges over isolated blocks.

Responsive behavior is deliberate:

- **Above 1220px:** Show the full 216px navigation, complete event columns, and 285–340px operational rails.
- **At 1220px and below:** Tighten screen gutters to 22px and narrow secondary rails before removing information.
- **At 980px and below:** Collapse navigation to a 72px icon rail, hide redundant top-bar labels, stack major layouts, reduce secondary table columns, and place operational panels in a compact three-column row where space permits.
- **At 600px and below:** Use the dedicated field surface. Hide desktop navigation and top bar, remove the presentation phone frame, fill the viewport up to 390px, preserve safe-area padding, and prioritize Now / Next / Later over administrative controls.

**The One Plan, Several Views Rule.** Responsive work may change composition and disclosure, but route color, priority shape, status wording, and time semantics stay consistent.

**The Field Is Not a Shrunken Dashboard Rule.** At phone scale, show the current assignment, next movement, change acknowledgement, offline status, and essential event context. Do not squeeze desktop tables or rails into the field view.

## Elevation & Depth

The system is flat by default. Structure comes from tonal layering, one-pixel rules, two-pixel section caps, dark navigation, and precise grid geometry. Cards carry no resting shadow. A restrained shadow may appear only on a hovered event row to confirm interactivity, and the framed phone mockup may cast a presentation shadow; neither treatment defines the application surface itself.

**The Flat Dispatch Rule.** Resting work surfaces do not float. Use borders, background changes, and alignment before adding elevation.

## Shapes

Operational cards, routes, callouts, status badges, timeline blocks, and tabular containers are square. Standard Radix controls may retain a small practical radius, but they should never become pill-like unless the geometry itself communicates a node, avatar, or presence state. The circular route node is the signature counterpoint to the rectangular timetable.

The registration mark is a square outline crossed by orange horizontal and vertical rules. It is the recurring brand device and should remain simple, line-based, and unfilled. The presentation-only phone shell uses a large device radius; the real mobile viewport removes that shell entirely.

**The Square Work, Round Node Rule.** Containers describe structure and remain square; circles identify people, stops, priority nodes, or live presence.

## Components

### Navigation

- **Desktop:** Use the ink navigation spine with muted labels. The active destination uses white text, a subtle light wash, and a 2px orange rule at the left edge.
- **Collapsed desktop:** Preserve icons and the active rule inside a 72px rail; remove text rather than abbreviating it.
- **Mobile:** Use a four-item bottom bar. Active state uses cobalt plus weight, not color alone.

### Cards / Containers

- **Shape:** Square operational containers; avoid generic floating-card styling.
- **Background:** Surface white on the paper canvas, with ruled divisions between facts or table cells.
- **Depth:** No default shadow. Interactive rows may lift by 1px and receive a soft shadow on hover.
- **Section cap:** Use a 2px ink top rule for high-signal groups such as metrics, roles, operational signals, and legends; cobalt may cap recommendation panels.
- **Internal padding:** Usually 16px; denser tools may use 8–12px.

### Buttons, Tabs, and Fields

- Use Radix controls with the small-radius theme. Primary actions use cobalt; secondary actions are outline or soft neutral treatments.
- Keep labels direct and operational: “Publish v3,” “Review changes,” “Send requests.”
- Tabs are compact ruled selectors. Active tabs use a cobalt underline or indicator.
- Focus-visible treatment must remain explicit and high contrast; never remove the Radix focus ring without replacing it.

### Status Badges and Callouts

- Badges are square and concise. Include an explicit state word such as “Ready,” “Draft v3,” “Must cover,” or “Offline ready.”
- Orange callouts require attention or acknowledgement; jade confirms completion or readiness; red is for genuine conflict; cobalt communicates system context.
- Keep the action adjacent to the message it resolves.

### Route Blocks

- Route blocks are 34px high, square, outlined in their signal color, and filled with the matching soft tint.
- Begin each route with a circular stop marker; keep the assignment name visually dominant and the assignee as compact trailing metadata.
- Position and width encode start time and duration. Truncate long labels rather than increasing bar height.
- Use tooltips for the full assignment and assignee when space is constrained.

### Priority Nodes

- **Must cover:** Largest filled ink circle (17px) with an explicit “Must cover” label wherever the context is not self-evident.
- **Important:** Medium filled orange circle (11px).
- **Standard:** Small filled muted circle.
- **Optional:** Small outlined muted circle.

Priority and route status are separate dimensions: priority uses node shape and size; assignment condition uses route color, labels, and operational signals.

### Change Markers

Material timeline changes use a 2px vertical red rule with a small timestamp label. On mobile, a change becomes an orange acknowledgement callout that describes the old and new state and provides a single clear action.

### Mobile Run Sheet

- Keep sync or offline readiness visible in the event header.
- Render the current assignment as a high-contrast cobalt block with time, task, priority, place, lead, and essential notes.
- Render upcoming movements as a vertical route: monospace time, orange node, connecting rule, concise title, and muted context.
- Personal assignments are the default; the whole-event view remains one tab away.

## Do's and Don'ts

### Do:

- **Do** make the operational state legible in one scan: what is ready, what changed, what conflicts, and who owns the next action.
- **Do** use ruled grids, aligned clocks, route lines, and registration geometry to create the product’s distinctive character.
- **Do** preserve labels, shapes, and size differences whenever color communicates status or priority.
- **Do** keep admin controls dense and field controls thumb-ready.
- **Do** reserve strong color for state, routing, selection, and action.

### Don't:

- **Don't** replace the timetable structure with a generic collection of rounded floating cards.
- **Don't** use gradients, decorative glass effects, large ornamental shadows, or color without operational meaning.
- **Don't** use red for ordinary warnings, emphasis, or brand decoration.
- **Don't** collapse the mobile field view into an admin dashboard; compose it around the current minute.
- **Don't** let priority rely on hue alone or confuse priority nodes with route status.
- **Don't** add unexplained colors, radii, or typefaces outside this vocabulary.
