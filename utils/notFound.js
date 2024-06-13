import ApiResponse from "./ApiResponse.js";
export default (req,res) => {
    return  res.status(404).json(new ApiResponse('Page not found', 404, false))
}