const projectName = document.querySelector('.project-name')
const project_info = document.querySelector('.project-info')
const project_link = document.querySelector('.project-link')
const project_image = document.querySelector('.project-image')
const projectImageAlt = document.querySelector('.projectImageAlt')


fetch("./portfolio.json")
.then((response)=>response.json())
//Turns JSON into info JS can use
.then(data=>{
    //Adds JSON response to "data" input
    // console.log(data.test)
    data.projects.forEach((project) => {


        // Title
        const a = document.createElement("a");
        const title = document.createTextNode(project.name);
        a.setAttribute('href', project.link);
        a.setAttribute('class', 'portfolio-links')
         a.appendChild(title);
        document.getElementById("portfolio-content").appendChild(a);

        // Description
        const p = document.createElement("p");
        const description = document.createTextNode(project.info);

        p.appendChild(description);
        document.getElementById("portfolio-content").appendChild(p);
        
       //Image
       const img = document.createElement('img');
       img.src =project.image;
       document.getElementById('portfolio-content').appendChild(img);

       //Break
       const br = document.createElement("br");

       document.getElementById("portfolio-content").appendChild(br);
       
    
    })    
})
