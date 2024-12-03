const Commissioner = require ("../model/commissioner.model.js");

const getCommissioners = async (req, res) => {
    try {
        const commissioners = await Commissioner.find ({});
        res.status(200).json(commissioners);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCommissioner = async (req, res) => {
    try {
        const { id } = req.params;
        const commissioners = await Commissioner.find ({_id:id});
        res.status(200).json(commissioners);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const createCommissioner = async (req, res) => {
    try {
        const comm = await Commissioner.create(req.body);
        res.status(200).json(comm);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCommissioner = async (req, res) =>{
    try {
        const { id } = req.params;
        const commissioner = await Commissioner.findByIdAndUpdate (id, req.body);
        if (!commissioner) {
            return (res.status(404).json({message: "Commissioner not found"}));
        }
        const updatedCommissioner = await Commissioner.findById(id);
        res.status(200).json(updatedCommissioner);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const deleteCommissioner = async (req, res) =>{
    try {
        const { id } = req.params;
        const commissioner = await Commissioner.findByIdAndDelete (id);

        if (!commissioner) {
            return res.status(404).json({message: "Commissioner not found"});
        }
        
        res.status(200).json({ message: "Commissioner deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


module.exports = {
    getCommissioners,
    getCommissioner,
    createCommissioner,
    updateCommissioner,
    deleteCommissioner
};