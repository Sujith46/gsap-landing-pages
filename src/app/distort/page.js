"use client";

import { Card } from "@/components/Distort/Card/Card";
import { Container } from "@/components/Distort/Container/Container";
import { BackToHome } from "@/components/common/backToHome/BackToHome";
import { cars } from "@/constants/distort/cars";
import { useEffect, useRef } from "react";

export default function Distort() {
  const cardsRef = useRef(null);
  let currentPos = window.scrollY;

  const callDistort = () => {
    const newPos = window.scrollY;
    const diff = newPos - currentPos;
    const speed = diff * 0.35;

    cardsRef.current.style.transform = `skewY(${speed}deg)`;
    currentPos = newPos;
    requestAnimationFrame(callDistort);
  };

  useEffect(() => {
    callDistort();
  }, []);
  return (
    <main className="w-screen h-screen">
      <Container>
        <div className="info-content flex items-center justify-between">
          <h1 className="py-8 text-gray-400">Scroll to see distortion</h1>
          <BackToHome />
        </div>
        <div
          className="cars-container pb-8 transform duration-300 ease-in-out will-change-transform"
          ref={cardsRef}
        >
          {cars?.sports_cars?.map((car, index) => (
            <Card
              key={index}
              image={car.image}
              heading={car.heading}
              description={car.description}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
