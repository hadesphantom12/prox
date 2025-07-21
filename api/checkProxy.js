export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { ip, port } = req.body;
      const url = `https://api-proxy-checker.vercel.app/api/v1?ip=${ip}&port=${port}`;
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: true });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
