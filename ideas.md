# MEDHA Migration Ground Truth

This is a replication and architecture-migration task, not a redesign. The uploaded HTML application in `mainweb-sos-fixed.zip` is the single source of truth for the UI, layout, colors, typography, spacing, assets, animations, navigation, interaction patterns, content, game rules, scoring, difficulty behavior, media behavior, localStorage behavior, and responsive behavior.

## Chosen Direction: Exact Behavioral and Visual Parity

### Design Movement
Faithful preservation of the existing MEDHA application. The React implementation must retain the original visual language and DOM/CSS behavior wherever technically possible.

### Core Principles
1. Preserve existing markup structure and CSS classes before introducing abstractions.
2. Preserve every user flow, state transition, animation, sound, game mechanic, and localStorage contract.
3. Reuse the uploaded assets, fonts, styles, and content; do not create replacement visuals.
4. Improve internal architecture only when it cannot alter rendered output or behavior.

### Color Philosophy
The source application defines the colors. No new palette, gradients, contrast treatment, or theme system may be introduced unless it already exists in the source.

### Layout Paradigm
The existing HTML layout and responsive breakpoints are authoritative. Converted JSX should retain the original structure and class names, with page/component boundaries added around existing regions rather than reorganizing the interface.

### Signature Elements
All existing MEDHA visual motifs, cards, buttons, iconography, backgrounds, charts, game boards, SOS surfaces, and transitions are retained exactly from the source files.

### Interaction Philosophy
Interactions must behave as they did in the original app, including login and role switching, navigation, settings, language and text-size controls, high contrast mode, voice features, memory assistant, maps/geofencing, SOS flow, analytics, notifications, and every game interaction.

### Animation
Reuse the existing animation declarations and JavaScript timing. Do not replace animation systems or alter durations, easing, delays, sound triggers, timer logic, or game feedback.

### Typography System
Reuse the exact source font declarations, font files or external font references, weights, sizes, line heights, and letter spacing.

### Brand Essence
MEDHA is the existing application for patient and caregiver support. Its distinction is the existing integrated combination of daily care, cognitive support, communication, safety, and caregiver workflows.

### Brand Voice
Retain all source copy and labels verbatim. Do not add marketing copy, placeholder copy, or rewritten microcopy.

### Wordmark & Logo
Reuse the source application's existing logo and identity assets. Do not generate replacement marks.

### Signature Brand Color
The source application's existing primary brand color remains authoritative.

## Implementation Constraint
The final application must be 100% native React + Vite + TypeScript, with no iframe wrapping the main application and no legacy HTML file acting as the main app. The source HTML files may remain only as inspection/reference material outside the runtime entrypoint.
