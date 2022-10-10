sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("moovi.m06a02.controller.View1", {
            onInit: function () {

                let oComapyInput2 = this.byId("companyInput2");

                oComapyInput2.bindProperty("value","companyModel>/ScarrSet/Carrname");


            }
        });
    });
