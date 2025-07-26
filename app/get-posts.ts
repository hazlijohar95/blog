import postsData from "./posts.json";
import getRedis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
};

// shape of the HSET in redis
type Views = {
  [key: string]: string;
};

export const getPosts = async () => {
  try {
    const redis = getRedis();
    const allViews: null | Views = await redis.hgetall("views");
    const posts = postsData.posts.map((post): Post => {
      const views = Number(allViews?.[post.id] ?? 0);
      return {
        ...post,
        views,
        viewsFormatted: commaNumber(views),
      };
    });
    return posts;
  } catch (error) {
    // Fallback to static data if Redis is not available
    console.warn("Redis not available, using static data");
    const posts = postsData.posts.map((post): Post => {
      return {
        ...post,
        views: 0,
        viewsFormatted: "0",
      };
    });
    return posts;
  }
};
