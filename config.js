const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'SCRAPPER-MD=KvAS0BLD#vmEWyn1QevVs_3qPLE5ln7-waAK2lVSHYm69g6JYNrg'
};
