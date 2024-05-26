import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://miukarnain:QOl3sPQcFb6ZZT7L@personalfinancetracker.pgj0eae.mongodb.net/?retryWrites=true&w=majority&appName=PersonalFinanceTracker";

mongoose.connect(mongoURI)
    .then(() => console.log("Connected MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB: ", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});