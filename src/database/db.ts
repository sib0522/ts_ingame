import mysql from "mysql2"

export class DB {
    private connection =  mysql.createConnection({
        host: process.env['DB_HOST'],
        user: process.env['DB_USER'],
        password: process.env['DB_PASSWORD'],
        database: process.env['DB_NAME'],
    });

    constructor() {
        this.connect();
    }

    private connect() {
        this.connection.connect((error) => {
            if (error) {
                console.error("error : ", error);
                throw new Error();
            }

            console.log("Mysql Connect Success");
        })
    }

    public Instacne() {
        if (this.connection === null) {
            throw new Error();
        }
        return this.connection;
    }
    
}