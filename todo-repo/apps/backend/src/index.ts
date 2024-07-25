import { log } from "@repo/logger";
import { createServer } from "./server";

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

server.get('/',(req,res)=>{
  res.send('API ToDo running')
})