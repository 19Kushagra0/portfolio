import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kushagra Sharma - Developer Portfolio';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa', // Light grey/white background
        }}
      >
        {/* Inner container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 80px',
            width: '100%',
          }}
        >
          {/* Line 01 */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: 24, color: '#888888', marginRight: 24, fontFamily: 'monospace' }}>
              01
            </span>
            <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#171717', letterSpacing: '-0.05em' }}>
              {"<Hello, I'm\u00A0"}
              <span style={{ color: '#0057c0' }}>Kushagra!</span>
              {">"}
            </div>
          </div>
          
          {/* Line 02 */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: 24, color: '#888888', marginRight: 24, fontFamily: 'monospace' }}>
              02
            </span>
            <div style={{ display: 'flex', fontSize: 48, fontWeight: 600, color: '#171717', letterSpacing: '-0.04em' }}>
              {"<"}
              <span style={{ color: '#0057c0' }}>Frontend Focused</span>
              {"\u00A0Full Stack\u00A0"}
              <span style={{ color: '#0057c0' }}>Developer</span>
              {">"}
            </div>
          </div>

          {/* Line 03 */}
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ fontSize: 24, color: '#888888', marginRight: 24, marginTop: 12, fontFamily: 'monospace' }}>
              03
            </span>
            <div style={{ display: 'flex', fontSize: 48, fontWeight: 600, color: '#171717', letterSpacing: '-0.04em', flexWrap: 'wrap', maxWidth: '900px' }}>
              {"<"}
              <span style={{ color: '#0057c0' }}>Who Builds</span>
              {"\u00A0and\u00A0"}
              <span style={{ color: '#0057c0' }}>Integrates</span>
              {"\u00A0modern web applications>"}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
