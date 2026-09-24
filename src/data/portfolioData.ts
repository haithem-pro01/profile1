import { ProfileData, Project, SkillCategory, EducationItem, ServiceItem } from '../types';

export const profileData: ProfileData = {
  name: {
    en: 'Haithem Benzerga',
    ar: 'هيثم بن زرقة',
  },
  title: {
    en: 'AI Developer / Software Engineer',
    ar: 'مطور ذكاء اصطناعي / مهندس برمجيات',
  },
  academicHeadline: {
    en: "Master's Student in Artificial Intelligence · Computer Science Graduate",
    ar: 'طالب ماستر في الذكاء الاصطناعي · خريج إعلام آلي',
  },
  bio: {
    en: 'I build modern software applications, explore artificial intelligence, and turn ideas into practical solutions.',
    ar: 'أقوم ببناء تطبيقات برمجية حديثة، واستكشاف تقنيات الذكاء الاصطناعي، وتحويل الأفكار إلى حلول عملية وفعالة.',
  },
  email: 'haithembenzerga@gmail.com',
  phone: '0696980328',
  whatsApp: '0696980328',
  location: {
    en: 'Adrar, Algeria',
    ar: 'أدرار، الجزائر',
  },
  university: {
    en: 'Ahmed Draia University of Adrar, Algeria',
    ar: 'جامعة أحمد دراية بأدرار، الجزائر',
  },
  github: 'https://github.com/haithem-pro01',
  linkedin: 'https://www.linkedin.com/in/haithem-benzerga-a13b883b5/',
  website: 'https://haithemprofile.netlify.app',
  cvPath: '/cv/Haithem-Ben-Zerga-CV.pdf',
  careerObjective: {
    en: 'I am developing my skills in software engineering and artificial intelligence while building practical applications and exploring new technologies.',
    ar: 'أعمل على تطوير مهاراتي في هندسة البرمجيات والذكاء الاصطناعي من خلال بناء تطبيقات عملية واستكشاف التقنيات الحديثة.',
  },
};

export const aboutData = {
  headline: {
    en: "Building practical software. Exploring intelligent systems.",
    ar: 'بناء برمجيات عملية. واستكشاف النظم الذكية.',
  },
  paragraphs: {
    en: [
      "I am an early-career AI and Software Developer currently pursuing my Master's degree in Artificial Intelligence at Ahmed Draia University of Adrar, where I also completed my Licence in Computer Science / Computer Information Systems.",
      "My work centers on developing reliable, real-world software—spanning cross-platform mobile apps with Flutter, desktop data systems in Python and SQLite, and modern web architectures. Rather than theoretical abstractions alone, I focus on engineering functional tools that solve tangible problems for users and organizations.",
      "As an engineer dedicated to continuous learning, I actively deepen my understanding of machine learning architectures, system design, and algorithmic problem solving, aiming to build dependable, well-crafted applications.",
    ],
    ar: [
      "أنا مطور برمجيات وذكاء اصطناعي، أتابع دراستي حالياً في مرحلة الماستر تخصص ذكاء اصطناعي بجامعة أحمد دراية بأدرار، بعد أن تخرجت منها بدرجة الليسانس في الإعلام الآلي ونظم المعلوماتية.",
      "ينصب تركيزي على بناء برمجيات عملية وموثوقة—بدءاً من تطبيقات الجوال متعددة المنصات باستخدام Flutter، وصولاً إلى الأنظمة المكتبية وقواعد البيانات بواسطة Python و SQLite وواجهات الويب الحديثة. أهتم بتحويل المتطلبات إلى أدوات رقمية مفيدة تحل مشكلات حقيقية للمستخدمين والمؤسسات.",
      "من خلال التزامي بالتعلم المستمر، أعمل باستمرار على تعميق معرفتي بخوارزميات تعلم الآلة، وتصميم الأنظمة، وحل المشكلات الهندسية بكفاءة ومسؤولية.",
    ],
  },
  highlights: [
    {
      title: { en: "Academic Rigor", ar: "تأسيس أكاديمي متين" },
      desc: { en: "Master 1 in AI & Bachelor in Computer Science", ar: "ماستر 1 في الذكاء الاصطناعي وليسانس إعلام آلي" },
    },
    {
      title: { en: "Practical Engineering", ar: "هندسة تطبيقية عملية" },
      desc: { en: "Desktop, mobile, and database software projects", ar: "مشاريع سطح مكتب، جوال، وأنظمة قواعد بيانات حقيقية" },
    },
    {
      title: { en: "Continuous Growth", ar: "تطوير مستمر للمهارات" },
      desc: { en: "Active problem solver expanding into intelligent AI systems", ar: "شغف مستمر بالتعلم وحل المشكلات البرمجية المعقدة" },
    },
  ],
};

