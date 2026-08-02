import type { RequestHandler } from "./$types";

export const prerender = true;

const SITE_URL = "https://www.abdulganihadiansyah.my.id";

export const GET: RequestHandler = async () => {
  const pages = [
    "",
    "/about",
    "/achievement",
    "/projects",
    "/blog",
    "/my-notes",
    "/contact"
  ];

  const urls = pages
    .map(
      (page) =>
        `<url><loc>${SITE_URL}${page}</loc><changefreq>weekly</changefreq><priority>${page === "" || page === "/about" ? "1.0" : "0.8"}</priority></url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "max-age=0, s-maxage=3600"
    }
  });
};
