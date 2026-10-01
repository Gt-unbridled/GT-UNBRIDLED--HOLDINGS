# Gt-unbridled Holdings site: launch and automation checklist

1. Replace placeholders: domain `gtunbridled.com`, mailbox `hello@gtunbridled.com`, Formspree ID `YOUR_FORM_ID` (contact.html).
2. Contact automation: in Formspree, turn on the autoresponder ("We received your message and will reply within one business day").
3. Lead routing: connect Formspree to Make, Zapier or n8n by webhook. Add each lead to a Google Sheet or CRM, and alert you on WhatsApp or Slack. Leads marked "Priority: High" in the message can get an instant notification.
4. Booking: add a Calendly or Cal.com link to the contact page for calls.
5. Mail: use a hosted Zoho mailbox for hello@, with SPF, DKIM and DMARC set on the domain.
6. Hosting: GitHub Pages with a custom domain and HTTPS. Add a CNAME file once the domain is chosen. Put Cloudflare in front for security headers.
7. Monitoring: add a free uptime monitor and privacy-friendly analytics (Plausible or Cloudflare Web Analytics).
8. Brand: assets live in logo.svg, logo-light.svg, logo-mark.svg, og-image.png. Guidelines are on brand.html.
