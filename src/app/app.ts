import { Interface, createInterface } from "readline/promises";
import { InputDataSyntaxAnalyzer } from "../service/syntaxAnalyzer";
import { CommandExecutor } from "../service/commandExecutor";

export class App {
    private inputSyntaxAnalyzer: InputDataSyntaxAnalyzer;
    private commandExecutor: CommandExecutor;

    constructor() {
        this.inputSyntaxAnalyzer = new InputDataSyntaxAnalyzer();
        this.commandExecutor = new CommandExecutor();
    }

    public async userInput() {
        console.log("Welcome to Task Tracker CLI!");
        const readlineInterface: Interface = createInterface(process.stdin, process.stdout);;
        readlineInterface.on("line", async (input: string) => {
            const isValidInput: boolean = this.inputSyntaxAnalyzer.isValidSyntax(input);
            if (!isValidInput) {
                console.log("invalid command");
            } else {
                const executionResult = await this.commandExecutor.executeCommand(input);
                console.table(executionResult)
            }
        })
    }
};


