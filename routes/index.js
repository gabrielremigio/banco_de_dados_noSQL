var express = require('express');
var router = express.Router();
const db = require("../db")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/save_usuario", async (req, res) => {
  try {
    const usuario = req.body;
    const result = await db.insertUsuario(usuario);
    console.log('Usuário salvo:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
    res.status(500).json({ error: 'Erro ao salvar usuário' });
  }
});

router.post("/save_aluno", async (req, res) => {
  try {
    const aluno = req.body;
    const result = await db.insertAluno(aluno);
    console.log('Aluno salvo:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao salvar aluno:', error);
    res.status(500).json({ error: 'Erro ao salvar aluno' });
  }
});
module.exports = router;
