
export class Requester{
    constructor(ip){
        const destination = "/api/jsonrpc"
        this.API_URL = ip + destination;
    }

    async connect(Request){
        let response = await fetch(this.API_URL,{
            method: "POST",
            headers: Request.getHttpHeader(),
            body: JSON.stringify(Request.getHttpBody())
        });
        return response.json();
    }
}