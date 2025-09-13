import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import {usePathname, useRouter} from "next/navigation";
export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname();

    return (
        <nav
            className="custom-shadow fixed bottom-0 bg-white border-t border-gray-20 pt-3 pb-[32px] px-5 w-full flex justify-evenly rounded-t-[32px] ">
            <div
                onClick={() => {
                    router.push('/home')
                }}
                className="flex flex-col items-center justify-center gap-y-1">
                <HiOutlineHome
                    className={`${pathname === '/home' ? 'text-conic-darkblue' : 'text-gray-30'} w-[32px] h-[32px]`}/>
                <p className={`${pathname === '/home' ? 'text-conic-darkblue' : 'text-gray-30'} button`}>홈</p>
            </div>
            <div
                onClick={() => {
                    router.push('/dictionary')
                }}
                className="flex flex-col items-center gap-y-1">
                <HiOutlineClipboardList
                    className={`${pathname === '/dictionary' ? 'text-conic-darkblue' : 'text-gray-30'} w-[32px] h-[32px]`}/>
                <p className={`${pathname === '/dictionary' ? 'text-conic-darkblue' : 'text-gray-30'} button`}>문화 사전</p>
            </div>
            <div
                onClick={() => {
                    router.push('/qna')
                }}
                className="flex flex-col items-center gap-y-1">
                <HiOutlineQuestionMarkCircle
                    className={`${pathname === '/qna' ? 'text-conic-darkblue' : 'text-gray-30'} w-[32px] h-[32px]`}/>
                <p className={`${pathname === '/qna' ? 'text-conic-darkblue' : 'text-gray-30'} button`}>질문</p>
            </div>
            <div
                onClick={() => {
                    router.push('/mypage')
                }}
                className="flex flex-col items-center gap-y-1">
                <HiOutlineUser
                    className={`${pathname === '/mypage' ? 'text-conic-darkblue' : 'text-gray-30'} w-[32px] h-[32px]`}/>
                <p className={`${pathname === '/mypage' ? 'text-conic-darkblue' : 'text-gray-30'} button`}>my</p>
            </div>
        </nav>
    )
}
