import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center p-4">
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold uppercase flex flex-col text-center sm:text-right text-yellow-500">
        Sadura{' '}
        <span className="text-2xl sm:text-3xl md:text-4xl text-white">
          Software
        </span>
      </h1>
    </main>
  );
}
