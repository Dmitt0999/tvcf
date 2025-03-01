import {connect} from "cloudflare:sockets";

let pip="104.28.156.162";
let pp=443;
let remoteSocket=null;

export{
async fetch(request, env, ctx) {
try{
remoteSocket = connect({
            hostname: pip,
            port: pp
          });
console.log("connected");
}catch(e){
console.log("fail");
console.log(e);
}
}
}
