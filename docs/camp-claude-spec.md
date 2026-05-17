# Camp Claude — Product Spec

*Working spec for the Camp Claude offering inside RUDI Academy. Captures pricing, structure, community architecture, and naming conventions as of 2026-05-16. This is the source of truth for marketing copy, page builds, and the Circle community setup.*

---

## Brand architecture

| Layer | Name | Role |
|---|---|---|
| Parent institution | **RUDI Academy** (Responsible Use of Digital Intelligence) | Formal institutional identity. Members "pay RUDI," not Brandon. |
| Offering category | **RUDI AI Training Camps** | What the Academy offers — descriptor used in marketing copy. |
| Signature program | **Camp Claude** | First and flagship camp. Everything related to Claude. |
| Future programs | Camp Codex, Camp Gemini, Camp [next tool] | Planned but not committed. Architecture is durable for them. |

**Tagline:** *"Where professionals come to learn how to work with AI."*

**Customer-facing language:**
- *"I joined Camp Claude — RUDI's first AI training camp."*
- *"It's part of RUDI Academy."*
- *"I'm in the Connectors department of the library."*
- *"Tonight's Campfire is on Skills vs Connectors."*

---

## The offer ladder

```
$0              Free content (TikTok, LinkedIn, articles)        TOP OF FUNNEL

$49/mo          Camp Claude FOUNDER pricing                       LAUNCH OFFER
                First 50 members only. Locked for life.

$99/mo          Camp Claude membership                            CORE
                Public price after first 50 founders fill.
                Full community + all deliverables.

$2,500/session  Custom Camp for Organizations                     ENTERPRISE
                $2,500 (1 session) · $5,000 (2 sessions) · $7,500 (3 sessions)
                Up to 25 seats per engagement.
                Includes recordings, Q&A, private Circle group.

DEFERRED — do NOT launch with these:
- Bootcamp ($97 one-time) — redundant with Camp Claude membership; live github.io version
  can run as legacy until deprecated, but no new Bootcamp page on learnrudi.com
- VIP / 1-on-1 with Brandon (revisit when there's pull from members)
- Vertical sub-tracks inside Camp Claude (Real Estate / Finance / SMB)
- Learning Lab Demo Days
- Library Licensing
- Camp Codex / Camp Gemini
- Facilitator network / train-the-trainer (Year 2+)
```

### Unit economics

| Members | $99/mo MRR | ARR |
|---|---|---|
| 50 | $4,950 | $59,400 |
| 100 | $9,900 | $118,800 |
| 200 | $19,800 | $237,600 |
| 500 | $49,500 | $594,000 |

**Target: 200 paying members.** Enough for a real business; small enough to stay intimate; achievable from the @hoffdigital audience at 0.2% conversion.

---

## What $99/mo Camp Claude membership includes

> **Important metaphor shift (2026-05-16):** *"Campfire" is the casual gathering space — where members sit around and share, like a real campfire. The structured monthly main event is now called the **Learning Lab**. Skill Builders are ad hoc minis with no committed cadence. This makes the camp metaphor more authentic and lowers cadence pressure on Brandon.*

### Live deliverables (just 2)

| | Cadence | Format |
|---|---|---|
| 🧪 **Monthly Learning Lab** | 1× per month, 60–90 min | The main event. Member-voted topic. Live + recording the next day. Anchored brand moment. |
| 🛠️ **Skill Builders** | Ad hoc — no committed cadence | Short how-tos when Brandon has something to share. No pressure on the calendar. |

### Async deliverables (always-on)

| | What |
|---|---|
| 🔥 **The Campfires** | The single member-to-member space. Q&A, automations members are building, wins, tool finds, articles worth sharing, Claude updates — all in one casual room. Brandon drops in regularly. (Replaces what used to be 4 separate spaces: Ask the Camp, Member Automations, News You Can Use, generic Lounge.) |
| 📊 **Vote / Suggestion box** | Members vote on next Learning Lab topic + submit topic ideas. |
| 📚 **AI Resource Center** | Skills library, automation templates, GitHub repos, reference materials. Evergreen reference content. (Past Learning Labs + Skill Builders live in their own sections, NOT here.) |

### Things explicitly NOT included at launch (consolidated away)

- ❌ AI Office Hours — dropped. Members get sync time at the monthly Learning Lab + async time in Campfires. No need for a third sync surface.
- ❌ Ask the Camp as a separate space — merged into Campfires.
- ❌ Member Automations as a separate space — merged into Campfires.
- ❌ News You Can Use as a separate space — merged into Campfires.
- ❌ VIP / 1-on-1 — deferred until member pull.

### No VIP tier at launch

Decision (2026-05-16): VIP / 1-on-1 with Brandon is **deferred** at launch. Reasons:
- Adds tier complexity to a product that hasn't been validated yet
- Member questions get answered through multiple existing channels (Ask the Camp, AI Office Hours, Campfires, Learning Lab Q&A)
- 1-on-1 demand should be customer-pulled, not founder-pushed

