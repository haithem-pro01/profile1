import { PDFDocument, rgb, StandardFonts, PDFString } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const primaryColor = rgb(0.145, 0.388, 0.922); // #2563eb
  const darkTextColor = rgb(0.06, 0.09, 0.16); // #0f172a
  const mutedTextColor = rgb(0.39, 0.45, 0.55); // #64748b
  const borderColor = rgb(0.88, 0.91, 0.94); // #e2e8f0
  const lightBlueBg = rgb(0.93, 0.96, 1.0); // #eff6ff

  const portfolioUrl = 'https://ais-pre-qmyjbene2jnq2wnu3jpim6-791356707195.europe-west2.run.app';
  const githubUrl = 'https://github.com/haithem-pro01';
  const linkedinUrl = 'https://www.linkedin.com/in/haithem-benzerga-a13b883b5';
  const emailUrl = 'mailto:haithembenzerga@gmail.com';

  // Helper to add clickable hyperlink annotations
  const addLinkAnnotation = (url: string, linkX: number, linkY: number, linkW: number, linkH: number) => {
    try {
      const linkAnnot = pdfDoc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [Math.round(linkX), Math.round(linkY), Math.round(linkX + linkW), Math.round(linkY + linkH)],
        Border: [0, 0, 0],
        F: 4,
        A: {
          Type: 'Action',
          S: 'URI',
          URI: PDFString.of(url),
        },
      });
      const linkAnnotRef = pdfDoc.context.register(linkAnnot);
      page.node.addAnnot(linkAnnotRef);
    } catch (err) {
      console.warn('Could not add link annotation for:', url, err);
    }
  };

  let y = height - 45;

  // Header Title
  page.drawText('HAITHEM BENZERGA', {
    x: 50,
    y: y,
    size: 22,
    font: fontBold,
    color: darkTextColor,
  });

  y -= 20;
  page.drawText('AI DEVELOPER / SOFTWARE ENGINEER', {
    x: 50,
    y: y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  y -= 16;
  const contactLine = 'haithembenzerga@gmail.com   |   +213 696 98 03 28   |   Adrar, Algeria';
  page.drawText(contactLine, {
    x: 50,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: mutedTextColor,
  });
  // Add clickable email annotation
  const emailWidth = fontRegular.widthOfTextAtSize('haithembenzerga@gmail.com', 8.5);
  addLinkAnnotation(emailUrl, 50, y - 2, emailWidth, 11);

  // Prominent Website Banner Box (Always prominent as requested)
  y -= 22;
  const boxHeight = 20;
  const boxWidth = width - 100;
  page.drawRectangle({
    x: 50,
    y: y - 4,
    width: boxWidth,
    height: boxHeight,
    color: lightBlueBg,
    borderColor: rgb(0.75, 0.85, 0.98),
    borderWidth: 0.8,
  });

  const websitePrefix = 'Live Portfolio Website: ';
  const websitePrefixWidth = fontBold.widthOfTextAtSize(websitePrefix, 9);
  page.drawText(websitePrefix, {
    x: 60,
    y: y + 2,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });

  page.drawText(portfolioUrl, {
    x: 60 + websitePrefixWidth,
    y: y + 2,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.3, 0.8),
  });

  const fullWebsiteTextWidth = websitePrefixWidth + fontBold.widthOfTextAtSize(portfolioUrl, 9);
  addLinkAnnotation(portfolioUrl, 60, y - 4, fullWebsiteTextWidth + 10, boxHeight);

  // Social / Code Links
  y -= 16;
  const githubText = 'GitHub: github.com/haithem-pro01';
  const linkedinText = 'LinkedIn: linkedin.com/in/haithem-benzerga-a13b883b5';
  page.drawText(githubText, {
    x: 50,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: mutedTextColor,
  });
  const githubWidth = fontRegular.widthOfTextAtSize(githubText, 8.5);
  addLinkAnnotation(githubUrl, 50, y - 2, githubWidth, 11);

  const dividerX = 50 + githubWidth + 10;
  page.drawText('|', { x: dividerX, y, size: 8.5, font: fontRegular, color: borderColor });

  const linkedinX = dividerX + 10;
  page.drawText(linkedinText, {
    x: linkedinX,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: mutedTextColor,
  });
  const linkedinWidth = fontRegular.widthOfTextAtSize(linkedinText, 8.5);
  addLinkAnnotation(linkedinUrl, linkedinX, y - 2, linkedinWidth, 11);

  y -= 14;
  page.drawLine({
    start: { x: 50, y: y },
    end: { x: width - 50, y: y },
    thickness: 1,
    color: borderColor,
  });

  y -= 22;

  // Section helper
  const drawSectionHeader = (title: string) => {
    page.drawText(title.toUpperCase(), {
      x: 50,
      y: y,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 6;
    page.drawLine({
      start: { x: 50, y: y },
      end: { x: width - 50, y: y },
      thickness: 0.5,
      color: borderColor,
    });
    y -= 14;
  };

  // 1. CAREER OBJECTIVE
  drawSectionHeader('Career Objective');
  const summaryText = 'Passionate AI Developer and Software Engineer currently pursuing a Master\'s in Artificial Intelligence at Ahmed Draia University of Adrar. Experienced in building modern desktop, mobile, and full-stack software solutions with Python, Flutter, SQLite, and React. Dedicated to continuous learning and solving practical real-world problems through robust engineering and intelligent systems.';
  
  const words = summaryText.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = line + word + ' ';
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9);
    if (testWidth > width - 100) {
      page.drawText(line.trim(), { x: 50, y: y, size: 9, font: fontRegular, color: darkTextColor });
      y -= 13;
      line = word + ' ';
    } else {
      line = testLine;
    }
  }
  if (line.length > 0) {
    page.drawText(line.trim(), { x: 50, y: y, size: 9, font: fontRegular, color: darkTextColor });
    y -= 20;
  }

  // 2. EDUCATION
  drawSectionHeader('Education');

  // Master
  page.drawText('Master 1 - Artificial Intelligence', {
    x: 50,
    y: y,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawText('2026 - Present (Currently Enrolled)', {
    x: width - 215,
    y: y,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 13;
  page.drawText('Ahmed Draia University of Adrar, Algeria', {
    x: 50,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: mutedTextColor,
  });
  y -= 11;
  page.drawText('- Advanced coursework: Machine Learning, Heuristic Search, AI Algorithms, Pattern Recognition & Systems.', {
    x: 60,
    y: y,
    size: 8,
    font: fontRegular,
    color: darkTextColor,
  });
  y -= 18;

  // Licence
  page.drawText('Licence / Bachelor - Computer Science / Computer Information Systems', {
    x: 50,
    y: y,
    size: 10,
    font: fontBold,
    color: darkTextColor,
  });
  page.drawText('2023 - 2025 (Graduated)', {
    x: width - 175,
    y: y,
    size: 8.5,
    font: fontBold,
    color: mutedTextColor,
  });
  y -= 13;
  page.drawText('Ahmed Draia University of Adrar, Algeria', {
    x: 50,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: mutedTextColor,
  });
  y -= 11;
  page.drawText('- Strong foundational grounding in data structures, algorithms, relational database design, and software engineering.', {
    x: 60,
    y: y,
    size: 8,
    font: fontRegular,
    color: darkTextColor,
  });
  y -= 20;

  // 3. TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skillsList = [
    { label: 'Programming Languages', val: 'Python, Java, C, C++, JavaScript, TypeScript, Dart' },
    { label: 'Artificial Intelligence', val: 'Machine Learning, Neural Network Fundamentals, AI Modeling, Data Analysis' },
    { label: 'Mobile & Web Development', val: 'Flutter, Android Studio, React, Tailwind CSS, HTML5, CSS3, REST APIs' },
    { label: 'Databases & Storage', val: 'SQLite, MySQL, Supabase (PostgreSQL), Relational Data Modeling' },
    { label: 'Tools & Environments', val: 'Git, GitHub, Linux, VS Code, Docker, Figma' },
  ];

  for (const skill of skillsList) {
    page.drawText(skill.label + ':', { x: 50, y: y, size: 8.5, font: fontBold, color: darkTextColor });
    page.drawText(skill.val, { x: 180, y: y, size: 8.5, font: fontRegular, color: darkTextColor });
    y -= 13;
  }
  y -= 9;

  // 4. FEATURED PROJECTS
  drawSectionHeader('Featured Projects');
  const projects = [
    {
      title: 'Vacation Rental Platform (Personal Project)',
      stack: 'Flutter, Supabase, Dart',
      desc: 'Cross-platform mobile accommodation booking application with user authentication, real-time calendars, and availability tracking.',
    },
    {
      title: 'Hospital Stock Management (Academic Project)',
      stack: 'Python, SQLite (French UI)',
      desc: 'Desktop software automating clinical medication inventories, min-stock warning thresholds, and batch expiry alerts.',
    },
    {
      title: 'Clinic Management System (Academic Project)',
      stack: 'Python, SQLite',
      desc: 'Healthcare practice system with patient registry, consultation scheduling, and comprehensive diagnosis history database.',
    },
    {
      title: 'Inventory Management System (Personal Project)',
      stack: 'Python, SQLite',
      desc: 'Production-ready stock management system with multi-tier product cataloging, sales auditing, and reporting.',
    },
  ];

  for (const proj of projects) {
    page.drawText(proj.title, { x: 50, y: y, size: 9, font: fontBold, color: darkTextColor });
    page.drawText('[' + proj.stack + ']', { x: 330, y: y, size: 8, font: fontRegular, color: primaryColor });
    y -= 12;
    page.drawText(proj.desc, { x: 60, y: y, size: 8, font: fontRegular, color: mutedTextColor });
    y -= 15;
  }

  // Projects Website Note
  page.drawText('For interactive demos, architecture diagrams, and repositories, visit:', {
    x: 60,
    y: y,
    size: 8,
    font: fontRegular,
    color: mutedTextColor,
  });
  const notePrefixWidth = fontRegular.widthOfTextAtSize('For interactive demos, architecture diagrams, and repositories, visit: ', 8);
  page.drawText(portfolioUrl, {
    x: 60 + notePrefixWidth,
    y: y,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  addLinkAnnotation(portfolioUrl, 60 + notePrefixWidth, y - 2, fontBold.widthOfTextAtSize(portfolioUrl, 8), 10);
  y -= 16;

  // 5. LANGUAGES
  drawSectionHeader('Languages');
  page.drawText('English: Professional Working Proficiency   |   Arabic: Native (Full Bilingual Fluency)   |   French: Academic & Working', {
    x: 50,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: darkTextColor,
  });

  // Footer bar with live website URL
  y -= 22;
  page.drawLine({
    start: { x: 50, y: y },
    end: { x: width - 50, y: y },
    thickness: 0.8,
    color: primaryColor,
  });
  y -= 13;

  const footerText = 'Official Live Portfolio: ';
  page.drawText(footerText, {
    x: 50,
    y: y,
    size: 8.5,
    font: fontBold,
    color: darkTextColor,
  });
  const footerPrefixWidth = fontBold.widthOfTextAtSize(footerText, 8.5);

  page.drawText(portfolioUrl, {
    x: 50 + footerPrefixWidth,
    y: y,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  const footerUrlWidth = fontBold.widthOfTextAtSize(portfolioUrl, 8.5);
  addLinkAnnotation(portfolioUrl, 50, y - 2, footerPrefixWidth + footerUrlWidth + 10, 12);

  const pdfBytes = await pdfDoc.save({ useObjectStreams: false });
  const outputPath = path.resolve('public/cv/Haithem-Ben-Zerga-CV.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated valid PDF to:', outputPath, 'size:', pdfBytes.length, 'bytes');
}

generateCV().catch(err => {
  console.error(err);
  process.exit(1);
});
