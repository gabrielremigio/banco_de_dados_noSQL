var express = require('express');
var router = express.Router();
const db = require("../db")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const resultUsuario = await db.findUsuario();
  const resultAluno = await db.findAluno();
  const resultPlano = await db.findPlano();
  const resultAssinatura = await db.findAssinatura();

  res.render('index', { title: 'Sistema da Academia', resultUsuario, resultAluno, resultPlano, resultAssinatura });
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

router.post("/save_plano", async (req, res) => {
  try {
    const plano = req.body;
    const result = await db.insertPlano(plano);
    console.log('Plano salvo:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao salvar plano:', error);
    res.status(500).json({ error: 'Erro ao salvar plano' });
  }
});

router.post("/save_assinatura", async (req, res) => {
  try {
    const assinatura = req.body;
    const result = await db.insertAssinatura(assinatura);
    console.log('Assinatura salva:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao salvar assinatura:', error);
    res.status(500).json({ error: 'Erro ao salvar assinatura' });
  }
});
module.exports = router;
