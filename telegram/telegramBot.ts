interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface TelegramResponse {
  ok: boolean;
  description?: string;
}

class TelegramBot {
  private botToken: string;
  private chatId: string;

  constructor() {
    // Use the provided bot token and chat ID
    this.botToken = '7588540195:AAFvF4phJg8agz1xcVEmkGxbLXvldOZAXh8';
    this.chatId = '-1002686029268';
  }

  private validateConfig(): boolean {
    if (!this.botToken || !this.chatId) {
      console.error('Telegram bot configuration missing. Please check VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID environment variables.');
      return false;
    }
    return true;
  }

  private formatMessage(formData: ContactFormData): string {
    return `🏭 *NEW CONTACT FORM SUBMISSION - Huayue Plastics*

👤 *Contact Information:*
• Name: ${formData.firstName} ${formData.lastName}
• Company: ${formData.company || 'Not specified'}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}

📋 *Inquiry Details:*
• Subject: ${formData.subject}
• Message: ${formData.message}

⏰ *Submitted:* ${new Date().toLocaleString()}

---
Please respond to this inquiry promptly.`;
  }

  async sendContactFormNotification(formData: ContactFormData): Promise<boolean> {
    if (!this.validateConfig()) {
      throw new Error('Telegram bot configuration is incomplete');
    }

    try {
      const message = this.formatMessage(formData);
      const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      });

      const result: TelegramResponse = await response.json();
      
      if (!result.ok) {
        console.error('Telegram API error:', result.description);
        throw new Error(`Telegram API error: ${result.description}`);
      }

      console.log('Contact form notification sent successfully to Telegram');
      return true;
    } catch (error) {
      console.error('Error sending Telegram notification:', error);
      throw error;
    }
  }

  async testConnection(): Promise<boolean> {
    if (!this.validateConfig()) {
      return false;
    }

    try {
      const url = `https://api.telegram.org/bot${this.botToken}/getMe`;
      const response = await fetch(url);
      const result = await response.json();
      
      if (result.ok) {
        console.log('Telegram bot connection successful:', result.result.username);
        return true;
      } else {
        console.error('Telegram bot connection failed:', result.description);
        return false;
      }
    } catch (error) {
      console.error('Error testing Telegram connection:', error);
      return false;
    }
  }
}

export const telegramBot = new TelegramBot();
export type { ContactFormData };