export default function Partnership() {
    const imgs = [
        "/assets/icons/Logo01.png",
        "/assets/icons/Logo02.png",
        "/assets/icons/Logo03.png",
        "/assets/icons/Logo04.png",
        "/assets/icons/Logo05.png",
        "/assets/icons/Logo06.png",
    ]
    return (
        <section className="space-y-12 overflow-hidden py-10 mt-10">
            <h2 className="w-[90%] lg:w-[70%] mx-auto md:w-full text-center text-2xl font-[500] text-[#c4c4c4]">Partnered with worldwide leading companies</h2>

            {/* Logos Container */}
            <div className="flex items-center justify-between gap-14 md:gap-5 lg:gap-0">
                {imgs.map((img, i) => (
                    <img src={img} alt="" key={i} />
                ))}
            </div>
        </section>
    )
}
