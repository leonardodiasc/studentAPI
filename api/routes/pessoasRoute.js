const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/', PessoaController.lerPessoas)
router.get('/pessoa/:id', PessoaController.selecionarPessoa)
router.post('/novapessoa', PessoaController.criarPessoa)
router.put('/pessoa/:id', PessoaController.atualizarDados)
router.delete('/pessoa/:id', PessoaController.deletarPessoa)

module.exports = router