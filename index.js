const Eris = require("eris");
const keepAlive = require("./server");

keepAlive();

const bot = new Eris(process.env.TOKEN);

const targetVoiceChannels = ["voice-channel-magang-1", "voice-channel-magang-2"];

bot.on("voiceChannelJoin", (member, newChannel) => {
  const displayName = member.nick || member.user.username;
  const channelName = newChannel.name;

  if (targetVoiceChannels.includes(channelName)) {
    const textChannelID = "1147098023671894087";
    const message = `${displayName} has joined voice channel "${channelName}"`;

    bot.createMessage(textChannelID, message)
      .catch((error) => console.error(`Gagal mengirim pesan: ${error.message}`));
  }
});

bot.connect();
