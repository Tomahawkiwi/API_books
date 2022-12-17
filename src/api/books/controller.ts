import { BookHandlers } from "./interface";
import getAll from "./handlers/getAll";
import getOne from "./handlers/getOne";
import create from "./handlers/create";
import update from "./handlers/update";
import delete_ from "./handlers/delete";

const controller: BookHandlers = {
  getAll,
  getOne,
  create,
  update,
  delete: delete_,
};

export default controller;
