export const siteMeta = {
    name: "Atelier Civic",
    lockup: "School of Architecture, Public Space, and Urban Systems",
    description:
        "An original editorial and academic website theme for architecture schools, research institutes, and urban journals."
};

export const utilityNav = [
    { href: "/about#contact", label: "Visit" },
    { href: "/programs", label: "Apply" },
    { href: "/people", label: "Directory" },
    { href: "/news", label: "Journal" }
];

export const primaryNav = [
    { href: "/", label: "Home" },
    { href: "/news", label: "Journal" },
    { href: "/programs", label: "Programs" },
    { href: "/people", label: "People" },
    { href: "/events/future-commons-symposium", label: "Events" },
    { href: "/about", label: "About" }
];

export const footerColumns = [
    {
        title: "Explore",
        links: [
            { href: "/news", label: "Latest stories" },
            { href: "/programs", label: "Program catalogue" },
            { href: "/people", label: "People directory" },
            { href: "/events/future-commons-symposium", label: "Upcoming event" }
        ]
    },
    {
        title: "Study",
        links: [
            { href: "/programs#curriculum", label: "Curriculum" },
            { href: "/programs#studios", label: "Studios" },
            { href: "/programs#research", label: "Research labs" },
            { href: "/about#mission", label: "Mission" }
        ]
    },
    {
        title: "Connect",
        links: [
            { href: "/about#contact", label: "Contact" },
            { href: "/people", label: "Faculty and staff" },
            { href: "/events/future-commons-symposium#register", label: "Register for events" },
            { href: "/about#spaces", label: "Campus spaces" }
        ]
    }
];

export const stories = [
    {
        id: "adaptive-reuse-districts",
        href: "/articles/adaptive-reuse-districts",
        title: "Adaptive Reuse Districts Need Shared Civic Infrastructure, Not Just Better Facades",
        summary:
            "Three blocks of warehouses become a test case for how reuse succeeds when energy retrofits, loading routes, public thresholds, and governance are planned together.",
        category: "Research",
        topic: "Urban Systems",
        tone: "ink",
        author: "Leena Marquet",
        date: "March 11, 2026",
        readTime: "8 min read",
        image: {
            src: "/media/lead-city-assembly.svg",
            alt: "Abstract urban block composition with towers, bridges, and masonry structures."
        }
    },
    {
        id: "campus-street-sections",
        href: "/articles/campus-street-sections",
        title: "Street Sections as Studio Briefs",
        summary:
            "A first-year sequence uses one avenue, one bus route, and one winter crossing as the basis for every drawing set.",
        category: "Studio",
        topic: "Pedagogy",
        tone: "rust",
        author: "Nico Varela",
        date: "March 9, 2026",
        readTime: "4 min read",
        image: {
            src: "/media/lead-facade-grid.svg",
            alt: "Graphic facade and street elevation with geometric cutouts."
        }
    },
    {
        id: "masonry-climate-manual",
        href: "/articles/masonry-climate-manual",
        title: "A Masonry Climate Manual for the Cold Shoulder Season",
        summary:
            "The materials lab publishes a practical guide to thermal mass, vented joints, and repair cycles for civic buildings in freeze-thaw climates.",
        category: "Materials",
        topic: "Envelope",
        tone: "olive",
        author: "Saira Haddad",
        date: "March 6, 2026",
        readTime: "6 min read",
        image: {
            src: "/media/lead-archive-stack.svg",
            alt: "Layered masonry walls and archive shelves rendered as a flat illustration."
        }
    },
    {
        id: "housing-commons-ledger",
        href: "/articles/housing-commons-ledger",
        title: "The Housing Commons Ledger",
        summary:
            "A studio and policy seminar pair maintenance budgets, shared amenities, and resident governance in one public accounting model.",
        category: "Policy",
        topic: "Housing",
        tone: "sand",
        author: "Mara Ellison",
        date: "March 2, 2026",
        readTime: "5 min read",
        image: {
            src: "/media/lead-commons-hall.svg",
            alt: "Interior hall with a long table, windows, and hanging lights."
        }
    },
    {
        id: "transit-shelter-kit",
        href: "/articles/transit-shelter-kit",
        title: "A Transit Shelter Kit for Small Municipalities",
        summary:
            "Research fellows prototype an assembly system for wind protection, public lighting, and incremental add-ons that local public works teams can maintain.",
        category: "Practice",
        topic: "Infrastructure",
        tone: "ink",
        author: "Ami Patel",
        date: "February 27, 2026",
        readTime: "7 min read",
        image: {
            src: "/media/lead-night-studio.svg",
            alt: "Nighttime studio scene with illuminated windows and structural frames."
        }
    },
    {
        id: "public-roof-rooms",
        href: "/articles/public-roof-rooms",
        title: "Public Roof Rooms Above the Mechanical Floor",
        summary:
            "Graduate researchers map how overlooked technical levels can absorb winter gardens, study terraces, and public lookout spaces.",
        category: "Research",
        topic: "Civic Space",
        tone: "olive",
        author: "Theo Kim",
        date: "February 22, 2026",
        readTime: "5 min read",
        image: {
            src: "/media/lead-roof-rooms.svg",
            alt: "Stacked rooftop rooms and terraces depicted in muted architectural shapes."
        }
    },
    {
        id: "river-edge-archive",
        href: "/articles/river-edge-archive",
        title: "Drawing the River Edge Archive",
        summary:
            "Students reconstruct a century of shoreline access, demolition, and public repair through sectional collages and field notes.",
        category: "History",
        topic: "Archive",
        tone: "rust",
        author: "Carla Webb",
        date: "February 18, 2026",
        readTime: "9 min read",
        image: {
            src: "/media/lead-river-edge.svg",
            alt: "Layered river wall and stepped landscape collage."
        }
    },
    {
        id: "facade-as-index",
        href: "/articles/facade-as-index",
        title: "When the Facade Works as an Index, Not an Icon",
        summary:
            "An editorial on why institutional identity can be built from sequence, proportion, and civic legibility instead of spectacle.",
        category: "Critique",
        topic: "Representation",
        tone: "sand",
        author: "Jonas Reed",
        date: "February 15, 2026",
        readTime: "3 min read",
        image: {
            src: "/media/lead-facade-grid.svg",
            alt: "Graphic facade and street elevation with geometric cutouts."
        }
    }
];

