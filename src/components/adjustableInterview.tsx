import Header from "@/components/Header";
import MainText1 from "@/components/MainText_WelcomePage";
import NextButtontoMic from "@/components/NextButtontoMic"
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

export default function AdjustInterviewPage() {
    return (
        <div className="bg-[url('/background.png')] bg-center">
            <div className="flex flex-col min-h-screen px-16 py-8">
                <Header />
                <div className="flex flex-row mt-[45px] space-x-[69px]">
                    <div className="flex items-center justify-center min-w-[240px] min-h-[240px]">
                        <Image
                            src="/microphone.svg"
                            alt="Microphone"
                            width={240}
                            height={240}
                            className="w-full h-full"
                        />
                    </div>
                    <div className="min-w-[900px] h-[333px] flex flex-col justify-between">
                        <MainText1 />
                        <NextButtontoMic />
                        <ProgressBar progress={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}