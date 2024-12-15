import { withDb } from "../database.js";

export const showBlogs = async (req, res) => {
  const name = req.query.other ?? "";
  const limit = parseInt(req.query.limit) ?? 10;
  const page = parseInt(req.query.page) ?? 1;
  withDb(async (db) => {
    try {
      const totalArticle = await db
        .collection("articles")
        .countDocuments({ name: { $ne: name } });
      const totlaPage = Math.ceil(totalArticle / limit);

      const articles = await db
        .collection("articles")
        .find(
          { name: { $ne: name } },
          {
            projection: { title: 1, _id: 0, thumbnail: 1, content: 1, name: 1 },
          }
        )
        .skip((page-1)*limit)
        .limit(limit)
        .toArray();
      if (articles) {
        res.status(200).json({
            data:articles,
            totalPage: totlaPage,
            totalArticle:totalArticle,
            current:page,
        });
      } else {
        res.status(500).json({ message: "error no articles found" });
      }
    } catch (error) {}
  }, res);
};
