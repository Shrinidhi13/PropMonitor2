const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const app = express();
const port = process.env.port || 3000;

// Replace the connection string with your actual MongoDB connection string
const connection_string = 'mongodb+srv://Shrinidhi:Shri@crud.8vx9pff.mongodb.net/users';
const database_name = 'users';
const collection_name = 'agents';

app.get('/', async (req, res) => {
    try {
        const client = await MongoClient.connect(connection_string);
        const db = client.db(database_name);
        const collection = db.collection(collection_name);

        const documents = await collection.find().toArray();

        res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>MongoDB Data</title>
        </head>
        <body>
          <h1>MongoDB Data</h1>
          ${documents.map(doc => `
            <div>
              <h2>Name: ${doc.name}</h2>
              <p>Surname: ${doc.surname}</p>
              <p>Email: ${doc.email}</p>
              <p>Need: ${doc.need}</p>
              <p>Message: ${doc.message}</p>
              <p>PDF File: ${doc.pdfFile}</p>
            </div>
            <hr>
          `).join('')}
        </body>
      </html>
    `);

        client.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
