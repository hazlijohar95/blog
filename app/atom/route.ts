export async function GET() {
  // Import posts data directly without Redis for build-time generation
  const postsData = (await import("../posts.json")).default;
  const posts = postsData.posts.map((post) => ({
    ...post,
    views: 0,
    viewsFormatted: "0",
  }));
  const max = 100; // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Hazli Johar</title>
    <subtitle>Essays</subtitle>
    <link href="https://hazlijohar.com/atom" rel="self"/>
    <link href="https://hazlijohar.com/"/>
    <updated>${posts[0].date}</updated>
    <id>https://hazlijohar.com/</id>
    <author>
      <name>Hazli Johar</name>
      <email>hazlijohar95@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/);
      if (!dateMatch) return "";
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://hazlijohar.com/${dateMatch[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`;
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