export const programs = [
    {
        id: "barch-foundations",
        title: "BArch Foundations",
        category: "Undergraduate",
        cadence: "4 years",
        format: "Full-time",
        tone: "ink",
        summary:
            "A studio-first undergraduate degree anchored by construction logic, public history, and measured urban observation.",
        highlights: ["Three core studios", "Drawing and structures labs", "Field seminars"],
        image: {
            src: "/media/lead-atelier.svg",
            alt: "Studio desks and drafting surfaces in a crisp architectural composition."
        }
    },
    {
        id: "march-urban-interiors",
        title: "MArch Urban Interiors",
        category: "Graduate",
        cadence: "2 years",
        format: "Full-time",
        tone: "rust",
        summary:
            "A professional program on civic interiors, adaptive reuse, and public building systems in dense urban districts.",
        highlights: ["Urban housing studios", "Reuse seminars", "Integrated review juries"],
        image: {
            src: "/media/lead-commons-hall.svg",
            alt: "Interior hall with long spans and calm architectural lighting."
        }
    },
    {
        id: "public-ground-certificate",
        title: "Public Ground Certificate",
        category: "Certificate",
        cadence: "10 months",
        format: "Hybrid",
        tone: "olive",
        summary:
            "An interdisciplinary certificate on streets, landscapes, and the stewardship of public thresholds from curb to courtyard.",
        highlights: ["Weekend workshops", "Civic mapping", "Municipal partners"],
        image: {
            src: "/media/lead-river-edge.svg",
            alt: "Stepped river edge and public landscape rendered as planar shapes."
        }
    },
    {
        id: "civic-fabric-lab",
        title: "Civic Fabric Lab",
        category: "Research Lab",
        cadence: "Year-round",
        format: "Embedded research",
        tone: "sand",
        summary:
            "A materials and maintenance lab focused on repair cycles, envelope detailing, and low-tech durability in public buildings.",
        highlights: ["Envelope mockups", "Field testing", "Municipal maintenance studies"],
        image: {
            src: "/media/lead-archive-stack.svg",
            alt: "Masonry walls and archive shelves shown as layered planar forms."
        }
    },
    {
        id: "evening-city-seminars",
        title: "Evening City Seminars",
        category: "Public Program",
        cadence: "8 sessions",
        format: "Evening",
        tone: "ink",
        summary:
            "An open lecture and discussion series on transport, housing, conservation, and public procurement.",
        highlights: ["Practitioner roundtables", "Open registration", "Recorded talks"],
        image: {
            src: "/media/lead-city-assembly.svg",
            alt: "Urban block composition with towers, bridges, and masonry structures."
        }
    },
    {
        id: "structures-and-climate",
        title: "Structures and Climate Fellowship",
        category: "Graduate",
        cadence: "1 year",
        format: "Research residency",
        tone: "olive",
        summary:
            "A post-professional fellowship pairing tectonic analysis with climate adaptation research and publication.",
        highlights: ["Independent publication", "Teaching support", "Prototype funding"],
        image: {
            src: "/media/lead-night-studio.svg",
            alt: "Illuminated studio frame and structural bays at night."
        }
    }
];

