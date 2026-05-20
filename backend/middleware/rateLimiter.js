import ratelimit from "../config/redis.js";


const rateLimiter = async(req,res,next)=>{
    try {
        const {success} = await ratelimit.limit("my-rate-limit");

        if(!success){
            return res.status(429).json({
                messege:"Too many requests. Try again later"
            })
        };
        
        next();
        
    } catch (error) {
        res.status(503).json({
            messege: "error"
        })
        next(error);
    }


}
export default rateLimiter