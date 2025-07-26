export const revalidate = 60;

import { ImageResponse } from "next/og";
import { getPosts } from "@/app/get-posts";
import { readFileSync } from "fs";
import { join } from "path";

const fontsDir = join(process.cwd(), "fonts");

const inter300 = readFileSync(
  join(fontsDir, "inter-latin-300-normal.woff")
);

const inter600 = readFileSync(
  join(fontsDir, "inter-latin-600-normal.woff")
);

const robotoMono400 = readFileSync(
  join(fontsDir, "roboto-mono-latin-400-normal.woff")
);

export async function GET() {
  // Import posts data directly without Redis for build-time generation
  const postsData = (await import("../posts.json")).default;
  const posts = postsData.posts.map((post) => ({
    ...post,
    views: 0,
    viewsFormatted: "0",
  }));

  return new ImageResponse(
    (
      <div
        tw="flex p-10 h-full w-full bg-white flex-col"
        style={font("Inter 300")}
      >
        <header tw="flex text-[36px] w-full">
          <div tw="font-bold" style={font("Inter 600")}>
            Hazli Johar
          </div>
          <div tw="grow" />
          <div tw="text-[28px]">hazlijohar.com</div>
        </header>

        <main tw="flex mt-10 flex-col w-full" style={font("Roboto Mono 400")}>
          <div tw="flex w-full text-[26px] text-gray-400 mb-3">
            <div tw="w-24">date</div>
            <div tw="grow">title</div>
            <div>views</div>
          </div>

          {posts.map((post, i) => (
            <div
              key={post.id}
              tw="flex py-6 text-[26px] border-gray-300 border-t w-full"
            >
              <div tw="flex text-gray-400 w-24">
                {posts[i - 1] === undefined ||
                  getYear(post.date) !== getYear(posts[i - 1].date)
                  ? getYear(post.date)
                  : ""}
              </div>
              <div tw="flex grow">{post.title}</div>
              <div tw="flex text-gray-400 pl-7">{post?.viewsFormatted}</div>
            </div>
          ))}
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter 300",
          data: inter300,
        },
        {
          name: "Inter 600",
          data: inter600,
        },
        {
          name: "Roboto Mono 400",
          data: robotoMono400,
        },
      ],
    }
  );
}

// lil helper to convert posts.json `date` to full year
function getYear(date: string) {
  return new Date(date).getFullYear();
}

// lil helper for more succinct styles
function font(fontFamily: string) {
  return { fontFamily };
}
