const mainPage = (req, res) => {
  res.json({ message: "hi123" });
};
//  다른 표현식
// app.get("/", (req, res) => {
//   res.json({ message: "hi" });
// });

// function mainPage(req, res) {
//   res.json({ message: "hi123" });
// }

export { mainPage };
