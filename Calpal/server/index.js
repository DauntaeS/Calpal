(async () => {
  const express = (await import("express")).default;
  const cors = (await import("cors")).default;
  const mongoose = (await import("mongoose")).default;
  const authRoutes = (await import("./routes/auth.js")).default;

  const app = express();

  mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB CONNECTION ERROR: ", err));

  // middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // route middlewares
  app.use("/api", authRoutes);

  app.listen(8000, () => console.log("Server running on port 8000"));
})();
