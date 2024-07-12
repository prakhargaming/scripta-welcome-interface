function MainText1() {
    return (
        <div className="flex flex-col items-left py-9">
            <div className="w-full text-left">
                <div className="text-white/opacity-90 text-[130px] font-normal font-['Outfit'] leading-[144.30px]">Welcome to your</div>
                <div className="relative">
                    <div className="custom-text4 top-0 left-0 ">Online Interview</div>
                    <div className="custom-text1 absolute top-0 left-0">Online Interview</div>
                    <div className="custom-text2 absolute top-0 left-0">Online Interview</div>
                </div>
            </div>
            <div className="h-[43px]"></div> {/* This adds 28px of space */}
            <div className="text-left text-white text-[25px] font-light font-['Outfit'] leading-[30px]">
                Please follow the steps below to ensure everything runs smoothly.
            </div>
        </div>
    );
}

export default MainText1;