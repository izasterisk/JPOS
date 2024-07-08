/* eslint-disable react/no-unescaped-entities */
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";

export default function AboutPage() {
    return (
        <DefaultLayout>
            <section className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#FAFAFA] py-10">
                <div className="flex size-full rounded-lg bg-[#ec5360]">
                    <div className="mt-10 w-1/2 px-24">
                        <h1 className="py-6 text-5xl text-white">ABOUT JPOS</h1>
                        <p className="font-bold text-white">JPOS - Redefining Jewelry Experience</p>
                        <p className="pb-10 text-white">
                            In the bustling world of fashion and elegance, JPOS emerges as a beacon of sophistication
                            and innovation. Founded by five visionary individuals - Hoa, Yen, Thanh, Long, and Kien,
                            JPOS is more than just a jewelry store; it's a testament to the pursuit of excellence and
                            the celebration of beauty. At the heart of our mission lies a simple yet profound
                            aspiration: to bring customers closer to the enchanting realm of meticulously crafted
                            collections and personalized adornments. With an unwavering dedication to craftsmanship and
                            creativity, JPOS endeavors to curate the latest trends and timeless classics, ensuring that
                            every piece tells a story of elegance and individuality. Driven by the desire to elevate the
                            beauty of every wearer, JPOS offers a diverse range of exquisite materials meticulously
                            selected for their quality and allure. From the timeless allure of diamonds to the
                            captivating hues of rubies and sapphires, from the ethereal glow of jadeite to the enduring
                            elegance of gold and silver, each material is a testament to our commitment to excellence.
                            At JPOS, we believe that jewelry is more than just an accessory; it's an expression of
                            personality, style, and sentiment. Whether it's a bespoke creation tailored to your unique
                            vision or a stunning piece from our curated collections, every creation embodies the essence
                            of sophistication and grace. Step into the world of JPOS and embark on a journey of timeless
                            beauty and unparalleled elegance. Experience the fusion of artistry and passion, where every
                            piece is a masterpiece waiting to be discovered. Welcome to JPOS, where luxury meets
                            craftsmanship, and dreams become reality.
                        </p>
                    </div>
                    <div className="flex h-full w-1/2 items-center justify-center rounded-lg bg-red-400 p-16">
                        <Image alt={"ring"} src={"/img/band/weddingring.png"} />
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}
