import Image from "next/image";
import { cams } from '@/data/cams';
import VideoCard from '@/components/VideoCard';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="container mx-auto px-4 py-8 row-start-2">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Surf Webcams
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cams.map((cam) => (
            <VideoCard
              key={cam.id}
              id={cam.id}
              name={cam.name}
              thumbnailUrl={cam.thumbnailUrl}
            />
          ))}
        </div>
      </main>

    </div>
  );
}
