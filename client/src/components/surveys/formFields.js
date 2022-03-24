const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    errorMessage: "Please title your survey!",
  },
  {
    label: "Subject Line",
    name: "subject",
    errorMessage: "Your survey email needs a subject line!",
  },
  {
    label: "Email Body",
    name: "body",
    errorMessage: "You can't send a blank survey!",
  },
  {
    label: "Recipient List",
    name: "recipients",
    placeholder: "user@email.com, user2@email.com, user3@email.com",
    errorMessage: "Recipient list must be a comma separated list!",
  },
];

export default FIELDS;
