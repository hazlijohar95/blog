import { Redis } from "@upstash/redis";

// Lazy-load Redis connection to avoid build-time errors
let redisInstance: Redis | null = null;

function getRedis(): Redis {
  if (!redisInstance) {
    if (!process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error("UPSTASH_REDIS_REST_TOKEN is not defined");
    }

    if (!process.env.UPSTASH_REDIS_REST_URL) {
      throw new Error("UPSTASH_REDIS_REST_URL is not defined");
    }

    redisInstance = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return redisInstance;
}

export default getRedis;
