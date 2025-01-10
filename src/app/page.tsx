import Image from 'next/image';
import { Logo, Menu } from './assets/Icons';
// Import
export default function Home() {
  return (
    <main
      className=""
      style={{
        backgroundImage: 'url(/bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-between py-10 px-9 lg:px-12">
        <div>{Logo}</div>
        <div>{Menu}</div>
      </div>

      <div
        className="flex flex-col justify-center items-center m-8"
        style={{ height: 'calc(100vh - 170px)' }}
      >
        <h1
          className="lg:text-[90px] font-extrabold italic tracking-tight text-[55px] leading-[69px] lg:leading-normal"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          We Develop Your Ideas
        </h1>
        <div className="flex space-x-12 text-[10px] font-thin mt-6 italic ">
          <span className="relative before:content-[''] before:absolute before:left-[-24px] before:top-[2px] before:w-[1px] before:h-[12px] before:bg-purple-700 first:before:hidden lg:tracking-[3px]">
            Website
          </span>
          <span className="relative before:content-[''] before:absolute before:left-[-24px] before:top-[2px] before:w-[1px] before:h-[12px] before:bg-purple-700 lg:tracking-[3px]">
            Apps
          </span>
          <span className="relative before:content-[''] before:absolute before:left-[-24px] before:top-[2px] before:w-[1px] before:h-[12px] before:bg-purple-700 lg:tracking-[3px]">
            Blockchain
          </span>
          <span className="relative before:content-[''] before:absolute before:left-[-24px] before:top-[2px] before:w-[1px] before:h-[12px] before:bg-purple-700 lg:tracking-[3px]">
            AI
          </span>
        </div>
      </div>
    </main>
  );
}
