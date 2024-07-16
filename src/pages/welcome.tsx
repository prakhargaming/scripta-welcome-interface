import Header from "@/components/Header";
import MainText1 from "@/components/MainText_WelcomePage";
import NextButton from "@/components/NextButtontoMic"
import SegmentedProgressBar from "@/components/SegmentedProgressBar";

export default function WelcomePage() {
  const segments = [
    { href: '/welcome', active: true },
    { href: '/step1' },
    { href: '/step2' },
    { href: '/step3' },
  ];
  return (
    <div className="bg-[url('/background.png')] bg-center">
    <div className="flex flex-col min-h-screen px-16 py-8">
      <Header />
      <div className="h-[45px]" />
      <MainText1 />
      <div className="h-[45px]" />
      <NextButton />
      <div className="flex-grow h-[45px]" /> {/* This creates space between the button and progress bar */}
      <SegmentedProgressBar segments={segments}/>
    </div>
    </div>
  );
}