import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";

const useSmoothScroll = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);
};

export default useSmoothScroll;
