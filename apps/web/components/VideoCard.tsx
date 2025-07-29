import Link from 'next/link';

interface VideoCardProps {
  id: string;
  name: string;
}

export default function VideoCard({ id, name }: VideoCardProps) {
  return (
    <Link href={`/cam/${id}`} className="block group">
      <div className="flex items-center justify-center w-full h-32 p-4 transition-colors duration-300 bg-indigo-700 rounded-radius hover:bg-indigo-600">
        <h3 className="text-lg font-bold text-center text-white">{name}</h3>
      </div>
    </Link>
  );
}
