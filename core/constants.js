module.exports = {

    COFFEE_MACHINES: {
        productType:{
            COFFEE_MACHINE_LARGE: "COFFEE_MACHINE_LARGE",
            COFFEE_MACHINE_SMALL: "COFFEE_MACHINE_SMALL",
            ESPRESSO_MACHINE: "ESPRESSO_MACHINE"
        },
        waterLineCompatible:{
            TRUE: true,
            FALSE: false
        }
    },

    COFFEE_PODS:{
        productType:{
            COFFEE_POD_LARGE: "COFFEE_POD_LARGE",
            COFFEE_POD_SMALL: "COFFEE_POD_SMALL",
            ESPRESSO_POD: "ESPRESSO_POD"
        },
        coffeeFlavor:{
            COFFEE_FLAVOR_VANILLA: "COFFEE_FLAVOR_VANILLA",
            COFFEE_FLAVOR_CARAMEL: "COFFEE_FLAVOR_CARAMEL",
            COFFEE_FLAVOR_PSL: "COFFEE_FLAVOR_PSL",
            COFFEE_FLAVOR_MOCHA: "COFFEE_FLAVOR_MOCHA",
            COFFEE_FLAVOR_HAZELNUT: "COFFEE_FLAVOR_HAZELNUT"
        },
        packSize:{
            ONE_DOZEN: "ONE_DOZEN",
            THREE_DOZEN: "THREE_DOZEN",
            FIVE_DOZEN: "FIVE_DOZEN",
            SEVEN_DOZEN: "SEVEN_DOZEN"
        }
    },

    SKU_LIST:{
        CM001: {
            productType: "COFFEE_MACHINE_SMALL",
            modelType: "BASE",
            name: "CM001",
            waterLineCompatible: false,
        },
        CM002:{
            productType: "COFFEE_MACHINE_SMALL",
            modelType: "PREMIUM",
            name: "CM002",
            waterLineCompatible: false,
        },
        CM003:{
            productType: "COFFEE_MACHINE_SMALL",
            modelType: "DELUXE",
            waterLineCompatible: true,
            name: "CM003"
        },
        CM101:{
            productType: "COFFEE_MACHINE_LARGE",
            modelType: "BASE",
            name: "CM101",
            waterLineCompatible: false,
        },
        CM102:{
            productType: "COFFEE_MACHINE_LARGE",
            modelType: "PREMIUM",
            waterLineCompatible: true,
            name: "CM102"
        },
        CM103:{
            productType: "COFFEE_MACHINE_LARGE",
            modelType: "DELUXE",
            waterLineCompatible: true,
            name: "CM103"
        },
        EM001:{
            productType: "ESPRESSO_MACHINE",
            modelType: "BASE",
            name: "EM001",
            waterLineCompatible: false,
        },
        EM002:{
            productType: "ESPRESSO_MACHINE",
            modelType: "PREMIUM",
            name: "EM002",
            waterLineCompatible: false,
        },
        EM003:{
            productType: "ESPRESSO_MACHINE",
            modelType: "DELUXE",
            waterLineCompatible: true,
            name: "EM003"
        },
        CP001:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "ONE_DOZEN",
            name: "CP001",
            waterLineCompatible: false,
        },
        CP003:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "THREE_DOZEN",
            name: "CP003",
            waterLineCompatible: false,
        },
        CP011:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_CARAMEL",
            packSize: "ONE_DOZEN",
            name: "CP011",
            waterLineCompatible: false,
        },
        CP021:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_PSL",
            packSize: "ONE_DOZEN",
            name: "CP021",
            waterLineCompatible: false,
        },
        CP023:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_PSL",
            packSize: "THREE_DOZEN",
            name: "CP023",
            waterLineCompatible: false,
        },
        CP031:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_MOCHA",
            packSize: "ONE_DOZEN",
            name: "CP031",
            waterLineCompatible: false,
        },
        CP033:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_MOCHA",
            packSize: "THREE_DOZEN",
            name: "CP033",
            waterLineCompatible: false,
        },
        CP041:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_HAZELNUT",
            packSize: "ONE_DOZEN",
            name: "CP041",
            waterLineCompatible: false,
        },
        CP043:{
            productType: "COFFEE_POD_SMALL",
            coffeeFlavor: "COFFEE_FLAVOR_HAZELNUT",
            packSize: "THREE_DOZEN",
            name: "CP043",
            waterLineCompatible: false,
        },
        CP101:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "ONE_DOZEN",
            name: "CP101",
            waterLineCompatible: false,
        },
        CP103:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "THREE_DOZEN",
            name: "CP103",
            waterLineCompatible: false,
        },
        CP111:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_CARAMEL",
            packSize: "ONE_DOZEN",
            name: "CP111",
            waterLineCompatible: false,
        },
        CP121:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_PSL",
            packSize: "ONE_DOZEN",
            name: "CP121",
            waterLineCompatible: false,
        },
        CP123:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_PSL",
            packSize: "THREE_DOZEN",
            name: "CP123",
            waterLineCompatible: false,
        },
        CP131:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_MOCHA",
            packSize: "ONE_DOZEN",
            name: "CP131",
            waterLineCompatible: false,
        },
        CP133:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_MOCHA",
            packSize: "THREE_DOZEN",
            name: "CP133",
            waterLineCompatible: false,
        },
        CP141:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_HAZELNUT",
            packSize: "ONE_DOZEN",
            name: "CP141",
            waterLineCompatible: false,
        },
        CP143:{
            productType: "COFFEE_POD_LARGE",
            coffeeFlavor: "COFFEE_FLAVOR_HAZELNUT",
            packSize: "THREE_DOZEN",
            name: "CP143",
            waterLineCompatible: false,
        },
        EP003:{
            productType: "ESPRESSO_POD",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "THREE_DOZEN",
            name: "EP003",
            waterLineCompatible: false,
        },
        EP005:{
            productType: "ESPRESSO_POD",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "FIVE_DOZEN",
            name: "EP005",
            waterLineCompatible: false,
        },
        EP007:{
            productType: "ESPRESSO_POD",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "SEVEN_DOZEN",
            name: "EP007",
            waterLineCompatible: false,
        },
        EP013:{
            productType: "ESPRESSO_POD",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "THREE_DOZEN",
            name: "EP013",
            waterLineCompatible: false,
        },
        EP015:{
            productType: "ESPRESSO_POD",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "FIVE_DOZEN",
            name: "EP015",
            waterLineCompatible: false,
        },
        EP017:{
            productType: "ESPRESSO_POD",
            coffeeFlavor: "COFFEE_FLAVOR_VANILLA",
            packSize: "SEVEN_DOZEN",
            name: "EP017",
            waterLineCompatible: false,
        },
    },

    VALIDATION:{
        TYPE:{
            listProduct: {
                "productType": "string" , 
                "waterLineCompatible" : "boolean", 
                "coffeeFlavor" : "string", 
                "packSize": "string"
            }
        },
        VALUE:{
            productType: ["COFFEE_MACHINE_LARGE","COFFEE_MACHINE_SMALL", "ESPRESSO_MACHINE", "COFFEE_POD_LARGE", "COFFEE_POD_SMALL", "ESPRESSO_POD"],
            packSize: ["ONE_DOZEN","THREE_DOZEN", "FIVE_DOZEN", "SEVEN_DOZEN"],
            coffeeFlavor: ["COFFEE_FLAVOR_VANILLA","COFFEE_FLAVOR_CARAMEL", "COFFEE_FLAVOR_PSL", "COFFEE_FLAVOR_MOCHA", "COFFEE_FLAVOR_HAZELNUT"],
        },
        REQUIRED: {
            listProduct : []
        }
    }


}

