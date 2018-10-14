const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = '.'
var prefix = ".";

client.on("message", message => {
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('message', message => {
    var prefix = "!";
    
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 411564557027508235) return;
    
    
    if (message.content.startsWith(prefix + 'play')) {
    if (message.author.id !== '466425075487342615') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
    } else
    
     
    if (message.content.startsWith(prefix + 'st')) {
    if (message.author.id !== '466425075487342615') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(argresult, "http://twitch.tv/HA");
        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
    } else
    
    if (message.content.startsWith(prefix + 'nic')) {
    if (message.author.id !== '466425075487342615') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
    } else
        
    if (message.content.startsWith(prefix + 'avatar')) {
    if (message.author.id !== '466425075487342615') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
    } else
    
    
    if (message.content.startsWith(prefix + 'wat')) {
    if (message.author.id !== '466425075487342615') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
        client.user.setActivity(argresult, {type : 'watching'});
     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
    }
    
     });


client.on('message', async msg => {
    var prefix = "ر";
    var user = msg.author;
            var a = msg.guild.roles.find("name", 'Agar');
        if(!a){
        a = await msg.guild.createRole({
          name: "Agar",
          color: "#000000",
          permissions:[]
        })
       
        }
        var m = msg.guild.roles.find("name", 'Minecraft');
    if(!m){
        m =  await msg.guild.createRole({
          name: "Minecraft",
          color: "#000000",
          permissions:[]
        })
        }
        var f = msg.guild.roles.find("name", 'Fortnite');
        if(!f){
        f =  await msg.guild.createRole({
          name: "Fortnite",
          color: "#000000",
          permissions:[]
        })
        }
var m = msg.guild.roles.find("name", 'Minecraft');
    if(!m){
        m =  await msg.guild.createRole({
          name: "Minecraft",
          color: "#000000",
          permissions:[]
        })
        }
        var f = msg.guild.roles.find("name", 'Cs GO');
        if(!f){
        f =  await msg.guild.createRole({
          name: "Cs GO",
          color: "#000000",
          permissions:[]
        })
        }
        var b = msg.guild.roles.find("name", 'Creative Destruction');
        if(!b){
        b =  await msg.guild.createRole({
          name: "Creative Destruction",
          color: "#000000",
          permissions:[]
        })
        }
        var black = msg.guild.roles.find("name", 'Blacksquad');
    if(!black){
        black =  await msg.guild.createRole({
          name: "Blacksquad",
          color: "#000000",
          permissions:[]
        })
        }
 
        if (msg.content.startsWith(prefix +'تبة')) {
 
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- لعبة اقاريو ⚽ \n2- لعبة ماين كرافت 👶 \n3- لعبة فورت نايت 👊 \n4- لعبة براوهلا  👌 \n5- لعبة بلاك سكواد 🍸\n6- الغاء ❌ \n7- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {    
     res.react('⚽').then(r=>{    
     res.react('👶').then(r=>{
     res.react('👊').then(r=>{
     res.react('👌').then(r=>{
     res.react('🍸').then(r=>{
     res.react('❌').then(r=>{
 
    let aaa = (reaction, user) => reaction.emoji.name === '⚽' && user.id === msg.author.id;    
    let mmm = (reaction, user) => reaction.emoji.name === '👶' && user.id === msg.author.id;
    let fff = (reaction, user) => reaction.emoji.name === '👊' && user.id === msg.author.id;
    let bbb = (reaction, user) => reaction.emoji.name === '👌' && user.id === msg.author.id;
    let bbbb = (reaction, user) => reaction.emoji.name === '🍸' && user.id === msg.author.id;
    let ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
    let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
    let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
    let ff = res.createReactionCollector(fff, { maxMatches:1 , time: 20000 , });
    let bb = res.createReactionCollector(bbb, { maxMatches:1 , time: 20000 , });
    let bl = res.createReactionCollector(bbbb,{ maxMatches:1 , time: 20000 , });
    let cc = res.createReactionCollector(ccc, { maxMatches:1 , time: 20000 , });
 
aa.on("collect", r => {
    msg.guild.member(user.id).addRole(a);
    msg.channel.send('`تم اعطائك رتبة للعبة Agar`');
    msg.delete();
    })
mm.on("collect", r => {
    msg.guild.member(user.id).addRole(m);
    msg.channel.send('`تم اعطائك رتبة للعبة Mincraft `');
    msg.delete();
})
ff.on("collect", r => {
    msg.guild.member(user.id).addRole(f);
    msg.channel.send('`تم اعطائك رتبة للعبة Fortnite `');
    msg.delete();
})
bb.on("collect", r => {
    msg.guild.member(user.id).addRole(b);
    msg.channel.send('`تم اعطائك رتبة للعبة Brawlhalla `');
    msg.delete();
})
bl.on("collect", r => {
    msg.guild.member(user.id).addRole(black);
    msg.channel.send('`تم اعطائك رتبة للعبة Blacksquad `');
    msg.delete();
})
cc.on("collect", r => {
    msg.delete();
})
     })
     })
     })
     })
     })
     })
     })
     }
     });









// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

