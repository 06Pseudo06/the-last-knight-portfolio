import React from "react";

export function OriginSection() {
  return (
    <section className="origin-preview" id="origin" aria-labelledby="origin-heading">
      <div className="section-index" aria-label="Chapter number">
        01 / THE ORIGIN
      </div>
      <div className="origin-content">
        <p className="eyebrow">
          <span /> BEHIND THE ARMOUR
        </p>
        <h2 id="origin-heading">
          Curiosity is
          <br />
          where it <em>begins.</em>
        </h2>
        <p>
          I am a developer drawn to the process of understanding how things
          work, turning complex problems into thoughtful systems, and building
          digital experiences with purpose.
        </p>
        <span className="coming-next" aria-hidden="true">
          THE STORY CONTINUES ↓
        </span>
      </div>
    </section>
  );
}
