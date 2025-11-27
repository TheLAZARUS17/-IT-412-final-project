const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <div style="font-family: Helvetica;">
      <div style="font-size: 28px; font-weight: bold;">
        Christian Jay C. Godinez
      </div>
      <div style="font-size: 24px;">
        BSIT BA 4102
      </div>
      <div style="font-size: 32px; font-style: italic; text-align: center; margin-top: 10px;">
        The lion does not concern himself with the opinions of sheep.
      </div>
    </div>
  `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
