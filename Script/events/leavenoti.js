module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "𝐒𝐇𝐈𝐙𝐔𝐊𝐀_𝐁𝐎𝐓_🐼🪽",
	description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif", "randomgif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Dhaka").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave" : "managed";
	const path = join(__dirname, "events", "123.mp4");
	const pathGif = join(path, `${threadID}123.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "╭═════⊹⊱✫⊰⊹═════╮ \n ⚠️ @𝐍𝐎𝐓𝐈𝐂𝐄⚠️\n╰═════⊹⊱✫⊰⊹═════╯\n\n{session}||{name} 𝐁𝐑𝐎/𝐒𝐈𝐒...\n𝐀𝐛𝐡𝐢 𝐚𝐛𝐡𝐢 𝐠𝐫𝐨𝐮𝐩 𝐬𝐞 𝐚𝐤 𝐦𝐞𝐦𝐛𝐞𝐫 𝐠𝐚𝐲𝐚𝐛 𝐡𝐮𝐚!\n𝐀𝐥𝐥 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐤𝐢 𝐭𝐚𝐫𝐚𝐡 𝐬𝐞 𝐭𝐡𝐨𝐝𝐚 𝐜𝐡𝐚𝐧𝐝𝐚\n𝐓𝐡𝐨𝐝𝐢 𝐬𝐢 𝐫𝐨𝐧𝐚 𝐩𝐚𝐧 𝐬𝐞 𝐛𝐚𝐭𝐚𝐲𝐚 𝐣𝐚 𝐫𝐡𝐚 𝐡...\n\n— 𝐕𝐨 𝐚𝐛 𝐧𝐡𝐢 𝐡... 𝐲𝐞 𝐦𝐚𝐭𝐥𝐚𝐛 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞 𝐧𝐡𝐢 𝐡!\n𝐥𝐞𝐤𝐢𝐧 𝐝𝐢𝐥 𝐦𝐞 𝐫𝐞𝐡 𝐣𝐚𝐲𝐞𝐧𝐠𝐞 😇, 𝐀𝐜𝐭𝐢𝐯𝐞 𝐦𝐞𝐦𝐛𝐞𝐫 𝐤𝐞 𝐧𝐚𝐭𝐞| \n\n⏰ 𝐃𝐚𝐭𝐞 𝐚𝐧𝐝 𝐭𝐢𝐦𝐞: {time}\n⚙️ 𝐒𝐭𝐚𝐭𝐮𝐬: {type} (𝐀𝐩𝐧𝐢 𝐦𝐚𝐫𝐣𝐢 𝐬𝐞 𝐠𝐞𝐲𝐚 𝐲𝐚 𝐥𝐚𝐭𝐡 𝐦𝐚𝐫𝐚 𝐠𝐞𝐲𝐚)\n\✍ ️𝐆𝐚𝐲𝐚𝐛 𝐡𝐮𝐲𝐞 𝐢𝐧𝐬𝐚𝐧𝐤𝐞 𝐛𝐚𝐫𝐞 𝐦𝐞 𝐚𝐩𝐤𝐚 𝐤𝐲𝐚 𝐤𝐡𝐚𝐲𝐚𝐥 𝐛𝐚𝐭𝐚𝐨: 𝐀𝐩𝐤𝐚 𝐤𝐲𝐚 𝐟𝐞𝐥𝐥𝐢𝐦𝐠𝐬 𝐡 𝐲𝐞 𝐦𝐚𝐦𝐥𝐞 𝐦𝐞?" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝐆𝐎𝐎𝐃 𝐀𝐅𝐓𝐄𝐑𝐍𝐎𝐎𝐍 𝐆𝐔𝐘𝐒" :
    hours > 12 && hours <= 18 ? "𝐆𝐎𝐎𝐃 𝐄𝐕𝐄𝐍𝐈𝐍𝐆 𝐆𝐔𝐘𝐒" : "𝐆𝐎𝐎𝐃 𝐍𝐈𝐆𝐇𝐓 𝐆𝐔𝐘𝐒").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
                            }
