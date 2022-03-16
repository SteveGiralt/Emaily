const { stripeSecretKey } = require("../config/dev");
const keys = require("../config/keys");
const stripe = require("stripe")(stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    if (!req.user) {
      return res
        .status(401)
        .send({ error: "You must be logged in to do that!" });
    }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description: "$5 for 5 email credits",
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
