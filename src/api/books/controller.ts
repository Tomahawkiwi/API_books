import BookHandlers from "./interface";
import getAll from "./handlers/getAll";

const controller: BookHandlers = {
  getAll,
};

export default controller;
