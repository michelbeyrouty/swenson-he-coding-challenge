'use strict'

module.exports.list = (event, context, callback) => {

    const data = JSON.parse(event.body);
    console.log(JSON.stringify(data))
    
   validateRequiredInputs({
       inputData: data
   });

    const response = {
        statusCode: 200,
        body: JSON.stringify({
           
        })
    }

    callback(null, response)
}



