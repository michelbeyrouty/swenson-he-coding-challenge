'use strict'

module.exports.list = (event, context, callback) => {

    const { globals:app } = require("../../globals");

    const inputData = JSON.parse(event.body);
    console.log(JSON.stringify(inputData))

    app.apis.helpers.validateRequiredInputs({ 
        inputList: inputData,
        expectedInputsWithTypes: app.constants.VALIDATION.TYPE.listProduct,
        requiredInputs: app.constants.VALIDATION.REQUIRED.listProduct
     });

    const { productType, waterLine, coffeeFlavor, packSize } = inputData;

    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            inputData
        })
    }

    callback(null, response)
}


