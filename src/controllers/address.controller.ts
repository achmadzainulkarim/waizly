import AddressModel from "../models/address.model";

export default class AddressController {
  async get(req: any, res: any) {
    try {
      const addressModel = new AddressModel();
      const data = await addressModel.getList(req.data.id);
      return res.json(data);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  async detail(req: any, res: any) {
    const { id } = req.params;
    try {
      const addressModel = new AddressModel();
      const data = await addressModel.getDetail({
        userId: req.data.id,
        addressId: id
      });
      return res.json(data);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  async create(req: any, res: any) {
    const { village, district, city, province } = req.body;
    try {
      if (!village || !district || !city || !province) {
        throw new Error("item required");
      }
      const addressModel = new AddressModel();
      await addressModel.create({
        village,
        district,
        city,
        province,
        userId : req.data.id,
      });
      return res.json("OK");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  async update(req: any, res: any) {
    const { village, district, city, province } = req.body;
    const { id } = req.params;
    try {
      if (!village || !district || !city || !province) {
        throw new Error("item required");
      }
      const addressModel = new AddressModel();
      const data = await addressModel.getDetail({
        userId: req.data.id,
        addressId: id
      });
      if(!data){
        throw new Error("not found");
      }
      await addressModel.update({
        id,
        village,
        district,
        city,
        province,
        userId : req.data.id,
      });
      return res.json("OK");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  async delete(req:any, res:any){
    const { id } = req.params;
    try {
      const addressModel = new AddressModel();
      const data = await addressModel.getDetail({
        userId: req.data.id,
        addressId: id
      });
      if(!data){
        throw new Error("not found");
      }
      await addressModel.delete({
        addressId : id,
        userId : req.data.id,
      });
      return res.json("OK");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
