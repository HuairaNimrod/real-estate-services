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


const createClient = async (req, res) => {
  try{
    const client = req.body;
    const response =  await mongodb.getDb().db('real-estate').collection('clients').insertOne(client);
    if (response.acknowledged) {
      console.log("Client added:", client);
      res.status(201).json(response); // Successfully inserted
    } else {
      res.status(500).json('Some error occurred while creating the client.');
    }
  } catch (err) {
    console.error('Error creating client:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports = { getClients, createClient };