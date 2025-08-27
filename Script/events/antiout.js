module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐒𝐇𝐈𝐙𝐔𝐊𝐀_𝐁𝐎𝐓_🐼🪽",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐒𝐨𝐫𝐫𝐲 𝐛𝐨𝐬𝐬 𝐦𝐞𝐧𝐭𝐚𝐥 𝐤𝐨 𝐚𝐝𝐝 𝐧𝐡𝐢 𝐤𝐚𝐫 𝐩𝐚𝐲𝐢 \n ${name} 𝐘𝐞 𝐤𝐮𝐭𝐭𝐞 𝐛𝐥𝐨𝐜𝐤 𝐤𝐢𝐲𝐚 𝐲𝐚 𝐩𝐡𝐢𝐫 𝐢𝐝 𝐩𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐨𝐩𝐭𝐢𝐨𝐧 𝐧𝐡𝐢 𝐢𝐬𝐥𝐢𝐲𝐞 𝐧𝐡𝐢 𝐤𝐬𝐫 𝐩𝐚𝐲𝐢😞 \n\n ──────·····✦·····──── \n 𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 | ᵁᴸᴸ⁴ˢᴴ `, event.threadID)
   } else api.sendMessage(`𝐒𝐮𝐧, ${name} 𝐘𝐞 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐫𝐚 𝐡! \n 𝐈𝐝𝐡𝐚𝐫 𝐬𝐞 𝐣𝐚𝐧𝐚 𝐡𝐨 𝐭𝐨 𝐦𝐨𝐦𝐨𝐬 𝐤𝐡𝐢𝐥𝐚𝐨 ! \n𝐓𝐮 𝐦𝐨𝐦𝐨𝐬 𝐤𝐡𝐢𝐥𝐚𝐲𝐞 𝐛𝐢𝐧𝐚 𝐥𝐞𝐚𝐯𝐞 𝐥𝐢𝐲𝐚 - 𝐢𝐬𝐥𝐢𝐲𝐞 𝐭𝐮𝐣𝐡𝐞 𝐣𝐚𝐦𝐞𝐞𝐧 𝐤𝐡𝐨𝐝𝐤𝐞 𝐝𝐮𝐛𝐚𝐫𝐚 𝐚𝐝𝐝 𝐤𝐢 𝐡𝐮। \n\n ── ·······✦·······──── \n 𝐒𝐇𝐈𝐙𝐔𝐊𝐀_𝐁𝐎𝐓_🐼🪽| ᵁᴸᴸ⁴ˢᴴ `, event.threadID);
  })
 }
}
