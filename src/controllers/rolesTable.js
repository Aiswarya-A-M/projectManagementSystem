const roleValidation = require("../service/roleService");
const roles = {
  async getRoles(req, res) {
    try {
      const role = await roleValidation.validation(req.params.id);
      if (!role) {
        return res.json({ errors: { message: "role not exists" } });
      }
      res.send(role);
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
  async addRoles(req, res) {
    try {
      const role = await roleValidation.validationOfNewRole(req.body.role);
      if (!role) {
        return res.json({ success: { message: "role added successfully" } }); 
      }
      return res.json({ errors: { message: "role already exists" } });
    } catch (error) {
      console.log(error);
      res.json({ error: "Server error" });
    }
  },
};

module.exports = roles;