export const people = [
    {
        id: "mara-ellison",
        name: "Mara Ellison",
        role: "Dean and Professor of Civic Architecture",
        type: "Faculty",
        unit: "Office of the Dean",
        tone: "ink",
        focus: ["Housing policy", "Institution building", "Public budgets"],
        email: "mara.ellison@ateliercivic.edu",
        office: "North Hall 301"
    },
    {
        id: "leif-moreno",
        name: "Leif Moreno",
        role: "Associate Professor",
        type: "Faculty",
        unit: "Urban Systems",
        tone: "rust",
        focus: ["Transit corridors", "Street sections", "Public right-of-way"],
        email: "leif.moreno@ateliercivic.edu",
        office: "North Hall 214"
    },
    {
        id: "saira-haddad",
        name: "Saira Haddad",
        role: "Director, Civic Fabric Lab",
        type: "Faculty",
        unit: "Materials and Maintenance",
        tone: "olive",
        focus: ["Envelope repair", "Thermal mass", "Cold climate masonry"],
        email: "saira.haddad@ateliercivic.edu",
        office: "Fabrication Annex 118"
    },
    {
        id: "theo-kim",
        name: "Theo Kim",
        role: "Critic in Residence",
        type: "Faculty",
        unit: "Graduate Studios",
        tone: "sand",
        focus: ["Civic interiors", "Reuse practice", "Drawing"],
        email: "theo.kim@ateliercivic.edu",
        office: "South Studio 207"
    },
    {
        id: "ami-patel",
        name: "Ami Patel",
        role: "Research Fellow",
        type: "Research",
        unit: "Structures and Climate Fellowship",
        tone: "ink",
        focus: ["Transit shelters", "Timber assemblies", "Field prototyping"],
        email: "ami.patel@ateliercivic.edu",
        office: "Lab Commons 012"
    },
    {
        id: "linh-ho",
        name: "Linh Ho",
        role: "Doctoral Researcher",
        type: "Research",
        unit: "Urban Histories",
        tone: "rust",
        focus: ["Waterfront archives", "Public access", "Section drawing"],
        email: "linh.ho@ateliercivic.edu",
        office: "Archive Studio 105"
    },
    {
        id: "jonas-reed",
        name: "Jonas Reed",
        role: "Director of Public Programs",
        type: "Staff",
        unit: "External Affairs",
        tone: "sand",
        focus: ["Events", "Public talks", "Partnerships"],
        email: "jonas.reed@ateliercivic.edu",
        office: "Commons Desk 002"
    },
    {
        id: "nuria-voss",
        name: "Nuria Voss",
        role: "Registrar",
        type: "Staff",
        unit: "Academic Affairs",
        tone: "olive",
        focus: ["Admissions", "Schedules", "Degree planning"],
        email: "nuria.voss@ateliercivic.edu",
        office: "North Hall 110"
    },
    {
        id: "ida-flores",
        name: "Ida Flores",
        role: "Fabrication Manager",
        type: "Staff",
        unit: "Shops and Labs",
        tone: "ink",
        focus: ["Wood shop", "Prototype reviews", "Safety training"],
        email: "ida.flores@ateliercivic.edu",
        office: "Fabrication Annex 001"
    },
    {
        id: "carla-webb",
        name: "Carla Webb",
        role: "Architecture Librarian and Archivist",
        type: "Staff",
        unit: "Library and Archive",
        tone: "rust",
        focus: ["Collections", "Metadata", "Historic plans"],
        email: "carla.webb@ateliercivic.edu",
        office: "Archive Reading Room"
    }
];

