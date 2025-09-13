import {useState} from "react";

export default function CulturalPreferencesForm() {
    const contentList = ['매운 음식 못 먹음', '보통', '매운 음식 좋아함']
    const [selectedContent, setSelectedContent] = useState<string>()
    const content2List = ['선호함', '선호하지 않음']
    const [selectedContent2, setSelectedContent2] = useState<string>()
    const [selectedContent3, setSelectedContent3] = useState<string>()
    const content4List = ['매우 그리움', '보통', '별로 그립지 않음']
    const [selectedContent4, setSelectedContent4] = useState<string>()


    return (
        <div className="flex flex-col gap-y-[32px]">
            <h1 className="title-lg">문화적 선호도</h1>
            <div className="flex flex-col gap-y-6">
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">한국 음식 적응도는?</p>
                    <div className="flex flex-col gap-2">
                        {contentList.map((year) => {
                            return (
                                <button onClick={() => {
                                    setSelectedContent(year)
                                }} key={year}
                                        className={`${selectedContent === year ? 'w-full py-3 border border-conic-orange-30 bg-conic-orange-10 text-conic-orange-40 rounded-[16px] body-md hover:shadow-md transition' : 'w-full py-3 border border-gray-20 rounded-[16px] body-md hover:shadow-md transition'}`}>{year}</button>
                            )
                        })}
                    </div>

                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">발효식품 선호도</p>
                    <div className="flex gap-x-2">
                        {content2List.map((content2) => {
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
                    <p className="title-md">생식(회, 육회) 가능 여부</p>
                    <div className="flex gap-x-2">
                        {content2List.map((content2) => {
                            return (
                                <button onClick={() => {
                                    setSelectedContent3(content2)
                                }} key={content2}
                                        className={`${selectedContent3 === content2 ? 'w-full py-3 border border-conic-orange-30 bg-conic-orange-10 text-conic-orange-40 rounded-[16px] body-md hover:shadow-md transition' : 'w-full py-3 border border-gray-20 rounded-[16px] body-md hover:shadow-md transition'}`}>{content2}</button>
                            )
                        })}
                    </div>
                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">고향 음식에 대한 그리움</p>
                    <div className="flex gap-x-2">
                        {content4List.map((content4) => {
                            return (
                                <button onClick={() => {
                                    setSelectedContent4(content4)
                                }} key={content4}
                                        className={`${selectedContent4 === content4 ? 'w-full py-3 border border-conic-orange-30 bg-conic-orange-10 text-conic-orange-40 rounded-[16px] body-md hover:shadow-md transition' : 'w-full py-3 border border-gray-20 rounded-[16px] body-md hover:shadow-md transition'}`}>{content4}</button>
                            )
                        })}
                    </div>
                </section>

            </div>
        </div>
    )
}
