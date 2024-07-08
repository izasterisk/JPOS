import { Head } from "../head";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultSaleLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex h-screen flex-col">
            <Head /> {/* chỗ này tạo head html */}
            <Navbar />
            <main className="container mx-auto mt-0 w-full grow pt-0">{children}</main>
            <Footer />
        </div>
    );
}
