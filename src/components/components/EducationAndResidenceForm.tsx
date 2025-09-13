export default function EducationAndResidenceForm() {
    return (
        <div className="flex flex-col gap-y-[32px]">
            <h1 className="title-lg">거주 및 학업 정보</h1>
            <div className="flex flex-col gap-y-6">
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">거주지역</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'거주지역를 입력해주세요.'}></input>
                    </div>

                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">대학교/캠퍼스</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'재학하고 있는 대학교/캠퍼스를 입력해주세요.'}></input>
                    </div>
                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">주요 활동 지역</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'주요 활동 지역을 입력해주세요.'}></input>
                    </div>
                </section>
                <section className="flex flex-col gap-y-2">
                    <p className="title-md">주요 교통수단</p>
                    <div className="flex items-center px-4 border border-gray-20 rounded-[16px] h-[48px]">
                        <input className="outline-none w-full" placeholder={'주요 교통수단을 입력해주세요.'}></input>
                    </div>
                </section>
            </div>
        </div>
    )
}
