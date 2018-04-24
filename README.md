# to install node_module
` yarn ` 
# to start
## start with mongoo
` yarn start_mongo`
## start with postgresql
` yarn start_sql`
# use 
## use with mongo 
localhost:5001/ducdn         method: GET    => get all data </br>
localhost:5001/ducdn/id      method: GET    => get item have id = id </br>
localhost:5001/ducdn         method: Post   with body: { "name": "blackberry 9700", "cost": 1234} => save  data</br>
localhost:5001/ducdn         method: PUT    with body: {"id":1, "name": "blackberry 9700", "cost": 1234} => update  data</br>
localhost:5001/ducdn/id      method: DELETE => delete  data with id = id </br>
 ## use with postgresql 
localhost:5002/ducdn         method: GET    => get all data </br>
localhost:5002/ducdn/id      method: GET    => get item have id = id </br>
localhost:5002/ducdn         method: Post   with body: { "name": "blackberry 9700", "price": 1234} => save  data</br>
localhost:5002/ducdn/id         method: PUT    with body: {"name": "blackberry 9700", "price": 1234} => update  data</br>
localhost:5002/ducdn/id      method: DELETE => delete  data with id = id </br>
