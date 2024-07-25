import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useTransform,
  useScroll,
} from "framer-motion";

const LandingPage = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const paragraphOneValue2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="bg-white py-[10rem]" ref={containerRef}>
      <section className="flex flex-col gap-10 mb-10">
        <motion.h1
          className="text-black text-5xl text-center"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
        >
          just keep scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: paragraphOneValue }}
          className="text-black font-poppins text-xl font-thin my-11 mx-[20rem]"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit
          dolores facere, quidem amet cum laudantium. Sequi ipsum, consequatur
          rerum minima, ex quis doloribus eum doloremque molestiae a, facere
          debitis?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Minus consequuntur totam culpa, veniam error asperiores, a obcaecati
          aliquam soluta enim nulla quia pariatur quos vitae! Alias
          exercitationem beatae eveniet in.
        </motion.p>
        <motion.p
          style={{ translateX: paragraphOneValue2 }}
          className="text-black font-poppins text-xl font-thin mx-[20rem]"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque velit
          dolores facere, quidem amet cum laudantium. Sequi ipsum, consequatur
          rerum minima, ex quis doloribus eum doloremque molestiae a, facere
          debitis?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Minus consequuntur totam culpa, veniam error asperiores, a obcaecati
          aliquam soluta enim nulla quia pariatur quos vitae! Alias
          exercitationem beatae eveniet in.
        </motion.p>
      </section>
    </div>
  );
};

export default LandingPage;
