// /app/components/WhiteNoise.tsx
'use client'
import { useEffect } from "react";
import React, { ReactNode } from "react";

const WhiteNoise: React.FC = (): ReactNode => {
  useEffect(() => {
    const updateNoisePosition = () => {
      const bodyStyle = document.body.style;
      bodyStyle.setProperty('--random-x', Math.floor(Math.random() * 100).toString());
      bodyStyle.setProperty('--random-y', Math.floor(Math.random() * 100).toString());
    };

    const intervalId = setInterval(updateNoisePosition, 200);

    return () => clearInterval(intervalId);
  }, []);

  return null;
}

export default WhiteNoise;