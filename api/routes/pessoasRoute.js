const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.lerPessoas)
router.get('/pessoa/:id', PessoaController.selecionarPessoa)
router.post('/novapessoa', PessoaController.criarPessoa)
router.put('/pessoa/:id', PessoaController.atualizarDados)

module.exports = router