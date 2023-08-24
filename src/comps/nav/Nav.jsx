import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Nav = () => {
  const navUlRef = useRef(null);
  const navOverlayRef = useRef(null);

  useEffect(() => {
    const lists = navUlRef.current.querySelectorAll("a");
    const navOverlay = navOverlayRef.current;
    lists.forEach((li, index) => {
      li.addEventListener("mouseenter", () => {
        let liWidth = li.clientWidth;
        navOverlay.style.width = liWidth + "px";
        function navOverlayMove(px) {
          navOverlay.style.transform = `translateX(${liWidth - px}px)`;
        }
        if (window.innerWidth >= 490) {
          if (index === 0) {
            navOverlayMove(78);
          }
          if (index === 1) {
            navOverlayMove(9);
          }
          if (index === 2) {
            navOverlayMove(-84);
          }
          if (index === 3) {
            navOverlayMove(-192);
          }
        }

        if (window.innerWidth < 490) {
          if (index === 0) {
            navOverlayMove(55);
          }
          if (index === 1) {
            navOverlayMove(12);
          }
          if (index === 2) {
            navOverlayMove(-47);
          }
          if (index === 3) {
            navOverlayMove(-117);
          }
        }
      });
      li.addEventListener("mouseleave", () => {
        navOverlay.style.width = "";
        navOverlay.style.transform = `translateX(${0}px)`;
      });
    });

    let timeline = gsap.timeline();
    timeline
      .from(".navOverlay", {
        y: "-20vh",
        duration: 0.7,
        opacity: 0,
      })
      .to(
        ".navOverlay",
        {
          transition: "0.2s linear",
        },
        "<"
      )
      .from(
        lists,
        {
          y: "-10vh",
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        },
        "0.5"
      );
  }, []);
  return (
    <nav>
      <ul ref={navUlRef}>
        <Link to="/">Home</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/About">About Me</Link>
        <Link to="/Contact">Contact Me</Link>
        <div ref={navOverlayRef} className="navOverlay"></div>
      </ul>
    </nav>
  );
};

export default Nav;
