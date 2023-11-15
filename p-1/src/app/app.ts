import {error} from "console";
import express, {NextFunction, Request, Response} from "express";
const app = express();
const morgan = require("morgan");

// parser
app.use(express.json());
app.use(express.text());
app.use(morgan("dev"));

//
const userRouter = express.Router();
app.use("/api/v1/users", userRouter);

const courseRouter = express.Router();
app.use("/api/v1/crouse", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    succss: true,
    message: " User is Created Successfully",
    data: user,
  });
});

courseRouter.post("/create-crouse", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    succss: true,
    message: " course is Created Successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};
app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.query);
      res.send("Hello  Developer!");
    } catch (err) {
      next(error);
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "succsfully resived  data",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not Found ",
  });
});

// global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "failed to get data",
    });
  }
  console.log(error);
});
export default app;
