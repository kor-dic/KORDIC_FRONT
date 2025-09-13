import Image from "next/image";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import {useRouter} from "next/navigation";
import { HiOutlineChevronLeft } from "react-icons/hi";

interface HeaderProps {
    headerType?: 'default' | 'dynamic'
    onBack?: () => void
    title?: string
}

export default function Header({headerType = 'default', onBack, title}: HeaderProps) {
    const router = useRouter()

    const renderHeaderType = (headerType: 'default' | 'dynamic' | undefined) => {
        switch (headerType) {
            case 'dynamic':
                return (
                    <header
                        className="fixed z-10 flex justify-between items-center h-[80px] border-b border-gray-20 w-full bg-white px-5">
                        <div className="relative flex w-full items-center bg-white">
                            <HiOutlineChevronLeft onClick={() => {
                                router.back()
                            }}  className={'w-[24px] h-[24px] text-gray-50'}/>
                            <h1 className="subtitle-md absolute left-1/2 -translate-x-1/2 whitespace-nowrap">{title}</h1>
                        </div>
                    </header>
                )
            default :
                return (
                    <header
                        className="fixed z-10 flex justify-between items-center h-[80px] border-b border-gray-20 w-full bg-white px-5">
                        <div className="relative w-[150px] h-[40px] mt-2">
                            <Image src={'/kodic.png'} fill alt='로고' className="object-cover"></Image>
                        </div>
                        <div className="flex gap-x-2">
                            <HiOutlineBell className="w-[32px] h-[32px] text-conic-darkblue"/>
                            <HiOutlineGlobeAlt className="w-[32px] h-[32px] text-conic-darkblue"/>
                        </div>
                    </header>
                )
        }
    }
    return renderHeaderType(headerType)
}
