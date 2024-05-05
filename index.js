const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send(`Hello Express Backend`);

});

app.post('/', (req, res) => {
    res.send(`Post Data`);
});

app.put('/', (req, res) => {
    res.send(`Update data Sukses`);
});

app.delete('/', (req, res) => {
    res.send(`Hapus data berhasil`);
});


app.listen(port, () => {
    console.log(`server berjalan pada localhost:${port}`);
});