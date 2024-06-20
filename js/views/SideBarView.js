import * as User from "../models/UserModel.js" 

function sidebarUser(){
    User.init();

     // CLICAR NO BOTÃO DE REGISTAR
     document
     .querySelector("#formRegister")
     ?.addEventListener("submit", (event) => {
       event.preventDefault();
       // Gestão do formulário de Registo
       const registerUsername = document.getElementById("usernameRegister");
       const registerPassword = document.getElementById("passwordRegister");
       const registerPassword2 = document.getElementById("passwordRegister2");
         if (registerPassword.value == registerPassword2.value) {
           User.add(registerUsername.value, registerPassword.value);
         }
       
     });
    
     // CLICAR NO BOTÃO DE LOGIN
    document.querySelector("#formLogin")?.addEventListener("submit", (event) => {
        event.preventDefault();
          User.login(document.getElementById("usernameLogin").value, document.getElementById("passwordLogin").value)
      });


}

sidebarUser();