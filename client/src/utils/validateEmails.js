const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  let invalidEmails = emails.split(',').map(email => email.trim()).filter(email => !regex.test(email))

  if (invalidEmails) {
    return `Invalid emails: ${invalidEmails}`
  }

  return
}
