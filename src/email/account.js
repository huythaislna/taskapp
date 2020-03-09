const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    const msg = {
        'to': email,
        'from': 'huythaislna@gmail.com',
        'subject': 'Thanks for joining my app!!!',
        'html': `<h1>Welcome to my Task Manager app ${name}, Have a good experience!`
    }
    sgMail.send(msg)
}

module.exports = sendWelcomeMail