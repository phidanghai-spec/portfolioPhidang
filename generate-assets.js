const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const appDir = path.join(__dirname, 'app');

// ── 1. Open Graph Image (1200x630) for Portfolio V2 (Metallic Silver / Platinum Theme) ──
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="50%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#04070e"/>
    </linearGradient>

    <!-- Metallic Silver Gradient -->
    <linearGradient id="silverGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e8ebee"/>
      <stop offset="100%" stop-color="#a9b2bc"/>
    </linearGradient>

    <!-- Card Background -->
    <linearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(24, 32, 47, 0.85)"/>
      <stop offset="100%" stop-color="rgba(9, 13, 22, 0.95)"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Ambient Atmospheric Glows -->
  <circle cx="180" cy="180" r="320" fill="#e8ebee" opacity="0.04"/>
  <circle cx="1020" cy="460" r="350" fill="#a9b2bc" opacity="0.04"/>

  <!-- Editorial Glass Outer Frame -->
  <rect x="28" y="28" width="1144" height="574" rx="24" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5"/>
  <line x1="28" y1="28" x2="1172" y2="28" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1"/>

  <!-- Top Status Banner -->
  <g transform="translate(64, 68)">
    <rect x="0" y="0" width="310" height="34" rx="17" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(232, 235, 238, 0.3)" stroke-width="1"/>
    <circle cx="18" cy="17" r="4.5" fill="#e8ebee"/>
    <text x="32" y="22" fill="#e8ebee" font-size="11" font-family="monospace" font-weight="700" letter-spacing="1.5">OPEN FOR INTERNSHIP OPPORTUNITIES</text>
    <text x="1072" y="22" fill="#64748b" font-size="11" font-family="monospace" text-anchor="end" letter-spacing="1.2">EDITORIAL PORTFOLIO V2 // 2026</text>
  </g>

  <!-- Main Content Area -->
  <g transform="translate(64, 150)">
    <text x="0" y="0" fill="#a9b2bc" font-family="monospace" font-size="14" font-weight="600" letter-spacing="2">// SOFTWARE ENGINEERING &#8226; HUFLIT</text>
    
    <text x="0" y="68" fill="#ffffff" font-size="64" font-weight="900" letter-spacing="-1.5">
      ĐẶNG HẢI PHI
    </text>
    
    <text x="0" y="118" fill="url(#silverGrad)" font-size="28" font-weight="700" letter-spacing="-0.5">
      Fullstack &amp; Backend Developer Intern
    </text>

    <text x="0" y="156" fill="#94a3b8" font-size="16" font-weight="400" letter-spacing="0.2">
      Turning OOP principles &amp; 12 GoF Design Patterns into scalable REST APIs and automated QA pipelines.
    </text>
  </g>

  <!-- 3 Stats Cards at Bottom -->
  <g transform="translate(64, 375)">
    <!-- Card 1 -->
    <g transform="translate(0, 0)">
      <rect width="330" height="150" rx="16" fill="url(#cardBg)" stroke="rgba(232, 235, 238, 0.25)" stroke-width="1.2"/>
      <rect x="20" y="20" width="8" height="8" rx="2" fill="#e8ebee"/>
      <text x="36" y="28" fill="#e8ebee" font-size="11" font-family="monospace" font-weight="700" letter-spacing="1">BACKEND ARCHITECTURE</text>
      <text x="20" y="74" fill="#ffffff" font-size="34" font-family="monospace" font-weight="900">50+ APIs</text>
      <text x="20" y="105" fill="#94a3b8" font-size="13">RESTful Services &#8226; JWT Auth</text>
      <text x="20" y="125" fill="#64748b" font-size="11" font-family="monospace">ASP.NET Core / Node.js / Prisma</text>
    </g>

    <!-- Card 2 -->
    <g transform="translate(365, 0)">
      <rect width="330" height="150" rx="16" fill="url(#cardBg)" stroke="rgba(169, 178, 188, 0.25)" stroke-width="1.2"/>
      <rect x="20" y="20" width="8" height="8" rx="2" fill="#a9b2bc"/>
      <text x="36" y="28" fill="#a9b2bc" font-size="11" font-family="monospace" font-weight="700" letter-spacing="1">DESIGN PATTERNS</text>
      <text x="20" y="74" fill="#ffffff" font-size="34" font-family="monospace" font-weight="900">12 GoF</text>
      <text x="20" y="105" fill="#94a3b8" font-size="13">3-Tier Layered Architecture</text>
      <text x="20" y="125" fill="#64748b" font-size="11" font-family="monospace">Factory / Strategy / Singleton</text>
    </g>

    <!-- Card 3 -->
    <g transform="translate(730, 0)">
      <rect width="342" height="150" rx="16" fill="url(#cardBg)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.2"/>
      <rect x="20" y="20" width="8" height="8" rx="2" fill="#ffffff"/>
      <text x="36" y="28" fill="#ffffff" font-size="11" font-family="monospace" font-weight="700" letter-spacing="1">QA &amp; AUTOMATION</text>
      <text x="20" y="74" fill="#ffffff" font-size="34" font-family="monospace" font-weight="900">69 Tests</text>
      <text x="20" y="105" fill="#94a3b8" font-size="13">NUnit &#8226; Selenium WebDriver</text>
      <text x="20" y="125" fill="#64748b" font-size="11" font-family="monospace">70% QA Regression Time Saved</text>
    </g>
  </g>

  <!-- Right Logo Monogram -->
  <g transform="translate(970, 140)">
    <rect width="100" height="100" rx="24" fill="#090d16" stroke="rgba(232, 235, 238, 0.35)" stroke-width="2"/>
    <text x="50" y="62" fill="#ffffff" font-family="monospace" font-size="38" font-weight="900" text-anchor="middle">
      <tspan fill="#e8ebee">&lt;</tspan>Phi<tspan fill="#a9b2bc">&gt;</tspan>
    </text>
  </g>

  <!-- Footer Info Line -->
  <g transform="translate(64, 570)">
    <text x="0" y="0" fill="#475569" font-size="11" font-family="monospace">HUFLIT UNIVERSITY &#8226; CLASS OF 2027 &#8226; TÂN PHÚ, TP. HỒ CHÍ MINH</text>
    <text x="1072" y="0" fill="#e8ebee" font-size="11" font-family="monospace" text-anchor="end" font-weight="700">phidanghai-portfolio.vercel.app</text>
  </g>
