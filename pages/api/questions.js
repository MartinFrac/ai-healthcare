export default function handler(req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        content: "Do you have symptop 1?",
        answers: [
          {
            id: 1,
            content: "Yes"
          },
          {
            id: 2,
            content: "No"
          }
        ]
      },
      {
        id: 2,
        content: "Do you have symptop 2?",
        answers: [
          {
            id: 1,
            content: "No"
          },
          {
            id: 2,
            content: "Yes"
          }
        ]
      },
      {
        id: 3,
        content: "Do you have symptop 3?",
        answers: [
          {
            id: 1,
            content: "Yes"
          },
          {
            id: 2,
            content: "No"
          }
        ]
      }
    ]
  )
}