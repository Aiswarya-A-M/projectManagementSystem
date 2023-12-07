const query = require("../repository/getQuery");

const roles = {
    async validation(id) {
      try {
        const role = await query.getRoles(id);
        if(!role){
            return false
        }
         return role
      } catch (error) {
        console.log(error);
        return ({ error: "Server error" });
      }
    },
    async validationOfNewRole(role){
        const roleExist=await query.roleExist(role)
        if(roleExist){
            return true;
        }
        const newRole=await query.addRoles(role);
        return false;
    }
};

module.exports=roles
