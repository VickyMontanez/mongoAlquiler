# "Alquiler de Carros" - mongoDB



This project involves developing a car rental system using MongoDB as the database. In this project, queries will be executed to create, insert data, and configure the database, utilizing an extension for mongodb (:sparkles:MongoDB for VS Code:sparkles:).

[Here](https://github.com/VickyMontanezCampus/aquilerCarrosMongoDB/blob/main/docs/Alquiler_de_Autos.pdf) are the different queries that were performed in the activity.

(You can use the :sparkles:"vscode-pdf":sparkles: extension to view the PDF.)



# Database Reference:sparkles:

[![img](https://github.com/JoseCabrejoVillarCampus/mongoDB/raw/main/img/f0a1e19f-3e39-4a35-83b8-6b9fce05d285.jpeg)]()



# Basic Methods of MongoDB:sparkles:



### use

In MongoDB, you don't need to explicitly create a database. Simply choose a database when you start inserting data into it. You can select or create a database using the ``   use database_name`` command.

```
use mi_base_de_datos;
```



### createCollection

The `createCollection` function is used to explicitly create a new collection in a database. While MongoDB allows collections to be created dynamically when data is inserted, sometimes it's useful to create a collection before inserting documents to have greater control over its options, such as indexes, storage options, validations, etc.

```
db.createCollection(name, options);
```



### insertOne

The `insertOne` method is used to insert a single document into a collection.

```
db.my_collection_name.insertOne(document);

db.my_collection_name.insertOne({
  key1: "value1",
  key2: "value2"
});
```



### insertMany

The `insertMany` method is used to insert multiple documents into a collection.

```
db.my_collection_name.insertMany([document1, document2, ...]);

db.my_collection_name.insertMany([
  { key1: "value1", key2: "value2" },
  { key1: "value3", key2: "value4" }
]);

```



### updateOne and updateMany

The `update` method is used to update documents in a collection. However, starting from MongoDB 4.2, it's recommended to use `updateOne` or `updateMany` as the `update` method is deprecated.

```
//updateOne

db.my_collection_name.updateOne(
  { key1: "value1" },
  { $set: { key2: "new_value" } }
);

// updateMany

db.my_collection_name.updateMany(
  { key1: "value1" },
  { $set: { key2: "new_value" } }
);
```



### deleteOne and deleteMany

Similar to `update`, the `delete` method is also deprecated, and it's recommended to use `deleteOne` or `deleteMany` to remove documents.

```
// deleteOne

db.my_collection_name.deleteOne({ key1: "value1" });

// deleteMany

db.my_collection_name.deleteMany({ key1: "value1" });
```



### find

The `find` method is used to perform queries on a collection and retrieve documents that match a given filter.

```
db.my_collection_name.find(  filter );
```



### aggregate

The `aggregate` method is used to perform aggregation operations on the documents within a collection. This enables more complex transformations and calculations to be performed on the data.

```
db.my_collection_name.aggregate([ { stage1 },  { stage2 }, ... ]);
```



## MongoDB Operators



## $lookup

The `$lookup` operator is used to perform a "left outer join" operation between two collections. It allows combining documents from one collection with documents from another collection based on a common field.

```
db.my_collection_name.aggregate([
  {
    $lookup: {
      from: <collection to join>,
      localField: <field from the input documents>,
      foreignField:<field from the documents of the "from" collection>,
      as: <output array field>
    }
  }
]);

```



## $project

The `$project` operator is used to select specific fields from documents and reshape the output.

```
db.my_collection_name.aggregate([
  {
    $project: {
      name: 1,
      price: 0
    }
  }
]);
```



## $group

The `$group` operator is used to group documents and perform aggregation calculations within those groups.

```
db.my_collection_name.aggregate([
  {
    $group: {
      _id: <expression>, // Group key
      <field1>: { <accumulator1> : <expression1> },
      ...
    }
  }
]);
```



## $match

The `$match` operator is used to filter documents in the aggregation pipeline stage.

```
db.my_collection_name.aggregate([
  {
    $match: <query>
  }
]);

```



## $unwind

The `$unwind` operator is used to unwind an array field into individual documents. This is useful when you want to perform aggregation operations on individual elements within the array.

```
db.my_collection_name.aggregate([
  {
    $unwind: <field path> 
  }
]);
```



## $addFields

The `$addFields` operator is used to add calculated fields to the documents in the aggregation pipeline stage.

```
db.my_collection_name.aggregate([
	{
        $addFields: { <newField>: <expression>, ... }
    }
]);
```



## $sort

Sorts all input documents and returns them to the pipeline in sorted order..

```
 { $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }
```



## $sum

Calculates and returns the collective sum of numeric values. [`$sum`](https://www.mongodb.com/docs/upcoming/reference/operator/aggregation/sum/#mongodb-group-grp.-sum) ignores non-numeric values.

```
	 { $sum: <expression> }
```



## $gt

selects those documents where the value of the field is greater than (i.e. >) the specified value.

```
    { field: { $gt: value } }
```



## $gte

selects the documents where the value of the field is greater than or equal to (i.e. >=) a specified value (e.g. value.).

```
    { field: { $gte: value } }
```



## $lt

selects the documents where the value of the field is less than (i.e. <) the specified value.

```
    { field: { $lt: value } }
```



## $lte

selects the documents where the value of the field is less than or equal to (i.e. <=) the specified value.

```
    { field: { $lte: value } }
```



#### Autor✨

Vicky Vanessa Montañez Molina ---

- [vmontanez707@gmail.com](mailto:vmontanez707@gmail.com)
- https://github.com/VickyMontanezCampus