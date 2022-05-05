import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import styles from '../styles/LikeButton.module.css';

let animation;
function handleLikeButtonClick(animation) {
  animation.play();
}

function LikeButton() {
  const ref = useRef(null);
  useEffect(() => {
    animation = lottie.loadAnimation({
      autoplay: false,
      loop: false,
      container: ref.current,
      renderer: 'svg',
      path: '/lottie/like-button.json',
    });
    return () => animation.destroy();
  }, []);
  return (
    <div
      ref={ref}
      onClick={() => handleLikeButtonClick(animation)}
      className={styles.LikeButton}
    />
  );
}

export default LikeButton;
