"use client";

import { Card } from "@/components/Distort/Card/Card";
import { Container } from "@/components/Distort/Container/Container";
import { cars } from "@/constants/distort/cars";
import { useEffect, useRef } from "react";

export default function Distort() {
  const cardsRef = useRef(null);
  let currentPos = window.scrollY;

  const callDistort = () => {
    const newPos = window.scrollY;
    const diff = newPos - currentPos;
    const speed = diff * 0.25;

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
        <div
          className="cars-container py-16 transition transform duration-200 ease-in will-change-transform"
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
