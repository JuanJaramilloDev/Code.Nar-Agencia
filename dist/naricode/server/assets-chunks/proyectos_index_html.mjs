export default `<!DOCTYPE html><html lang="es"><head>
  <meta charset="utf-8">
  <title>Proyectos de desarrollo web y sistemas | Code.Nar</title>
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
/*# sourceMappingURL=/whatsapp-button.css.map */</style><style ng-app-id="ng">
.projects-page[_ngcontent-ng-c385564893] {
  background: var(--color-black);
  color: var(--color-white);
}
.projects-container[_ngcontent-ng-c385564893] {
  width: min(calc(100% - 48px), var(--container));
  margin: 0 auto;
}
.projects-hero[_ngcontent-ng-c385564893] {
  max-width: 850px;
  padding: 100px 0 100px;
}
.projects-hero[_ngcontent-ng-c385564893]   h1[_ngcontent-ng-c385564893] {
  margin: 25px 0 30px;
  font-family: var(--font-display);
  font-size: clamp(52px, 7vw, 80px);
  line-height: .95;
  font-weight: 600;
  letter-spacing: -4px;
}
.projects-hero[_ngcontent-ng-c385564893]   h1[_ngcontent-ng-c385564893]   span[_ngcontent-ng-c385564893] {
  display: block;
  color: var(--color-gold);
  font-style: italic;
}
.projects-hero[_ngcontent-ng-c385564893]   p[_ngcontent-ng-c385564893] {
  max-width: 680px;
  margin: 0;
  color: var(--color-gray);
  font-size: 16px;
  line-height: 1.9;
}
.section-eyebrow[_ngcontent-ng-c385564893] {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-gold);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
}
.section-eyebrow[_ngcontent-ng-c385564893]    > span[_ngcontent-ng-c385564893] {
  width: 28px;
  height: 1px;
  background: var(--color-gold);
}
.projects-section[_ngcontent-ng-c385564893] {
  width: min(100%, 1000px);
  margin: 0 auto;
  padding: 30px 0 120px;
}
.projects-header[_ngcontent-ng-c385564893] {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 70px;
  align-items: end;
  margin-bottom: 50px;
}
.projects-label[_ngcontent-ng-c385564893] {
  display: block;
  margin-bottom: 15px;
  color: var(--color-gray-dark);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
}
.projects-header[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893] {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(38px, 5vw, 58px);
  line-height: .95;
  font-weight: 600;
  letter-spacing: -2px;
}
.projects-header[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893]   em[_ngcontent-ng-c385564893] {
  display: block;
  color: var(--color-gold);
  font-style: italic;
}
.projects-header[_ngcontent-ng-c385564893]    > p[_ngcontent-ng-c385564893] {
  margin: 0;
  color: var(--color-gray);
  font-size: 13px;
  line-height: 1.8;
}
.projects-grid[_ngcontent-ng-c385564893] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.project-card[_ngcontent-ng-c385564893] {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, .015);
  transition:
    border-color var(--transition),
    transform var(--transition),
    background var(--transition);
}
.project-card[_ngcontent-ng-c385564893]:hover {
  border-color: rgba(212, 175, 55, .4);
  background: rgba(212, 175, 55, .025);
  transform: translateY(-5px);
}
.project-image[_ngcontent-ng-c385564893] {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #101010;
}
.project-image[_ngcontent-ng-c385564893]   img[_ngcontent-ng-c385564893] {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}
.project-card[_ngcontent-ng-c385564893]:hover   .project-image[_ngcontent-ng-c385564893]   img[_ngcontent-ng-c385564893] {
  transform: scale(1.04);
}
.project-number[_ngcontent-ng-c385564893] {
  position: absolute;
  top: 13px;
  left: 13px;
  padding: 6px 9px;
  border: 1px solid rgba(255, 255, 255, .12);
  background: rgba(0, 0, 0, .65);
  color: var(--color-gold);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 1.5px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
.project-category[_ngcontent-ng-c385564893] {
  position: absolute;
  right: 13px;
  bottom: 13px;
  padding: 6px 9px;
  background: rgba(0, 0, 0, .72);
  color: var(--color-white-soft);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 1.5px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
.project-content[_ngcontent-ng-c385564893] {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px;
}
.project-content[_ngcontent-ng-c385564893]   h3[_ngcontent-ng-c385564893] {
  margin: 0 0 12px;
  font-family: var(--font-display);
  font-size: 25px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -.7px;
}
.project-content[_ngcontent-ng-c385564893]    > p[_ngcontent-ng-c385564893] {
  margin: 0;
  color: var(--color-gray);
  font-size: 11px;
  line-height: 1.7;
}
.project-tech[_ngcontent-ng-c385564893] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;
}
.project-tech[_ngcontent-ng-c385564893]   span[_ngcontent-ng-c385564893] {
  padding: 6px 9px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-gray-dark);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: .8px;
}
.project-link[_ngcontent-ng-c385564893] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 22px;
  padding-top: 17px;
  border-top: 1px solid rgba(255, 255, 255, .05);
  color: var(--color-gold);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.project-link[_ngcontent-ng-c385564893]   strong[_ngcontent-ng-c385564893] {
  font-size: 16px;
  font-weight: 400;
  transition: transform var(--transition);
}
.project-link[_ngcontent-ng-c385564893]:hover {
  color: var(--color-gold-light);
}
.project-link[_ngcontent-ng-c385564893]:hover   strong[_ngcontent-ng-c385564893] {
  transform: translate(3px, -3px);
}
.projects-cta[_ngcontent-ng-c385564893] {
  padding: 120px 0 140px;
  border-top: 1px solid var(--color-border);
}
.projects-cta-content[_ngcontent-ng-c385564893] {
  max-width: 850px;
}
.projects-cta-content[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893] {
  margin: 25px 0;
  font-family: var(--font-display);
  font-size: clamp(46px, 6vw, 76px);
  line-height: .95;
  font-weight: 600;
  letter-spacing: -3px;
}
.projects-cta-content[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893]   em[_ngcontent-ng-c385564893] {
  display: block;
  color: var(--color-gold);
  font-style: italic;
}
.projects-cta-content[_ngcontent-ng-c385564893]   p[_ngcontent-ng-c385564893] {
  max-width: 600px;
  margin: 0;
  color: var(--color-gray);
  font-size: 15px;
  line-height: 1.8;
}
.cta-button[_ngcontent-ng-c385564893] {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-top: 35px;
  padding: 15px 22px 15px 26px;
  border-radius: 999px;
  background: var(--color-gold);
  color: var(--color-black);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all var(--transition);
}
.cta-button[_ngcontent-ng-c385564893]   span[_ngcontent-ng-c385564893] {
  font-size: 17px;
}
.cta-button[_ngcontent-ng-c385564893]:hover {
  background: var(--color-gold-light);
  transform: translateY(-3px);
  box-shadow: var(--shadow-gold);
}
@media (max-width: 900px) {
  .projects-hero[_ngcontent-ng-c385564893] {
    padding-top: 120px;
  }
  .projects-header[_ngcontent-ng-c385564893] {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .projects-grid[_ngcontent-ng-c385564893] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 650px) {
  .projects-container[_ngcontent-ng-c385564893] {
    width: min(calc(100% - 32px), var(--container));
  }
  .projects-hero[_ngcontent-ng-c385564893] {
    padding: 100px 0 70px;
  }
  .projects-hero[_ngcontent-ng-c385564893]   h1[_ngcontent-ng-c385564893] {
    font-size: clamp(44px, 13vw, 62px);
    letter-spacing: -2px;
  }
  .projects-hero[_ngcontent-ng-c385564893]   p[_ngcontent-ng-c385564893] {
    font-size: 14px;
  }
  .projects-section[_ngcontent-ng-c385564893] {
    padding: 20px 0 90px;
  }
  .projects-header[_ngcontent-ng-c385564893] {
    gap: 20px;
    margin-bottom: 35px;
  }
  .projects-header[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893] {
    font-size: 40px;
    letter-spacing: -1.5px;
  }
  .projects-header[_ngcontent-ng-c385564893]    > p[_ngcontent-ng-c385564893] {
    font-size: 12px;
  }
  .projects-grid[_ngcontent-ng-c385564893] {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .project-image[_ngcontent-ng-c385564893] {
    aspect-ratio: 16 / 9;
  }
  .project-content[_ngcontent-ng-c385564893] {
    padding: 20px;
  }
  .project-content[_ngcontent-ng-c385564893]   h3[_ngcontent-ng-c385564893] {
    font-size: 24px;
  }
  .project-content[_ngcontent-ng-c385564893]    > p[_ngcontent-ng-c385564893] {
    font-size: 12px;
  }
  .projects-cta[_ngcontent-ng-c385564893] {
    padding: 90px 0 100px;
  }
  .projects-cta-content[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893] {
    font-size: 46px;
    letter-spacing: -2px;
  }
}
@media (hover: none) {
  .project-card[_ngcontent-ng-c385564893]:hover, 
   .project-link[_ngcontent-ng-c385564893]:hover, 
   .projects-cta[_ngcontent-ng-c385564893]   .cta-button[_ngcontent-ng-c385564893]:hover {
    transform: none;
  }
}
@media (max-width: 650px) {
  .projects-header[_ngcontent-ng-c385564893]    > p[_ngcontent-ng-c385564893] {
    font-size: 14px;
  }
  .projects-hero[_ngcontent-ng-c385564893] {
    padding-top: 130px;
  }
}
@media (max-width: 400px) {
  .projects-hero[_ngcontent-ng-c385564893]   h1[_ngcontent-ng-c385564893] {
    font-size: clamp(34px, 11vw, 46px);
    letter-spacing: -1px;
  }
  .projects-header[_ngcontent-ng-c385564893]   h2[_ngcontent-ng-c385564893] {
    font-size: 32px;
  }
}
/*# sourceMappingURL=/proyectos.css.map */</style><meta name="description" content="Explora los proyectos desarrollados por Code.Nar: páginas web, landing pages, tiendas online, sistemas web y soluciones digitales para empresas y emprendimientos."><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://codenar.net/proyectos"><meta property="og:type" content="website"><meta property="og:site_name" content="Code.Nar"><meta property="og:title" content="Proyectos de Desarrollo Web | Code.Nar"><meta property="og:description" content="Explora los proyectos desarrollados por Code.Nar: páginas web, landing pages, tiendas online, sistemas web y soluciones digitales para empresas y emprendimientos."><meta property="og:url" content="https://codenar.net/proyectos"><meta property="og:image" content="https://codenar.net/og-image.png"><meta property="og:image:width" content="1489"><meta property="og:image:height" content="776"><meta property="og:image:alt" content="Code.Nar — desarrollo web y soluciones digitales en Colombia"><meta property="og:locale" content="es_CO"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Proyectos de Desarrollo Web | Code.Nar"><meta name="twitter:description" content="Explora los proyectos desarrollados por Code.Nar: páginas web, landing pages, tiendas online, sistemas web y soluciones digitales para empresas y emprendimientos."><meta name="twitter:image" content="https://codenar.net/og-image.png"><meta name="twitter:image:alt" content="Code.Nar — desarrollo web y soluciones digitales en Colombia"><script id="codenar-schema" type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"ProfessionalService","@id":"https://codenar.net/#negocio","name":"Code.Nar","image":"https://codenar.net/og-image.png","url":"https://codenar.net","telephone":"+57 320 000 0000","email":"contacto@codenar.net","priceRange":"\$\$","areaServed":"CO","description":"Estudio de desarrollo web con sede en Pasto, Nariño: sitios web, tiendas online y sistemas a medida para empresas y emprendimientos en toda Colombia.","address":{"@type":"PostalAddress","addressLocality":"Pasto","addressRegion":"Nariño","addressCountry":"CO"},"sameAs":["https://www.instagram.com/CodeNar","https://www.tiktok.com/@CodeNar","https://wa.me/573200000000"]},{"@type":"WebPage","@id":"https://codenar.net/proyectos","name":"Proyectos de Desarrollo Web | Code.Nar","description":"Explora los proyectos desarrollados por Code.Nar: páginas web, landing pages, tiendas online, sistemas web y soluciones digitales para empresas y emprendimientos.","url":"https://codenar.net/proyectos","inLanguage":"es-CO","isPartOf":{"@id":"https://codenar.net/#negocio"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://codenar.net"},{"@type":"ListItem","position":2,"name":"Proyectos","item":"https://codenar.net/proyectos"}]}]}</script></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],["error"]);</script>
  <app-root ng-version="22.1.3" ngh="3" ng-server-context="ssg"><app-navbar _nghost-ng-c831784485="" ngh="0"><header _ngcontent-ng-c831784485="" class="navbar"><div _ngcontent-ng-c831784485="" class="navbar-container"><a _ngcontent-ng-c831784485="" routerlink="/" aria-label="Code.Nar - Inicio" class="brand" href="/" jsaction="click:;"><img _ngcontent-ng-c831784485="" src="/images/logo.png" alt="" width="42" height="42" class="brand-mark"><span _ngcontent-ng-c831784485="" class="brand-name">Code.<span _ngcontent-ng-c831784485="">Nar</span></span></a><nav _ngcontent-ng-c831784485="" aria-label="Navegación principal" class="desktop-nav"><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/" class="" jsaction="click:;"> Inicio </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/servicios" class="" jsaction="click:;"> Servicios </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/proyectos" class="activo" jsaction="click:;"> Proyectos </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/nosotros" class="" jsaction="click:;"> Nosotros </a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/contacto" class="" jsaction="click:;"> Contacto </a><!--container--></nav><a _ngcontent-ng-c831784485="" routerlink="/contacto" class="navbar-cta" href="/contacto" jsaction="click:;"> Hablemos <span _ngcontent-ng-c831784485="">↗</span></a><button _ngcontent-ng-c831784485="" type="button" aria-controls="menu-movil" class="menu-toggle" aria-expanded="false" aria-label="Abrir menú" jsaction="click:;"><span _ngcontent-ng-c831784485="" class="menu-toggle-linea"></span><span _ngcontent-ng-c831784485="" class="menu-toggle-linea"></span></button></div></header><div _ngcontent-ng-c831784485="" id="menu-movil" class="menu-movil" inert=""><nav _ngcontent-ng-c831784485="" aria-label="Navegación móvil"><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/" class="" jsaction="click:;"> Inicio <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/servicios" class="" jsaction="click:;"> Servicios <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/proyectos" class="activo" jsaction="click:;"> Proyectos <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/nosotros" class="" jsaction="click:;"> Nosotros <span _ngcontent-ng-c831784485="">↗</span></a><a _ngcontent-ng-c831784485="" routerlinkactive="activo" href="/contacto" class="" jsaction="click:;"> Contacto <span _ngcontent-ng-c831784485="">↗</span></a><!--container--></nav><a _ngcontent-ng-c831784485="" routerlink="/contacto" class="menu-movil-cta" href="/contacto" jsaction="click:;"> Hablemos de tu proyecto <span _ngcontent-ng-c831784485="">↗</span></a></div><!--container--></app-navbar><router-outlet></router-outlet><app-proyectos _nghost-ng-c385564893="" ngh="1"><div _ngcontent-ng-c385564893="" class="projects-page"><div _ngcontent-ng-c385564893="" class="projects-container"><section _ngcontent-ng-c385564893="" class="projects-hero"><div _ngcontent-ng-c385564893="" class="section-eyebrow hero-reveal"><span _ngcontent-ng-c385564893=""></span> NUESTROS PROYECTOS </div><h1 _ngcontent-ng-c385564893="" class="hero-reveal"> Trabajo que <span _ngcontent-ng-c385564893="">habla por nosotros.</span></h1><p _ngcontent-ng-c385564893="" class="hero-reveal"> Explora algunos de los proyectos que hemos desarrollado para empresas, emprendimientos y profesionales, combinando diseño, tecnología y funcionalidad. </p></section><section _ngcontent-ng-c385564893="" class="projects-section"><div _ngcontent-ng-c385564893="" class="projects-header reveal"><div _ngcontent-ng-c385564893=""><span _ngcontent-ng-c385564893="" class="projects-label"> PORTAFOLIO </span><h2 _ngcontent-ng-c385564893=""> Proyectos <em _ngcontent-ng-c385564893="">seleccionados.</em></h2></div><p _ngcontent-ng-c385564893=""> Cada proyecto parte de una necesidad diferente. Nuestro objetivo es convertirla en una experiencia digital funcional, profesional y preparada para crecer. </p></div><div _ngcontent-ng-c385564893="" class="projects-grid"><article _ngcontent-ng-c385564893="" class="project-card reveal"><div _ngcontent-ng-c385564893="" class="project-image"><img _ngcontent-ng-c385564893="" loading="lazy" src="/images/reyinmobiliaria.png" alt="Rey Inmobiliaria - proyecto desarrollado por Code.Nar" jsaction="error:;"><div _ngcontent-ng-c385564893="" class="project-number"> 01 </div><div _ngcontent-ng-c385564893="" class="project-category"> SISTEMA WEB </div></div><div _ngcontent-ng-c385564893="" class="project-content"><h3 _ngcontent-ng-c385564893=""> Rey Inmobiliaria </h3><p _ngcontent-ng-c385564893=""> Plataforma web inmobiliaria para mostrar propiedades y facilitar la gestión de inmuebles. </p><div _ngcontent-ng-c385564893="" class="project-tech"><span _ngcontent-ng-c385564893=""> Angular </span><span _ngcontent-ng-c385564893=""> Supabase </span><span _ngcontent-ng-c385564893=""> TypeScript </span><!--container--></div><a _ngcontent-ng-c385564893="" class="project-link" href="https://reyinmobiliaria.net" target="_blank" rel="noopener noreferrer"><span _ngcontent-ng-c385564893="">Ver sitio</span><strong _ngcontent-ng-c385564893=""> ↗ </strong></a></div></article><article _ngcontent-ng-c385564893="" class="project-card reveal"><div _ngcontent-ng-c385564893="" class="project-image"><img _ngcontent-ng-c385564893="" loading="lazy" src="/images/av21bar.png" alt="Avenida 21BAR - proyecto desarrollado por Code.Nar" jsaction="error:;"><div _ngcontent-ng-c385564893="" class="project-number"> 02 </div><div _ngcontent-ng-c385564893="" class="project-category"> SITIO WEB </div></div><div _ngcontent-ng-c385564893="" class="project-content"><h3 _ngcontent-ng-c385564893=""> Avenida 21BAR </h3><p _ngcontent-ng-c385564893=""> Sitio web diseñado para presentar una carta de bar y sus precios. </p><div _ngcontent-ng-c385564893="" class="project-tech"><span _ngcontent-ng-c385564893=""> React </span><span _ngcontent-ng-c385564893=""> CSS </span><span _ngcontent-ng-c385564893=""> Supabase </span><!--container--></div><a _ngcontent-ng-c385564893="" class="project-link" href="https://www.av-21bar.com" target="_blank" rel="noopener noreferrer"><span _ngcontent-ng-c385564893="">Ver sitio</span><strong _ngcontent-ng-c385564893=""> ↗ </strong></a></div></article><article _ngcontent-ng-c385564893="" class="project-card reveal"><div _ngcontent-ng-c385564893="" class="project-image"><img _ngcontent-ng-c385564893="" loading="lazy" src="/images/quemini.png" alt="QueMini - proyecto desarrollado por Code.Nar" jsaction="error:;"><div _ngcontent-ng-c385564893="" class="project-number"> 03 </div><div _ngcontent-ng-c385564893="" class="project-category"> SISTEMA WEB </div></div><div _ngcontent-ng-c385564893="" class="project-content"><h3 _ngcontent-ng-c385564893=""> QueMini </h3><p _ngcontent-ng-c385564893=""> Sistema de gestión para pedidos, órdenes e historial de ventas de un negocio gastronómico. </p><div _ngcontent-ng-c385564893="" class="project-tech"><span _ngcontent-ng-c385564893=""> Angular </span><span _ngcontent-ng-c385564893=""> TypeScript </span><span _ngcontent-ng-c385564893=""> LocalStorage </span><!--container--></div><a _ngcontent-ng-c385564893="" class="project-link" href="https://quemini.vercel.app" target="_blank" rel="noopener noreferrer"><span _ngcontent-ng-c385564893="">Ver sitio</span><strong _ngcontent-ng-c385564893=""> ↗ </strong></a></div></article><article _ngcontent-ng-c385564893="" class="project-card reveal"><div _ngcontent-ng-c385564893="" class="project-image"><img _ngcontent-ng-c385564893="" loading="lazy" src="/images/proyecto-corporativo.png" alt="Proyecto Corporativo - proyecto desarrollado por Code.Nar" jsaction="error:;"><div _ngcontent-ng-c385564893="" class="project-number"> 04 </div><div _ngcontent-ng-c385564893="" class="project-category"> SITIO WEB </div></div><div _ngcontent-ng-c385564893="" class="project-content"><h3 _ngcontent-ng-c385564893=""> Proyecto Corporativo </h3><p _ngcontent-ng-c385564893=""> Sitio web corporativo enfocado en transmitir confianza y presentar los servicios de una empresa. </p><div _ngcontent-ng-c385564893="" class="project-tech"><span _ngcontent-ng-c385564893=""> Angular </span><span _ngcontent-ng-c385564893=""> TypeScript </span><span _ngcontent-ng-c385564893=""> CSS </span><!--container--></div><a _ngcontent-ng-c385564893="" class="project-link" href="/contacto"><span _ngcontent-ng-c385564893="">Solicitar uno similar</span><strong _ngcontent-ng-c385564893=""> ↗ </strong></a></div></article><article _ngcontent-ng-c385564893="" class="project-card reveal"><div _ngcontent-ng-c385564893="" class="project-image"><img _ngcontent-ng-c385564893="" loading="lazy" src="/images/marca-personal.png" alt="Marca Personal - proyecto desarrollado por Code.Nar" jsaction="error:;"><div _ngcontent-ng-c385564893="" class="project-number"> 05 </div><div _ngcontent-ng-c385564893="" class="project-category"> LANDING PAGE </div></div><div _ngcontent-ng-c385564893="" class="project-content"><h3 _ngcontent-ng-c385564893=""> Marca Personal </h3><p _ngcontent-ng-c385564893=""> Página profesional diseñada para presentar experiencia, servicios y proyectos de un profesional. </p><div _ngcontent-ng-c385564893="" class="project-tech"><span _ngcontent-ng-c385564893=""> Astro </span><span _ngcontent-ng-c385564893=""> HTML </span><span _ngcontent-ng-c385564893=""> CSS </span><!--container--></div><a _ngcontent-ng-c385564893="" class="project-link" href="/contacto"><span _ngcontent-ng-c385564893="">Solicitar uno similar</span><strong _ngcontent-ng-c385564893=""> ↗ </strong></a></div></article><article _ngcontent-ng-c385564893="" class="project-card reveal"><div _ngcontent-ng-c385564893="" class="project-image"><img _ngcontent-ng-c385564893="" loading="lazy" src="/images/proyecto-personalizado.png" alt="Proyecto Personalizado - proyecto desarrollado por Code.Nar" jsaction="error:;"><div _ngcontent-ng-c385564893="" class="project-number"> 06 </div><div _ngcontent-ng-c385564893="" class="project-category"> SOLUCIÓN DIGITAL </div></div><div _ngcontent-ng-c385564893="" class="project-content"><h3 _ngcontent-ng-c385564893=""> Proyecto Personalizado </h3><p _ngcontent-ng-c385564893=""> Solución digital desarrollada para resolver necesidades específicas de gestión y operación. </p><div _ngcontent-ng-c385564893="" class="project-tech"><span _ngcontent-ng-c385564893=""> Angular </span><span _ngcontent-ng-c385564893=""> Laravel </span><span _ngcontent-ng-c385564893=""> MySQL </span><!--container--></div><a _ngcontent-ng-c385564893="" class="project-link" href="/contacto"><span _ngcontent-ng-c385564893="">Solicitar uno similar</span><strong _ngcontent-ng-c385564893=""> ↗ </strong></a></div></article><!--container--></div></section><section _ngcontent-ng-c385564893="" class="projects-cta"><div _ngcontent-ng-c385564893="" class="projects-cta-content reveal"><div _ngcontent-ng-c385564893="" class="section-eyebrow"><span _ngcontent-ng-c385564893=""></span> ¿TIENES UN PROYECTO? </div><h2 _ngcontent-ng-c385564893=""> El próximo proyecto <em _ngcontent-ng-c385564893="">puede ser el tuyo.</em></h2><p _ngcontent-ng-c385564893=""> Cuéntanos qué tienes en mente y construyamos juntos una solución digital para tu negocio. </p><a _ngcontent-ng-c385564893="" href="https://wa.me/573200000000" target="_blank" rel="noopener noreferrer" class="cta-button"> Hablemos de tu proyecto <span _ngcontent-ng-c385564893="">↗</span></a></div></section></div></div></app-proyectos><!--container--><app-footer _nghost-ng-c1868340458="" ngh="2"><footer _ngcontent-ng-c1868340458="" class="footer"><div _ngcontent-ng-c1868340458="" class="footer-container"><div _ngcontent-ng-c1868340458="" class="footer-main"><div _ngcontent-ng-c1868340458="" class="footer-brand"><a _ngcontent-ng-c1868340458="" routerlink="/" aria-label="Code.Nar - Inicio" class="brand" href="/" jsaction="click:;"><span _ngcontent-ng-c1868340458="" aria-hidden="true" class="brand-mark">C</span><span _ngcontent-ng-c1868340458="" class="brand-name"> Code.<span _ngcontent-ng-c1868340458="">Nar</span></span></a><p _ngcontent-ng-c1868340458=""> Creamos soluciones digitales modernas para empresas, emprendimientos y profesionales. </p></div><div _ngcontent-ng-c1868340458="" class="footer-column"><h3 _ngcontent-ng-c1868340458="">Explorar</h3><a _ngcontent-ng-c1868340458="" routerlink="/" href="/" jsaction="click:;">Inicio</a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" href="/servicios" jsaction="click:;">Servicios</a><a _ngcontent-ng-c1868340458="" routerlink="/proyectos" href="/proyectos" jsaction="click:;">Proyectos</a><a _ngcontent-ng-c1868340458="" routerlink="/contacto" href="/contacto" jsaction="click:;">Contacto</a></div><div _ngcontent-ng-c1868340458="" class="footer-column"><h3 _ngcontent-ng-c1868340458="">Servicios</h3><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="desarrollo-web" href="/servicios#desarrollo-web" jsaction="click:;"> Desarrollo Web </a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="tiendas-online" href="/servicios#tiendas-online" jsaction="click:;"> Tiendas Online </a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="sistemas-web" href="/servicios#sistemas-web" jsaction="click:;"> Sistemas Web </a><a _ngcontent-ng-c1868340458="" routerlink="/servicios" fragment="soluciones-digitales" href="/servicios#soluciones-digitales" jsaction="click:;"> Soluciones Digitales </a></div><div _ngcontent-ng-c1868340458="" class="footer-column"><h3 _ngcontent-ng-c1868340458="">Contacto</h3><a _ngcontent-ng-c1868340458="" routerlink="/contacto" href="/contacto" jsaction="click:;"> Hablemos </a><a _ngcontent-ng-c1868340458="" routerlink="/nosotros" href="/nosotros" jsaction="click:;"> Nosotros </a><span _ngcontent-ng-c1868340458="">Pasto, Nariño — Colombia</span></div></div><div _ngcontent-ng-c1868340458="" class="footer-bottom"><span _ngcontent-ng-c1868340458=""> © 2026 Code.Nar Todos los derechos reservados. </span><span _ngcontent-ng-c1868340458=""> Desarrollo digital en Colombia </span></div></div></footer></app-footer><app-whatsapp-button _nghost-ng-c536698142="" ngh="2"><div _ngcontent-ng-c536698142="" class="social-floating"><a _ngcontent-ng-c536698142="" href="https://www.instagram.com/CodeNar" target="_blank" rel="noopener noreferrer" aria-label="Code.Nar en Instagram" title="Instagram" class="social-icon-button social-icon-button--instagram"><svg _ngcontent-ng-c536698142="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c536698142="" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .05-1.6.2-1.9.3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 1.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Zm5.2-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg></a><a _ngcontent-ng-c536698142="" href="https://www.tiktok.com/@CodeNar" target="_blank" rel="noopener noreferrer" aria-label="Code.Nar en TikTok" title="TikTok" class="social-icon-button social-icon-button--tiktok"><svg _ngcontent-ng-c536698142="" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path _ngcontent-ng-c536698142="" d="M16.5 2h-3.1v13.9a2.6 2.6 0 1 1-2.2-2.6v-3.2a5.8 5.8 0 1 0 5.3 5.8V8.9a7.7 7.7 0 0 0 4.4 1.4V7.2a4.6 4.6 0 0 1-4.4-4.5V2Z"></path></svg></a><a _ngcontent-ng-c536698142="" href="https://wa.me/573200000000?text=Hola%20Code.Nar%2C%20quiero%20hablar%20sobre%20mi%20proyecto." target="_blank" rel="noopener noreferrer" aria-label="Escribir a Code.Nar por WhatsApp" title="Escríbenos por WhatsApp" class="whatsapp-button"><svg _ngcontent-ng-c536698142="" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path _ngcontent-ng-c536698142="" d="M16 3.2a12.7 12.7 0 0 0-10.9 19.2L3.5 28.8l6.6-1.7A12.8 12.8 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4a10.2 10.2 0 1 1 9.2 4.9Zm5.6-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.9-.9-3.1-1.7-4.3-3.9-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6s-.7-1.7-.9-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.3 3.8c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4Z"></path></svg><span _ngcontent-ng-c536698142="">Hablemos por WhatsApp</span></a></div></app-whatsapp-button></app-root>
<link rel="modulepreload" href="chunk-EBL26PRH.js"><link rel="modulepreload" href="chunk-AGCWZF3Q.js"><link rel="modulepreload" href="chunk-DIN7PMWM.js"><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-FXHLA5GA.js">
<link rel="modulepreload" href="chunk-WMNAKSMR.js">
<link rel="modulepreload" href="chunk-WHH2CJHL.js">


<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"10":"t0","21":"t1","26":"t2"},"c":{"10":[{"i":"t0","r":1,"x":5}],"21":[{"i":"t1","r":1,"x":5}],"26":[]}},{"t":{"25":"t3"},"c":{"25":[{"i":"t3","r":1,"t":{"14":"t4"},"c":{"14":[{"i":"t4","r":1,"x":3}]},"x":6}]}},{},{"c":{"1":[{"i":"c385564893","r":1}]}}]}</script></body></html>`;