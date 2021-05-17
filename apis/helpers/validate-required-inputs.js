
/**
 * validateInputs
 * 
 * @param {object} inputs 
 * @param {object} inputs.dataArray
 * @param {object} inputs.requiredInputsWithTypesList
 */
function validateInputs ({ dataArray, requiredInputsWithTypesList }) {

  const { globals:app } = require("../../globals");

  for(const field of requiredInputsWithTypesList) {
       const fieldName = field.split(":")[0]
       const fieldType = field.split(":")[1]

    if (dataArray[fieldName] === null || dataArray[fieldName] === undefined) {
      throw new Error(`${field} param is required`);
    }

    const dataType = typeof dataArray[fieldName];
    const dataValue = dataArray[fieldName];

    if(dataType !== fieldType){
      throw new Error(`${fieldName} has the wrong type ` + dataType + " should be " + fieldType );
    }

    const valueList = app.constants.VALIDATION.VALUE[fieldName];

    if(valueList && !valueList.includes(dataValue)){
      throw new Error(`${fieldName} has the wrong value ` + dataValue + " should be in " + valueList );
    }

  }
};


module.exports = validateInputs

