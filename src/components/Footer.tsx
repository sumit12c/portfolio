export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8 mb-8">
          <div className="text-2xl font-bold font-display tracking-tight">
            Sumit<span className="text-purple-500">.</span>
          </div>
          <div className="flex items-center gap-6">
            {['About', 'Services', 'Projects', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Sumit Patel. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            <span>Crafted with passion by</span>
            <span className="text-gray-300 font-medium">Sumit Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
