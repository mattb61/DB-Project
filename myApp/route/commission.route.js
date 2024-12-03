const express = require("express");
const CommissionRouter = express.Router ();

const {getCommissions, getCommission, createCommission, updateCommission, deleteCommission} =
  require ("../controllers/commission.controller.js");

CommissionRouter.get ('/', getCommissions);
CommissionRouter.get ('/id=:id', getCommission);
CommissionRouter.post ('/', createCommission);
CommissionRouter.put ('/id=:id', updateCommission);
CommissionRouter.delete ('/id=:id', deleteCommission);

module.exports = CommissionRouter;