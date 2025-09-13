import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {useRouter} from "next/navigation";

interface HomeCardProps {
    location: string
    storeName: string
    tag1: string
    tag2: string
    tag3: string
    imageUrl: string
}

export default function HomeCard({storeName, location, tag1, tag2, tag3, imageUrl}: HomeCardProps) {
    const router = useRouter();
    return (
        <div onClick={() => {
            router.push('/home/1')
        }} className="flex flex-col gap-y-2 shadow-md w-[220px] rounded-b-[16px]">
            <div className="relative w-[220px] h-[130px]">
                <Image src={imageUrl} alt='프로필' fill className="object-cover rounded-t-[16px]" />
            </div>
            <section className="flex flex-col px-3 pb-4">
                <div className="flex flex-col gap-y-1">
                    <p className="subtitle-md">{storeName}</p>
                    <p className="flex items-center body-sm text-gray-50"><HiOutlineLocationMarker/>{location}</p>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                    <div className="py-1 px-3 bg-gray-10 rounded-full small text-gray-50 w-fit">#{tag1}</div>
                    <div className="py-1 px-3 bg-gray-10 rounded-full small text-gray-50 w-fit">#{tag2}</div>
                    <div className="py-1 px-3 bg-gray-10 rounded-full small text-gray-50 w-fit">#{tag3}</div>
                </div>
            </section>
        </div>
    )
}
