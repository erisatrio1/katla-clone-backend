import { baseResponse } from "../../../../utils/Response.js";
import { getSolutionsRepo } from "../repository/solutionsRepo.js";

export const getSolutions = async(req, res) => {
    const solutions =  await getSolutionsRepo()

    res.status(200).json(baseResponse(200, '', solutions.results))
}