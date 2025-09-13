'use client'
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";

export default function OnboardingPage() {
    return (
        <main className="flex items-center justify-center">
            <div className="relative w-[400px] bg-white min-h-screen">
                <Header/>
                <div className="pt-[112px]"></div>
                <Navbar/>
            </div>
        </main>
    )
}
