const admin = require('firebase-admin');
const serviceAccount = require('../firebaseKeys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://space-saver-8dec0.firebaseio.com'
})

const db = admin.database()
console.log("database code run")
module.exports = db;