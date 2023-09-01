"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
dotenv_1.default.config();
const cookie_session_1 = __importDefault(require("cookie-session"));
const mongoose = require('mongoose');
require('./models/User');
const passportConfig = require('./services/passport');
mongoose.connect(process.env.mongoURI);
const app = (0, express_1.default)();
if (process.env.cookieKey == null) {
    throw new Error('cookieKey environment variable is not set');
}
app.use((0, cookie_session_1.default)({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [process.env.cookieKey] }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
require('./routes/authRoutes')(app);
const port = 5000;
app.listen(port, () => {
    console.log(`Running on ${port}`);
});
//# sourceMappingURL=index.js.map