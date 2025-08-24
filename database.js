const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://athithiyanm87:tNXoF3xWV8lmRvZo@cluster0.rqlm7wk.mongodb.net/';
const client = new MongoClient(url);


const dbName = 'User';


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('NodeDB');

  // the following code examples can be pasted here...
   const data = {
    "name" : "Athi",
    "city" : "coimbatore",
    "age" : "18",
   }

//    const insertData = await collection.insertMany([data])

   const countdoc = await collection.countDocuments({})
   console.log (countdoc)

//    const deleteone = await collection.deleteOne(data)
//    console.log (deleteone)


  return 'done.';
}


main ()  
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



/* procedure : 
        1.) go to mongodm official site there are three ways to create batabase for our project
            * community edition (developer manualy do all the things like deploy the db on server)
            * enterprise (no manual mongodb itself manage all the things)
            * atlas (cloud solution provided by mongodb it too no manual)
        2.) we are using atlas (cloud solution)
        3.) create a free cluster and get the collection string it used to connect the node and mongodb
        4.) download compass used to view the database in gui format that we created in atlas
        5.) npm init
        6.) npm install mongodb (official mongodb package)
         
     */