const express = require('express');
const amazonMetadataParser = require('amazon-metadata-parser');

const app = express();

let PORT = process.env.PORT || 5000;

app.get('/amazon', async (req, res) => {

    try {

        console.log("Start: " + new Date().getSeconds())
        await amazonMetadataParser('https://www.amazon.com/Let-Be-Beatles/dp/B01929IA56/')
        .then((metadata) => { 
            console.log(metadata);
            res.status(200).json(metadata); 
            console.log("End: " + new Date().getSeconds())
        })
        .catch((error) => { throw error });

        



    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})