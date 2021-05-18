module.exports.globals = {
    apis: {
        helpers:{
            validateRequiredInputs: require("./apis/helpers/validate-required-inputs")
        }
    },

     constants: require("./core/constants"),
     _: require("lodash")
}