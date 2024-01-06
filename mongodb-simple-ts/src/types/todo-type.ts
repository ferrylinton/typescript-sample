import { ObjectId } from "mongodb"

export type Todo = {
    _id?: ObjectId,
    task: string,
    done: boolean,
    createdAt: Date,
    updatedAt?: Date
}

export type UpdateTodo = {
    task?: string,
    done?: boolean
}