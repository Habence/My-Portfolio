import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";

const useSmoothScroll = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
};

export default useSmoothScroll;
