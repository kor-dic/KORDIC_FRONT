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
                        <QnACard title={'외국인등록증은 언제, 어디서 만드나요?'} content={'한국에 도착했는데, 외국인등록증을 언제 만들고 어디에서 발급받는지 궁금합니다. 절차를 알려주세요.'} profileUrl={'/qna/person1.png'} name={'Matsuoka Yuki'} time={'10분 전'} view={'58'}/>
                        <QnACard title={'What to Do if Something is Lost or Stolen'} content={'I want to know what to do if my belongings are lost or stolen in Korea and how to report it.'} profileUrl={'/qna/person2.png'} name={'Jamal Washington'} time={'2일 전'} view={'128'}/>
                        <QnACard title={'如何寻找单间公寓？'} content={'我想在韩国租单间公寓。请告诉我在哪里找信息，以及按什么步骤签合同。'} profileUrl={'/qna/person3.png'} name={'Li Wei'} time={'20분 전'} view={'58'}/>
                        <QnACard title={'На что обратить внимание при аренде комнаты'} content={'Я хочу арендовать комнату в Корее. Какие моменты следует проверить в договоре и на что особенно обратить внимание?'} profileUrl={'/qna/person4.png'} name={'Li Wei'} time={'32분 전'} view={'28'}/>
                        <QnACard title={'교통비를 절약하는 방법'} content={'한국에서 버스나 지하철을 자주 이용하는데, 교통비를 절약할 수 있는 방법이 있을까요? 카드 사용이나 할인 방법이 궁금합니다.'} profileUrl={'/qna/person5.png'} name={'Anna Poliatova'} time={'10분 전'} view={'37'}/>
                        <QnACard title={'Taxi Tips in Korea'} content={'I want to know useful tips for taking taxis in Korea safely and saving money.'} profileUrl={'/qna/person6.png'} name={'Olivia rodrigo'} time={'48분 전'} view={'19'}/>
                        <QnACard title={'健康保险和医院费用'} content={'我想了解如何在韩国加入健康保险，以及医院费用和保险福利的相关信息。'} profileUrl={'/qna/person7.png'} name={'趙樂基'} time={'50분 전'} view={'29'}/>
                        <QnACard title={'Как пользоваться аптекой'} content={'Я хочу узнать, как покупать лекарства в аптеке в Корее и на что обращать внимание при покупке без рецепта.'} profileUrl={'/qna/person8.png'} name={'Полина гагарина'} time={'1시간 전'} view={'60'}/>
                        <QnACard title={'중요한 전화번호들을 알려주세요.'} content={'긴급 상황이나 생활에 필요한 중요한 전화번호들을 알고 싶습니다. 경찰, 소방서, 병원 등 꼭 필요한 번호가 궁금합니다.'} profileUrl={'/qna/person9.png'} name={'Саша'} time={'1시간 전'} view={'35'}/>
                        <QnACard title={'외국인등록증은 언제, 어디서 만드나요?'} content={'한국에 도착했는데, 외국인등록증을 언제 만들고 어디에서 발급받는지 궁금합니다. 절차를 알려주세요.'} profileUrl={'/qna/person1.png'} name={'Matsuoka Yuki'} time={'2시간 전'} view={'43'}/>
                    </section>

                    <div className="pb-[110px]"></div>

                </div>
                <Navbar/>
            </div>
        </main>
    )
}
