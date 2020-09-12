import express, { Request, Response } from "express";
import { handleQuery } from "./services/queryProcessor";

const app = express();
const PORT = 80;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to use chatbot, I can answer your questions and do math problems for you"
  );
});

app.get("/chat", (req: Request, res: Response) => {
  const query = req.query.q as string;
  if (!query) {
    res.send(
      "Question not found, you can ask me question by set query parameter to q !"
    );
  } else {
    const a = handleQuery(query);
    res.send(`${a}`);
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
