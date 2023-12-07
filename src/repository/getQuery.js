const Role = require("../models/roles");

const roles = {
  async getRoles(id) {
    try {
      const role = await Role.findByPk(id, {
        attributes: ["id", "role"],
      });
      return role;
    } catch (error) {
      console.log(error);
      return { error: "Server error" };
    }
  },
  async roleExist(role){
    try {
        const roleExist = await Role.findOne({
          where: { role: role },
          attributes: ["id", "role"],
        });
        if (roleExist) {
          return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        res.json({ error: "Server error" });
      }

  },
  async addRoles(role) {
    try{
      const newRole = await Role.create({ role: `${role}` });
      return newRole;
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};

module.exports = roles;
