"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandExecutor = void 0;
var task_1 = require("../model/task");
var taskService_1 = require("./taskService");
var CommandExecutor = /** @class */ (function () {
    function CommandExecutor() {
        this.taskService = new taskService_1.TaskService();
    }
    CommandExecutor.prototype.executeCommand = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, root, command, args, commandExecuteResult, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 11, , 12]);
                        _a = input.split(" "), root = _a[0], command = _a[1], args = _a.slice(2);
                        commandExecuteResult = null;
                        _b = command;
                        switch (_b) {
                            case "add": return [3 /*break*/, 1];
                            case "update": return [3 /*break*/, 3];
                            case 'delete': return [3 /*break*/, 5];
                            case 'list': return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 9];
                    case 1: return [4 /*yield*/, this.addOperationHandler(args)];
                    case 2:
                        commandExecuteResult = _c.sent();
                        return [3 /*break*/, 10];
                    case 3: return [4 /*yield*/, this.updateOperationHandler(args)];
                    case 4:
                        commandExecuteResult = _c.sent();
                        return [3 /*break*/, 10];
                    case 5: return [4 /*yield*/, this.deleteOperationHandler(args)];
                    case 6:
                        commandExecuteResult = _c.sent();
                        return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, this.handleListOperation(args)];
                    case 8:
                        commandExecuteResult = _c.sent();
                        return [3 /*break*/, 10];
                    case 9: throw new Error('invalid command type');
                    case 10: return [2 /*return*/, commandExecuteResult];
                    case 11:
                        error_1 = _c.sent();
                        console.error(error_1);
                        return [2 /*return*/, null];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    CommandExecutor.prototype.addOperationHandler = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var title, task, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        title = args.join(" ");
                        task = new task_1.Task(title);
                        return [4 /*yield*/, this.taskService.addTask(task)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CommandExecutor.prototype.updateOperationHandler = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var id, updateType, value, parsedId, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        id = args[0], updateType = args[1], value = args.slice(2);
                        parsedId = +id;
                        if (!(updateType == "title")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.taskService.updateTaskTitle(parsedId, value.join(" "))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!(updateType == 'status')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.taskService.updateTaskStatus(parsedId, +value)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, null];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CommandExecutor.prototype.deleteOperationHandler = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = +args.join("");
                        return [4 /*yield*/, this.taskService.deleteTask(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    CommandExecutor.prototype.handleListOperation = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, filter, _a, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        tasks = void 0;
                        filter = args[0];
                        _a = filter;
                        switch (_a) {
                            case "done": return [3 /*break*/, 1];
                            case "todo": return [3 /*break*/, 3];
                            case "inProgress": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.taskService.getDoneTasks()];
                    case 2:
                        tasks = _b.sent();
                        return [3 /*break*/, 9];
                    case 3: return [4 /*yield*/, this.taskService.getTodoTasks()];
                    case 4:
                        tasks = _b.sent();
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this.taskService.getInProgressTasks()];
                    case 6:
                        tasks = _b.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.taskService.getAllTasks()];
                    case 8:
                        tasks = _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/, tasks];
                    case 10:
                        error_5 = _b.sent();
                        console.error(error_5);
                        return [2 /*return*/, null];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return CommandExecutor;
}());
exports.CommandExecutor = CommandExecutor;
