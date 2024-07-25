import { log } from "@repo/logger";
import { createServer } from "./server";
import connectDB from "./database";

const port = process.env.PORT || 5001;
const server = createServer();
connectDB();
server.listen(port, () => {
  log(`api running on ${port}`);
});

server.get('/',(req,res)=>{
  res.send('API ToDo running')
})