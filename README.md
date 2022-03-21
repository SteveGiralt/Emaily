Welcome to Emaily!

This is a service that allows users to send bulk emails to their users for obtaining feedback, taking surveys, and more!

Emaily is written using MongoDB, React, Redux, Node, and Express.

- Using environment variables and a local proxy I am able to run a development server locally before pushing into production
- I have this project hosted on Heroku at https://polar-scrubland-16313.herokuapp.com/

Payments handled by Stripe - users purchase credits which they then use to send email campaigns.
Email handled by Send Grid
User authentication with Passport using Google Sign In.
I used Formik for my forms with Yup for validation.

I learned a ton working on this project, in particular some patterns that I can use in future projects I have planned.

Note - the original code this app was based on had a problem where the email addresses of all users were exposed when the email was sent,
in other words every user received a copy of the entire mailing list. I noticed this and reworked the API calls a little to make this a
BCC to everyone. While this solution isn't perfect it does work.
