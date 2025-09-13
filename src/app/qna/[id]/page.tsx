'use client'

import Header from "@/components/common/Header";
import Image from "next/image";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiOutlineThumbUp } from "react-icons/hi";

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
                        <h2 className="subtitle-lg">외국인등록증은 언제, 어디서 만드나요?</h2>
                        <p className="">
                            한국에 도착했는데, 외국인등록증을 언제 만들고 어디에서 발급받는지 궁금합니다. 절차를 알려주세요.
                        </p>
                    </section>
                    <div className="flex justify-between items-center mt-5">
                        <section className="flex gap-x-2 items-center  ">
                            <div className="flex items-center gap-x-1">
                                <HiOutlineThumbUp className="w-[18px] h-[18px] text-gray-40"/>
                                <div className="body-md text-gray-40"> 12</div>
                            </div>
                            <div className="w-[2px] h-[2px] rounded-full bg-gray-40"></div>
                            <div className="flex items-center gap-x-1">
                                <HiOutlineChat className="text-gray-40 w-[18px] h-[18px]"/>
                                <div className="body-md text-gray-40"> 3</div>
                            </div>
                        </section>
                        <button className="flex items-center gap-x-1 border border-gray-20 button text-gray-50 px-4 h-[32px] rounded-full bg-white">
                            <HiOutlineThumbUp className="w-[18px] h-[18px] text-gray-40"/></button>
                    </div>

                </div>
                <div className="h-[4px] bg-gray-20 w-full my-5"/>
                <div className="px-5">
                    <section className="flex items-start gap-x-2 py-6">
                        <div className="relative w-[32px] h-[32px] flex-shrink-0">
                            <Image src={'/qna/person1.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full "}></Image>
                        </div>
                        <div className="flex flex-col gap-y-[5px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="subtitle-md">Matsuoka Yuki</p>
                                    <div className="flex body-md text-gray-40 gap-x-[6px]">
                                        <p>09.14</p>
                                        <p>|</p>
                                        <p>18:10</p>
                                    </div>
                                </div>
                                <HiOutlineDotsVertical className=" w-[20px] h-[20px] text-gray-40"/>
                            </div>
                            <p className="body-md">입국 후 90일 이내에 거주지 관할 출입국관리소에서 신청하시면 되고, 하이코리아 사이트에서 미리 예약하시는 것 필수입니다. 당일 접수는 정말 어려우니 꼭 온라인 예약 후 방문하세요.</p>
                            <div className="flex gap-x-1 items-center">
                                <HiOutlineChat className="text-conic-orange-30"/>
                                <p className="button text-conic-orange-30">답글달기</p>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-start gap-x-2 py-6">
                        <div className="relative w-[32px] h-[32px] flex-shrink-0">
                            <Image src={'/qna/person2.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full "}></Image>
                        </div>
                        <div className="flex flex-col gap-y-[5px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="subtitle-md">Jamal Washington</p>
                                    <div className="flex body-md text-gray-40 gap-x-[6px]">
                                        <p>09/07</p>
                                        <p>|</p>
                                        <p>11:56</p>
                                    </div>
                                </div>
                                <HiOutlineDotsVertical className=" w-[20px] h-[20px] text-gray-40"/>
                            </div>
                            <p className="body-md">필요서류 정리해드릴게요~ 여권, 재학증명서(또는 재직증명서), 숙소계약서, 증명사진 1매 준비하시면 됩니다. 특히 숙소계약서는 꼭 챙기세요! 고시원 계약서도 인정해줍니다.</p>
                            <div className="flex gap-x-1 items-center">
                                <HiOutlineChat className="text-conic-orange-30"/>
                                <p className="button text-conic-orange-30">답글달기</p>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-start gap-x-2 py-6">
                        <div className="relative w-[32px] h-[32px] flex-shrink-0">
                            <Image src={'/qna/person4.png'} alt={'프로필'} fill
                                   className={"object-cover rounded-full "}></Image>
                        </div>
                        <div className="flex flex-col gap-y-[5px]">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-y-1">
                                    <p className="subtitle-md">Li Wei</p>
                                    <div className="flex body-md text-gray-40 gap-x-[6px]">
                                        <p>09.01</p>
                                        <p>|</p>
                                        <p>21:28</p>
                                    </div>
                                </div>
                                <HiOutlineDotsVertical className=" w-[20px] h-[20px] text-gray-40"/>
                            </div>
                            <p className="body-md">수수료 관련해서 알려드리면, 30,000원이고 현금만 가능합니다. 카드결제는 안 되니까 미리 현금 준비해서 가시기 바랍니다. 저도 처음에 카드만 들고 갔다가 당황했던 기억이 있네요.</p>
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