export const featuredProjects: Project[] = [
  {
    id: 'accommodation-platform',
    title: {
      en: 'Accommodation / Vacation Rental Platform',
      ar: 'منصة استئجار الإقامات والعطلات',
    },
    category: 'personal',
    categoryLabel: {
      en: 'Personal Project',
      ar: 'مشروع شخصي',
    },
    domainCategory: 'web-mobile',
    technologies: ['Flutter', 'Supabase', 'Dart'],
    description: {
      en: 'Cross-platform accommodation rental application with booking calendars, authentication, and property listings.',
      ar: 'تطبيق متعدد المنصات لحجز واستئجار أماكن الإقامة مع تقويم للحجوزات ومصادقة المستخدمين وإدارة العروض.',
    },
    longDescription: {
      en: 'A cross-platform mobile application designed to simplify short-term vacation rentals and property reservations. Built using Flutter and Supabase, it provides intuitive property browsing, host/renter account management, interactive date selection, and secure cloud data persistence.',
      ar: 'تطبيق جوال متعدد المنصات صُمم لتسهيل استئجار الإقامات وحجز العطلات. تم بناؤه باستخدام Flutter و Supabase، حيث يوفر تجربة سلسة لتصفح العقارات، وإدارة حسابات الملاك والمستأجرين، واختيار التواريخ مع حفظ سحابي آمن.',
    },
    imagePath: '/projects/accommodation-platform.webp',
    problem: {
      en: 'Property owners and travelers often face fragmented reservation processes, lack of real-time calendar availability, and cumbersome booking coordination.',
      ar: 'يواجه الملاك والمسافرون صعوبة في تنسيق الحجوزات يدوياً، وغياب التزامن اللحظي للتوفر، والافتقار إلى واجهة سهلة تجمع الطرفين.',
    },
    solution: {
      en: 'Engineered a unified Flutter mobile client connected to a Supabase backend that automates date checking, manages listing records, and maintains authenticated user profiles.',
      ar: 'تطوير تطبيق موحد بإطار Flutter متصل بقاعدة بيانات Supabase لأتمتة فحص التواريخ وإدارة العقارات وحفظ ملفات المستخدمين بشكل آمن.',
    },
    features: {
      en: [
        'Multi-role authentication for travelers and property hosts',
        'Property catalog with search and multi-attribute filtering',
        'Interactive booking calendar with dynamic dates validation',
        'Direct reservation management and status updates',
        'Supabase PostgreSQL database persistence with row-level security',
      ],
      ar: [
        'نظام مصادقة متعدد الأدوار للمسافرين والمضيفين',
        'دليل عقارات تفاعلي مع إمكانيات البحث والتصفية المتقدمة',
        'تقويم حجز تفاعلي مع التحقق من توفر التواريخ',
        'إدارة مباشرة للحجوزات وتحديث حالتها بشكل فوري',
        'قاعدة بيانات Supabase PostgreSQL مع قواعد أمان محكمة',
      ],
    },
    architecture: {
      en: 'Client-server architecture using Flutter for cross-platform UI state, communicating via RESTful and real-time channels with Supabase services.',
      ar: 'هندسة عميل-خادم تعتمد على Flutter للواجهة الرسومية وإدارة الحالة، متصلة عبر واجهات برمجية بقاعدة بيانات وخدمات Supabase.',
    },
    challenges: {
      en: 'Managing date-range conflicts on booking calendars and ensuring snappy state updates across different device viewports.',
      ar: 'التحكم في تعارض نطاقات التواريخ في تقويم الحجز وضمان استجابة وتناسق واجهة المستخدم عبر مختلف أحجام الشاشات.',
    },
    futureImprovements: {
      en: 'Integrate in-app payment gateways, push notifications for booking confirmations, and AI-driven price recommendations.',
      ar: 'دمج بوابات الدفع الإلكتروني، وتنبيهات تأكيد الحجز، وتطبيق خوارزميات ذكية لاقتراح الأسعار المثالية.',
    },
    githubUrl: 'https://github.com/haithem-pro01',
    demoUrl: undefined,
    screenshotPlaceholder: 'Replaceable screenshot placeholder (/public/projects/accommodation-platform.webp)',
    isPlaceholderRepo: true,
  },
  {
    id: 'hospital-stock',
    title: {
      en: 'Hospital Stock Management',
      ar: 'نظام إدارة مخزون المستشفيات',
    },
    category: 'academic',
    categoryLabel: {
      en: 'Academic Project',
      ar: 'مشروع أكاديمي',
    },
    domainCategory: 'desktop-database',
    technologies: ['Python', 'SQLite'],
    description: {
      en: 'Desktop application for hospital stock and medical supply tracking (French language interface).',
      ar: 'تطبيق مكتبي متكامل لإدارة مخزون المستلزمات الطبية والأدوية بالمستشفيات (باللغة الفرنسية).',
    },
    longDescription: {
      en: 'A desktop solution designed to automate pharmaceutical and equipment inventory workflows in healthcare facilities. Developed with Python and SQLite, the interface provides accurate inventory tracking, low-stock alerts, expiration date management, and structured medical supply logging in French.',
      ar: 'حل برمجي مكتبي صُمم لأتمتة دورات إدارة الأدوية والمعدات الطبية في المنشآت الاستشفائية. تم تطويره باستخدام بايثون وقواعد بيانات SQLite لتوفير تتبع دقيق للمخزون، وتنبيهات النفاذ وتواريخ الصلاحية باللغة الفرنسية.',
    },
    imagePath: '/projects/hospital-stock-management.webp',
    problem: {
      en: 'Clinical facilities risk critical stock shortages and medication expiration when inventory management is handled via manual paper registers or ad-hoc spreadsheets.',
      ar: 'تواجه المنشآت الطبية خطر نفاد الأدوية الحرجة أو انتهاء صلاحيتها عند الاعتماد على السجلات الورقية أو الجداول التقليدية غير المترابطة.',
    },
    solution: {
      en: 'Created an offline-first desktop tool that automates supply auditing, triggers proactive threshold warnings, and maintains clean batch records in a structured local database.',
      ar: 'بناء تطبيق مكتبي يعمل دون الحاجة لإنترنت لأتمتة جرد المخزون، وإصدار تنبيهات استباقية للكميات الحرجة وتتبع تواريخ الصلاحية عبر قاعدة بيانات منظمة.',
    },
    features: {
      en: [
        'Medical stock tracking and categorical classification',
        'Automated threshold and low-stock warning alerts',
        'Batch tracking with medicine expiration date verification',
        'French language desktop interface tailored for clinical administrators',
        'Relational SQLite database persistence with reliable local storage',
      ],
      ar: [
        'تتبع دقيق للمخزون الطبي وتصنيف المستلزمات',
        'تنبيهات تلقائية فورية عند اقتراب نفاد الأدوية أو المستلزمات',
        'متابعة دفعات الأدوية وتواريخ انتهاء الصلاحية لتفادي التلف',
        'واجهة مكتبية باللغة الفرنسية مخصصة لإداريي المستشفيات',
        'حفظ البيانات واسترجاعها عبر قاعدة بيانات SQLite محلية موثوقة',
      ],
    },
    architecture: {
      en: 'Python desktop application integrating a graphical UI layer with a dedicated SQLite persistence engine and structured data validation modules.',
      ar: 'تطبيق مكتبي مبني بلغة بايثون يربط بين واجهة المستخدم الرسومية ووحدات التحقق المنطقية ومحرك SQLite للبيانات.',
    },
    challenges: {
      en: 'Modeling batch numbers and varying expiration dates per drug while keeping queries responsive during rapid inventory checks.',
      ar: 'نمذجة أرقام الدفعات وتواريخ الصلاحية المتعددة للصنف الواحد مع الحفاظ على سرعة الاستعلامات أثناء عمليات الجرد السريع.',
    },
    futureImprovements: {
      en: 'Automated barcode scanner integration and exportable PDF audit reports for hospital administrative oversight.',
      ar: 'دعم القراءة المباشرة للباركود وتصدير تقارير الجرد الدورية بصيغة PDF للإدارة الطبية.',
    },
    githubUrl: 'https://github.com/haithem-pro01',
    demoUrl: undefined,
    screenshotPlaceholder: 'Replaceable screenshot placeholder (/public/projects/hospital-stock-management.webp)',
    isPlaceholderRepo: true,
  },
  {
    id: 'clinic-management',
    title: {
      en: 'Clinic Management System',
      ar: 'نظام إدارة العيادات الطبية',
    },
    category: 'academic',
    categoryLabel: {
      en: 'Academic Project',
      ar: 'مشروع أكاديمي',
    },
    domainCategory: 'desktop-database',
    technologies: ['Python', 'SQLite'],
    description: {
      en: 'Comprehensive management system for private clinics with patient registries, appointments, and records.',
      ar: 'نظام إداري متكامل للعيادات الخاصة يغطي سجلات المرضى وجدولة المواعيد وتتبع الزيارات الطبية.',
    },
    longDescription: {
      en: 'A desktop clinic administration system designed to streamline patient intake, appointment scheduling, and consultation records. Features searchable patient profiles, structured medical notes, and appointment tracking backed by an ACID-compliant database.',
      ar: 'نظام إداري مكتبي للعيادات الطبية لتنظيم استقبال المرضى وجدولة المواعيد وحفظ السجلات الطبية والاستشارات وتتبع الجلسات الطبية بسلاسة وموثوقية عالية.',
    },
    imagePath: '/projects/clinic-management.webp',
    problem: {
      en: 'Private healthcare practices need reliable, confidential desktop software to manage patient visits without relying on expensive, slow cloud dependencies.',
      ar: 'تحتاج العيادات الخاصة إلى برمجيات مكتبية موثوقة تضمن سرية بيانات المرضى وتعمل بكفاءة دون الاعتماد على اشتراكات سحابية مكلفة.',
    },
    solution: {
      en: 'Built an organized desktop system allowing receptionists and medical practitioners to log patient profiles, schedule consultations, and maintain history notes locally.',
      ar: 'تطوير نظام مكتبي منظم يتيح تسجيل المرضى وتنسيق المواعيد وتوثيق الملاحظات الطبية مع ضمان حفظ البيانات محلياً وبسرية تامة.',
    },
    features: {
      en: [
        'Patient electronic health records (EHR) registry',
        'Doctor scheduling and daily appointment tracking',
        'Medical consultation histories and prescription notes',
        'Instant multi-field search and patient file retrieval',
        'Structured local SQLite storage ensuring data confidentiality',
      ],
      ar: [
        'سجل إلكتروني متكامل لبيانات وملفات المرضى',
        'جدولة المواعيد اليومية واستشارات الأطباء',
        'أرشفة الوصفات الطبية والملاحظات العلاجية لكل مريض',
        'محرك بحث سريع للوصول الفوري للملفات السابقة',
        'تخزين محلي آمن عبر SQLite يضمن خصوصية البيانات الطبية',
      ],
    },
    architecture: {
      en: 'Layered Python desktop architecture separating UI presentation, input validation rules, and relational SQLite schema operations.',
      ar: 'هيكلية برمجية مكتبية بلغة بايثون تفصل بين واجهة العرض وقواعد التحقق وعمليات قاعدة البيانات العلائقية.',
    },
    challenges: {
      en: 'Structuring schema relationships between patients, appointments, and doctors while ensuring fast search retrieval.',
      ar: 'بناء العلاقات العلائقية بين جداول المرضى والمواعيد والأطباء مع تسريع عمليات البحث والاستعلام.',
    },
    futureImprovements: {
      en: 'Automated SMS appointment reminders for patients and digital prescription template generation.',
      ar: 'إرسال تذكيرات المواعيد عبر الرسائل النصية، وإنشاء قوالب رقمية للوصفات الطبية للطباعة المباشرة.',
    },
    githubUrl: 'https://github.com/haithem-pro01',
    demoUrl: undefined,
    screenshotPlaceholder: 'Replaceable screenshot placeholder (/public/projects/clinic-management.webp)',
    isPlaceholderRepo: true,
  },
  {
    id: 'inventory-management',
    title: {
      en: 'Inventory Management System',
      ar: 'نظام إدارة المخازن والمبيعات',
    },
    category: 'personal',
    categoryLabel: {
      en: 'Personal Project',
      ar: 'مشروع شخصي',
    },
    domainCategory: 'desktop-database',
    technologies: ['Python', 'SQLite'],
    description: {
      en: 'Commercial desktop software for product tracking, stock transactions, and sales reporting.',
      ar: 'برنامج تجاري مكتبي لإدارة المنتجات وحركات المخزون والمبيعات واستخراج التقارير.',
    },
    longDescription: {
      en: 'A commercial inventory management platform built for small-to-medium enterprises. Enables business operators to track incoming and outgoing stock, execute rapid CRUD operations on product catalogs, generate sales summaries, and monitor inventory valuation.',
      ar: 'منصة لإدارة المخازن والبضائع صممت للأنشطة التجارية، تتيح تتبع حركة المنتجات وعمليات CRUD السريعة واستخراج تقارير المبيعات وتقييم المخزون بدقة.',
    },
    imagePath: '/projects/inventory-management.webp',
    problem: {
      en: 'Small retail and wholesale businesses struggle with manual inventory errors, delayed restocking, and inaccurate sales accounting.',
      ar: 'تواجه المتاجر والأنشطة التجارية أخطاء الجرد اليدوي وتأخر إعادة تعويض النواقص وصعوبة حساب الإيرادات الدقيقة.',
    },
    solution: {
      en: 'Developed a robust Python desktop application providing barcode indexing, stock entry logs, category categorization, and instant balance calculations.',
      ar: 'تطوير تطبيق مكتبي متين بلغة بايثون يوفر فهرسة بالأكواد والباركود وسجلات حركة الوارد والمنصرف مع حساب الأرصدة تلقائياً.',
    },
    features: {
      en: [
        'Full product lifecycle CRUD operations',
        'SKU and barcode indexing with category grouping',
        'Transaction logging for receipts and dispatched items',
        'Dynamic inventory valuation and balance summaries',
        'Fast local querying powered by indexed SQLite tables',
      ],
      ar: [
        'عمليات إدارة كاملة (CRUD) لكتالوج المنتجات والأصناف',
        'فهرسة بالرموز والأكواد مع تصنيف المنتجات حسب الفئات',
        'سجل تفصيلي لحركات البيع والشراء والوارد والمنصرف',
        'تقارير فورية لتقييم قيمة المخزون والكميات المتبقية',
        'استعلامات سريعة مدعومة بفهارس SQLite المحسنة',
      ],
    },
    architecture: {
      en: 'Python application utilizing relational SQL schema design with normalized tables for suppliers, products, and transaction records.',
      ar: 'تطبيق بايثون يعتمد على تصميم علائقي لقواعد البيانات مع تطبيع جداول الموردين والمنتجات والمعاملات.',
    },
    challenges: {
      en: 'Ensuring transaction consistency during simultaneous item dispatching and stock calculation updates.',
      ar: 'ضمان التوافقية والأمان المالي أثناء تسجيل حركات الخروج وتحديث كميات المخزن في نفس اللحظة.',
    },
    futureImprovements: {
      en: 'Exportable Excel spreadsheets and visual sales forecasting charts.',
      ar: 'تصدير البيانات إلى ملفات Excel وبناء رسوم بيانية تفاعلية لتحليل المبيعات.',
    },
    githubUrl: 'https://github.com/haithem-pro01',
    demoUrl: undefined,
    screenshotPlaceholder: 'Replaceable screenshot placeholder (/public/projects/inventory-management.webp)',
    isPlaceholderRepo: true,
  },
  {
    id: 'archive-management',
    title: {
      en: 'Archive Management System',
      ar: 'نظام إدارة الأرشيف والوثائق',
    },
    category: 'academic',
    categoryLabel: {
      en: 'Academic Project',
      ar: 'مشروع أكاديمي',
    },
    domainCategory: 'desktop-database',
    technologies: ['Python', 'SQLite'],
    description: {
      en: 'Document filing and digital archive system for structured administrative record keeping and indexing.',
      ar: 'نظام مكتبي لأرشفة الوثائق والملفات الإدارية مع الفهرسة والتصنيف والبحث السريع.',
    },
    longDescription: {
      en: 'A desktop archiving and document indexing software designed to transition paper-based office files into a structured digital repository. Provides classification by department, metadata tagging, search filters, and secure reference tracking.',
      ar: 'برنامج مكتبي لأرشفة وفهرسة الوثائق الإدارية صُمم لتحويل السجلات الورقية إلى مستودع رقمي منظم، يتيح التصنيف حسب الأقسام، وإضافة وسوم الوثائق، وتوفير محرك بحث سريع للوصول الفوري للملفات.',
    },
    imagePath: '/projects/archive-management.webp',
    problem: {
      en: 'Administrative departments frequently lose valuable hours searching for physical folders or misplaced historical documentation in storage rooms.',
      ar: 'تفقد المصالح الإدارية وقتاً كبيراً في البحث اليدوي عن الملفات الورقية القديمة والمستندات المخزنة في غرف الأرشيف.',
    },
    solution: {
      en: 'Engineered an accessible Python desktop application with SQLite indexing that logs physical locations, document dates, categories, and references for instant retrieval.',
      ar: 'تطوير تطبيق مكتبي بلغة بايثون وقاعدة بيانات SQLite يسجل موقع الوثيقة الفيزيائي، وتاريخها، وفئتها، ورقمها المرجعي لتسهيل استرجاعها في ثوانٍ.',
    },
    features: {
      en: [
        'Document metadata indexing (Reference Number, Date, Department, Shelf)',
        'Multi-criteria search engine by keyword, year, and category',
        'Physical storage location mapping (Box, Shelf, Cabinet)',
        'Access log history and document modification tracking',
        'Offline reliable database ensuring internal document security',
      ],
      ar: [
        'فهرسة بيانات الوثائق (الرقم المرجعي، التاريخ، المصلحة، الرف)',
        'محرك بحث متعدد المعايير بالكلمات المفتاحية والسنة والتصنيف',
        'تحديد مكان الحفظ الفعلي للملف (الصندوق، الرف، الخزانة)',
        'سجل تدقيق لتتبع عمليات الإضافة والتعديل على السجلات',
        'قاعدة بيانات محلية تضمن أمان وسرية الوثائق المؤسسية',
      ],
    },
    architecture: {
      en: 'Python application with relational document metadata indexing tables, optimized queries, and file-referencing schemas in SQLite.',
      ar: 'تطبيق مكتبي بلغة بايثون يعتمد على جداول مفهرسة لبيانات الوثائق واستعلامات محسنة في SQLite.',
    },
    challenges: {
      en: 'Designing a flexible metadata schema accommodating different document categories without database clutter.',
      ar: 'تصميم هيكل بيانات مرن يتسع لمختلف أنواع الوثائق الإدارية دون تعقيد قاعدة البيانات.',
    },
    futureImprovements: {
      en: 'OCR scan integration to convert scanned document images into searchable text directly inside the application.',
      ar: 'دمج تقنيات التعرف البصري على الحروف (OCR) لتحويل صور الوثائق الممسوحة ضوئياً إلى نصوص قابلة للبحث المباشر.',
    },
    githubUrl: 'https://github.com/haithem-pro01',
    demoUrl: undefined,
    screenshotPlaceholder: 'Replaceable screenshot placeholder (/public/projects/archive-management.webp)',
    isPlaceholderRepo: true,
  },
];

