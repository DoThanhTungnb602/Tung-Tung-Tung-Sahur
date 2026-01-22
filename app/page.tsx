"use client";


import { RoughNotation } from "react-rough-notation";
import clsx from "clsx";
import PaperButton from "./components/PaperButton";

const stickyNotes = [
  {
    title: "Maps",
    href: "/roadmap",
    color: "#EAE4E9", // lavender
    rotate: "-rotate-2",
  },
  {
    title: "Quiz",
    href: "/quiz",
    color: "#BEE1E6", // sky
    rotate: "rotate-1",
  },
  {
    title: "Design",
    href: "/design",
    color: "#FFF1E6", // peach
    rotate: "-rotate-1",
  },
  {
    title: "LeetCode",
    href: "/leetcode",
    color: "#E2ECE9", // mint
    rotate: "rotate-2",
  },
  {
    title: "Docs",
    href: "/topics",
    color: "#FAD2E1", // pink
    rotate: "rotate-3",
  }
];

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-20 relative overflow-hidden font-patrick-hand bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay for contrast if needed */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Header */}
      <h1 className="text-6xl text-white mb-24 z-10 font-[family-name:var(--font-patrick-hand)] drop-shadow-lg">
        <RoughNotation type="highlight" show color="#FAD2E1" multiline padding={10} animationDuration={1500}>
          <span className="text-black px-4">Tung Tung Tung Sahur</span>
        </RoughNotation>
      </h1>

      {/* The Wall Grid */}
      <div className="flex flex-wrap justify-center gap-12 max-w-4xl z-10 px-4">
        {stickyNotes.map((note) => (
          <PaperButton
            key={note.title}
            href={note.href}
            as="div"
            className={clsx(
              "w-64 h-32 flex flex-col justify-center items-center text-center",
              note.rotate
            )}
            style={{
              backgroundColor: note.color,
            }}
          >
            <h3 className="text-4xl font-bold text-[#41403e]">{note.title}</h3>
          </PaperButton>
        ))}
      </div>
    </div>
  );
}
