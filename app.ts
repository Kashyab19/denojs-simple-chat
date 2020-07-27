import { serve } from "https://deno.land/std/http/server.ts";

import {
    acceptWebSocket,
    isWebSocketCloseEvent,
    isWebSocketPingEvent,
    WebSocket,
    acceptable
  } from "https://deno.land/std/ws/mod.ts";

import {chatConnection} from  "./websocket/chatroom.ts"

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

    //Accept WebSocket:
    if(req.url === "/ws"){
        if(acceptable(req)){
            acceptWebSocket({
                conn:req.conn,
                bufReader:req.r,
                bufWriter:req.w,
                headers:req.headers,
            })
            .then(chatConnection)
        }
    }
}


// //To run the app
// denon run --allow-net --allow-read app.ts