import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    iit,
    nextjs,
    dexchange,
    solidity,
    hardhat,
    konnektr,
    dexchange_snap,
} from "@assets/index"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Blockchain Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
]

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Solidity",
        icon: solidity,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Hardhat",
        icon: hardhat,
    },
    {
        name: "git",
        icon: git,
    },
]

const experiences = [
    {
        title: "Web3 Developer",
        company_name: "Dexchange",
        icon: dexchange,
        iconBg: "#383E56",
        date: "Dec 2022 - Feb 2023",
        points: [
            "Developing and maintaining web3 application using Next.js and other related technologies.",
            "Collaborating with other blockchain developers",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Full stack Intern",
        company_name: "IIT KGP",
        icon: iit,
        iconBg: "#E6DEDD",
        date: "May 2022 - Dev 2022",
        points: [
            "Collaborating effectively with Machine Learning, Signal Processing, and an IoT team.",
            "Implementing  secure authentication linked in real-time to a Machine Learning and an IoT model.",
            "Developing and designing two interactive full-stack web applications",
            "Saving Costs and Time of the companies as now they can adequately monitor the data of their devices and models leading to reduced chances of failure.",
        ],
    },
]

const projects = [
    {
        name: "Konnektr",
        description:
            "Social Networking reimagined in web3 on @LensProtocol & chat @xmtp • Building the next-generation of social media.",
        tags: [
            {
                name: "web3",
                color: "green-text-gradient",
            },
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "lens protocol",
                color: "pink-text-gradient",
            },
            {
                name: "xmtp",
                color: "pink-text-gradient",
            },
        ],
        image: konnektr,
        source_code_link: "https://github.com/",
        deployed_links: [
            {
                label: "Testnet",
                link: "https://konnektr-chat-testnet.vercel.app/",
            },
            {
                label: "Mainnet",
                link: "https://chat-konnektr.vercel.app/",
            },
        ],
        role: "Full Stack Web3 Developer",
    },
    {
        name: "Dexchange",
        description:
            "Dexchange is a Decentralized Order Book DEX (Decentralized Exchange) on zk Rollups for Institutions",
        tags: [
            {
                name: "web3",
                color: "blue-text-gradient",
            },
            {
                name: "next.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: dexchange_snap,
        source_code_link: "https://dexchange-frontend-next.vercel.app/",
        deployed_links: [
            {
                label: "Visit",
                link: "https://dexchange-frontend-next.vercel.app/",
            },
        ],
        role: "Frontend Web3 Developer",
    },
]

export { services, technologies, experiences, projects }
