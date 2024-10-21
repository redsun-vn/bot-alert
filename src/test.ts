import { LarkSuitAlert } from './utils/larksuit-bot';
async function main(): Promise<void> {
    const timestamp = String(Math.floor(Date.now() / 1000) + 100);
	const botLark = new LarkSuitAlert({
        webHookUrl: 'https://open.larksuite.com/open-apis/bot/v2/hook/4d5756a5-f6ae-42aa-bd70-adca81754a42',
        secretKey: 'PeJN1bdUHOllBjwyzh3qxc',
        timestamp: timestamp
    });    
    const res = await botLark.sendMessage('ApiGateway', 'Error', '');
    console.log(res.data)
}

// Call the main function
main();