"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan = require("morgan");
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(morgan("dev"));
//
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
const courseRouter = express_1.default.Router();
app.use("/api/v1/crouse", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        succss: true,
        message: " User is Created Successfully",
        data: user,
    });
});
courseRouter.post("/create-crouse", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        succss: true,
        message: " course is Created Successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        res.send("Hello  Developer!");
    }
    catch (err) {
        next(console_1.error);
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "succsfully resived  data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not Found ",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "failed to get data",
        });
    }
    console.log(error);
});
exports.default = app;
