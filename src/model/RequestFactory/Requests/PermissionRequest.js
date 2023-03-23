import { Request } from "./Request.js";


export class PermissionRequest extends Request{
    constructor(_requestParam,_id){
        super(_requestParam,_id);
        this.createHttpHeader();
        this.createHttpBody();
    }

    createHttpHeader(){
        super.httpHeader = {"Content-Type": "application/json",
                            "X-Auth-Token": this.requestParam.token};
    }

    createHttpBody(){
        super.httpBody =  { jsonrpc: "2.0",
                            id: this.id,
                            method: "Api.GetPermissions"};
    }

    getHttpHeader(){
        return this.httpHeader;
    }

    getHttpBody(){
        return this.httpBody;
    }
}