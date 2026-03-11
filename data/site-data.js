const skyrimImages = require("../assets/images/skyrim_images.json");

const mainNav = [
    { href: "/", label: "Home" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "/Work-Experience", label: "Work Experience" },
    { href: "/Education", label: "Education" }
];

const compactMainNav = mainNav.slice(0, 3);

const portfolioItems = [
    {
        id: "CHARS-Feasibility",
        title: "Feasibility Study for an Expansion at the Canadian High Arctic Research Station.",
        description: "A study of renewable energy production technologies and arctic building techniques to determine the viability of building a power-generating expansion to POLAR Knowledge Canada's High Arctic Research Station in Cambridge Bay, Nunavut. This was in collaboration with, and presented to, representatives from POLAR Knowledge Canada and the University of Ottawa's Civil Engineering Department.",
        season: "Autumn 2017",
        href: "/CHARS-Feasibility"
    },
    {
        id: "231-Cobourg-Foundation",
        title: "Shallow Foundation Design for a Condominium at 231 Cobourg Ave.",
        description: "A shallow raft-foundation design for a proposed eight-story condominium at 231 Cobourg Ave, Ottawa, Ontario. The site at Cobourg Avenue is unique in that beneath a thin layer of sand rests a deep layer of Leda Clay close to the water-table. Leda Clay is known to liquify under pressure when saturated, so increased safety measures were considered in the design.",
        season: "December 2017",
        href: "/Shallow-Foundation-231-Cobourg"
    },
    {
        id: "CHARS-Design",
        title: "Waste-to-Energy Plant Design to Service Canadian High Arctic Research Station.",
        description: "A design for a waste-to-energy plant to be built in the High Arctic. This building was designed to reduce Cambridge Bay's ecological footprint while meeting its growing energy needs. With the knowledge gained from the earlier conducted feasibility study, a light-weight building was designed which would sit a few feet above the permafrost on socketed piles. This building also featured state-of-the-art insulation materials. This report was presented to professors in the University of Ottawa's Civil Engineering Department.",
        season: "Winter 2018",
        href: "/CHARS-Design-Report"
    },
    {
        id: "TenthLine-Foundation",
        title: "Foundation Design for a New Commercial Building at Tenth Line.",
        description: "A pile foundation design for a proposed development at Tenth Line, Ottawa, Ontario. Iterative design was used to develop a suitable foundation in primarily sand. Site data was determined from borehole logs taken on site.",
        season: "March 2020",
        href: "/Foundation-for-Tenth-Line"
    },
    {
        id: "CGTD",
        title: "Computer Generated Training Data.",
        description: "A pipeline to create segmented data in several prominent segmented image formats: YOLO and COCO for example. Virtual rooms were procedurally generated in blender and sequences of images, with corresponding segments for objects and walls, were generated. Three-dimensional vertices defining objects in-frame were projected onto the image plane and reduced to only those necessary to express the object's silhouette. Then the segmented data is converted to the desired format. The aim was to determine if a neural network could learn from computer-generated graphics.",
        season: "Autumn 2020",
        href: "/Computer-Generated-Training-Data"
    },
    {
        id: "Parametric-Space",
        title: "Parametric Space.",
        description: "A quick investigation into how space could be parametrized, partly undertaken as a part of Computer Generated Training Data. A design pattern which related pseudorandom elements to collective expression was coded such that random collections of spaces following this pattern could be generated.",
        season: "Autumn 2020",
        href: "/Parametric-Space"
    },
    {
        id: "WaveGAN",
        title: "WaveGAN.",
        description: "An investigation into the temporal variation of entropic signals, as revealed by time windowing its wavelet transform. A generative adversarial neural network was then developed which sought to learn how the wavelet transform of a signal varied with time and would therefore be able to extrapolate it forward.",
        season: "Winter 2021",
        href: "/WaveGAN"
    },
    {
        id: "CryptoAI-Proposals",
        title: "Proposals for a Trading AI.",
        description: "An overview of an AI designed to trade cryptocurrency. Modelling financial markets as a stochastic process, the proposed AI implements generative adversarial networks to make reasonable price predictions. Wavelets are also implemented in order to reveal lower frequency trends. Implicit in this design is the cyclical nature of seemingly random events.",
        season: "Winter 2022",
        href: "/Cryptocurrency-AI"
    },
    {
        id: "Skyrim-TrueNord",
        title: "Elder Scrolls V Skyrim - True Nord Edition.",
        description: "A graphical overhaul and gameplay rebalance/rework aimed at focusing Bethesda's Elder Scrolls V Skyrim on the human aspect. The vanilla game echoes many modern ideas but these are easy to miss amidst all of Skyrim's magic and sorcery. The True Nord Edition refocuses the game such that these ideas are more prevalent.",
        season: "Spring 2022",
        href: "/Skyrim-TNE"
    },
    {
        id: "AIArt",
        title: "AI & Art.",
        description: "An exploration of AI's role in creative work. Primarily consisting of practical analysis, several different AI architectures were studied to obtain a deeper understanding of AI's role in creative space.",
        season: "Summer 2022",
        href: "/AI-Art"
    }
];

