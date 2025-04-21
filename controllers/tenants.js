const { ObjectId } = require('mongodb');
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

const updateClient =  (req, res) => {
  try {
    const client = req.body;
    const clientId = new ObjectId(req.params.id);

    mongodb.getDb().db('real-estate').collection('clients').findOneAndUpdate({_id:clientId},{$set:client} )
      .then(response =>{
        if(response){
          console.log("Client updated:", client);
          res.status(200).send(client);
        }
        else{
          res.status(404).json({ message: 'Client not found' });
        }
          
      })
      .catch(
        err => {
          throw err; // Manually throw to be caught in the catch block
      });
      
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ error: error.message });
  }
};

const deleteClient = (req, res) =>{

  const clientId = new ObjectId(req.params.id);
try{
  mongodb.getDb().db('real-estate').collection('clients').deleteOne({_id:clientId})
      .then(response => {
        if(response.deletedCount ==1){
          console.log("Client deleted");
          res.status(200).send(response);
        }
        else{
          res.status(404).json({ message: 'Client not found' });
        }
    })
  }
catch(error){
  console.error('Error creating client:', error);
    res.status(500).json({ error: error.message });
}
  

};

module.exports = { getClients, createClient, updateClient, deleteClient };