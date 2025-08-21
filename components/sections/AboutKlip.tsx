export default function AboutKlip() {
    return (
        <section className='w-full p-5 lg:p-10'>
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:border lg:border-solid border-black/20 rounded-lg lg:p-20 lg:h-[80vh]">

                <div className="w-full lg:w-[50%] bg-[#f4f2f0] relative h-full rounded-lg overflow-hidden">
                    <img src={'/assets/section-images/sec-2.png'} className="w-full h-full object-cover " alt="sec-2-img " />
                </div>

                <div className="w-full lg:w-[50%] lg:p-5 space-y-3 h-full flex flex-col lg:justify-center lg:items-start pb-5 lg:pb-0">
                    <h2 className="font-semibold text-4xl lg:text-5xl">What is KlipAi</h2>
                    <p className="text-xs lg:text-[17px] capitalize">
                        KlipAi is the all-in-one smart wallet layer for Web3.<br className="hidden" /> We turn every crypto transaction into a clean, AI-powered<br className="hidden" /> receipt. You can also send tokens using a simple username.<br className="hidden" />No TX hashes. No wallet address mistakes.<br className="hidden" />Just clarity, control, and convenience.
                    </p>
                </div>
            </div>
        </section>
    )
}  
