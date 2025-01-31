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

        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-item');

        // Title
        const a = document.createElement("a");
        const title = document.createTextNode(project.name);
        a.setAttribute('href', project.link);
        a.setAttribute('class', 'portfolio-links')
         a.appendChild(title);

        // Description
        const p = document.createElement("p");
        const description = document.createTextNode(project.info);
        p.appendChild(description);
        
       //Image
       const img = document.createElement('img');
       img.src =project.image;
       img.alt = project.alt|| "Project Image";
       img.setAttribute('class','project-image-json')

        // Create a container for the description and image, to be displayed on the second row
        const textAndImageContainer = document.createElement('div');
        textAndImageContainer.classList.add('text-and-image');

        // Append description and image to the textAndImageContainer
        textAndImageContainer.appendChild(p);
        textAndImageContainer.appendChild(img);

        // Append title (first row) and textAndImageContainer (second row) to the project container
        projectContainer.appendChild(a); // Title goes in the first row
        projectContainer.appendChild(textAndImageContainer); // Description and image in the second row

        // Append the project container to the portfolio content
        document.getElementById('portfolio-content').appendChild(projectContainer);
       
    
    })    
})


//contact form
document.querySelector('form').addEventListener('submit',handleSubmit)

function handleSubmit(e){
    console.log('Form is submitting')

    const nameInput = document.querySelector('#name').value
    const emailInput = document.querySelector('#email').value
    const commentsInput = document.querySelector('#comments').value

    if (
        nameInput.length === 0 || 
        emailInput.length === 0 ||
        commentsInput.length === 0)
        {
        document.querySelector('.error').classList.add('visible')
        e.preventDefault()
        console.log("Form Error")
    
   }
     
    }
