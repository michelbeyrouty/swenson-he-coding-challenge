'use strict'

module.exports.list = (event, context, callback) => {

    const { globals:app } = require("../../globals");
    const SKU_LIST = Object.values(app.constants.SKU_LIST);
    let SKU_NAMES_LIST = SKU_LIST.map(product => product.NAME);
    let productsFilterd = [] ;

    const inputData = JSON.parse(event.body);
    console.log(JSON.stringify(inputData))

    app.apis.helpers.validateRequiredInputs({ 
        inputList: inputData,
        expectedInputsWithTypes: app.constants.VALIDATION.TYPE.listProduct,
        requiredInputs: app.constants.VALIDATION.REQUIRED.listProduct
     });

    for( inputField of Object.keys(inputData) ){
        if(inputField){
          productsFilterd = SKU_LIST.filter(product => product[inputField] == inputData[inputField]).map(product => product.name);
          SKU_NAMES_LIST = _.intersection(productsFilterd,SKU_NAMES_LIST)
        }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            inputData,
            SKU_NAMES_LIST
        })
    }

    callback(null, response)
}