import { View } from "./View.js";

class LoginView extends View{
    constructor(_controller,_model){
        super();
        this.loginController = _controller;
        this.model = _model;
        this.html = '<div class="LoginView" id="LoginView">\
                     <div class="LoginViewImagecontainer">\
                     <img width="100%" height="100%" src="https://assets.new.siemens.com/siemens/assets/api/uuid:d02ffdabe9347b7309a298cd6052c3f53639d41a/width:1125/crop:0:0,20388:1:0,62136/quality:high/6940-tia-portal-advanced-controller-151105-01-cmyk.jpg">\
                     </div>\
                     <div class="LoginViewInput">\
                     <h1 class="LoginViewInputHeading">Login to PLC</h1>\
                     <label id="LoginViewInputLabelUsername" for="UsernameInput" class="LoginViewInputLabel" >Username</label>\
                     <input type="text" class="LoginViewInputTextfield" id="LoginViewInputTextfieldUsername" placeholder="Username">\
                     <label id="LoginViewInputLabelPassword" for="PasswordInput" class="LoginViewInputLabel">Password</label>\
                     <input type="text" class="LoginViewInputTextfield" id="LoginViewInputTextfieldPassword" placeholder="Password">\
                     <button class="LoginViewInputButton" id="LoginViewInputButtonSubmit">Login</button>\
                     </div>\
                     </div>';
    }

    render(_context){
        console.log(this.html);
        _context.innerHTML = this.html; 
    }

    disappear(_context){
        let view = document.getElementById("LoginView");
        document.removeChild(view);
    }

}

let Log = new LoginView();
Log.render(document.getElementById("BaseContainer"));