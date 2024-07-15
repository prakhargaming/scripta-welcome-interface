import Header from "@/components/Header";
import MainText1 from "@/components/MainText_WelcomePage";
import NextButtontoVoice from "@/components/NextButtontoVoice";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";

export default function answerPage() {
    return (
        <div className="bg-[url('/background.png')] bg-center">
        <div className="flex flex-col min-h-screen px-16 py-8">
          <Header />
            <div className="flex flex-row">
                <div className="flex items-center justify-center">
                    <Image
                        src="/microphone.svg"
                        alt="Description of SVG"
                        width={100} // Adjust as needed
                        height={100} // Adjust as needed
                        className="h-full" // Adjust as needed
                    />
                </div>
                <div>
                    <div className="h-[45px]" />
                    <MainText1 />
                    <div className="h-[45px]" />
                    <NextButtontoVoice/>
                    <div className="flex-grow h-[45px]" /> {/* This creates space between the button and progress bar */}
                    <ProgressBar progress={50} />
                </div>
            </div>
        </div>
        </div>
      );
    }
