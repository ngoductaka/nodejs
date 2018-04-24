# to install node_module
` yarn ` 
# to start
## start with mongoo `use mlap`
` yarn start_mongo`
## start with postgresql `use local databse`
`if use postgresql need install postgresql have same config in .env file`
` yarn start_sql`
# use
## use with mongo 
http://localhost:5001/ducdn          `method: GET    => get all data `</br>
http://localhost:5001/ducdn/id      </br>`method: GET    => get item have id = id` </br>
http://localhost:5001/ducdn         </br>`method: Post   => with body: { "name": "blackberry 9700", "cost": 1234} => save  data`</br>
http://localhost:5001/ducdn         </br>`method: PUT   => with body: {"id":1, "name": "blackberry 9700", "cost": 1234} => update  data`</br>
http://localhost:5001/ducdn/id      </br>`method: DELETE => delete  data with id = id `</br>
 ## use with postgresql 
http://localhost:5002/ducdn         </br>`method: GET    => get all data `</br>
http://localhost:5002/ducdn/id      </br>`method: GET    => get item have id = id` </br>
http://localhost:5002/ducdn         </br>` method: Post  => with body: { "name": "blackberry 9700", "price": 1234} => save  data`</br>
http://localhost:5002/ducdn/id      </br>` method: PUT    =>with body: {"name": "blackberry 9700", "price": 1234} => update  data`</br>
http://localhost:5002/ducdn/id      </br>`method: DELETE => delete  data with id = id `</br>
