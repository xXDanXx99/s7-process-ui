import {Request} from "./Request.js";

export class LoginRequest extends Request{
    constructor(requestParam,id){
        super(requestParam,id);
        this.createHttpHeader();
        this.createHttpBody();
    }

    createHttpHeader(){
        super.httpHeader = {"Content-Type": "application/json"};
    }

    createHttpBody(){
        super.httpBody = { jsonrpc: "2.0",
                           id: this.id,
                           method: "Api.Login",
                           params: {
                                user: this.requestParam.getUserName(),
                                password: this.requestParam.getPassword()
                           }
                         }

    }

    getHttpHeader(){
        return this.httpHeader;
    }

    getHttpBody(){
        return this.httpBody;
    }
}
