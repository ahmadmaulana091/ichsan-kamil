import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

/**
 * InfoPopupModal
 * ─────────────────────────────────────────────────────────────────
 * Muncul otomatis saat website pertama kali dibuka. Menampilkan
 * brosur/info secara full — CTA langsung mengarah ke WhatsApp
 * (membuka popup pilihan admin WA), BUKAN ke detail paket.
 *
 * Props:
 *  - popup        : objek konfigurasi popup (lihat contoh di bawah)
 *  - onClose      : fungsi untuk menutup modal
 *  - onOpenWA     : fungsi – membuka popup admin WhatsApp
 */

export default function InfoPopupModal({ popup, onClose, onOpenWA }) {
  const overlayRef = useRef(null);

  // Tutup dengan tombol Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Tutup saat klik overlay (area gelap di luar modal)
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  // CTA: tutup popup → buka popup pilihan admin WhatsApp
  const handleCTA = () => {
    onClose();
    setTimeout(() => {
      if (onOpenWA) onOpenWA();
    }, 200);
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'infoFadeIn 0.3s ease-out forwards',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Popup Info"
    >
      {/*
       * Wrapper modal — hanya berisi gambar brosur + overlay tombol.
       * max-height: 90vh agar selalu muat di layar, berapapun tinggi brosur.
       * width otomatis mengikuti aspek rasio gambar.
       */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '92vh',
          maxWidth: '500px',
          width: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1.5px rgba(203,163,88,0.4)',
          animation: 'infoSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          backgroundColor: '#000',
        }}
      >
        {/* ── Gambar Brosur Full — scrollable ── */}
        <div
          style={{
            overflowY: 'auto',
            lineHeight: 0,
            flex: 1,
          }}
        >
          <img
            src={popup.brosurImg}
            alt="Brosur Ichsan Kamil"
            loading="lazy"
            decoding="async"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              cursor: 'pointer',
            }}
            onClick={handleCTA}
            title="Klik untuk hubungi via WhatsApp"
          />
        </div>

        {/* ── Tombol Tutup (pojok kanan atas) ── */}
        <button
          onClick={onClose}
          aria-label="Tutup popup"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.55)',
            border: '1.5px solid rgba(255,255,255,0.35)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
            lineHeight: 1,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.75)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={17} />
        </button>

        {/* ── CTA Bar (di bawah gambar) ── */}
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: '#111',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
          }}
        >
          {/* Tombol CTA → WhatsApp */}
          <button
            onClick={handleCTA}
            style={{
              flex: 1,
              padding: '13px 20px',
              backgroundColor: '#25D366',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '800',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
              fontFamily: '"Outfit", sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#22c55e';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#25D366';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* WA Icon */}
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: '#fff' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {popup.ctaLabel}
            <ArrowRight size={16} />
          </button>

          {/* Tombol Lewati (compact) */}
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '12px',
              cursor: 'pointer',
              padding: '12px 14px',
              borderRadius: '12px',
              fontFamily: '"Outfit", sans-serif',
              transition: 'border-color 0.2s ease, color 0.2s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
            }}
          >
            Lewati
          </button>
        </div>
      </div>

      {/* ── Keyframe Animations ── */}
      <style>{`
        @keyframes infoFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes infoSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
