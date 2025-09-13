import {useState} from "react";

export default function LanguageAndCountrySelector() {
    const years = ['1년 이하', '1년-2년', '3년-5년', '6년-8년', '9년-10년', '10년 이상']
    const [selectedContent, setSelectedContent] = useState<string>()
    return (
        <div className="flex flex-col gap-y-[32px]">
            <h1 className="title-lg">국적 및 언어</h1>
            <div className="flex flex-col gap-y-6">
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">출신국가</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'출신 국가를 입력해주세요.'}></input>
                    </div>

                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">한국 입국 시기</p>
                    <div className="grid grid-cols-3 gap-2">
                        {years.map((year) => {
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
                    <p className="title-md">구사 가능 언어</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'구사 가능한 언어를 입력해주세요.'}></input>
                    </div>
                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">종교</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'종교를 입력해주세요.'}></input>
                    </div>
                </section>
            </div>
        </div>

    )
}