/**
 -------------------------------------------
 CODE-SIZE-FLAVOR-COUNT/MODEL

 CM001 – small machine, base model
 CM002 – small machine, premium model
 CM003 – small machine, deluxe model, water line compatible
 CM101 – large machine, base model
 CM102 – large machine, premium model, water line compatible
 CM103 – large machine, deluxe model, water line compatible
 EM001 – espresso machine, base model
 EM002 – espresso machine, premium model
 EM003 – espresso machine, deluxe model, water line compatible
 CP001 – small coffee pod, 1 dozen, vanilla
 CP003 – small coffee pod, 3 dozen, vanilla
 CP011 – small coffee pod, 1 dozen, caramel
 CP013 – small coffee pod, 3 dozen, caramel
 CP021 – small coffee pod, 1 dozen, psl
 CP023 – small coffee pod, 3 dozen, psl
 CP031 – small coffee pod, 1 dozen, mocha
 CP033 – small coffee pod, 3 dozen, mocha
 CP041 – small coffee pod, 1 dozen, hazelnut
 CP043 – small coffee pod, 3 dozen, hazelnut
 CP101 – large coffee pod, 1 dozen, vanilla
 CP103 – large coffee pod, 3 dozen, vanilla
 CP111 – large coffee pod, 1 dozen, caramel
 CP113 – large coffee pod, 3 dozen, caramel
 CP121 – large coffee pod, 1 dozen, psl
 CP123 – large coffee pod, 3 dozen, psl
 CP131 – large coffee pod, 1 dozen, mocha
 CP133 – large coffee pod, 3 dozen, mocha
 CP141 – large coffee pod, 1 dozen, hazelnut
 CP143 – large coffee pod, 3 dozen, hazelnut
 EP003 – espresso pod, 3 dozen, vanilla
 EP005 – espresso pod, 5 dozen, vanilla
 EP007 – espresso pod, 7 dozen, vanilla
 EP013 – espresso pod, 3 dozen, caramel
 EP015 – espresso pod, 5 dozen, caramel
 EP017 – espresso pod, 7 dozen, caramel
 */