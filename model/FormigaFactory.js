"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formiga_1 = require("./Formiga");
var FormigaFactory = /** @class */ (function () {
    function FormigaFactory() {
    }
    FormigaFactory.buildFormiga = function (quantidadeDeFeromonioQueDeposita) {
        return new Formiga_1.Formiga(quantidadeDeFeromonioQueDeposita);
    };
    return FormigaFactory;
}());
exports.FormigaFactory = FormigaFactory;