import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../../interfaces/globalTypes";

export type TpostedBodyBook = Omit<
  Book,
  "id" | "createdAt" | "updatedAt" | "collectionID"
> & { collectionName: string };

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, TpostedBodyBook>;
  update: RequestHandler<{ id: string }, Book | ResponseError, TpostedBodyBook>;
  delete: RequestHandler<
    { id: string },
    { message: string } | ResponseError,
    null
  >;
}
