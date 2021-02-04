"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FormsController_1 = __importDefault(require("../controller/FormsController"));
var FormsFrontPoint_1 = __importDefault(require("../controller/frontpoint/FormsFrontPoint"));
var routes = express_1.Router();
routes.post('/formdatas', FormsController_1.default.getDataForm); // <- linkedin form
routes.post('/fpcarreira', FormsFrontPoint_1.default.Carreira);
routes.post('/fpnegocio', FormsFrontPoint_1.default.Negocio);
routes.post('/fpcontato', FormsFrontPoint_1.default.Contato);
routes.post('/fplinkedin', FormsFrontPoint_1.default.Linkedin);
//Rota de teste
routes.post('/testrequest', function (req, res) {
    var data = req.body;
    return res.json(data);
});
exports.default = routes;
