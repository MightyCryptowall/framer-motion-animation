import clsx from 'clsx';
import { motion, useAnimationControls } from 'framer-motion';

interface FramerMotionProps {}

const FramerMotion: React.FC<FramerMotionProps> = () => {
    const controls = useAnimationControls();

  
  const showAnimation = () => {
    controls.start({ opacity: 1 })
  }
  const hideAnimation = () => {
    controls.start({ opacity: 0 })
  }
  return (
    <div className="w-full flex gap-2 ">
      <motion.div
        className="w-[30%] opacity-0"
        animate={controls}
        transition={{ duration: 1, type: "easeInOut" }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ipsam
        ab beatae repellat totam eius fugiat temporibus odit repudiandae
        doloribus asperiores impedit, ad illo iure dicta sunt? Magni, labore
        deserunt. Quasi dolores dolor fugiat nihil officia, odio laboriosam
        molestias accusantium! Dolorem veniam vitae alias vero dicta, incidunt
        nemo totam placeat?
      </motion.div>
      <div>
        <button
          className={clsx("bg-black text-white py-2 px-5")}
          onClick={showAnimation}
        >
          Show Animation
        </button>
        <button
          className={clsx("bg-black text-white py-2 px-5")}
          onClick={hideAnimation}
        >
          Hide Animation
        </button>
      </div>
    </div>
  );
};

export default FramerMotion;
