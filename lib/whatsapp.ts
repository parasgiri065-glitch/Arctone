// WhatsApp integration utility
const WHATSAPP_NUMBER = '7061781904';

export function getWhatsAppLink(message: string = 'Hello! I\'m interested in ArcTone services.') {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string = 'Hello! I\'m interested in ArcTone services.') {
  const link = getWhatsAppLink(message);
  window.open(link, '_blank');
}
