import prisma from "../../../../prisma/client";
import { BookHandlers } from "../interface";

const createBook: BookHandlers["create"] = async (req, res) => {
  try {
    const { title, authorId, collectionName } = req.body;
    const newBook = await prisma.book.create({
      data: {
        title,
        author: { connect: { id: authorId } },
        collection: {
          connectOrCreate: {
            where: { name: collectionName },
            create: { name: collectionName },
          },
        },
      },
    });
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createBook;
