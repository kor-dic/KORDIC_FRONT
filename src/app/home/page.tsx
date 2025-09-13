'use client'
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import HomeCard from "@/components/home/HomeCard";


export default function HomePage () {
    return (
        <main className="flex items-center justify-center">
            <div className="relative w-[400px] bg-white min-h-screen">
                <Header/>
                <div className="pt-[112px]" />
                <div className="flex flex-col gap-y-6 px-5">
                    <section className="flex gap-x-1 items-center">
                        <HiLocationMarker className="w-[20px] h-[20px]"/>
                        <p className="subtitle-md">충청북도 청주시 흥덕구 복대동</p>
                        <HiOutlineChevronDown/>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 현지인 추천 식당</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard />
                            <HomeCard />
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 요즘 유행인 곳</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 조용한 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 사람이 적은 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 공부하기 좋은 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 넓은 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 커피 맛집 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 뷰 맛집 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard/>
                            <HomeCard/>
                        </section>
                    </section>
                </div>

                <Navbar/>
            </div>
        </main>
    )
}
