import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const getUser = async (req, res) => {
	res.status(StatusCodes.OK).json({ jeff: "ikwuh" });
};

export default getUser;
