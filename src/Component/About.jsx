import React from 'react'
import "./About.css";
import { GrNotes } from "react-icons/gr";
import myPhoto from "../Image/Myphoto.jpg"
import Resume from 'D:/coding/FullStackProject/ReactFolio/portfolio/src/Image/NewResume.pdf'

const About = () => {
    return (
        <div id="About" className='w-[100vw] about py-0 pb-[4rem] flex flex-col md:max-w-[968px] justify-center items-center mx-auto pt-24'>
            <h2 className="text-4xl font-semibold">About Me</h2>
            <span className="text-xs mb-[4rem] mt-1">My introduction</span>

            <div className="about_container container grid gap-[1.5rem] w-full">
                <img src={myPhoto} alt='' className='about-img w-[350px] justify-self-center rounded-3xl' />

                <div className="">
                    <p className='mb-[2.5rem] w-full'>
                        Hello! I'm Amitkumar Singh, a dynamic 19+ year-old computer engineering student in my third year, eagerly stepping into the professional arena. My focus lies in full-stack web development and UI/UX design, and I am thrilled to channel my enthusiasm into a rewarding career. As a recent graduate, I bring a fresh perspective, a solid foundation in computer engineering, and an unwavering commitment to mastering the latest technologies. I am excited to contribute my skills and creativity to a dynamic workplace, where I can learn, grow, and make a meaningful impact. Ready to embark on this journey, I am actively seeking opportunities to apply my knowledge and passion for crafting exceptional digital experiences.
                    </p>

                    <a href={Resume} download={Resume}>
                        <button className='flex justify-center items-center mt-4 bg-p bg-purple-600 text-white px-3 py-3 rounded-md font-medium w-[120px] gap-2'>
                            Resume
                            <GrNotes />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
