'use client';

import { useState } from 'react';
import { EmbeddedPhone } from './EmbeddedPhone';
import type { TabKey } from '@/lib/types';

interface HeroPhoneProps {
  calloutLabels: {
    brandImpact: string;
    brandImpactScore: string;
    brandImpactLede: string;
    brandImpactDelta: string;
    cooperativeActive: string;
    newMembersTitle: string;
    newMembersSub: string;
  };
}

export function HeroPhone({ calloutLabels }: HeroPhoneProps) {
  const [tab, setTab] = useState<TabKey>('community');
  return (
    <div className="relative">
      <div
        style={{
          position: 'absolute',
          inset: '-60px -90px',
          zIndex: 0,
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(225,95,65,0.35), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="relative anim-float"
        style={{ filter: 'drop-shadow(0 50px 80px rgba(0,0,0,0.5))' }}
      >
        <EmbeddedPhone
          tab={tab}
          width={368}
          height={780}
          interactive
          autoRotate
          onChangeTab={setTab}
        />
      </div>

      <div
        className="absolute hidden lg:flex flex-col gap-1.5 px-3.5 py-2.5 rounded-2xl text-left"
        style={{
          left: -180,
          top: 90,
          width: 200,
          background: 'rgba(24,22,20,0.85)',
          border: '1px solid var(--line)',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
        }}
      >
        <div className="eyebrow" style={{ fontSize: 9 }}>
          {calloutLabels.brandImpact}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-serif italic text-[36px] leading-none">85</span>
          <span className="text-[12px] font-semibold" style={{ color: '#a89c8a' }}>
            {calloutLabels.brandImpactScore}
          </span>
        </div>
        <div className="text-[11px]" style={{ color: '#a89c8a' }}>
          {calloutLabels.brandImpactLede}
          <span style={{ color: '#10b981' }}>{calloutLabels.brandImpactDelta}</span>
        </div>
        <svg width="140" height="30" style={{ position: 'absolute', right: -130, top: 34 }}>
          <path
            d="M2 15 Q70 15 130 18"
            stroke="rgba(245,242,235,0.18)"
            strokeDasharray="3 4"
            fill="none"
          />
          <circle cx="130" cy="18" r="3" fill="#e15f41" />
        </svg>
      </div>

      <div
        className="absolute hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl"
        style={{
          right: -170,
          top: 360,
          background: 'rgba(24,22,20,0.85)',
          border: '1px solid var(--line)',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
        }}
      >
        <span
          className="anim-pulse-dot"
          style={{
            width: 8,
            height: 8,
            borderRadius: 99,
            background: '#10b981',
            boxShadow: '0 0 12px #10b981',
          }}
        />
        <div>
          <div className="text-[11px]" style={{ color: '#a89c8a' }}>
            Solaris Agri-Coop
          </div>
          <div className="text-[12.5px] font-semibold">{calloutLabels.cooperativeActive}</div>
        </div>
        <svg width="140" height="30" style={{ position: 'absolute', left: -130, top: 14 }}>
          <path
            d="M138 15 Q70 15 10 18"
            stroke="rgba(245,242,235,0.18)"
            strokeDasharray="3 4"
            fill="none"
          />
          <circle cx="10" cy="18" r="3" fill="#10b981" />
        </svg>
      </div>

      <div
        className="absolute hidden lg:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl"
        style={{
          left: -220,
          bottom: 120,
          width: 230,
          background: 'rgba(24,22,20,0.85)',
          border: '1px solid var(--line)',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
        }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(225,95,65,0.18)', color: '#e15f41' }}
        >
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-[12.5px] font-semibold">{calloutLabels.newMembersTitle}</div>
          <div className="text-[11px]" style={{ color: '#a89c8a' }}>
            {calloutLabels.newMembersSub}
          </div>
        </div>
        <svg width="140" height="30" style={{ position: 'absolute', right: -130, top: 18 }}>
          <path
            d="M2 15 Q70 5 130 8"
            stroke="rgba(245,242,235,0.18)"
            strokeDasharray="3 4"
            fill="none"
          />
          <circle cx="130" cy="8" r="3" fill="#e15f41" />
        </svg>
      </div>
    </div>
  );
}
