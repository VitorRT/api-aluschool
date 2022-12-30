const db = require('../models');

class MatriculasController {

    static async getAllMatriculas (req, res) {
        try {
            const allMatriculas = await db.Matriculas.findAll();
            return res.status(200).json(allMatriculas);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async getIdMatriculas (req, res) {
        const { id } = req.params;
        try {
            const oneMatricula = await db.Matriculas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(oneMatricula);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async registerMatriculas (req, res) {
        const matriculaBody = req.body;
        try {
            const newMatricula = await db.Matriculas.create(matriculaBody);
            return res.status(200).json(matriculaBody);
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async editMatricula (req, res) {
        const matriculaBody = req.body;
        const { id } = req.params;
        try {
            const queryMatricula = await db.Matriculas.update(matriculaBody, {
                where: {
                    id: Number(id)
                }
            })

            if(queryMatricula) {
                const editedMatricual = await db.Matriculas.findOne({
                    where: {
                        id: Number(id)
                    }
                })
                return res.status(200).json(editedMatricual);
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    static async deleteMatricula (req, res) {
        const { id } = req.params;
        try {
            const deletedMatricula = await db.Matriculas.destroy({
                where: {
                    id: Number(id)
                }
            })

            if(deletedMatricula) {
                return res.status(200).send({
                    sucess: `Matricula com o id [ ${id} ] deletada com sucesso! 🚧`
                })
            }
        } catch (error) {
            this.#sendError(error, res);
        }
    }

    #sendError(error, res) {
        return res.status(500).json(error.message)
    }
}

module.exports = MatriculasController;