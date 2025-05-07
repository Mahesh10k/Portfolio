import Typed from "typed.js"
import {useEffect, useRef} from "react"

const Home = () => {

      const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: [
            "MERN Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "Fullstack Developer",
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1500,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

  return (
        <div className="container mx-auto px-4 mt-[85px]">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:mb-8 md:mb-20">
            <div className="text-center sm:text-center w-full sm:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                    Mahesh Pikki
                </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
                Aspiring{" "}
                <span
                    ref={typedRef}
                    className="text-blue-600 dark:text-blue-400"
                ></span>
                </h2>
            </div>

            <div className="order-1 sm:order-2 w-full sm:w-2/5 md:w-1.0/5 mb-8 sm:mb-0">
                <div className="relative max-w-xs mx-auto sm:mx-0">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg rotate-3 absolute -z-10 top-3 left-3 w-full h-full " ></div>
                <div className="aspect-square rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-xl border-2 border-white dark:border-gray-700" >
                    <img
                    src="https://res.cloudinary.com/daz6mccmm/image/upload/IMG_20250427_200807_bhcact.jpg"
                    alt="Developer"
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </div>
            </div>
      
        </div>
  )
}

export default Home;
