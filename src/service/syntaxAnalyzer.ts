


export class InputDataSyntaxAnalyzer {
    private crudInputAnalyzer: CrudInputSyntaxAnalyzer
    private listInputAnalyzer: ListingInputSyntaxAnalyzer;

    constructor() {
        this.crudInputAnalyzer = new CrudInputSyntaxAnalyzer();
        this.listInputAnalyzer = new ListingInputSyntaxAnalyzer()
    }

    public isValidSyntax(input: string) {
        const [root, operationType] = input.split(" "); // example --> ["task-cli", "add"]
        if (root != 'task-cli') {
            return false;
        }


        const isCrudOperation = this.isCrudOperation(operationType);
        if (isCrudOperation) {
            const isValidCrud = this.crudInputAnalyzer.isValidCrudOperation(input);
            if (!isValidCrud) {
                return false;
            }
            return true;
        }


        else if (this.isListingOperation(operationType)) {
            return this.listInputAnalyzer.isValidListingOperation(input);
        }
        return false;
    }



    private isCrudOperation(operationType: string) {
        switch(operationType) {
            case "add":
            case "delete":
            case "update":
                return true;
            default: 
                return false;
        }
    }


    private isListingOperation(operationType: string) {
        return operationType === "list";
    }


}




class CrudInputSyntaxAnalyzer {

    public isValidCrudOperation(input: string) {
        const splitedArr = input.split(" "); 
        const operationType = splitedArr[1];
        switch(operationType) {
            case "add":
                return this.isValidAddOperation(input);
            case 'update':
                return this.isValidUpdateOperation(input)
            case "delete": 
                return this.isValidDeleteOperation(input);
            default:
                return false;
        }
    }


    private isValidAddOperation(input: string): boolean {
        const title = input.split(' ')[2];
        return Boolean(title) && typeof title === 'string';
    };


    private isValidUpdateOperation(input: string): boolean {
        const [root, operationType, id, updateType, value] = input.split(" ");
        if (!id || !updateType || !value) {
            return false;
        }

        if (typeof +id != "number") {
            return false
        }

        if (updateType != 'status' && updateType != 'title') {
            return false;
        }

        return true;
    };


    private isValidDeleteOperation(input: string): boolean {
        const [root, operationType, id] = input.split(" ");
        if (! +id || typeof +id != 'number') {
            return false;
        }
        return true;
    }
}




class ListingInputSyntaxAnalyzer {

    public isValidListingOperation(input: string) {
        const [root, list, listOperationType] = input.split(" "); 

        if (!list) {
            return false;
        }

        if (listOperationType == undefined) {
            return true;
        }

        if (listOperationType == 'todo') {
            return true;
        } 

        if (listOperationType == 'inProgress') {
            return true;
        }

        if (listOperationType == 'done') {
            return true;
        }
        return false;
    }
}



