import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import priestessSrc from "@/assets/priestess.png";
const priestess = { url: priestessSrc };
import capesSrc from "@/assets/capes.png";
const capes = { url: capesSrc };
import selfieSrc from "@/assets/selfie.png";
const selfie = { url: selfieSrc };
import nightSrc from "@/assets/night.png";
const night = { url: nightSrc };
import glamSrc from "@/assets/glam.png";
const glam = { url: glamSrc };
import screamSrc from "@/assets/scream.png";
const scream = { url: screamSrc };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Belated Birthday, Areeva — To My Rainbow Gel Pen" },
      { name: "description", content: "A glittery, teal, high-priestess birthday celebration for Areeva." },
      { property: "og:title", content: "Happy Belated Birthday, Areeva" },
      { property: "og:description", content: "To my rainbow gel pen in a sea of black and blue ones." },
    ],
  }),
  component: Index,
});

const SONG_ID = "PRUFche_PKk";

function Sparkles({ count = 60 }: { count?: number }) {
  const [items, setItems] = useState<{ l: number; t: number; s: number; d: number; dl: number }[]>([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }, () => ({
        l: Math.random() * 100,
        t: Math.random() * 100,
        s: 6 + Math.random() * 14,
        d: 2 + Math.random() * 4,
        dl: Math.random() * 4,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="animate-twinkle absolute fill-teal-glow"
          style={{ left: `${p.l}%`, top: `${p.t}%`, width: p.s, height: p.s, ["--d" as string]: `${p.d}s`, animationDelay: `${p.dl}s` }}
        >
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
        </svg>
      ))}
    </div>
  );
}

function GlitterRain() {
  const [bits, setBits] = useState<{ l: number; d: number; dl: number; s: number }[]>([]);
  useEffect(() => {
    setBits(Array.from({ length: 40 }, () => ({ l: Math.random() * 100, d: 7 + Math.random() * 8, dl: Math.random() * 10, s: 3 + Math.random() * 5 })));
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bits.map((b, i) => (
        <span
          key={i}
          className="animate-float-up bg-glitter absolute bottom-[-20px] rounded-sm"
          style={{ left: `${b.l}%`, width: b.s, height: b.s, ["--d" as string]: `${b.d}s`, animationDelay: `${b.dl}s` }}
        />
      ))}
    </div>
  );
}

function Pens() {
  // sea of black & blue pens, one rainbow gel pen
  const pens = useMemo(() => Array.from({ length: 23 }, (_, i) => i), []);
  return (
    <div className="flex items-end justify-center gap-1.5 sm:gap-2.5">
      {pens.map((i) =>
        i === 11 ? (
          <div key={i} className="animate-drift flex flex-col items-center" style={{ ["--r" as string]: "-6deg" }}>
            <div className="bg-glitter shadow-glow h-44 w-4 rounded-t-full rounded-b-sm sm:h-56 sm:w-5" />
            <div className="h-4 w-1.5 bg-pearl" />
          </div>
        ) : (
          <div key={i} className="flex flex-col items-center opacity-80" style={{ transform: `rotate(${((i * 7) % 9) - 4}deg)` }}>
            <div className={`h-36 w-3 rounded-t-full rounded-b-sm sm:h-44 sm:w-4 ${i % 3 === 0 ? "bg-secondary" : "bg-ink"} border border-border`} />
            <div className="h-3 w-1 bg-muted-foreground" />
          </div>
        ),
      )}
    </div>
  );
}

function Photo({ src, alt, rotate, caption }: { src: string; alt: string; rotate: string; caption: string }) {
  return (
    <figure
      className="animate-drift bg-pearl p-3 pb-12 shadow-glow transition-transform duration-500 hover:scale-105"
      style={{ ["--r" as string]: rotate }}
    >
      <img src={src} alt={alt} className="aspect-[4/5] w-full object-cover" loading="lazy" />
      <figcaption className="font-script mt-3 text-center text-3xl text-ink">{caption}</figcaption>
    </figure>
  );
}

