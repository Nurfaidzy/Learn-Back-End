const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check u data about name cuz is empty"],
  },
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

const Fruit = mongoose.model("Fruits", fruitSchema);

const Tfruit = new Fruit({
  rating: 9,
  review: "Nice",
});

// Tfruit.save();

const peopleScema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const people = mongoose.model("People", peopleScema);

const pineapple = new Fruit({
  name: "Rujak",
  rating: 10,
  review: "enak kalilah ini",
});

pineapple.save();

const Tpeople = new people({
  name: "Faizy",
  age: 22,
  favoriteFruit: pineapple,
});

Tpeople.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "bolehlah",
// });

// const Orange = new Fruit({
//   name: "Orange",
//   rating: 10,
//   review: "bolehlah",
// });

// const Banana = new Fruit({
//   name: "Banana",
//   rating: 10,
//   review: "bolehlah",
// });

// Fruit.insertMany([kiwi, Orange, Banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("sukses");
//   }
// });

// Fruit.find(function (err, Tfruit) {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(Tfruit);
//     mongoose.connection.close();
//     Tfruit.forEach(function (Tfruit) {
//       console.log(Tfruit.name);
//     });
//   }
// });

// Fruit.updateOne(
//   { _id: "6342b854ed0ef07f8d38ee0d" },
//   { name: "Peach" },
//   function (err) {
//     err ? console.log(err) : console.log("sukses simpan");
//   }
// );

// Fruit.deleteOne({ _id: "6342b854ed0ef07f8d38ee0d" }, function (err) {
//   err ? console.log(err) : console.log("sukses hapus");
// });

// const findDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection("fruits");
//   // Find some documents
//   collection.find({}).toArray(function (err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
