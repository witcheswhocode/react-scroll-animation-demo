import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    // Background color animation
    gsap.to("body", {
      scrollTrigger: {
        trigger: ".section", // Trigger element
        start: "top top", // Start when the top of the section hits the top of the viewport
        end: "bottom bottom", // End when the bottom of the section hits the bottom of the viewport
        scrub: true, // Smooth animation tied to scroll
      },
      backgroundColor: "#f87171", // Tailwind's "red-400"
      duration: 1,
    });

    // Element movement
    gsap.fromTo(
      ".moving-element",
      { x: -100, opacity: 0 }, // Starting position and opacity
      {
        x: 100, // Final position
        opacity: 1, // Final opacity
        scrollTrigger: {
          trigger: ".section",
          start: "top center", // Start when the section hits the middle of the viewport
          end: "bottom center", // End when the section leaves the middle of the viewport
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      {/* First Section */}
      <div className="section h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold">Scroll Down</h1>
        <div className="moving-element text-white bg-gray-800 px-6 py-3 rounded-lg text-lg mt-6">
          I'm moving!
        </div>
      </div>

      {/* Second Section */}
      <div className="section h-screen flex items-center justify-center bg-gray-400">
        <h1 className="text-4xl font-bold">Keep Scrolling</h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;
