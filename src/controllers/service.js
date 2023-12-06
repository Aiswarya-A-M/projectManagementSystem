const Role = require("../models/roles");
const roles = {
  async getRoles(req, res) {
    try {
      let role = await Role.findOne(
        { attributes: ["id", "role"] },
        { where: { id: req.params.id } }
      );
      if (!role) {
        return res.json({ errors: { message: "role not exists" } });
      }
      res.send(role);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = roles;
