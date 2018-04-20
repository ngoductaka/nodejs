# to install node_module
` yarn ` 
# to start
` yarn nodemon app.js`
### localhost:5000/ducdn         method: GET    => get all data
### localhost:5000/ducdn/id      method: GET    => get item have id = id
### localhost:5000/ducdn         method: Post   with body: { "name": "blackberry 9700", "cost": 1234} => save  data
### localhost:5000/ducdn         method: PUT    with body: {"id":1, "name": "blackberry 9700", "cost": 1234} => update  data
### localhost:5000/ducdn/id      method: DELETE => delete  data with id = id 
