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
                            <HomeCard imageUrl={'/home/card10.png'} tag1={'넓음'} tag2={'분식'} tag3={'로컬맛집'} storeName={'중문탕수육'} location={'충청북도 청주시 흥덕구 사창동'}/>
                            <HomeCard imageUrl={'/home/card1.png'} tag1={'일식'} tag2={'프랜차이즈'} tag3={'국물_맛집'} storeName={'면식당 충북대점'} location={'충청북도 청주시 서원구'}/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 요즘 유행인 곳</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard tag1={'안주_맛집'} location={'충북 청주시 서원구 1순환로672'} tag3={'익숙한_특별함'} tag2={'청주_맛집'} storeName={'정성집'} imageUrl={'/home/card5.png'}/>
                            <HomeCard tag1={'리뷰_이벤트'} imageUrl={'/home/card3.png'} tag2={'텐동_맛집'} tag3={'일식'} storeName={'치히로 충북대점'} location={'충북 청주시 서원구 사직대로 110'}/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 조용한 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard imageUrl={'/home/coffee1.png'} tag1={'감성적'} tag2={'느좋카페'} tag3={'느좋'} location={'충북 청주시 서원구 수곡로'} storeName={'푼크툼커피로스터스'}/>
                            <HomeCard imageUrl={'/home/coffee2.png'} storeName={'스티즈 커피 로스터즈'} tag1={'휘낭시에맛집'} tag3={'외곽카페'} tag2={'싱글오리진'} location={'충북 청주시 상당구 중앙로'}/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 사람이 적은 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard imageUrl={'/home/coffee3.png'} storeName={'카페광순'} location={'충북 청주시 상당구 북문로'} tag2={'광순'} tag1={'이색카페'} tag3={'성안길_카페'} />
                            <HomeCard imageUrl={'/home/coffee4.png'} storeName={'카페 고트'} location={'충청북도 청주시 상당구 수동'} tag2={'한옥카페'} tag1={'스콘맛집'} tag3={'필터커피'} />
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 공부하기 좋은 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard imageUrl={'/home/coffee5.png'} storeName={'카페코우즈'} location={'충북 청주시 상당구 북문로2가'} tag2={'한옥카페'} tag1={'데이트코스'} tag3={'성안길_데이트'} />
                            <HomeCard imageUrl={'/home/coffee6.png'} storeName={'C,apt,ure'} location={'충북 청주시 상당구 상당로'} tag2={'분위기_맛집'} tag1={'힙한_카페'} tag3={'감성_충전'} />
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 넓은 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard imageUrl={'/home/coffee7.png'} storeName={'바이덴'} location={'충북 청주시 흥덕구 대신로'} tag2={'잠봉루꼴라'} tag1={'베이커리 카페'} tag3={'분위기 있는'} />
                            <HomeCard imageUrl={'/home/coffee8.png'} storeName={'JS 커피바'} location={'충북 청주시 흥덕구 복대동'} tag2={'잔잔한 커피'} tag1={'커피와함께 칵테일을'} tag3={'커피맛'} />
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 커피 맛집 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard imageUrl={'/home/coffee9.png'} storeName={'낮달커피'} location={'충북 청주시 흥덕구 복대동'} tag2={'넓고 쾌적한'} tag1={'커스텀 음료'} tag3={'크로플 맛집'} />
                            <HomeCard imageUrl={'/home/coffee10.png'} storeName={'달라또'} location={'충북 청주시 흥덕구 복대동'} tag2={'쫀득쿠키'} tag1={'수제 디저트'} tag3={'신상카페'} />

                            <HomeCard/>
                        </section>
                    </section>
                    <section className="flex flex-col gap-y-2">
                        <p className="title-md"># 뷰 맛집 카페</p>
                        <section className="flex gap-x-4 overflow-y-scroll">
                            <HomeCard imageUrl={'/home/coffee11.png'} storeName={'로그아웃'} location={'충북 청주시 흥덕구 복대동'} tag2={'디저트맛'} tag1={'밤마들렌'} tag3={'조용한'} />
                            <HomeCard imageUrl={'/home/coffee12.png'} storeName={'공간시필'} location={'충북 청주시 흥덕구 복대동'} tag2={'조용한'} tag1={'분위기 있는'} tag3={'모임최적'} />
                        </section>
                    </section>
                </div>

                <Navbar/>
            </div>
        </main>
    )
}
