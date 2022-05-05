import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import styles from '../styles/LikeButton.module.css';

let animation;
function handleLikeButtonClick(animation, setIsLiked) {
  animation.play();
  setIsLiked(true);
}

function LikeButton() {
  const ref = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
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
      onClick={() => handleLikeButtonClick(animation, setIsLiked)}
      className={styles.LikeButton + (isLiked ? ' ' + styles.liked : '')}
    />
  );
}

export default LikeButton;
