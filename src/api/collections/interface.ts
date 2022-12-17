import { Collection } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../../interfaces/globalTypes";

export interface CollectionHandler {
  getAll: RequestHandler<null, Collection[] | ResponseError, null>;
}
