let handler = async (m, { command, text, groupMetadata }) => m.reply(`
 *╔═══*🌐 *6 ᴠs 6* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟❧*  *ᴄᴏᴍᴘᴇᴛɪᴛɪᴠᴏ ᴍɪxᴛᴏ*
*╟*
*╟❧*  ⏰  *6:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *7:45 ᴘᴍ*  🇪🇨
*╟* 
*╟❧*  *sᴏʟᴏ ᴀʟᴏᴋ ʏ ᴋ*
*╟*
*╟❧* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* ✿
*╟❧* ✿
*╟❧* ✿
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* ✿
*╟❧* 𖠌
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* ✿
*╟❧* 𖠌
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs6.c.m.7$/i
handler.admin = true
export default handler
