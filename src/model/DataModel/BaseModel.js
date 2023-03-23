import { LoginHandler, RequestHandler } from "../RequestFactory/RequestHandler.js";
import { RequestParam } from "../RequestFactory/RequestParam.js";
import {UserData} from "./UserData.js";


export class BaseModel{

    constructor(){
        this.requestHandler = undefined;
        this.reqParam = new RequestParam();
        this.userData = new UserData();
        this.views = [];
    }   
    
    register(_view){
        this.views.push(_view);
    }

    deregister(_view){
        let index = this.views.findIndex((view) => {view === _view});
        this.views.splice(index, 1);
    }

    notify(){
        this.views.forEach(element => {
            element.update();
        });
    }

    async login(_username,_password){
        this.userData.setUsername(_username);
        this.requestHandler = new LoginHandler();
        this.reqParam.addUsername(_username);
        try{
            let token = await this.requestHandler.request();
            this.userData.setToken(token);
            this.reqParam.addToken(token);
            this.notify();
        }
        catch(e){

        }
    }




          
}
