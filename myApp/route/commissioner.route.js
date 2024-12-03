const express = require("express");
const CommissionerRouter = express.Router ();

const {getCommissioners, getCommissioner, createCommissioner, updateCommissioner, deleteCommissioner} =
  require ("../controllers/commissioner.controller.js");

CommissionerRouter.get ('/', getCommissioners);
CommissionerRouter.get ('/id=:id', getCommissioner);
CommissionerRouter.post ('/', createCommissioner);
CommissionerRouter.put ('/id=:id', updateCommissioner);
CommissionerRouter.delete ('/id=:id', deleteCommissioner);

module.exports = CommissionerRouter;