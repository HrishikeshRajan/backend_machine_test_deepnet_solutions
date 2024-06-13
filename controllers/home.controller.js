
import useHome from "../hooks/useHome.js";
import ApiResponse from "../utils/ApiResponse.js";
import routeHandler from 'express-async-handler';

const homeController = (() => {

    //APIs
    const getConfig = routeHandler(async (req, res) => {
        const config = useHome()
        res.status(200).json(new ApiResponse({config}))
    });



    //Public API
    return {
        getConfig : (req,res,next) => getConfig (req,res,next)
    }

})()


export default homeController