"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const passportConfig = require('./services/passport');
const app = (0, express_1.default)();
require('./routes/authRoutes')(app);
const port = 5000;
app.listen(port, () => {
    console.log(`Running on ${port}`);
});
//# sourceMappingURL=index.js.map