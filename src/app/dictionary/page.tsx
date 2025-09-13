'use client'
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import { HiOutlineSaveAs } from "react-icons/hi";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { HiOutlineAnnotation } from "react-icons/hi";
import { HiOutlineRss } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineExclamation } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineLibrary } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function DictionaryPage () {
    return (
        <main className="flex items-center justify-center">
            <div className="relative w-[400px] bg-white min-h-screen">
                <Header/>
                <div className="pt-[112px]"></div>
                <div className="grid grid-cols-2 gap-3 px-5">
                    <section
                        className={`bg-[#feeaee] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#fe3c66] w-[32px] h-[32px] rounded-full">
                                <HiOutlineAnnotation className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">존댓말/반말</p>
                    </section>

                    <section
                        className={`bg-[#e8effe] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#3b8cf4] w-[32px] h-[32px] rounded-full">
                                <HiOutlineExclamation className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">생활 간, 언행 주의 안내</p>
                    </section>

                    <section
                        className={`bg-[#ede6ff] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#722fd4] w-[32px] h-[32px] rounded-full">
                                <HiOutlineSaveAs className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">한국 내 자주 쓰는 앱 안내</p>
                    </section>

                    <section
                        className={`bg-[#d6efe2] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#42cf7c] w-[32px] h-[32px] rounded-full">
                                <HiOutlineRss className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">편의시설</p>
                    </section>

                    <section
                        className={`bg-[#ffddd4] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#ff7853] w-[32px] h-[32px] rounded-full">
                                <HiOutlineLocationMarker className="text-white"/>
                            </div>
                        </div>

                        <p className="subtitle-lg">장소별 주의사항 안내 (절, 교회)</p>
                    </section>

                    <section
                        className={`bg-[#feefc5] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#ffcd4a] w-[32px] h-[32px] rounded-full">
                                <HiOutlineHome className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">부동산 지원</p>
                    </section>

                    <section
                        className={`bg-[#ccd2f0] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#3a4ca8] w-[32px] h-[32px] rounded-full">
                                <HiOutlineSaveAs className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">국내 안전 및 건강 서비스 안내</p>
                    </section>

                    <section
                        className={`bg-[#feeaee] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#fe3c66] w-[32px] h-[32px] rounded-full">
                                <HiOutlineHeart className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">건강보험</p>
                    </section>

                    <section
                        className={`bg-[#feeaee] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#fe3c66] w-[32px] h-[32px] rounded-full">
                                <HiOutlineMail className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">재난문자</p>
                    </section>

                    <section
                        className={`bg-[#feeaee] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#fe3c66] w-[32px] h-[32px] rounded-full">
                                <HiOutlineLibrary className="text-white"/>
                            </div>
                        </div>
                        <p className="subtitle-lg">대사관</p>
                    </section>

                    <section
                        className={`bg-[#feeaee] h-[150px] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
                        <div className="flex items-center justify-center w-full h-[60px]">
                            <div
                                className="flex items-center justify-center bg-[#fe3c66] w-[32px] h-[32px] rounded-full">
                                <HiOutlineSpeakerphone className="text-white"/>
                            </div>
                        </div>

                        <p className="subtitle-lg">응급 상황 시, 대처 방안</p>
                    </section>

                </div>
                <div className="pt-[100px]"></div>
                <Navbar/>
            </div>
        </main>
    )
}
