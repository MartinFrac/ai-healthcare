export default async function handler(req, res) {
  const { symptoms } = req.body;
  const response = await fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symptoms: symptoms,
    }),
  });
  const data = await response.json();

  res.status(200).json(data);
}
