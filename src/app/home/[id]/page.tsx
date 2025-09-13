'use client'
import Header from "@/components/common/Header";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi";

export default function HomeDetailPage () {
    return (
        <main>
            <div className=" w-[400px] bg-white min-h-screen">
                <Header headerType={'dynamic'} title={'가게 상세보기'} />
                <div className="h-[112px]"/>
                <div className="px-5 flex flex-col gap-y-6">
                    <div className="flex flex-col ">
                        <p className="title-md">일미닭갈비파전 본점</p>
                        <section className="flex gap-x-2 items-center">
                            <section className="flex gap-x-1 items-center">
                                <div className="relative w-[16px] h-[16px]">
                                    <Image src={'/home/star-icon.svg'} alt={'별'} fill className={'object-cover'}/>
                                </div>
                                <p className="body-sm text-gray-50 pt-1">4.59</p>
                            </section>
                            <div className="body-sm text-gray-50">|</div>
                            <section className="flex gap-x-1 items-center">
                                <p className="body-sm text-gray-50 pt-1">방문자 리뷰</p>
                                <p className="body-sm text-gray-50 pt-1">723</p>
                            </section>
                            <div className="body-sm text-gray-50">|</div>
                            <section className="flex gap-x-1 items-center">
                                <p className="body-sm text-gray-50 pt-1">블로그 리뷰</p>
                                <p className="body-sm text-gray-50 pt-1">723</p>
                            </section>
                        </section>
                        <section className="flex gap-x-2 mt-4">
                            <div className="w-[80px] h-[80px] relative">
                                <Image src={'/home/store1.png'} alt={'/home/store1.png'}
                                       className="object-cover rounded-[8px]" fill></Image>
                            </div>
                            <div className="w-[80px] h-[80px] relative">
                                <Image src={'/home/store2.png'} alt={'/home/store1.png'}
                                       className="object-cover rounded-[8px]" fill></Image>
                            </div>
                            <div className="w-[80px] h-[80px] relative">
                                <Image src={'/home/store3.png'} alt={'/home/store1.png'}
                                       className="object-cover rounded-[8px]" fill></Image>
                            </div>
                            <div className="w-[80px] h-[80px] relative">
                                <Image src={'/home/store4.png'} alt={'/home/store1.png'}
                                       className="object-cover rounded-[8px]" fill></Image>
                            </div>
                        </section>

                        <section className="flex flex-col gap-x-3 mt-3 border-b border-gray-20 pb-6 ">
                            <div className="flex gap-x-1 items-center">
                                <HiLocationMarker className="text-gray-50"/>
                                <p className="body-sm">충북 청주시 흥덕구 충대로 14 일미닭갈비파전</p>
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <HiCalendar className="text-gray-50"/>
                                <p className="body-sm">영업 중 22:00에 라스트오더22시 0분에 라스트오더</p>
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <HiPhone className="text-gray-50"/>
                                <p className="body-sm">043-268-3212</p>
                            </div>
                            <div className="flex gap-x-1 items-center">
                                <HiSparkles className="text-gray-50"/>
                                <p className="body-sm">배달, 포장, 단체 이용 가능, 예약, 남/녀 화장실 구분</p>
                            </div>
                        </section>
                    </div>

                    <section className="flex flex-col gap-y-2 border-b border-gray-20 pb-6">
                        <p className="title-md">메뉴</p>
                        <div className="flex gap-x-2">
                            <div className="flex flex-col">
                                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                                    <Image src={'/home/food1.png'} alt={'음식'} fill
                                           className="object-cover rounded-[8px]"></Image>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="body-md truncate w-[100px]">닭갈비 1인 250g</p>
                                    <p className="subtitle-sm">12,000원</p>
                                </div>

                            </div>
                            <div className="flex flex-col ">
                                <div className="relative w-[100px] h-[100px] flex-shrink-0">
                                    <Image src={'/home/food2.png'} alt={'음식'} fill
                                           className="object-cover rounded-[8px]"></Image>
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="body-md truncate">파전</p>
                                    <p className="subtitle-sm">15,000원</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-y-4 border-b border-gray-20 pb-6">
                        <p className="title-md">이런 점이 좋았어요</p>
                        <section className="flex flex-col gap-y-2">
                            <div className="relative rounded-[8px] bg-gray-20 w-full h-[52px]">
                                <div
                                    className="flex gap-x-2 items-center rounded-[8px] bg-conic-orange-50 h-[52px] w-[80%] px-4">
                                    <p>👍</p>
                                    <p className="text-white subtitle-md">음식이 맛있어요</p>
                                </div>
                                <p className="absolute right-4 top-1/2 transform -translate-y-1/2 body-md text-gray-70">95</p>
                            </div>
                            <div className="relative rounded-[8px] bg-gray-20 w-full h-[52px]">
                                <div
                                    className="flex gap-x-2 items-center rounded-[8px] bg-conic-orange-40 h-[52px] w-[60%] px-4">
                                    <p>💵</p>
                                    <p className="text-white subtitle-md">가성비가 좋아요</p>
                                </div>
                                <p className="absolute right-4 top-1/2 transform -translate-y-1/2 body-md text-gray-70">95</p>
                            </div>
                            <div className="relative rounded-[8px] bg-gray-20 w-full h-[52px]">
                                <div
                                    className="flex gap-x-2 items-center rounded-[8px] bg-conic-orange-30 h-[52px] w-[50%] px-4">
                                    <p>❤️</p>
                                    <p className="text-white subtitle-md">친절해요</p>
                                </div>
                                <p className="absolute right-4 top-1/2 transform -translate-y-1/2 body-md text-gray-70">95</p>
                            </div>
                            <div className="relative rounded-[8px] bg-gray-20 w-full h-[52px]">
                                <div
                                    className="flex gap-x-2 items-center rounded-[8px] bg-conic-orange-20 h-[52px] w-[20%] px-4">
                                    <p>🍚</p>
                                    <p className="subtitle-md whitespace-nowrap">양이 많아요</p>
                                </div>
                                <p className="absolute right-4 top-1/2 transform -translate-y-1/2 body-md text-gray-70">95</p>
                            </div>
                            <div className="relative rounded-[8px] bg-gray-20 w-full h-[52px]">
                                <div
                                    className="flex gap-x-2 items-center rounded-[8px] bg-conic-orange-10 h-[52px] w-[10%] px-4">
                                    <p>👀</p>
                                    <p className="subtitle-md whitespace-nowrap">매장이 넓어요</p>
                                </div>
                                <p className="absolute right-4 top-1/2 transform -translate-y-1/2 body-md text-gray-70">95</p>
                            </div>
                        </section>
                    </section>

                    <section>
                        <p className="title-md">리뷰</p>
                        <div className="flex flex-col gap-y-1">
                            <section className="flex flex-col border-b border-gray-20 py-4">
                                <div className="flex gap-x-2 items-center">
                                    <div className="relative w-[24px] h-[24px]">
                                        <Image src={'/home/profile1.png'} alt={'프로필'} fill
                                               className="object-cover rounded-full"></Image>
                                    </div>
                                    <p className="subtitle-md">Борис Годунов</p>
                                    <p className="small text-gray-50">08.31</p>
                                    <div className="w-[4px] h-[4px] rounded-full bg-gray-30"/>
                                    <p className="small text-gray-50">2번째 방문</p>
                                </div>
                                <div className="flex gap-x-2 mt-2">
                                    <p className="body-md text-gray-50 w-[80%]">Я обедал там с друзьями. Было дёшево и
                                        вкусно.
                                        Официант говорит по-русски. )))</p>
                                    <div className="relative w-[80px] h-[80px] whitespace-nowrap">
                                        <Image src={'/home/food4.png'} alt={'음식'} fill
                                               className="object-cover rounded-[8px]"></Image>
                                    </div>
                                </div>
                            </section>
                            <section className="flex flex-col py-4 border-b border-gray-20">
                                <div className="flex gap-x-2 items-center ">
                                    <div className="relative w-[24px] h-[24px]">
                                        <Image src={'/home/profile2.png'} alt={'프로필'} fill
                                               className="object-cover rounded-full"></Image>
                                    </div>
                                    <p className="subtitle-md">John Stuart Mill</p>
                                    <p className="small text-gray-50">09.13</p>
                                    <div className="w-[4px] h-[4px] rounded-full bg-gray-30"/>
                                    <p className="small text-gray-50">4번째 방문</p>
                                </div>
                                <div className="flex gap-x-2 mt-2">
                                    <p className="body-md text-gray-50 w-[80%]">Upon entering the restaurant, a friendly staff member will guide you. They can speak some English. Food is ready within 15 minutes, and ordering is easy.</p>
                                    <div className="relative w-[80px] h-[80px] whitespace-nowrap">
                                        <Image src={'/home/food3.png'} alt={'음식'} fill
                                               className="object-cover rounded-[8px]"></Image>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
