const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const data = require('./data_2021.json');

app.get('/', (req, res) => {
    console.log(data)
    res.send(data);  
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});
