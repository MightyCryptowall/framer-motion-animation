"use client";

import clsx from "clsx";
import {motion, useAnimationControls} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FramerMotionObserverProps {
    
}
 
const FramerMotionObserver: React.FC<FramerMotionObserverProps> = () => {
    const control = useAnimationControls();
    const { ref, inView } = useInView({
        threshold: 0.5
    });

      useEffect(() => {
        if(inView){
            control.start({opacity: 1, x: 0, rotate: 0, scale: 1});
        }else{
            control.start({opacity: 0, x: -100, rotate: 45, scale: 2});
        }
      },[inView])

    return ( 
        <div className="w-full flex py-[5rem]">
            <motion.div 
                ref={ref}
                animate={control} 
                className={clsx(
                    "translate-x-[-100px]",
                    "w-[50%] opacity-0",
                    "rotate-[45deg] scale-[2]",
                )}
                transition={{duration: 0.7, ease:"easeOut"}}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam eligendi distinctio omnis iure nihil hic quo deleniti vitae voluptatibus voluptate optio repellendus expedita assumenda consectetur aliquid beatae? Iure architecto, aperiam asperiores perferendis quis, corrupti hic obcaecati, voluptas eius iusto aspernatur. Ab accusamus, nemo neque distinctio nobis ex voluptas quia?
            </motion.div>
        </div>
     );
}
 
export default FramerMotionObserver;