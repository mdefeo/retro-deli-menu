// /app/page.tsx
'use client'
import Headline from "./components/Headline";
import Menu from "./components/Menu";
import React, { useEffect } from 'react';

  export default function Home() {
  useEffect(() => {
    const scrollContainer = document.getElementById('menu-container');
    const scrollContent = document.getElementById('menu-inner-container');

    if (scrollContent && scrollContainer) {
      const contentHeight = scrollContent.scrollHeight;
      const containerHeight = scrollContainer.offsetHeight;
      // This calculates the total height the animation needs to cover.
      const translateYValue = (contentHeight / containerHeight) * 100;

      // Adjusts the duration based on the content height, you might need to tweak this for your needs.
      const duration = (contentHeight / 1000) * 20; // Let's make it slower than before

      document.documentElement.style.setProperty('--translate-y-end', `-${translateYValue}%`);
      document.documentElement.style.setProperty('--scroll-speed', `${duration}s`);
    }
  }, []);

  return (
    <div id="menu-container" className="scrolling-menu h-full w-full overflow-hidden">
      <div id="menu-inner-container" className="scroll-content flex flex-col items-center justify-start h-full">
        <Headline headlineTitle="Bobby's Deli" />
        <Menu />
      </div>
    </div>
  );
}