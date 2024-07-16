import Header from "@/components/Header";
import MainText1 from "@/components/MainText_WelcomePage";
import NextButtontoVoice from "@/components/NextButtontoVoice";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

export default function microphonePage() {
    return (
        <div className="bg-[url('/background.png')] bg-center min-h-screen">
            <div className="flex flex-col min-h-screen px-16 py-8">
                <Header />
                <div className="flex-grow flex justify-start items-center">
                    <div className="flex flex-row items-center pl-[100px]">
                        <Image
                            src="/read.svg"
                            alt="Description of SVG"
                            width={100}
                            height={100}
                            className="bigMic"
                        />
                        <div className="w-[87.62px]"></div>
                        <div>
                            <div className="h-[45px]" />
                            <div className="flex flex-col items-left py-9">
                            <div className="w-full text-left">
                                <div className="text-white/opacity-90 text-[130px] font-normal font-['Outfit'] leading-[144.30px]">Read the</div>
                                <div className="relative">
                                    <div className="custom-text4 top-0 left-0 ">Question</div>
                                    <div className="custom-text1 absolute top-0 left-0">Question</div>
                                    <div className="custom-text2 absolute top-0 left-0">Question</div>
                                </div>
                            </div>
                            <div className="h-[20px]"></div> {/* This adds 28px of space */}
                            <div className="text-left text-white text-[25px] font-light font-['Outfit'] leading-[30px]">
                                You will have 15 seconds to carefully read the question
                            </div>
                        </div>
                            <div className="h-[38px]" />
                            <NextButtontoVoice />
                            <div className="flex-grow h-[45px]" />
                        </div>
                    </div>
                </div>
                <ProgressBar progress={50} />
            </div>
        </div>
    );
}