"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskStatus = void 0;
var taskStatus;
(function (taskStatus) {
    taskStatus[taskStatus["todo"] = 0] = "todo";
    taskStatus[taskStatus["inProgress"] = 1] = "inProgress";
    taskStatus[taskStatus["done"] = 2] = "done";
})(taskStatus = exports.taskStatus || (exports.taskStatus = {}));
