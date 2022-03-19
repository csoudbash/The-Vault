const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        // console.log(req.body.folder);
        // console.log('hello');
        // console.log(userId);
        let folder = req.body.folder
        let userId = Number(req.user.id);
        const queryText = `INSERT INTO "folders" ("user_id", "folder_name") VALUES( $1, $2 );`;

        pool
            .query(queryText, [userId, folder])
            .then(() => res.sendStatus(201))
            .catch((error) => {
                console.log('Item Posted Failed: ', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403)
    }
});

 router.get('/', (req, res) => {

        // console.log(req.user);
        if (req.isAuthenticated()) {
            // console.log('hello');
          let userId = Number(req.user.id)
        //   console.log(userId);
          const queryText = `SELECT "id", "user_id", "folder_name" FROM "folders" WHERE "user_id" = $1;`;
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
    
module.exports = router;
