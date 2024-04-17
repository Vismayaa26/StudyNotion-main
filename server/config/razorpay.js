const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: "rzp_test_vV1OQ2xFFu4uel",
	key_secret: process.env.RAZORPAY_SECRET,
});
