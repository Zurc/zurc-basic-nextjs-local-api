import { articles } from "../../../data";

export default function handler(req, res) {
  // serve the articles from our api
  res.status(200).json(articles);
}
