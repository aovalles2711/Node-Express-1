const express = require('express');
const ExpressError = require("./expressError")
let axios = require('axios');
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.post('/', express.json(), function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });

app.get("/users/:username", function(req, res) {
  const user = USERS.find(u => u.username === req.params.username);

  if (!user) throw new ExpressError("Not Found.", 404);

return res.send({user});
})

app.post('/', express.json(), function(req, res, next) {
  if (req.params.fname !== '') {
    return res
              .status(403)
              .json('Only name is allowed.');
  }

  return res.json({ fname: req.body.fname });
});

const port = 3000;
app.listen(port, () => {
  console.log('server is listening on port' + port);
});
