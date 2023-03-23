import { Request } from "./Request.js";

export class LogoutRequest extends Request{
    constructor(requestParam,id){
        super(requestParam,id);
        this.createHttpHeader();
        this.createHttpBody();
    }

    createHttpHeader(){
        super.httpHeader = {"Content-Type": "application/json",
                            "X-Auth-Token": this.requestParam.token};
    }

    createHttpBody(){
        super.httpBody = { jsonrpc: "2.0",
                           id: this.id,
                           method: "Api.Logout"
                         }
    }

    getHttpHeader(){
        return this.httpHeader;
    }

    getHttpBody(){
        return this.httpBody;
    }
}