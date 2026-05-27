import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center font-mono font-bold text-[10px] text-white">
              R
            </div>
            <span className="text-sm text-muted">
              Built with <Heart size={12} className="inline text-accent mx-1" /> by Rahul
            </span>
          </div>
          <p className="text-xs text-muted/60 font-mono">
            &copy; {new Date().getFullYear()} — Designed & Engineered from scratch
          </p>
        </div>
      </div>
    </footer>
  );
}
