import { gsap } from "@/lib/gsap-config";

export type IntroPhase =
  | "idle"
  | "darkness"
  | "visor-ignite"
  | "eye-blink"
  | "zoom-pullback"
  | "completed";

export interface IntroTimelineOptions {
  onPhaseChange?: (phase: IntroPhase) => void;
  onComplete?: () => void;
  reducedMotion?: boolean;
}

export class CinematicIntroController {
  private masterTimeline: gsap.core.Timeline | null = null;
  private currentPhase: IntroPhase = "idle";
  private options: IntroTimelineOptions;

  constructor(options: IntroTimelineOptions = {}) {
    this.options = options;
  }

  public shouldSkipIntro(): boolean {
    if (this.options.reducedMotion) return true;
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("tlk_intro_seen") === "true";
  }

  public markIntroSeen(): void {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("tlk_intro_seen", "true");
    }
  }

  public createTimeline(elements: {
    overlay?: HTMLElement | null;
    canvasContainer?: HTMLElement | null;
    heroCopy?: HTMLElement | null;
    header?: HTMLElement | null;
    footer?: HTMLElement | null;
    rail?: HTMLElement | null;
  }): gsap.core.Timeline {
    if (this.masterTimeline) {
      this.masterTimeline.kill();
    }

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        this.setPhase("completed");
        this.markIntroSeen();
        this.options.onComplete?.();
      },
    });

    this.masterTimeline = tl;

    // Fast-path for reduced motion or returning visitors
    if (this.shouldSkipIntro()) {
      tl.call(() => this.setPhase("completed"));
      return tl;
    }

    // Phase 1: Deep darkness and atmospheric buildup (0.0s -> 0.8s)
    tl.call(() => this.setPhase("darkness"), [], 0);

    // Phase 2: Visor ignition & code-eye emergence (0.8s -> 2.0s)
    tl.call(() => this.setPhase("visor-ignite"), [], 0.8);

    // Phase 3: Eye blink & pupil dilation (2.0s -> 3.0s)
    tl.call(() => this.setPhase("eye-blink"), [], 2.0);

    // Phase 4: Zoom pullback through visor to reveal knight figure (3.0s -> 3.8s)
    tl.call(() => this.setPhase("zoom-pullback"), [], 3.0);

    // Phase 5: Hero editorial typography reveal (3.8s -> 4.2s)
    if (elements.header) {
      tl.fromTo(
        elements.header,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        3.8
      );
    }

    if (elements.heroCopy) {
      tl.fromTo(
        elements.heroCopy,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        3.9
      );
    }

    if (elements.rail) {
      tl.fromTo(
        elements.rail,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        4.0
      );
    }

    if (elements.footer) {
      tl.fromTo(
        elements.footer,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        4.1
      );
    }

    return tl;
  }

  public skip(): void {
    if (this.masterTimeline) {
      this.masterTimeline.progress(1);
    }
    this.setPhase("completed");
    this.markIntroSeen();
    this.options.onComplete?.();
  }

  public destroy(): void {
    if (this.masterTimeline) {
      this.masterTimeline.kill();
      this.masterTimeline = null;
    }
  }

  private setPhase(phase: IntroPhase): void {
    this.currentPhase = phase;
    this.options.onPhaseChange?.(phase);
  }

  public getPhase(): IntroPhase {
    return this.currentPhase;
  }
}
