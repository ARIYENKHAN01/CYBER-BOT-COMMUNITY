module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",
  credits: "𝐒𝐇𝐈𝐙𝐔𝐊𝐀_𝐁𝐎𝐓_🐼🪽",
  description: "Against changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `${info.name} - 𝐒𝐇𝐈𝐙𝐔𝐊𝐀 𝐌𝐄𝐑𝐀 𝐁𝐎𝐒𝐒 𝐇 𝐌𝐄 𝐒𝐈𝐑𝐅 𝐔𝐒𝐊𝐈 𝐒𝐔𝐍𝐓𝐈 𝐇𝐔 𝐓𝐄𝐑𝐄 𝐁𝐀𝐒 𝐊𝐈 𝐍𝐇𝐈 𝐇 𝐂𝐇𝐀𝐍𝐇𝐄 𝐊𝐀𝐑𝐍𝐀 😹\n 𝐒𝐈𝐑𝐅 𝐌𝐄𝐑𝐀 𝐁𝐎𝐒𝐒 𝐒𝐇𝐈𝐙𝐔𝐊𝐀 𝐊𝐀𝐑 𝐒𝐀𝐊𝐓𝐈 𝐇🖐`}, threadID);
    }  
        }
