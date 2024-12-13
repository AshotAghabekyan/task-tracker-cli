import { Task } from "../model/task";
import { TaskService } from "./taskService"; 


export class CommandExecutor {
    private taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
    }


    public async executeCommand(input: string) {
        try {
            const [root, command, ...args] = input.split(" "); // example --> ["task-cli", "add", "task name"]
            let commandExecuteResult: any = null;
    
            switch(command) {
                case "add": 
                    commandExecuteResult = await this.addOperationHandler(args);
                    break;
    
                case "update": 
                    commandExecuteResult = await this.updateOperationHandler(args);
                    break;
    
                case 'delete': 
                    commandExecuteResult = await this.deleteOperationHandler(args);
                    break;
    
                case 'list': 
                    commandExecuteResult = await this.handleListOperation(args);
                    break;
    
                default:
                    throw new Error('invalid command type');
            }
            return commandExecuteResult
        }
        catch(error) {
            console.error(error);
            return null;
        }
    }


    private async addOperationHandler(args: string[]) {
        try {
            const title: string = args.join(" ");
            const task: Task = new Task(title);
            return await this.taskService.addTask(task);
        }
        catch(error) {
            console.error(error);
            return null
        }
    };


    private async updateOperationHandler(args: string[]) {
        try {
            const [id, updateType, ...value] = args;
            const parsedId = +id;
            if (updateType == "title") {
                return await this.taskService.updateTaskTitle(parsedId, value.join(" "));
            }
            else if (updateType == 'status') {
                return await this.taskService.updateTaskStatus(parsedId, +value)
            }
            else {
                return null;
            }
        }
        catch(error) {
            console.error(error);
            return null;
        }
        
    };


    private async deleteOperationHandler(args: string[]) {
        try {
            const id: number = +args.join("");
            return await this.taskService.deleteTask(id);
        }
        catch(error) {
            console.error(error);
            return null;
        }
    };


    private async handleListOperation(args: string[]) {
        try {
            let tasks: Task[] | null;
            const filter = args[0];  //done || inProgress || todo

            switch (filter) {
                case "done":
                    tasks = await this.taskService.getDoneTasks(); 
                    break;
                case "todo":
                    tasks = await this.taskService.getTodoTasks(); 
                    break;
                case "inProgress":
                    tasks = await this.taskService.getInProgressTasks(); 
                    break;
                default:
                    tasks = await this.taskService.getAllTasks()
            }
    
           return tasks;
        }
        catch(error) {
            console.error(error);
            return null;
        }
    }
}