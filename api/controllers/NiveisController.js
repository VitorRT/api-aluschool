const db = require('../models');

class NiveisController {
    static async getAllNiveis(req, res) {
        try {
            const allTurmas = await db.Niveis.findAll();
            return res.status(200).json(allTurmas);
        } catch (error) {
            this.#sendError(error, res);
        }
        
    }

    static async getIdNiveis(req, res) {
        const { id } = req.params;

        try {
            const oneNivel = await db.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(oneNivel);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async registerNivel(req, res) {
        const nivelBody = req.body;
        try {
            const newNivel = await db.Nivel.create(nivelBody);
            return res.status(200).json(nivelBody);
        } catch (error) {
            this.#sendError(error, res);
        }
    }


    static async editNivel(req, res){
        const { id } = req.params;
        const nivelBody = req.body;

        try {
            const queryNivel = await db.Nivel.update(nivelBody, {
                where: {
                    id: Number(id)
                }
            })

            if(editedNivel) {
                const editedNivel = await db.Nivel.findOne({
                    where: {
                        id: Number(id)
                    }
                })

                return res.status(200).json(editedNivel); 
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }


    static async deleteNivel(req, res) {
        const { id } = req.params;

        try {
            const deletedNivel = await db.Nivel.destroy({
                where: {
                    id: Number(id)
                }
            })

            if(deletedNivel) {
                return res.status(200).send({
                    sucess: `Nível com o id [ ${id} ] deletada com sucesso! 🚧`
                })
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async restoreNivel(req, res) {
        const { id } = req.params;
        try {
            await db.Nivel.restore({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                mensagem: `[ ${id} ] Nivel restaurado com sucesso! ✅`
            })
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    #sendError(error, res) {
        return res.status(500).json(error.message);
    }
}


module.exports = NiveisController;