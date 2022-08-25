import {Db,MongoClient} from 'mongodb'
const MONGO_URI='mongodb+srv://bahaa1985:20202080@cluster0.nes5a.mongodb.net/?retryWrites=true&w=majority'
const MONGO_DB='Teams'

let cachedClient
let cachedDb

export default async function connectToDatabase(){
    if(cachedClient && cachedDb){
        return{
            client:cachedClient,
            db:cachedDb
        }
    }

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    //connect to cluster:
    let client=new MongoClient(MONGO_URI)
    await client.connect()
    let db=client.db(MONGO_DB)

    cachedClient=client
    cachedDb=db

    return{
        client:cachedClient,
        db:cachedDb,
    }
}
