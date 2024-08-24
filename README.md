
# Discord Bot: SAMP Status Bot

## Description
 displays information about a San Andreas Multiplayer (SAMP) server from a  server webpage also fetches server playercount from a server and displays it as an activity Presence As . It fetches details such as server status, IP address, game name, mode, version, players online, location, and last update time.commands as `!serverinfo`

## Features
- **Server Information**: Fetches detailed information about a SAMP server.
- **Dynamic Command Handling**: Loads commands dynamically from the `./commands` directory.
- **Activity Update**: Sets bot activity to display the number of players currently online on the server.

## Usage
1. **Commands**
   - `!serverinfo`: Fetches and displays detailed information about the SAMP server.

2. **Bot Activity**
   - Updates bot activity to display the number of players online on the server.

## Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure `config.js` with your Discord bot token and server info URL.
4. Run the bot using `node index.js`.

## Commands
- **serverinfo**: Fetches detailed information about the SAMP server.

## Directory Structure
- `index.js`: Main entry point for the Discord bot.
- `config.js`: Configuration file for bot token and server info URL.
- `fetchServerInfo.js`: Module for fetching server information using web scraping.
- `commands/`: Directory containing bot command files.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


## Supporters and Contributors

- Supported By [TEAM God Dc Developers](https://discord.gg/apF2ZBXZVF)
- **Sub-Developers**: damn.itx.fazy & n0t.see
- **Helpers**: santa_.k

# Stay tuned for the V2 update

##### Powered by GOD DC DEVELOPER COMMUNITY
---