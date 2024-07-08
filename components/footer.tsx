import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "@nextui-org/link";

const Footer = () => {
    return (
        <div className="flex size-full justify-center">
            <div className="mx-40 max-w-screen-xl">
                <div className="flex w-full justify-center py-3">
                    {/* LEFT */}
                    <div className="w-full basis-1/3">
                        <div className="">
                            <h1 className="py-4 text-3xl text-[#3b5d50]">JPOS</h1>
                            <p className="mb-2 pt-2 text-[#3b5d50]">
                                Your premier destination for luxurious and bespoke jewelry. Our talented artisans create
                                exquisite, unique designs, from stunning wedding rings to elegant necklaces. Let us turn
                                your vision into reality. Visit JPOS today for unmatched elegance and personalized
                                service.
                            </p>
                            {/*  */}
                            <div className="flex flex-row items-start gap-9 py-3">
                                <FaFacebook className="" size={"1.3rem"} />
                                <AiFillTwitterCircle className="" size={"1.6rem"} />
                                <RiInstagramFill className="" size={"1.6rem"} />
                                <FaLinkedin className="" size={"1.6rem"} />
                            </div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="w-full basis-2/3">
                        {/* <Link
                            isExternal
                            className="flex items-center gap-1 text-current"
                            href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
                            title="nextui.org homepage"
                        >
                            <p className="text-default-600">Powered by</p>
                            <p className="text-primary">NextUI</p>
                        </Link> */}
                        <div className="mt-16 flex justify-end px-11">
                            {/* CỘT 1 */}
                            <div className="basis-1/3">
                                <ul className="flex flex-col">
                                    <li className="py-3">
                                        <Link href="/about">About us</Link>
                                    </li>
                                    <li className="py-3">
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li className="py-3">
                                        <Link href="/contact">Contact us</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* CỘT 2 */}
                            <div className="basis-1/3">
                                <ul className="flex flex-col">
                                    <li className="py-3">
                                        <Link href="/">Support</Link>
                                    </li>
                                    <li className="py-3">
                                        <Link href="/">Knowledge base</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* CỘT 3 */}
                            <div className="basis-1/3">
                                <ul className="flex flex-col">
                                    <li className="py-3">
                                        <Link href="/">Jobs</Link>
                                    </li>
                                    <li className="py-3">
                                        <Link href="/">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
