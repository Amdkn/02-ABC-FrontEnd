import type { ReactNode } from 'react';

const card = '#181614';
const line = 'rgba(245,242,235,0.08)';
const text = '#f5f2eb';
const mute = '#a89c8a';
const terracotta = '#e15f41';
const green = '#10b981';

const screenStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  padding: '54px 16px 90px',
  boxSizing: 'border-box',
  overflowY: 'auto',
  fontFamily: 'var(--font-manrope), -apple-system, "Segoe UI", system-ui, sans-serif',
  color: text,
};

const sectionTitle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  color: mute,
  margin: '0 0 10px',
};

const sectionValue: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
  margin: 0,
};

const pill = (color: string, bg: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '4px 10px',
  borderRadius: 9999,
  fontSize: 11,
  fontWeight: 600,
  color,
  background: bg,
});

function ScreenHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <p style={sectionTitle}>{subtitle}</p>
      <h1 style={{ ...sectionValue, fontSize: 28, lineHeight: 1.05 }}>{title}</h1>
    </div>
  );
}

function Card({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: card,
        border: `1px solid ${line}`,
        borderRadius: 18,
        padding: 14,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CommunityHub() {
  return (
    <div style={screenStyle}>
      <ScreenHeader title="Bonjour Amina" subtitle="Community" />
      <div style={{ display: 'grid', gap: 10 }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: mute, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Fil du jour
            </span>
            <span style={pill(green, 'rgba(16,185,129,0.15)')}>+128</span>
          </div>
          <h3 style={{ fontSize: 16, margin: '8px 0 6px' }}>Solaris Agri-Coop · étape 3 franchie</h3>
          <p style={{ fontSize: 13, color: mute, margin: 0, lineHeight: 1.5 }}>
            Trois étapes franchies en deux mois. Le hub Build nous a donné la rigueur d'une scale-up.
          </p>
        </Card>
        <Card>
          <h3 style={{ fontSize: 14, margin: 0, marginBottom: 6 }}>Prochaine assemblée</h3>
          <p style={{ fontSize: 13, color: mute, margin: 0 }}>Samedi 14h · en ligne & Douala</p>
        </Card>
        <Card>
          <h3 style={{ fontSize: 14, margin: 0, marginBottom: 6 }}>Annuaire des coopératives</h3>
          <p style={{ fontSize: 13, color: mute, margin: 0 }}>124 actives · 17 pays</p>
        </Card>
      </div>
    </div>
  );
}

export function LearnHub() {
  return (
    <div style={screenStyle}>
      <ScreenHeader title="Mes parcours" subtitle="Learn" />
      <div style={{ display: 'grid', gap: 10 }}>
        <Card>
          <span style={pill(terracotta, 'rgba(225,95,65,0.12)')}>En cours</span>
          <h3 style={{ fontSize: 16, margin: '8px 0 4px' }}>Principes d'architecte</h3>
          <p style={{ fontSize: 12, color: mute, margin: 0 }}>Chapitre 3 / 6 · 4h restantes</p>
        </Card>
        <Card>
          <span style={pill(green, 'rgba(16,185,129,0.12)')}>76 cours</span>
          <h3 style={{ fontSize: 16, margin: '8px 0 4px' }}>Solarpunk foundations</h3>
          <p style={{ fontSize: 12, color: mute, margin: 0 }}>Mentorat pair-à-pair · 12 cohortes</p>
        </Card>
        <Card>
          <span style={pill('#5b8bb7', 'rgba(91,139,183,0.15)')}>Certifications</span>
          <h3 style={{ fontSize: 16, margin: '8px 0 4px' }}>Cooperative Builder L1</h3>
          <p style={{ fontSize: 12, color: mute, margin: 0 }}>Validé · 2026-04-12</p>
        </Card>
      </div>
    </div>
  );
}

export function BuildHub() {
  return (
    <div style={screenStyle}>
      <ScreenHeader title="Trésorerie & jalons" subtitle="Build" />
      <div style={{ display: 'grid', gap: 10 }}>
        <Card>
          <span style={pill(green, 'rgba(16,185,129,0.12)')}>Trésorerie</span>
          <h3 style={{ fontSize: 24, margin: '8px 0 4px' }}>€48 200</h3>
          <p style={{ fontSize: 12, color: mute, margin: 0 }}>+€6 400 ce mois-ci</p>
        </Card>
        <Card>
          <h3 style={{ fontSize: 14, margin: 0, marginBottom: 8 }}>Jalons en cours</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: mute, lineHeight: 1.6 }}>
            <li>· Templates juridiques · 80%</li>
            <li>· Partenaires financiers · 60%</li>
            <li>· Équipe · 100%</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export function BrandHub() {
  return (
    <div style={screenStyle}>
      <ScreenHeader title="Impact de marque" subtitle="Brand" />
      <div style={{ display: 'grid', gap: 10 }}>
        <Card>
          <span style={pill(terracotta, 'rgba(225,95,65,0.12)')}>Brand Impact</span>
          <h3 style={{ fontSize: 40, fontFamily: 'var(--font-instrument-serif), Georgia, serif', margin: '8px 0 4px' }}>
            85<span style={{ fontSize: 14, color: mute, marginLeft: 4 }}>/ 100</span>
          </h3>
          <p style={{ fontSize: 12, color: mute, margin: 0 }}>+6 cette semaine</p>
        </Card>
        <Card>
          <h3 style={{ fontSize: 14, margin: 0, marginBottom: 6 }}>Stratégies de monétisation</h3>
          <p style={{ fontSize: 13, color: mute, margin: 0 }}>3 actives · 2 en expérimentation</p>
        </Card>
      </div>
    </div>
  );
}
