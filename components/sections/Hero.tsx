import CustomBtn from "../ui/CustomBtn";
import HeroMockup from "../ui/HeroMockup";

export default function Hero() {
    return (
        <section className="w-full flex m-auto mt-20 z-10 overflow-hidden pb-10 lg:pb-0">
            <div className="w-full grid place-items-center space-y-4 text-center">
                <h2 className="text-4xl leading-[.9]  lg:text-5xl font-bold w-2/3 lg:w-[45%]">
                    AI receipts. Simple crypto. Smart control.
                </h2>

                {/* Large Screen Containers */}
                <p className="text-[17px] hidden md:block">
                    Klip is your all-in-one decentralized wallet <br />
                    Designed for security, flexibility, and full ownership.
                </p>
                <CustomBtn content="Get Started" extraStyles="!mt-3 hidden md:flex" />
                {/*      */}

                {/* Bg gradient */}
                <div className="absolute top-[20%] left-1/6 w-2/3 h-full opacity-30 blur-3xl hero-gradient -z-10" />

                <HeroMockup />

                {/* Mobile Containers */}
                <p className="text-[12px] leading-tight font-semibold block md:hidden mt-2">
                    Klip is your all-in-one decentralized wallet <br />
                    Designed for security, flexibility, and full ownership.
                </p>
                <CustomBtn content="Get Started" extraStyles="!mt-3 flex md:hidden px-5 py-4 font-semibold gap-3" />
                {/*      */}
            </div>
        </section>
    )
}
