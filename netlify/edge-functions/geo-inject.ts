import type { Context } from "https://edge.netlify.com";

export default async function handler(request: Request, context: Context) {
  // Debug override via ?country=US
  const url = new URL(request.url);
  const debugCountry = url.searchParams.get("country");

  const country =
    debugCountry ||
    context.geo?.country?.code ||
    request.headers.get("cf-ipcountry") ||
    "GB";

  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const snippet = `<script>window.__COUNTRY__="${country}";</script>`;
  const modifiedHtml = html.replace(
    '<meta charset="UTF-8"/>',
    `<meta charset="UTF-8"/>\n  ${snippet}`
  );

  return new Response(modifiedHtml, {
    status: response.status,
    headers: response.headers,
  });
}

export const config = {
  path: "/*",
};
