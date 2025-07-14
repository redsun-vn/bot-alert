import { LarkSuitAlert } from "./utils/larksuit-bot";
async function main(): Promise<void> {
	const timestamp = String(Math.floor(Date.now() / 1000) + 100);
	const botLark = new LarkSuitAlert({
		webHookUrl: "",
		secretKey: "",
		timestamp: timestamp,
	});
	const res = await botLark.sendMessage("ApiGateway", "Error", "");
	console.log(res.data);
}

// Call the main function
main();
