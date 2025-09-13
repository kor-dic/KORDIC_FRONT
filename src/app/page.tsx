'use client'

import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter()

    return (
        <main className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center relative w-[400px] bg-conic-orange-10 min-h-screen">
                  <div className="relative w-[400px] h-[400px] ">
                      <Image src={'/logo22.png'} fill className="object-cover" alt={'로고'}/>
                  </div>

                  <div className="absolute bottom-[32px] w-full px-5">
                      <button
                          onClick={() => {
                              router.push('/sign-up');
                          }}
                          className="bg-conic-orange-30 text-white button-lg py-4 w-full rounded-full hover:shadow-md transition cursor-pointer">
                          시작하기
                      </button>
                  </div>
              </div>
        </main>
  );
}
