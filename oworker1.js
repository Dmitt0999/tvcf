// @ts-ignore
import { connect } from 'cloudflare:sockets';
 


export default {
	/**
	 * @param {import("@cloudflare/workers-types").Request} request
	 * @param {{UUID: string, พร็อกซีไอพี: string, DNS_RESOLVER_URL: string, NODE_ID: int, API_HOST: string, API_TOKEN: string}} env
	 * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		let pip="104.28.156.162";
		let pp=443;
		let remoteSocket=null;
		// uuid_validator(request);
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
	},
};
