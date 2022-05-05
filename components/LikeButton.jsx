import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

function LikeButton() {
  const ref = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      path: '/lottie/like-button.json',
    });
    return () => animation.destroy();
  }, []);
  return <div ref={ref} />;
}

export default LikeButton;
