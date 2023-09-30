// Connection URL and database name
const url = "mongodb://localhost:27017";
const dbName = "CraftShop";

// Query to create a new collection
db.createCollection("myCollection");

// Query to remove a collection from the database
db.myCollection.drop();

// Query to insert a single document into a collection
db.myCollection.insertOne({
  name: "John",
  age: 25,
  city: "New York",
});

// Query to delete/remove a single document from the collection
db.myCollection.deleteOne({ name: "John" });
