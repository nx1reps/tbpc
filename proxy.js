export default async function handler(req, res) {
    try {
        const upstream = await fetch("http://65.109.112.222");
        const body = await upstream.text();

        // Remove headers that block iframe embedding
        res.setHeader("X-Frame-Options", "ALLOWALL");
        res.setHeader("Content-Security-Policy", "frame-ancestors *");

        res.status(200).send(body);
    } catch (err) {
        res.status(500).send("Proxy error");
    }
}
