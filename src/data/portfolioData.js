import heritageImg from '../assets/project-heritage.svg';
import wovenImg from '../assets/project-woven.svg';
import trendImg from '../assets/project-trend.svg';
import moodboardImg from '../assets/project-moodboard.svg';
import indianEditImg from '../assets/project-indian-edit.svg';
import merchandisingImg from '../assets/project-merchandising.svg';

export const personalDetails = {
  name: 'Ruchita Suthar',
  title: 'Fashion Designer, Textile Professional & Creative Associate',
  tagline: 'Fashion Designer & Textile Creative',
  location: 'Vadodara, Gujarat, India',
  label: 'FASHION • TEXTILES • CREATIVE DIRECTION',
  headline: 'Ruchita\nSuthar',
  subheading: 'Fashion Designer & Textile Creative',
  description:
    'I create thoughtful fashion and textile concepts by combining trend research, material understanding and a refined visual perspective.',
  availability: 'Available for creative opportunities',
  portrait: '/ruchi.png',
};

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const aboutContent = {
  heading: 'Designing Stories Through Fashion & Textiles',
  intro:
    'I am a fashion and textile professional with experience in creative development, merchandising, trend analysis and apparel production. I combine creative thinking with practical industry understanding to develop thoughtful, market-aware and visually refined outcomes.',
  body:
    'I hold a Bachelor of Science (Honours) in Apparel and Textiles from The Maharaja Sayajirao University of Baroda. My professional journey includes experience in textile curation, merchandising and fashion-industry operations.',
  education: 'B.Sc. (Hons.) Apparel and Textiles',
  position: 'Creative Associate',
  location: 'Vadodara, Gujarat, India',
};

export const statistics = [
  { value: '2+', label: 'Years of Industry Exposure' },
  { value: '3', label: 'Professional Roles' },
  { value: '25+', label: 'Fashion & Textile Skills' },
  { value: 'Vadodara', label: 'Based in' },
];

export const expertise = [
  { id: 'fashion-design', number: '01', title: 'Fashion Design', description: 'Conceptualising apparel stories grounded in proportion, wearability and identity.' },
  { id: 'textile-development', number: '02', title: 'Textile Development', description: 'Exploring weave, finish and surface direction to create tactile and expressive materials.' },
  { id: 'trend-research', number: '03', title: 'Trend Research', description: 'Translating cultural and market cues into actionable forecasting for collections.' },
  { id: 'womens-wear', number: '04', title: 'Women’s Wear', description: 'Designing contemporary silhouettes with nuance, structure and feminine confidence.' },
  { id: 'fashion-merchandising', number: '05', title: 'Fashion Merchandising', description: 'Balancing design intent with assortment planning, range logic and commercial clarity.' },
  { id: 'moodboard-development', number: '06', title: 'Moodboard Development', description: 'Assembling visual narratives that shape mood, story and design direction.' },
  { id: 'colour-material-research', number: '07', title: 'Colour & Material Research', description: 'Studying palette, texture and finish to ensure a coherent material story.' },
  { id: 'creative-curation', number: '08', title: 'Creative Curation', description: 'Building refined presentation narratives for collections, concepts and textile stories.' },
];

