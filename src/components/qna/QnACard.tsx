import Image from "next/image";
import {useRouter} from "next/navigation";

interface QnACardProps {
    title: string;
    content: string;
    name: string;
    time: string;
    view: string;
    profileUrl: string;
}
export default function QnACard({title, content, name, view, time, profileUrl}: QnACardProps) {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push('/qna/1')
            }}
            className="flex flex-col gap-y-3 bg-white rounded-[20px] p-4 border border-gray-20">
            <div className="flex flex-col gap-y-1">
                <p className="subtitle-lg">{title}</p>
                <p className="body-md text-gray-50">{content}</p>
            </div>
            <div className="flex badge-md text-gray-40 gap-x-[6px]">
                <div className="relative w-[16px] h-[16px]">
                    <Image src={profileUrl} alt={'프로필'} fill className="object-cover rounded-full"></Image>
                </div>
                <p className="">{name}</p>
                <p>|</p>
                <p>{view}</p>
                <p>|</p>
                <p>{time}</p>
            </div>
        </div>
    )
}
