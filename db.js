require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

let singletonMongo;

async function connectMongo(){
    if(singletonMongo) return singletonMongo;

    const client = new MongoClient(process.env.MONGO_HOST)
    await client.connect();

    singletonMongo = client.db(process.env.MONGO_DATABASE);
    return singletonMongo
}

async function findAluno(){
    const db = await connectMongo();
    return db.collection("aluno").find().toArray();
}

async function insertAluno(aluno){
    const db = await connectMongo();
    aluno.planoId = new ObjectId(aluno.planoId);
    aluno.usuarioId = new ObjectId(aluno.usuarioId);
    return db.collection("aluno").insertOne(aluno);
}

async function findUsuario(){
    const db = await connectMongo();
    return db.collection("usuario").find().toArray();
}

async function insertUsuario(usuario){
    const db = await connectMongo();
    return db.collection("usuario").insertOne(usuario);
}

async function findPlano(){
    const db = await connectMongo();
    return db.collection("plano").find().toArray();
}

async function insertPlano(plano){
    const db = await connectMongo();
    return db.collection("plano").insertOne(plano);
}

async function findAssinatura(){
    const db = await connectMongo();
    return db.collection("assinatura").find().toArray();
}

async function insertAssinatura(assinatura){
    const db = await connectMongo();
    return db.collection("assinatura").insertOne(assinatura);
}

module.exports = {
    insertUsuario,
    insertAluno,
    insertPlano,
    //insertAssinatura,
    findUsuario,
    findPlano,
    findAluno,
    findAssinatura,
    //deleteUsuario,
    //deleteAluno,
    //deletePlano,
    //deleteAssinatura
}