export const projects = [
  {
    id: 'modern-heritage-collection',
    title: 'Modern Heritage Collection',
    category: 'Women’s Wear',
    year: '2025',
    image: heritageImg,
    shortDescription: 'A contemporary womenswear concept inspired by traditional Indian forms, reinterpreted through modern silhouettes and refined detailing.',
    details: {
      overview: 'A womenswear concept that blends heritage references with a clean contemporary language, creating balanced silhouettes and considered detailing.',
      inspiration: 'Traditional Indian craft forms, artisanal structure, and the evolving rhythm of modern femininity.',
      moodboard: 'Palm-leaf motifs, handwoven textures, muted earth tones and architectural drape.',
      palette: ['#F7F3ED', '#E7DDD1', '#A89583', '#6F2335', '#1E1E1E'],
      materials: 'Cotton silk, brushed twill, soft tailoring wool and hand-finished accents.',
      research: 'Reference studies were built around silhouette proportion, handcrafted ornamentation and a restrained yet expressive palette.',
      development: 'Initial ideation moved through drape exploration, cut refinement and proportion testing to translate heritage cues into modern wearable forms.',
      outcome: 'The final concept delivers a collection language grounded in elegance, practical wearability and a confident editorial identity.',
      gallery: [heritageImg, wovenImg, trendImg],
    },
  },
  {
    id: 'woven-narratives',
    title: 'Woven Narratives',
    category: 'Textile Design',
    year: '2025',
    image: wovenImg,
    shortDescription: 'A material-focused textile exploration studying surface, weave, texture and visual rhythm.',
    details: {
      overview: 'An exploratory textile study focused on the interplay between structure, pattern and tactile richness.',
      inspiration: 'Textile craftsmanship, woven rhythm, and the visual language found in layered surfaces and natural textures.',
      moodboard: 'Organic line studies, weave diagrams, material swatches and soft-toned fabric references.',
      palette: ['#F7F3ED', '#E7DDD1', '#A89583', '#6F2335', '#1E1E1E'],
      materials: 'Cotton blends, herringbone weave, linen textures and tonal surface treatments.',
      research: 'Material exploration focused on texture variation, repeat systems and the emotional response created by woven surfaces.',
      development: 'Surface studies were iterated through stripe rhythm, weave combinations and tonal layering to ensure depth without excess visual noise.',
      outcome: 'The result is a highly tactile textile direction that retains clarity, versatility and an elevated editorial feel.',
      gallery: [wovenImg, heritageImg, moodboardImg],
    },
  },
  {
    id: 'seasonal-trend-forecast',
    title: 'Seasonal Trend Forecast',
    category: 'Trend Research',
    year: '2024',
    image: trendImg,
    shortDescription: 'A fashion forecast presenting seasonal colour directions, key silhouettes, material choices and consumer influences.',
    details: {
      overview: 'A trend forecast designed to articulate future-facing seasonal direction for fashion and textile applications.',
      inspiration: 'Global consumer movement, soft luxury cues, material innovation and a renewed interest in elevated minimalism.',
      moodboard: 'Colour stories, silhouette studies, mood references, and research boards combining lifestyle and fashion signals.',
      palette: ['#F7F3ED', '#E7DDD1', '#A89583', '#6F2335', '#1E1E1E'],
      materials: 'Textural wool, brushed cotton, matte satins and soft structured knits.',
      research: 'The research process considered colour forecasting, market consumption patterns, cultural references and silhouette evolution.',
      development: 'Insights were translated into a clear seasonal framework covering palette, construction, material direction and product attitude.',
      outcome: 'The forecast delivers a clear commercial and aesthetic narrative suited for development teams, product planning and styling direction.',
      gallery: [trendImg, indianEditImg, merchandisingImg],
    },
  },
  {
    id: 'quiet-luxury-moodboard',
    title: 'Quiet Luxury Moodboard',
    category: 'Moodboards',
    year: '2024',
    image: moodboardImg,
    shortDescription: 'An editorial visual study of understated luxury, neutral colour stories and tactile materials.',
    details: {
      overview: 'A concept board exploring layered neutrals, tactile materials and restrained styling with a luxury editorial tone.',
      inspiration: 'Minimalist fashion imagery, sculptural tailoring and the power of subtle expression through fabric and form.',
      moodboard: 'Layered textures, tonal fabric references, soft tailoring studies and refined visual framing.',
      palette: ['#F7F3ED', '#E7DDD1', '#A89583', '#6F2335', '#1E1E1E'],
      materials: 'Cashmere blends, cotton voile, bonded textiles and brushed wool.',
      research: 'The study focused on visual restraint, strong tonal contrast and materials that offer depth without excess ornament.',
      development: 'The moodboard evolved through layering of reference imagery and palette studies to shape a refined luxury story.',
      outcome: 'The final moodboard establishes a calm, premium visual note that supports both fashion and textile storytelling.',
      gallery: [moodboardImg, heritageImg, wovenImg],
    },
  },
  {
    id: 'contemporary-indian-edit',
    title: 'Contemporary Indian Edit',
    category: 'Women’s Wear',
    year: '2024',
    image: indianEditImg,
    shortDescription: 'A refined collection balancing Indian craft references with wearable contemporary styling.',
    details: {
      overview: 'A conceptual edit that treats Indian craft references as design cues within a modern, wearable womenswear story.',
      inspiration: 'Heritage textiles, artisanal detail, and contemporary city dressing with an emphasis on ease and precision.',
      moodboard: 'Patchwork textures, embroidery studies, handloom references and contemporary styling direction.',
      palette: ['#F7F3ED', '#E7DDD1', '#A89583', '#6F2335', '#1E1E1E'],
      materials: 'Handloom cotton, soft viscose blends, structured silks and tonal surface treatments.',
      research: 'The exploration centred on refining craft cues into clean silhouettes, balancing heritage detail with modern ease.',
      development: 'Design development moved through proportion studies, handloom pairing and styling tests to create a collection that feels both considered and wearable.',
      outcome: 'The concept presents a contemporary Indian fashion language that is sophisticated, practical and rooted in cultural context.',
      gallery: [indianEditImg, trendImg, heritageImg],
    },
  },
  {
    id: 'merchandising-range-plan',
    title: 'Merchandising Range Plan',
    category: 'Merchandising',
    year: '2025',
    image: merchandisingImg,
    shortDescription: 'A commercially focused range plan covering product grouping, colour coordination and visual assortment.',
    details: {
      overview: 'A range planning concept focused on assortment logic, product grouping and visual clarity for a cohesive collection story.',
      inspiration: 'Commercial assortment thinking, colour discipline, and the need to create a strong, market-aware product narrative.',
      moodboard: 'Range boards, product capsules, assortment notes and tonal colour sketches.',
      palette: ['#F7F3ED', '#E7DDD1', '#A89583', '#6F2335', '#1E1E1E'],
      materials: 'Woven fabrics, soft-structured knits, seasonal layered textures and coordinated trims.',
      research: 'The range plan considered category flow, key colour stories and the practical rhythm necessary for collection presentation and assortment planning.',
      development: 'Product grouping and colour coordination were developed to create a balanced range with a clear visual and commercial progression.',
      outcome: 'The final plan offers a well-structured collection narrative that bridges creative vision with range logic and presentation clarity.',
      gallery: [merchandisingImg, moodboardImg, trendImg],
    },
  },
];

