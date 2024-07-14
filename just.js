const http=require("http");
const server= http.createServer((req, res) => {
if (req.url === "/"){
    res.end('<h1>Camping place 5th response</h1>');
} else if (req.url==="/Camping-places"){
    res.end('<h1>Seoul</h1> <br> <h1>Busan</h1> <br> <h1>Daejon</h1> <br> <h1>Suwon</h1>')
} else {
    res.end('<h1>404 ERROR</h1>')
}
})

const PORT= process.env.PORT || 5005;
server.listen(PORT, () => {
console.log("Server running on port", PORT)
});
