const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");

module.exports = (app) => {
  app
    .route("/api/surveys")
    .get(requireLogin, (req, res) => {
      res.send("SURVEY!");
    })
    .post(requireLogin, requireCredits, async (req, res) => {
      const { title, subject, body, recipients } = req.body;
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(",").map((email) => ({ email })),
        _user: req.user.id,
        dateSent: Date.now(),
      });
      const mailer = new Mailer(survey, surveyTemplate(survey));
      try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
      } catch (err) {
        res.status(422);
        res.send(err);
      }
    });
  app.post("/api/surveys/webhooks", (req, res) => {});
};
