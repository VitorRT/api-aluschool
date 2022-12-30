'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Victor Barberino',
        ativo: 1,
        email: "vitu.lindo@gmail.com",
        role: 'Cientista de Dados - BI/WEB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Hioda Takashi',
        ativo: 1,
        email: "hioda.takashi@gmail.com",
        role: 'Padawan De Nosh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Yui Takashi',
        ativo: 1,
        email: "yuuh.takashi@gmail.com",
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Heven Togata',
        ativo: 1,
        email: "srheven.togs@gmail.com",
        role: 'Guerreiro Kewan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bruno Bezerra Brasil',
        ativo: 1,
        email: "brunobb@gmail.com",
        role: 'Cientista de Dados - BI/ML',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Luiz Santiago',
        ativo: 1,
        email: "pedro.santi@gmail.com",
        role: 'Desenvolvedor Front-End - React',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Evely Watson Moura',
        ativo: 1,
        email: "evely.wats@gmail.com",
        role: 'DBA - OracleDB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alexandre P. Sobral',
        ativo: 1,
        email: "alexandre.psobral@gmail.com",
        role: 'Desenvolvedor Front-End - React',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