// Skill Usage Map connecting competencies to practical application
export const skillUsageMap: Record<string, { en: string; ar: string }> = {
  Python: { en: 'Used in Hospital Stock & AI coursework', ar: 'مستخدم في إدارة مخزون المستشفى وأعمال الذكاء الاصطناعي' },
  Flutter: { en: 'Used in Vacation Rental Platform', ar: 'مستخدم في منصة الإقامة والإيجار السياحي' },
  'C': { en: 'Low-level systems programming & algorithm fundamentals', ar: 'الخوارزميات وهندسة النظم الأكاديمية' },
  'C++': { en: 'Data structures & object-oriented systems design', ar: 'هياكل البيانات والبرمجة كائنية التوجه' },
  Java: { en: 'Object-oriented programming & systems foundation', ar: 'البرمجة كائنية التوجه وتطوير النظم' },
  JavaScript: { en: 'Web applications & interactive user interfaces', ar: 'تطبيقات الويب والواجهات التفاعلية' },
  SQLite: { en: 'Used in Hospital Stock & Clinic Management', ar: 'مستخدم في إدارة مخزون المستشفى والعيادة' },
  MySQL: { en: 'Relational data modeling & inventory systems', ar: 'نمذجة البيانات العلائقية وأنظمة الجرد' },
  Supabase: { en: 'Backend & auth for Vacation Rental Platform', ar: 'الواجهة الخلفية والمصادقة لمنصة الإقامة' },
  SQL: { en: 'Relational querying across medical and inventory systems', ar: 'استعلامات قواعد البيانات لأنظمة المستشفى والجرد' },
  Git: { en: 'Version control across all software repositories', ar: 'التحكم بالإصدارات وإدارة المستودعات البرمجية' },
  GitHub: { en: 'Portfolio repositories & project versioning', ar: 'مستودعات المشاريع والتعاون البرمجي' },
  Linux: { en: 'Development environment & server workflows', ar: 'بيئة التطوير وإدارة الخوادم البرمجية' },
  'Artificial Intelligence': { en: 'Master 1 graduate coursework & intelligent systems', ar: 'دراسات ماستر 1 في الذكاء الاصطناعي والنظم الذكية' },
  'Machine Learning': { en: 'Pattern recognition, models & feature extraction', ar: 'التعرف على الأنماط والنماذج الخوارزمية' },
  'AI Applications': { en: 'Practical software integration of AI models', ar: 'التطبيقات العملية لنماذج الذكاء الاصطناعي' },
};

