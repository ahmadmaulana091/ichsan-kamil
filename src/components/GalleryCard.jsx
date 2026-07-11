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
      className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-gold/10 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(203,163,88,0.25)] transition-all duration-500 bg-charcoal/5 ${className}`}
    >
      {/* Zoom in Image on Hover */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Dark & Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
      
      {/* Glassmorphic Category Tag with Accent Dot */}
      <span className="absolute top-4 left-4 flex items-center gap-2 backdrop-blur-md bg-black/40 border border-white/10 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
        <span className={`w-1.5 h-1.5 rounded-full ${item.tagColor || 'bg-gold'} shadow-sm`} />
        {item.tag}
      </span>

      {/* Elegant Hover Zoom Icon */}
      <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-gold border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-md group-hover:rotate-12">
        <ZoomIn className="w-4 h-4 text-gold" />
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-serif text-white font-bold text-base sm:text-lg lg:text-xl leading-snug drop-shadow-md group-hover:text-gold transition-colors duration-300">
          {item.title}
        </h3>
        
        {/* Expanded Details on Hover */}
        <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
          <p className="text-white/80 text-xs mt-2 leading-relaxed font-light">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
