const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getItems = async (req, res) => {
  try {
    const items = await prisma.items.findMany();
    res.json(items);
  } catch (error) {
    console.log(error);
  }
};

const createItem = async (req, res) => {
  try {
    const { content, completed } = req.body;
    if (!content) {
      res.sendStatus(400);
    } else {
      const item = await prisma.items.create({
        data: {
          content,
          completed,
        },
      });
      res.json(item).status(204);
    }
  } catch (error) {
    console.log("error");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.body;

    const updateItem = await prisma.items.update({
      where: {
        id: id,
      },
      data: {
        completed: true,
      },
    });
    res.json(updateItem).status(204);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getItems,
  createItem,
  updateItem,
};
