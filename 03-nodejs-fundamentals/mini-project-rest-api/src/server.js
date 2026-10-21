import express from "express";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import articleRoutes from "./routes/articles.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.use("/articles", articleRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "REST API Artikel berjalan"
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});