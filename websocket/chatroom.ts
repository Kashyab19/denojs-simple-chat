import {WebSocket} from "https://deno.land/std/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";


let sockets = new Map<string,WebSocket>();

const chatConnection = async(ws:WebSocket) =>{
    console.log("Connected with Web Socket");
    //Add new web socket conn to the map

    const my_uid =  v4.generate();

    sockets.set(my_uid, ws);
    
    console.log(sockets)


}

export {chatConnection}