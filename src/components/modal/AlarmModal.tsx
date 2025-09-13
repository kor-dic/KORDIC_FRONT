import { Dispatch, SetStateAction, useEffect, useState } from 'react'
interface AlarmModalProps {
    setIsAlarmModalOpen: Dispatch<SetStateAction<boolean>>
    isAlarmModalOpen: boolean
}

export default function AlarmModal({ setIsAlarmModalOpen, isAlarmModalOpen }: AlarmModalProps) {
    const alarmList = [
        {content: '밤이 늦었네요! 위험하니 큰 도로를 이용해주세요!', time: '10분 전'},
        {content: '휴대폰을 무음으로 설정해주세요!', time: '1일 전'},
        {content: '너무 튀는 옷은 피해서 입어요!', time: '3일 전'},
        {content: '식장에 입장하기 전에 모자는 벗어주세요', time: '7일 전'}]

    return (
        <div
            onClick={() => {
                setIsAlarmModalOpen(!isAlarmModalOpen)
            }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="mx-5 flex w-full flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
            >
                <h3 className="title-lg">알람</h3>

                <div className="flex h-[216px] flex-col gap-y-4 overflow-y-scroll">
                    {alarmList?.map((alarm, index) => {
                        return (
                            <div className={'p-4 border border-gray-20 rounded-[16px]'} key={alarm.content}>
                                <p className="body-sm text-gray-50">{alarm.time}</p>
                                <p className={`text-black body-md`}>
                                    {alarm.content}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

function AlarmItem({
                       title,
                       type,
                       read,
                       name,
                   }: {
    setSelectedInquiry: Dispatch<
        SetStateAction<{ selectedArchiveInquiryId: number; inquiryType: 'ANSWER' | 'INQUIRY' } | undefined>
    >
    setIsInquiryModalOpen: Dispatch<SetStateAction<boolean>>
    title: string
    archiveInquiryNotificationId: number
    archiveInquiryId: number
    type: 'ANSWER' | 'INQUIRY'
    read: boolean
    name: string
}) {
    return (
        <div className="flex flex-col gap-y-2 pb-4">
            <p className={`${read ? 'text-gray5' : 'text-black'} body-md`}>
                <span className="subtitle-md">{name}</span>님이 <span className="subtitle-md">‘{title}’</span> 아카이브에
                {type === 'ANSWER' ? ' 답변을 남겼어요.' : ' 문의를 보냈어요.'}
            </p>
        </div>
    )
}
