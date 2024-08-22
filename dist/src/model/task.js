"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(title) {
        this.status = 0;
        this.id = Date.now();
        this.title = title;
    }
    Task.idCount = 0;
    return Task;
}());
exports.Task = Task;
