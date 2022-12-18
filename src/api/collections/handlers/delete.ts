import prisma from "../../../../prisma/client";
import { CollectionHandler } from "./../interface";

const deleteCollection: CollectionHandler["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCollection = await prisma.collection.delete({ where: { id } });
    res.status(500).json({
      message: `The collection ${deletedCollection.name} has been deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteCollection;
