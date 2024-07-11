import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col bg-[#FAFAFA]">
            <Head /> {/* chỗ này tạo head html */}
            <Navbar />
            <main className="container mx-auto mt-0 w-full pt-0">{children}</main>
            <Footer />
        </div>
    );
}
