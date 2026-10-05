// Lightweight Web Audio API synthesizer for UI micro-interactions
// OFF by default, can be toggled by the user in the header/status panel.

class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = false;

  constructor() {
    // sound is OFF by default
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("hk-portfolio-sound");
      this.soundEnabled = stored === "true";
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public setEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("hk-portfolio-sound", enabled ? "true" : "false");
    }
    if (enabled) {
      this.initCtx();
      this.playBeep(880, 0.05, 0.02);
    }
  }

  public toggle(): boolean {
    this.setEnabled(!this.soundEnabled);
    return this.soundEnabled;
  }

  public playHover() {
    if (!this.soundEnabled) return;
    this.playBeep(1200, 0.02, 0.008);
  }

  public playClick() {
    if (!this.soundEnabled) return;
    this.playBeep(600, 0.04, 0.025);
  }

  public playSuccess() {
    if (!this.soundEnabled) return;
    this.playBeep(523.25, 0.06, 0.02);
    setTimeout(() => this.playBeep(659.25, 0.06, 0.02), 70);
    setTimeout(() => this.playBeep(783.99, 0.1, 0.02), 140);
  }

  private playBeep(freq: number, duration: number, volume: number = 0.015) {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might fail before user interaction, safely ignore
    }
  }

  public triggerHaptic(duration: number = 10) {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(duration);
      } catch {
        // Safe fallback
      }
    }
  }
}

export const soundManager = new SoundManager();
