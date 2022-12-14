import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../../interfaces/globalTypes";

export type TpostedBook = Omit<
  Book,
  "id" | "createdAt" | "updatedAt" | "collectionID"
> & { collectionName: string };

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, TpostedBook>;
}
