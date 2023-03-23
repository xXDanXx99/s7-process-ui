
export class Request{
    constructor(requestParam, id){
        this.httpHeader = undefined;
        this.requestParam = requestParam;
        this.httpBody = undefined;
        this.id = id;
    }
    createHttpHeader(){};
    createHttpBody(){};
    getHttpHeader(){
        return this.httpHeader;
    };
    getHttpBody(){
        return this.httpBody;
    };
}