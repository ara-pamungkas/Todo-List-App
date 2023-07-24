// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

const whatsapp = new WhatsAppService("ara");
whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
