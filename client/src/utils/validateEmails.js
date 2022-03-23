const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmails = (emails) => {
  const invalidEmails = emails
    .replace(/^\s*,$/, "")
    .replace(/,\s*$/, "")
    .split(",")
    .map((email) => email.trim())
    .filter((email) => !re.test(email));

  if (invalidEmails.length) {
    return `Please fix the following emails: ${invalidEmails}`;
  }
  return;
};

export default validateEmails;
