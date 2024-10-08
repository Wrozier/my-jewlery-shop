// server/models/Order.js
const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
});
module.exports = mongoose.model('Order', OrderSchema);
