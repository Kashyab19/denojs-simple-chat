import { serve } from "https://deno.land/std/http/server.ts";

//Setting up server:

const server = serve({ port: 3010});
console.log("http://localhost:3010/")

for await (const req of server){
    if(req.url === "/"){
        req.respond({
            status : 200,
            body : await Deno.open("./public/index.html")
        })
    }
}


// //To run the app
// denon run --allow-net --allow-read app.ts