import { findUser } from "./UserModel.js";

let posts = [] 

// carregar posts para LocalStorage
export function init(){
    if(localStorage.posts){
        const tempPosts = JSON.parse(localStorage.posts)
        for (let post of posts){
            posts.push(new Post(post.title, post.tags, post.desc, post.imgs, post.userId))
        }
    } else {
        posts = [];
    }
}

// add post
export function add(title, tags, desc, imgs, userId){
    posts.push(new Post(title, tags, desc, imgs, userId));
    localStorage.setItem("posts", JSON.stringify(posts));
}

// removes post by postId, gotta make sure its either an admin or the user deleting the post
export function removePost(postId){
    posts = posts.filter((post)=> post.postId !== postId);
    localStorage.setItem("posts", JSON.stringify(posts));
}

// post details
export function setCurrentPost(postId){
    localStorage.setItem("post", postId)
}

// obter post atual
export function getCurrentPost() {
    return posts.find((post) => post.postId === localStorage.getItem("post"));
}

// get posts with filters
export function getPosts(filterTitle = "", filterTags = "") {
    let filteredPosts = posts.filter(
      (post) =>
        (post.title.toLowerCase().includes(filterTitle.toLowerCase()) ||
      filterTitle === "") &&
        (post.tags == filterTags || filterTags === "")
    );

    return filteredPosts;
}

// generates id for postId
function getNextPostId() {
    return posts.length > 0 ? posts.length + 1 : 1;
}
  



// Classe modelo Post
class Post {
    title = "";
    tags= "";
    desc = "";
    imgs = "";
    postId= "";
    userId = "";

    constructor(title, tags, desc, imgs, userId) {
        this.title = title;
        this.tags = tags;
        this.desc = desc;
        this.imgs = imgs;
        this.postId = getNextPostId();
        this.userId = userId;
      }
    
      get user() {
        return findUser(this.userId);
      }
}