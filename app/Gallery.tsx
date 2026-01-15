'use client';

import { useState } from 'react';
import PhotoCard from './PhotoCard';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // WICHTIG: CSS importieren

interface GalleryProps {
  photos: string[]; // Die Liste der Dateinamen
}

export default function Gallery({ photos }: GalleryProps) {
  // State: Welches Bild ist offen? -1 bedeutet "keins" (geschlossen)
  const [index, setIndex] = useState(-1);

  // Wir bauen die Array-Struktur für die Lightbox
  const slides = photos.map(photo => ({
    src: `/photos/${photo}`
  }));

  return (
    <>
      {/* 1. Das Grid */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, i) => (
          <PhotoCard 
            key={photo} 
            src={`/photos/${photo}`} 
            index={i}
            // Hier übergeben wir die Funktion: "Setze den Index auf i"
            onClick={() => setIndex(i)} 
          />
        ))}
      </div>

      {/* 2. Die Lightbox (Overlay) */}
      <Lightbox
        open={index >= 0} // Offen, wenn Index 0 oder größer ist
        index={index}     // Startet beim geklickten Bild
        close={() => setIndex(-1)} // Beim Schließen Index wieder auf -1
        slides={slides}   // Die Bilderliste
      />
    </>
  );
}