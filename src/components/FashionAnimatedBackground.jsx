import { useEffect, useRef } from 'react';
import FabricWaves from './FabricWaves';
import FloatingFashionElements from './FloatingFashionElements';

function FashionAnimatedBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background || !window.matchMedia('(pointer: fine)').matches) return undefined;

    let frameId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      background.style.setProperty('--parallax-x', `${currentX.toFixed(2)}px`);
      background.style.setProperty('--parallax-y', `${currentY.toFixed(2)}px`);
      frameId = requestAnimationFrame(updateParallax);
    };

    const handlePointerMove = (event) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 18;
      targetY = (event.clientY / window.innerHeight - 0.5) * 14;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="animated-background" aria-hidden="true">
      <div className="background-orb background-orb-burgundy" />
      <div className="background-orb background-orb-blush" />
      <div className="background-grid" />
      <FabricWaves />
      <FloatingFashionElements />
    </div>
  );
}

export default FashionAnimatedBackground;