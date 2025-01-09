import Tags from "./Tags";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            company: "Walmart Global Tech",
            dates: "Starting June 2025",
            title: "Incoming Software Engineering Intern",
            description: 
            `
            Incoming full-stack software engineering intern at Walmart Global Tech, with focus on building user-centric solutions at scale.
            `,
            tags: []
        },
        {
            id: 2,
            company: "Northwestern Univ.",
            dates: "Sept 2024 - Dec 2024",
            title: "Teaching Assistant",
            description: 
            `
            Taught students the basics of functional and imperative programming through 
            weekly office hours and tutorial sessions for CS 111: Fundamentals of Computer Programming. Led small-group discussions on 
            topics surrounding ethics in technology such as accessibility, identity, and accountability.
            `,
            tags: ["Racket"]
        },
        {
            id: 3,
            company: "PrizeSole",
            dates: "June 2024 - Aug 2024",
            title: "Software Engineering Intern",
            description: 
            `
            Developed iOS app with team of 4 from the ground up for e-commerce start-up using Swift and SwiftUI. 
            Designed UI from scratch using Figma, continuously iterated on design to optimize functionality and improve user flow.
            Coordinated Git version control with team to collaborate smoothly on the implementation of new features.

            `,
            tags: ["Swift", "SwiftUI", "Git", "GitHub"]
        },
        {
            id: 4,
            company: "Lumos Debate",
            dates: "July 2021 - Aug 2024",
            title: "Director",
            description: 
            `
            Managed teams of 8+ instructors in sessions enrolling 40+ students, communicated with parents and rental contacts.
            Delivered quality student experience rated on average 9.1/10 by adapting curriculum via daily meetings with instructors.
            Evaluated and addressed students’ strengths/weaknesses, wrote450-600 word progress reports to parents for each student.

            `,
            tags: ["Team Management", "Communication"]
        },
    ]

    return (
        <div id="experience" className="page-content">
            <div className="title-wrapper w-[230px]">
                <div className="title-bg"></div>
                <div className="page-title">Experience</div>
            </div>
            <div>
                {experiences.map((experience) => (
                    <ExperienceCard 
                        id={experience.id}
                        company={experience.company} 
                        dates={experience.dates}
                        title={experience.title}
                        description={experience.description}
                        tags={experience.tags}
                        />
                ))}
            </div>
            <div className="group flex items-center font-bolditalicbody pt-[20px] gap-[5px]">
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">View my full resume</a>
                <div className="transform transition-all duration-500 group-hover:translate-x-1">→</div>
            </div>
            
            <div id="underline" className="h-[1px] w-[160px] bg-dark-blue"></div>
        </div>
    );
}

function ExperienceCard(props) {
    return (
        <div className="flex gap-[32px] w-[900px]">
            <div id="timeline" className="w-[200px] flex-shrink-0 bg-med-purple p-[15px]">
                <div className="font-bolditalicbody">{props.company}</div>
                <div className="font-italicbody">{props.dates}</div>
            </div>
            <div id="details" className="py-[8px]">
                <div className="font-title text-[24px]">{props.title}</div>
                <div className="pt-[10px] pb-[17px]">{props.description}</div>
                <div className="mb-[30px]">
                    <Tags tags={props.tags} />
                </div>
            </div>
        </div>
    );
}