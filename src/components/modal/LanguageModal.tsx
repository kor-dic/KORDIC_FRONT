import MiddleModal from "@/components/common/MiddleModal";
import {Dispatch, SetStateAction, useState} from "react";
interface LanguageModalProps {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function LanguageModal({isModalOpen, setIsModalOpen} : LanguageModalProps) {
    const languageList = ['🇨🇳 중국', '🇻🇳 베트남', '🇹🇭 태국', '🇺🇸 미국', '🇯🇵 일본', '🇷🇺 러시아']
    const [selectedLanguage, setSelectedLanguage] = useState<string>()
    return (
        <MiddleModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={'언어 선택'}>
            <div className="flex flex-col gap-y-2">
                {languageList.map((language) => {
                    return (
                        <button key={language} onClick={() =>{
                            setSelectedLanguage(language)
                            setIsModalOpen(false)
                        }} className={`${selectedLanguage === language ? 'py-3 body-md rounded-[16px] border border-conic-orange-30 bg-conic-orange-10': 'py-3 body-md rounded-[16px] border border-gray-20'}`}>{language}</button>
                    )
                })}
            </div>
        </MiddleModal>
    )
}
