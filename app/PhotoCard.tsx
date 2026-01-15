'use client'; 

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoCardProps {
  src: string;
  index: number;
  onClick: () => void; // NEU: Eine Funktion, die wir von oben reinreichen
}

export default function PhotoCard({ src, index, onClick }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-4 break-inside-avoid rounded-xl overflow-hidden group cursor-pointer"
      onClick={onClick} // NEU: Hier feuern wir das Event
    >
      <Image
        src={src}
        alt="Portfolio Foto"
        width={800}
        height={600}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-medium tracking-widest border border-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          VIEW
        </p>
      </div>
      
    </motion.div>
  );
}