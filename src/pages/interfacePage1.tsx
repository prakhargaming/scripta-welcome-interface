import Header from "@/components/Header";
import Image from "next/image";

export default function InterviewPage1() {
    return (
        <div className="relative min-h-screen">
            {/* Blurred background */}
            <div className="absolute inset-0 z-0 backgroundInterview"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen px-16 py-8 items-center">
                <Header />
                <div className="interviewInterfaceTextBig">VDart</div>
                <div className="interviewInterfaceTextSmall">Top Talent, Equitably Sourced</div>
                <div className="h-[45px]" />
                <div className="flex flex-row space-x-4">
                    <div className="interviewInterfaceGlassBox flex flex-col items-center justify-center">
                        <div className="textInsideGlassBox text-center mb-8">
                            Click the button down below to record your answer. <br /> <br />
                            Please submit before the timer runs out to ensure your response is saved.
                        </div>
                        <Image
                            src="/micButton.svg"
                            alt="Microphone"
                            width={116}
                            height={116}
                        />
                    </div>
                    <div className="w-[50px]" />
                    <div className="interviewInterfaceGlassBox flex items-center justify-center">
                        <div className="w-[461px] text-center text-opacity-44 text-2xl leading-[130%] leFont">
                            <span className="font-bold text-gray-400 underline">Question #1: </span> <br /> <br />
                            Can you tell me about a time when you faced a significant challenge at work and how you handled it?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}