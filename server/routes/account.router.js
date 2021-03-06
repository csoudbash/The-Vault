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
    const queryText = `SELECT "accounts"."id", "account_description", "accounts"."username", "accounts"."password", "notes", "url", "folder_name", "folders"."id" AS "folder_id" FROM "accounts"
    JOIN "folders" ON "folders"."id" = "accounts"."folder_id" 
    JOIN "user" ON "folders"."user_id" = $1
    GROUP BY "accounts"."id", "account_description", "accounts"."username", "accounts"."password", "notes", "folder_name", "folders"."id";`;
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
    const folder = req.body.folder// req.body.folder currently set to 1 because 1 is a folder connected to the csoudbash account. this will need to be addressed later. 
    const accountUrl = req.body.url

    const queryText = `INSERT INTO "accounts" ("account_description", "username", "password", "notes", "url", "folder_id")
  VALUES ($1, $2, $3, $4, $5, $6);`;
    pool
      .query(queryText, [accountDescription, username, password, notes, accountUrl, folder])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log('Item Posted Failed: ', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403)
  }
})


// Update this single Account
router.put('/:id', (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  if (req.isAuthenticated()) {
    let username = req.body.newUsername;
    let password = req.body.newPassword;
    let accountDescription = req.body.newAccountDescription;
    let notes = req.body.newNotes;
    let url = req.body.newUrl;
    let folder = req.body.newFolder;

    const idToUpdate = req.params.id;
    const sqlText = `UPDATE "accounts" SET "username" = $1, "password" = $2, "notes" = $3, "account_description" = $4 , "url" = $5, "folder_id" = $6 WHERE "id" = $7;`;
    pool.query(sqlText, [username, password, notes, accountDescription, url, folder, idToUpdate])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });

  } else {
    res.sendStatus(403);
  }

});


router.delete('/:id', (req, res) => {
  if (req.isAuthenticated) {
    let itemId = Number(req.params.id);
    // let userId = Number(req.user.id);
    // console.log(itemId, userId);
    let queryText = `DELETE FROM "accounts" WHERE "id" = $1;`;
    pool
      .query(queryText, [itemId])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Item delete failed: ', err);
        res.sendStatus(500);
      });

  } else {
    sendStatus(403);
  }

});


module.exports = router;
