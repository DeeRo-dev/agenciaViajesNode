import  Sequelize  from "sequelize";
import db from "../config/db.js";
//Crear los campos "modelo" de la tablas de la database
export const Testimonial = db.define("testimoniales", {
    nombre:{
        type: Sequelize.STRING,
    },
    correo:{
        type: Sequelize.STRING,
    },
    mensaje:{
        type: Sequelize.STRING,
    },
})