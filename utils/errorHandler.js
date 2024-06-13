const errorHandler = (err,req,res) => {
return res.status(500).json(new ApiResponse(err.name,500,false ))
} 

export default errorHandler