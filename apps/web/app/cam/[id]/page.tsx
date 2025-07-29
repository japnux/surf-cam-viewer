import { cams } from '@/data/cams';
import VideoPlayer from '@/components/VideoPlayer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CamPage({ params }: { params: { id: string } }) {
  const cam = cams.find((c) => c.id === params.id);

  if (!cam) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-4xl">
        <div className="mb-4">
          <Link href="/" className="text-primary hover:underline">
            &larr; Back to all cams
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">{cam.name}</h1>
        <div className="aspect-video w-full">
          <VideoPlayer src={cam.streamUrl} />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return cams.map((cam) => ({
    id: cam.id,
  }));
}

