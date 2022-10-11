const request = require('request');
const email =`ones@mailsac.com`

class HelperRequests{
    
    async getMessageCount(email) {
        const getMessageCount = {
            method: 'GET',
            url: `https://mailsac.com/api/addresses/${email}/message-count`,
            headers: { 'Mailsac-Key':'k_VLhFEEVWhj8T6DmTnUm7ANoRIr6iXPKq0VDF046Cv'}
        };
            request(getMessageCount, (error, response, body) => {
            console.error('!!!!! error:', error);
            console.log('>>>>>>> statusCode:', response && response.statusCode);
            console.log('GET message count body ===>>', body);
        });
    }
    async getListOfMessages(email) {
        const getMessageList = {
            method: 'GET',
            url: `https://mailsac.com/api/addresses/${email}/messages`,
            headers: { 'Mailsac-Key':'k_VLhFEEVWhj8T6DmTnUm7ANoRIr6iXPKq0VDF046Cv'}
        };
            request(getMessageList, (error, response, body) => {
                console.error('!!!!! error:', error);
                console.log('>>>>>>> statusCode:', response && response.statusCode);
                console.log('GET lists of messages ===>', body);
        });
    }
    async getEmailAddress() {
        return email
    }
}

module.exports = new HelperRequests();
