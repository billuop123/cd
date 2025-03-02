"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("db/client");
const app = (0, express_1.default)();
app.get("/", async (req, res) => {
    const user = await client_1.prisma.user.findMany({});
    return res.json({
        user,
        message: "This is nice"
    });
});
app.post("/add", async (req, res) => {
    const user = await client_1.prisma.user.create({
        data: {
            username: "Biplov",
            password: "mrcool10"
        }
    });
    return res.json({
        user
    });
});
app.get("/users", async (req, res) => {
    const users = await client_1.prisma.user.findMany({});
    return res.json({
        users
    });
});
app.listen(3000);
