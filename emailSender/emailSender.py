import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from string import Template
from emailTemplate.emailTemplate import get_email_template

def send_email_with_template(personName, personEmail, personMessage):
   
    email_content = get_email_template(personName, personEmail, personMessage)

   
    message = MIMEMultipart()
    message["From"] = "aaronhank0101@gmail.com"
    message["To"] = "iamkishoremahto@gmail.com"
    message["Subject"] = f"{personName} wants to contact you"

    # Attach HTML content to the email
    message.attach(MIMEText(email_content, "html"))

    try:
        # Connect to the SMTP server
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login("aaronhank0101@gmail.com", "t!nyFruit91")

        # Send email
        server.send_message(message)
        return True
    except Exception as e:
        print(e)
        return False
    finally:
        # Close connection
        server.quit()

# Example usage:
personName = "Kishore"
personEmail = "keshodz1234@gmail.com"
personMessage = "hello world"

print(send_email_with_template(personName, personEmail, personMessage))
