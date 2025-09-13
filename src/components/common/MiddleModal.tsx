import { Dispatch, ReactNode, SetStateAction } from 'react'
import { HiOutlineX } from "react-icons/hi";

interface MiddleModalProps {
    title: string
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    isModalOpen: boolean
    children: ReactNode
}
export default function MiddleModal({ title, setIsModalOpen, isModalOpen, children }: MiddleModalProps) {
    return (
        <div
            onClick={() => {
                setIsModalOpen(!isModalOpen)
            }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="mx-5 flex w-full flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
            >
                <section className="flex items-center justify-between">
                    <h2 className="title-lg">{title}</h2>
                    <HiOutlineX
                        className="w-[24px] h-[24px]"
                        onClick={() => {
                            setIsModalOpen(!isModalOpen)
                        }}
                    />
                </section>
                {children}
            </div>
        </div>
    )
}
