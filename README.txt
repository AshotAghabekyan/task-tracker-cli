

////Task tracker is a project used to track and manage your tasks\\\
****the idea of the project was taken from https://roadmap.sh/projects/task-tracker

**** HOW TO USE *** 

Run `task-tracker.sh` script in terminal

    *ADD task --- task-cli add 'task_name'
    *UPDATE task title --- task-cli update ${id} ${newTitle} (typeof string)
    *UPDATE task status --- task-cli update ${id} status ${statusCode} (0 | 1 | 2) 
    *DELETE task --- task-cli delete ${id}


    *Listing All tasks --- task-cli list
    *Listing todo tasks --- task-cli list todo
    *Listing inProgress tasks --- task-cli list inProgress
    *Listing done tasks --- task-cli list done