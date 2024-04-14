'use client'
import Header from '@/app/components/Header'
import ReactPlayer from 'react-player'

export default function MyPage() {
  return (
    <>
      <div className="max-w-[70rem] flex flex-col mx-auto size-full">
        <Header />
        <div className='flex flex-row bg-red-500'>
          <div >
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
          </div>
          <div >
            blah
          </div>
        </div>
      </div>
    </>
  );
}