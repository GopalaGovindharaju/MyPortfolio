const listOfProjects = [{
    title: "Glamazon",
    source: "https://github.com/GopalaGovindharaju/Glamazon",
    view: "https://gopalagovindharaju.github.io/Glamazon/",
    abstract: "AI-empowered Grooming Web App: Our AI-driven web app allows users to preview personalized grooming styles, including hairstyles, hair colors, lip shades, and eyebrows, ensuring a tailored and satisfying virtual makeover experience."
},
    {
    title: "Manufacturing ERP",
    source: "https://github.com/GopalaGovindharaju/MPERP",
    view: "https://gopalagovindharaju.github.io/MPERP/",
    abstract: "Manufacturing ERP (Enterprise Resource Planning) web application, designed to optimize manufacturing processes. It integrates various business processes into centralized system, that facilitates efficient management of the manufacturing process."
},
{
    title: "Project Management System",
    source: "https://github.com/GopalaGovindharaju/PMGMT",
    view: "https://gopalagovindharaju.github.io/PMGMT/",
    abstract: "College Project Tracker: A user-friendly system empowering staff to monitor student project progress. Streamlining collaboration, it offers a comprehensive overview, enhancing administrative insights for efficient project management."
},
]

const listOfSkills = [{
    skilName: "Full Stack",
    description: "Embark on a journey into the realm of Full Stack Web Development with my mastery in React and Django. Bringing together the dynamic frontend capabilities of React with the robust backend prowess of Django, I craft seamless and powerful web solutions.",
    img: "images/RADstack.png"
},
{
    skilName: "Programming Languages",
    description: "Embark on a journey through the dynamic landscapes of programming with my dual mastery in Python and Java. These two versatile languages serve as my toolkit for crafting powerful and efficient solutions across various domains.",
    img: "images/pythonjava.png"
},
{
    skilName: "Version Control System",
    description: "Embark on a version control journey guided by my mastery in Git and GitHub. These indispensable tools are the keystones of my approach to managing code, fostering collaboration, and ensuring the seamless evolution of software projects.",
    img: "images/git.png"
},
{
    skilName: "Data Base",
    description: "Embark on a data-driven journey with my mastery in PostgreSQL, where databases transform into powerful engines that drive the backbone of applications. As a data architect, I orchestrate the design, optimization, and management of PostgreSQL databases to ensure robust, scalable, and efficient storage solutions.",
    img: "images/sql.png"
},]

function renderSkills() {
    let projectHtml = '';
    for(let i = 0; i < listOfSkills.length; i++){
        const skillObjcts = listOfSkills[i];
        const { skilName, description, img} = skillObjcts;
        projectHtml += `<div class="skill-list-items" style="background-image: url(${img});"><div class="skill-list-items-text">
        <h5>${skilName}</h5><p>${description}</p>
        </div>  
        </div>`; 
    }
    document.querySelector(".skill-list").innerHTML = projectHtml;
}

document.addEventListener('DOMContentLoaded', function () {
    renderSkills();
});

function renderProjects() {
    let projectHtml = '';
    for(let i = 0; i < listOfProjects.length; i++){
        const projectObjcts = listOfProjects[i];
        const { title, source, view, abstract} = projectObjcts;
        projectHtml += `<div class="project-list-items"><h5>${title}</h5><p>${abstract}</p><div><button><a href="${view}" target="_blank">View Page</a></button><button><a href="${source}" target="_blank">Source</a></button></div></div>`; 
    }
    document.querySelector(".project-list").innerHTML = projectHtml;
}

document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
});

function projectScroller() {
    const projectList = document.querySelector(".project-list");
    if (projectList) {
        const totalScrollWidth = projectList.scrollWidth - projectList.clientWidth;
        const percentageTolerance = 1;

        const tolerance = (percentageTolerance / 100) * totalScrollWidth;
        const isAtEnd = Math.abs(projectList.scrollLeft - totalScrollWidth) <= tolerance;

        console.log(isAtEnd, projectList.scrollLeft, totalScrollWidth);

        if (isAtEnd) {
            projectList.scrollBy({
                left: -totalScrollWidth,
                behavior: 'smooth',
            });
            document.querySelector(".scroll-btn").innerHTML = '&rarr;';
        } else {
            projectList.scrollBy({
                left: totalScrollWidth,
                behavior: 'smooth'
            });
            document.querySelector(".scroll-btn").innerHTML = '&larr;';
        }
    }
}


function navigateToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
