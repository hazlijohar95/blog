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

// Cache for fallback data to avoid repeated processing
let fallbackCache: Post[] | null = null;

const createFallbackPosts = (): Post[] => {
  if (fallbackCache) return fallbackCache;
  
  fallbackCache = postsData.posts.map((post): Post => ({
    ...post,
    views: 0,
    viewsFormatted: "0",
  }));
  
  return fallbackCache;
};

export const getPosts = async (): Promise<Post[]> => {
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
    console.warn("Redis not available, using static data:", error instanceof Error ? error.message : 'Unknown error');
    return createFallbackPosts();
  }
};
