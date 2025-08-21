export default function BenefitSection() {
    return (
        <section className="w-full px-5 lg:px-[7rem] py-5 relative">
            {/* Section Title */}
            <div className="w-fit px-4 py-2 bg-[#11920030] rounded-full border border-solid border-[#119200]">
                <h2 className="font-bold uppercase">Benefit</h2>
            </div>

            {/* Main Headings */}
            <div className="flex flex-col md:flex-row gap-2 lg:gap-0 lg:justify-between lg:items-center w-full mt-8">
                <h2 className="lg:w-[40%] font-bold text-4xl lg:text-5xl leading-tight">Say goodbye to Wallet Addresses.</h2>
                <p className="text-xs md:text-sm lg:w-1/4">Just enter the handle, select your token, and confirm. No copy-paste. No errors. No friction.</p>
            </div>

            {/* Cards Container */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 lg:mt-20">
                {/* Card 1 */}
                <div className="col-span-1 w-full h-full bg-[#151515] rounded-3xl p-6 relative overflow-hidden">
                    {/* Right Vector Icon */}
                    <div className="flex justify-end items-end">
                        <img src="/assets/icons/Vector.png" alt="" />
                    </div>
                    {/* Left Icon with heading */}
                    <div className="space-y-2 !pl-5  -mt-5">
                        <img src="/assets/icons/Icon.png" alt="" />
                        <h2 className="w-1/3 text-4xl text-white">Token Support</h2>
                    </div>
                    {/* Mockup Image */}
                    <div className="w-full grid place-items-center z-10 relative">
                        <img src="/assets/mockups/card-1.png" className="w-[90%] object-contain" alt="" />
                    </div>
                    {/* Bottom vector */}
                    <img src="/assets/section-images/tiles.png" className="absolute bottom-0 w-full z-0" alt="" />
                </div>

                {/* grid cards Container*/}
                <div className="col-span-1 md:col-span-2 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Card 2 */}
                    <div className="bg-[#151515] rounded-3xl pt-10 w-full h-full">
                        <h2 className="px-11 text-4xl text-white">Secure Transfers</h2>
                        <div className="w-full h-full grid place-items-center mt-3">
                            <img src="/assets/section-images/card-2.png" className="w-full h-full object-contain" alt="" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#151515] rounded-3xl w-full h-full pl-10 p-6 overflow-hidden">
                        {/* Right Vector Icon */}
                        <div className="flex justify-end items-end">
                            <img src="/assets/icons/Vector.png" alt="" />
                        </div>

                        {/* Graphs And speed meter Container */}
                        <div className="w-full h-full relative">
                            {/* Graph card */}
                            <div className="w-[90%] mt-1 px-4 py-2 rounded-2xl backdrop-blur-[25px] bg-[#c4c4c4]/20 border border-solid border-[#c4c4c4] overflow-hidden"> 
                                <h2 className="text-[#12ed39] font-[400] text-2xl">Romulus</h2>
                                <h2 className="text-white font-[400] text-2xl">$3271.20</h2>
                                <img src="/assets/section-images/chart.png" className="w-full object-cover object-top mt-6" alt="" />
                            </div>

                            {/* meter card */}
                            <div className="absolute -right-1 bottom-12 w-[60%] px-4 py-2 rounded-2xl backdrop-blur-[25px] bg-[#c4c4c4]/20 border border-solid border-[#c4c4c4] overflow-hidden"> 
                                <h2 className="text-[#12ed39] font-[400] text-2xl">Performance</h2>
                                <img src="/assets/section-images/meter.png" className="w-full object-cover mt-6" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#151515] rounded-3xl w-full h-full pl-10 pt-6 pb-20 pr-6 overflow-hidden">
                        {/* Right Vector Icon */}
                        <div className="flex justify-end items-end">
                            <img src="/assets/icons/Vector.png" alt="" />
                        </div>

                        {/* Balance cards caontainer */}
                        <div className="w-full h-full relative">
                            {/* Balance card 1 */}
                            <div className="w-[80%] -mt-4">
                                <img src="/assets/section-images/balance-card-1.png" className="w-full object-cover object-top" alt="" />
                            </div>

                            {/* Balance card 2 */}
                            <div className="absolute right-[4%] bottom-[-10%] w-[67%]">
                                <img src="/assets/section-images/balance-card-2.png" className="w-full object-cover mt-6" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#151515] rounded-3xl pt-10  w-full h-full overflow-hidden">
                        <h2 className="px-11 text-4xl text-white">Unique Identity</h2>
                        <div className="w-full h-full grid place-items-center mt-3">
                            <img src="/assets/section-images/1 1.png" className="w-full h-full object-contain" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Background Gradient */}
            <div className="absolute top-[9%] lg:top-[21%] lg:left-[2.6%] w-[80%] lg:w-[30%] h-[33%] lg:h-[66%] blur-3xl hero-gradient -z-10" />
        </section>
    )
}