const resumeEntries = {
    education: [
        {
            title: "Bachelor of Applied Science in Civil Engineering with Specialization in Geotechnical and Structural Engineering",
            organization: "University of Ottawa",
            dates: "September 2013 - April 2019"
        },
        {
            title: "Computer Programming Diploma",
            organization: "Seneca College of Applied Arts and Technology",
            dates: "September 2020 - April 2022"
        }
    ],
    work: [
        {
            role: "Architectural Field Student",
            organization: "Ottawa Community Housing",
            dates: "May 2018 - August 2018",
            summary: "Worked in a team to update Ottawa Community Housing's (OCH) fire life safety plan. Created documents detailing the locations of fire protection and life safety systems, and their serviceability states for over a hundred of OCH's properties. Creating these documents entailed site visits, consulting or creating floor plans, and meetings with relevant and concerned parties."
        },
        {
            role: "Heritage Research Assistant",
            organization: "Architectural Conservancy of Ontario",
            dates: "June 2017 - August 2017",
            summary: "Researched how Toronto's sociopolitical landscape reflects in the architecture of Toronto's public schools; particularly the impact of changes in Toronto District School Board administration and changing theories concerning educational practice. Sourced information from a combination of archival data, expert interviews, and site visits."
        },
        {
            role: "Student Construction Inspector",
            organization: "MMM Group (Now WSP)",
            dates: "January 2016 - April 2016",
            summary: "Inspected work on several plant expansion and maintenance jobs at TTC (Toronto Transit Commission). Reported to project managers and senior construction inspectors. Read plans to verify work and ensured sites were up to safety code. Maintained a detailed record of site activities and catalogued this in TTC's database. Also established and maintained correspondence with parties relevant to project contracts."
        },
        {
            role: "Academic Tutor",
            organization: "UOttawa Student's Union",
            dates: "September 2015 - April 2019",
            summary: "Tutored first, second, and third-year students in Linear Algebra, Calculus, Engineering Materials, Statics, Dynamics, C Programming for Engineers, and Physics for Engineers."
        }
    ]
};

const skyrimSubnav = [
    { href: "/Skyrim-TNE", label: "Overview" },
    { href: "/Skyrim-TNE/About", label: "About" },
    { href: "/Skyrim-TNE/Images", label: "Images" },
    { href: "/Skyrim-TNE/BeforeAndAfter", label: "Before & After" },
    { href: "/Skyrim-TNE/Videos", label: "Videos" }
];

const sharedModernStyles = [];
const skyrimStyles = [];
const bootstrapStyles = ["https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"];
const bootstrapScripts = [
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
];

