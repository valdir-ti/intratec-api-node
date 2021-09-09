"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complimentsRouter = void 0;
var express_1 = require("express");
var CreateComplimentsController_1 = require("../../controllers/CreateComplimentsController");
var ListUserSenderComplimentsController_1 = require("../../controllers/ListUserSenderComplimentsController");
var ListUserReceiverComplimentsController_1 = require("../../controllers/ListUserReceiverComplimentsController");
var complimentsRouter = express_1.Router();
exports.complimentsRouter = complimentsRouter;
var createComplimentController = new CreateComplimentsController_1.CreateComplimentController();
var listUserSendComplimentsController = new ListUserSenderComplimentsController_1.ListUserSenderComplimentsController();
var listUserReceiverComplimentsController = new ListUserReceiverComplimentsController_1.ListUserReceiverComplimentsController();
complimentsRouter.post('/compliments', createComplimentController.handle);
complimentsRouter.get('/users/compliments/send', listUserSendComplimentsController.handle);
complimentsRouter.get('/users/compliments/receive', listUserReceiverComplimentsController.handle);
