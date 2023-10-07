import { useInView } from "react-intersection-observer";

interface ObserverComponentProps {
    
}
 
const ObserverComponent: React.FC<ObserverComponentProps> = () => {
    const { ref, inView, } = useInView();
    return (
        <div className="w-full h-screen bg-black text-white">
            <div className="w-full flex justify-center pt-[5rem]">
                {inView ? "In View" : "Not In View"}
            </div>
            <div className="h-[50vh]"></div>
            <div ref={ref} className="w-full  h-[20rem] bg-blue-500">

            </div>
        </div>
      );
}
 
export default ObserverComponent;