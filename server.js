const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple HTTP Server</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          background-color: #e1e0ddff;
        }

        .card {
          background-color: #fff;
          padding: 40px 60px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .info {
          font-family: Inter Tight, serif;
          font-size: 18px;
          text-align: left;
        }

        .quote {
          font-family: Inter Tight, serif;
          font-size: 36px;
          font-style: italic;
          text-align: center;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="info">
          <h1>CHRISTIAN JAY C. GODINEZ</h1>
          <h2>BSIT BA 4102</h2>
        </div>

        <div class="quote">
          <p>"The <strong>lion</strong> does not concern himself with the opinions of <strong>sheep</strong>."</p>
        </div>
      </div>
    </body>
    </html>
  `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
