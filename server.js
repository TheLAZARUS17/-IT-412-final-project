const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("<b> Christian Jay C. Godinez </b> <br>");
  res.write("BSIT BA 4102 <br>");
  res.write("<i> The lion does not concern himself with the opinions of sheep. </i> <br>");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
