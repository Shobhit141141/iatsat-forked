import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./carousal.css";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "State Level",
      description:
        "There will be 150 MCQ in State Level. The Duration of the test will be 90 min. Mode of examination will be online. Qualified Students will move to the Zonal level."
    },
    {
      title: "Zonal Level",
      description:
        "There will be 150 MCQ in State Level. The Duration of the test will be 90 min. Mode of examination will be online. Qualified Students will move to the National level."
    },
    {
      title: "National Level",
      description:
        "At National level students will participate in Groups. They will be assessed individually and as well as a team."
    },
    {
      title: "Inational Level",
      description:
        "Top 20% of qualified students from Level 3 will be competing at the International Level. At this level students will compete in two teams."
    }
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
