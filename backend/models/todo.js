const mongoose = require('mongoose')
 
 // Declare Schema
 const TodoSchema = new mongoose.Schema(
   {
     description: { type: String },
     done: { type: Boolean },
   }, 
   // adding option {timestamps: true}automatically sets createdAt and updatedAt values on the model in your mongo database.
   { timestamps: true }
 );
 
 // Declare Model to mongoose with Schema
 const Todo = mongoose.model('Todo', TodoSchema)
 
 // Export Model to be used in Node
 module.exports = mongoose.model('Todo')