export const events = [
    {
        id: "future-commons-symposium",
        href: "/events/future-commons-symposium",
        title: "Future Commons Symposium",
        type: "Symposium",
        dateLabel: "Thursday, April 16, 2026",
        month: "Apr",
        day: "16",
        time: "9:00 AM - 6:30 PM",
        location: "Assembly Hall, North Hall",
        registerLabel: "Register now",
        tone: "ink",
        summary:
            "A one-day public symposium on adaptive reuse, institutional stewardship, and the civic life of shared interiors.",
        image: {
            src: "/media/lead-commons-hall.svg",
            alt: "Assembly hall with seating, stage, and structural bays."
        }
    },
    {
        id: "open-studio-review",
        href: "/events/open-studio-review",
        title: "Open Studio Review",
        type: "Review",
        dateLabel: "Friday, April 24, 2026",
        month: "Apr",
        day: "24",
        time: "1:00 PM - 5:00 PM",
        location: "South Studio Floors 2-3",
        registerLabel: "Reserve a seat",
        tone: "rust",
        summary:
            "Second-year and graduate studios pin up public housing, transit, and civic repair projects for an open jury.",
        image: {
            src: "/media/lead-atelier.svg",
            alt: "Open studio with pinned drawings and drafting tables."
        }
    },
    {
        id: "archive-night-walk",
        href: "/events/archive-night-walk",
        title: "Archive Night Walk",
        type: "Walking seminar",
        dateLabel: "Wednesday, May 6, 2026",
        month: "May",
        day: "06",
        time: "6:30 PM - 8:30 PM",
        location: "River Edge District",
        registerLabel: "Join the walk",
        tone: "olive",
        summary:
            "A guided evening walk linking archival sections, demolished piers, and current shoreline repair work.",
        image: {
            src: "/media/lead-river-edge.svg",
            alt: "River wall and promenade rendered in planar architectural forms."
        }
    },
    {
        id: "summer-fabrication-bootcamp",
        href: "/events/summer-fabrication-bootcamp",
        title: "Summer Fabrication Bootcamp",
        type: "Workshop",
        dateLabel: "Monday, June 8, 2026",
        month: "Jun",
        day: "08",
        time: "10:00 AM - 4:00 PM",
        location: "Fabrication Annex",
        registerLabel: "Apply to attend",
        tone: "sand",
        summary:
            "An intensive introduction to mockups, fasteners, tolerances, and safe shop workflows for incoming students.",
        image: {
            src: "/media/lead-night-studio.svg",
            alt: "Structural frame and studio bays lit from within."
        }
    }
];

export const articlePage = {
    storyId: "adaptive-reuse-districts",
    dek:
        "Retrofitting old industrial blocks is not mainly a style problem. It is a coordination problem across servicing, ownership, access, and public life.",
    lede:
        "The district around Foundry Avenue looks complete from a distance: brick shells remain intact, loading doors are handsome, and the street wall reads as a coherent ensemble. What is missing is the hard infrastructure that lets reused buildings actually share life with one another.",
    sections: [
        {
            id: "overview",
            heading: "Reuse works when buildings are treated as a district, not a collection of isolated trophies.",
            paragraphs: [
                "In the school's recent field study, three warehouse conversions were compared block by block. Each project had competent facade repair and respectable tenant demand. The failures appeared elsewhere: duplicated plant rooms, unresolved freight access, awkward public entries, and no shared strategy for after-hours lighting or winter maintenance.",
                "That pattern pushed the studio team away from image-making and toward operating diagrams. Students redrew service corridors, alley sections, and meter rooms before touching cladding proposals. Once those systems were visible, design decisions became less theatrical and more public."
            ]
        },
        {
            id: "infrastructure",
            heading: "Shared infrastructure creates the economic room for public space.",
            paragraphs: [
                "One proposal combined loading, refuse, and geothermal routing in a single rear-service spine that served four leases. Another relocated mechanical equipment to a cooperative roof platform, freeing the ground level for a winter lobby and workshop frontage.",
                "The school argues that these moves matter because they reduce redundant fit-out cost while also making collective spaces believable. A generous stair or public workshop only survives if the back-of-house has already been rationalized."
            ]
        },
        {
            id: "governance",
            heading: "Governance is part of the plan set.",
            paragraphs: [
                "The most durable schemes paired drawings with a stewardship framework: who clears snow, who maintains the shared heat loop, who controls access after public events, and how tenants contribute to repairs over time.",
                "That language belongs beside sections and schedules. Without it, adaptive reuse drifts back toward a building-by-building logic that repeats cost and erodes the civic promise of the district."
            ]
        }
    ],
    quote:
        "The useful drawing was not the hero rendering. It was the plan showing which walls, pipes, and doors could become common ground.",
    sidebarModules: [
        {
            title: "Field Notes",
            items: ["3 warehouse buildings", "1 shared service spine", "4 lease types", "12 public threshold diagrams"]
        },
        {
            title: "Related Reading",
            storyIds: ["housing-commons-ledger", "public-roof-rooms", "facade-as-index"]
        }
    ]
};

