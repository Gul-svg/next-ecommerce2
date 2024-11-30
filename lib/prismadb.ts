import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;

/**
 * 
 function conectarConBD() {
    var mysql = require("mysql");
    var connection = mysql.createConnection({
       host: process.env.MYSQLHOST,
       user: process.env.MYSQLUSER,
       password: process.env.MYSQLPASSWORD,
       database: process.env.MYSQLDATABASE,
       port: process.env.MYSQLPORT
    });
    connection.connect(function (error) {
       if (error) {
          throw error;
       }
       else {
          console.log("Conexion correcta.");
       }
    });
    return connection;
 }

 module.exports = {conectarConBD};
 * 
 */