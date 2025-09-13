import Image from "next/image";

interface DictionaryCardProps {
    bgColor: string;
    title: string
}
export default function  DictionaryCard ({title, bgColor}: DictionaryCardProps) {
    return (
        <div className={`bg-[] flex flex-col gap-y-2 items-center justify-center w-full rounded-[16px] p-4 text-center`}>
            <div className="relative w-[100px] h-[100px]">
            </div>
            <p className="subtitle-lg">{title}</p>

        </div>
    )
}