When a critical mass of Camp Claude members start asking for 1-on-1 time, revisit. Likely shape at that point: $150 ad hoc (per session) or a $499/mo subscription tier. Don't decide until there's pull.

---

## Custom Camp for Organizations

**Per-session pricing model — confirmed.**

| Engagement | Price | Includes |
|---|---|---|
| **1 session** | **$2,500** | Up to 25 seats, 1 Brandon-facilitated live session, session recording, Q&A, private Circle group |
| **2 sessions** | **$5,000** | Up to 25 seats, 2 sessions, recordings, Q&A, private Circle group |
| **3 sessions** | **$7,500** | Up to 25 seats, 3 sessions, recordings, Q&A, private Circle group |
| **Larger / custom** | Quoted | 50+ seats or custom curriculum — engagement scoped per inquiry |

Standard package: $2,500 per session for up to 25 seats. Clean, simple, repeatable.

**Not included:** library licensing, white-label branding, ongoing 1-on-1 coaching. Those are future products.

---

## AI Resource Center — organization

The AI Resource Center is the strategic moat — **evergreen reference content**, not session recordings. (Past Learning Labs, Skill Builders, and Office Hours live in their own sections in Circle.)

What goes IN the Resource Center:

- 🔧 **Skills library** — pre-built Claude Skills members can copy
- 🤖 **Automation templates** — working automations members can fork
- 📦 **GitHub repos** — code, scripts, integrations
- 📑 **Reference materials** — cheat sheets, decision trees, framework docs
- 🔗 **Curated external resources** — best-of articles, docs, tools

### Top-level departments

1. 🔌 **Connectors** — Google Workspace, Slack, GitHub, Drive, etc.
2. 🛠️ **Skills** — Building and using Claude Skills
3. 🧩 **Plugins** — Custom extensions and integrations
4. 🤖 **Cowork & Automation** — Recurring tasks, agents, scheduled work
5. 🏢 **Verticals** — Real Estate, Finance, Small Business

### Tags applied to every Resource Center entry

- **Level:** 101 (Beginner) / 201 (Intermediate) / 301 (Advanced)
- **Tool:** Claude Pro / Max / API / Cowork / Chat
- **Vertical:** General / Real Estate / Finance / Small Business

Result: any member can find "all 101 Connector templates" or "all Real Estate skills" in two clicks.

---

## Circle community architecture

```
Camp Claude (top-level Space group on Circle) — 6 sections total
│
├── 🚪 Start Here
│   ├── Welcome
│   ├── How Camp Claude works
│   ├── Members Directory   (members can hide themselves; no DMs by default)
│   └── Introductions       (name, what you do, what you want to build)
│
├── 📊 Vote (what we cover next)
│   ├── Active poll
│   ├── Submit a topic
│   └── Past polls
│
├── 🧪 Learning Labs (monthly main event, 60–90 min)
│   ├── Next Learning Lab
│   └── Past Learning Labs (recordings)
│
├── 🛠️ Skill Builders (ad hoc minis)
│   ├── Latest Skill Builder
│   └── Past Skill Builders (recordings)
│
├── 🔥 The Campfires (one room for all member-to-member activity)
│   └── Q&A, automations members are building, wins, tool updates,
│       articles worth sharing — one casual space, not many silos.
│       Brandon shows up regularly.
│
└── 📚 AI Resource Center (5 departments — evergreen reference)
    ├── 🔌 Connectors
    ├── 🛠️ Skills
    ├── 🧩 Plugins
    ├── 🤖 Cowork & Automation
    └── 🏢 Verticals (RE · Finance · SMB)
```

**Design principle:** in a community platform, *fewer well-trafficked rooms beat many sparse ones*. The Campfires becomes the heartbeat. One place everyone goes. Activity compounds.

**Platform decision: Circle Business (~$199/mo)** — chosen over Skool because:
- True custom domain (`campfire.learnrudi.com` or similar)
- White-label (no "Powered by Skool")
- Public API + webhooks for RUDI CLI integration
- Better fit for RUDI's premium brand positioning

---

## Launch sequence

**Stage 1 — Closed beta (weeks 1–2)**
- Invite 20–30 hand-picked members (free first 30 days)
- Seed the community so it doesn't feel empty
- People: existing alumni, NSF/Avanade contacts, top @hoffdigital fans

**Stage 2 — Founding members (weeks 3–6)**
- Public open at **$49/mo locked for life** — first 50 seats
- Create urgency + density via lifetime discount
- Heavy promotion on TikTok / LinkedIn

**Stage 3 — Public launch (week 7+)**
- Price moves to **$99/mo** for new members
- Founders keep $49 forever
- Bootcamp ($97) becomes the standard gateway

---

## Marketing copy guidance

**Hero examples:**
- *"Join Camp Claude. Come to the Campfires."*
- *"RUDI Academy — where professionals come to learn how to work with AI."*

