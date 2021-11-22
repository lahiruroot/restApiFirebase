import * as functions from "firebase-functions";
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as bodyParse from 'body-parser'
// import { provider } from "firebase-functions/v1/analytics";

admin.initializeApp(functions.config().firebase);

const app=express()
const main=express()

main.use('/Myapi',app)
main.use(bodyParse.json())
main.use(bodyParse.urlencoded({extended:false}))

const db=admin.firestore()
export const lkApi=functions.https.onRequest(main)

interface Product
{
    productName:string,
    productPrice:string
}

app.post('/saveProducts',async(req,res)=>{
    const Product:Product={
        productName:"Bag",
        productPrice:"1000"
    }
    await db.collection("productOnSale").add(Product)
})