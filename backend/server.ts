import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo";
import contactRoutes from "./routes/contact";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);
app.use("/api/contact", contactRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});