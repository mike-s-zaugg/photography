import fs from 'fs';
import path from 'path';
import Gallery from './Gallery'; // Wir importieren jetzt die Gallery, nicht mehr PhotoCard
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  // --- SERVER LOGIC ---
  const photosDir = path.join(process.cwd(), 'public', 'photos');
  const photos = fs.readdirSync(photosDir).filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );
  // --------------------

  return (
    <main className="min-h-screen bg-[#111] text-white p-8">
      
      <header className="max-w-6xl mx-auto mb-16 mt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          PORTFOLIO
        </h1>
      <p className="text-gray-400 text-lg max-w-md border-l-2 border-white/20 pl-4 flex flex-col justify-center">
  
  {/* Zeile 1: Instagram Link (Icon + Text zusammen) */}
  <a 
    href="https://instagram.com/msz.photograph" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 group mb-1" // Flexbox für Ausrichtung
  >
    {/* Das Icon im Button-Look */}
    <span className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all group-hover:scale-110 group-hover:text-pink-500 text-white">
      <FaInstagram size={20} />
    </span>
    
    {/* Der Text, der beim Hovern mitgefärbt wird */}
    <span className="group-hover:text-white transition-colors">
      @msz.photograph
    </span>
  </a>

  {/* Zeile 2: Kamera Info */}
  <span className="text-gray-500 text-base block mt-1">
    Canon EOS M50 | 18-150mm
  </span>

</p>
      </header>

      {/* Hier übergeben wir einfach nur noch das Array */}
      <Gallery photos={photos} />

    </main>
  );
}