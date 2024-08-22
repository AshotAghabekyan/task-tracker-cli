import * as fs from "fs";
import * as path from "path";



export class FileService {
    private readonly filePath: string;

    constructor(dirPath: string, fileName: string) {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        this.filePath = path.resolve(dirPath, fileName);

        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify([]), "utf-8");
        }
    }

    public async readFile(): Promise<string> {
        try {
            const rawData = await fs.promises.readFile(this.filePath, "utf-8");
            return rawData;
        } catch (error) {
            console.log("Error reading file:", error);
            return "";
        }
    }

    public async writeFile(data: any[]): Promise<void> {
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
        } catch (error) {
            console.error("Error writing file:", error);
        }
    }
}
