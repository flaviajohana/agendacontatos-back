"user strict";

const sql = require("./../db");
const express = require("express");
const router = express.Router();

router.route("/deletar/(:id)").delete(function(req, res) {
  var contatoid = req.params.id;

  let query = "DELETE FROM `contato`  WHERE id = " + contatoid;
  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows == 0) {
      return res.json({ success: 0, message: "Nenhum item deletado" });
    }
    res.json({ success: 1 });
  });
});

router.route("/alterar/(:id)").put(function(req, res) {
  var contatoid = req.params.id;
  var contato = {
    nome: req.body.nome,
    celular: req.body.celular,
    email: req.body.email
  };
  let query =
    "UPDATE `contato` set nome ='" +
    contato.nome +
    "',celular = '" +
    contato.celular +
    "', email= '" +
    contato.email +
    "' WHERE id = " +
    contatoid;
  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (result.affectedRows == 0) {
      return res.json({ success: 0, message: "Nenhum item alterado" });
    }
    res.json({ success: 1 });
  });
});

router.route("/listar").get(function(req, res) {
  var lista = [];
  let query = "SELECT * FROM contato";
  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ contatos: result });
  });
});
router.route("/consultar/(:id)").get(function(req, res) {
  var contatoid = req.params.id;
  let query = "SELECT * FROM contato  WHERE id = " + contatoid;
  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ contato: result[0] });
  });
});

router.route("/cadastrar").post(function(req, res) {
  var contato = {
    nome: req.body.nome,
    celular: req.body.celular,
    email: req.body.email
  };
  let query =
    "INSERT INTO `contato` (nome, celular, email) VALUES ('" +
    contato.nome +
    "', '" +
    contato.celular +
    "', '" +
    contato.email +
    "')";
  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: 1, id: result.insertId });
  });
});

module.exports = router;
