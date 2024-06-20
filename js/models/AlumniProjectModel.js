import { findUser } from "./UserModel.js";

let projects = [] 

// carregar posts para LocalStorage
export function init(){
    if(localStorage.projects){
        const tempProject = JSON.parse(localStorage.projects)
        for (project in projects){
            projects.push(new Project(project.title, project.tags, project.desc, project.imgs, project.userId))
        }
    } else {
        projects = [];
    }
}

// add project
export function add(title, tags, desc, imgs, userId){
    projects.push(new Project(title, tags, desc, imgs, userId));
    localStorage.setItem("projects", JSON.stringify(projects));
}

// removes project by projectId, gotta make postId and make sure its either an admin or the user deleting the post
export function removeProject(projectId){
    projects = projects.filter((project)=> project.projectId !== projectId);
    localStorage.setItem("projects", JSON.stringify(projects));
}


// post details
export function setCurrentProject(projectId){
    localStorage.setItem("project", projectId)
}

// obter projeto atual
export function getCurrentPost() {
    return projects.find((project) => project.project === localStorage.getItem("project"));
}

// template has order bands, not doing it for posts bc it makes no sense

// get posts with filters
export function getProjects(filterTitle = "", filterTags = "") {
    // wtf did i do here why isnt this working
    let filteredProjects = projects.filter(
      (project) =>
        (project.title.toLowerCase().includes(filterTitle.toLowerCase()) ||
      filterTitle === "") &&
        (project.tags == filterTags || filterTags === "")
    );

   
    return filteredProjects;
}

// generates id for postId
function getNextProjectId() {
    return projects.length > 0 ? projects.length + 1 : 1;
}
  



// Classe modelo Post
class Project {
    title = "";
    tags= "";
    desc = "";
    imgs = "";
    projectId= "";
    userId = "";

    constructor(title, tags, desc, imgs, userId) {
        this.title = title;
        this.tags = tags;
        this.desc = desc;
        this.imgs = imgs;
        this.projectId = getNextProjectId();
        this.userId = userId;
      }
    
      get user() {
        return findUser(this.userId);
      }
}