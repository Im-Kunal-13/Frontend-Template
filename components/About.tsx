import React from "react"
import { motion } from "framer-motion"
import { services } from "@constants/index"
import SectionWrapper from "@hoc/SectionWrapper"
import { fadeIn, textVariant } from "@utils/motion"
import { StaticImageData } from "next/image"

interface Props {
    index: number
    title: string
    icon: StaticImageData
}

const ServiceCard = ({ index, title, icon }: Props) => (
    <div className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-500">
                <img
                    src={icon.src}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </div>
)

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Introduction
                </p>
                <div className="flex items-center gap-10">
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Overview
                    </h2>
                    <div className="bg-secondary h-[2px] w-[500px] rounded-full opacity-50" />
                </div>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                As a proficient web3 developer, I excel in using cutting-edge
                technologies such as React, Next, Node.js, Hardhat, Solidity and
                more. With a passion for learning and a collaborative mindset, I
                strive to create innovative and effective solutions that solve
                real-world challenges. Let's work together to transform your
                vision into reality!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")
