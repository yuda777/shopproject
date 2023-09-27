import { eq } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { usert } from "@/db/schema";
import { db } from "@/db";
import { ITask, IUser } from "./types/task";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/task`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/task/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/task/${id}`, {
    method: "DELETE",
  });
};

export async function getDataOrgStruct(): Promise<IUser[]> {
  const child = alias(usert, "ut");
  const parent = alias(usert, "ut2");
  const partdata = [
    {
      id: 1,
      parent: "",
      name: "CEO",
    },
    {
      id: 2,
      parent: "CEO",
      name: "Agent-001",
    },
    {
      id: 3,
      parent: "CEO",
      name: "Agent-002",
    },
  ];
  const cusers = await db
    .select({
      id: child.id,
      name: child.fullname,
      parent: parent.fullname,
    })
    .from(child)
    .leftJoin(parent, eq(child.parentId, parent.id));
  // console.log(partdata);
  return cusers;
}
