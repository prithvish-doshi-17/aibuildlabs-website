"use client";

import { useEffect, useState } from "react";
import { RequestForm } from "../RequestForm";

const navigation = [
  { label: "Workflow", href: "#workflow" },
  { label: "Safety", href: "#safety" },
  { label: "Use cases", href: "#use-cases" },
];

const workflow = [
  {
    number: "01",
    title: "Compare",
    text: "Parse and normalize OpenAPI 3.0 or 3.1 contracts, then classify every change with a deterministic engine.",
    note: "JSON and YAML",
  },
  {
    number: "02",
    title: "Find",
    text: "Map contract changes to the call sites, models, and integration code that will actually need attention.",
    note: "Six languages",
  },
  {
    number: "03",
    title: "Patch",
    text: "Generate a focused unified diff with evidence, validation notes, and the original context kept intact.",
    note: "Review first",
  },
  {
    number: "04",
    title: "Monitor",
    text: "Watch approved API baselines and start the same workflow when a new contract version appears.",
    note: "Continuous",
  },
];

export function PatchPilotPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="pp-page">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="/" aria-label="AI Build Labs home">
          <img
            className="brand-logo"
            src="/brand/ai-build-labs-horizontal.svg"
            alt="AI Build Labs"
          />
        </a>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="PatchPilot navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#request"
            onClick={closeMenu}
          >
            Request early access
          </a>
        </nav>

        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="pp-hero section-shell" id="top">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="pp-hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> PatchPilot / In development
          </p>
          <h1>
            Your API changed.
            <span>Here is the patch.</span>
          </h1>
          <p>
            Compare API versions, identify breaking changes, find affected
            code, and create review-ready migration patches before
            integrations fail.
          </p>
          <div className="hero-actions pp-hero-actions">
            <a
              className="button button-primary"
              href="#request"
            >
              Request early access
            </a>
            <a className="button button-quiet" href="#workflow">
              See the workflow
            </a>
          </div>
        </div>

        <div className="pp-console" aria-label="Example PatchPilot API comparison">
          <div className="pp-console-bar">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>payments-api / contract comparison</span>
            <span className="pp-console-state">ANALYSIS COMPLETE</span>
          </div>
          <div className="pp-console-grid">
            <div className="pp-diff-panel">
              <div className="pp-panel-heading">
                <span>OPENAPI CHANGESET</span>
                <span>v1.0 / v2.0</span>
              </div>
              <p className="pp-endpoint">POST /payments</p>
              <div className="pp-change">
                <span>01</span>
                <div>
                  <small>amount</small>
                  <p>integer <b>string(decimal)</b></p>
                </div>
                <i>BREAKING</i>
              </div>
              <div className="pp-change">
                <span>02</span>
                <div>
                  <small>customer_id</small>
                  <p>optional <b>required</b></p>
                </div>
                <i>BREAKING</i>
              </div>
              <div className="pp-change">
                <span>03</span>
                <div>
                  <small>authentication</small>
                  <p>X-API-Key <b>bearer token</b></p>
                </div>
                <i>BREAKING</i>
              </div>
            </div>

            <aside className="pp-risk-panel">
              <span>RISK SCORE</span>
              <strong>86<small>/100</small></strong>
              <div className="pp-risk-meter"><i /></div>
              <dl>
                <div><dt>Breaking</dt><dd>6</dd></div>
                <div><dt>Potential</dt><dd>3</dd></div>
                <div><dt>Non-breaking</dt><dd>4</dd></div>
              </dl>
              <div className="pp-patch-ready">
                <span>PATCH READY</span>
                <small>4 files / human review required</small>
              </div>
            </aside>
          </div>
        </div>

        <div className="pp-proof">
          <span>Deterministic comparison</span>
          <span>TypeScript, JavaScript, Python</span>
          <span>Java, C#, Go</span>
          <span>Draft pull requests</span>
        </div>
      </section>

      <section className="pp-workflow section-shell" id="workflow">
        <div className="section-heading pp-section-heading">
          <p className="section-index">01 / Workflow</p>
          <div>
            <h2>From changed contract<br />to reviewed patch.</h2>
            <p>
              PatchPilot connects the API change to the code it affects, while
              keeping every important decision visible to the team.
            </p>
          </div>
        </div>

        <div className="pp-workflow-grid">
          {workflow.map((step) => (
            <article key={step.number}>
              <div>
                <span>{step.number}</span>
                <small>{step.note}</small>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pp-safety" id="safety">
        <div className="section-shell pp-safety-grid">
          <div className="pp-safety-copy">
            <p className="section-index">02 / Safety by design</p>
            <p className="eyebrow eyebrow-dark">Clear lines of responsibility</p>
            <h2>
              Determinism finds the change.
              <span>AI explains the impact.</span>
            </h2>
            <p>
              The comparison engine is the source of truth. AI works only from
              structured changes and relevant, redacted snippets to explain
              risk and propose a patch.
            </p>
          </div>

          <div className="pp-control-card">
            <div className="pp-control-top">
              <span>PATCH CONTROL</span>
              <span>HUMAN IN THE LOOP</span>
            </div>
            <div className="pp-control-list">
              <div>
                <span>01</span>
                <p>Contract changes classified</p>
                <small>DETERMINISTIC</small>
              </div>
              <div>
                <span>02</span>
                <p>Affected code matched with evidence</p>
                <small>TRACEABLE</small>
              </div>
              <div>
                <span>03</span>
                <p>Unified diff generated</p>
                <small>REVIEWABLE</small>
              </div>
              <div>
                <span>04</span>
                <p>Draft pull request opened</p>
                <small>APPROVAL REQUIRED</small>
              </div>
            </div>
            <div className="pp-control-note">
              Patches are never merged automatically.
            </div>
          </div>
        </div>
      </section>

      <section className="pp-use-cases section-shell" id="use-cases">
        <div className="section-heading pp-section-heading">
          <p className="section-index">03 / Built for the handoff</p>
          <div>
            <h2>One change.<br />Every team aligned.</h2>
            <p>
              Useful when you consume an API, publish one, or maintain the
              systems that keep both sides moving.
            </p>
          </div>
        </div>

        <div className="pp-use-grid">
          <article>
            <span>CONSUMER TEAMS</span>
            <h3>Know what will break before it does.</h3>
            <p>
              Move from a changed spec to the exact call sites and models that
              need work.
            </p>
          </article>
          <article>
            <span>API PROVIDERS</span>
            <h3>Ship clearer migration paths.</h3>
            <p>
              Give integrators precise impact context instead of another long
              changelog.
            </p>
          </article>
          <article>
            <span>PLATFORM ENGINEERING</span>
            <h3>Standardize API change response.</h3>
            <p>
              Apply one traceable, approval-based workflow across services and
              repositories.
            </p>
          </article>
        </div>
      </section>

      <section className="pp-foundation section-shell">
        <div className="pp-foundation-card">
          <div>
            <p className="eyebrow">Built for real engineering environments</p>
            <h2>Useful automation.<br />Sensible boundaries.</h2>
          </div>
          <div className="pp-foundation-list">
            <span>Least-privilege GitHub App</span>
            <span>Immutable specification history</span>
            <span>Scoped access and audit trails</span>
            <span>Redacted AI context</span>
            <span>Self-hosted deployment support</span>
            <span>Slack, email, and webhook alerts</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell pp-contact" id="request">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow"><span className="status-dot" /> Early access</p>
          <h2>Make the next API<br />change uneventful.</h2>
          <p>
            Tell us how your team handles breaking API changes today. We are
            working with early users as PatchPilot takes shape.
          </p>
          <RequestForm context="PatchPilot early access request" compact />
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="/">
          <img
            className="brand-logo"
            src="/brand/ai-build-labs-horizontal.svg"
            alt="AI Build Labs"
          />
        </a>
        <p>PatchPilot / API change intelligence</p>
        <div className="footer-links">
          <a href="/">The lab</a>
          <a href="#request">Request access</a>
          <a href="#top">Back to top</a>
        </div>
        <span className="copyright">© 2026 AI Build Labs</span>
      </footer>
    </main>
  );
}
