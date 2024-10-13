import { DB } from "../database/db";
import { UserRepositoryInterface } from "../interfaces/user_repository_interface";

export class UserRepository implements UserRepositoryInterface {
    private db: DB;

    constructor(db: DB) {
        this.db = db;
    }
    
    public createUser(): boolean {
        const sql = 'INSERT INTO user (id, level, exp, money, credits) VALUES (?, ?, ?, ?)';
        const userId = this.generateSnowflakeId();
        this.db.Instacne().query(sql, [userId, 1, 0, 0, 0], (error, result) => {
            if (error) {
                console.error("Error : ", error);
                return false;
            }
            return true;
        });
        return false;
    }

    private generateSnowflakeId(): number {
        const timestamp = Math.floor(Date.now()); // 現在のタイムスタンプをミリ秒単位で取得
        const machineId = Math.floor(Math.random() * 256); // 0-255のランダムな数を生成
        const sequence = Math.floor(Math.random() * 256);  // 0-255のランダムな数を生成
      
        const userId = ((timestamp - 1577836800000) << 16) | (machineId << 8) | sequence;
        
        return userId;
      }
}
