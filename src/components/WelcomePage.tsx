import Header from "@/components/Header";
import MainText1 from "@/components/MainText_WelcomePage";
import NextButton from "@/components/NextButton"
import ProgressBar from "./ProgressBar";

export default function WelcomePage() {
  return (
    <div className="bg-[url('/background.png')] bg-center">
    <div className="flex flex-col min-h-screen px-16 py-8">
      <Header />
      <div className="h-[45px]" />
      <MainText1 />
      <div className="h-[45px]" />
      <NextButton />
      <div className="flex-grow h-[45px]" /> {/* This creates space between the button and progress bar */}
      <ProgressBar progress={50} />
    </div>
    </div>
  );
}