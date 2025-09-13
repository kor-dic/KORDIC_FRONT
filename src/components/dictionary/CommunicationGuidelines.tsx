import {useState} from "react";
import Image from "next/image";
import { HiOutlineBadgeCheck } from "react-icons/hi";

export default function CommunicationGuidelines () {
    const [type, setType] = useState<'존댓말과 반말' | '생활 언행 주의'>('존댓말과 반말')
    return (
        <div className="relative flex flex-col px-5 h-full">
            <section className="flex gap-x-2">
                <button onClick={() => {
                    setType('존댓말과 반말')
                }} className={`${type === '존댓말과 반말' ? "h-[28px] border border-conic-orange-30 rounded-full px-3 body-md text-conic-orange-30" : "h-[28px] border border-gray-20 rounded-full px-3 text-gray-50"}`}>존댓말과 반말</button>
                <button onClick={() => {
                    setType('생활 언행 주의')
                }} className={`${type === '생활 언행 주의' ? "h-[28px] border border-conic-orange-30 rounded-full px-3 body-md text-conic-orange-30" : "h-[28px] border border-gray-20 rounded-full px-3 text-gray-50"}`}>생활 언행 주의</button>
            </section>
            {type === '존댓말과 반말' ? (
                <>
                    <h1 className="title-md mt-[20px]">존댓말과 반말</h1>
                    <div className="flex flex-col gap-y-4 mt-5">
                        <div className="flex flex-col">
                            <p className="flex gap-x-1 items-center subtitle-lg">설명</p>
                            <p className="body-sm">한국에서 나이와 관계, 관계의 친밀도에 따라 언어 높임말(존댓말)과 반말을 구분해 사용</p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-lg">안내사항</p>
                            <div>
                                <p className="subtitle-sm">존댓말</p>
                                <p className="body-sm">처음 만나는 사람, 공식 자리, 나이와 관계없이 사용 (습니다/-어요)</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">반말</p>
                                <p className="body-sm">친구·친밀한 관계에서 사용 (아/어, (으)ㄴ다, 지)</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">연인·친밀 관계</p>
                                <p className="body-sm">여자가 연상 남자를 “오빠”, 남자가 연상 여자를 “누나”로 부를 수 있음</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">호칭</p>
                                <ul className="body-sm pl-1">
                                    <li> - `~씨`: 기본적·무난, 거의 모든 상황에서 사용</li>
                                    <li>- `~님`: 격식 높임, 직책이나 역할 있는 사람에게 사용</li>
                                    <li>- `~선생님`: 지식·직업 존중, 선생·교수·의사 등에게 사용</li>
                                </ul>

                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">방문/이용 방법</p>
                            <ul className="body-sm pl-1">
                                <li>1. 처음 만나는 사람에게는 항상 존댓말 사용</li>
                                <li>2. 상대방이 먼저 반말을 써도, 직급이 높으면 계속 존댓말 유지</li>
                                <li>3. 불확실할 때는 이름 뒤에 ~씨를 붙여 안전하게 호칭</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-lg">상세 사례</p>
                            <p className="body-sm">나보다 나이 많은 동료: "김철수 씨, 안녕하세요!"</p>
                            <p className="body-sm">상급자와 대화 시: "좋은 것 같습니다!" (반말 금지)</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className=" relative w-[164px] h-[160px]">
                            <Image src='/tiger5.png' alt={'호랑이2'} className={'object-cover'} fill/>
                        </div>
                    </div>
                </>
            ) : null}
            {type === '생활 언행 주의' ? (
                <>
                    <h1 className="title-md mt-[20px]">생활 언행 주의 안내</h1>
                    <div className="flex flex-col gap-y-4 mt-5">
                        <div className="flex flex-col">
                            <p className="flex gap-x-1 items-center subtitle-lg">설명</p>
                            <p className="body-sm">한국 사회에서 금기되는 행동, 민감한 주제, 비언어적 소통 관습 안내</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="subtitle-lg">안내사항</p>
                            <div>
                                <p className="subtitle-sm">금기 주제</p>
                                <p className="body-sm">종교, 정치, 개인적 비판 등 민감한 대화 피하기</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">행동·제스처</p>
                                <p className="body-sm">작품 만지기 금지, 플래시 촬영 금지</p>
                            </div>
                            <div>
                                <p className="subtitle-sm">공식 자리·공공장소</p>
                                <p className="body-sm">조용한 언행, 개인 공간 존중</p>
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <p className="subtitle-lg">방문/이용 방법</p>
                            <ul className="body-sm pl-1">
                            <li>1. 공식·공공 자리에서는 항상 존댓말 사용</li>
                                <li>2. 모임·대화 시 다른 사람의 관습·신체적 거리 존중</li>
                                <li>3. 의도치 않은 무례를 피하려면 모르는 행동은 따라 하지 않음</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="subtitle-lg">상세 사례</p>
                            <p className="body-sm">손가락으로 가리키기 금지</p>
                            <p className="body-sm">어른 앞에서 큰 소리로 웃거나 떠들지 않기</p>
                            <p className="body-sm">민감한 주제(종교·정치) 대화 자제</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className=" relative w-[140px] h-[160px]">
                            <Image src='/tiger6.png' alt={'호랑이5'} className={'object-cover'} fill/>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}
