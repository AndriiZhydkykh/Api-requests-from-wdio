const email =`ones@mailsac.com`
const axios = require('axios').default;

class HelperRequests{
  async configAxios() { 
    return axios.create({ 
    baseURL: "https://mailsac.com/api/", 
    headers: { "Host": "mailsac.com", 
               "Mailsac-Key": "k_VLhFEEVWhj8T6DmTnUm7ANoRIr6iXPKq0VDF046Cv", 
             }, 
    }); 
  } 
    catchErrors(error) 
  { 
    console.dir(error); 
    if (typeof error.response !== 'undefined') { 
    console.log("---------------API REQUEST ERROR------------------") 
    console.log(error.response.data); 
    console.log(error.response.status); 
    console.log(error.response.headers); 
    console.log("---------------API REQUEST ERROR------------------") } 
    throw error; 
  } 
  async getMessageCount(email) { 
    const client = await this.configAxios();
    return client.get( `addresses/${email}/message-count`, )
    .then(response => { 
    console.log('GET message-count body, ===>>',response.data);
    return response.data; 
    })
    .catch(this.apiFailureCallback); 
    }

  async getListOfMessages(email) { 
    const client = await this.configAxios();
    return client.get( `addresses/${email}/messages`, )
    .then(response => { 
    const ListOfMessages = response.data.map((item) => {
            return {
                _id: item._id,
                from: item.from[0].address,
                to: item.to[0].address,
                received: item.received,
                subject: item.subject,
                ip: item.ip,
                via: item.via
            }
        })
    console.log('GET a list of messages, ===>>',ListOfMessages);})
  }
        
    
    async getEmailAddress() {
        return email
    }
}

module.exports = new HelperRequests();
