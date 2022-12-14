import { Router } from "express";
import books from "./books/routes";

const router = Router();

router.use("/books", books);

export default router;
