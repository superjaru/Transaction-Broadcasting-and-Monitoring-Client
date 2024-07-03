const { broadcastTransaction, monitorTransaction } = require('./TransactionClient');


const runTransactionProcess = async () => {
    const symbol = 'ETH';
    const price = 4500;
    const timestamp = 1678912345;

    try {
        const txHash = await broadcastTransaction(symbol, price, timestamp);
        console.log("tx_hash : " , txHash)
         // Monitor transaction status until it changes from "PENDING"
        let status = 'PENDING';
        while (status === 'PENDING') {
            status = await monitorTransaction(txHash);
            console.log('Transaction status:', status);

            // If still pending, wait for 5 seconds before checking again
            if (status === 'PENDING') {
                await new Promise(resolve => setTimeout(resolve, 5000));
            }

            // If status is DNE or FAILED, log a message and end loop
            if (status === 'DNE') {
                console.log('Transaction does not exist.');
            } else if (status === 'FAILED') {
                console.log('Transaction failed to process.');
            }
        }

    } catch (err) {
        console.error('Error :', err.message);
    }
}

runTransactionProcess();