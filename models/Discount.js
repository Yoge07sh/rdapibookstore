const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    discountName: {
        type: String,
        required: true
    },
    discountType: {
        type: String,
        default: 'Percentage',
        enum: ['Percentage', 'Fixed'],
        required: true
    },
    discountValue: {
        type: Number,
        default: 0,
        required: true
    },
    validFrom: {
        type: Date,
        required: true
    },
    validUpto: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: 'Active',
        enum: ['Active',"inActive"]
    }


}, { timestamps: true });

module.exports = mongoose.model('Discount', discountSchema);