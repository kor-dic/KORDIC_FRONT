import {useState} from "react";

export default function SocialPreferencesForm () {
    const contentList = ['적극적', '보통', '소극적']
    const contentList2 = ['조용하고 아늑한','활기차고 북적한','트렌디하고 세련된']
    const contentList3 = ['식사 해결', '친구와의 시간', '공부/작업', '데이트','문화체험']
    const [selectedContent1, setSelectedContent1] = useState<string>()
    const [selectedContent2, setSelectedContent2] = useState<string>()
    const [selectedContent3, setSelectedContent3] = useState<string>()


    return (
        <div className="flex flex-col gap-y-[32px]">
            <h1 className="title-lg">문화적 선호도</h1>
            <div className="flex flex-col gap-y-6">
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">새로운 사람들과의 만남은?</p>
                    <div className="flex flex-col gap-2">
                        {contentList.map((year) => {
                            return (
                                <button onClick={() => {
                                    setSelectedContent1(year)
                                }} key={year}
                                        className={`${selectedContent1 === year ? 'w-full py-3 border border-conic-orange-30 bg-conic-orange-10 text-conic-orange-40 rounded-[16px] body-md hover:shadow-md transition' : 'w-full py-3 border border-gray-20 rounded-[16px] body-md hover:shadow-md transition'}`}>{year}</button>
                            )
                        })}
                    </div>

                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">분위기 선호도는?</p>
                    <div className="flex flex-col gap-y-2">
                        {contentList2.map((content2) => {
                            return (
                                <button onClick={() => {
                                    setSelectedContent2(content2)
                                }} key={content2}
                                        className={`${selectedContent2 === content2 ? 'w-full py-3 border border-conic-orange-30 bg-conic-orange-10 text-conic-orange-40 rounded-[16px] body-md hover:shadow-md transition' : 'w-full py-3 border border-gray-20 rounded-[16px] body-md hover:shadow-md transition'}`}>{content2}</button>
                            )
                        })}
                    </div>


                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">주로 어떤 목적으로 외식하나요?</p>
                    <div className="flex flex-col gap-y-2">
                        {contentList3.map((content3) => {
                            return (
                                <button onClick={() => {
                                    setSelectedContent3(content3)
                                }} key={content3}
                                        className={`${selectedContent3 === content3 ? 'w-full py-3 border border-conic-orange-30 bg-conic-orange-10 text-conic-orange-40 rounded-[16px] body-md hover:shadow-md transition' : 'w-full py-3 border border-gray-20 rounded-[16px] body-md hover:shadow-md transition'}`}>{content3}</button>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
