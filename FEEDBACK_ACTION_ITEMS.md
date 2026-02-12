# Feedback Action Items

Action items extracted from friend's feedback on portfolio site.

---

## Issue 1: Add benefit-oriented subtitle/tagline in hero section

**Status:** TODO

**Feedback:**
> "Add somewhere underneath 'technical growth consultant' like a.k.a. I do this for you... what's your little tagline so people are like, okay, this is how you can help me."

**Current:** Hero has "Hello, I'm Bryce" and "// Technical Growth Consultant" — but no line explaining what Bryce does *for the visitor*.

**Change:** Add a short, benefit-oriented tagline below the title that communicates the value to the reader.

**Files:** `index.html` (hero section), possibly `assets/css/style.css`

---

## Issue 2: Make Services section headline benefit-oriented

**Status:** TODO

**Feedback:**
> "I would actually just change this headline to be more benefit oriented for the reader."

**Current:** Section headline is "What I Do." — self-focused.

**Change:** Rename to something benefit-oriented like "How I Can Help" or "Results You Can Expect."

**Files:** `index.html` (line 150)

---

## Issue 3: Rewrite services copy to be client-focused instead of "I"-focused

**Status:** TODO

**Feedback:**
> "Tweak some of this copy where you say 'I use' or 'I this'... make them the hero."

**Current:** Service descriptions use "I identify", "I don't guess", "I handle", "I ensure" — centered on Bryce, not the client.

**Change:** Rewrite descriptions to put the client at the center. Frame outcomes as what the client gets.

**Files:** `index.html` (service card descriptions, lines 153-241)

---

## Issue 4: Broaden "Webflow Development" to show multi-platform capabilities

**Status:** TODO

**Feedback:**
> "You say Webflow development, but I would think oh, he only does Webflow. I know you do a lot more... WordPress and Shopify and all the other platforms."

**Current:** Service card #4 is titled "Webflow Development" and only mentions Webflow.

**Change:** Rename to "Web Development" or "Platform Development" and mention WordPress, Shopify, and other platforms.

**Files:** `index.html` (lines 198-211)

---

## Issue 5: Reorder sections — Services before About

**Status:** TODO

**Feedback:**
> "Flip flop it and have the services, what you do for them first, and then your proof point or credibility authority is your about."

**Current:** Order is Hero → About → Services → Contact.

**Change:** Swap to Hero → Services → About → Contact. Lead with value, then back it up with credibility.

**Files:** `index.html` (swap section blocks), update nav links if needed

---

## Issue 6: Group tools by type in the About section

**Status:** TODO

**Feedback:**
> "Put some of the same ones together... WordPress, Webflow, Storyblok — group them by type of tools."

**Current:** Tools listed in no particular order: JavaScript, WordPress, Gatsby, Analytics, Semrush, GTmetrix, Webflow, Hotjar, VWO, Storyblok.

**Change:** Group by category:
- **Development / CMS:** JavaScript, WordPress, Gatsby, Webflow, Storyblok
- **Analytics & SEO:** Google Analytics, Semrush, GTmetrix
- **Testing & Optimization:** Hotjar, VWO

**Files:** `index.html` (lines 100-141), possibly `assets/css/style.css`

---

## Issue 7: Replace "Let's Connect" with specific next steps and clear CTA

**Status:** TODO

**Feedback:**
> "Change this headline to be very specific... expand this out to be like, here's clear next steps... schedule a quick 30-minute free call."

**Current:** Contact section has generic "Let's Connect." headline with GitHub/Twitter/Email links.

**Change:** Rename to "Next Steps" or "Ready to Get Started?" with a specific CTA like scheduling a free 30-minute call. Describe what happens next.

**Files:** `index.html` (lines 247-272), `assets/css/style.css`

---

## Issue 8: Add a contact form

**Status:** TODO

**Feedback:**
> "I would also put in a contact form here. If people want to contact you, you have to go to email and it pulled up my wrong email."

**Current:** Only contact method is a `mailto:` link, which opens the wrong email client for some users.

**Change:** Add an inline contact form (Name, Email, Message, Submit). Use a service like Formspree for the static site backend.

**Files:** `index.html` (contact section), `assets/css/style.css`

---

## Issue 9: Add "How We Work" / Engagement Models section

**Status:** TODO

**Feedback:**
> "Add a section between services and how do you typically engage with people? Is it a one-time project? Monthly retainer?... What are the different options to engage with you?"

**Current:** No section explaining engagement models. Visitors don't know what to expect after seeing services.

**Change:** Add a new section between Services and Contact with engagement options:
1. **One-Time Projects** — Audits, migrations, specific fixes
2. **Monthly Retainer** — Ongoing optimization and support
3. **Let's Talk** — Not sure? Schedule a call to figure out the best fit

**Files:** `index.html` (new section), `assets/css/style.css` (new section styling)
