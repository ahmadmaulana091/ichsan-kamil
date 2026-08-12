import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';

/**
 * PromoPopupModal
 * ─────────────────────────────────────────────────────────────────
 * Muncul otomatis saat website pertama kali dibuka. Menampilkan
 * brosur promo secara full — tanpa keterangan tambahan. Tombol CTA
 * dan close button di-overlay di atas gambar.
 *
 * Props:
 *  - promo        : objek konfigurasi promo (lihat ACTIVE_PROMO)
 *  - onClose      : fungsi untuk menutup modal
 *  - onOpenDetail : fungsi(packageId) – membuka modal detail paket
 */

// ─── Konfigurasi Promo Aktif ──────────────────────────────────────
export const ACTIVE_PROMO = {
  packageId: 2,           // id paket di PACKAGES (PackageGrid)
  brosurImg: '/promosi/promosi-oct26.png',
  ctaLabel: 'Lihat Detail Paket',
};
// ─────────────────────────────────────────────────────────────────

export default function PromoPopupModal({ promo = ACTIVE_PROMO, onClose, onOpenDetail }) {
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

  // CTA: tutup popup → scroll ke section paket → buka detail paket
  const handleCTA = () => {
    onClose();
    setTimeout(() => {
      const section = document.getElementById('packages');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    setTimeout(() => {
      if (onOpenDetail) onOpenDetail(promo.packageId);
    }, 500);
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
        animation: 'promoFadeIn 0.3s ease-out forwards',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Popup Promo"
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
          animation: 'promoSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
            src={promo.brosurImg}
            alt="Brosur Promo Ichsan Kamil"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              cursor: 'pointer',
            }}
            onClick={handleCTA}
            title="Klik untuk melihat detail paket"
          />
        </div>

        {/* ── Tombol Tutup (pojok kanan atas) ── */}
        <button
          onClick={onClose}
          aria-label="Tutup popup promo"
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

        {/* ── CTA Bar (di bawah gambar, bukan overlay) ── */}
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
          {/* Tombol CTA */}
          <button
            onClick={handleCTA}
            style={{
              flex: 1,
              padding: '13px 20px',
              backgroundColor: '#CBA358',
              color: '#6A0F1A',
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
              boxShadow: '0 4px 16px rgba(203,163,88,0.3)',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
              fontFamily: '"Outfit", sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#d9b46a';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#CBA358';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {promo.ctaLabel}
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
        @keyframes promoFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes promoSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </div>
  );
}
