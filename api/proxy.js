export default async function handler(req, res) {
  try {
    const upstream = await fetch("tiktok.com");
    const body = await upstream.text();

    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Content-Security-Policy", "frame-ancestors *");

    res.status(200).send(body);
  } catch (err) {
    res.status(500).send("Proxy error");
  }
}
