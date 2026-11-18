import React from 'react';

interface BrandEmblemProps {
  className?: string;
}

const ORIGINAL_LOGO_URL =
  '/assets/aistudio/526264590_17849606553530090_1849086947654973078_n-removebg-preview__1__932551e3.png';

export const BrandEmblem: React.FC<BrandEmblemProps> = ({ className = 'w-12' }) => (
  <span
    aria-hidden="true"
    className={`relative inline-block shrink-0 overflow-hidden ${className}`}
    style={{ aspectRatio: '117 / 60' }}
  >
    <span
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[128.2%] aspect-square pointer-events-none"
      style={{
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url('${ORIGINAL_LOGO_URL}')`,
        maskImage: `url('${ORIGINAL_LOGO_URL}')`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  </span>
);

export const BrandWordmark: React.FC<{ className?: string }> = ({
  className = 'text-xl tracking-[0.14em]',
}) => (
  <span
    className={`font-normal uppercase select-none ${className}`}
    style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.16em' }}
  >
    LARRONDA
  </span>
);
