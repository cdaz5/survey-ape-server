const map = require('lodash/map');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const Survey = mongoose.model('surveys');

module.exports = (app) => {

  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for your feedback!')
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    const event = map(req.body, (event) => {
      const pathName = new URL(event.url).pathname
      const p = new Path('/api/surveys/:surveyId/:choice')
      console.log(p.test(pathName))
    })
  })

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    let { title, subject, body, recipients } = req.body

    let survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    })

    let mailer = new Mailer(survey, surveyTemplate(survey))
    try {
      await mailer.send()
      await survey.save()
      req.user.credits -= 1
      let user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
