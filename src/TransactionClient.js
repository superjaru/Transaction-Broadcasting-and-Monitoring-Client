const axios = require('axios');

exports.broadcastTransaction = async (symbol , price , timestamp) => {
    const url = 'https://mock-node-wgqbnxruha-as.a.run.app/broadcast';
    const payload = {
        symbol,
        price,
        timestamp
    };
    try {
        const response = await axios.post(url, payload);
        return response.data.tx_hash;
    } catch (err) {
        console.error('Error while post URL:', err.message);
        throw err;
    }
}

exports.monitorTransaction = async (txhash) => {
    const url = `https://mock-node-wgqbnxruha-as.a.run.app/check/${txhash}`;
    try {
        const response = await axios.get(url);
        return response.data.tx_status;
    } catch (err) {
        console.error('Error while getting status :', err.message);
        throw err;
    }
}