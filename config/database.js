

import { Sequelize } from "sequelize";

const db = new Sequelize(
    "capstoneproject",
    "root",
    "", {
        host: 'localhost',
        dialect: "mysql",
    });

    db.authenticate()
    .then(() => 'Database sudah terhubung')
    .catch((error) => {
        console.error('database bermasalah: ', error);
    })

    export default db;