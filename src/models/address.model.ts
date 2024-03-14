import Model from "./model";
import {
  AddressGetDetail,
  AddressCreate,
  AddressUpdate,
  AddressDelete
} from "src/interfaces/address.interface";

export default class AddressModel extends Model {
  async getList(userId: number) {
    try {
      const connection = await this.pool.getConnection();
      let q = `
        SELECT *
        FROM addresses
        WHERE userId = ?
        and deletedAt is null
      `;
      console.log("SQL Query:", connection.format(q, [userId]));
      const [rows] = await connection.query(q, [userId]);
      connection.release();
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getDetail(data: AddressGetDetail) {
    try {
      const connection = await this.pool.getConnection();
      let q = `
        SELECT *
        FROM addresses
        WHERE userId = ?
        and id = ?
        and deletedAt is null
      `;
      console.log("SQL Query:", connection.format(q, [data.userId, data.addressId]));
      const [rows] = await connection.query(q, [data.userId, data.addressId]);
      connection.release();
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async create(data: AddressCreate) {
    try {
      const connection = await this.pool.getConnection();
      let q = `
        insert into addresses set ?
      `;
      console.log("SQL Query:", connection.format(q, [data]));
      const [rows] = await connection.query(q, [data]);
      connection.release();
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async update(data: AddressUpdate) {
    try {
      const connection = await this.pool.getConnection();
      let q = `
        update addresses set ? where id = ?
      `;
      const updateData : AddressCreate = {
        village: data.village,
        district: data.district,
        city: data.city,
        province: data.province,
        userId: data.userId
      }
      console.log("SQL Query:", connection.format(q, [updateData, data.id]));
      const [rows] = await connection.query(q, [updateData, data.id]);
      connection.release();
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async delete(data: AddressDelete) {
    try {
      const connection = await this.pool.getConnection();
      let q = `
        update addresses set deletedAt = now() where id = ? and userId = ?
      `;
      console.log("SQL Query:", connection.format(q, [data.addressId, data.userId]));
      const [rows] = await connection.query(q, [data.addressId, data.userId]);
      connection.release();
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
