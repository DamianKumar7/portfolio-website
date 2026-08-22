# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally — future design must serve both without compromising either:

- **Recruiters / HR** doing a fast (~20-second) scan for role fit, seniority signals, and keyword match. They need to reach a "yes, worth a call" quickly: clear title, headline metrics, employers, skills, and an obvious résumé/contact path.
- **Engineering managers / tech leads** doing a deeper technical evaluation — architecture decisions, scope of impact, and depth of ownership. They need substance and proof: concrete systems, real numbers, and enough specificity to trust the claims.

The site is a personal job-search asset; the visitor is evaluating one candidate, Mainak Kumar, for a specific role.

## Product Purpose

A personal portfolio website that presents Mainak Kumar as a hire-worthy Senior Software Engineer and converts a visit into an interview (an email, a résumé download, or a LinkedIn/GitHub follow-through). Success = a qualified visitor leaves convinced enough to reach out or advance him in a hiring process.

## Positioning

Lead identity is **Senior Backend / Distributed Systems Engineer** (Java, Spring Boot, Kafka, GCP) with a track record of enterprise-scale impact — auth-platform migration for 500+ enterprise customers with zero downtime, a CI/CD migration saving $30M/year, PCI-DSS-certified payments. The differentiator a neighboring candidate could not truthfully copy: senior-level ownership of high-stakes, high-scale backend and authentication systems at a Fortune-500 (UKG), backed by specific verifiable metrics. **AI / agentic engineering is a genuine and growing edge**, presented as a forward trajectory — not the headline, and not overstated.

## Operating Context

- Primarily reached from a résumé link, LinkedIn, a recruiter's inbound, or a direct share during a hiring process; often opened on desktop by a manager and on mobile by a recruiter between meetings.
- Read quickly and often in parallel with other candidates — first-viewport clarity and scannability matter as much as depth.
- The résumé PDF, LinkedIn, and GitHub are companion surfaces the site links out to; the site is the hub, not the only artifact.

## Capabilities and Constraints

- **Zero-backend static site**, must remain deployable to GitHub Pages as a user site (`DamianKumar7.github.io`); Next.js static export (`output: "export"`). No server-dependent features (no server-side form handler, no DB, no auth) — contact is mailto + social links.
- Existing stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, framer-motion. (Recorded as incumbent; not re-decided here.)
- One external runtime dependency: the GitHub contribution graph fetches `github-contributions-api.jogruber.de` client-side for user `DamianKumar7`; must degrade gracefully when it fails.
- Single-page site with in-page anchor navigation (about, experience, projects, skills, activity, contact).

## Brand Commitments

- **Name:** Mainak Kumar (public professional identity). GitHub handle is `DamianKumar7`.
- **Voice:** confident, technical, specific, metric-led; first person; no fabricated superlatives. Claims are always backed by a concrete number or system.
- No logo or wordmark asset beyond the name itself.

## Evidence on Hand

- **Master profile (source of truth):** `C:/Users/Mainak Kumar/.claude/resume/profile.md` — full work history, skills, projects, achievements. All site content derives from this.
- **Résumé PDF:** shipped at `public/resume.pdf` — a generated, general-purpose one-pager (built with Python/reportlab, not a copy of any single company-tailored variant) reflecting the same facts as the site; a downloadable résumé must always be one click away. Regenerate via the build script if content changes again rather than copying a tailored variant directly — company-tailored resumes (Rippling, Zendesk, ArmorCode, etc. in Downloads) must never be used as the public download since they address one employer by name.
- **Real employers & metrics (factual — keep exact, never fabricate or inflate):** UKG (Senior SWE, Sep 2024–present), PineLabs (Apr 2023–Aug 2024), Thoughtworks (Feb 2022–Mar 2023); $30M/yr savings, 500+ enterprise customers, 300K+ concurrent users (Auth0 migration), 10M+ customer workloads, 70% vuln reduction, PCI-DSS, KYC onboarding automation, AML/risk-management microservices, 100K+ merchants, 6 UKG performance awards. Additional skill depth confirmed via a Rippling-tailored resume variant (`Mainak_Kumar_Rippling_FinIntegrity.pdf`, Downloads): IAM, Auth0 (as a named tool, not just OAuth 2.0), Secure Coding, mentoring/technical-design-doc authorship at Thoughtworks. That resume's FinTech-specific pitch line ("Rippling's Financial Integrity mission") is company-tailored and explicitly NOT portfolio copy.
- **Real projects:** RowOne Asia (live, https://www.rowone.asia/home, 500K+ users), URL Shortener (github.com/DamianKumar7/urlshortener), GCP CDN with Terraform (github.com/DamianKumar7/cdn-with-terraform).
- **Contact channels (keep exact):** damiankumar2000@gmail.com · linkedin.com/in/mainak-kumar-9609761b1 · github.com/DamianKumar7.
- No testimonials, references, or press exist — future work must not invent them.

## Product Principles

1. **Two-speed readability.** Every section must reward a 20-second recruiter skim and a manager's deep read — headline + metric first, detail beneath.
2. **Every claim carries a number.** Impact is shown with specific, verifiable figures from the master profile, never vague adjectives.
3. **Backend seniority leads; AI is the trajectory.** Frame depth of backend/distributed-systems ownership first, AI/agentic work as credible momentum.
4. **Truth is fixed.** Employers, metrics, projects, and contact details are factual and immutable; design may reframe but never fabricate, inflate, or drop them.
5. **Ship-anywhere simplicity.** Stay a fast, dependency-light static site that deploys to GitHub Pages and degrades gracefully when the one external API is down.

## Accessibility & Inclusion

No audience-specific standard was established, but the site targets a general professional audience across desktop and mobile: maintain keyboard operability, visible focus, sufficient contrast, reduced-motion support, and screen-reader-sane semantics as a baseline. (Already implemented per the Web Interface Guidelines pass.)
