export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || "Unknown";
  const userAgent = req.headers['user-agent'] || "Unknown";
  const country = req.headers['x-vercel-ip-country'] || "Unknown";
  const city = req.headers['x-vercel-ip-city'] || "Unknown";

  console.log(`Visitor: ${ip} | ${city} | ${country} | ${userAgent}`);

  res.status(200).json({ status: "logged" });
}
