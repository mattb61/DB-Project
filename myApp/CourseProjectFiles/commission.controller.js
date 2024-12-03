const Commission = require ("../model/commission.model.js");

const getCommissions = async (req, res) => {
    try {
        const commissions = await Commission.find ({});
        res.status(200).json(commissions);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCommission = async (req, res) => {
    try {
        const commissions = await Commission.find ({});
        res.status(200).json(commissions);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const createCommission = async (req, res) => {
    try {
        const comm = await Commission.create(req.body);
        res.status(200).json(comm);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCommission = async (req, res) =>{
    try {
        const { id } = req.params;
        const commission = await Commission.findByIdAndUpdate (id, req.body);
        if (!commission) {
            return (resp.status(404).json({message: "Commission not found"}));
        }
        const updatedCommission = await Commission.findById(id);
        res.status(200).json(updatedCommission);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const deleteCommission = async (req, res) =>{
    try {
        const { id } = req.params;
        const commission = await Commission.findByIdAndDelete (id);

        if (!commission) {
            return res.status(404).json({message: "Commission not found"});
        }
        
        res.status(200).json({ message: "Commission deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


module.exports = {
    getCommissions,
    getCommission,
    createCommission,
    updateCommission,
    deleteCommission
};