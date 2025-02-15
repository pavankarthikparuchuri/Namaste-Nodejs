const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://pavankarthikparichuri2001:4eM2j805w09snKb5@namastenode.jwybp.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const user = {
    firstName: "Sriram",
    lastName: "Paruchuri",
    city: "Bangalore",
    country: "India",
    "phone number": 9949928301,
  };

  // const insertResult = await collection.insertMany([user]);
  // console.log("Inserted documents =>", insertResult);
  // const findResult = await collection.find({ firstName: "Sriram" }).toArray();
  // console.log("Found documents =>", findResult);
  const deleteResult = await collection.deleteMany({ firstName: "Sriram" });
  console.log("Deleted documents =>", deleteResult);

  const updateRecord = await collection.updateOne(
    { firstName: "Pavan Karthik" },
    { $set: { firstName: "Pavan" } }
  );
  const findRecords = await collection.find({}).toArray();
  //just doing a find returns you data in the form of cursor datatype, convert it into array
  //it gives the result as a cursor, so that we can chain the result for some other operation.
  // example:- await collection.find({}).countDocuments({})
  console.log("findRecords = ", findRecords);

  const countRecords = await collection.countDocuments({});
  console.log(countRecords, "::countRecords");
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
