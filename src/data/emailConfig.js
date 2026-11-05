// Configurazione EmailJS (https://www.emailjs.com) — gratuito, invia email direttamente dal browser.
//
// Come ottenere questi 3 valori (serve un account gratuito su emailjs.com):
// 1. Crea un account su https://www.emailjs.com e collega il tuo Gmail come "Email Service"
//    -> copia il "Service ID" generato
// 2. Crea un "Email Template" con due variabili: {{subject}} e {{message}} (più {{from_email}} se vuoi
//    sapere chi ti scrive) -> copia il "Template ID"
// 3. In Account > General copia la "Public Key"
//
// Il Public Key è pensato per stare nel codice frontend (non è un segreto), ma su EmailJS puoi comunque
// limitare l'invio al solo dominio del tuo sito per sicurezza (Account > Security > Allowed origins).
export const emailConfig = {
  serviceId: 'service_an4avod',
  templateId: 'template_3xwjqfk',
  publicKey: 'GWGYl74GH4DqPqL5r',
}