// Project Connection Mapping (Credible link between skills and real projects)
export const techToProjectsMap: Record<string, string[]> = {
  'Python': ['Hospital Stock Management', 'Inventory Management System', 'Clinic Management System', 'Archive Management System'],
  'Flutter': ['Accommodation Platform'],
  'Supabase': ['Accommodation Platform'],
  'SQLite': ['Hospital Stock Management', 'Clinic Management System', 'Inventory Management System', 'Archive Management System'],
  'SQL': ['Hospital Stock Management', 'Clinic Management System', 'Inventory Management System', 'Archive Management System'],
  'Dart': ['Accommodation Platform'],
  'Java': ['Academic coursework & object-oriented programming foundation'],
  'C': ['Low-level systems programming & algorithm fundamentals'],
  'C++': ['Data structures & object-oriented systems design'],
  'JavaScript': ['Web development & frontend scripting'],
  'Git': ['Used across all software development repositories'],
  'GitHub': ['Portfolio repositories, version tracking & open collaboration'],
  'Linux': ['Development environment & command-line tooling'],
  'VS Code': ['Primary code editing & debugging workflow'],
  'Figma': ['UI/UX design prototypes and interface wireframing'],
  'Artificial Intelligence': ['Master 1 graduate coursework, intelligent heuristics & research'],
  'Machine Learning': ['Data modeling, feature extraction & learning algorithms'],
  'AI Applications': ['Practical application integration and intelligent tools'],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: {
      en: 'Programming',
      ar: 'لغات البرمجة',
    },
    icon: 'Code2',
    skills: ['Python', 'Java', 'C', 'C++', 'JavaScript'],
  },
  {
    id: 'ai',
    title: {
      en: 'AI & Machine Learning',
      ar: 'الذكاء الاصطناعي وتعلم الآلة',
    },
    icon: 'Cpu',
    skills: ['Artificial Intelligence', 'Machine Learning', 'AI Applications'],
  },
  {
    id: 'web',
    title: {
      en: 'Web Development',
      ar: 'تطوير الويب',
    },
    icon: 'Globe',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'databases',
    title: {
      en: 'Databases',
      ar: 'قواعد البيانات',
    },
    icon: 'Database',
    skills: ['SQL', 'SQLite', 'MySQL', 'Supabase'],
  },
  {
    id: 'mobile',
    title: {
      en: 'Mobile Development',
      ar: 'تطوير تطبيقات الجوال',
    },
    icon: 'Smartphone',
    skills: ['Flutter', 'Android Studio'],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools & Platforms',
      ar: 'الأدوات والمنصات',
    },
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Linux'],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: {
      en: 'Master 1 — Artificial Intelligence',
      ar: 'ماستر 1 — الذكاء الاصطناعي',
    },
    institution: {
      en: 'Ahmed Draia University of Adrar, Algeria',
      ar: 'جامعة أحمد دراية بأدرار، الجزائر',
    },
    location: {
      en: 'Adrar, Algeria',
      ar: 'أدرار، الجزائر',
    },
    status: {
      en: 'Currently studying',
      ar: 'قيد الدراسة حالياً',
    },
    period: {
      en: '2026 — Present',
      ar: '2026 — الحالي',
    },
    isCurrent: true,
    highlights: {
      en: [
        'Specializing in Artificial Intelligence architectures, Machine Learning, and heuristic algorithms',
        'Exploring real-world AI applications and data-driven problem solving',
        'Advanced computing theory, automated reasoning, and pattern recognition',
      ],
      ar: [
        'تخصص متعمق في هندسة الذكاء الاصطناعي وخوارزميات تعلم الآلة',
        'استكشاف تطبيقات الذكاء الاصطناعي العملية وحل المشكلات البرمجية المعقدة',
        'دراسة النظم الخبيرة، الاستدلال الآلي والتعرف على الأنماط',
      ],
    },
  },
  {
    degree: {
      en: 'Licence / Bachelor — Computer Science / Computer Information Systems',
      ar: 'ليسانس — إعلام آلي / نظم المعلوماتية',
    },
    institution: {
      en: 'Ahmed Draia University of Adrar, Algeria',
      ar: 'جامعة أحمد دراية بأدرار، الجزائر',
    },
    location: {
      en: 'Adrar, Algeria',
      ar: 'أدرار، الجزائر',
    },
    status: {
      en: 'Graduated',
      ar: 'تخرج بنجاح',
    },
    period: {
      en: '2023 — 2025',
      ar: '2023 — 2025',
    },
    isCurrent: false,
    highlights: {
      en: [
        'Rigorous foundation in computer science, software engineering, and systems programming',
        'Data structures, algorithms, object-oriented design (Java, C, C++, Python)',
        'Relational database architecture (SQL, MySQL) and software project lifecycles',
      ],
      ar: [
        'تأسيس أكاديمي متين في علوم الحاسوب وهندسة البرمجيات والأنظمة',
        'إتقان هياكل البيانات، الخوارزميات، والبرمجة كائنية التوجه (Java, C, C++, Python)',
        'تصميم وإدارة قواعد البيانات العلائقية (SQL, MySQL) ومشاريع التخرج البرمجية',
      ],
    },
  },
];

