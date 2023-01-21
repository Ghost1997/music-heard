import { Users } from 'data/models';

class UsersRepository {
  static async create(data) {
    const createdUsers = await Users.create(data).then((resultEntity) => resultEntity.get({ plain: true }));
    delete createdUsers.password;
    return createdUsers;
  }

  static getAll(filters) {
    return Users.findAll({
      where: filters,
      include: [],
    });
  }

  static getOne(filters) {
    return Users.findOne({
      where: filters,
      raw: true,
      include: [],
    });
  }
}

export { UsersRepository };
