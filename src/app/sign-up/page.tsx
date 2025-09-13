'use client'
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import {useState} from "react";
import LanguageAndCountrySelector from "@/components/components/LanguageAndCountrySelector";
import EducationAndResidenceForm from "@/components/components/EducationAndResidenceForm";
import CulturalPreferencesForm from "@/components/components/CulturalPreferencesForm";
import SocialPreferencesForm from "@/components/components/SocialPreferencesForm";
import Button from "@/components/common/Button";
import {useRouter} from "next/navigation";

export default function SignUpPage() {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
    const router = useRouter()
    return (
        <main className="flex items-center justify-center">
            <div className="relative w-[400px] bg-white min-h-screen">
                <Header headerType={'signup'}/>
                <div className="pt-[112px]" />
                <ProcessBar step={step} />
                <div className="px-5">
                    {step === 1 ? (
                        <LanguageAndCountrySelector />
                    ) : null}
                    {step === 2 ? (
                        <EducationAndResidenceForm />
                    ) : null}
                    {step === 3 ? (
                        <CulturalPreferencesForm />
                    ) : null}
                    {step === 4 ? (
                        <SocialPreferencesForm />
                    ) : null}
                </div>
                <div className="h-[120px]"></div>
                <div className="px-5 flex gap-x-2 fixed bottom-0 py-[20px] w-full bg-white border-t border-gray-20">
                    {step >=2 ? (
                        <Button type={'outline'} onClick={() => {
                            setStep(step - 1);
                        }} size={'lg'} customClassName={'w-full'}>이전</Button>
                    ) : null}
                    <Button type={'active'} onClick={() => {
                        if (step === 4) {
                            router.push('/home')
                        } else {
                            setStep(step + 1);
                        }
                    }} size={'lg'} customClassName={'w-full'}>다음</Button>
                </div>
            </div>
        </main>
    )
}
function ProcessBar ({step}: {step: 1 | 2 | 3 | 4}) {
    return (
        <div className="flex gap-x-2 px-5 mb-6">
            <div className={`h-[5px] w-full ${step >= 1 ? 'bg-conic-orange-30' : 'bg-gray-20'}`}></div>
            <div className={`h-[5px] w-full ${step >= 2 ? 'bg-conic-orange-30' : 'bg-gray-20'}`}></div>
            <div className={`h-[5px] w-full ${step >= 3 ? 'bg-conic-orange-30' : 'bg-gray-20'}`}></div>
            <div className={`h-[5px] w-full ${step >= 4 ? 'bg-conic-orange-30' : 'bg-gray-20'}`}></div>
        </div>
    )
}
