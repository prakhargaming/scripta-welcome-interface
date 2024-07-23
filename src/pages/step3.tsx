import Header from "@/components/Header";
import NextButtontoInterface from "@/components/NextButtontoInterface";
import Image from "next/image";
import EqualizerIcon from "@/components/EqualizerIcon";
import SegmentedProgressBar from "@/components/SegmentedProgressBar";

export default function microphonePage() {
    const segments = [
        { href: '/welcome'},
        { href: '/step1' },
        { href: '/step2' },
        { href: '/step3' , active: true},
      ];

    return (
        <div className="bg-[url('/background.png')] bg-center min-h-screen">
            <div className="flex flex-col min-h-screen px-16 py-8">
                <Header />
                <div className="flex-grow flex justify-start items-center">
                    <div className="flex flex-row items-center pl-[100px]">
                        <EqualizerIcon/>
                        <div className="w-[87.62px]"></div>
                        <div>
                            <div className="h-[45px]" />
                            <div className="flex flex-col items-left py-9">
                            <div className="w-full text-left">
                                <div className="text-white/opacity-90 text-[130px] font-normal font-['Outfit'] leading-[144.30px]">Answer to the</div>
                                <div className="relative">
                                    <div className="custom-text4 top-0 left-0 ">Best of your ability</div>
                                    <div className="custom-text1 absolute top-0 left-0">Best of your ability</div>
                                    <div className="custom-text2 absolute top-0 left-0">Best of your ability</div>
                                </div>
                            </div>
                            <div className="h-[20px]"></div> {/* This adds 28px of space */}
                            <div className="text-left text-white text-[25px] font-light font-['Outfit'] leading-[30px]">
                                You will have 15 seconds to carefully read the question
                            </div>
                        </div>
                            <div className="h-[38px]" />
                            <NextButtontoInterface />
                            <div className="flex-grow h-[45px]" />
                        </div>
                    </div>
                </div>
                <SegmentedProgressBar segments={segments}/>
            </div>
        </div>
    );
}