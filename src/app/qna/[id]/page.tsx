'use client'

import Header from "@/components/common/Header";
import Image from "next/image";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";

export default function QnADetailPage() {
    return (
        <main className="relative">
            <div className="relative w-[400px] bg-white">
                <Header headerType={'dynamic'} title={'QnA 게시판'}/>
                <div className="pt-[112px]"/>
                <div className="flex flex-col px-5">
                    <section className="flex gap-x-3 items-center">
                        <div className="relative w-[45px] h-[45px]">
                            <Image src={'/profile.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full"}></Image>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-md">황유림</p>
                            <div className="flex body-md text-gray-40 gap-x-[6px]">
                                <p>10/31</p>
                                <p>|</p>
                                <p>18:10</p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-y-2 mt-5">
                        <h2 className="subtitle-lg">아침 7시 헬스 같이 가실 분 구합니다.</h2>
                        <p className="">
                            아침 7시에 스포츠센터에서 헬스 같이하실 여성분 구합니다!
                            나이는 상관 없고, 저와 같이 열심히 할 사람 모집합니다!

                            [규칙]
                            월, 수, 금 오전 7:00 1층 로비에서 만나기
                            1시간 헬스
                            벌금 : 1만원
                            10월 31일 ~ 12월 31일

                            [목표]
                            5kg 감량
                        </p>
                    </section>
                    <div className="flex justify-between items-center mt-5">
                        <section className="flex gap-x-2 items-center  ">
                            <div className="flex items-center gap-x-1">
                                <HiOutlineHeart className="w-[18px] h-[18px] text-gray-40"/>
                                <div className="body-md text-gray-40"> 3</div>
                            </div>
                            <div className="w-[2px] h-[2px] rounded-full bg-gray-40"></div>
                            <div className="flex items-center gap-x-1">
                                <HiOutlineChat className="text-gray-40 w-[18px] h-[18px]"/>
                                <div className="body-md text-gray-40"> 5</div>
                            </div>
                        </section>
                        <button className="flex items-center gap-x-1 border border-gray-20 button text-gray-50 px-4 h-[32px] rounded-full bg-white">
                            <HiOutlineHeart className="w-[18px] h-[18px] text-gray-40"/></button>
                    </div>

                </div>
                <div className="h-[4px] bg-gray-20 w-full my-5"/>
                <div className="px-5">
                    <section className="flex items-start gap-x-2 py-6">
                        <div className="relative w-[32px] h-[32px] flex-shrink-0">
                            <Image src={'/profile.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full "}></Image>
                        </div>
                        <div className="flex flex-col gap-y-[5px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="subtitle-md">황유림</p>
                                    <div className="flex body-md text-gray-40 gap-x-[6px]">
                                        <p>10/31</p>
                                        <p>|</p>
                                        <p>18:10</p>
                                    </div>
                                </div>
                                <HiOutlineDotsVertical className=" w-[20px] h-[20px] text-gray-40"/>
                            </div>
                            <p className="body-md">블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</p>
                            <div className="flex gap-x-1 items-center">
                                <HiOutlineChat className="text-conic-orange-30"/>
                                <p className="button text-conic-orange-30">답글달기</p>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-start gap-x-2 py-6">
                        <div className="relative w-[32px] h-[32px] flex-shrink-0">
                            <Image src={'/profile.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full "}></Image>
                        </div>
                        <div className="flex flex-col gap-y-[5px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="subtitle-md">황유림</p>
                                    <div className="flex body-md text-gray-40 gap-x-[6px]">
                                        <p>10/31</p>
                                        <p>|</p>
                                        <p>18:10</p>
                                    </div>
                                </div>
                                <HiOutlineDotsVertical className=" w-[20px] h-[20px] text-gray-40"/>
                            </div>
                            <p className="body-md">블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</p>
                            <div className="flex gap-x-1 items-center">
                                <HiOutlineChat className="text-conic-orange-30"/>
                                <p className="button text-conic-orange-30">답글달기</p>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-start gap-x-2 py-6">
                        <div className="relative w-[32px] h-[32px] flex-shrink-0">
                            <Image src={'/profile.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full "}></Image>
                        </div>
                        <div className="flex flex-col gap-y-[5px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="subtitle-md">황유림</p>
                                    <div className="flex body-md text-gray-40 gap-x-[6px]">
                                        <p>10/31</p>
                                        <p>|</p>
                                        <p>18:10</p>
                                    </div>
                                </div>
                                <HiOutlineDotsVertical className=" w-[20px] h-[20px] text-gray-40"/>
                            </div>
                            <p className="body-md">블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라</p>
                            <div className="flex gap-x-1 items-center">
                                <HiOutlineChat className="text-conic-orange-30"/>
                                <p className="button text-conic-orange-30">답글달기</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div className="h-[80px]"></div>
            <div className="fixed bottom-0 p-5 w-full bg-white border-t border-gray-20">
                <div className="flex items-center h-[52px] bg-gray-10 px-4 w-full rounded-full">
                    <input placeholder={'댓글을 남겨주세요.'} className="w-full"/>
                    <button className="px-4 py-3 bg-conic-orange-30 text-white rounded-full whitespace-nowrap button h-fit">등록</button>
                </div>


            </div>
        </main>
    )
}
