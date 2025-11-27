const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <div>
      <div style="
      font-family: Helvetica;
      font-size: 28px;
      ">
        <h1> <strong>Christian Jay C. Godinez</strong> </h1>
        <h2> BSIT BA 4102 </h2>
      </div>
      
      <div style="
      font-family: Times New Roman;
      font-size: 64px;
      font-style: italic;
      text-align: center;
      margin-top: 10px;
      ">
        <p> "The <strong>lion</strong> does not concern himself with the opinions of <strong>sheep</strong>."
      </div>
    </div>
  `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
