import React from 'react';

interface BrandEmblemProps {
  className?: string;
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({ className = 'w-12 h-8' }) => (
  <svg
    viewBox="0 0 300 160"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Left sharing hand / half bowl */}
    <path d="M 142 14 L 6 14 C 6 60 28 102 66 128 C 94 147 122 154 142 156 L 142 136 C 126 134 102 128 78 112 C 49 92 32 63 28 34 L 116 34 L 116 54 L 142 54 Z" />
    <path d="M 38 48 C 47 82 76 110 118 122 L 118 108 C 85 98 62 76 54 48 Z" />
    <path d="M 64 48 C 72 73 93 94 118 102 L 118 88 C 100 82 86 67 80 48 Z" />
    {/* Right sharing hand / half bowl */}
    <path d="M 158 14 L 294 14 C 294 60 272 102 234 128 C 206 147 178 154 158 156 L 158 136 C 174 134 198 128 222 112 C 251 92 268 63 272 34 L 184 34 L 184 54 L 158 54 Z" />
    <path d="M 262 48 C 253 82 224 110 182 122 L 182 108 C 215 98 238 76 246 48 Z" />
    <path d="M 236 48 C 228 73 207 94 182 102 L 182 88 C 200 82 214 67 220 48 Z" />
  </svg>
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
