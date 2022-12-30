const db = require('../models');

class PessoaController {
    static async getAllPerson(req, res) {
        try {
            const allPerson = await db.Pessoas.findAll();
            return res.status(200).json(allPerson);   
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async getIdPerson (req, res) {
        const { id } = req.params;
        try {
            const person = await db.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(person);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async postPerson (req, res) {
        const personBody = req.body;

        try {
            const newPerson = await db.Pessoas.create(personBody);
            return res.status(200).json(newPerson);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async editPerson (req, res) {
        const { id } = req.params;
        const personBody = req.body;

        try {
            const editPerson = await db.Pessoas.update(personBody, {
                where: {
                    id: Number(id)
                }
            });
            
            if(editPerson) {
                const personUpdated = await db.Pessoas.findOne({
                    where: {
                        id: Number(id)
                    }
                });

                return res.status(200).json(personUpdated);
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async deletePerson (req, res) {
        const { id } = req.params;

        try {

            const deletedPerson = await db.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            });

            if(deletedPerson) {
                
                return res.status(200).send({
                    sucess: `Pessoa com o id [ ${id} ] deletada com sucesso! 🚧`
                })
            }
            
        } catch (error) {
            
        }
    }

    #sendError(error, res) {
        return res.status(500).json(error.message);
    }
}

module.exports = PessoaController;