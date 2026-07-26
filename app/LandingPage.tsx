"use client";

import { useEffect, useState } from "react";
import { RequestForm } from "./RequestForm";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export function LandingPage() {
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
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="AI Build Labs home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>AI Build Labs</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Send a request
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

      <section className="hero section-shell" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Independent AI product lab
          </p>
          <h1>
            We turn sharp ideas
            <span> into useful software.</span>
          </h1>
          <p className="hero-intro">
            AI Build Labs is an ideation space and product company. We explore
            ambitious problems, build focused tools, and ship the ones that
            deserve to exist.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore our products
            </a>
            <a className="button button-quiet" href="#approach">
              How we build
            </a>
          </div>
        </div>

        <div className="hero-lab" aria-label="AI Build Labs product pipeline">
          <div className="lab-window">
            <div className="lab-topbar">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>LAB / ACTIVE</span>
              <span className="live-label">LIVE</span>
            </div>
            <div className="lab-grid">
              <div className="signal-panel">
                <span className="panel-label">SIGNAL</span>
                <div className="orbital-mark" aria-hidden="true">
                  <span className="orbit orbit-one" />
                  <span className="orbit orbit-two" />
                  <span className="orbit-core" />
                </div>
                <p>Finding leverage at the edge of what AI can do.</p>
              </div>
              <div className="pipeline-panel">
                <span className="panel-label">BUILD LOOP</span>
                <div className="pipeline-list">
                  <div className="pipeline-row is-complete">
                    <span>01</span>
                    <p>Find the signal</p>
                    <i>✓</i>
                  </div>
                  <div className="pipeline-row is-active">
                    <span>02</span>
                    <p>Build the proof</p>
                    <i />
                  </div>
                  <div className="pipeline-row">
                    <span>03</span>
                    <p>Ship the product</p>
                    <i />
                  </div>
                </div>
                <div className="lab-readout">
                  <span>01 PRODUCT SHIPPING</span>
                  <span>∞ IDEAS IN MOTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footnote">
          <span>EST. 2026</span>
          <span className="scroll-cue">Scroll to enter the lab</span>
          <span>BUILDING ON THE OPEN WEB</span>
        </div>
      </section>

      <section className="products section-shell" id="products">
        <div className="section-heading">
          <p className="section-index">01 / Products</p>
          <div>
            <h2>Small portfolio.<br />Serious intent.</h2>
            <p>
              Each product starts with a precise question: can AI make this
              meaningfully better? If the answer holds up, we build.
            </p>
          </div>
        </div>

        <article className="product-card product-featured">
          <div className="product-info">
            <div className="product-meta">
              <span>01</span>
              <span className="product-status"><i /> In development</span>
            </div>
            <div>
              <p className="product-kicker">Developer tooling</p>
              <h3>PatchPilot</h3>
              <p className="product-description">
                A focused AI teammate for understanding, planning, and shipping
                safer code changes without losing the plot.
              </p>
            </div>
            <a className="product-link" href="/patchpilot/">
              Explore PatchPilot
            </a>
          </div>

          <div className="product-visual" aria-hidden="true">
            <div className="code-window">
              <div className="code-header">
                <span>patchpilot / change-plan</span>
                <span className="code-running"><i /> analyzing</span>
              </div>
              <div className="code-body">
                <div className="code-rail">
                  <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span>
                </div>
                <div className="code-lines">
                  <p><b>scope</b> authentication / session</p>
                  <p><b>intent</b> prevent stale refresh tokens</p>
                  <p className="code-muted">────────────────────────</p>
                  <p className="code-green">+ rotate token after successful refresh</p>
                  <p className="code-green">+ invalidate the previous session key</p>
                  <p className="code-blue"><i className="code-status-dot" />verification plan ready</p>
                </div>
              </div>
              <div className="code-footer">
                <span>3 files mapped</span>
                <span>LOW RISK</span>
              </div>
            </div>
            <div className="patch-badge">
              <span>PP</span>
              <div><b>PATCH READY</b><small>context preserved</small></div>
              <i>✓</i>
            </div>
          </div>
        </article>

        <div className="product-slots">
          <div className="product-slot">
            <span>02</span>
            <p>In incubation</p>
            <i aria-hidden="true">✦</i>
          </div>
          <div className="product-slot">
            <span>03</span>
            <p>Reserved for a good idea</p>
            <i aria-hidden="true">＋</i>
          </div>
        </div>
      </section>

      <section className="approach section-shell" id="approach">
        <div className="section-heading approach-heading">
          <p className="section-index">02 / Our approach</p>
          <div>
            <p className="eyebrow eyebrow-dark">The operating system</p>
            <h2>Think clearly.<br />Build quickly.<br /><em>Earn the right to scale.</em></h2>
          </div>
        </div>

        <div className="principles">
          <article>
            <span className="principle-number">01</span>
            <div className="principle-icon">⌁</div>
            <h3>Find the signal</h3>
            <p>Start with a sharp problem, not a fashionable technology. Talk to reality early.</p>
          </article>
          <article>
            <span className="principle-number">02</span>
            <div className="principle-icon">⌘</div>
            <h3>Build the proof</h3>
            <p>Turn the riskiest assumption into working software while the idea is still flexible.</p>
          </article>
          <article>
            <span className="principle-number">03</span>
            <div className="principle-icon">◎</div>
            <h3>Ship with taste</h3>
            <p>Make it focused, dependable, and a pleasure to use. Details are part of the product.</p>
          </article>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-grid">
          <p className="section-index">03 / About the lab</p>
          <div className="about-statement">
            <p>
              Part studio. Part workshop. Part company.
            </p>
            <h2>
              AI Build Labs is a home for useful, opinionated products, built
              with curiosity, technical depth, and an allergy to bloat.
            </h2>
          </div>
          <div className="about-aside">
            <p>We believe small, AI-native teams can create products with outsized impact.</p>
            <span>Based on the internet<br />Working everywhere</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow"><span className="status-dot" /> The lab is open</p>
          <h2>Have a hard problem<br />worth building for?</h2>
          <p>We like ambitious ideas, thoughtful people, and conversations that start with “what if?”</p>
          <RequestForm context="AI Build Labs product request" compact />
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>AI Build Labs</span>
        </a>
        <p>Ideas in. Products out.</p>
        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#contact">Send a request</a>
          <a href="#top">Back to top</a>
        </div>
        <span className="copyright">© 2026 AI Build Labs</span>
      </footer>
    </main>
  );
}
