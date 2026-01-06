import { useState } from "react";
import "./AccordionSlider.css";

// IMAGE IMPORTS (Vite requirement)
import designersBg from "../assets/designers-bg.jpg";
import designersThumb from "../assets/designers-thumb.jpg";

import marketersBg from "../assets/marketers-bg.jpg";
import marketersThumb from "../assets/marketers-thumb.jpg";

import vfxBg from "../assets/vfx-bg.jpg";
import vfxThumb from "../assets/vfx-thumb.jpg";

import creatorsBg from "../assets/creators-bg.jpg";
import creatorsThumb from "../assets/creators-thumb.jpg";

import directorsBg from "../assets/directors-bg.jpg";
import directorsThumb from "../assets/directors-thumb.jpg";

export default function AccordionSlider() {
  const cards = [
    {
      id: 1,
      title: "Designers",
      description: "Create stunning visuals and brand experiences.",
      bg: designersBg,
      thumb: designersThumb,
    },
    {
      id: 2,
      title: "Marketers",
      description: "Drive growth with data-driven strategies.",
      bg: marketersBg,
      thumb: marketersThumb,
    },
    {
      id: 3,
      title: "VFX filmmakers",
      description: "Produce cinematic visual effects and stories.",
      bg: vfxBg,
      thumb: vfxThumb,
    },
    {
      id: 4,
      title: "Content creators",
      description: "Make scroll-stopping content easily.",
      bg: creatorsBg,
      thumb: creatorsThumb,
    },
    {
      id: 5,
      title: "Art directors",
      description: "Lead creative vision and storytelling.",
      bg: directorsBg,
      thumb: directorsThumb,
    },
  ];

  const [activeId, setActiveId] = useState(4);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        {cards.map((card) => {
          const isActive = activeId === card.id;

          return (
            <div
              key={card.id}
              className={`card ${isActive ? "active" : ""}`}
              style={{ backgroundImage: `url(${card.bg})` }}
              onMouseEnter={() => setActiveId(card.id)}
            >
              <div className="overlay" />

              {!isActive && (
                <div className="collapsed-text">
                  <span>{card.title}</span>
                </div>
              )}

              {isActive && (
                <div className="content">
                  <img src={card.thumb} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <button>Details</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
