const Role = require("../models/roles");
const roles = {
  async getRoles(req, res) {
    try {
      console.log(req.params.id);
      const role = await Role.findByPk(req.params.id, {
        attributes: ["id", "role"],
      });

      if (!role) {
        return res.json({ errors: { message: "role not exists" } });
      }
      res.send(role);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  async addRoles(req, res) {
    try {
      const result = await Role.findOne({
        where: { role: req.body.role },
        attributes: ["id", "role"],
        timestamps: false,
      });
      console.log("role is", result);
      if (result) {
        return res.json({ errors: { message: "role already exists" } });
      }
      const newRole = await Role.create({ role: `${req.body.role}` });
      res.send(newRole);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = roles;