export const listingPage = {
    title: "Journal",
    eyebrow: "Editorial",
    description:
        "Reporting, criticism, and research briefs on architecture, public institutions, climate repair, and the urban block.",
    pageSize: 4,
    secondaryNav: [
        { href: "/news#latest", label: "Latest" },
        { href: "/news#topics", label: "Topics" },
        { href: "/news#calendar", label: "Editorial calendar" }
    ]
};

export const programsPage = {
    title: "Programs",
    eyebrow: "Study",
    description:
        "Degree programs, public courses, and research formats organized around civic buildings, public ground, and durable making.",
    tabs: ["All", "Undergraduate", "Graduate", "Certificate", "Research Lab", "Public Program"],
    secondaryNav: [
        { href: "/programs#curriculum", label: "Curriculum" },
        { href: "/programs#studios", label: "Studios" },
        { href: "/programs#research", label: "Research" }
    ],
    studioNotes: [
        "Studios are structured around public briefs instead of abstract parcels.",
        "Each semester combines field documentation, technical detail, and collective reviews.",
        "Programs share fabrication, archive, and maintenance research resources."
    ]
};

export const peoplePage = {
    title: "People",
    eyebrow: "Directory",
    description:
        "Faculty, staff, and researchers working across studios, archives, public programs, and the materials lab.",
    filters: ["All", "Faculty", "Research", "Staff"],
    secondaryNav: [
        { href: "/people#directory", label: "Directory" },
        { href: "/people#units", label: "Units" },
        { href: "/people#visiting", label: "Visiting critics" }
    ],
    visitingCritics: [
        "Mina Solberg, municipal architect",
        "Owen Delisle, landscape historian",
        "Farah Idris, transit infrastructure lead"
    ]
};

export const eventPage = {
    eventId: "future-commons-symposium",
    eyebrow: "Events",
    description:
        "A public symposium bringing together architects, maintenance leaders, public clients, and students around the future of shared civic interiors.",
    secondaryNav: [
        { href: "/events/future-commons-symposium#overview", label: "Overview" },
        { href: "/events/future-commons-symposium#schedule", label: "Schedule" },
        { href: "/events/future-commons-symposium#speakers", label: "Speakers" },
        { href: "/events/future-commons-symposium#register", label: "Register" }
    ],
    speakers: [
        {
            name: "Mara Ellison",
            role: "Dean, Atelier Civic",
            topic: "Opening remarks: institutions as long-term projects"
        },
        {
            name: "Ami Patel",
            role: "Research Fellow",
            topic: "Shared service systems in reused industrial blocks"
        },
        {
            name: "Celeste Ramires",
            role: "Director of Capital Planning, City Works",
            topic: "Maintenance budgets as design briefs"
        },
        {
            name: "Theo Kim",
            role: "Critic in Residence",
            topic: "Public interiors after the lobby"
        }
    ],
    schedule: [
        { time: "9:00 AM", title: "Arrival and coffee", detail: "Registration desk opens in the North Hall foyer." },
        { time: "10:00 AM", title: "Keynote panel", detail: "Institutions, reuse, and the civic commons." },
        { time: "12:30 PM", title: "Working lunch", detail: "Table discussions on stewardship and procurement." },
        { time: "2:00 PM", title: "Case study sessions", detail: "Parallel sessions on libraries, schools, and transit buildings." },
        { time: "5:00 PM", title: "Closing conversation", detail: "Future research agendas and student publication launch." }
    ],
    cta: {
        label: "Register now",
        note: "Free admission. Registration required. Capacity limited to 180 attendees."
    }
};

