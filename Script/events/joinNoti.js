module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝐒𝐇𝐈𝐙𝐔𝐊𝐀_𝐁𝐎𝐓_🐼🪽",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinvideo");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `╭•┄┅═══❁🌺❁═══┅┄•╮\n   𝐇𝐞𝐥𝐥𝐨 𝐛𝐚𝐛𝐮 𝐬𝐨𝐧𝐚 𝐣𝐚𝐝𝐮 𝐭𝐨𝐧𝐚 𝐢𝐦 𝐛𝐚𝐜𝐤 🖤💫\n╰•┄┅═══❁🌺❁═══┅┄•╯

________________________

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚dd𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢-𝐠𝐫𝐨𝐮𝐩-🖤🤗\n\n𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 ❤️-!!

________________________\n\n𝐓𝐨 𝐯𝐢𝐞𝐰 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧d

${global.config.PREFIX}Help\n${global.config.PREFIX} Manu

𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 :𝐒𝐇𝐈𝐙𝐔𝐊𝐀_𝐁𝐎𝐓_🐼🪽

\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆
`, attachment: fs.createReadStream(__dirname + "/cache/ullash.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "╭•┄┅═══❁🌺❁═══┅┄•╮\n   𝐇𝐞𝐥𝐥𝐨 𝐛𝐚𝐛𝐮 𝐬𝐨𝐧𝐚 𝐣𝐚𝐝𝐮 𝐭𝐨𝐧𝐚 𝐢𝐦 𝐛𝐚𝐜𝐤 🖤💫\n╰•┄┅═══❁🌺❁═══┅┄•╯ \n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n        [   {name} ]\n\n༆-✿ Apko hamari team (SHIZUKA_BOT_COMUNITY) ki tarah se bohot bohot dhanyawad 🐼🖤🪽" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
