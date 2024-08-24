const axios = require('axios');
const cheerio = require('cheerio');
const { serverInfoUrl } = require('./config');

const fetchServerInfo = async () => {
    try {
        const response = await axios.get(serverInfoUrl);
        const $ = cheerio.load(response.data);

        const serverInfo = {};

        const status = $('.status .value .serverstatustext').text().trim();
        serverInfo.status = status;

        const ipPort = $('#server_addr_0').text().trim();
        serverInfo.ipPort = ipPort;

        const game = $('.baseinfo .row-fluid:nth-child(2) .value a').text().trim();
        serverInfo.game = game;

        const mode = $('.baseinfo .row-fluid:nth-child(3) .value').text().trim();
        serverInfo.mode = mode;

        const version = $('.baseinfo .row-fluid:nth-child(4) .value').text().trim();
        serverInfo.version = version;

        const playersOnlineText = $('.baseinfo .row-fluid:nth-child(5) .value .playersonline b').first().text().trim();
        const playersOnline = parseInt(playersOnlineText, 10) || 0; 
        serverInfo.playersOnline = playersOnline;

        const location = $('.baseinfo .row-fluid:nth-child(6) .value b').text().trim();
        serverInfo.location = location;

        const added = $('.baseinfo .row-fluid:nth-child(7) .value').text().trim();
        serverInfo.added = added;

        const lastUpdated = $('#server_countdown').text().trim();
        serverInfo.lastUpdated = lastUpdated;

        return serverInfo;
    } catch (error) {
        console.error('Error fetching server information:', error);
        return null;
    }
};

module.exports = { fetchServerInfo };
