import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const deleteBook: BookHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await prisma.book.delete({ where: { id } });
    res.status(200).json({
      message: `The book "${id}" has been deleted succesfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteBook;
