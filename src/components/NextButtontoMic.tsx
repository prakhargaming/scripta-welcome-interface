"use client";
import { useRouter } from 'next/router';

function NextButtontoMic() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/step1');
    };

    return (
        <div 
            className="relative w-40 h-20 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={handleClick}
        >
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-normal font-['Outfit'] z-10">
                <span>NEXT</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black to-sky-500 rounded-[54px] border-4 border-white blur-[5.20px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black to-sky-500 rounded-[54px] border-4 border-white backdrop-blur-[10.70px]"></div>
        </div>
    );
}

export default NextButtontoMic;