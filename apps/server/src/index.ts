import { log } from "@repo/logger";
import { createServer } from "./server";
import connectDB from "./database";

const port = process.env.PORT || 5001;
const server = createServer();
const categoryRoutes = require('./routes/category')
const taskRoutes = require('./routes/task')

connectDB();
server.use(categoryRoutes)
server.use(taskRoutes)

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.get('/',(req,res)=>{
  res.send()
})