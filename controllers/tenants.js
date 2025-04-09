const mongodb = require('../db/connect');

const getClients = (req, res) => {

  try{
    const result =  mongodb.getDb().db('real-estate').collection('clients').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
  }
  catch(err){
    res.status(500).json(err);
  }  
};


const createClient = (req, res) => {
  try {
    const client = req.body;
    // Wrapping the async operation in a Promise to allow try-catch
    mongodb.getDb().db('real-estate').collection('clients').insertOne(client)
      .then(response => {
        if (response.acknowledged) {
          console.log("Client added:", client);
          res.status(201).json(response); // Successfully inserted
        } else {
          res.status(500).json('Some error occurred while creating the client.');
        }
      })
      .catch(err => {
        throw err; // Manually throw to be caught in the catch block
      });
  } catch (err) {
    console.error('Error creating client:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

const updateClient = async (req, res) => {
  try {
    await mongodb.getDb().db('real-estate').collection('clients').findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send('Operation update');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getClients, createClient, updateClient };