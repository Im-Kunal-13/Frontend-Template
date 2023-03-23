import React from "react"
import { motion } from "framer-motion"
import { github } from "../assets"
import SectionWrapper from "@hoc/SectionWrapper"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { StaticImageData } from "next/image"
import { Divider } from "@mui/material"

interface ProjectCardProps {
    index: number
    name: string
    description: string
    tags?: {
        name: string
        color: string
    }[]
    image?: StaticImageData
    source_code_link?: string
    deployed_links?: {
        label: string
        link: string
    }[]
    role?: string
}

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    deployed_links,
    role,
}: ProjectCardProps) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="flex flex-col items-center mt-10 md:flex-row">
            <img
                src={image?.src}
                alt="project_image"
                className="relative md:w-[450px] w-full h-[250px] rounded-xl shadow object-cover"
            />

            <div className="ml-2 mt-5 md:mt-0 md:ml-20">
                <h3 className="text-3xl font-semibold text-purple1">{name}</h3>
                <p className="text-secondary mt-3 md:max-w-[700px]">
                    {description}
                </p>
                {tags &&
                    tags.map((tag) => (
                        <span
                            className="inline-block bg-white1 text-primary rounded-full px-3 py-1 mt-2 mr-2"
                            key={tag.name}
                        >
                            {tag.name}
                        </span>
                    ))}
                {role && (
                    <p className="text-secondary mt-2">
                        <span className="text-purple1">Role: </span>
                        {role}
                    </p>
                )}

                <div className="flex mt-4 space-x-4">
                    {deployed_links &&
                        deployed_links.map((item) => (
                            <a
                                className="flex items-center px-5 py-2 border-2 rounded-lg fill-current stroke-current text-white hover:text-purple1 bg-purple1 border-purple1 hover:bg-transparent hover:text-neon transition-all duration-300"
                                href={item?.link}
                                rel="noreferrer"
                                target="_blank"
                                key={item?.label}
                            >
                                <svg
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                    <path
                                        d="M15 3H21V9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                    <path
                                        d="M10 14L21 3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                </svg>
                                <span className="ml-2">{item?.label}</span>
                            </a>
                        ))}
                </div>
            </div>
        </div>
    </motion.div>
)

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p
                    className={`"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider" `}
                >
                    My work
                </p>
                <div className="flex items-center gap-10">
                    <h2
                        className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
                    >
                        Projects
                    </h2>
                    <div className="bg-secondary h-[2px] w-[500px] rounded-full opacity-50 1024px:block hidden" />
                </div>
            </motion.div>

            <div className="mt- flex flex-col gap-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "works")
