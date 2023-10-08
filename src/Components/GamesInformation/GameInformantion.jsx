
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const GameInformantion = () => {
    useEffect(() => {
        AOS.init({
            // Initialize AOS with your preferred options
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div className="mt-20 bg-gray-900 text-white font-serif">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">

                        <img src="https://www.gameindustrycareerguide.com/wp-content/uploads/2017/12/jason-w-bay-gdc-expo-small-300x273.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <div data-aos="fade-up">
                            <h1 className="lg:text-5xl text-xl text-bold font-bold">The Best Game Industry Events for Game Developers 2023</h1></div>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">

                            <p className="py-6">In the early days of video games — back in the 1970s — the game industry wasn’t really an “industry” at all. It was just a few companies with a few employees, and everybody seemed to know everybody else. But the popularity of games quickly grew, first through the “arcade boom,” and then driven by the rise of home computers and game consoles.Now, video games are a $100 billion industry that employs tens of thousands of workers in diverse fields like art, programming, design, production, and audio. With all those people and all that technology, it’s far more difficult for game developers to keep up with each other — let alone keep up with the latest industry developments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInformantion;