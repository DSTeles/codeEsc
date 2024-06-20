import * as User from "../models/UserModel.js";

function addProfileView(){
    User.init();
    if (User.isLogged()){
        const user = User.getUserLogged();
        document.querySelector("#userName").innerHTML = user.username;
        // document.querySelector("#userPicture").innerHTML = user.userpic;


        // profile.html
        document.getElementById("profileusername").innerHTML = user.username;
        document.getElementById("profileemail").innerHTML = user.email;
    }

}

addProfileView();

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener('click', User.logout());