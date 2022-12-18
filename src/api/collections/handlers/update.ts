import prisma from "../../../../prisma/client";
import { CollectionHandler } from "./../interface";

const updateCollection: CollectionHandler["update"] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedBook = await prisma.collection.update({
      where: { id },
      data: { name },
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateCollection;
