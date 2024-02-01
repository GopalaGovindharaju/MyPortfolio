const listOfProjects = [{
    title: "Manufacturing ERP",
    source: "https://github.com/GopalaGovindharaju/MPERP",
    view: "https://gopalagovindharaju.github.io/MPERP/",
    abstract: "Manufacturing ERP (Enterprise Resource Planning) web application, designed to optimize manufacturing processes. It integrates various business processes into centralized system, that facilitates efficient management of the manufacturing process."
},]

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
    skilName: "Mobile App Development",
    description: "Embark on an enchanting journey into the world of mobile app development guided by my mastery in Android Studio. As an alchemist in the realm of app creation, I seamlessly blend creativity, functionality, and user experience to craft captivating and feature-rich Android applications.",
    img: "images/mobile.png"
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
        projectHtml += `<div class="skill-list-items"><div class="skill-list-items-text">
        <h5>${skilName}</h5><p>${description}</p>
        </div><div class="skill-list-items-image">
        <img src="${img}" alt="">
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
