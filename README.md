# systemhaus24.net

Statische Website (HTML5/CSS3/Vanilla-JS) für das IT-Systemhaus systemhaus24. Kein CMS, keine Datenbank, kein Build-Prozess – einfach per FTP/SFTP auf jeden Webserver hochladen.

## Vor dem Live-Gang noch zu erledigen

- **Impressum** ([impressum.html](impressum.html)): Platzhalter durch echte Firmendaten ersetzen (Firmenname, Anschrift, Geschäftsführer, Handelsregister, USt-ID, ggf. Aufsichtsbehörde).
- **Datenschutzerklärung** ([datenschutz.html](datenschutz.html)): Platzhalter ergänzen (Verantwortlicher, Hosting-Anbieter). Vor Veröffentlichung von einem Generator (z. B. e-Recht24) oder Anwalt prüfen lassen.
- **Kontaktformular** ([kontakt.html](kontakt.html)): `action="https://formspree.io/f/DEINE_FORM_ID"` durch die eigene Formspree-Form-ID ersetzen (EU-Region wählen). Alternativ anderen DSGVO-konformen EU-Formular-Dienst nutzen.
- **Kontaktdaten** in [kontakt.html](kontakt.html) und Footer aller Seiten mit echter Adresse/Telefon/E-Mail aktualisieren.
- **Echte Referenzen/Testimonials** statt Platzhaltertexte in [referenzen.html](referenzen.html) und [index.html](index.html) einsetzen.
- **Logo/Bildmaterial**: aktuell nur Text-Logo + SVG-Favicon, ggf. eigenes Branding ergänzen.

## Technik

- Reines HTML/CSS/JS, keine externen Frameworks oder CDN-Requests (auch keine Google Fonts – nur System-Fonts).
- `.htaccess` enthält Security-Header (CSP, HSTS, X-Frame-Options etc.) und HTTPS-Redirect für Apache-Hosting. Falls der Hosting-Anbieter Nginx oder eine Plattform wie Netlify/Vercel nutzt, müssen die Header dort äquivalent konfiguriert werden.
- Spam-Schutz im Kontaktformular über Honeypot-Feld + einfache Rechenaufgabe – bewusst **kein** Google reCAPTCHA.
- `robots.txt` / `sitemap.xml` für SEO vorhanden (Domain-Platzhalter `systemhaus24.net` ggf. anpassen).
