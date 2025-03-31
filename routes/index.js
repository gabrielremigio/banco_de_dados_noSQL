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

router.post("/delete_usuario", async (req, res) => {
  try {
    const idUsuario = req.body.idUsuario;
    const result = await db.deleteUsuario(idUsuario);
    console.log('Usuário deletado:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

router.post("/delete_aluno", async (req, res) => {
  try {
    const idAluno = req.body.idAluno;
    const result = await db.deleteAluno(idAluno);
    console.log('Aluno deletado:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao deletar aluno:', error);
    res.status(500).json({ error: 'Erro ao deletar aluno' });
  }
});

router.post("/delete_plano", async (req, res) => {
  try {
    const idPlano = req.body.idPlano;
    const result = await db.deletePlano(idPlano);
    console.log('Plano deletado:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao deletar plano:', error);
    res.status(500).json({ error: 'Erro ao deletar plano' });
  }
});

router.post("/delete_assinatura", async (req, res) => {
  try {
    const idAssinatura = req.body.idAssinatura;
    const result = await db.deleteAssinatura(idAssinatura);
    console.log('Assinatura deletada:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao deletar assinatura:', error);
    res.status(500).json({ error: 'Erro ao deletar assinatura' });
  }
});

router.post("/update_usuario", async (req, res) => {
  try {
    const idUsuario = req.body.idUsuario;
    const sobrenome = req.body.sobrenome;
    const result = await db.updateUsuario(idUsuario, sobrenome);
    console.log('Usuario editado:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao editar usuario:', error);
    res.status(500).json({ error: 'Erro ao editar usuario' });
  }
});

router.post("/update_plano", async (req, res) => {
  try {
    const idPlano = req.body.idPlano;
    const valor = req.body.valor;
    const result = await db.updatePlano(idPlano, valor);
    console.log('Plano editado:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao editar plano:', error);
    res.status(500).json({ error: 'Erro ao editar plano' });
  }
});

router.post("/update_assinatura", async (req, res) => {
  try {
    const idAssinatura = req.body.idAssinatura;
    const status = req.body.status;
    const result = await db.updateAssinatura(idAssinatura, status);
    console.log('Assinatura editada:', result);
    res.json(result);
  } catch (error) {
    console.error('Erro ao editar assinatura:', error);
    res.status(500).json({ error: 'Erro ao editar assinatura' });
  }
});

module.exports = router;
