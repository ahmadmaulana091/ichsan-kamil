import React from 'react';
import { ZoomIn } from 'lucide-react';

/**
 * Premium Gallery Card Component
 * Displays a gallery image with category tag, title, description, and hover animations.
 * 
 * @param {Object} props
 * @param {Object} props.item - Gallery item data (src, title, caption, tag, tagColor)
 * @param {Function} props.onClick - Click handler to open lightbox
 * @param {string} [props.className] - Extra class names for grid layout
 */
export default function GalleryCard({ item, onClick, className = '' }) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-500 bg-charcoal/5 ${className}`}
    >
      {/* Zoom in Image on Hover */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={item.src}
          alt={`Galeri ${item.id}`}
          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Subtle Overlay & Zoom Icon on Hover */}
      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
          <ZoomIn className="w-6 h-6 text-gold" />
        </div>
      </div>
    </div>
  );
}
