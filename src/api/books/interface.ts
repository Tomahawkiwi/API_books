import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../../interfaces/globalTypes";

interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null>;
}

export default BookHandlers;
