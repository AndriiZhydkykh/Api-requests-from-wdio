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
    return response.data; })
    .catch(this.apiFailureCallback);  
    }

  async getListOfMessages(email) { 
    const client = await this.configAxios();
    return client.get( `addresses/${email}/messages`, )
    .then(response => { 
    console.log('GET a list of messages, ===>>',response.data);
    console.log(' statusCode===>>',response.status); 
    return response.data;})
    .catch(this.apiFailureCallback);  
  }
        
    
    async getEmailAddress() {
        return email
    }
}

module.exports = new HelperRequests();
