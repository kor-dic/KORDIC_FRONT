'use client'
import Header from "@/components/common/Header";
import {useParams} from "next/navigation";
import {useEffect} from "react";

export default function DictionaryPage() {
    const params = useParams()

    useEffect(() => {
        console.log('pathname', params)
    }, []);

    const renderTitle = (pathname: string | string[] | undefined) => {
        switch (pathname) {
            case '1':
                return '커뮤니케이션 가이드'
            case '2':
                return '한국 내 자주 쓰는 앱 안내'
            case '3':
                return '편의시설'
            case '4':
                return '장소별 주의사항 안내 (절, 교회)'
            case '5':
                return '부동산 지원'
            case '6':
                return '국내 안전 및 건강 서비스 안내'
            case '7':
                return '건강보험'
            case '8':
                return '재난문자'
            case '9':
                return '응급 상황 시, 대처 방안'
            case '10':
                return '대사관'
        }
    }
    return (
        <main>
            <div className="relative w-[400px] bg-white min-h-screen">
                <Header headerType={'dynamic'} title={renderTitle(params.id)} />
            </div>
        </main>
)
}
