// CREATED BY Hyperz#0001 & Jordan.#2139
// CREATED BY Hyperz#0001 & Jordan.#2139
// CREATED BY Hyperz#0001 & Jordan.#2139

const chalk = require('chalk');
var counted = 0;

class fart { // Reason for this node module because he doesn't like self promo restrictions

    constructor(client, channelid, cooldown, limit, debug) { // It's a constructor
        this.client = client,
        this.channelid = channelid,
        this.cooldown = cooldown,
        this.limit = limit, // Recommended to be 25 or under
        this.debug = debug
    }

    async cooldownCheck(message) { // Main function
        if (message.channel.id != this.channelid) return; // Check if channel id matches one in constructor
        let channel = await this.client.channels.cache.get(this.channelid)
        await channel.messages.fetch({ limit: this.limit }).then(async msgs => {
            msgs.forEach(async bruh => {
                try {
                    let deCooldown = this.cooldown;

                    if (bruh.author.id === message.author.id) { // making sure that we're only getting the authors messages
                        counted = counted + 1 // uhh don't ask
                        let lastMessage = Date.now() - bruh.createdTimestamp // getting the last messages date
                        if (lastMessage < deCooldown * 86400000) { // Checks cooldown
                            if (counted >= 2) { // only check the authors last 2 messages
                                counted = 0 // reset the count
                                await message.delete().catch(e => { // if they shit was too early, delete that junk
                                    if (this.debug) { // debug mode if you want it
                                        console.log(chalk.red(e.stack))
                                    }
                                    return;
                                });
                            }
                        } else {}
                    }
                } catch (e) {
                    if (this.debug) {
                        console.log(chalk.red(e.stack))
                    }
                }
            })
        });
    }

}

module.exports = fart;

// CREATED BY Hyperz#0001 & Jordan.#2139
// CREATED BY Hyperz#0001 & Jordan.#2139
// CREATED BY Hyperz#0001 & Jordan.#2139

/*
lol jordan here
buy me redbull lol https://paypal.me/jordan2139 | https://cash.app/$J2139
*/