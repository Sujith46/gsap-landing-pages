"use client";

import Link from "next/link";
import { useEffect } from "react";

export const AnimatedCursorNav = () => {
  const links = ["Home", "Studio", "Our Story", "Contact"];

  if (window) {
    document.querySelector("html").style.cursor = "none";
  }

  useEffect(() => {
    (() => {
      const linkRef = document.querySelectorAll("nav > .hover-this");
      const cursorRef = document.querySelector(".cursor");

      const handleCursorAnimation = function (e) {
        const spanRef = this.querySelector("span");
        const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = (x / width) * (move * 2) - move,
          yMove = (y / height) * (move * 2) - move;

        spanRef.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === "mouseleave") {
          spanRef.style.transform = "";
        }
      };

      const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursorRef.style.left = x + "px";
        cursorRef.style.top = y + "px";
      };

      linkRef.forEach((elem) =>
        elem.addEventListener("mousemove", handleCursorAnimation)
      );
      linkRef.forEach((elem) =>
        elem.addEventListener("mouseleave", handleCursorAnimation)
      );

      window.addEventListener("mousemove", editCursor);

      () => window.removeEventListener("mousemove", editCursor);
      () => window.removeEventListener("mousemove", editCursor);
    })();
  }, []);

  return (
    <nav className="flex justify-around w-full my-0 mx-auto text-center absolute top-1/2 cursor-none">
      {links?.map((menu, index) => (
        <Link
          href="#"
          key={index}
          className="hover-this transition-all duration-300 ease-in cursor-none"
        >
          <span className=" text-5xl inline-block pointer-events-none transform duration-[0.1s] ease-linear">
            {menu}
          </span>
        </Link>
      ))}
      <div className="cursor fixed bg-white pointer-events-none p-[0.3rem] rounded-full mix-blend-difference transform "></div>
    </nav>
  );
};
