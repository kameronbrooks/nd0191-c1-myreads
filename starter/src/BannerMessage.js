import { useState, useEffect } from 'react';
import './BannerMessage.css';

const BannerMessage = ({bannerMessage, setBannerMessage}) => {
  const [fade, setFade] = useState(false);

  // Set a timer to fade out the banner message after 3 seconds
  useEffect(() => {
    const duration = 3000;
    if (bannerMessage) {
      setFade(true);
      const timer = setTimeout(() => {
        setFade(false);
      }, duration);
      const timer2 = setTimeout(() => {
        setBannerMessage(null);
      }, duration+1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [bannerMessage, setBannerMessage]);

  if (!bannerMessage) return null;

  return (
    <div className={`modal-banner ${fade ? 'fade-in' : 'fade-out'} ${bannerMessage.status}` }>
      <span className='message'>{bannerMessage.message}</span>
      <button className='close-button' onClick={() => setBannerMessage(null)}>X</button>
    </div>
  )
}

export default BannerMessage;