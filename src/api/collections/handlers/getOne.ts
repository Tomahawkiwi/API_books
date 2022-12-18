import prisma from "../../../../prisma/client";
import { CollectionHandler } from "./../interface";

const getOneCollection: CollectionHandler["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await prisma.collection.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneCollection;
