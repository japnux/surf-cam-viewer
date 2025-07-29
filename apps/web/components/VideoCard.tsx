import Link from 'next/link';

interface VideoCardProps {
  id: string;
  name: string;
  thumbnailUrl: string;
}

export default function VideoCard({ id, name, thumbnailUrl }: VideoCardProps) {
  return (
    <Link href={`/cam/${id}`} className="block group">
      <div className="relative w-full overflow-hidden aspect-video rounded-radius bg-indigo-700">
        {/* TODO: Replace with Next/Image for optimization */}
        <img src={thumbnailUrl} alt={name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-0 left-0 p-4 text-lg font-bold text-white">{name}</h3>
      </div>
    </Link>
  );
}
