const mongoose = require('mongoose');

// Connection URI
const uri = "mongodb+srv://cmmangal523:SxQOHOrlVv5JAHYn@hts.q3tn9.mongodb.net/?retryWrites=true&w=majority&appName=HTS";

// Define a schema for the data
const itemSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true }
});

// Create a model based on the schema
const Item = mongoose.model('Item', itemSchema);

async function checkMongoDBConnection() {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connection successful!');

        // Create a new item
        const newItem = new Item({ id: 1, name: 'mangal' });

        // Save the new item to the database
        await newItem.save();
        console.log('New item added:', newItem);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkMongoDBConnection();