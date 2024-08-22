"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDataSyntaxAnalyzer = void 0;
var InputDataSyntaxAnalyzer = /** @class */ (function () {
    function InputDataSyntaxAnalyzer() {
        this.crudInputAnalyzer = new CrudInputSyntaxAnalyzer();
        this.listInputAnalyzer = new ListingInputSyntaxAnalyzer();
    }
    InputDataSyntaxAnalyzer.prototype.isValidSyntax = function (input) {
        var _a = input.split(" "), root = _a[0], operationType = _a[1]; // example --> ["task-cli", "add"]
        if (root != 'task-cli') {
            return false;
        }
        var isCrudOperation = this.isCrudOperation(operationType);
        if (isCrudOperation) {
            var isValidCrud = this.crudInputAnalyzer.isValidCrudOperation(input);
            if (!isValidCrud) {
                return false;
            }
            return true;
        }
        else if (this.isListingOperation(operationType)) {
            return this.listInputAnalyzer.isValidListingOperation(input);
        }
        return false;
    };
    InputDataSyntaxAnalyzer.prototype.isCrudOperation = function (operationType) {
        switch (operationType) {
            case "add":
            case "delete":
            case "update":
                return true;
            default:
                return false;
        }
    };
    InputDataSyntaxAnalyzer.prototype.isListingOperation = function (operationType) {
        return operationType === "list";
    };
    return InputDataSyntaxAnalyzer;
}());
exports.InputDataSyntaxAnalyzer = InputDataSyntaxAnalyzer;
var CrudInputSyntaxAnalyzer = /** @class */ (function () {
    function CrudInputSyntaxAnalyzer() {
    }
    CrudInputSyntaxAnalyzer.prototype.isValidCrudOperation = function (input) {
        var splitedArr = input.split(" ");
        var operationType = splitedArr[1];
        switch (operationType) {
            case "add":
                return this.isValidAddOperation(input);
            case 'update':
                return this.isValidUpdateOperation(input);
            case "delete":
                return this.isValidDeleteOperation(input);
            default:
                return false;
        }
    };
    CrudInputSyntaxAnalyzer.prototype.isValidAddOperation = function (input) {
        var title = input.split(' ')[2];
        return Boolean(title) && typeof title === 'string';
    };
    ;
    CrudInputSyntaxAnalyzer.prototype.isValidUpdateOperation = function (input) {
        var _a = input.split(" "), root = _a[0], operationType = _a[1], id = _a[2], updateType = _a[3], value = _a[4];
        if (!id || !updateType || !value) {
            return false;
        }
        if (typeof +id != "number") {
            return false;
        }
        if (updateType != 'status' && updateType != 'title') {
            return false;
        }
        return true;
    };
    ;
    CrudInputSyntaxAnalyzer.prototype.isValidDeleteOperation = function (input) {
        var _a = input.split(" "), root = _a[0], operationType = _a[1], id = _a[2];
        if (!+id || typeof +id != 'number') {
            return false;
        }
        return true;
    };
    return CrudInputSyntaxAnalyzer;
}());
var ListingInputSyntaxAnalyzer = /** @class */ (function () {
    function ListingInputSyntaxAnalyzer() {
    }
    ListingInputSyntaxAnalyzer.prototype.isValidListingOperation = function (input) {
        var _a = input.split(" "), root = _a[0], list = _a[1], listOperationType = _a[2];
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
    };
    return ListingInputSyntaxAnalyzer;
}());
