import type { RequestHandler } from "./$types";

export const prerender = true;

export const GET: RequestHandler = async ({ url }) => {
  const domain = url.origin;

  const pages = [
    "",
    "/about",
    "/achievement",
    "/projects",
    "/blog",
    "/my-notes",
    "/contact"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${domain}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" || page === "/about" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
