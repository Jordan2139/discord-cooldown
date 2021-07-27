# discord-cooldown
A simple message cooldown module for DiscordJS V12.

---

## Support

* [Discord](https://hyperz.dev/discord)

* [Website](https://support.hyperz.dev/)

---

## Installation

`npm i discord-cooldown@latest`

---

## Constructor

Base customization for the module.

| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Your client variable
| #2   | STRING  | The channel id to set the cooldown in
| #3   | INTEGER  | The days for the cooldown to last ('5', '18', '1', '3')
| #4   | INTEGER  | The limit of messages to fetch (SHOULD keep under 25)
| #5   | BOOLEAN  | Whether or not to toggle debug mode and error logs

---

## Code Example

```js
const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['CHANNEL', 'MESSAGE', 'GUILD_MEMBER', 'USER'] })
const fart = require('discord-cooldown')
const cooldown = new fart(client, '848346040511758356', 1, 3, true)

client.on("ready", () => {
    console.log(`I AM READY!!!!`)
});

client.on('message', async message => {
    await cooldown.cooldownCheck(message)
});

client.login('YOUR_BOT_TOKEN')
```
