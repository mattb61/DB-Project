const express = require("express");
const commissionRouter = express.Router ();

const {getCommissions, getCommission, createCommission, updateCommission, deleteCommission} =
  require ("../controllers/commission.controller.js");

commissionRouter.get ('/', getCommissions);
commissionRouter.get ('/id=:id', getCommission);
commissionRouter.post ('/', createCommission);
commissionRouter.put ('/id=:id', updateCommission);
commissionRouter.delete ('/id=:id', deleteCommission);

module.exports = commissionRouter;