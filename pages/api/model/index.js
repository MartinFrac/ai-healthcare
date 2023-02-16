export default async function handler(req, res) {
  const { exp } = req.body;
  const response = await fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      exp: exp,
    }),
  });
  const data = await response.json();

  res.status(200).json(data);
}
