'use client'

import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import QnACard from "@/components/qna/QnACard";
import { HiOutlineSearch } from "react-icons/hi";

export default function QnAPage () {
    return (
        <main className="flex items-center justify-center">
            <div className="relative w-[400px] bg-white min-h-screen">
                <Header/>
                <div className="pt-[112px]" />
                <div className="flex flex-col gap-y-[24px] px-5">
                    <section className="flex gap-x-2">
                        <div
                            className="flex items-center justify-start h-[48px] border border-gray-20 rounded-[16px] p-4 w-full gap-x-2">
                            <HiOutlineSearch className="text-gray-40"/>
                            <input placeholder={'검색어를 입력해주세요.'} className="outline-none"/>
                        </div>
                    </section>

                    <section className="flex flex-col gap-y-3">
                        <QnACard title={''} content={''} name={''} time={''} view={''}/>
                        <QnACard title={''} content={''} name={''} time={''} view={''}/>
                        <QnACard title={''} content={''} name={''} time={''} view={''}/>
                        <QnACard title={''} content={''} name={''} time={''} view={''}/>
                        <QnACard title={''} content={''} name={''} time={''} view={''}/>
                        <QnACard title={''} content={''} name={''} time={''} view={''}/>
                    </section>

                    <div className="pb-[110px]"></div>

                </div>
                <Navbar/>
            </div>
        </main>
    )
}
