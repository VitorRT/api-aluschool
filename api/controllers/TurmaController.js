const db = require('../models');

class TurmaController {
    static async getAllTurmas (req, res) {
        try {
            const allTrumas = await db.Turmas.findAll();
            return res.status(200).json(allTrumas);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async getIdTurmas (req, res) {
        const { id } = req.params;

        try {
           const idTurma = await db.Turmas.findOne({
            where: {
                id: Number(id)
            }
           }) 

           if(idTurma) {
            return res.status(200).json(idTurma);
           }
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async registerTurmas (req, res) {
        const turmaBody = req.body;

        try {
            const newTurma = await db.Turmas.create(turmaBody);
            return res.status(200).json(turmaBody);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async editTurmas (req, res) {
        const { id } = req.params;
        const turmaBody = req.body;

        try {
            const editTurmas = await db.Turmas.update(turmaBody, {
                where: {
                    id: Number(id)
                }
            });

            if(editTurmas) {
                const turmasUpdated = await db.Turmas.findOne({
                    where: {
                        id: Number(id)
                    }
                });

                return res.status(200).json(turmasUpdated);
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }


    static async deleteTurmas (req, res) {
        const { id } = req.params;

        try {
            const deletedTurmas = await db.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })

            if(deletedTurmas) {
                return res.status(200).send({
                    sucess: `Turma com o id [ ${id} ] deletada com sucesso! 🚧`
                })
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async restoreTurmas(req, res) {
        const { id } = req.params;
        try {
            await db.Turmas.restore({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                mensagem: `[ ${id} ] Turma restaurada com sucesso! ✅`
            })
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    #sendError(error, res) {
        return res.stauts(500).json(error.message)
    }
}

module.exports = TurmaController;

