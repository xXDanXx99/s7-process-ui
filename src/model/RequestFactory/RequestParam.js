

export class RequestParam{
    
    constructor(){
        this.token = undefined;
        this.username = undefined;
        this.password = undefined;
        this.variables = [];
    }

    addToken(_token){
        this.token = _token; 
    }

    addUsername(_username){
        this.username = _username;
    }

    addPassword(_password){
        this.password = _password;
    }

    addVariable(_variable){
        this.variables.push(_variable);
    }

    removeVariables(_variable){
        if (typeof(_variable) === 'string'){
            this.variables.splice(this.variables.findIndex((element) => {return element === _variable}),1);
        }
        else if (typeof(_variable) === typeof(this.variables)) {
            this.variables.splice(this.variables.findIndex((element) => {return element === _variable}),_variable.length);
        };
    }
}