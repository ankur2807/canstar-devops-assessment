const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/now') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(new Date().toLocaleString());
    } else {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

