import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-deep flex flex-col items-center justify-center text-center px-4">
      <div className="text-chrome text-6xl mb-6">⚓</div>
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Lost at Sea</h2>
      <p className="text-text-muted text-lg mb-8 max-w-md">
        The page you are looking for has drifted away or does not exist.
      </p>
      <Link
        href="/"
        className="bg-chrome text-navy-deep font-bold rounded-sm px-8 py-4 hover:bg-white transition-colors"
      >
        Return to Port
      </Link>
    </div>
  );
}
