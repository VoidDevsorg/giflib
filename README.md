<a href="https://voiddevs.org/dc" target="_blank"><img style="display: block; margin: auto;" src="https://img.devsforum.net/tr/img/h1Z2X3.png" alt="Join our discord" width="256"></a><br>
# GifLib by VoidDevs & ByQush

## Usage

Add this line to the beggining of code
```javascript
const gif = require('giflib')
```
And add some of the functions inside the exports.run

## Functions
```javascript

gif.mka(); // Sends a Mustafa Kemal Atatürk gif

gif.funny(); // Sends a Funny gif

gif.NSFW(); // Sends a NSFW gif

gif.woman(); // Sends a woman gif

gif.man(); // Sends a man gif

gif.baby(); // Sends a baby gif

gif.couple(); // Sends a Couple gif

gif.lcdp(); // Sends a La Casa De Papel gif

```
More Soon™

### Options
 funny, NSFW, woman, man, baby, couple, lcdp, mka

## Install

`npm i giflib` or 
`npm install giflib`

## An Example

```javascript
const Discord = require('discord.js');
const gif = require('giflib')

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed();
.setTitle("Funny GIF")
.setImage(await gif.funny())

message.channel.send(embed);
}


exports.config = {
  name: 'funny',
  aliases: ['funnygif']
};
```

You can take a glance at <a href="https://glitch.com/edit/#!/giflib-example">Example infrastructure</a>

## License

> MIT (c) VoidDevs & ByQush

https://voiddevs.org
