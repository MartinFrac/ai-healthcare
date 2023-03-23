export default async function handler(req, res) {
  const { symptoms, nhsNumber } = req.body;
  let symptomsUnderscore = []
  symptoms.forEach((s, index) => symptomsUnderscore.push(s.replaceAll(' ', '_')));
  const response = await fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symptoms: symptomsUnderscore,
      nhsNumber: nhsNumber
    }),
  });
  const data = await response.json();

  res.status(200).json(data);
}
