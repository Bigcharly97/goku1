let handler = async (m, { command, text, groupMetadata }) => m.reply(`
*╔═══*🌐 *16 ᴠs 16* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟❧*  *ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ*
*╟*
*╟❧*  ⏰  *10:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *11:45 ᴘᴍ*  🇪🇨
*╟*
*╟❧* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* 𖤍ᴍᴀʀɪ́ᴀ ғʟᴏᴡ
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟❧* 𖤍ᴄʜᴀʀʟʏ  ғʟᴏᴡ
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs16.11$/i
handler.admin = true
export default handler
