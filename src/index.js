require("dotenv").config();
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

const pool = require("./config/db");

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("car Auction backend is running");
});


app.get("/test-db", async (req,res)=> {
  try{
    const result= await pool.query("SELECT NOW()");
    res.json({
      message:"Database connected",
      time:result.rows[0],
    });
  }catch(error){
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection error" });
  }
})





const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});