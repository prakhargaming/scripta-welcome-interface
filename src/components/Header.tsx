import Image from 'next/image';

function Header() {
    return (
        <div className="w-full h-25 flex items-center justify-between">
            <a href='https://www.vdart.com/'>
                <Image 
                    src="/logos.png" 
                    alt="Logo" 
                    width={100} 
                    height={100} 
                />
            </a>
            <div className="flex items-center space-x-6">
                <a href='https://www.vdart.com/what-we-do'>
                    <div className="text-center text-white text-base font-normal font-['Inter'] leading-tight pr-5">
                        About Us
                    </div>
                </a>
                <a href='https://www.vdart.com/contact-us/'>
                    <div className="bg-gradient-to-t from-sky-500 to-slate-900 rounded-[30px] shadow border-2 border-white flex items-center justify-center px-6 py-2">
                        <div className="text-center text-white text-xl font-semibold font-['Inter'] leading-relaxed">
                            Contact Us
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Header;
