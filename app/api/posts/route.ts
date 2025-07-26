import { NextResponse } from "next/server";
import { getPosts } from "../../get-posts";

export const dynamic = "force-dynamic";

export async function GET() {
  // For API routes, we can use getPosts() since this runs at runtime, not build time
  // But we need to handle the case where Redis is not available
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    // Fallback to static data if Redis is not available
    const postsData = (await import("../../posts.json")).default;
    const posts = postsData.posts.map((post) => ({
      ...post,
      views: 0,
      viewsFormatted: "0",
    }));
    return NextResponse.json(posts);
  }
}