export const areasIWorkInList: ServiceItem[] = [
  {
    id: 'custom-software',
    title: {
      en: 'Custom Software Development',
      ar: 'تطوير البرمجيات المخصصة',
    },
    description: {
      en: 'Designing and writing clean, reliable software tailored to solve specific operational requirements.',
      ar: 'تصميم وبناء حلول برمجية مخصصة وموثوقة لمعالجة متطلبات محددة بكفاءة عالية.',
    },
    icon: 'Code',
  },
  {
    id: 'web-apps',
    title: {
      en: 'Web Applications',
      ar: 'تطبيقات الويب',
    },
    description: {
      en: 'Developing responsive, functional web applications with modern frontend techniques and clean architecture.',
      ar: 'تطوير تطبيقات ويب متجاوبة وعملية تعتمد على تقنيات حديثة وتصميم منظم وسهل الاستخدام.',
    },
    icon: 'Globe2',
  },
  {
    id: 'mobile-apps',
    title: {
      en: 'Mobile Applications',
      ar: 'تطبيقات الجوال',
    },
    description: {
      en: 'Building cross-platform mobile apps with Flutter that provide smooth user interfaces on Android and iOS.',
      ar: 'برمجة تطبيقات جوال متعددة المنصات باستخدام Flutter لتقديم واجهات سلسة على أندرويد و iOS.',
    },
    icon: 'Smartphone',
  },
  {
    id: 'desktop-apps',
    title: {
      en: 'Desktop Applications',
      ar: 'تطبيقات سطح المكتب',
    },
    description: {
      en: 'Creating offline-capable, responsive desktop utilities and management tools with Python and SQLite.',
      ar: 'تطوير برامج مكتبية فعالة وسريعة تعمل دون إنترنت تم بناؤها باستخدام بايثون وقواعد بيانات SQLite.',
    },
    icon: 'Monitor',
  },
  {
    id: 'inventory-systems',
    title: {
      en: 'Inventory Management Systems',
      ar: 'أنظمة إدارة المخازن والبضائع',
    },
    description: {
      en: 'Implementing structured database systems to track inventory balances, transactions, and product records.',
      ar: 'بناء نظم قواعد بيانات دقيقة لتتبع حركات المخازن والمبيعات وتسجيل المنتجات والفواتير.',
    },
    icon: 'Layers',
  },
  {
    id: 'ai-development',
    title: {
      en: 'AI Application Development',
      ar: 'تطبيقات الذكاء الاصطناعي',
    },
    description: {
      en: 'Applying machine learning concepts and intelligent algorithms to build practical, problem-solving software.',
      ar: 'توظيف تقنيات تعلم الآلة وخوارزميات الذكاء الاصطناعي لبناء حلول برمجية ذكية تحل مشاكل عملية.',
    },
    icon: 'Sparkles',
  },
];

// Compatibility alias for existing imports
export const servicesList = areasIWorkInList;