</svg>
`;

// ── 2. Favicon / Icon SVG (512x512) ─────────────────────────────────────────
const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#060a12"/>
    </linearGradient>
  </defs>

  <rect width="512" height="512" rx="112" fill="url(#iconBg)" stroke="#e8ebee" stroke-width="12" stroke-opacity="0.4"/>
  
  <circle cx="48" cy="48" r="10" fill="#e8ebee" opacity="0.8"/>
  <circle cx="464" cy="48" r="10" fill="#a9b2bc" opacity="0.8"/>
  <circle cx="48" cy="464" r="10" fill="#e8ebee" opacity="0.8"/>
  <circle cx="464" cy="464" r="10" fill="#a9b2bc" opacity="0.8"/>

  <g font-family="Consolas, Monaco, monospace" font-size="160" font-weight="900" text-anchor="middle">
    <text x="256" y="315" fill="#ffffff">
      <tspan fill="#e8ebee">&lt;</tspan>P<tspan fill="#a9b2bc">/&gt;</tspan>
    </text>
  </g>
</svg>
`;

async function generateAll() {
  const pngToIco = (require('png-to-ico').default || require('png-to-ico'));

  // 1. Generate OG Image (1200x630)
  const ogPath = path.join(publicDir, 'og-image.png');
  await sharp(Buffer.from(ogSvg)).png({ quality: 95 }).toFile(ogPath);
  console.log('✅ Generated public/og-image.png (1200x630)');

  // 2. Generate Favicon set in public/
  const iconBuffer = Buffer.from(iconSvg);

  // 16x16
  await sharp(iconBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✅ Generated public/favicon-16x16.png');

  // 32x32
  await sharp(iconBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✅ Generated public/favicon-32x32.png');

  // 180x180 (Apple touch icon)
  await sharp(iconBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ Generated public/apple-touch-icon.png');

  // 512x512
  await sharp(iconBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✅ Generated public/icon-512.png');

  // Real multi-res favicon.ico (16, 32, 48)
  const tmp16 = path.join(publicDir, '_tmp-16.png');
  const tmp32 = path.join(publicDir, '_tmp-32.png');
  const tmp48 = path.join(publicDir, '_tmp-48.png');
  await sharp(iconBuffer).resize(16, 16).png().toFile(tmp16);
  await sharp(iconBuffer).resize(32, 32).png().toFile(tmp32);
  await sharp(iconBuffer).resize(48, 48).png().toFile(tmp48);
  const icoBuffer = await pngToIco([tmp16, tmp32, tmp48]);
  fs.unlinkSync(tmp16); fs.unlinkSync(tmp32); fs.unlinkSync(tmp48);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✅ Generated real multi-res favicon.ico (16x16, 32x32, 48x48) in app/ and public/');
}

generateAll().catch(console.error);
