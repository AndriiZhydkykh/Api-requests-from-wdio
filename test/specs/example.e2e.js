const HelperRequests = require('../pageobjects/helper.api.page');

describe('Api requests from wdio ', () => {
    it('get messages count', async () => {
        await HelperRequests.getMessageCount(await HelperRequests.getEmailAddress());
        await browser.pause(5000)
    });
    it('get a list of email messages', async () => {    
        await HelperRequests.getListOfMessages(await HelperRequests.getEmailAddress());
        
    });
});



