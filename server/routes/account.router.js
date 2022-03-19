const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET for grabbing the folders from the database
// router.get('/', (req, res) => {
  
// });
// get for grabbing the accounts from the database
router.get('/get/accounts', (req, res) => {

  console.log(req.user);
  if (req.isAuthenticated()) {
    let userId = Number(req.user.id)
    // console.log(userId);
    const queryText = `SELECT "account_description", "accounts"."username", "accounts"."password", "notes", "folder_name" FROM "accounts"
    JOIN "folders" ON "folders"."id" = "accounts"."folder_id" 
    JOIN "user" ON "folders"."user_id" = $1
    GROUP BY "account_description", "accounts"."username", "accounts"."password", "notes", "folder_name";`;
    pool
    .query(queryText, [userId])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log('rut ro scoob', error);
    })
  } else {
    res.sendStatus(403);
  }
});

// router for adding an account from the client side to the database
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const accountDescription = req.body.accountDescription;
    const notes = req.body.notes
    const folder = req.body.folder

    const queryText = `INSERT INTO "accounts" ("account_description", "username", "password", "notes", "folder_id")
  VALUES ($1, $2, $3, $4, $5);`;
    pool
      .query(queryText, [accountDescription, username, password, notes, folder])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log('Item Posted Failed: ', error);
        res.sendStatus(500);
      })
    } else {
      res.sendStatus(403)
    }
  })

module.exports = router;
