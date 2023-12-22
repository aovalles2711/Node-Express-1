const fs = require('fs');
const process = require('process');
const content = 'This will be added to the file!';
const express = require('express');
const app = express();
const router = new express.Router();
const users = [];

// Script that is called on command line like `node urls.js FILENAME`, and it reads the contents of FILENAME(each line of that will be a URL).

try {
    // store the read file contents
    var contents = fs.readFileSync('urls.txt', 'utf8');
    console.log(`file contents are "${contents}"`);
} catch (error) {
    // errors thrown by fs will be caught here
    console.error(error);
    // kill the process and tell the shell it errored
    process.exit(1);
}

try {
    fs.writeFileSync('urls.txt', content);
    console.log('Successfully wrote to file!');
} catch (error) {
    console.error(`File write failed: ${error}`)
    process.exit(1);
}

// For each URL, the output filename should be the hostname of the URL.
    
/** GET /urls: get list of URLs */

router.get("/", function(req, res) {
    return res.json(users);
});

router.delete("/:urls", function(req, res) {
    const idx = users.findIndex(u => u.id === +req.params.id);
    users.splice(idx, 7);
    return res.json({message: "Output filename is now hostname of the URL."});
});

// // For each URL, it will get that page (a GET request to the URL) and save the HTML in a new file.
// // middleware
// app.use(express.urlencoded({extended:true}))

// // Read existing data from JSON file

// let users = require("./message.json")

// // API routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    })

app.post("/", function(req, res) {

    let html = req.body.html;

    let formData = {
        html: html
    }

    res.send(formData)

    // add new user data to users object using push method
    users.push(formData)

    // write data in a JSON file
    fs.writeFile('message.json', JSON.stringify(users), err => {
        if(err) throw err

        console.log("Successfuly wrote to JSON file!")
    })

    // Write the new info in the text file named `message`

    fs.writeFile('./message.txt', JSON.stringify(users), err => {
        if(err) throw err

        console.log("Successfully wrote to text file!")
});
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
})