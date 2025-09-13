import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function HomeCard() {
    return (
        <div className="flex flex-col gap-y-2 shadow-md w-[220px] rounded-b-[16px]">
            <div className="relative w-[220px] h-[130px]">
                <Image src="/profile.png" alt='프로필' fill className="object-cover rounded-t-[16px]" />
            </div>
            <section className="flex flex-col px-3 pb-4">
                <div className="flex flex-col gap-y-1">
                    <p className="subtitle-md">유림이네 식당</p>
                    <p className="flex items-center body-sm text-gray-50"><HiOutlineLocationMarker/>충청북도 청주시 복대동</p>
                </div>

                <div className="flex gap-x-1 mt-3">
                    <div className="py-1 px-3 bg-gray-10 rounded-full small text-gray-50 w-fit">#웨이팅</div>
                    <div className="py-1 px-3 bg-gray-10 rounded-full small text-gray-50 w-fit">#맛집</div>
                    <div className="py-1 px-3 bg-gray-10 rounded-full small text-gray-50 w-fit">#조용한</div>
                </div>
            </section>
        </div>
    )
}
