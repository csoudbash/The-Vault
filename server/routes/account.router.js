const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

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