const routes = [
    {
        path: "/",
        kind: "modern",
        template: "pages/home",
        title: "Jashua Luna",
        stylesheets: sharedModernStyles,
        bodyAttrs: 'class="app-body app-body--main"',
        primaryNav: compactMainNav,
        sectionNav: [
            { href: "#Introduction", label: "About Me" },
            { href: "#Education", label: "Education" },
            { href: "#Work-Experience", label: "Work Experience" }
        ],
        intro: [
            "I am a Civil Engineering Graduate, with a wealth of knowledge stemming from multiple disciplines, who enjoys solving complex problems. I have a strong background in mathematics and programming and can work independently with minimum supervision.",
            "With my undergraduate studies completed and graduate studies on the horizon, I hope to find employment I can be passionate about to make a strong start to a successful career."
        ],
        education: resumeEntries.education,
        work: resumeEntries.work
    },
    {
        path: "/Portfolio",
        kind: "modern",
        template: "pages/portfolio",
        title: "Portfolio",
        stylesheets: sharedModernStyles,
        bodyAttrs: 'class="app-body app-body--main"',
        primaryNav: [
            { href: "/", label: "Home" },
            { href: "/Work-Experience", label: "Work Experience" },
            { href: "/Education", label: "Education" }
        ],
        sectionNav: portfolioItems.map((item) => ({ href: `#${item.id}`, label: item.title })),
        items: portfolioItems
    },
    {
        path: "/Work-Experience",
        kind: "modern",
        template: "pages/work",
        title: "Work Experience",
        stylesheets: sharedModernStyles,
        bodyAttrs: 'class="app-body app-body--main"',
        primaryNav: compactMainNav,
        items: resumeEntries.work
    },
    {
        path: "/Education",
        kind: "modern",
        template: "pages/education",
        title: "Education",
        stylesheets: sharedModernStyles,
        bodyAttrs: 'class="app-body app-body--main"',
        primaryNav: compactMainNav,
        items: resumeEntries.education
    },
    {
        path: "/Skyrim-TNE",
        kind: "modern",
        template: "pages/skyrim-overview",
        title: "Skyrim True Nord Edition",
        stylesheets: skyrimStyles,
        bodyAttrs: 'class="app-body app-body--skyrim"',
        heroImage: "https://chi01pap001files.storage.live.com/y4m6mSiTOL_hx5gXE_vi1RmsW-Fub_9tihTG_iG1PWbHoUqqFA0YMSvhPFQbfPLU5Q9zIzVZM-dr5o25rzoI0gnfXAZ8eyGs8JkMnzVZ08vaH2aKIqVhCjvpkFJ5oKr0P8G_LEmE95nhzydXgueZmMQyrJBtQe0uPaJpAYc-yF-RD9V8yWnkzv2_sGCP0kiReOr?width=3840&height=1974&cropmode=none",
        subtitle: "A rework and expansion of Bethesda's Elder Scrolls V Skyrim, with a focus on relationships.",
        subnav: skyrimSubnav.slice(1),
        footerNav: mainNav
    },
    {
        path: "/Skyrim-TNE/About",
        kind: "modern",
        template: "pages/skyrim-about",
        title: "About TNE",
        stylesheets: skyrimStyles,
        bodyAttrs: 'class="app-body app-body--skyrim"',
        subnav: [
            { href: "/Skyrim-TNE", label: "Overview" },
            { href: "/Skyrim-TNE/Images", label: "Images" },
            { href: "/Skyrim-TNE/BeforeAndAfter", label: "Before & After" },
            { href: "/Skyrim-TNE/Videos", label: "Videos" }
        ],
        footerNav: mainNav,
        sections: [
            {
                image: "https://chi01pap001files.storage.live.com/y4mpfoTg532KlodrPqJAxW3ZD4_Z8MH208j9qRwIDMtW7pYMrmqjJrC5TT2DONUtMUQhJ4Est9YOYnjYPNkWSkTOlZOTziWBxe86-kmPmM7pIJsZJXwacrjr_Em7cP2a_BuquGV_Auh9jTst_BKqP76wGfq7lBiuT8iY6xLywkql_BqP2qwo3RKsoJXuM5YmHyY?width=3840&height=1989&cropmode=none",
                heading: "Skyrim is a beautiful, cold, and dangerous place where people must come together to survive.",
                body: "To focus gameplay on relationships, the difficulty of all enemies was increased such that venturing into Skyrim's wilderness alone almost certainly spells death for all but the highest-level adventurers; and a system was added by which players can develop relationships with friendly NPCs, who might then choose to join the player in their adventure."
            },
            {
                image: "https://chi01pap001files.storage.live.com/y4mc5HRS9s-ads0zs9lyEyp1at2-nxrndr8z9vFHjWTkbjJ35GklClxAQ8fJs7Cb_QDo4hR4b0soB5Uq0_HV2rT-nRCRpRqHhFPq1a8ZDTfJlMvNH-mtO-UdMHR7IHY3Z_W9QHCXM2XGTypmfqP7SnktTdpjawm3WtR-_nMT5soX_aYdd_ujccB209GlrSL9SAz?width=2560&height=1326&cropmode=none",
                heading: "A living, breathing world where the player's actions have an impact.",
                body: "Each NPC is made unique via random stat and model assignments, and can be leveled up and equipped with weapons, spells, and armor. Added new quests, many of which are focused on developing personal, and sometimes romantic, relationships with the locals. NPCs fulfilling new societal roles and an interactive economy which responds to the player's actions were added."
            },
            {
                image: "https://chi01pap001files.storage.live.com/y4mXMWhWv8UGMM6MPe-Hik4IbHB08XlcafM6CLMX__dc8ZyeUm_Cq2RXFBnYqjalXI4g4IUVYdbx5VP0AMwISmakAGis0SO14hSeLL3n2KG6wAkLg26XA525srVXQTr9hglK4Issm7pjX-gRpGl_mZrgxIssl81HAyD3hqUlPHLr-hIvJRajB1u7XmHwkbrd8Kv?width=3840&height=2001&cropmode=none"
            }
        ]
    },
    {
        path: "/Skyrim-TNE/Images",
        kind: "modern",
        template: "pages/skyrim-images",
        title: "Images",
        stylesheets: [...bootstrapStyles, ...skyrimStyles],
        bodyAttrs: 'class="app-body app-body--skyrim"',
        headScripts: bootstrapScripts,
        subnav: [
            { href: "/Skyrim-TNE/About", label: "About" },
            { href: "/Skyrim-TNE", label: "Overview" },
            { href: "/Skyrim-TNE/BeforeAndAfter", label: "Before & After" },
            { href: "/Skyrim-TNE/Videos", label: "Videos" }
        ],
        footerNav: mainNav,
        images: Object.values(skyrimImages).flatMap((entry) => entry.image)
    },
    {
        path: "/Skyrim-TNE/BeforeAndAfter",
        kind: "modern",
        template: "pages/skyrim-before-after",
        title: "Before & After",
        stylesheets: skyrimStyles,
        bodyAttrs: 'class="app-body app-body--skyrim"',
        subnav: [
            { href: "/Skyrim-TNE/About", label: "About" },
            { href: "/Skyrim-TNE/Images", label: "Images" },
            { href: "/Skyrim-TNE", label: "Overview" },
            { href: "/Skyrim-TNE/Videos", label: "Videos" }
        ],
        footerNav: mainNav,
        beforeImage: "https://chi01pap001files.storage.live.com/y4mef26caSoR6wkp9ShTALL-GHgDozruCjtu5vdzcA1KaFbaGp-kuibjZ2K4v4fx2f8UhD3b8DijQIXUal_c0n-9aUks7qki5vLjV_lJEeL35byFbQfMuY7L7Fa_cG1eerU40MxnKUOEXYSV9EinMPbxm2NRggkM6XlwzNl0YSx4AKGMdg528nYzAyaiKQ8Sc_b?width=3840&height=1974&cropmode=none",
        afterImage: "https://chi01pap001files.storage.live.com/y4mTKROuHYzK6NjEVWgF5iM7JJe0t4dtMbAJyL1przodqrnTedv4KsBfy-enpOzsQe09nZwiIeTkthdZKnShLH-baww_7VKgN4PSMohbiWX8t23OlAFqIN_rQQSvBFalugHNTmlmGePYW7a3RCchyin0CV000qp_Pt0bayqLQkaXmTTWZZsAEVhk4mLxg4K6JzT?width=3264&height=1684&cropmode=none",
        description: "To bring Skyrim up to today's standards, it was populated with thousands of new objects like trees, shrubs, underbrush, weapons, clothes, villages, cities, and dungeons, and its lighting was completely reworked to make the world truly look and feel alive."
    },
    {
        path: "/Skyrim-TNE/Videos",
        kind: "modern",
        template: "pages/skyrim-videos",
        title: "Videos",
        stylesheets: [...bootstrapStyles, ...skyrimStyles],
        bodyAttrs: 'class="app-body app-body--skyrim"',
        headScripts: bootstrapScripts,
        subnav: [
            { href: "/Skyrim-TNE/About", label: "About" },
            { href: "/Skyrim-TNE/Images", label: "Images" },
            { href: "/Skyrim-TNE/BeforeAndAfter", label: "Before & After" },
            { href: "/Skyrim-TNE", label: "Overview" }
        ],
        footerNav: mainNav,
        videos: [
            "https://www.youtube.com/embed/8jCSiCTI-jw",
            "https://www.youtube.com/embed/wylylex8kE4",
            "https://www.youtube.com/embed/--H0DhGT3DY"
        ]
    },
    {
        path: "/AI-Art",
        kind: "modern",
        template: "pages/ai-art",
        title: "AI Art",
        stylesheets: [],
        bodyAttrs: 'class="app-body app-body--simple"',
        primaryNav: [
            { href: "/", label: "Home" },
            { href: "/Portfolio", label: "Portfolio" }
        ]
    },
    { path: "/CHARS-Feasibility", kind: "legacy", template: "pages/legacy", source: "views/CHARS-Feas/CHARS-Feasibility.html" },
    { path: "/Shallow-Foundation-231-Cobourg", kind: "legacy", template: "pages/legacy", source: "views/231Cobourg/231Cobourg.html" },
    { path: "/CHARS-Design-Report", kind: "legacy", template: "pages/legacy", source: "views/CHARS-Des/CHARS-Design.html" },
    { path: "/Foundation-for-Tenth-Line", kind: "legacy", template: "pages/legacy", source: "views/TenthLine/TenthLine.html" },
    { path: "/Computer-Generated-Training-Data", kind: "legacy", template: "pages/legacy", source: "views/CGTD/CGTD.html" },
    { path: "/Parametric-Space", kind: "legacy", template: "pages/legacy", source: "views/ParametricSpace/ParametricSpace.html" },
    { path: "/WaveGAN", kind: "legacy", template: "pages/legacy", source: "views/WaveGAN/WaveGAN.html" },
    { path: "/Cryptocurrency-AI", kind: "legacy", template: "pages/legacy", source: "views/CryptoAI/CryptoAI.html" }
];

module.exports = {
    routes
};
