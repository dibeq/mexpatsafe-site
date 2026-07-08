/**
 * MexPatSafe — Event tracking (GA4)
 * Plan de Acción Jul 2026 — Acciones 1, 2, 3
 * Un solo archivo compartido para las 5 páginas del sitio y para las
 * páginas de propuestas (rutas relativas ../../assets/js/analytics.js).
 *
 * Acción 1: delegación global de clics — detecta wa.me, calendly.com y
 * mailto: tanto en <a href> como en <button onclick="window.open(...)">,
 * porque no todos los CTAs del sitio usan <a href> (ver nav-cta/drawer-cta
 * en index.html).
 *
 * Acción 3: evento proposal_view en páginas de propuesta — reemplaza al
 * obsoleto proposal_login_success ahora que el sistema no usa login.
 */
(function () {
  "use strict";

  function sendEvent(eventName, params) {
    if (typeof gtag === "function") {
      gtag("event", eventName, params);
    }
  }

  function extractUrl(el) {
    var href = el.getAttribute("href");
    if (href) return href;
    var onclick = el.getAttribute("onclick");
    if (onclick) {
      var match = onclick.match(/https?:\/\/[^'")\s]+/);
      if (match) return match[0];
    }
    return "";
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("a[href], button[onclick]");
    if (!el) return;

    var url = extractUrl(el);
    if (!url) return;

    var pageLocation = window.location.pathname;
    var linkText = (el.textContent || "").trim().slice(0, 100);
    var ctaPosition = el.dataset.ctaPosition || el.className || "unknown";

    if (url.indexOf("wa.me") !== -1) {
      sendEvent("whatsapp_click", {
        page_location: pageLocation,
        cta_position: ctaPosition,
        link_text: linkText
      });
    } else if (url.indexOf("calendly.com") !== -1) {
      sendEvent("calendly_click", {
        page_location: pageLocation,
        cta_position: ctaPosition,
        link_text: linkText
      });
    } else if (url.indexOf("mailto:") === 0) {
      sendEvent("email_click", {
        page_location: pageLocation,
        cta_position: ctaPosition,
        link_text: linkText
      });
    }
  });

  // Acción 3 — solo se activa en páginas de propuesta (detecta el bloque
  // de datos embebido). En las 5 páginas del sitio este bloque no existe
  // y el listener no hace nada.
  document.addEventListener("DOMContentLoaded", function () {
    var dataEl = document.getElementById("proposal-data");
    if (!dataEl) return;

    try {
      var data = JSON.parse(dataEl.textContent);
      var clientKey =
        (data.client && (data.client.lastNameKey || data.client.firstName)) ||
        "unknown";
      var planName = (data.plan && data.plan.name) || "unknown";

      sendEvent("proposal_view", {
        client_key: clientKey,
        plan_name: planName
      });
    } catch (err) {
      // Fallo silencioso: un error de tracking no debe romper la carga
      // de la propuesta para el cliente.
    }
  });
})();
