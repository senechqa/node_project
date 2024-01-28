// const Sequilize = require('sequelize')

// module.exports = new Sequilize('brandsrb', 'wikyx', 'Hik9sPSPRkP3Ds8R3o3Hhvc9SuvxUSD4', {
//   host: 'localhost',
//   dialect: 'postgres'
// })

const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "postgres://gywy:voiCVC7xXUns1ZzuZHtgCTRumz3UiN6E@dpg-cmrad36g1b2c73dag2ag-a.oregon-postgres.render.com/brand",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Только если ваш сервер не использует подписанный SSL-сертификат
      },
    },
  }
);