export const experience = [
  {
    role: 'Creative Associate',
    company: 'Jazba Curators LLP',
    employmentType: 'Full-time',
    duration: 'May 2025 – Present',
    location: 'Vadodara, Gujarat, India',
    workMode: 'On-site',
    industry: 'Textile Industry and Consumer Textiles',
    responsibilities: [
      'Supporting creative curation and textile-focused concept development',
      'Conducting visual, material and trend research',
      'Assisting with creative presentation and collection development',
      'Coordinating design references, textile stories and project documentation',
    ],
  },
  {
    role: 'Junior Merchandiser',
    company: 'Vatsal Exports LLP',
    employmentType: 'Full-time',
    duration: 'July 2024 – April 2025',
    location: 'Ahmedabad, Gujarat, India',
    workMode: 'On-site',
    industry: 'Textile and Apparel Export',
    responsibilities: [
      'Assisted with order coordination and merchandising activities',
      'Communicated production requirements across relevant teams',
      'Supported product development, documentation and order follow-ups',
      'Helped maintain timelines and quality-related coordination',
    ],
  },
  {
    role: 'Summer Intern',
    company: 'Meghmahar',
    employmentType: 'Full-time Internship',
    duration: 'May 2023 – July 2023',
    location: 'Ahmedabad, Gujarat, India',
    workMode: 'On-site',
    industry: 'Fashion and Textile Design',
    responsibilities: [
      'Assisted the fashion and textile design team',
      'Supported research, material selection and design documentation',
      'Gained practical exposure to fashion-industry processes',
      'Contributed to moodboards and collection-related activities',
    ],
  },
];

export const education = {
  institution: 'The Maharaja Sayajirao University of Baroda (MSUB), Vadodara',
  degree: 'Bachelor of Science (Honours), Apparel and Textiles',
  duration: 'September 2021 – June 2024',
  focusAreas: ['Women’s Wear', 'Trend Analysis', 'Apparel Design', 'Textile Studies', 'Fashion Merchandising', 'Material Exploration'],
};

export const skillGroups = [
  {
    title: 'Fashion & Design',
    items: ['Women’s Wear', 'Fashion Design', 'Design Development', 'Collection Planning', 'Fashion Illustration', 'Moodboard Creation'],
  },
  {
    title: 'Textile & Material',
    items: ['Textile Knowledge', 'Fabric Research', 'Surface Development', 'Colour and Material Selection', 'Consumer Textiles'],
  },
  {
    title: 'Research & Merchandising',
    items: ['Trend Analysis', 'Fashion Merchandising', 'Market Research', 'Range Planning', 'Product Coordination'],
  },
  {
    title: 'Professional',
    items: ['Creative Thinking', 'Visual Communication', 'Team Coordination', 'Documentation', 'Time Management', 'Attention to Detail'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Research',
    description: 'Understanding trends, users, culture and market direction.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Developing the core story, visual language and creative direction.',
  },
  {
    number: '03',
    title: 'Material',
    description: 'Exploring fabrics, textures, colour palettes and surface possibilities.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Translating ideas into silhouettes, ranges and detailed design outcomes.',
  },
  {
    number: '05',
    title: 'Presentation',
    description: 'Creating a clear and refined final visual story.',
  },
];

export const testimonials = [
  {
    quote: '“Ruchita brings a thoughtful eye for material, colour and fashion direction, with a calm and structured creative process.”',
    name: 'Creative Partner',
    role: 'Creative Partner',
  },
  {
    quote: '“I balance aesthetic clarity with practical understanding, making each concept feel polished, wearable and market-aware.”',
    name: 'Studio Collaborator',
    role: 'Fashion Studio',
  },
  {
    quote: '“A strong creative perspective paired with a solid understanding of textiles and presentation makes the work feel refined and intentional.”',
    name: 'Brand Team',
    role: 'Brand & Merchandising',
  },
];

export const contactInfo = {
  email: 'ruchitasuthar.design@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ruchita-suthar-97b28a24a/',
  location: 'Vadodara, Gujarat, India',
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Behance', href: 'https://www.behance.net' },
  { label: 'Pinterest', href: 'https://www.pinterest.com' },
];

export const seo = {
  title: 'Ruchita Suthar | Fashion Designer & Textile Creative',
  description:
    'Explore the portfolio of Ruchita Suthar, a fashion designer and textile professional specialising in womenswear, trend research, merchandising and creative development.',
  canonical: 'https://www.ruchitasuthar.com/',
  ogImage: '/ruchi.png',
};

export const contactFormOptions = [
  'Fashion Collaboration',
  'Textile Project',
  'Creative Opportunity',
  'Full-time Opportunity',
  'Freelance Project',
  'General Enquiry',
];
