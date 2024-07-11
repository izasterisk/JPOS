import React from "react";

const Feature = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
    <div className="flex flex-col items-center p-4">
        <div className="mb-2">
            <img alt={title} className="size-16" src={icon} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{children}</p>
    </div>
);

export const WhyChooseUsSection = () => (
    <div className="py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
                <div className="lg:w-1/2">
                    <h2 className="mb-4 text-2xl font-bold">Why Choose Us</h2>
                    <p>
                        Choose JPOS for exquisite, unique designs crafted by talented artisans. We offer personalized,
                        bespoke services to bring your vision to life, ensuring high-quality craftsmanship and
                        exceptional customer satisfaction. Trust JPOS for unmatched elegance and a seamless experience.
                    </p>
                    <div className="mt-10 flex flex-wrap">
                        <Feature icon="/images/truck.svg" title="Fast & Free Shipping">
                            In the southern region, delivery your orders within 24 hours. For other areas, delivery
                            takes just 3-5 days.
                        </Feature>
                        <Feature icon="/images/bag.svg" title="Easy to Shop">
                            At JPOS, we make it easy for you to place orders, browse, and explore our extensive range of
                            products. Our user-friendly website ensures a seamless shopping experience, allowing you to
                            discover the perfect pieces effortlessly.
                        </Feature>
                        <Feature icon="/images/support.svg" title="Support">
                            Our customer care system is available 24/7 to assist you.
                        </Feature>
                        <Feature icon="/images/return.svg" title="Hassle Free Returns">
                            Enjoy free returns and exchanges if any defects are found in JPOS products.
                        </Feature>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="mt-10 lg:mt-0">
                        <img alt="" className="rounded-lg shadow-lg" src="/img/band/band1.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// export const WeHelpSection = () => {
//     return (
//         <div className="py-28">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-wrap justify-between">
//                     <div className="relative mb-5 lg:mb-0">
//                         <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//                             <div className="before:-translate-x-2/5 before:-translate-y-2/5 before:absolute before:-z-10 before:h-[217px] before:w-[255px] before:bg-[url('/images/dots-green.svg')] before:bg-contain before:bg-no-repeat before:content-['']">
//                                 <img alt="Untree.co" className="max-w-full rounded-lg" src="/img/band/band2.jpg" />
//                             </div>
//                             <div className="col-span-2 lg:col-span-1 lg:pl-5 lg:pt-7">
//                                 <img alt="Untree.co" className="max-w-full rounded-lg" src="/img/band/band3.jpg" />
//                             </div>
//                             <div className="col-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:pl-12 lg:pt-14">
//                                 <img alt="Untree.co" className="max-w-full rounded-lg" src="/img/band/band4.jpg" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="lg:w-5/12 lg:pl-5">
//                         <h2 className="mb-4 text-3xl font-bold">We Help You Make Modern Jewelry Design</h2>
//                         <p className="mb-4">
//                             At JPOS, we help you create modern jewelry designs tailored to your needs. Enjoy the
//                             convenience of custom orders and personalized consultations to find the perfect jewelry for
//                             you. Our experts are dedicated to advising you on the best pieces that match your style and
//                             preferences, ensuring a truly unique and satisfying experience.
//                         </p>
//                         <a
//                             className="inline-block rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
//                             href="service.html"
//                         >
//                             Service
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
