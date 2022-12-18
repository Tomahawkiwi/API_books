import { Collection } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../../interfaces/globalTypes";

export type TcollectionPostedBody = Omit<
  Collection,
  "id" | "createdAt" | "updatedAt"
>;

export interface CollectionHandler {
  getAll: RequestHandler<null, Collection[] | ResponseError, null, null>;
  getOne: RequestHandler<
    { id: string },
    Collection | ResponseError,
    null,
    null
  >;
  create: RequestHandler<
    null,
    Collection | ResponseError,
    TcollectionPostedBody,
    null
  >;
  update: RequestHandler<
    { id: string },
    Collection | ResponseError,
    TcollectionPostedBody,
    null
  >;
  delete: RequestHandler<
    { id: string },
    { message: string } | ResponseError,
    null,
    null
  >;
}
