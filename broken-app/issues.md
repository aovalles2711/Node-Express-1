# Broken App Issues

1. Need JSON middleware on Express server to read and parse the JSON body. The body of the POST request will not be read/parsed and req.body will be empty.

2. Rather than requesting a response via a stringified code, we can simplify the JSON from:

`return res.send(JSON.stringify(out));`

to:

`app.post('/', function(req, res, next) {
    return res.json({ fname: req.params.name });
});`

3. As mentioned previously, the Express app lacks proper authentication, hence the need for middleware to authenticate before granting access to restricted resources such as a database of people with information.

4. The app also lacks simple error callbacks.
