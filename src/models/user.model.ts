import Model from "./model";
import { UserCreateInterface, UserLogin } from "../interfaces/user.interface";

export default class UserModel extends Model {
  async userSeed(data: UserCreateInterface) {
    try {
      const connection = await this.pool.getConnection();
      let q = `insert into users set ?`;
      const userData = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      console.log("SQL Query:", connection.format(q, [userData]));
      const [rows] = await connection.query(q, [userData]);
      connection.release();
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async get(data: UserLogin) {
    try {
      const connection = await this.pool.getConnection();
      let q = `select * from users where username = ? `;
      console.log("SQL Query:", connection.format(q, [data]));
      const [rows] = await connection.query(q, [data]);
      connection.release();
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
