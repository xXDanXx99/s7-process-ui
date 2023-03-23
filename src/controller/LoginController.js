import { BaseModel } from "../model/DataModel/BaseModel.js";


export class LoginController{

    constructor(){
        this.baseModel;
    }
    login(_username){
        this.baseModel.login()
    }
}