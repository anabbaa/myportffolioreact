const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan("dev"));
// Allow Express to understand json
app.use(express.json());

// Middleware
app.use(bodyParser.json());

// Mongoose

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Contact = mongoose.model('Contact', ContactSchema);


// POST route for handling contact form submission


app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log(newContact);
    res.status(200).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

app.get(`/api/contact`, ()=>{
  console.log("ssss");
})

module.exports = app;
