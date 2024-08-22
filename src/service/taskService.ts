import * as fs from "fs";
import * as path from 'path';
import * as dotenv from "dotenv";
import {Task} from "../model/task"
import { taskStatus } from "../model/progressStatus";
import { FileService } from "./fileService";

dotenv.config({"path": path.resolve(".env")})




export class TaskService {
    private fileService: FileService;
    private readonly dirPath: string
    private readonly fileName: string = 'tasks.json';

    constructor() {
        this.dirPath = String(process.env.Task_Storage_Dir_Path);
        this.fileService = new FileService(this.dirPath, this.fileName);
    }


    public async getAllTasks() {
        try {
            const rawJson: string = await this.fileService.readFile()
            const parsedJson = JSON.parse(rawJson);
            return parsedJson || null;
        }
        catch(error) {
            console.log(error);
            return null
        }
    }


    private async save(tasks: Task[]) {
        try {
            await this.fileService.writeFile(tasks);
        }
        catch(error) {
            console.log(error);
            return null
        }
    }

    public async getDoneTasks() {
        try {
            const tasks: Task[] = await this.getAllTasks();
            const filteredTasks: Task[] =  tasks.filter((task: Task) => task.status == taskStatus.done)
            return filteredTasks || null;
        }
        catch(error) {
            console.log(error);
            return null
        }
    }

    public async getTodoTasks() {
        try {
            const tasks: Task[] = await this.getAllTasks();
            const filteredTasks: Task[] = tasks.filter((task: Task) => task.status == taskStatus.todo);
            return filteredTasks || null
        }
        catch(error) {
            console.log(error);
            return null
        }
    }

    public async getInProgressTasks() {
        try {
            const tasks: Task[] = await this.getAllTasks();
            const filteredTasks: Task[] = tasks.filter((task: Task) => task.status == taskStatus.inProgress)
            return filteredTasks || null
        }
        catch(error) {
            console.log(error);
            return null
        }
    }

    public async addTask(task: Task) {
        try {
            const tasks: Task[] = await this.getAllTasks();
            tasks.push(task);
            await this.save(tasks);
            return true;
        }
        catch(error) {
            console.log(error);
            return null
        }
    }


    public async updateTaskTitle(taskId: number, title: string) {
        try {
            const tasks: Task[] = await this.getAllTasks();
            const targetTask = tasks.find((task: Task) => task.id = taskId);
            if (!targetTask) {
                return null;
            }
            targetTask.title = title;
            await this.save(tasks);
            return true;
        }
        catch(error) {
            console.log(error);
            return null
        }
    }


    public async deleteTask(taskId: number) {
        try {
            const tasks: Task[] = await this.getAllTasks();
            const targetIndex = tasks.findIndex((task: Task) => taskId == task.id);
            if (targetIndex == -1) {
                return null;
            }
    
            tasks.splice(targetIndex, 1);
            await this.save(tasks);
            return true;
        }
        catch(error) {
            console.log(error);
            return null
        }
    }


    public async updateTaskStatus(taskId: number, status: number) {
        try {
            if (status < taskStatus["todo"] || status > taskStatus["done"]) {
                return null;
            }
    
            const tasks: Task[] = await this.getAllTasks();
            const targetTask = tasks.find((task: Task) => task.id == taskId);
            if (!targetTask) {
                return null;
            }
    
            targetTask.status = status;
            await this.save(tasks);
            return true;
        }
        catch(error) {
            console.log(error);
            return null
        }
    }
}

