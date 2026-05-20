import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

import dotenv from "dotenv";

dotenv.config();

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

console.log("URL:", process.env.UPSTASH_REDIS_REST_URL);
console.log("TOKEN:", process.env.UPSTASH_REDIS_REST_TOKEN);

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2,"90 s"),
})

export default ratelimit