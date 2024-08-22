"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.TaskService = void 0;
var path = __importStar(require("path"));
var dotenv = __importStar(require("dotenv"));
var progressStatus_1 = require("../model/progressStatus");
var fileService_1 = require("./fileService");
dotenv.config({ "path": path.resolve(".env") });
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.fileName = 'tasks.json';
        this.dirPath = String(process.env.Task_Storage_Dir_Path);
        this.fileService = new fileService_1.FileService(this.dirPath, this.fileName);
    }
    TaskService.prototype.getAllTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rawJson, parsedJson, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileService.readFile()];
                    case 1:
                        rawJson = _a.sent();
                        parsedJson = JSON.parse(rawJson);
                        return [2 /*return*/, parsedJson || null];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.save = function (tasks) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileService.writeFile(tasks)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getDoneTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, filteredTasks, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        filteredTasks = tasks.filter(function (task) { return task.status == progressStatus_1.taskStatus.done; });
                        return [2 /*return*/, filteredTasks || null];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getTodoTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, filteredTasks, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        filteredTasks = tasks.filter(function (task) { return task.status == progressStatus_1.taskStatus.todo; });
                        return [2 /*return*/, filteredTasks || null];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getInProgressTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, filteredTasks, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        filteredTasks = tasks.filter(function (task) { return task.status == progressStatus_1.taskStatus.inProgress; });
                        return [2 /*return*/, filteredTasks || null];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.addTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        tasks.push(task);
                        return [4 /*yield*/, this.save(tasks)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.updateTaskTitle = function (taskId, title) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, targetTask, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        targetTask = tasks.find(function (task) { return task.id = taskId; });
                        if (!targetTask) {
                            return [2 /*return*/, null];
                        }
                        targetTask.title = title;
                        return [4 /*yield*/, this.save(tasks)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.deleteTask = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, targetIndex, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        targetIndex = tasks.findIndex(function (task) { return taskId == task.id; });
                        if (targetIndex == -1) {
                            return [2 /*return*/, null];
                        }
                        tasks.splice(targetIndex, 1);
                        return [4 /*yield*/, this.save(tasks)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.updateTaskStatus = function (taskId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, targetTask, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (status < progressStatus_1.taskStatus["todo"] || status > progressStatus_1.taskStatus["done"]) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.getAllTasks()];
                    case 1:
                        tasks = _a.sent();
                        targetTask = tasks.find(function (task) { return task.id == taskId; });
                        if (!targetTask) {
                            return [2 /*return*/, null];
                        }
                        targetTask.status = status;
                        return [4 /*yield*/, this.save(tasks)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_9 = _a.sent();
                        console.log(error_9);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TaskService;
}());
exports.TaskService = TaskService;
