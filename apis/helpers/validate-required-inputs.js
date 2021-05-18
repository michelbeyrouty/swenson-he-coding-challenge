
/**
 * validateInputs
 * 
 * @param {object} inputs 
 * @param {object} inputs.dataArray
 * @param {object} inputs.expectedInputsWithTypes
 * @param {object} inputs.requiredInputs
 * 
 */
function validateInputs ({ inputList, expectedInputsWithTypes, requiredInputs }) {

  const { globals:app } = require("../../globals");

  var requiredInputsRecieved = [];
  let inputValue, expectedValueList ;

  for( inputField of Object.keys(inputList) ){

    if(requiredInputs.includes(inputField)){
        requiredInputsRecieved.push(inputField)
    }
    
    if(Object.keys(expectedInputsWithTypes).includes(inputField)){

        inputValue = inputList[inputField];
        inputType = typeof inputValue;

        expectedType = expectedInputsWithTypes[inputField]
        expectedValueList = app.constants.VALIDATION.VALUE[inputField];

        _validateDataType({ inputType, expectedType, inputField })

        _validateDataValue({ inputValue, expectedValueList })

    }
    
}

if( requiredInputsRecieved.length != requiredInputs.length ){
  throw new Error(`field missing ${app._.difference(requiredInputs, requiredInputsRecieved)}`);
}

};


module.exports = validateInputs


/**
 *  _validateDataType
 * 
 * @param {object} inputs
 * @param {string} param0.inputType
 * @param {string} param0.expectedType
 * @param {string} param0.inputField
 * 
 */
function _validateDataType({ inputType, expectedType, inputField }){
  if(inputType != expectedType){
      throw new Error(`${inputField} has the wrong type ${inputType} should be ${expectedType}`);
    }
}


/**
 * _validateDataValue
 * 
 * @param {object} inputs 
 * @param {string} inputs.inputValue
 * @param {object} inputs.expectedValueList
 * 
 */
function _validateDataValue({ inputValue, expectedValueList }){
  if( !!expectedValueList && !expectedValueList.includes(inputValue)){
      throw new Error(`${inputField} has the wrong type ${inputValue} should be part of ${expectedValueList}`);
    }
}