export default async function handler(req, res) {
  const { symptoms } = req.body;
  let symptomsUnderscore = []
  symptoms.forEach((s, index) => symptomsUnderscore.push(s.replace(' ', '_')));
  const response = await fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symptoms: symptomsUnderscore,
    }),
  });
  const data = await response.json();

  res.status(200).json(data);
}
