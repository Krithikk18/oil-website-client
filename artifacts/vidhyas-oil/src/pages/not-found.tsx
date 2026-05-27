import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F9F6F0] px-4 pt-24">
      <div className="max-w-md text-center">
        <p className="text-[#C8942A] text-xs font-medium tracking-[0.3em] uppercase mb-3">
          404
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1b4332] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#5c5c5c] leading-relaxed mb-8">
          The page you're looking for may have moved, or the link may be incorrect.
        </p>
        <Link href="/">
          <button className="px-7 py-3 bg-[#1b4332] text-white font-medium rounded-full hover:bg-[#2d6a4f] transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
