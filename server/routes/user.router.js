const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.post('/addfolder', (req,res) => {
console.log('hello');
let userId = Number(req.user.id)
console.log(req.user.id);
const queryText = `INSERT INTO "folders" ("user_id", "folder_name")
VALUES ($1, 'none');`;
pool
  .query(queryText, [userId])
  .then(() => res.sendStatus(201))
  .catch((error) => {
    console.log(error, 'rut ro scoob');
  })
})


// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(

      (response) => {
        let userId = response.rows[0].id
        const queryText = `INSERT INTO "folders" ("user_id", "folder_name") VALUES ($1, 'none');`;
        pool
          .query(queryText, [userId])
          .then(() => res.sendStatus(201))
          .catch((error) => {
            console.log(error, 'folder adding failed');
            res.sendStatus(500);
          })
      })
  // send none folder to databse here by doing

  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
