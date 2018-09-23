//Packages
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";
//bot
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`LOOK AT ME  .`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


// inv by
client.on('message', messages => { 
  var sender = messages.author
  if(!messages.guild) return
  if(!sw[messages.guild.id]) sw[messages.guild.id] = {
  onoff: 'Off',
  ch:    'Welcome',
  msk:   'Welcome'
}
        if(messages.content.startsWith(prefix + `set-wlc`)) {        
        let perms = messages.member.hasPermission(`MANAGE_CHANNELS`)
        if(!perms) return messages.channel.send('**You need `Manage Channels` permission**')
        let args = messages.content.split(" ").slice(1)
        if(!args.join(" ")) return messages.reply(`
  ** ${prefix}set-wlc toggle **
  ** ${prefix}set-wlc set [Channel Name] **
  ** ${prefix}set-wlc msg [Welcome messages] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        let state = args[0]
        if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return messages.reply(`
 ** ${prefix}set-wlc toggle **
 ** ${prefix}set-wlc set [Channel Name] **
 ** ${prefix}set-wlc msg [Welcome messages] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        if(state.trim().toLowerCase() == 'toggle') { 
        if(sw[messages.guild.id].onoff === 'Off') return [messages.channel.send(`**Welcome messages Is **on** !**`), sw[messages.guild.id].onoff = 'On']
        if(sw[messages.guild.id].onoff === 'On')  return [messages.channel.send(`**Welcome messages Is **off** !**`), sw[messages.guild.id].onoff = 'Off']
}
        if(state.trim().toLowerCase() == 'set') {
        let newch = messages.content.split(" ").slice(2).join(" ")
        if(!newch) return messages.reply(`${prefix}set-wlc set [Channel name]`)
        if(!messages.guild.channels.find(`name`,newch)) return messages.reply(`**I Cant Find This Channel.**`)
            sw[messages.guild.id].ch = newch
            messages.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
} 
        if(state.trim().toLowerCase() == 'msg') {
        let newmsg = messages.content.split(" ").slice(2).join(" ")
        if(!newmsg) return messages.reply(`${prefix}set-wlc msg [New messages]`)
            sw[messages.guild.id].msk = newmsg
            messages.channel.send(`**Welcome messages Has Been Changed to ${newmsg}.**`)
} 
}
        if(messages.content === prefix + 'set-wlc info') {
        let perms = messages.member.hasPermission(`MANAGE_GUILD`) 
        if(!perms) return messages.reply(`You don't have permissions.`)
        var embed = new Discord.RichEmbed()
        .addField(`Welcome messages  `, `
On/Off  : __${sw[messages.guild.id].onoff}__
Channel : __${sw[messages.guild.id].ch}__
messages : __${sw[messages.guild.id].msk}__`)
        .setColor(`BLUE`)
            messages.channel.send({embed})
}
        fs.writeFile("./setWlc.json", JSON.stringify(sw), (err) => {
        if (err) console.error(err)
});
})

client.login(process.env.BOT_TOKEN);
