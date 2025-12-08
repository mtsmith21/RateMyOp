import { Operator, Review } from '@/lib/types';

const reviewsData = {
  netjets: [
    {
      id: 'rev-nj-1',
      author: 'Alex Johnson',
      avatarId: 'user-avatar-1',
      date: '2023-10-15',
      comment: 'Impeccable service and attention to detail. The crew was professional and the flight was incredibly smooth. Worth every penny for the peace of mind and luxury.',
      ratings: { overall: 5, safety: 5, service: 5, punctuality: 5, value: 4 },
    },
    {
      id: 'rev-nj-2',
      author: 'Samantha Bee',
      avatarId: 'user-avatar-2',
      date: '2023-09-22',
      comment: 'Consistently reliable. We\'ve used NetJets for years for business travel. They have never missed a beat. Aircraft are always pristine.',
      ratings: { overall: 5, safety: 5, service: 5, punctuality: 5, value: 5 },
    },
  ],
  flexjet: [
    {
      id: 'rev-fj-1',
      author: 'Michael Chen',
      avatarId: 'user-avatar-3',
      date: '2023-11-01',
      comment: 'The Red Label experience is unmatched. The interiors are stunning and the crews are top-notch. A slight delay on arrival but they handled it professionally.',
      ratings: { overall: 4, safety: 5, service: 5, punctuality: 4, value: 4 },
    },
  ],
  vistajet: [
    {
      id: 'rev-vj-1',
      author: 'Emily Rodriguez',
      avatarId: 'user-avatar-4',
      date: '2023-10-28',
      comment: 'Truly a global service. Flew from New York to Dubai and it was seamless. The onboard experience felt like a five-star hotel in the sky.',
      ratings: { overall: 5, safety: 5, service: 5, punctuality: 5, value: 4 },
    },
    {
      id: 'rev-vj-2',
      author: 'Alex Johnson',
      avatarId: 'user-avatar-1',
      date: '2023-08-12',
      comment: 'Excellent fleet, always clean and modern. The booking process can be a little rigid at times, but the in-flight service makes up for it.',
      ratings: { overall: 4, safety: 5, service: 5, punctuality: 5, value: 3 },
    },
  ],
  wheelsup: [
    {
      id: 'rev-wu-1',
      author: 'Samantha Bee',
      avatarId: 'user-avatar-2',
      date: '2023-09-05',
      comment: 'Great for short-haul domestic flights. The app is easy to use for booking. However, catering options could be improved.',
      ratings: { overall: 4, safety: 4, service: 4, punctuality: 5, value: 4 },
    },
  ],
  'jet-edge': [
    {
      id: 'rev-je-1',
      author: 'Michael Chen',
      avatarId: 'user-avatar-3',
      date: '2023-07-19',
      comment: 'The large-cabin jets are fantastic for transcontinental trips. Very spacious and well-appointed. Crew was friendly and professional.',
      ratings: { overall: 5, safety: 5, service: 5, punctuality: 5, value: 4 },
    },
  ],
  airshare: [
    {
      id: 'rev-as-1',
      author: 'Emily Rodriguez',
      avatarId: 'user-avatar-4',
      date: '2023-11-05',
      comment: 'The fractional program is a good value proposition. Perfect for regional travel. The Phenom 300 is a workhorse. Solid, reliable service.',
      ratings: { overall: 4, safety: 5, service: 4, punctuality: 5, value: 5 },
    },
  ],
  zenflight: [],
  thrive: [],
  'executive-jet-management-inc': Array(33).fill(null).map((_, i) => ({
    id: `rev-ejm-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
  'jet-linx-aviation-llc': Array(26).fill(null).map((_, i) => ({
    id: `rev-jla-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
  'solairus-aviation': Array(22).fill(null).map((_, i) => ({
    id: `rev-sa-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
  'jet-aviation-flight-services-inc': Array(7).fill(null).map((_, i) => ({
    id: `rev-jafs-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
   'silver-air': Array(7).fill(null).map((_, i) => ({
    id: `rev-sair-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
  'executive-fliteways': Array(6).fill(null).map((_, i) => ({
    id: `rev-ef-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
  'talon-air-llc': Array(6).fill(null).map((_, i) => ({
    id: `rev-ta-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
  'vista-us': Array(6).fill(null).map((_, i) => ({
    id: `rev-vus-${i + 1}`,
    author: 'Anonymous',
    avatarId: `user-avatar-${(i % 5) + 1}`,
    date: '2023-10-01',
    comment: 'Generic review comment.',
    ratings: { overall: 4.5, safety: 5, service: 4, punctuality: 4, value: 4 },
  })),
};

function generateSlug(name: string) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const newOperatorsList = [
    "45 North Flight", "A-OK Jets", "AAC JET", "Accent Airways LLC", "Advanced Air LLC", "AEM Aviation", "Aero", "Aero Charter, Inc.",
    "Aero Dynamic Jets", "Air 7 LLC", "Air Center Helicopters, Inc.", "Air Fuga", "Aircharters Worldwide", "Aircraft Management Group, Inc.",
    "Aircraft Services Group, Inc.", "Aircraft Transport Service", "Alerion Aviation", "American Air Charter Inc.", "Aviation Advisor, Inc.",
    "Aviation Charters, Inc.", "Axis Jet", "Baker Aviation, LLC", "Blue Skies Aviation & Logistics LLC", "Buffalo River Aviation LLC",
    "Business Jet Services", "Central American Airways Flying Service, Inc", "Chairman Airmotive II LLC", "Charter Airlines, LLC", "Chicago Jet Group",
    "Cirrus Aviation Services", "Club Jet Charter, LLC", "Contour Aviation", "Cove Aviation Partners LLC", "Craft", "CTP Aviation",
    "Cutter Flight Management, Inc.", "Davinci Jets, LLC", "Dolphin Atlantic, Inc", "Dominion Aviation Services, LLC", "Dreamline Aviation, LLC",
    "DuPage Aerospace", "EA-Americas", "EAS Charter", "East Coast Flight Services, Inc.", "Elevate Jet", "Elite Air, Inc.", "Execuflight Inc",
    "Executive Fliteways", "Executive Jet Management, Inc.", "Exodus Aircraft, LLC", "Fair Wind Air Charter", "FlightWorks", "FliteAccess, LLC",
    "Fly Advanced Jet", "Fly Alliance", "Fly Business Aviation", "flyExclusive", "FlyHouse", "FLYTRU", "FlyUSA", "Global Air Charters",
    "Goodjet", "Hangar 7 Aviation", "Haven Aero, LLC", "Hera Flight", "Hop-A-Jet World Wide Jet Charter, Inc", "Jackson Jet Center", "Jet 1",
    "Jet Access Aviation, LLC", "Jet Aviation Flight Services, Inc.", "Jet Excellence", "Jet Linx Aviation, LLC", "Jet Ten Private Jet Charter",
    "Jet-A, LLC", "JetsPlus", "JetUp Aviation, LLC", "Journey Aviation, LLC", "Justice Air Charter", "Kalitta Charters LLC", "Latitude 33 Aviation, LLC",
    "Let's Jett, Inc", "Liberty Charter Services, LLC", "Liberty Jet", "Lone Star Aviators, LLC", "Lyon Aviation", "M&N Aviation",
    "Mach One Air Charters Inc.", "Mach Point Aviation", "Maine Aviation Aircraft Charter, LLC.", "MANext", "MARTINAIR INC.", "Meregrass, Inc.",
    "MIA JETS", "MV Jets", "NICHOLAS SERVICES LLC", "Northeastern Aviation Corp", "Northern Jet Management", "Paradigm Jet Management",
    "Paragon Airways", "Pegasus Elite Aviation", "Pentastar Aviation Charter, Inc.", "Phoenix Air Group Inc", "Pinnacle Aviation", "Planet 9",
    "Planet 9 (UK)", "Polaris Aviation Solutions, LLC", "Precision Aircraft Management", "Premier Air Charter INC", "Presidential Aviation, Inc.",
    "Priester Aviation, LLC", "Prime Jet, LLC", "PrismJet, LLC", "Private Flite Aviation", "Private Jet Center", "PROAV Charters", "Quantum Jets",
    "RAI Jets, LLC.", "Reliance Jets", "Rennia Aviation, LLC", "Reynolds Jet Management", "Royal Flight Club", "Santos Jet", "Saturn Aviation, LLC",
    "SC Aviation Inc.", "Schubach Aviation", "Sentient Jet", "Sherpa Air", "Shoreline Aviation Inc", "Short Hills Aviation Services, Inc.",
    "Silver Air", "Siskiyou Aviation LLC", "Sky Partners, Inc", "Skybird Aviation", "Skyshare", "Skyward Aviation", "Skyways Charter LLC",
    "Solairus Aviation", "Soulbird Aviation, LLC", "STA Jets", "Starjet, Inc.", "Stark Airways, LLC", "Sun Air Jets", "SURJET", "Talon Air, LLC.",
    "Thrive Aviation", "Tradewind Charter LLC", "Trans-Exec Air Service, Inc.", "Triton Airways, LLC", "TurnKey Jet, Inc", "United States Aviation Company",
    "Ventura Air Services", "Vista US", "Waltzing Matilda Aviation, LLC", "Wheels Up Private Jets LLC",
    "Wing Aviation Charter Services LLC", "Wingtip Corporation dba Wingtip Aviation", "Worldwide Jet Charter, Inc.", "XPro Jet Charters"
];


const operatorsData: Omit<Operator, 'reviews'>[] = [
  {
    id: 'netjets',
    name: 'NetJets',
    logoId: 'op-logo-netjets',
    description: 'The world\'s largest private jet company, offering fractional ownership, leasing, and jet card programs. Known for its vast fleet and consistent service.',
    hq: 'Columbus, Ohio, USA',
    fleetSize: 750,
    website: 'https://www.netjets.com/',
  },
  {
    id: 'flexjet',
    name: 'Flexjet',
    logoId: 'op-logo-flexjet',
    description: 'A premium private jet travel provider offering fractional ownership, leasing, and jet cards. Famous for its "Red Label" experience with dedicated crews and custom interiors.',
    hq: 'Cleveland, Ohio, USA',
    fleetSize: 160,
    website: 'https://www.flexjet.com/',
  },
  {
    id: 'vistajet',
    name: 'VistaJet',
    logoId: 'op-logo-vistajet',
    description: 'A global private aviation company with a subscription-based model. VistaJet owns its entire fleet of silver and red Bombardier jets, ensuring a consistent experience worldwide.',
    hq: 'Luqa, Malta',
    fleetSize: 360,
    website: 'https://www.vistajet.com/',
  },
  {
    id: 'wheelsup',
    name: 'Wheels Up',
    logoId: 'op-logo-wheelsup',
    description: 'A membership-based private aviation company known for its user-friendly app and dynamic pricing. Offers a diverse fleet for on-demand charters.',
    hq: 'New York, New York, USA',
    fleetSize: 350,
    website: 'https://www.wheelsup.com/',
  },
  {
    id: 'jet-edge',
    name: 'Jet Edge',
    logoId: 'op-logo-jet-edge',
    description: 'A leader in large-cabin and super-midsize private jet travel, specializing in charter, aircraft management, and sales. Operates one of the largest charter fleets in the U.S.',
    hq: 'Van Nuys, California, USA',
    fleetSize: 100,
    website: 'https://www.flyjetedge.com/',
  },
  {
    id: 'airshare',
    name: 'Airshare',
    logoId: 'op-logo-airshare',
    description: 'Offers fractional ownership and jet cards primarily focused on the Bombardier Challenger and Embraer Phenom series. Known for its regional focus and efficiency.',
    hq: 'Overland Park, Kansas, USA',
    fleetSize: 50,
    website: 'https://www.flyairshare.com/',
  },
  {
    id: 'zenflight',
    name: 'Zenflight',
    logoId: 'op-logo-zenflight',
    description: 'Boutique private jet service focusing on wellness and serene travel experiences. Offers curated journeys with a holistic approach to luxury.',
    hq: 'Farmingdale, NY, USA',
    fleetSize: 25,
    website: 'https://www.flyzenflight.com/',
  },
  {
    id: 'thrive',
    name: 'Thrive',
    logoId: 'op-logo-thrive',
    description: 'Next-generation private aviation focused on sustainable and carbon-neutral flights. A modern fleet with a strong commitment to environmental responsibility.',
    hq: 'Las Vegas, NV, USA',
    fleetSize: 40,
    website: 'https://www.flythrive.com/',
  },
  ...newOperatorsList.map(name => {
    const cleanName = name.replace(/\s\(\d+\)$/, '');
    const slug = generateSlug(cleanName);
    if (!reviewsData[slug as keyof typeof reviewsData]) {
        reviewsData[slug as keyof typeof reviewsData] = [];
    }
    const match = name.match(/\s\((\d+)\)$/);
    const reviewCount = match ? parseInt(match[1], 10) : 0;
     if (reviewCount > 0) {
        reviewsData[slug as keyof typeof reviewsData] = Array(reviewCount).fill(null).map((_, i) => ({
            id: `rev-${slug}-${i + 1}`,
            author: 'Anonymous',
            avatarId: `user-avatar-${(i % 5) + 1}`,
            date: '2023-10-01',
            comment: 'Review placeholder.',
            ratings: { overall: 4, safety: 5, service: 4, punctuality: 4, value: 3 },
        }));
    }

    return {
        id: slug,
        name: cleanName,
        logoId: `op-logo-${slug}`,
        description: `A private jet operator offering charter services. More details coming soon.`,
        hq: 'Location Varies',
        fleetSize: 0,
        website: `https://www.${slug}.com/`,
    }
  })
];

const allOperators: Operator[] = operatorsData.map(op => ({
  ...op,
  reviews: reviewsData[op.id as keyof typeof reviewsData] || [],
}));

export function getOperators(): Operator[] {
  return allOperators;
}

export function getOperatorById(id: string): Operator | undefined {
  return allOperators.find(op => op.id === id);
}

export function getReviewsForOperator(operatorId: string): Review[] {
    return reviewsData[operatorId as keyof typeof reviewsData] || [];
}

export const adminStats = {
    totalOperators: allOperators.length,
    totalReviews: allOperators.reduce((acc, op) => acc + op.reviews.length, 0),
    pendingReviews: 5,
    reviewsByMonth: [
        { month: "Jan", reviews: 12 },
        { month: "Feb", reviews: 19 },
        { month: "Mar", reviews: 15 },
        { month: "Apr", reviews: 23 },
        { month: "May", reviews: 18 },
        { month: "Jun", reviews: 26 },
    ]
}

export function getAllReviews(): Review[] {
    return Object.values(reviewsData).flat();
}
