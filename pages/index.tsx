import About from "@components/About"
import Experience from "@components/Experience"
import Hero from "@components/Hero"
import Navbar from "@components/Navbar"
import Tech from "@components/Tech"
import type { NextPage } from "next"
import Works from "@components/Works"
import Contact from "@components/Contact"
import Head from "next/head"

const Home: NextPage = () => {
    return (
        <div className="relative z-0 bg-primary">
            <Head>
                <title>Kunal</title>
            </Head>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0 h-full pb-10">
                <Contact />
            </div>
        </div>
    )
}

export default Home
