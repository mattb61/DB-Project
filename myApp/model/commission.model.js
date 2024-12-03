const mongoose = require(`mongoose`);

const CommissionSchema = mongoose.Schema ({
    
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
    },
    commissionId: {
        type: Number
    }
});

const Commission = mongoose.model("Commission", CommissionSchema);

module.exports = Commission;
