import Solution from "../../../../infra/mongoDB/Solutions.js";
import { dbResult } from "../../../../utils/Response.js";


export const getSolutionsRepo = async(req, res ) => {
    const solutionsRepo = await Solution.find();

    return dbResult(solutionsRepo);
} 