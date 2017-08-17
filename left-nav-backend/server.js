const express = require('express')
const app = express()


const leftNavData = {
  "links": [
      {
        "id": "nyc-node",
        "name": "App Automation",
        "url": "/nyc-node",
        "regexp": "^\/nyc-node$",
        "submenu": [
          {
            "id": "nyc-node-about-us",
            "name": "About Us",
            "url": "/nyc-node/about-us",
            "regexp": "^\/nyc-node\/about-us"
          },
          {
            "id": "nyc-node-talks",
            "name": "Talks",
            "url": "/account/addressbook?cm_sp=my_account-_-account-_-my_address_book",
            "regexp": "^\/nyc-node\/talks"
          },
          {
            "id": "nyc-node-contact-us",
            "name": "Contact Us",
            "url": "/account/wallet?cm_sp=my_account-_-account-_-my_bwallet",
            "regexp": "^\/nyc-node\/contact-us"
          },
          {
            "id": "nyc-node-more",
            "name": "More",
            "url": "/nyc-node/more",
            "regexp": "^\/nyc-node\/more"
          }
        ]
      }
    ]
  };
app.get('/api/v1/left-nav', function (req, res) {
  res.send(leftNavData);
})

app.listen(3030, function () {
  console.log('left-nav-backend is listening on port 3030!')
})