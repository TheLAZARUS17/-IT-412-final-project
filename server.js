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
            align-items: center;
            background-color: #fff;
        }

        .card {
            background-color: #ff3700ff;
            color: #fff;
            padding: 20px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .info {
            font-family: Inter Tight, serif;
            font-size: 12px;
            text-align: left;
            color: #ff3700ff;
        }

        .quote {
            font-family: Inter Tight, serif;
            font-size: 45px;
            text-align: center;
            margin-top: 40px;
        }
    </style>
</head>

<body>
    <div>
        <div class="info">
            <h1>CHRISTIAN JAY C. GODINEZ</h1>
            <h2>BSIT BA 4102</h2>
            <p>Just a simple student with outrageous dreams.</p>
        </div>
        <div class="card">
            <div class="quote">
                <p>"The <em>lion</em> does not concern himself with the opinions of <em>sheep</em>."</p>
            </div>
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
