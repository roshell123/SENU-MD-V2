const fetch = require('node-fetch'); 
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const { translate } = require('@vitalets/google-translate-api');
const axios = require('axios')

cmd({
    pattern: "quranmenu",
    alias: ["surahmenu", "religion"],
    desc: "menu the bot",
    category: "menu",
    react: "❤️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body,isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `❤️  ⊷┈ *The Lord Buddha* ┈⊷  🤍

Lord Buddha: The Enlightened One
Siddhartha Gautama, known as the Buddha, was a spiritual teacher who lived in ancient India and founded Buddhism. He is revered by Buddhists worldwide as the Awakened One who rediscovered the ancient path to liberation from suffering.

Born into a royal family in Lumbini, Nepal, around the 6th century BCE, Siddhartha's life was one of privilege and comfort. However, he was deeply moved by the suffering he witnessed in the world, prompting him to renounce his luxurious life and embark on a spiritual quest.

Siddhartha's journey led him to seek guidance from various teachers and practice rigorous asceticism. However, he found no lasting peace in these practices. It was through deep meditation that he achieved enlightenment, realizing the true nature of reality and the path to liberation.

The Buddha's teachings revolve around the Four Noble Truths: the truth of suffering, the truth of the cause of suffering, the truth of the end of suffering, and the truth of the path to the end of suffering. He taught that suffering arises from attachment and craving, and that by following the Eightfold Path, one can overcome these desires and attain nirvana, a state of perfect peace and liberation.

The Eightfold Path consists of right understanding, right thought, right speech, right action, right livelihood, right effort, right mindfulness, and right concentration. These principles guide individuals towards ethical conduct, mental discipline, and wisdom.

The Buddha's teachings spread far and wide, attracting followers from all walks of life. He established a monastic order, the Sangha, to preserve and propagate his teachings. Buddhism gradually evolved into a major world religion, with diverse traditions and practices.

The Buddha's legacy continues to inspire millions of people across the globe. His teachings on compassion, mindfulness, and wisdom offer a path to inner peace and happiness. By understanding the nature of suffering and the path to liberation, individuals can lead more meaningful and fulfilling lives.

In conclusion, Lord Buddha's life and teachings serve as a beacon of hope and inspiration for humanity. His message of compassion, wisdom, and liberation remains relevant and timeless, offering a path to overcome suffering and find true happiness.`

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/eci1lm.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363377598641244@newsletter',
                        newsletterName: 'TECH-FSD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/TECH-FSD-01/PROJECT-FSD/raw/refs/heads/main/audio/mehul-choudhary-phxntxm.mp3' },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
