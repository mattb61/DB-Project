const mongoose = require(`mongoose`);

const CommissionerSchema = mongoose.Schema ({
    
    name: {
        type: String,
        required: true,
    },
    sMediaContact: {
        type: String,
        required: true
    },
    paypal: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    }
});

const Commissioner = mongoose.model("Commissioner", CommissionerSchema);

module.exports = Commissioner;
