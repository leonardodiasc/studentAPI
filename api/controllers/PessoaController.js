const database = require('../models');

class PessoaController{
    static async lerPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }
    static async selecionarPessoa(req, res){
        const sc = req.params.id;
        try{
            const pessoaSelecionada = await database.Pessoas.findOne({where: {id: sc}});
            return res.status(200).json(pessoaSelecionada);

        } catch(error){
            return res.status(500).json(error.message);
        }
    }
    static async criarPessoa(req, res){
        const pessoaDados = req.body;
        try{
            const novaPessoa = await database.Pessoas.create(pessoaDados);
            return res.status(200).json(novaPessoa);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarDados(req, res){
        const novosDados = req.body;
        const ps = req.params.id;
        try{
            await database.Pessoas.update(novosDados, {where: {id: ps}})
            const dadosAtualizados = await database.Pessoas.findOne({where: {id: sc}});
            return res.status(200).json(dadosAtualizados);

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    

}

module.exports = PessoaController;