const HelperRequests = require('../pageobjects/helper.api.page');

describe('Api requests from wdio ', () => {
    it('get messages count', async () => {
        await HelperRequests.getMessageCount(await HelperRequests.getEmailAddress());
    });
    it('get a list of email messages', async () => {    
        await HelperRequests.getListOfMessages(await HelperRequests.getEmailAddress());
    });
});