**How customers describe what they get:**
- "I'm in Camp Claude. Tonight's Campfire is on Connectors."
- "The Library has every Campfire indexed by topic."
- "Brandon answered my question in Ask the Camp within a day."

**Language to AVOID:**
- ❌ "Ask an AI Expert" — nobody is a total expert in AI yet. Use "Ask the Camp."
- ❌ "Campfire as the main event" — Campfires are now the CASUAL space. The main event is the **Learning Lab**.
- ❌ "Weekly anything" — no weekly committed cadence. Monthly Learning Lab, ad hoc Skill Builders.
- ❌ "Community" alone — frame as "academy / school" for premium positioning
- ❌ "Course" alone — Camp Claude is a *school*, not a course
- ❌ "Library" for session recordings — recordings live in their respective sections; the **AI Resource Center** is for evergreen reference content (skills, templates, repos)

---

## Future products (deferred — do not build until Camp Claude has 200+ members)

1. **🧪 Learning Lab** — quarterly Demo Day where members present what they built. Free to members. Generates content + social proof.
2. **📜 Library Licensing** — orgs can license the RUDI library for internal training. Separate product line. $X/seat/year.
3. **🏕️ Camp Codex** — second program, OpenAI Codex–focused. Only launch when Claude camp is profitable.
4. **🏕️ Camp Gemini** — third program. Same condition.
5. **Vertical sub-tracks inside Camp Claude** — Real Estate / Finance / SMB get their own micro-communities once member demand justifies it.

---

## Open questions / decisions still TBD

- **Tally form IDs** — placeholder URLs currently embedded on `/ai-training/camp-claude.html` and `/ai-training/custom.html`. Brandon to create real Tally forms and swap URLs.
- **Circle workspace creation** — needs to be set up before live signups can flow.
- **Stripe / payment infrastructure** — Circle Business handles community billing, but Bootcamp ($97 one-time) might need a separate Stripe checkout.
- **Founder video** — "What is Camp Claude?" 60–90 second explainer for the camp page video slot. Currently absent.
- **Cadence calendar** — first Campfire date, first Skill Builder dates need to land before public launch.
- **Custom Camp lead-handling** — who triages incoming Custom Camp inquiries from `/ai-training/custom`? Brandon, or a counselor?

---

## Validation signals (what we know)

- **n=1 customer interview** (leadership coach in transcript) approved $97/mo for community access. Said "tonight's $97 a month, you come in, there's only 10 seats" — embraced the concept without pushback. Caveat: she underprices her own work; not statistically meaningful.
- **AfroTech Insider** comparable runs ~$50/mo with $28K claimed value stack. Camp Claude at $99/mo is in defensible range.
- **Comparable communities:** Workweek ($300/yr), Reforge ($166/mo), Hormozi Skool ($99/mo with 50K members). Camp Claude pricing slots cleanly into this market.
- **Market gap:** no dominant "online school for AI" brand exists yet. Anthropic Academy is free + corporate. Maven sells individual cohorts. First-mover window is open.

---

## What's already built (as of 2026-05-16)

- `/ai-training.html` — category overview page (live in repo, not deployed)
- `/ai-training/camp-claude.html` — Camp Claude pre-sell page (live in repo, not deployed)
- `/ai-training/custom.html` — Custom Camp lead-capture page (live in repo, not deployed)
- 301 redirects from `/camp-claude` and `/training` to new URLs
- Top nav swept across 20 pages: "Training" → "AI Training"
- Layout linter: PASS

## What's NOT yet built / needs updating

These pages need to fold in this spec on the next pass:
- `/ai-training/camp-claude.html` — significant rewrite needed:
  - Hero copy was "Come to the Campfires" — that's now wrong (Campfires = casual member room, not the main event). New hero needs to be reworked around the **Learning Lab** as the headline event.
  - Drop the "Three Doors" framing? (Keep if it still serves the story; consider trimming if too much page density.)
  - Rename existing "Campfires" section → "Learning Labs"
  - Drop the Bootcamp tier from the pricing block
  - Pricing block: **just $49/mo founder + $99/mo public + $2,500/session Custom**
  - Add the **AI Resource Center** as a section
  - Add the **Campfires** section (as the consolidated member room — emphasize this is where activity lives)
  - Update "RUDI Academy" / "RUDI AI Training Camps" language throughout
  - Drop AI Office Hours mentions
  - Drop biweekly Skill Builder cadence claim — frame as ad hoc
  - Update CTA: "Become a Founding Member — $49/mo for life. First 50 only."
- `/ai-training/custom.html` — update pricing to per-session ($2,500 / $5,000 / $7,500), clarify "up to 25 seats" and "recording + Q&A + private Circle group"
- `/ai-training.html` — minor: update the Custom Camp callout pricing
- Circle workspace — not created
- Stripe checkout — not built
- Founder video — not recorded
- Tally forms — not created
