const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors')
const stripe = require('stripe')('sk_test_51IZ4hTFM3wQd183WD3KGDtXT1tOxIt3lv2EveXXFFB1UYzRlwW3LCQfBC9zJ8Ift93oDIIDZBvcNZCv4gqMw1ENn00n9scZbxT')

//API

//App config- for setting up an api
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create" , async (request, response) => {
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    //getting amount in subunits
    const total = request.query.total;

    console.log("payment request received: ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //everything good, but something created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

//listen command
exports.api = functions.https.onRequest(app)

//endpoint eg- http://localhost:5001/ama-store1/us-central1/api (default one- hello world)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
