import Image from "next/image";
import {useState} from "react";

export default function LocationNotice() {
    const [type, setType] = useState<'종교시설' | '문화시설' | '경조사 시설'>('종교시설')

    return (
        <div className="relative flex flex-col px-5 h-full">
            <section className="flex gap-x-2">
                <button onClick={() => {
                    setType('종교시설')
                }}
                        className={`${type === '종교시설' ? "h-[28px] border border-conic-orange-30 rounded-full px-3 body-md text-conic-orange-30" : "h-[28px] border border-gray-20 rounded-full px-3 text-gray-50"}`}>종교시설
                </button>
                <button onClick={() => {
                    setType('문화시설')
                }}
                        className={`${type === '문화시설' ? "h-[28px] border border-conic-orange-30 rounded-full px-3 body-md text-conic-orange-30" : "h-[28px] border border-gray-20 rounded-full px-3 text-gray-50"}`}>문화시설
                </button>
                <button onClick={() => {
                    setType('경조사 시설')
                }}
                        className={`${type === '경조사 시설' ? "h-[28px] border border-conic-orange-30 rounded-full px-3 body-md text-conic-orange-30" : "h-[28px] border border-gray-20 rounded-full px-3 text-gray-50"}`}>경조사
                    시설
                </button>

            </section>
            {type === '종교시설' ? (
                <>
                    <h1 className="title-md mt-[20px]">종교시설 방문 예절</h1>
                    <div className="flex flex-col gap-y-4 mt-5">
                        <div className="flex flex-col">
                            <p className="flex gap-x-1 items-center subtitle-lg">설명</p>
                            <p className="body-sm">사찰, 교회, 성당, 원불교 교당 등 방문 시 지켜야 할 기본 예절 안내</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">안내사항</p>
                            <p className="body-sm">복장 규정, 입장/참배 방법, 사진 촬영 및 휴대폰 주의</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">방문/이용 방법</p>
                            <ul className="body-sm pl-1">
                                <li>1. 방문 전 복장 확인 (단정하고 보수적)</li>
                                <li>2. 휴대폰 무음 설정</li>
                                <li>3. 지정된 장소 및 동선 따라 이동</li>
                                <li>4. 참배/예배 시 조용히 행동</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-lg">상세 사례</p>
                            <div>
                                <p className="subtitle-sm">사찰</p>
                                <p className="body-sm">긴 바지, 어깨 가린 상의, 절할 때 두 손 합장, 사진 촬영 금지</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">교회</p>
                                <p className="body-sm">정장·단정한 캐주얼, 예배 중 출입 금지, 휴대폰 무음, 모자는 벗기</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">성당</p>
                                <p className="body-sm">미사 중 좌석 지키기, 비신자는 성체 받지 않음, 모자는 벗기</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">원불교 교당</p>
                                <p className="body-sm">조용한 관람, 사진 자제</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className=" relative w-[156px] h-[162px]">
                            <Image src='/tiger3.png' alt={'호랑이2'} className={'object-cover'} fill/>
                        </div>
                    </div>
                </>
            ) : null}
            {type === '문화시설' ? (
                <>
                    <h1 className="title-md mt-[20px]">문화시설 방문 예절</h1>
                    <div className="flex flex-col gap-y-4 mt-5">
                        <div className="flex flex-col">
                            <p className="flex gap-x-1 items-center subtitle-lg">설명</p>
                            <p className="body-sm">박물관, 공연장, 궁궐 등 방문 시 주의사항 안내</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">안내사항</p>
                            <p className="body-sm">조용한 관람, 사진 촬영 제한, 드레스 코드</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">방문/이용 방법</p>
                            <ul className="body-sm pl-1">
                                <li>1. 사전 정보 확인 (개방 여부, 촬영 가능 여부)</li>
                                <li>2. 휴대폰 무음, 지정된 동선 따라 이동</li>
                                <li>3. 작품/공연 감상 시 조용히 행동</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-lg">상세 사례</p>
                            <div>
                                <p className="subtitle-sm">박물관</p>
                                <p className="body-sm">작품 만지기 금지, 플래시 촬영 금지</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">공연장</p>
                                <p className="body-sm">공연 시작 10분 전 도착, 조용히 관람, 박수 적절히</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">궁궐</p>
                                <p className="body-sm">건물 위로 올라가기 금지, 울타리 넘어가지 않기, 외부 공간 촬영 가능</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className=" relative w-[140px] h-[150px]">
                            <Image src='/tiger2.png' alt={'호랑이2'} className={'object-cover'} fill/>
                        </div>
                    </div>
                </>
            ) : null}
            {type === '경조사 시설' ? (
                <>
                    <h1 className="title-md mt-[20px]">경조사 시설 예절</h1>
                    <div className="flex flex-col gap-y-4 mt-5">
                        <div className="flex flex-col">
                            <p className="flex gap-x-1 items-center subtitle-lg">설명</p>
                            <p className="body-sm">결혼식장 및 장례식장 방문 시 지켜야 할 예절 안내</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">안내사항</p>
                            <p className="body-sm">복장 규정, 축의금/조의금 예절, 입장 및 행동 주의사항</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">방문/이용 방법</p>
                            <ul className="body-sm pl-1">
                                <li>1. 복장 확인 (결혼식: 정장·원피스, 장례식: 검정색·어두운 색상)</li>
                                <li>2. 휴대폰 무음, 모자 착용 주의</li>
                                <li>3. 조용히 행동, 필요 시 봉투 작성</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-lg">상세 사례</p>
                            <div>
                                <p className="subtitle-sm">결혼식</p>
                                <p className="body-sm">흰색·화려한 색상 피하기, 친구 5-10만원, 가족 10만원 이상</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">장례식</p>
                                <p className="body-sm">조용히 발걸음, "삼가 고인의 명복을 빕니다" 인사, 사진·음식 금지</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className=" relative w-[140px] h-[160px]">
                            <Image src='/tiger4.png' alt={'호랑이2'} className={'object-cover'} fill/>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}
