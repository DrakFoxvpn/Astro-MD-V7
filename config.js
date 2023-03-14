const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'default' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.imgur.com/iSyGZJL.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? '🛡Fox-ᴍᴅ Bot🔮' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*🖥ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ FoxAlpha📿*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '* ꧁༒☬꧁༒☬ιηвσχ ησт αℓℓσωє∂😥  ρℓz נσιη вσт gяσυρ☬༒꧂༒꧂:-https://chat.whatsapp.com/CkKuM9B6oum9GWl4Mo6BBX*' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'REPLIT' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID
};
