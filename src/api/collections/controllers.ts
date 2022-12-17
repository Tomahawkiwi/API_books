import { CollectionHandler } from "./interface";
import getAll from "./handlers/getAll";

const controller: CollectionHandler = {
  getAll,
};

export default controller;