function Index() {
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Sparkles />
      <GlitterRain />

      {playing && (
        <iframe
          className="pointer-events-none fixed h-px w-px opacity-0"
          src={`https://www.youtube.com/embed/${SONG_ID}?autoplay=1&loop=1&playlist=${SONG_ID}`}
          allow="autoplay; encrypted-media"
          title="Love You Right"
        />
      )}

      <button
        onClick={() => setPlaying((p) => !p)}
        className="bg-glitter shadow-glow fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full px-5 py-3 font-serif text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        <span className="text-xl">{playing ? "❚❚" : "♫"}</span>
        {playing ? "Pause our song" : "Play “Love You Right”"}
      </button>

      {/* HERO */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-20 lg:flex-row">
        <div className="animate-rise flex-1 text-center lg:text-left">
          <p className="font-serif text-lg tracking-[0.4em] text-muted-foreground uppercase">Happy Belated Birthday</p>
          <h1 className="font-display text-glitter mt-4 text-6xl leading-tight font-black sm:text-8xl">Areeva</h1>
          <p className="font-script mt-6 text-4xl text-teal-glow sm:text-5xl">To My Rainbow Gel Pen</p>
          <p className="mt-2 font-serif text-xl text-muted-foreground italic">in a sea of black and blue ones</p>
          <button
            onClick={() => {
              setPlaying(true);
              document.getElementById("letter")?.scrollIntoView();
            }}
            className="frame-glow mt-10 rounded-full px-8 py-4 font-display text-lg text-teal-glow transition hover:bg-primary hover:text-primary-foreground"
          >
            Open your gift ✦
          </button>
        </div>
        <div className="animate-rise flex-1" style={{ animationDelay: "0.3s" }}>
          <div className="animate-drift mx-auto w-64 sm:w-80" style={{ ["--r" as string]: "3deg" }}>
            <img src={priestess.url} alt="The High Priestess tarot card" className="frame-glow w-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* PENS */}
      <section className="relative z-10 px-4 py-20 text-center">
        <Pens />
        <p className="mx-auto mt-10 max-w-xl font-serif text-2xl text-muted-foreground italic">
          The world hands out a lot of plain pens. Every so often, it gets it right and makes{" "}
          <span className="text-glitter not-italic font-semibold">one that sparkles</span>. That's you.
        </p>
      </section>

      {/* LETTER */}
      <section id="letter" className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <div className="frame-glow rounded-3xl bg-card/80 p-8 backdrop-blur-md sm:p-14">
          <p className="font-script text-5xl text-teal-glow">Dear Stinky,</p>
          <div className="mt-8 space-y-6 font-serif text-xl leading-relaxed text-card-foreground sm:text-2xl">
            <p>We wanted to give you something that reminds you how important you are, even if your birthday may cause you to think otherwise.</p>
            <p>I know things have been difficult for you, settling into a new routine foreign to you and what you may have hoped for, but I want you to always remember that you have me. <em className="text-teal-glow">You have us!</em> We love you, Stinky, and you're never alone.</p>
            <p>Even though you weren't able to take pictures of your high priestess costume, just know you're already the high priestess. You don't need any costume; you don't need anything; you just need yourself. And that's all that matters.</p>
            <p>Hopefully this makes your birthday a little better, even though it was over a month ago.</p>
          </div>
          <p className="font-display text-glitter mt-10 text-center text-4xl font-black sm:text-5xl">HAPPY BELATED BIRTHDAY!</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-glitter text-center text-4xl font-bold sm:text-6xl">Evidence You're Iconic</h2>
        <p className="mt-4 text-center font-serif text-xl text-muted-foreground italic">exhibits A through E, submitted to the court of good birthdays</p>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Photo src={capes.url} alt="Wonder Woman capes" rotate="-3deg" caption="certified superheroes" />
          <Photo src={glam.url} alt="Areeva glamorous in black" rotate="2deg" caption="main character energy" />
          <Photo src={scream.url} alt="Excited screaming" rotate="-2deg" caption="pure chaos, pure love" />
          <Photo src={night.url} alt="Areeva at night by a lamppost" rotate="3deg" caption="lamppost runway" />
          <Photo src={selfie.url} alt="Selfie together" rotate="-1deg" caption="mwah, stinky" />
          <figure className="animate-drift flex flex-col items-center justify-center rounded-xl bg-card/80 p-6 text-center frame-glow" style={{ ["--r" as string]: "2deg" }}>
            <img src={priestess.url} alt="High Priestess" className="w-40 rounded-md" loading="lazy" />
            <figcaption className="mt-4 font-serif text-xl italic">No costume needed. You <span className="text-teal-glow">are</span> the card.</figcaption>
          </figure>
        </div>
      </section>

      {/* PRIESTESS READING */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={priestess.url} alt="The High Priestess" className="frame-glow mx-auto w-60 -rotate-3 rounded-xl" />
          <div>
            <p className="font-serif text-lg tracking-[0.3em] text-muted-foreground uppercase">Your reading for the year</p>
            <h2 className="font-display text-glitter mt-3 text-4xl font-bold">II · The High Priestess</h2>
            <p className="mt-6 font-serif text-xl leading-relaxed">
              Intuition. Mystery. Quiet power. She sits between the dark pillar and the light one and belongs fully to neither, because she doesn't have to. She already knows.
            </p>
            <p className="mt-4 font-serif text-xl leading-relaxed text-muted-foreground">
              New places and strange routines can't take that from you. The moon is at your feet, babe. Trust yourself.
            </p>
          </div>
        </div>
      </section>

      {/* BAD BIRTHDAYS -> REDEMPTION */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="font-display text-glitter text-4xl font-bold sm:text-5xl">Birthday Curse: Officially Broken</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            ["✦", "Past birthdays", "Rough. We know. We were there. They're cancelled now."],
            ["✧", "This birthday", "A month late, glitter-coated, loud, and made with way too much love."],
            ["❋", "Every one after", "Better. That's not a wish, that's a promise from your people."],
          ].map(([icon, title, body]) => (
            <div key={title} className="frame-glow rounded-2xl bg-card/70 p-8 backdrop-blur">
              <div className="text-glitter text-5xl">{icon}</div>
              <h3 className="font-display mt-4 text-xl text-teal-glow">{title}</h3>
              <p className="mt-3 font-serif text-lg text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WISH */}
      <section className="relative z-10 px-6 py-28 text-center">
        {!opened ? (
          <button
            onClick={() => setOpened(true)}
            className="bg-glitter shadow-glow rounded-full px-10 py-5 font-display text-xl font-bold text-primary-foreground transition hover:scale-105"
          >
            Make a wish 🕯️
          </button>
        ) : (
          <div className="animate-rise mx-auto max-w-2xl">
            <p className="text-7xl">🎂</p>
            <p className="font-script mt-6 text-5xl text-teal-glow">Wish granted.</p>
            <p className="mt-4 font-serif text-2xl">
              You get to keep us forever. No returns, no refunds. Happy birthday, Areeva.
            </p>
          </div>
        )}
        <p className="font-display text-glitter mt-24 text-2xl">with all our love, always ✦</p>
      </section>
    </main>
  );
}
