import type { ReactNode } from 'react';

export interface IOSDeviceProps {
  width?: number;
  height?: number;
  dark?: boolean;
  children?: ReactNode;
}

/**
 * iOS 26-style "Liquid Glass" device frame.
 *
 * Pure CSS — no images, no clip-path assets. The frame is a rounded rectangle
 * with an inner notch area, a soft shadow stack, and a dark or light bezel.
 * Children render inside the screen area.
 */
export function IOSDevice({ width = 414, height = 900, dark = true, children }: IOSDeviceProps) {
  const bezel = dark ? '#0a0a0a' : '#d8d4cc';
  const ringShadow = dark
    ? '0 40px 60px -20px rgba(0,0,0,0.55), 0 12px 30px -10px rgba(0,0,0,0.4), inset 0 0 0 1.5px rgba(255,255,255,0.06)'
    : '0 30px 50px -20px rgba(0,0,0,0.18), 0 10px 24px -8px rgba(0,0,0,0.12), inset 0 0 0 1.5px rgba(0,0,0,0.06)';

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        borderRadius: 48,
        background: bezel,
        boxShadow: ringShadow,
        padding: 12,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: 36,
          overflow: 'hidden',
          background: dark ? '#0c0b0a' : '#f5f2eb',
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: 'absolute',
            top: 11,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 110,
            height: 28,
            borderRadius: 9999,
            background: '#000',
            zIndex: 30,
          }}
        />
        {children}
      </div>
    </div>
  );
}
