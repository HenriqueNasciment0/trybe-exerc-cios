"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const router = (0, express_1.Router)();
const usersController = new users_controllers_1.default();
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
exports.default = router;