export const aboutPage = {
    title: "About",
    eyebrow: "Institution",
    description:
        "Atelier Civic is a fictional but fully realized school and journal focused on architecture as a public, material, and institutional practice.",
    secondaryNav: [
        { href: "/about#mission", label: "Mission" },
        { href: "/about#history", label: "History" },
        { href: "/about#spaces", label: "Spaces" },
        { href: "/about#contact", label: "Contact" }
    ],
    mission:
        "The school teaches architecture through buildings that must last, budgets that must hold, and publics that must recognize themselves in the result.",
    sections: [
        {
            id: "mission",
            eyebrow: "Mission",
            title: "Architecture is taught here as a civic art with technical consequences.",
            body: [
                "Studios begin with actual institutions: a branch library, a tram shelter, a housing cooperative, a market hall. Students are asked to understand maintenance, timing, public thresholds, and governance before they formalize an image.",
                "The journal extends that approach by publishing criticism, field notes, and research that stays close to how buildings are made, repaired, funded, and inhabited."
            ],
            image: {
                src: "/media/lead-city-assembly.svg",
                alt: "Urban block composition showing towers, bridges, and solid civic structures."
            }
        },
        {
            id: "history",
            eyebrow: "History",
            title: "Founded as a compact school, expanded as a public platform.",
            body: [
                "The institution began as a small evening school for working designers and municipal staff. Its early curriculum focused on measured drawing, construction documents, and urban history.",
                "Over time, the school added graduate studios, a materials lab, and a public events calendar that brought practitioners, researchers, and city agencies into one conversation."
            ],
            image: {
                src: "/media/lead-archive-stack.svg",
                alt: "Archive shelves and wall sections drawn in layered geometric forms."
            }
        },
        {
            id: "spaces",
            eyebrow: "Spaces",
            title: "Studios, archive rooms, and fabrication spaces are organized as a continuous learning ground.",
            body: [
                "North Hall houses lecture rooms, the reading archive, and the assembly hall. South Studio contains open pin-up zones and seminar rooms with long views over the avenue. The fabrication annex anchors the school with practical work: mockups, joinery, maintenance studies, and review tables.",
                "Each building shares the same design language: durable surfaces, generous circulation, visible structure, and a high tolerance for change over time."
            ],
            image: {
                src: "/media/lead-atelier.svg",
                alt: "Studio desks and pin-up surfaces rendered as a flat architectural illustration."
            }
        }
    ],
    stats: [
        { label: "Studios per term", value: "12" },
        { label: "Public events yearly", value: "36" },
        { label: "Research labs", value: "3" },
        { label: "Archive drawings", value: "18k" }
    ],
    contact: {
        address: ["Atelier Civic", "100 Foundry Avenue", "Toronto, ON M5V 2H7"],
        email: "hello@ateliercivic.edu",
        phone: "+1 416 555 0134"
    }
};

export const homePage = {
    heroStoryId: "adaptive-reuse-districts",
    topicStoryIds: ["campus-street-sections", "masonry-climate-manual", "facade-as-index"],
    latestStoryIds: ["housing-commons-ledger", "transit-shelter-kit", "public-roof-rooms", "river-edge-archive"],
    eventIds: ["future-commons-symposium", "open-studio-review", "archive-night-walk"],
    programIds: ["barch-foundations", "march-urban-interiors", "civic-fabric-lab"],
    peopleIds: ["mara-ellison", "saira-haddad", "ami-patel", "jonas-reed"],
    intro:
        "Editorial discipline meets institutional clarity in one architecture-focused theme: image-led stories, calm navigation, robust directory patterns, and clear academic page structures."
};

export const pageMeta = {
    "/": {
        title: "Atelier Civic",
        secondaryNav: [
            { href: "/#latest-news", label: "Latest" },
            { href: "/#upcoming-events", label: "Events" },
            { href: "/#featured-programs", label: "Programs" },
            { href: "/#people-preview", label: "People" }
        ]
    },
    "/articles/adaptive-reuse-districts": {
        title: "Adaptive Reuse Districts",
        secondaryNav: articlePage.sections.map((section) => ({
            href: `/articles/adaptive-reuse-districts#${section.id}`,
            label: section.heading.split(" ").slice(0, 2).join(" ")
        }))
    },
    "/news": {
        title: listingPage.title,
        secondaryNav: listingPage.secondaryNav
    },
    "/programs": {
        title: programsPage.title,
        secondaryNav: programsPage.secondaryNav
    },
    "/people": {
        title: peoplePage.title,
        secondaryNav: peoplePage.secondaryNav
    },
    "/events/future-commons-symposium": {
        title: "Future Commons Symposium",
        secondaryNav: eventPage.secondaryNav
    },
    "/about": {
        title: aboutPage.title,
        secondaryNav: aboutPage.secondaryNav
    }
};

export function getStoryById(id) {
    return stories.find((story) => story.id === id);
}

export function getProgramById(id) {
    return programs.find((program) => program.id === id);
}

export function getPersonById(id) {
    return people.find((person) => person.id === id);
}

export function getEventById(id) {
    return events.find((event) => event.id === id);
}
