import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

interface ProjectImageConfig {
  filename: string;
  title: string;
  category: string;
  stack: string;
  accentColor: string;
  iconType: string;
}

const projects: ProjectImageConfig[] = [
  {
    filename: 'accommodation-platform.webp',
    title: 'Accommodation / Vacation Rental Platform',
    category: 'Personal Project · Cross-Platform Mobile',
    stack: 'Flutter · Supabase · Dart · Auth · Booking',
    accentColor: '#2563eb',
    iconType: 'mobile',
  },
  {
    filename: 'hospital-stock-management.webp',
    title: 'Hospital Stock Management System',
    category: 'Academic Project · Desktop Software',
    stack: 'Python · SQLite · French UI · Supply Tracking',
    accentColor: '#0ea5e9',
    iconType: 'desktop',
  },
  {
    filename: 'clinic-management.webp',
    title: 'Clinic Management System',
    category: 'Academic Project · Desktop Application',
    stack: 'Python · SQLite · Patient Registry · Appointments',
    accentColor: '#10b981',
    iconType: 'medical',
  },
  {
    filename: 'inventory-management.webp',
    title: 'Inventory Management System',
    category: 'Personal Project · Commercial Software',
    stack: 'Python · SQLite · Stock Reports · Analytics',
    accentColor: '#6366f1',
    iconType: 'inventory',
  },
  {
    filename: 'archive-management.webp',
    title: 'Archive Management System',
    category: 'Academic and Applied Project · Database and Filing',
    stack: 'Python · SQLite · Document Indexing · Categorization',
    accentColor: '#3b82f6',
    iconType: 'archive',
  },
];

async function generate() {
  const outputDir = path.resolve('public/projects');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const proj of projects) {
    const svg = `
      <svg width="1200" height="750" viewBox="0 0 1200 750" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="750" fill="#f8fafc"/>
        <defs>
          <pattern id="grid-${proj.filename}" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="1200" height="750" fill="url(#grid-${proj.filename})"/>
        
        <!-- App Window Canvas -->
        <rect x="80" y="70" width="1040" height="610" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        
        <!-- Window Top Bar -->
        <path d="M 80 86 C 80 77.16 87.16 70 96 70 L 1104 70 C 1112.84 70 1120 77.16 1120 86 L 1120 126 L 80 126 Z" fill="#f1f5f9"/>
        <circle cx="115" cy="98" r="7" fill="#ef4444" opacity="0.8"/>
        <circle cx="137" cy="98" r="7" fill="#f59e0b" opacity="0.8"/>
        <circle cx="159" cy="98" r="7" fill="#10b981" opacity="0.8"/>
        <text x="600" y="103" text-anchor="middle" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">
          /public/projects/${proj.filename}
        </text>

        <!-- Inner Content Area -->
        <!-- Subtle schematic shapes -->
        <rect x="120" y="160" width="340" height="470" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <rect x="490" y="160" width="590" height="210" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <rect x="490" y="390" width="280" height="240" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <rect x="800" y="390" width="280" height="240" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

        <!-- Schematic Wireframe Lines in side panel -->
        <rect x="150" y="195" width="80" height="80" rx="40" fill="${proj.accentColor}" fill-opacity="0.12"/>
        <circle cx="190" cy="235" r="22" fill="${proj.accentColor}"/>
        
        <text x="150" y="325" fill="#0f172a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700">
          ${proj.title.split(' ')[0]} ${proj.title.split(' ')[1] || ''}
        </text>
        <text x="150" y="352" fill="#64748b" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">
          ${proj.category}
        </text>
        
        <rect x="150" y="380" width="220" height="8" rx="4" fill="#cbd5e1"/>
        <rect x="150" y="402" width="180" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="150" y="424" width="240" height="8" rx="4" fill="#e2e8f0"/>

        <!-- Tags in left panel -->
        <rect x="150" y="465" width="120" height="26" rx="6" fill="${proj.accentColor}" fill-opacity="0.1"/>
        <text x="210" y="482" text-anchor="middle" fill="${proj.accentColor}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">
          ${proj.stack.split('·')[0].trim()}
        </text>

        <!-- Right Main Visual Schematic -->
        <rect x="525" y="190" width="240" height="18" rx="4" fill="#cbd5e1"/>
        <rect x="525" y="225" width="480" height="10" rx="4" fill="#e2e8f0"/>
        <rect x="525" y="245" width="420" height="10" rx="4" fill="#e2e8f0"/>
        <rect x="525" y="265" width="360" height="10" rx="4" fill="#e2e8f0"/>
        
        <rect x="525" y="305" width="140" height="34" rx="8" fill="${proj.accentColor}"/>
        <text x="595" y="327" text-anchor="middle" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600">
          Interactive View
        </text>

        <!-- Replacement Badge in center -->
        <rect x="420" y="615" width="360" height="38" rx="19" fill="#0f172a" fill-opacity="0.9"/>
        <text x="600" y="639" text-anchor="middle" fill="#f8fafc" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500">
          Screenshot Placeholder · Replace with real image
        </text>
      </svg>
    `;

    const outPath = path.join(outputDir, proj.filename);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(outPath);
    console.log(`Generated: ${outPath}`);
  }
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
