# to install node_module
` yarn ` 
# to start
` yarn nodemon app.js`
# use 

localhost:5000/ducdn         method: GET    => get all data </br>
localhost:5000/ducdn/id      method: GET    => get item have id = id </br>
localhost:5000/ducdn         method: Post   with body: { "name": "blackberry 9700", "cost": 1234} => save  data</br>
localhost:5000/ducdn         method: PUT    with body: {"id":1, "name": "blackberry 9700", "cost": 1234} => update  data</br>
localhost:5000/ducdn/id      method: DELETE => delete  data with id = id </br>
 
