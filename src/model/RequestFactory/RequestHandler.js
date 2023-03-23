import { RequestParam } from "./RequestParam.js";
import { LoginRequest } from "./Requests/LoginRequest.js";
import { LogoutRequest } from "./Requests/LoginRequest.js";
import { Requester } from "./Requester.js";

export class RequestHandler{
    constructor(){
        this.requester = new Requester();
    }
    createRequest(_requestParam,_id){};
    request(_requestParam,_id){};
    getResult();
}

export class LoginHandler extends RequestHandler{
    createRequest(_requestParam, _id, _mode){
        let logRequest; 
        switch (_mode) {
            case "login":
                logRequest = new LoginRequest(_requestParam,_id);
                break;
            case "logout":
                logRequest = new LogoutRequest(_requestParam,_id);
        }
        return logRequest;
    }

    async request(_requestParam,_id,_mode){
        let request = this.createRequest(_requestParam,_id,_mode);
        let response = await this.requester.connect(request);
        if(response.token !== undefined){
            return token;
        }
        else{
            //TO-DO: Errorhandling
        }
    }
}

export class PermissionHandler extends RequestHandler{
    createRequest(_requestParam,_id,_mode){
        return new PermissionRequest(_requestParam,_id);
    }

    async request(_requestParam,_id){
        let request = this.createRequest(_requestParam,_id);
        let response = await this.requester.connect(request);
        return response;
    }
}