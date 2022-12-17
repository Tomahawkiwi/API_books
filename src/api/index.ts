import { Router } from "express";
import books from "./books/routes";
import collections from "./collections/routes";

const router = Router();

router.use("/books", books);
router.use("/collections", collections);

export default router;
