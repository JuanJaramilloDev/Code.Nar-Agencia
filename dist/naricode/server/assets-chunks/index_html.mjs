export default `<!DOCTYPE html><html lang="es"><head>
  <meta charset="utf-8">
  <title>Code.Nar | Desarrollo web y soluciones digitales en Colombia</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#080808">
  <meta name="author" content="Code.Nar">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles.css"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" as="style"><style ng-app-id="ng">
.navbar[_ngcontent-ng-c831784485] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 18px 0;
  background: rgba(8, 8, 8, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    background var(--transition),
    border-color var(--transition),
    padding var(--transition);
}
.navbar-scrolled[_ngcontent-ng-c831784485] {
  padding: 12px 0;
  background: rgba(8, 8, 8, 0.94);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
.navbar-container[_ngcontent-ng-c831784485] {
  width: min(calc(100% - 48px), var(--container));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand[_ngcontent-ng-c831784485] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-mark[_ngcontent-ng-c831784485] {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  object-fit: cover;
  box-shadow: var(--shadow-gold);
}
.brand-name[_ngcontent-ng-c831784485] {
  font-family: var(--font-body);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.brand-name[_ngcontent-ng-c831784485]   span[_ngcontent-ng-c831784485] {
  color: var(--color-gold);
}
.desktop-nav[_ngcontent-ng-c831784485] {
  display: flex;
  align-items: center;
  gap: 36px;
}
.desktop-nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485] {
  position: relative;
  color: var(--color-gray);
  font-size: 13px;
  font-weight: 500;
  transition: color var(--transition);
}
.desktop-nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]::after {
  content: "";
  position: absolute;
  bottom: -7px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-gold);
  transition: width var(--transition);
}
.desktop-nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:hover, 
.desktop-nav[_ngcontent-ng-c831784485]   a.activo[_ngcontent-ng-c831784485] {
  color: var(--color-white);
}
.desktop-nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:hover::after, 
.desktop-nav[_ngcontent-ng-c831784485]   a.activo[_ngcontent-ng-c831784485]::after {
  width: 100%;
}
.desktop-nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:focus-visible, 
.navbar-cta[_ngcontent-ng-c831784485]:focus-visible, 
.brand[_ngcontent-ng-c831784485]:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
  border-radius: 4px;
}
.navbar-cta[_ngcontent-ng-c831784485] {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border: 1px solid rgba(212, 175, 55, 0.5);
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.08);
  color: var(--color-white);
  font-size: 13px;
  font-weight: 600;
  transition: all var(--transition);
}
.navbar-cta[_ngcontent-ng-c831784485]   span[_ngcontent-ng-c831784485] {
  color: var(--color-gold);
}
.navbar-cta[_ngcontent-ng-c831784485]:hover {
  background: var(--color-gold);
  color: var(--color-black);
  box-shadow: var(--shadow-gold);
}
.navbar-cta[_ngcontent-ng-c831784485]:hover   span[_ngcontent-ng-c831784485] {
  color: var(--color-black);
}
.menu-toggle[_ngcontent-ng-c831784485] {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: background var(--transition);
}
.menu-toggle[_ngcontent-ng-c831784485]:hover {
  background: rgba(212, 175, 55, 0.1);
}
.menu-toggle[_ngcontent-ng-c831784485]:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}
.menu-toggle-linea[_ngcontent-ng-c831784485] {
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: var(--color-white);
  transition: transform var(--transition), opacity var(--transition);
}
.menu-toggle-linea.abierta[_ngcontent-ng-c831784485]:first-child {
  transform: translateY(4px) rotate(45deg);
}
.menu-toggle-linea.abierta[_ngcontent-ng-c831784485]:last-child {
  transform: translateY(-4px) rotate(-45deg);
}
.menu-movil[_ngcontent-ng-c831784485] {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(340px, 85vw);
  height: 100dvh;
  padding: 100px 32px 40px;
  background: var(--color-black-soft);
  border-left: 1px solid var(--color-border);
  transform: translateX(100%);
  visibility: hidden;
  transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1), visibility 400ms;
}
.menu-movil.abierto[_ngcontent-ng-c831784485] {
  transform: translateX(0);
  visibility: visible;
}
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485] {
  display: flex;
  flex-direction: column;
}
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-white-soft);
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: color var(--transition), padding-left var(--transition);
}
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]   span[_ngcontent-ng-c831784485] {
  color: var(--color-gray-dark);
  font-size: 15px;
  transition: all var(--transition);
}
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:hover, 
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a.activo[_ngcontent-ng-c831784485] {
  color: var(--color-gold);
  padding-left: 8px;
}
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:hover   span[_ngcontent-ng-c831784485], 
.menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a.activo[_ngcontent-ng-c831784485]   span[_ngcontent-ng-c831784485] {
  color: var(--color-gold);
  transform: translate(3px, -3px);
}
.menu-movil-cta[_ngcontent-ng-c831784485] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  margin-top: 32px;
  border-radius: 999px;
  background: var(--color-gold);
  color: var(--color-black);
  font-size: 14px;
  font-weight: 600;
  box-shadow: var(--shadow-gold);
}
.menu-overlay[_ngcontent-ng-c831784485] {
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  animation: _ngcontent-ng-c831784485_aparecer 300ms ease;
}
@keyframes _ngcontent-ng-c831784485_aparecer {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 900px) {
  .desktop-nav[_ngcontent-ng-c831784485], 
   .navbar-cta[_ngcontent-ng-c831784485] {
    display: none;
  }
  .menu-toggle[_ngcontent-ng-c831784485] {
    display: flex;
  }
}
@media (max-width: 600px) {
  .navbar-container[_ngcontent-ng-c831784485] {
    width: min(calc(100% - 32px), var(--container));
  }
  .brand-name[_ngcontent-ng-c831784485] {
    font-size: 19px;
  }
  .brand-mark[_ngcontent-ng-c831784485] {
    width: 38px;
    height: 38px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .menu-movil[_ngcontent-ng-c831784485] {
    transition-duration: 1ms;
  }
  .menu-overlay[_ngcontent-ng-c831784485] {
    animation: none;
  }
}
@supports (padding: max(0px)) {
  .navbar-container[_ngcontent-ng-c831784485] {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
  }
  .menu-movil[_ngcontent-ng-c831784485] {
    padding-right: max(32px, env(safe-area-inset-right));
    padding-bottom: max(40px, env(safe-area-inset-bottom));
  }
}
@media (hover: none) {
  .menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:hover {
    padding-left: 0;
  }
  .menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485]:hover   span[_ngcontent-ng-c831784485] {
    transform: none;
  }
}
@media (max-width: 400px) {
  .menu-movil[_ngcontent-ng-c831784485] {
    width: min(300px, 88vw);
    padding-left: 26px;
    padding-right: 26px;
  }
  .menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485] {
    padding: 17px 0;
    font-size: 17px;
  }
}
@media (max-height: 560px) {
  .menu-movil[_ngcontent-ng-c831784485] {
    justify-content: flex-start;
    padding-top: 88px;
    overflow-y: auto;
  }
  .menu-movil[_ngcontent-ng-c831784485]   nav[_ngcontent-ng-c831784485]   a[_ngcontent-ng-c831784485] {
    padding: 14px 0;
    font-size: 16px;
  }
}
/*# sourceMappingURL=/navbar.css.map */</style><style ng-app-id="ng">
.footer[_ngcontent-ng-c1868340458] {
  padding: 90px 0 30px;
  background: #060606;
  border-top: 1px solid var(--color-border);
}
.footer-container[_ngcontent-ng-c1868340458] {
  width: min(calc(100% - 48px), var(--container));
  margin: 0 auto;
}
.footer-main[_ngcontent-ng-c1868340458] {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 70px;
}
.footer-brand[_ngcontent-ng-c1868340458] {
  max-width: 320px;
}
.footer-brand[_ngcontent-ng-c1868340458]   .brand[_ngcontent-ng-c1868340458] {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.footer-brand[_ngcontent-ng-c1868340458]   .brand-mark[_ngcontent-ng-c1868340458] {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: var(--color-gold);
  color: var(--color-black);
  font-size: 20px;
  font-weight: 700;
  box-shadow: var(--shadow-gold);
}
.footer-brand[_ngcontent-ng-c1868340458]   .brand-name[_ngcontent-ng-c1868340458] {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.footer-brand[_ngcontent-ng-c1868340458]   .brand-name[_ngcontent-ng-c1868340458]   span[_ngcontent-ng-c1868340458] {
  color: var(--color-gold);
}
.footer-column[_ngcontent-ng-c1868340458]   a[_ngcontent-ng-c1868340458]:focus-visible, 
.footer-brand[_ngcontent-ng-c1868340458]   .brand[_ngcontent-ng-c1868340458]:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
  border-radius: 4px;
}
.footer-brand[_ngcontent-ng-c1868340458]   p[_ngcontent-ng-c1868340458] {
  margin: 24px 0 0;
  color: var(--color-gray);
  font-size: 13px;
  line-height: 1.8;
}
.footer-column[_ngcontent-ng-c1868340458] {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.footer-column[_ngcontent-ng-c1868340458]   h3[_ngcontent-ng-c1868340458] {
  margin: 0 0 12px;
  color: var(--color-white);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.footer-column[_ngcontent-ng-c1868340458]   a[_ngcontent-ng-c1868340458], 
.footer-column[_ngcontent-ng-c1868340458]   span[_ngcontent-ng-c1868340458] {
  color: var(--color-gray);
  font-size: 12px;
  transition: color var(--transition);
}
.footer-column[_ngcontent-ng-c1868340458]   a[_ngcontent-ng-c1868340458]:hover {
  color: var(--color-gold);
}
.footer-bottom[_ngcontent-ng-c1868340458] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  border-top: 1px solid var(--color-border);
  color: var(--color-gray-dark);
  font-size: 10px;
}
@media (max-width: 800px) {
  .footer[_ngcontent-ng-c1868340458] {
    padding: 70px 0 25px;
  }
  .footer-main[_ngcontent-ng-c1868340458] {
    grid-template-columns: 1fr 1fr;
    gap: 45px 30px;
    padding-bottom: 50px;
  }
}
@media (max-width: 500px) {
  .footer-container[_ngcontent-ng-c1868340458] {
    width: min(calc(100% - 32px), var(--container));
  }
  .footer-main[_ngcontent-ng-c1868340458] {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand[_ngcontent-ng-c1868340458] {
    grid-column: 1 / -1;
  }
  .footer-bottom[_ngcontent-ng-c1868340458] {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
@media (max-width: 700px) {
  .footer-column[_ngcontent-ng-c1868340458] {
    gap: 4px;
  }
  .footer-column[_ngcontent-ng-c1868340458]   a[_ngcontent-ng-c1868340458] {
    padding: 9px 0;
    font-size: 13px;
  }
  .footer-column[_ngcontent-ng-c1868340458]   span[_ngcontent-ng-c1868340458] {
    padding: 9px 0;
    font-size: 13px;
  }
  .footer-brand[_ngcontent-ng-c1868340458]   p[_ngcontent-ng-c1868340458] {
    font-size: 13.5px;
  }
  .footer-bottom[_ngcontent-ng-c1868340458] {
    font-size: 11.5px;
    line-height: 1.7;
  }
}
@supports (padding: max(0px)) {
  .footer[_ngcontent-ng-c1868340458] {
    padding-bottom: max(30px, env(safe-area-inset-bottom));
  }
}
/*# sourceMappingURL=/footer.css.map */</style><style ng-app-id="ng">
.social-floating[_ngcontent-ng-c536698142] {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}
.social-icon-button[_ngcontent-ng-c536698142] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    filter var(--transition);
}
.social-icon-button[_ngcontent-ng-c536698142]   svg[_ngcontent-ng-c536698142] {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
.social-icon-button[_ngcontent-ng-c536698142]:hover {
  filter: brightness(1.12) saturate(1.15);
  transform: translateY(-3px);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
}
.social-icon-button--instagram[_ngcontent-ng-c536698142] {
  background:
    linear-gradient(
      135deg,
      #feda75 0%,
      #fa7e1e 22%,
      #d62976 55%,
      #962fbf 78%,
      #4f5bd5 100%);
}
.social-icon-button--tiktok[_ngcontent-ng-c536698142] {
  background:
    linear-gradient(
      135deg,
      #25f4ee 0%,
      #0a0a0a 48%,
      #fe2c55 100%);
}
.whatsapp-button[_ngcontent-ng-c536698142] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 18px 0 14px;
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 999px;
  background: #25d366;
  color: #07140b;
  box-shadow: 0 14px 34px rgba(0, 0, 0, .32);
  font-size: 12px;
  font-weight: 700;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    background var(--transition);
}
.whatsapp-button[_ngcontent-ng-c536698142]   svg[_ngcontent-ng-c536698142] {
  width: 27px;
  height: 27px;
  fill: currentColor;
}
.whatsapp-button[_ngcontent-ng-c536698142]:hover {
  background: #42df7b;
  box-shadow: 0 18px 42px rgba(37, 211, 102, .26);
  transform: translateY(-4px);
}
@media (max-width: 600px) {
  .social-floating[_ngcontent-ng-c536698142] {
    right: 16px;
    bottom: 16px;
    gap: 10px;
  }
  .social-icon-button[_ngcontent-ng-c536698142] {
    width: 40px;
    height: 40px;
  }
  .social-icon-button[_ngcontent-ng-c536698142]   svg[_ngcontent-ng-c536698142] {
    width: 17px;
    height: 17px;
  }
  .whatsapp-button[_ngcontent-ng-c536698142] {
    width: 48px;
    height: 48px;
    min-height: 48px;
    padding: 0;
    justify-content: center;
  }
  .whatsapp-button[_ngcontent-ng-c536698142]   svg[_ngcontent-ng-c536698142] {
    width: 23px;
    height: 23px;
  }
  .whatsapp-button[_ngcontent-ng-c536698142]   span[_ngcontent-ng-c536698142] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
}
@media (hover: none) {
  .social-icon-button[_ngcontent-ng-c536698142]:hover, 
   .whatsapp-button[_ngcontent-ng-c536698142]:hover {
    transform: none;
  }
}
.social-icon-button[_ngcontent-ng-c536698142]:focus-visible, 
.whatsapp-button[_ngcontent-ng-c536698142]:focus-visible {
  outline: 2px solid var(--color-gold-light);
  outline-offset: 3px;
}
/*# sourceMappingURL=/whatsapp-button.css.map */</style><style ng-app-id="ng">@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";


.hero[_ngcontent-ng-c2408180415] {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 75% 45%,
      rgba(212, 175, 55, 0.07),
      transparent 30%),
    var(--color-black);
}
.hero-container[_ngcontent-ng-c2408180415] {
  position: relative;
  z-index: 2;
  width: min(calc(100% - 48px), var(--container));
  min-height: 100vh;
  min-height: 100dvh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
  padding-top: 100px;
}
.hero-content[_ngcontent-ng-c2408180415] {
  max-width: 650px;
}
.eyebrow[_ngcontent-ng-c2408180415] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--color-gold-light);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
}
.eyebrow-dot[_ngcontent-ng-c2408180415] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
}
.hero[_ngcontent-ng-c2408180415]   h1[_ngcontent-ng-c2408180415] {
  margin: 28px 0 24px;
  font-family: var(--font-body);
  font-size: clamp(46px, 5vw, 72px);
  line-height: 0.98;
  font-weight: 700;
  letter-spacing: -4px;
}
.hero[_ngcontent-ng-c2408180415]   h1[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  display: block;
  color: var(--color-gold);
  font-style: italic;
  font-weight: 600;
}
.hero-description[_ngcontent-ng-c2408180415] {
  max-width: 580px;
  margin: 0;
  color: var(--color-gray);
  font-size: 16px;
  line-height: 1.8;
}
.hero-actions[_ngcontent-ng-c2408180415] {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 34px;
}
.btn[_ngcontent-ng-c2408180415] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  transition: all var(--transition);
}
.btn[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  font-size: 17px;
}
.btn-primary[_ngcontent-ng-c2408180415] {
  background: var(--color-gold);
  color: var(--color-black);
  box-shadow: 0 10px 35px rgba(212, 175, 55, 0.18);
}
.btn-primary[_ngcontent-ng-c2408180415]:hover {
  background: var(--color-gold-light);
  transform: translateY(-3px);
  box-shadow: 0 15px 45px rgba(212, 175, 55, 0.28);
}
.btn-secondary[_ngcontent-ng-c2408180415] {
  border: 1px solid var(--color-border);
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.02);
}
.btn-secondary[_ngcontent-ng-c2408180415]:hover {
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(212, 175, 55, 0.05);
  transform: translateY(-3px);
}
.hero-stats[_ngcontent-ng-c2408180415] {
  display: flex;
  margin-top: 58px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
}
.stat[_ngcontent-ng-c2408180415] {
  min-width: 130px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.stat[_ngcontent-ng-c2408180415]    + .stat[_ngcontent-ng-c2408180415] {
  padding-left: 24px;
  border-left: 1px solid var(--color-border);
}
.stat[_ngcontent-ng-c2408180415]   strong[_ngcontent-ng-c2408180415] {
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.5px;
}
.stat[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  color: var(--color-gray-dark);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.hero-visual[_ngcontent-ng-c2408180415] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 580px;
}
.visual-glow[_ngcontent-ng-c2408180415] {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background:
    radial-gradient(
      circle,
      rgba(212, 175, 55, 0.12),
      transparent 65%);
  filter: blur(20px);
}
.visual-card[_ngcontent-ng-c2408180415] {
  position: relative;
  z-index: 2;
  width: min(100%, 540px);
  aspect-ratio: 1 / 1;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background:
    linear-gradient(
      145deg,
      #1a1a1a,
      #0b0b0b);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  transform: rotate(2deg);
  overflow: hidden;
}
.visual-card[_ngcontent-ng-c2408180415]::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.06),
      transparent 40%);
  pointer-events: none;
}
.visual-card-top[_ngcontent-ng-c2408180415], 
.visual-card-bottom[_ngcontent-ng-c2408180415] {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  color: var(--color-gray);
  font-size: 9px;
  letter-spacing: 2px;
}
.visual-card-top[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415]:first-child {
  color: var(--color-gold);
}
.visual-content[_ngcontent-ng-c2408180415] {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
}
.visual-label[_ngcontent-ng-c2408180415] {
  color: var(--color-gray);
  font-size: 10px;
  letter-spacing: 3px;
}
.visual-content[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415] {
  margin: 18px 0;
  font-family: var(--font-body);
  font-size: clamp(48px, 6vw, 76px);
  line-height: 0.95;
  font-weight: 700;
  letter-spacing: -4px;
}
.visual-content[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415]   em[_ngcontent-ng-c2408180415] {
  color: var(--color-gold);
  font-style: italic;
  font-weight: 600;
}
.visual-line[_ngcontent-ng-c2408180415] {
  width: 70px;
  height: 2px;
  background: var(--color-gold);
}
.floating-card[_ngcontent-ng-c2408180415] {
  position: absolute;
  z-index: 5;
  bottom: 80px;
  left: -25px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: rgba(20, 20, 20, 0.85);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  animation: _ngcontent-ng-c2408180415_float 4s ease-in-out infinite;
}
.floating-icon[_ngcontent-ng-c2408180415] {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--color-gold-soft);
  color: var(--color-gold);
}
.floating-card[_ngcontent-ng-c2408180415]   strong[_ngcontent-ng-c2408180415], 
.floating-card[_ngcontent-ng-c2408180415]   small[_ngcontent-ng-c2408180415] {
  display: block;
}
.floating-card[_ngcontent-ng-c2408180415]   strong[_ngcontent-ng-c2408180415] {
  color: var(--color-white);
  font-size: 12px;
}
.floating-card[_ngcontent-ng-c2408180415]   small[_ngcontent-ng-c2408180415] {
  margin-top: 3px;
  color: var(--color-gray);
  font-size: 10px;
}
.scroll-indicator[_ngcontent-ng-c2408180415] {
  position: absolute;
  bottom: 28px;
  left: 50%;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 12px;
  transform: translateX(-50%);
  color: var(--color-gray-dark);
  font-size: 9px;
  letter-spacing: 2px;
}
.scroll-indicator[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  width: 24px;
  height: 1px;
  background: var(--color-gold);
}
@keyframes _ngcontent-ng-c2408180415_float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.why-section[_ngcontent-ng-c2408180415] {
  position: relative;
  padding: 110px 0;
  background: var(--color-black);
  border-top: 1px solid var(--color-border);
}
.why-grid[_ngcontent-ng-c2408180415] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.why-card[_ngcontent-ng-c2408180415] {
  padding: 30px 26px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: #0c0c0c;
  transition: border-color var(--transition), transform var(--transition);
}
.why-card[_ngcontent-ng-c2408180415]:hover {
  border-color: rgba(212, 175, 55, 0.25);
  transform: translateY(-4px);
}
.why-icon[_ngcontent-ng-c2408180415] {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 10px;
  background: var(--color-gold-soft);
  color: var(--color-gold);
}
.why-card[_ngcontent-ng-c2408180415]   h3[_ngcontent-ng-c2408180415] {
  margin: 0 0 10px;
  font-family: var(--font-body);
  color: var(--color-white);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.3px;
}
.why-card[_ngcontent-ng-c2408180415]   p[_ngcontent-ng-c2408180415] {
  margin: 0;
  color: var(--color-gray);
  font-size: 12.5px;
  line-height: 1.7;
}
.services-section[_ngcontent-ng-c2408180415] {
  position: relative;
  padding: 130px 0;
  background: var(--color-black);
  border-top: 1px solid var(--color-border);
}
.section-container[_ngcontent-ng-c2408180415] {
  width: min(calc(100% - 48px), var(--container));
  margin: 0 auto;
}
.section-heading[_ngcontent-ng-c2408180415] {
  max-width: 720px;
  margin-bottom: 70px;
}
.section-eyebrow[_ngcontent-ng-c2408180415] {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: var(--color-gold);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
}
.section-eyebrow[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  width: 28px;
  height: 1px;
  background: var(--color-gold);
}
.section-heading[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415] {
  margin: 0;
  font-family: var(--font-body);
  font-size: clamp(42px, 5vw, 68px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -3px;
}
.section-heading[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  display: block;
  color: var(--color-gold);
  font-style: italic;
  font-weight: 600;
}
.section-heading[_ngcontent-ng-c2408180415]   p[_ngcontent-ng-c2408180415] {
  max-width: 600px;
  margin-top: 24px;
  color: var(--color-gray);
  font-size: 15px;
  line-height: 1.8;
}
.services-grid[_ngcontent-ng-c2408180415] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: var(--color-border);
}
.service-card[_ngcontent-ng-c2408180415] {
  position: relative;
  min-height: 0;
  padding: 34px;
  background: #0b0b0b;
  transition: background var(--transition), transform var(--transition);
}
.service-card[_ngcontent-ng-c2408180415]:hover {
  background: #111111;
}
.service-number[_ngcontent-ng-c2408180415] {
  position: absolute;
  top: 30px;
  right: 32px;
  color: var(--color-gray-dark);
  font-size: 10px;
  letter-spacing: 2px;
}
.service-icon[_ngcontent-ng-c2408180415] {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  margin-bottom: 26px;
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 12px;
  background: var(--color-gold-soft);
  color: var(--color-gold);
  transition: all var(--transition);
}
.service-icon[_ngcontent-ng-c2408180415]:hover {
  background: rgba(212, 175, 55, 0.18);
  transform: translateY(-3px);
}
.service-card[_ngcontent-ng-c2408180415]   h3[_ngcontent-ng-c2408180415] {
  margin: 0 0 12px;
  font-family: var(--font-body);
  color: var(--color-white);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.service-card[_ngcontent-ng-c2408180415]   p[_ngcontent-ng-c2408180415] {
  max-width: 430px;
  margin: 0;
  color: var(--color-gray);
  font-size: 13px;
  line-height: 1.8;
}
.service-link[_ngcontent-ng-c2408180415] {
  display: inline-block;
  margin-top: 18px;
  color: var(--color-gold);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: gap var(--transition), opacity var(--transition);
}
.projects-section[_ngcontent-ng-c2408180415] {
  position: relative;
  padding: 120px 0;
  background: #080808;
  border-top: 1px solid var(--color-border);
}
.projects-header[_ngcontent-ng-c2408180415] {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 60px;
}
.projects-count[_ngcontent-ng-c2408180415] {
  padding-bottom: 8px;
  color: var(--color-gray-dark);
  font-size: 9px;
  letter-spacing: 2px;
  white-space: nowrap;
}
.projects-list[_ngcontent-ng-c2408180415] {
  display: flex;
  flex-direction: column;
  gap: 45px;
}
.project-card[_ngcontent-ng-c2408180415] {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  min-width: 320px;
  min-height: 285px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;
  background: #0c0c0c;
  transition: border-color var(--transition), transform var(--transition);
}
.project-card[_ngcontent-ng-c2408180415]:hover {
  border-color: rgba(212, 175, 55, 0.25);
  transform: translateY(-4px);
}
.project-image[_ngcontent-ng-c2408180415] {
  position: relative;
  min-height: 285px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(212, 175, 55, 0.12),
      transparent 50%),
    #111111;
}
.project-image[_ngcontent-ng-c2408180415]   img[_ngcontent-ng-c2408180415] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.project-card[_ngcontent-ng-c2408180415]:hover   .project-image[_ngcontent-ng-c2408180415]   img[_ngcontent-ng-c2408180415] {
  transform: scale(1.04);
}
.project-image[_ngcontent-ng-c2408180415]::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05),
      transparent 45%);
  pointer-events: none;
}
.project-image-number[_ngcontent-ng-c2408180415] {
  position: absolute;
  z-index: 2;
  top: 16px;
  left: 16px;
  padding: 7px 11px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--color-gold);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
}
.project-image-category[_ngcontent-ng-c2408180415] {
  position: absolute;
  z-index: 2;
  right: 16px;
  bottom: 16px;
  padding: 7px 11px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--color-white-soft);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 1.5px;
}
.project-info[_ngcontent-ng-c2408180415] {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 45px;
}
.project-meta[_ngcontent-ng-c2408180415] {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}
.project-meta[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415]:first-child {
  color: var(--color-gold);
  font-size: 10px;
  letter-spacing: 2px;
}
.project-meta[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415]:last-child {
  color: var(--color-gray-dark);
  font-size: 8px;
  letter-spacing: 1.5px;
}
.project-info[_ngcontent-ng-c2408180415]   h3[_ngcontent-ng-c2408180415] {
  margin: 0 0 15px;
  font-family: var(--font-body);
  color: var(--color-white);
  font-size: clamp(30px, 3.5vw, 46px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -2px;
}
.project-info[_ngcontent-ng-c2408180415]   p[_ngcontent-ng-c2408180415] {
  max-width: 460px;
  margin: 0;
  color: var(--color-gray);
  font-size: 13px;
  line-height: 1.7;
}
.project-tags[_ngcontent-ng-c2408180415] {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 22px;
}
.project-tags[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  padding: 6px 10px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-gray);
  font-size: 8px;
  letter-spacing: 0.5px;
}
.project-link[_ngcontent-ng-c2408180415] {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 22px;
  color: var(--color-white);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color var(--transition);
}
.project-link[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
  color: var(--color-gold);
  font-size: 15px;
  transition: transform var(--transition);
}
.project-link[_ngcontent-ng-c2408180415]:hover {
  color: var(--color-gold);
}
.project-link[_ngcontent-ng-c2408180415]:hover   span[_ngcontent-ng-c2408180415] {
  transform: translate(3px, -3px);
}
.projects-more[_ngcontent-ng-c2408180415] {
  display: flex;
  justify-content: center;
  margin-top: 55px;
}
.projects-more-button[_ngcontent-ng-c2408180415] {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 14px 20px 14px 24px;
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.04);
  color: var(--color-white);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all var(--transition);
}
.projects-more-icon[_ngcontent-ng-c2408180415] {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--color-gold);
  color: var(--color-black);
  font-size: 15px;
  transition: transform var(--transition);
}
.projects-more-button[_ngcontent-ng-c2408180415]:hover {
  border-color: var(--color-gold);
  background: rgba(212, 175, 55, 0.08);
  transform: translateY(-3px);
}
.projects-more-button[_ngcontent-ng-c2408180415]:hover   .projects-more-icon[_ngcontent-ng-c2408180415] {
  transform: translate(3px, -3px);
}
.final-cta-section[_ngcontent-ng-c2408180415] {
  position: relative;
  padding: 100px 0;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(212, 175, 55, 0.07),
      transparent 45%),
    var(--color-black);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}
.final-cta-inner[_ngcontent-ng-c2408180415] {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.final-cta-inner[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415] {
  margin: 24px 0 20px;
  font-family: var(--font-body);
  font-size: clamp(40px, 5vw, 64px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: -3px;
}
.final-cta-inner[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415]   em[_ngcontent-ng-c2408180415] {
  display: block;
  color: var(--color-gold);
  font-style: italic;
  font-weight: 600;
}
.final-cta-inner[_ngcontent-ng-c2408180415]    > p[_ngcontent-ng-c2408180415] {
  max-width: 560px;
  margin: 0;
  color: var(--color-gray);
  font-size: 15px;
  line-height: 1.8;
}
.final-cta-actions[_ngcontent-ng-c2408180415] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 36px 0 30px;
}
.final-cta-whatsapp[_ngcontent-ng-c2408180415] {
  margin-top: 10px;
  color: var(--color-gray-dark);
  font-size: 11px;
}
.final-cta-whatsapp[_ngcontent-ng-c2408180415]   a[_ngcontent-ng-c2408180415] {
  color: var(--color-gold);
  font-weight: 600;
}
.final-cta-whatsapp[_ngcontent-ng-c2408180415]   a[_ngcontent-ng-c2408180415]:hover {
  color: var(--color-gold-light);
}
@media (max-width: 900px) {
  .hero-container[_ngcontent-ng-c2408180415] {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-top: 140px;
    padding-bottom: 100px;
  }
  .hero-content[_ngcontent-ng-c2408180415] {
    max-width: 700px;
  }
  .hero-visual[_ngcontent-ng-c2408180415] {
    min-height: 420px;
  }
  .visual-card[_ngcontent-ng-c2408180415] {
    max-width: 460px;
  }
  .floating-card[_ngcontent-ng-c2408180415] {
    left: 5%;
  }
  .why-grid[_ngcontent-ng-c2408180415] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 800px) {
  .projects-section[_ngcontent-ng-c2408180415] {
    padding: 90px 0;
  }
  .projects-header[_ngcontent-ng-c2408180415] {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 45px;
  }
  .projects-list[_ngcontent-ng-c2408180415] {
    gap: 30px;
  }
  .project-card[_ngcontent-ng-c2408180415] {
    grid-template-columns: 1fr;
    min-height: auto;
    border-radius: 18px;
  }
  .project-image[_ngcontent-ng-c2408180415] {
    min-height: 280px;
  }
  .project-info[_ngcontent-ng-c2408180415] {
    padding: 35px;
  }
}
@media (max-width: 700px) {
  .services-section[_ngcontent-ng-c2408180415] {
    padding: 90px 0;
  }
  .section-container[_ngcontent-ng-c2408180415] {
    width: min(calc(100% - 32px), var(--container));
  }
  .section-heading[_ngcontent-ng-c2408180415] {
    margin-bottom: 45px;
  }
  .section-heading[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415] {
    font-size: clamp(40px, 12vw, 55px);
  }
  .services-grid[_ngcontent-ng-c2408180415] {
    grid-template-columns: 1fr;
    border-radius: 16px;
  }
}
@media (max-width: 600px) {
  .hero-container[_ngcontent-ng-c2408180415] {
    width: min(calc(100% - 32px), var(--container));
    padding-top: 120px;
  }
  .hero[_ngcontent-ng-c2408180415]   h1[_ngcontent-ng-c2408180415] {
    font-size: clamp(45px, 14vw, 65px);
    letter-spacing: -2px;
  }
  .hero-description[_ngcontent-ng-c2408180415] {
    font-size: 14px;
  }
  .hero-actions[_ngcontent-ng-c2408180415] {
    flex-direction: column;
    align-items: stretch;
  }
  .btn[_ngcontent-ng-c2408180415] {
    width: 100%;
  }
  .hero-stats[_ngcontent-ng-c2408180415] {
    justify-content: space-between;
    margin-top: 42px;
  }
  .stat[_ngcontent-ng-c2408180415] {
    min-width: auto;
  }
  .stat[_ngcontent-ng-c2408180415]    + .stat[_ngcontent-ng-c2408180415] {
    padding-left: 12px;
  }
  .stat[_ngcontent-ng-c2408180415]   strong[_ngcontent-ng-c2408180415] {
    font-size: 15px;
  }
  .stat[_ngcontent-ng-c2408180415]   span[_ngcontent-ng-c2408180415] {
    font-size: 8px;
  }
  .hero-visual[_ngcontent-ng-c2408180415] {
    min-height: 350px;
  }
  .visual-card[_ngcontent-ng-c2408180415] {
    padding: 20px;
    border-radius: 18px;
  }
  .visual-content[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415] {
    font-size: 48px;
  }
  .floating-card[_ngcontent-ng-c2408180415] {
    bottom: 35px;
    left: 0;
    padding: 10px 14px;
  }
  .scroll-indicator[_ngcontent-ng-c2408180415] {
    display: none;
  }
  .why-grid[_ngcontent-ng-c2408180415] {
    grid-template-columns: 1fr;
  }
  .final-cta-actions[_ngcontent-ng-c2408180415] {
    flex-direction: column;
    align-items: stretch;
  }
}
@media (max-width: 500px) {
  .projects-more[_ngcontent-ng-c2408180415] {
    margin-top: 45px;
  }
  .projects-more-button[_ngcontent-ng-c2408180415] {
    width: 100%;
    justify-content: center;
    padding: 13px 18px;
  }
  .project-image[_ngcontent-ng-c2408180415] {
    min-height: 250px;
  }
  .project-image-category[_ngcontent-ng-c2408180415] {
    display: none;
  }
  .project-info[_ngcontent-ng-c2408180415]   h3[_ngcontent-ng-c2408180415] {
    font-size: 36px;
  }
}
@media (hover: none) {
  .btn[_ngcontent-ng-c2408180415]:hover, 
   .service-card[_ngcontent-ng-c2408180415]:hover, 
   .project-card[_ngcontent-ng-c2408180415]:hover, 
   .projects-more-button[_ngcontent-ng-c2408180415]:hover {
    transform: none;
  }
}
@media (max-width: 700px) {
  .hero[_ngcontent-ng-c2408180415], 
   .hero-container[_ngcontent-ng-c2408180415] {
    min-height: auto;
  }
  .hero-container[_ngcontent-ng-c2408180415] {
    padding-bottom: 80px;
  }
  .scroll-indicator[_ngcontent-ng-c2408180415] {
    display: none;
  }
}
@media (max-width: 400px) {
  .hero[_ngcontent-ng-c2408180415]   h1[_ngcontent-ng-c2408180415] {
    font-size: clamp(34px, 11vw, 45px);
    letter-spacing: -1.5px;
  }
  .hero-stats[_ngcontent-ng-c2408180415] {
    flex-wrap: wrap;
    gap: 18px;
  }
  .stat[_ngcontent-ng-c2408180415] {
    min-width: 0;
    flex: 1 1 40%;
  }
  .visual-content[_ngcontent-ng-c2408180415]   h2[_ngcontent-ng-c2408180415] {
    font-size: 30px;
  }
  .floating-card[_ngcontent-ng-c2408180415] {
    display: none;
  }
  .service-card[_ngcontent-ng-c2408180415], 
   .project-info[_ngcontent-ng-c2408180415] {
    padding: 24px 20px;
  }
}
.tech-marquee[_ngcontent-ng-c2408180415] {
  position: relative;
  padding: 42px 0 46px;
  background: var(--color-black);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}
.tech-marquee-label[_ngcontent-ng-c2408180415] {
  margin: 0 0 20px;
  text-align: center;
  color: var(--color-gray-dark);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.tech-marquee-inner[_ngcontent-ng-c2408180415] {
  width: min(calc(100% - 48px), 540px);
  margin: 0 auto;
  overflow: hidden;
  -webkit-mask-image:
    linear-gradient(
      90deg,
      transparent,
      #000 14%,
      #000 86%,
      transparent);
  mask-image:
    linear-gradient(
      90deg,
      transparent,
      #000 14%,
      #000 86%,
      transparent);
}
.tech-track[_ngcontent-ng-c2408180415] {
  display: flex;
  width: max-content;
  animation: _ngcontent-ng-c2408180415_tech-scroll 26s linear infinite;
}
.tech-marquee[_ngcontent-ng-c2408180415]:hover   .tech-track[_ngcontent-ng-c2408180415] {
  animation-play-state: paused;
}
.tech-list[_ngcontent-ng-c2408180415] {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0 5px;
  list-style: none;
}
.tech-chip[_ngcontent-ng-c2408180415] {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex: none;
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--color-gray);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.3px;
  white-space: nowrap;
}
.tech-chip[_ngcontent-ng-c2408180415]   svg[_ngcontent-ng-c2408180415] {
  width: 13px;
  height: 13px;
  flex: none;
}
@keyframes _ngcontent-ng-c2408180415_tech-scroll {
  to {
    transform: translateX(-50%);
  }
}
@media (max-width: 600px) {
  .tech-marquee-inner[_ngcontent-ng-c2408180415] {
    width: calc(100% - 32px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .tech-track[_ngcontent-ng-c2408180415] {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
  }
  .tech-marquee-inner[_ngcontent-ng-c2408180415] {
    width: min(calc(100% - 48px), var(--container));
    -webkit-mask-image: none;
    mask-image: none;
  }
  .tech-list[aria-hidden=true][_ngcontent-ng-c2408180415] {
    display: none;
  }
}
.service-card[_ngcontent-ng-c2408180415]   h3[_ngcontent-ng-c2408180415] {
  margin-bottom: 0;
}
.service-card[_ngcontent-ng-c2408180415]   .exp-detalle[_ngcontent-ng-c2408180415]    > div[_ngcontent-ng-c2408180415] {
  padding-top: 16px;
}
.service-card[_ngcontent-ng-c2408180415]   .exp-detalle[_ngcontent-ng-c2408180415]   p[_ngcontent-ng-c2408180415] {
  margin: 0;
}
.service-card[_ngcontent-ng-c2408180415]   .exp-toggle[_ngcontent-ng-c2408180415] {
  position: absolute;
  right: 26px;
  bottom: 26px;
}
.service-card.exp-tactil[_ngcontent-ng-c2408180415] {
  padding-bottom: 74px;
}
@media (max-width: 700px) {
  .service-card[_ngcontent-ng-c2408180415] {
    min-height: 0;
    padding: 22px 24px;
  }
  .service-icon[_ngcontent-ng-c2408180415] {
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
  }
  .service-card[_ngcontent-ng-c2408180415]   h3[_ngcontent-ng-c2408180415] {
    font-size: 19px;
  }
  .service-card[_ngcontent-ng-c2408180415]   p[_ngcontent-ng-c2408180415] {
    font-size: 12.5px;
  }
  .service-card[_ngcontent-ng-c2408180415]   .exp-detalle[_ngcontent-ng-c2408180415]    > div[_ngcontent-ng-c2408180415] {
    padding-top: 10px;
  }
  .service-card.exp-tactil[_ngcontent-ng-c2408180415] {
    padding-bottom: 52px;
  }
  .service-card[_ngcontent-ng-c2408180415]   .exp-toggle[_ngcontent-ng-c2408180415] {
    right: 20px;
    bottom: 18px;
  }
}
/*# sourceMappingURL=/home.css.map */</style><meta name="description" content="Code.Nar diseña y desarrolla páginas web, landing pages, tiendas online y soluciones digitales para empresas, emprendimientos y profesionales en Colombia. Con sede en Pasto, Nariño."><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://codenar.net/"><meta property="og:type" content="website"><meta property="og:site_name" content="Code.Nar"><meta property="og:title" content="Desarrollo Web en Colombia | Code.Nar"><meta property="og:description" content="Code.Nar diseña y desarrolla páginas web, landing pages, tiendas online y soluciones digitales para empresas, emprendimientos y profesionales en Colombia. Con sede en Pasto, Nariño."><meta property="og:url" content="https://codenar.net/"><meta property="og:image" content="https://codenar.net/og-image.png"><meta property="og:image:width" content="1489"><meta property="og:image:height" content="776"><meta property="og:image:alt" content="Code.Nar — desarrollo web y soluciones digitales en Colombia"><meta property="og:locale" content="es_CO"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Desarrollo Web en Colombia | Code.Nar"><meta name="twitter:description" content="Code.Nar diseña y desarrolla páginas web, landing pages, tiendas online y soluciones digitales para empresas, emprendimientos y profesionales en Colombia. Con sede en Pasto, Nariño."><meta name="twitter:image" content="https://codenar.net/og-image.png"><meta name="twitter:image:alt" content="Code.Nar — desarrollo web y soluciones digitales en Colombia"><script id="codenar-schema" type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"ProfessionalService","@id":"https://codenar.net/#negocio","name":"Code.Nar","image":"https://codenar.net/og-image.png","url":"https://codenar.net","telephone":"+57 320 000 0000","email":"contacto@codenar.net","priceRange":"\$\$","areaServed":"CO","description":"Estudio de desarrollo web con sede en Pasto, Nariño: sitios web, tiendas online y sistemas a medida para empresas y emprendimientos en toda Colombia.","address":{"@type":"PostalAddress","addressLocality":"Pasto","addressRegion":"Nariño","addressCountry":"CO"},"sameAs":["https://www.instagram.com/CodeNar","https://www.tiktok.com/@CodeNar","https://wa.me/573200000000"]},{"@type":"WebPage","@id":"https://codenar.net/","name":"Desarrollo Web en Colombia | Code.Nar","description":"Code.Nar diseña y desarrolla páginas web, landing pages, tiendas online y soluciones digitales para empresas, emprendimientos y profesionales en Colombia. Con sede en Pasto, Nariño.","url":"https://codenar.net/","inLanguage":"es-CO","isPartOf":{"@id":"https://codenar.net/#negocio"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://codenar.net"}]}]}</script><style ng-app-id="ng">
[_nghost-ng-c4073913990] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
svg[_ngcontent-ng-c4073913990] {
  display: block;
  width: 100%;
  height: 100%;
}
/*# sourceMappingURL=/icon.css.map */</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],["error"]);</script>
  <app-root ng-version="22.1.3" ngh="12" ng-server-context="ssg"><app-navbar _nghost-ng-c831784485="" ngh="0"><header _ngcontent-ng-c831784485="" class="navbar"><div _ngcontent-ng-c831784485="" class="navbar-container"><a _ngcontent-ng-c831784485="" routerlink="/" aria-label="Code.Nar - Inicio" class="brand" href="/" jsaction="click:;"><img _ngcontent-ng-c831784485="" src="/images/logo.png" alt="" width="42" height="42" class="brand-mark"><span _ngcontent-ng-c831784485="" class="brand-name">Code.<span _ngcontent-ng-c831784485="">Nar</span></span></a><nav _ngcontent-ng-c831784485="" aria-label="Navegación principal" class="desktop-nav"><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/" class="activo" jsaction="click:;"> Inicio </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/servicios" class="" jsaction="click:;"> Servicios </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/proyectos" class="" jsaction="click:;"> Proyectos </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/nosotros" class="" jsaction="click:;"> Nosotros </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/contacto" class="" jsaction="click:;"> Contacto </a><!--container--></nav><a _ngcontent-ng-c831784485="" routerlink="/contacto" class="navbar-cta" href="/contacto" jsaction="click:;"> Hablemos <span _ngcontent-ng-c831784485="">↗</span></a><button _ngcontent-ng-c831784485="" type="button" aria-controls="menu-movil" class="menu-toggle" aria-expanded="false" aria-label="Abrir menú" jsaction="click:;"><span _ngcontent-ng-c831784485="" class="menu-toggle-linea"></span><span _ngcontent-ng-c831784485="" class="menu-toggle-linea"></span></button></div></header><div _ngcontent-ng-c831784485="" id="menu-movil" class="menu-movil" inert=""><nav _ngcontent-ng-c831784485="" aria-label="Navegación móvil"><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/" class="activo" jsaction="click:;"> Inicio <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/servicios" class="" jsaction="click:;"> Servicios <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/proyectos" class="" jsaction="click:;"> Proyectos <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/nosotros" class="" jsaction="click:;"> Nosotros <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/contacto" class="" jsaction="click:;"> Contacto <span _ngcontent-ng-c831784485="">↗</span></a><!--container--></nav><a _ngcontent-ng-c831784485="" routerlink="/contacto" class="menu-movil-cta" href="/contacto" jsaction="click:;"> Hablemos de tu proyecto <span _ngcontent-ng-c831784485="">↗</span></a></div><!--container--></app-navbar><router-outlet></router-outlet><app-home _nghost-ng-c2408180415="" ngh="11"><section _ngcontent-ng-c2408180415="" class="hero"><div _ngcontent-ng-c2408180415="" class="hero-container"><div _ngcontent-ng-c2408180415="" class="hero-content"><div _ngcontent-ng-c2408180415="" class="eyebrow hero-reveal"><span _ngcontent-ng-c2408180415="" class="eyebrow-dot"></span> DESARROLLO DIGITAL · COLOMBIA </div><h1 _ngcontent-ng-c2408180415="" class="hero-reveal"> Automatizamos, desarrollamos <span _ngcontent-ng-c2408180415=""> y potenciamos.</span> tu negocio. </h1><p _ngcontent-ng-c2408180415="" class="hero-description hero-reveal"> Somos Code.Nar: Creamos webs, diseñamos software a medida y ofrecemos hosting para que tu negocio crezca en el mundo digital. Resultados reales para empresas </p><div _ngcontent-ng-c2408180415="" class="hero-actions hero-reveal"><a _ngcontent-ng-c2408180415="" routerlink="/contacto" class="btn btn-primary" href="/contacto" jsaction="click:;"> Impulsa tu negocio <span _ngcontent-ng-c2408180415="">↗</span></a><a _ngcontent-ng-c2408180415="" href="#servicios" class="btn btn-secondary"> Ver servicios <span _ngcontent-ng-c2408180415="">→</span></a></div><div _ngcontent-ng-c2408180415="" aria-label="Características de Code.Nar" class="hero-stats hero-reveal"><div _ngcontent-ng-c2408180415="" class="stat"><strong _ngcontent-ng-c2408180415="">Equipo</strong><span _ngcontent-ng-c2408180415="">Multidisciplinario</span></div><div _ngcontent-ng-c2408180415="" class="stat"><strong _ngcontent-ng-c2408180415="">6</strong><span _ngcontent-ng-c2408180415="">Servicios digitales</span></div><div _ngcontent-ng-c2408180415="" class="stat"><strong _ngcontent-ng-c2408180415="">100%</strong><span _ngcontent-ng-c2408180415="">A la medida</span></div></div></div><div _ngcontent-ng-c2408180415="" class="hero-visual hero-reveal"><div _ngcontent-ng-c2408180415="" class="visual-glow"></div><div _ngcontent-ng-c2408180415="" class="visual-card"><div _ngcontent-ng-c2408180415="" class="visual-card-top"><span _ngcontent-ng-c2408180415="">NARICODE</span><span _ngcontent-ng-c2408180415="">20 / 08</span></div><div _ngcontent-ng-c2408180415="" class="visual-content"><span _ngcontent-ng-c2408180415="" class="visual-label"> EXPERIENCIA DIGITAL </span><h2 _ngcontent-ng-c2408180415=""> Crear. <br _ngcontent-ng-c2408180415=""> Escalar. <br _ngcontent-ng-c2408180415=""><em _ngcontent-ng-c2408180415="">Crecer.</em></h2><div _ngcontent-ng-c2408180415="" class="visual-line"></div></div><div _ngcontent-ng-c2408180415="" class="visual-card-bottom"><span _ngcontent-ng-c2408180415="">DESARROLLO WEB</span><span _ngcontent-ng-c2408180415="">2026</span></div></div><div _ngcontent-ng-c2408180415="" class="floating-card"><span _ngcontent-ng-c2408180415="" class="floating-icon"><app-icon _ngcontent-ng-c2408180415="" name="sparkles" _nghost-ng-c4073913990="" style="width: 16px; height: 16px;" ngh="1"><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M12 3.2c.5 3.1 2 4.6 5.1 5.1-3.1.5-4.6 2-5.1 5.1-.5-3.1-2-4.6-5.1-5.1 3.1-.5 4.6-2 5.1-5.1Z"></path><path _ngcontent-ng-c4073913990="" d="M18.3 14.5c.2 1.5 1 2.3 2.5 2.5-1.5.2-2.3 1-2.5 2.5-.2-1.5-1-2.3-2.5-2.5 1.5-.2 2.3-1 2.5-2.5Z"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></span><div _ngcontent-ng-c2408180415=""><strong _ngcontent-ng-c2408180415="">Soluciones</strong><small _ngcontent-ng-c2408180415="">Digitales</small></div></div></div></div><div _ngcontent-ng-c2408180415="" class="scroll-indicator"><span _ngcontent-ng-c2408180415=""></span> DESPLÁZATE PARA EXPLORAR </div></section><section _ngcontent-ng-c2408180415="" aria-label="Tecnologías que utilizamos" class="tech-marquee"><p _ngcontent-ng-c2408180415="" class="tech-marquee-label">Tecnologías que usamos</p><div _ngcontent-ng-c2408180415="" class="tech-marquee-inner"><div _ngcontent-ng-c2408180415="" class="tech-track"><ul _ngcontent-ng-c2408180415="" class="tech-list"><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 272" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#E23237" d="M128 0 0 45.7l19.5 169.3L128 272l108.5-57L256 45.7z"></path><path _ngcontent-ng-c2408180415="" fill="#B52E31" d="M128 0v272l108.5-57L256 45.7z"></path><path _ngcontent-ng-c2408180415="" fill="#fff" d="M128 31.7 47.8 210.7h29.9l16.1-40.2h68.2l16.1 40.2h29.9zm23.4 113.2h-46.8L128 88.5z"></path></svg><span _ngcontent-ng-c2408180415="">Angular</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 256" aria-hidden="true"><rect _ngcontent-ng-c2408180415="" width="256" height="256" rx="26" fill="#3178C6"></rect><path _ngcontent-ng-c2408180415="" fill="#fff" d="M146 205v-27c4 2 9 4 15 5 6 1 12 1 17-1 3-1 5-3 6-6 1-4 0-7-3-10-3-2-8-5-16-8-11-4-19-9-24-15-4-6-6-13-5-22 1-8 5-15 12-20 7-5 16-7 27-7 8 0 16 1 22 3v26c-6-3-13-5-20-5-6 0-10 1-13 4-3 2-4 5-4 8 0 4 2 6 5 9 3 2 9 5 17 8 12 5 20 10 24 16 4 6 6 14 5 23-1 9-6 16-13 21-8 5-18 7-30 7-9 0-18-2-24-4zM120 108H92v97H66v-97H38V86h82z"></path></svg><span _ngcontent-ng-c2408180415="">TypeScript</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 256" aria-hidden="true"><rect _ngcontent-ng-c2408180415="" width="256" height="256" fill="#F7DF1E"></rect><path _ngcontent-ng-c2408180415="" d="M67 214l20-12c4 7 7 13 15 13 8 0 13-3 13-16v-83h25v83c0 25-15 37-37 37-19 0-30-10-36-22zm86-3 20-12c5 9 12 16 24 16 10 0 17-5 17-12 0-8-6-11-17-16l-6-3c-18-8-29-17-29-37 0-18 14-31 35-31 15 0 26 5 33 20l-19 12c-4-8-9-11-15-11-6 0-10 4-10 10 0 7 4 10 14 14l6 3c21 9 32 18 32 38 0 22-17 33-40 33-22 0-37-11-45-25z"></path></svg><span _ngcontent-ng-c2408180415="">JavaScript</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 289" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#539E43" d="M128 0 8 69v151l120 69 120-69V69z"></path><path _ngcontent-ng-c2408180415="" fill="#333" d="M128 44 48 90v108l30 17V119l50-29 50 29v57l-50 29v34l80-46V90z"></path></svg><span _ngcontent-ng-c2408180415="">Node.js</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 512 512" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#E44D26" d="M71 460 30 0h451l-41 460-185 52z"></path><path _ngcontent-ng-c2408180415="" fill="#F16529" d="m256 472 149-41 35-394H256z"></path><path _ngcontent-ng-c2408180415="" fill="#EBEBEB" d="M256 208h-75l-5-58h80V94H114l15 171h127zm0 147-64-17-4-45h-56l7 89 117 32z"></path><path _ngcontent-ng-c2408180415="" fill="#fff" d="M256 208v57h70l-7 74-63 17v59l116-32 16-175zm0-114v56h137l5-56z"></path></svg><span _ngcontent-ng-c2408180415="">HTML5</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 48 48" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#38BDF8" d="M24 10c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3 2.3 2.4 5 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3C32.7 12.7 30 10 24 10zM12 24c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3 2.3 2.4 5 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3C20.7 26.7 18 24 12 24z"></path></svg><span _ngcontent-ng-c2408180415="">Tailwind CSS</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 109 113" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#3ECF8E" d="M63.7 110.3c-2.8 3.6-8.6 1.6-8.7-2.9L54 42h44.3c8 0 12.5 9.3 7.5 15.6z"></path><path _ngcontent-ng-c2408180415="" fill="#249361" d="M45.3 2.4c2.8-3.6 8.6-1.6 8.7 2.9L54.6 71H10.3c-8 0-12.5-9.3-7.5-15.6z"></path></svg><span _ngcontent-ng-c2408180415="">Supabase</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 128 192" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#1abcfe" d="M64 96a32 32 0 1 1 64 0 32 32 0 0 1-64 0z"></path><path _ngcontent-ng-c2408180415="" fill="#0acf83" d="M0 160a32 32 0 0 1 32-32h32v32a32 32 0 1 1-64 0z"></path><path _ngcontent-ng-c2408180415="" fill="#ff7262" d="M64 0h32a32 32 0 1 1 0 64H64z"></path><path _ngcontent-ng-c2408180415="" fill="#f24e1e" d="M0 32A32 32 0 0 1 32 0h32v64H32A32 32 0 0 1 0 32z"></path><path _ngcontent-ng-c2408180415="" fill="#a259ff" d="M0 96a32 32 0 0 1 32-32h32v64H32A32 32 0 0 1 0 96z"></path></svg><span _ngcontent-ng-c2408180415="">Figma</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 512 512" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#fff" d="M256 48 496 464H16z"></path></svg><span _ngcontent-ng-c2408180415="">Vercel</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 48 48" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.4 30.1 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.3 17.7 9.5 24 9.5z"></path><path _ngcontent-ng-c2408180415="" fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7C43.6 38 46.5 31.8 46.5 24.5z"></path><path _ngcontent-ng-c2408180415="" fill="#FBBC05" d="M10.4 28.3c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6.1C1 15.9 0 19.8 0 24s1 8.1 2.6 11.4z"></path><path _ngcontent-ng-c2408180415="" fill="#34A853" d="M24 48c6.1 0 11.3-2 15-5.5l-7.3-5.7c-2 1.4-4.6 2.3-7.7 2.3-6.3 0-11.7-3.8-13.6-9.1l-7.8 6.1C6.5 42.6 14.6 48 24 48z"></path></svg><span _ngcontent-ng-c2408180415="">Google</span></li></ul><ul _ngcontent-ng-c2408180415="" aria-hidden="true" class="tech-list"><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 272" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#E23237" d="M128 0 0 45.7l19.5 169.3L128 272l108.5-57L256 45.7z"></path><path _ngcontent-ng-c2408180415="" fill="#B52E31" d="M128 0v272l108.5-57L256 45.7z"></path><path _ngcontent-ng-c2408180415="" fill="#fff" d="M128 31.7 47.8 210.7h29.9l16.1-40.2h68.2l16.1 40.2h29.9zm23.4 113.2h-46.8L128 88.5z"></path></svg><span _ngcontent-ng-c2408180415="">Angular</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 256" aria-hidden="true"><rect _ngcontent-ng-c2408180415="" width="256" height="256" rx="26" fill="#3178C6"></rect><path _ngcontent-ng-c2408180415="" fill="#fff" d="M146 205v-27c4 2 9 4 15 5 6 1 12 1 17-1 3-1 5-3 6-6 1-4 0-7-3-10-3-2-8-5-16-8-11-4-19-9-24-15-4-6-6-13-5-22 1-8 5-15 12-20 7-5 16-7 27-7 8 0 16 1 22 3v26c-6-3-13-5-20-5-6 0-10 1-13 4-3 2-4 5-4 8 0 4 2 6 5 9 3 2 9 5 17 8 12 5 20 10 24 16 4 6 6 14 5 23-1 9-6 16-13 21-8 5-18 7-30 7-9 0-18-2-24-4zM120 108H92v97H66v-97H38V86h82z"></path></svg><span _ngcontent-ng-c2408180415="">TypeScript</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 256" aria-hidden="true"><rect _ngcontent-ng-c2408180415="" width="256" height="256" fill="#F7DF1E"></rect><path _ngcontent-ng-c2408180415="" d="M67 214l20-12c4 7 7 13 15 13 8 0 13-3 13-16v-83h25v83c0 25-15 37-37 37-19 0-30-10-36-22zm86-3 20-12c5 9 12 16 24 16 10 0 17-5 17-12 0-8-6-11-17-16l-6-3c-18-8-29-17-29-37 0-18 14-31 35-31 15 0 26 5 33 20l-19 12c-4-8-9-11-15-11-6 0-10 4-10 10 0 7 4 10 14 14l6 3c21 9 32 18 32 38 0 22-17 33-40 33-22 0-37-11-45-25z"></path></svg><span _ngcontent-ng-c2408180415="">JavaScript</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 256 289" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#539E43" d="M128 0 8 69v151l120 69 120-69V69z"></path><path _ngcontent-ng-c2408180415="" fill="#333" d="M128 44 48 90v108l30 17V119l50-29 50 29v57l-50 29v34l80-46V90z"></path></svg><span _ngcontent-ng-c2408180415="">Node.js</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 512 512" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#E44D26" d="M71 460 30 0h451l-41 460-185 52z"></path><path _ngcontent-ng-c2408180415="" fill="#F16529" d="m256 472 149-41 35-394H256z"></path><path _ngcontent-ng-c2408180415="" fill="#EBEBEB" d="M256 208h-75l-5-58h80V94H114l15 171h127zm0 147-64-17-4-45h-56l7 89 117 32z"></path><path _ngcontent-ng-c2408180415="" fill="#fff" d="M256 208v57h70l-7 74-63 17v59l116-32 16-175zm0-114v56h137l5-56z"></path></svg><span _ngcontent-ng-c2408180415="">HTML5</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 48 48" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#38BDF8" d="M24 10c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3 2.3 2.4 5 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3C32.7 12.7 30 10 24 10zM12 24c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3 2.3 2.4 5 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3C20.7 26.7 18 24 12 24z"></path></svg><span _ngcontent-ng-c2408180415="">Tailwind CSS</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 109 113" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#3ECF8E" d="M63.7 110.3c-2.8 3.6-8.6 1.6-8.7-2.9L54 42h44.3c8 0 12.5 9.3 7.5 15.6z"></path><path _ngcontent-ng-c2408180415="" fill="#249361" d="M45.3 2.4c2.8-3.6 8.6-1.6 8.7 2.9L54.6 71H10.3c-8 0-12.5-9.3-7.5-15.6z"></path></svg><span _ngcontent-ng-c2408180415="">Supabase</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 128 192" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#1abcfe" d="M64 96a32 32 0 1 1 64 0 32 32 0 0 1-64 0z"></path><path _ngcontent-ng-c2408180415="" fill="#0acf83" d="M0 160a32 32 0 0 1 32-32h32v32a32 32 0 1 1-64 0z"></path><path _ngcontent-ng-c2408180415="" fill="#ff7262" d="M64 0h32a32 32 0 1 1 0 64H64z"></path><path _ngcontent-ng-c2408180415="" fill="#f24e1e" d="M0 32A32 32 0 0 1 32 0h32v64H32A32 32 0 0 1 0 32z"></path><path _ngcontent-ng-c2408180415="" fill="#a259ff" d="M0 96a32 32 0 0 1 32-32h32v64H32A32 32 0 0 1 0 96z"></path></svg><span _ngcontent-ng-c2408180415="">Figma</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 512 512" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#fff" d="M256 48 496 464H16z"></path></svg><span _ngcontent-ng-c2408180415="">Vercel</span></li><li _ngcontent-ng-c2408180415="" class="tech-chip"><svg _ngcontent-ng-c2408180415="" viewBox="0 0 48 48" aria-hidden="true"><path _ngcontent-ng-c2408180415="" fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.4 30.1 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.3 17.7 9.5 24 9.5z"></path><path _ngcontent-ng-c2408180415="" fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7C43.6 38 46.5 31.8 46.5 24.5z"></path><path _ngcontent-ng-c2408180415="" fill="#FBBC05" d="M10.4 28.3c-.5-1.5-.8-3.1-.8-4.8s.3-3.3.8-4.8l-7.8-6.1C1 15.9 0 19.8 0 24s1 8.1 2.6 11.4z"></path><path _ngcontent-ng-c2408180415="" fill="#34A853" d="M24 48c6.1 0 11.3-2 15-5.5l-7.3-5.7c-2 1.4-4.6 2.3-7.7 2.3-6.3 0-11.7-3.8-13.6-9.1l-7.8 6.1C6.5 42.6 14.6 48 24 48z"></path></svg><span _ngcontent-ng-c2408180415="">Google</span></li></ul></div></div></section><section _ngcontent-ng-c2408180415="" class="why-section"><div _ngcontent-ng-c2408180415="" class="section-container"><div _ngcontent-ng-c2408180415="" class="section-heading reveal"><div _ngcontent-ng-c2408180415="" class="section-eyebrow"><span _ngcontent-ng-c2408180415=""></span> POR QUÉ CODE.NAR </div><h2 _ngcontent-ng-c2408180415=""> Resultados reales, <span _ngcontent-ng-c2408180415="">no solo diseño bonito.</span></h2><p _ngcontent-ng-c2408180415=""> No vendemos plantillas genéricas. Cada proyecto se piensa para generar más visibilidad, más clientes y más ventas para tu negocio. </p></div><div _ngcontent-ng-c2408180415="" class="why-grid"><article _ngcontent-ng-c2408180415="" class="why-card reveal"><div _ngcontent-ng-c2408180415="" class="why-icon"><app-icon _ngcontent-ng-c2408180415="" name="target" _nghost-ng-c4073913990="" style="width: 19px; height: 19px;" ngh="2"><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle _ngcontent-ng-c4073913990="" cx="12" cy="12" r="8"></circle><circle _ngcontent-ng-c4073913990="" cx="12" cy="12" r="4.3"></circle><circle _ngcontent-ng-c4073913990="" cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"></circle></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></div><h3 _ngcontent-ng-c2408180415="">Enfocados en resultados</h3><p _ngcontent-ng-c2408180415=""> Diseñamos y desarrollamos pensando en conversión: que cada visita se convierta en una oportunidad real. </p></article><article _ngcontent-ng-c2408180415="" class="why-card reveal"><div _ngcontent-ng-c2408180415="" class="why-icon"><app-icon _ngcontent-ng-c2408180415="" name="adjustments" _nghost-ng-c4073913990="" style="width: 19px; height: 19px;" ngh="3"><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M4 6h9M17 6h3M4 18h13M20 18h0M4 12h3M11 12h9"></path><circle _ngcontent-ng-c4073913990="" cx="15" cy="6" r="2"></circle><circle _ngcontent-ng-c4073913990="" cx="7" cy="12" r="2"></circle><circle _ngcontent-ng-c4073913990="" cx="17" cy="18" r="2"></circle></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></div><h3 _ngcontent-ng-c2408180415="">100% a la medida</h3><p _ngcontent-ng-c2408180415=""> Nada de plantillas. Cada sitio, tienda o sistema se construye según las necesidades reales de tu negocio. </p></article><article _ngcontent-ng-c2408180415="" class="why-card reveal"><div _ngcontent-ng-c2408180415="" class="why-icon"><app-icon _ngcontent-ng-c2408180415="" name="chat-bubble" _nghost-ng-c4073913990="" style="width: 19px; height: 19px;" ngh="4"><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-3.5 3.2V15.5H6a2 2 0 0 1-2-2v-7Z"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></div><h3 _ngcontent-ng-c2408180415="">Comunicación directa</h3><p _ngcontent-ng-c2408180415=""> Trabajas directamente con el equipo que desarrolla tu proyecto, sin intermediarios ni demoras. </p></article><article _ngcontent-ng-c2408180415="" class="why-card reveal"><div _ngcontent-ng-c2408180415="" class="why-icon"><app-icon _ngcontent-ng-c2408180415="" name="sparkles" _nghost-ng-c4073913990="" style="width: 19px; height: 19px;" ngh="1"><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M12 3.2c.5 3.1 2 4.6 5.1 5.1-3.1.5-4.6 2-5.1 5.1-.5-3.1-2-4.6-5.1-5.1 3.1-.5 4.6-2 5.1-5.1Z"></path><path _ngcontent-ng-c4073913990="" d="M18.3 14.5c.2 1.5 1 2.3 2.5 2.5-1.5.2-2.3 1-2.5 2.5-.2-1.5-1-2.3-2.5-2.5 1.5-.2 2.3-1 2.5-2.5Z"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></div><h3 _ngcontent-ng-c2408180415="">Tecnología moderna</h3><p _ngcontent-ng-c2408180415=""> Sitios y sistemas rápidos, seguros y preparados para escalar junto con el crecimiento de tu negocio. </p></article></div></div></section><section _ngcontent-ng-c2408180415="" id="servicios" class="services-section"><div _ngcontent-ng-c2408180415="" class="section-container"><div _ngcontent-ng-c2408180415="" class="section-heading reveal"><div _ngcontent-ng-c2408180415="" class="section-eyebrow"><span _ngcontent-ng-c2408180415=""></span> LO QUE HACEMOS </div><h2 _ngcontent-ng-c2408180415=""> Todo lo que necesitas <span _ngcontent-ng-c2408180415="">para vender más.</span></h2><p _ngcontent-ng-c2408180415=""> Seis servicios pensados para cubrir cada etapa de tu negocio digital: desde tu primera página hasta el sistema que automatiza tu operación. </p></div><div _ngcontent-ng-c2408180415="" class="services-grid"><article _ngcontent-ng-c2408180415="" appexpandible="" class="service-card exp"><div _ngcontent-ng-c2408180415="" class="service-number">01</div><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="desarrollo-web" aria-label="Ver servicio de Desarrollo Web" class="service-icon" href="/servicios#desarrollo-web" jsaction="click:;"><app-icon _ngcontent-ng-c2408180415="" name="code" _nghost-ng-c4073913990="" style="width: 20px; height: 20px;" ngh="5"><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M8.5 6 3.5 12l5 6"></path><path _ngcontent-ng-c4073913990="" d="M15.5 6l5 6-5 6"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></a><h3 _ngcontent-ng-c2408180415="">Desarrollo Web</h3><div _ngcontent-ng-c2408180415="" id="detalle-desarrollo-web" class="exp-detalle"><div _ngcontent-ng-c2408180415=""><p _ngcontent-ng-c2408180415=""> Un sitio profesional que genera confianza y convierte visitas en clientes reales. </p><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="desarrollo-web" class="service-link" href="/servicios#desarrollo-web" jsaction="click:;"> Explorar servicio → </a></div></div><button _ngcontent-ng-c2408180415="" type="button" aria-controls="detalle-desarrollo-web" class="exp-toggle" aria-expanded="false" aria-label="Ver detalle de Desarrollo Web" jsaction="click:;"> + </button></article><article _ngcontent-ng-c2408180415="" appexpandible="" class="service-card exp"><div _ngcontent-ng-c2408180415="" class="service-number">02</div><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="tiendas-online" aria-label="Ver servicio de Tiendas Online" class="service-icon" href="/servicios#tiendas-online" jsaction="click:;"><app-icon _ngcontent-ng-c2408180415="" name="shopping-bag" _nghost-ng-c4073913990="" style="width: 20px; height: 20px;" ngh="6"><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M6.5 8.5h11l-1 11.5a1.5 1.5 0 0 1-1.5 1.35H9a1.5 1.5 0 0 1-1.5-1.35L6.5 8.5Z"></path><path _ngcontent-ng-c4073913990="" d="M9 8.5V6.5a3 3 0 0 1 6 0v2"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></a><h3 _ngcontent-ng-c2408180415="">Tiendas Online</h3><div _ngcontent-ng-c2408180415="" id="detalle-tiendas-online" class="exp-detalle"><div _ngcontent-ng-c2408180415=""><p _ngcontent-ng-c2408180415=""> Vende en línea 24/7 con una tienda rápida, segura y fácil de gestionar. </p><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="tiendas-online" class="service-link" href="/servicios#tiendas-online" jsaction="click:;"> Explorar servicio → </a></div></div><button _ngcontent-ng-c2408180415="" type="button" aria-controls="detalle-tiendas-online" class="exp-toggle" aria-expanded="false" aria-label="Ver detalle de Tiendas Online" jsaction="click:;"> + </button></article><article _ngcontent-ng-c2408180415="" appexpandible="" class="service-card exp"><div _ngcontent-ng-c2408180415="" class="service-number">03</div><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="sistemas-web" aria-label="Ver servicio de Sistemas Web" class="service-icon" href="/servicios#sistemas-web" jsaction="click:;"><app-icon _ngcontent-ng-c2408180415="" name="cpu-chip" _nghost-ng-c4073913990="" style="width: 20px; height: 20px;" ngh="7"><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect _ngcontent-ng-c4073913990="" x="7" y="7" width="10" height="10" rx="1.5"></rect><path _ngcontent-ng-c4073913990="" d="M9 3.5v3M12 3.5v3M15 3.5v3M9 17.5v3M12 17.5v3M15 17.5v3M3.5 9h3M3.5 12h3M3.5 15h3M17.5 9h3M17.5 12h3M17.5 15h3"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></a><h3 _ngcontent-ng-c2408180415="">Sistemas Web</h3><div _ngcontent-ng-c2408180415="" id="detalle-sistemas-web" class="exp-detalle"><div _ngcontent-ng-c2408180415=""><p _ngcontent-ng-c2408180415=""> Automatiza procesos y ahorra horas de trabajo con software construido a tu medida. </p><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="sistemas-web" class="service-link" href="/servicios#sistemas-web" jsaction="click:;"> Explorar servicio → </a></div></div><button _ngcontent-ng-c2408180415="" type="button" aria-controls="detalle-sistemas-web" class="exp-toggle" aria-expanded="false" aria-label="Ver detalle de Sistemas Web" jsaction="click:;"> + </button></article><article _ngcontent-ng-c2408180415="" appexpandible="" class="service-card exp"><div _ngcontent-ng-c2408180415="" class="service-number">04</div><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="soluciones-digitales" aria-label="Ver servicio de Soluciones Digitales" class="service-icon" href="/servicios#soluciones-digitales" jsaction="click:;"><app-icon _ngcontent-ng-c2408180415="" name="link" _nghost-ng-c4073913990="" style="width: 20px; height: 20px;" ngh="8"><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M9.5 14.5 14.5 9.5"></path><path _ngcontent-ng-c4073913990="" d="M11 7l1.3-1.3a3.5 3.5 0 0 1 5 5L16 12"></path><path _ngcontent-ng-c4073913990="" d="M13 17l-1.3 1.3a3.5 3.5 0 0 1-5-5L8 12"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></a><h3 _ngcontent-ng-c2408180415="">Soluciones Digitales</h3><div _ngcontent-ng-c2408180415="" id="detalle-soluciones-digitales" class="exp-detalle"><div _ngcontent-ng-c2408180415=""><p _ngcontent-ng-c2408180415=""> Conecta tus herramientas y haz que la tecnología trabaje a favor de tu negocio. </p><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="soluciones-digitales" class="service-link" href="/servicios#soluciones-digitales" jsaction="click:;"> Explorar servicio → </a></div></div><button _ngcontent-ng-c2408180415="" type="button" aria-controls="detalle-soluciones-digitales" class="exp-toggle" aria-expanded="false" aria-label="Ver detalle de Soluciones Digitales" jsaction="click:;"> + </button></article><article _ngcontent-ng-c2408180415="" appexpandible="" class="service-card exp"><div _ngcontent-ng-c2408180415="" class="service-number">05</div><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="landing-pages" aria-label="Ver servicio de Landing Pages" class="service-icon" href="/servicios#landing-pages" jsaction="click:;"><app-icon _ngcontent-ng-c2408180415="" name="bolt" _nghost-ng-c4073913990="" style="width: 20px; height: 20px;" ngh="9"><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M13 3 5 13.5h5.5L10 21l8-10.5h-5.5L13 3Z"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></a><h3 _ngcontent-ng-c2408180415="">Landing Pages</h3><div _ngcontent-ng-c2408180415="" id="detalle-landing-pages" class="exp-detalle"><div _ngcontent-ng-c2408180415=""><p _ngcontent-ng-c2408180415=""> Páginas enfocadas en un solo objetivo: convertir visitantes en clientes. </p><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="landing-pages" class="service-link" href="/servicios#landing-pages" jsaction="click:;"> Explorar servicio → </a></div></div><button _ngcontent-ng-c2408180415="" type="button" aria-controls="detalle-landing-pages" class="exp-toggle" aria-expanded="false" aria-label="Ver detalle de Landing Pages" jsaction="click:;"> + </button></article><article _ngcontent-ng-c2408180415="" appexpandible="" class="service-card exp"><div _ngcontent-ng-c2408180415="" class="service-number">06</div><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="marketing-digital" aria-label="Ver servicio de Marketing Digital" class="service-icon" href="/servicios#marketing-digital" jsaction="click:;"><app-icon _ngcontent-ng-c2408180415="" name="megaphone" _nghost-ng-c4073913990="" style="width: 20px; height: 20px;" ngh="10"><!--container--><!--container--><!--container--><!--container--><!--container--><svg _ngcontent-ng-c4073913990="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path _ngcontent-ng-c4073913990="" d="M3 10.2v3.6a1 1 0 0 0 1 1h1.8l1 5h2l-1-5H9l9 4V6.2l-9 4H4a1 1 0 0 0-1 1Z"></path><path _ngcontent-ng-c4073913990="" d="M19 9.5v5"></path></svg><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--><!--container--></app-icon></a><h3 _ngcontent-ng-c2408180415="">Marketing Digital</h3><div _ngcontent-ng-c2408180415="" id="detalle-marketing-digital" class="exp-detalle"><div _ngcontent-ng-c2408180415=""><p _ngcontent-ng-c2408180415=""> Más visibilidad, más alcance y más oportunidades para tu negocio. </p><a _ngcontent-ng-c2408180415="" routerlink="/servicios" fragment="marketing-digital" class="service-link" href="/servicios#marketing-digital" jsaction="click:;"> Explorar servicio → </a></div></div><button _ngcontent-ng-c2408180415="" type="button" aria-controls="detalle-marketing-digital" class="exp-toggle" aria-expanded="false" aria-label="Ver detalle de Marketing Digital" jsaction="click:;"> + </button></article></div></div></section><section _ngcontent-ng-c2408180415="" id="proyectos" class="projects-section"><div _ngcontent-ng-c2408180415="" class="section-container"><div _ngcontent-ng-c2408180415="" class="projects-header"><div _ngcontent-ng-c2408180415="" class="section-heading reveal"><div _ngcontent-ng-c2408180415="" class="section-eyebrow"><span _ngcontent-ng-c2408180415=""></span> PROYECTOS DESTACADOS </div><h2 _ngcontent-ng-c2408180415=""> Algunos de nuestros <span _ngcontent-ng-c2408180415="">trabajos.</span></h2><p _ngcontent-ng-c2408180415=""> Una selección de proyectos en los que hemos convertido ideas y necesidades reales en soluciones digitales. </p></div><span _ngcontent-ng-c2408180415="" class="projects-count"> 02 / DESTACADOS </span></div><div _ngcontent-ng-c2408180415="" class="projects-list"><article _ngcontent-ng-c2408180415="" class="project-card reveal"><div _ngcontent-ng-c2408180415="" class="project-image"><img _ngcontent-ng-c2408180415="" src="/images/reyinmobiliaria.png" alt="Captura de la plataforma web de Rey Inmobiliaria" loading="lazy" jsaction="error:;"><span _ngcontent-ng-c2408180415="" class="project-image-number">01</span><span _ngcontent-ng-c2408180415="" class="project-image-category">INMOBILIARIA · PLATAFORMA WEB</span></div><div _ngcontent-ng-c2408180415="" class="project-info"><div _ngcontent-ng-c2408180415="" class="project-meta"><span _ngcontent-ng-c2408180415="">01</span><span _ngcontent-ng-c2408180415="">DESARROLLO WEB</span></div><h3 _ngcontent-ng-c2408180415="">Rey Inmobiliaria</h3><p _ngcontent-ng-c2408180415=""> Plataforma web inmobiliaria diseñada para presentar propiedades, facilitar la búsqueda y gestionar el contenido de forma sencilla. </p><div _ngcontent-ng-c2408180415="" class="project-tags"><span _ngcontent-ng-c2408180415="">Angular</span><span _ngcontent-ng-c2408180415="">Supabase</span><span _ngcontent-ng-c2408180415="">TypeScript</span></div><a _ngcontent-ng-c2408180415="" href="https://reyinmobiliaria.net/" target="_blank" rel="noopener noreferrer" class="project-link"> Ver proyecto <span _ngcontent-ng-c2408180415="">↗</span></a></div></article><article _ngcontent-ng-c2408180415="" class="project-card project-card-reverse reveal"><div _ngcontent-ng-c2408180415="" class="project-image"><img _ngcontent-ng-c2408180415="" src="/images/av21bar.png" alt="Captura del sistema de gestión de AV21BAR" loading="lazy" jsaction="error:;"><span _ngcontent-ng-c2408180415="" class="project-image-number">02</span><span _ngcontent-ng-c2408180415="" class="project-image-category">NEGOCIO · SISTEMA DE GESTIÓN</span></div><div _ngcontent-ng-c2408180415="" class="project-info"><div _ngcontent-ng-c2408180415="" class="project-meta"><span _ngcontent-ng-c2408180415="">02</span><span _ngcontent-ng-c2408180415="">APLICACIÓN WEB</span></div><h3 _ngcontent-ng-c2408180415="">AV21BAR</h3><p _ngcontent-ng-c2408180415=""> Sistema de gestión para un negocio gastronómico, desarrollado para administrar pedidos, órdenes e historial de ventas. </p><div _ngcontent-ng-c2408180415="" class="project-tags"><span _ngcontent-ng-c2408180415="">Angular</span><span _ngcontent-ng-c2408180415="">TypeScript</span><span _ngcontent-ng-c2408180415="">Supabase</span></div><a _ngcontent-ng-c2408180415="" href="https://www.av-21bar.com/" target="_blank" rel="noopener noreferrer" class="project-link"> Ver proyecto <span _ngcontent-ng-c2408180415="">↗</span></a></div></article></div><div _ngcontent-ng-c2408180415="" class="projects-more reveal"><a _ngcontent-ng-c2408180415="" routerlink="/proyectos" class="projects-more-button" href="/proyectos" jsaction="click:;"><span _ngcontent-ng-c2408180415="">Ver todos los proyectos</span><span _ngcontent-ng-c2408180415="" class="projects-more-icon"> ↗ </span></a></div></div></section><section _ngcontent-ng-c2408180415="" class="final-cta-section reveal"><div _ngcontent-ng-c2408180415="" class="section-container"><div _ngcontent-ng-c2408180415="" class="final-cta-inner"><div _ngcontent-ng-c2408180415="" class="section-eyebrow"><span _ngcontent-ng-c2408180415=""></span> ¿LISTO PARA CRECER? </div><h2 _ngcontent-ng-c2408180415=""> Convirtamos tu idea <em _ngcontent-ng-c2408180415="">en resultados reales.</em></h2><p _ngcontent-ng-c2408180415=""> Cuéntanos qué necesita tu negocio y te ayudamos a encontrar el servicio digital adecuado para conseguirlo. </p><div _ngcontent-ng-c2408180415="" class="final-cta-actions"><a _ngcontent-ng-c2408180415="" routerlink="/contacto" class="btn btn-primary" href="/contacto" jsaction="click:;"> Hablemos de tu proyecto <span _ngcontent-ng-c2408180415="">↗</span></a><a _ngcontent-ng-c2408180415="" routerlink="/servicios" class="btn btn-secondary" href="/servicios" jsaction="click:;"> Ver todos los servicios <span _ngcontent-ng-c2408180415="">→</span></a></div><p _ngcontent-ng-c2408180415="" class="final-cta-whatsapp"> ¿Prefieres algo más rápido? <a _ngcontent-ng-c2408180415="" href="https://wa.me/573200000000" target="_blank" rel="noopener noreferrer"> Escríbenos por WhatsApp </a></p></div></div></section></app-home><!--container--><app-footer _nghost-ng-c1868340458="" ngh="11"><footer _ngcontent-ng-c1868340458="" class="footer"><div _ngcontent-ng-c1868340458="" class="footer-container"><div _ngcontent-ng-c1868340458="" class="footer-main"><div _ngcontent-ng-c1868340458="" class="footer-brand"><a _ngcontent-ng-c1868340458="" routerlink="/" aria-label="Code.Nar - Inicio" class="brand" href="/" jsaction="click:;"><span _ngcontent-ng-c1868340458="" aria-hidden="true" class="brand-mark">C</span><span _ngcontent-ng-c1868340458="" class="brand-name"> Code.<span _ngcontent-ng-c1868340458="">Nar</span></span></a><p _ngcontent-ng-c1868340458=""> Creamos soluciones digitales modernas para empresas, emprendimientos y profesionales. </p></div><div _ngcontent-ng-c1868340458="" class="footer-column"><h3 _ngcontent-ng-c1868340458="">Explorar</h3><a _ngcontent-ng-c1868340458="" routerlink="/" href="/" jsaction="click:;">Inicio</a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" href="/servicios" jsaction="click:;">Servicios</a><a _ngcontent-ng-c1868340458="" routerlink="/proyectos" href="/proyectos" jsaction="click:;">Proyectos</a><a _ngcontent-ng-c1868340458="" routerlink="/contacto" href="/contacto" jsaction="click:;">Contacto</a></div><div _ngcontent-ng-c1868340458="" class="footer-column"><h3 _ngcontent-ng-c1868340458="">Servicios</h3><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="desarrollo-web" href="/servicios#desarrollo-web" jsaction="click:;"> Desarrollo Web </a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="tiendas-online" href="/servicios#tiendas-online" jsaction="click:;"> Tiendas Online </a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="sistemas-web" href="/servicios#sistemas-web" jsaction="click:;"> Sistemas Web </a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="soluciones-digitales" href="/servicios#soluciones-digitales" jsaction="click:;"> Soluciones Digitales </a></div><div _ngcontent-ng-c1868340458="" class="footer-column"><h3 _ngcontent-ng-c1868340458="">Contacto</h3><a _ngcontent-ng-c1868340458="" routerlink="/contacto" href="/contacto" jsaction="click:;"> Hablemos </a><a _ngcontent-ng-c1868340458="" routerlink="/nosotros" href="/nosotros" jsaction="click:;"> Nosotros </a><span _ngcontent-ng-c1868340458="">Pasto, Nariño — Colombia</span></div></div><div _ngcontent-ng-c1868340458="" class="footer-bottom"><span _ngcontent-ng-c1868340458=""> © 2026 Code.Nar Todos los derechos reservados. </span><span _ngcontent-ng-c1868340458=""> Desarrollo digital en Colombia </span></div></div></footer></app-footer><app-whatsapp-button _nghost-ng-c536698142="" ngh="11"><div _ngcontent-ng-c536698142="" class="social-floating"><a _ngcontent-ng-c536698142="" href="https://www.instagram.com/CodeNar" target="_blank" rel="noopener noreferrer" aria-label="Code.Nar en Instagram" title="Instagram" class="social-icon-button social-icon-button--instagram"><svg _ngcontent-ng-c536698142="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c536698142="" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .05-1.6.2-1.9.3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Zm5.2-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg></a><a _ngcontent-ng-c536698142="" href="https://www.tiktok.com/@CodeNar" target="_blank" rel="noopener noreferrer" aria-label="Code.Nar en TikTok" title="TikTok" class="social-icon-button social-icon-button--tiktok"><svg _ngcontent-ng-c536698142="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c536698142="" d="M16.5 2h-3.1v13.9a2.6 2.6 0 1 1-2.2-2.6v-3.2a5.8 5.8 0 1 0 5.3 5.8V8.9a7.7 7.7 0 0 0 4.4 1.4V7.2a4.6 4.6 0 0 1-4.4-4.5V2Z"></path></svg></a><a _ngcontent-ng-c536698142="" href="https://wa.me/573200000000?text=Hola%20Code.Nar%2C%20quiero%20hablar%20sobre%20mi%20proyecto." target="_blank" rel="noopener noreferrer" aria-label="Escribir a Code.Nar por WhatsApp" title="Escríbenos por WhatsApp" class="whatsapp-button"><svg _ngcontent-ng-c536698142="" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path _ngcontent-ng-c536698142="" d="M16 3.2a12.7 12.7 0 0 0-10.9 19.2L3.5 28.8l6.6-1.7A12.8 12.8 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4a10.2 10.2 0 1 1 9.2 4.9Zm5.6-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.9-.9-3.1-1.7-4.3-3.9-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6s-.7-1.7-.9-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.3 3.8c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4Z"></path></svg><span _ngcontent-ng-c536698142="">Hablemos por WhatsApp</span></a></div></app-whatsapp-button></app-root>
<link rel="modulepreload" href="chunk-EBL26PRH.js"><link rel="modulepreload" href="chunk-AGCWZF3Q.js"><link rel="modulepreload" href="chunk-DIN7PMWM.js"><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-G3NGIOHT.js">
<link rel="modulepreload" href="chunk-WMNAKSMR.js">
<link rel="modulepreload" href="chunk-LNAFF5OP.js">
<link rel="modulepreload" href="chunk-OOLERLOD.js">
<link rel="modulepreload" href="chunk-WHH2CJHL.js">


<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"10":"t0","21":"t1","26":"t2"},"c":{"10":[{"i":"t0","r":1,"x":5}],"21":[{"i":"t1","r":1,"x":5}],"26":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[{"i":"t12","r":1}],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[{"i":"t9","r":1}],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[{"i":"t10","r":1}],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[{"i":"t11","r":1}],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[{"i":"t3","r":1}],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[{"i":"t4","r":1}],"2":[],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[{"i":"t5","r":1}],"3":[],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[{"i":"t6","r":1}],"4":[],"5":[],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[],"4":[{"i":"t7","r":1}],"5":[],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{"t":{"0":"t3","1":"t4","2":"t5","3":"t6","4":"t7","5":"t8","6":"t9","7":"t10","8":"t11","9":"t12","10":"t13","11":"t14","12":"t15","13":"t16","14":"t17","15":"t18","16":"t19"},"c":{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[{"i":"t8","r":1}],"6":[],"7":[],"8":[],"9":[],"10":[],"11":[],"12":[],"13":[],"14":[],"15":[],"16":[]}},{},{"c":{"1":[{"i":"c2408180415","r":1}]}}]}</script></body></html>`;