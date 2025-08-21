export default function HeroMockup() {
    return (
        <div className="relative w-full flex justify-center items-start -mt-[7%] pointer-events-none">
            {/* Blob (background shape) */}
            <img
                src="/assets/mockups/blob.png"
                alt="Blob"
                className="absolute w-[90%] lg:w-[65%] max-w-xl object-contain z-0 top-[10%] lg:top-[13%] lg:ml-5"
            />

            {/* Large SCreen iPhone mockup */}
            <img
                src="/assets/mockups/iphone_v04 1.png"
                alt="iPhone Mockup"
                className="relative w-[90%] h-fit object-contain z-10 -mt-15 hidden lg:block"
            />
            {/* Mobile SCreen iPhone mockup */}
            <img
                src="/assets/mockups/iphone-mobile-screen.png"
                alt="iPhone Mockup"
                className="relative w-[100%] h-fit object-contain z-10 mt-8 lg:hidden"
            />

            {/* Floating Containers */}
            {/* Left container */}
            <div className="absolute left-[8%] lg:left-[23%] top-[24%] lg:top-[35%] bg-[#8c8c8c57] lg:backdrop-blur-xl rounded-full px-2 lg:px-4 py-1.5 lg:py-3 flex items-center gap-2 lg:gap-6 z-20 text-[10px] lg:text-[18px] border border-solid border-[#c4c4c4]">
                <div className="text-left lg:-space-y-1">
                    <h2 className="text-white">$2,951.73</h2>
                    <h2 className="text-black">APL 17</h2>
                </div>
                <div className="text-right lg:-space-y-1">
                    <h2 className="text-white">Apollo</h2>
                    <h2 className="text-black">APL</h2>
                </div>
                <img src="/assets/icons/Planet.png" alt="Apollo" className="lg:-ml-2 w-7 h-7 lg:w-10 lg:h-10" />
            </div>

            {/* Right container */}
            <div className="absolute left-[51%] lg:left-[63%] top-[68%] lg:top-[59%] bg-[#8c8c8c57] lg:backdrop-blur-xl rounded-full px-2 lg:px-4 py-1.5 lg:py-3 flex items-center gap-2 lg:gap-6 z-20 text-[10px] lg:text-[18px] border border-solid border-[#c4c4c4]">
                <img src="/assets/icons/Sparkle.png" alt="Apollo" className="lg:-mr-4 w-7 h-7 lg:w-10 lg:h-10" />
                <div className="text-left lg:-space-y-1">
                    <h2 className="text-white">Romulus</h2>
                    <h2 className="text-black">RLS</h2>
                </div>
                <div className="text-right lg:-space-y-1">
                    <h2 className="text-white">$3,271.20</h2>
                    <h2 className="text-black">RLS 24</h2>
                </div>
            </div>
        </div>
    );
}
