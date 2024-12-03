const mongoose = require(`mongoose`);

const CommissionSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        default:1
    },
    sMediaContact: {
        type: String,
        required: true
    },
    paypal: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    baseRequest: {
        type: String,
        required: true
    },
    typeOfRequest: {
        type: String,
        required: true
    },
    extraDetails: {
        type: String,
        required: false
    },
    estimatedTime: {
        type: String,
        required: true
    }
});

const Commission = mongoose.model("Commission", CommissionSchema);

module.exports = Commission;
