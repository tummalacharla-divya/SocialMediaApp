const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://social-media-app:social-media-app@cluster0.wmkpms2.mongodb.net/social-media-app?retryWrites=true&w=majority'
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017