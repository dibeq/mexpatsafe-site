/* @ds-bundle: {"format":4,"namespace":"MexpatSafeDesignSystem_2de3b4","components":[{"name":"ComparisonCard","sourcePath":"components/cards/ComparisonCard.jsx"},{"name":"ContactCard","sourcePath":"components/cards/ContactCard.jsx"},{"name":"CredentialCard","sourcePath":"components/cards/CredentialCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FAQItem","sourcePath":"components/feedback/FAQItem.jsx"},{"name":"SectionHeader","sourcePath":"components/misc/SectionHeader.jsx"},{"name":"WhatsAppFloat","sourcePath":"components/misc/WhatsAppFloat.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/cards/ComparisonCard.jsx":"cf63f8416eaf","components/cards/ContactCard.jsx":"72c54143f93b","components/cards/CredentialCard.jsx":"6631d79cbe86","components/cards/StatCard.jsx":"ee2371b3789e","components/cards/TestimonialCard.jsx":"52a4550cc18a","components/core/Badge.jsx":"2f4602ee5a63","components/core/Button.jsx":"86147af8d971","components/feedback/FAQItem.jsx":"5d5bef5efa93","components/misc/SectionHeader.jsx":"720a63cadf54","components/misc/WhatsAppFloat.jsx":"aa42d97afe3c","components/navigation/Footer.jsx":"6154e035418c","components/navigation/Navbar.jsx":"dff3468b4787","ui_kits/website/About.jsx":"e813c19fef1d","ui_kits/website/Contact.jsx":"f0cecde6f7d0","ui_kits/website/Home.jsx":"2bab2107e7eb","ui_kits/website/Plans.jsx":"a582ec65de88"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MexpatSafeDesignSystem_2de3b4 = window.MexpatSafeDesignSystem_2de3b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ComparisonCard.jsx
try { (() => {
function ComparisonCard({
  vsLabel,
  planName,
  children
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 'var(--r)',
      padding: '32px 28px',
      borderTop: '3px solid var(--gold)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gray)',
      marginBottom: 6
    }
  }, vsLabel), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--navy)',
      marginBottom: 14,
      fontWeight: 600
    }
  }, planName), children);
}
Object.assign(__ds_scope, { ComparisonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ComparisonCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContactCard.jsx
try { (() => {
function ContactCard({
  emoji,
  title,
  description,
  children,
  cta
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--gray-bg)',
      borderRadius: 'var(--r)',
      padding: '36px 32px',
      border: '1.5px solid var(--gray-mid)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 32,
      display: 'block',
      marginBottom: 16
    }
  }, emoji), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--navy)',
      marginBottom: 12
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--gray)',
      lineHeight: 1.7,
      marginBottom: 24
    }
  }, description), children, cta);
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/CredentialCard.jsx
try { (() => {
function CredentialCard({
  icon,
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: 'var(--gray-bg)',
      borderRadius: 10,
      borderLeft: '3px solid var(--gold)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 18,
      flexShrink: 0
    }
  }, icon), React.createElement('div', null, React.createElement('h4', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--navy)',
      marginBottom: 2
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: 12,
      color: 'var(--gray)'
    }
  }, description)));
}
Object.assign(__ds_scope, { CredentialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CredentialCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  tone = 'light'
}) {
  const light = tone === 'light';
  return React.createElement('div', {
    style: light ? {
      background: '#fff',
      borderRadius: 12,
      padding: '24px 20px',
      borderTop: '3px solid var(--gold)'
    } : {
      background: 'rgba(255,255,255,0.12)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.22)',
      borderRadius: 10,
      padding: '11px 18px',
      textAlign: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: light ? 32 : 20,
      fontWeight: 700,
      color: light ? 'var(--navy)' : '#fff',
      display: 'block',
      lineHeight: 1,
      marginBottom: light ? 6 : 3
    }
  }, value), React.createElement('span', {
    style: {
      fontSize: light ? 13 : 11,
      color: light ? 'var(--gray)' : 'rgba(255,255,255,0.65)',
      fontWeight: 500
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  meta
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 'var(--r)',
      padding: '36px 32px',
      borderTop: '3px solid var(--gold)',
      boxShadow: '0 2px 12px rgba(15,53,91,0.06)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      color: 'var(--gold)',
      lineHeight: 0.8,
      display: 'block',
      marginBottom: 16
    }
  }, '"'), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--dark)',
      lineHeight: 1.7,
      fontStyle: 'italic',
      marginBottom: 24
    }
  }, quote), React.createElement('div', null, React.createElement('strong', {
    style: {
      fontSize: 14,
      color: 'var(--navy)',
      display: 'block'
    }
  }, name), React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--gray)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'eyebrow'
}) {
  if (tone === 'eyebrow') {
    return React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(214,152,40,0.2)',
        border: '1px solid rgba(214,152,40,0.5)',
        color: 'var(--gold-light)',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding: '6px 14px',
        borderRadius: 3
      }
    }, React.createElement('span', {
      style: {
        width: 5,
        height: 5,
        background: 'var(--gold-light)',
        borderRadius: '50%'
      }
    }), children);
  }
  if (tone === 'section-tag') {
    return React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 14
      }
    }, React.createElement('div', {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--gold)'
      }
    }), React.createElement('span', {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--gold)'
      }
    }, children));
  }
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(214,152,40,0.15)',
      border: '1px solid rgba(214,152,40,0.3)',
      borderRadius: 20,
      padding: '4px 12px',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--gold-light)',
      letterSpacing: 0.3
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: 'var(--gold)',
    color: 'var(--navy-deep)',
    border: 'none'
  },
  gold: {
    background: 'var(--gold)',
    color: 'var(--navy-deep)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy)',
    border: '1.5px solid var(--gray-mid)'
  },
  'outline-white': {
    background: 'transparent',
    color: '#fff',
    border: '1.5px solid rgba(255,255,255,0.3)'
  },
  whatsapp: {
    background: 'var(--green-whatsapp)',
    color: '#fff',
    border: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'rgba(255,255,255,0.65)',
    border: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  href,
  onClick,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const pad = size === 'sm' ? '9px 20px' : size === 'lg' ? '16px 32px' : '14px 24px';
  const fontSize = size === 'sm' ? 13 : 14;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: pad,
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize,
    letterSpacing: variant === 'ghost' ? 'normal' : '0.06em',
    textTransform: variant === 'ghost' ? 'none' : 'uppercase',
    textDecoration: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    ...v,
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    style: base
  }, icon ? React.createElement('span', null, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FAQItem.jsx
try { (() => {
function FAQItem({
  question,
  answer
}) {
  return React.createElement('div', {
    style: {
      padding: '22px 0',
      borderBottom: '1px solid var(--gray-light)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--navy)',
      marginBottom: 10
    }
  }, question), React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--gray)',
      lineHeight: 1.65
    }
  }, answer));
}
Object.assign(__ds_scope, { FAQItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FAQItem.jsx", error: String((e && e.message) || e) }); }

// components/misc/SectionHeader.jsx
try { (() => {
function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'left',
  onDark = false
}) {
  return React.createElement('div', {
    style: {
      textAlign: align,
      marginBottom: 14
    }
  }, React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, React.createElement('div', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--gold)'
    }
  }), React.createElement('span', {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gold)'
    }
  }, tag)), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(26px,3vw,38px)',
      color: onDark ? '#fff' : 'var(--navy)',
      lineHeight: 1.2,
      marginBottom: subtitle ? 16 : 0
    }
  }, title), subtitle && React.createElement('p', {
    style: {
      fontSize: 16,
      color: onDark ? 'rgba(255,255,255,0.6)' : 'var(--gray)',
      lineHeight: 1.7,
      maxWidth: 520,
      margin: align === 'center' ? '0 auto' : 0
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/misc/WhatsAppFloat.jsx
try { (() => {
function WhatsAppFloat({
  href
}) {
  return React.createElement('a', {
    href,
    target: '_blank',
    rel: 'noopener',
    style: {
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--green-whatsapp)',
      color: '#fff',
      borderRadius: 50,
      padding: '14px 22px 14px 18px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      textDecoration: 'none',
      boxShadow: 'var(--shadow-wa)'
    }
  }, React.createElement('svg', {
    viewBox: '0 0 24 24',
    style: {
      width: 22,
      height: 22,
      fill: '#fff'
    }
  }, React.createElement('path', {
    d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
  })), 'Chat with us');
}
Object.assign(__ds_scope, { WhatsAppFloat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/WhatsAppFloat.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  };
  const a = {
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
    fontSize: 14
  };
  const h5 = {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)',
    marginBottom: 18
  };
  return React.createElement('footer', {
    style: {
      background: 'var(--navy-deep)',
      padding: '64px 80px 32px',
      color: '#fff'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 48,
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      marginBottom: 28
    }
  }, React.createElement('div', null, React.createElement('img', {
    src: logoSrc,
    alt: 'MexpatSafe',
    style: {
      height: 32,
      width: 'auto',
      marginBottom: 14,
      filter: 'brightness(0) invert(1)'
    }
  }), React.createElement('p', {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.45)',
      lineHeight: 1.7,
      maxWidth: 260
    }
  }, 'Global protection, local peace of mind. Bilingual Bupa-certified insurance for English-speaking expats in Mexico.')), React.createElement('div', {
    style: col
  }, React.createElement('h5', {
    style: h5
  }, 'Navigate'), ['Home', 'About', 'Plans', 'Contact'].map(t => React.createElement('a', {
    key: t,
    style: a,
    href: '#'
  }, t))), React.createElement('div', {
    style: col
  }, React.createElement('h5', {
    style: h5
  }, 'Contact'), React.createElement('a', {
    style: a,
    href: 'mailto:info@mexpatsafe.com'
  }, 'info@mexpatsafe.com'), React.createElement('a', {
    style: a,
    href: '#'
  }, 'WhatsApp')), React.createElement('div', {
    style: col
  }, React.createElement('h5', {
    style: h5
  }, 'Legal'), ['Privacy Policy', 'Legal Notice', 'Cookie Policy'].map(t => React.createElement('a', {
    key: t,
    style: a,
    href: '#'
  }, t)))), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      color: 'rgba(255,255,255,0.25)',
      fontSize: 12
    }
  }, '© 2026 Mexpat Safe. All rights reserved. Authorized Bupa partner.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['in', 'fb', 'ig'].map(s => React.createElement('a', {
    key: s,
    style: {
      width: 34,
      height: 34,
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.4)',
      fontSize: 14,
      textDecoration: 'none'
    },
    href: '#'
  }, s)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  logoSrc,
  links = [],
  activePath,
  ctaHref = '#',
  ctaLabel = 'Book Free Consultation'
}) {
  return React.createElement('nav', {
    style: {
      background: 'var(--navy-deep)',
      padding: '0 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 68,
      boxShadow: 'var(--shadow-nav)'
    }
  }, React.createElement('a', {
    href: '#',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('img', {
    src: logoSrc,
    alt: 'MexpatSafe',
    style: {
      height: 36,
      width: 'auto',
      filter: 'brightness(0) invert(1)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, links.map(l => React.createElement('a', {
    key: l.label,
    href: l.href,
    style: {
      background: l.href === activePath ? 'rgba(214,152,40,0.15)' : 'transparent',
      color: l.href === activePath ? 'var(--gold-light)' : 'rgba(255,255,255,0.65)',
      borderRadius: 6,
      padding: '8px 14px',
      fontFamily: 'var(--font-body)',
      fontWeight: l.href === activePath ? 600 : 400,
      fontSize: 14,
      textDecoration: 'none',
      letterSpacing: '0.01em'
    }
  }, l.label)), React.createElement('a', {
    href: ctaHref,
    style: {
      background: 'var(--gold)',
      color: 'var(--navy-deep)',
      borderRadius: 8,
      padding: '9px 20px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      marginLeft: 12,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  CredentialCard,
  SectionHeader,
  StatCard,
  Button
} = window.MexpatSafeDesignSystem_2de3b4;
const PHOTO = '../../assets/images/diego-beltran-agent.webp';
function About() {
  return React.createElement('div', null, React.createElement('section', {
    style: {
      background: 'linear-gradient(135deg, var(--navy-deep) 60%, var(--navy-mid) 100%)',
      padding: '80px 80px 72px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 680
    }
  }, React.createElement(SectionHeader, {
    tag: 'About Mexpat Safe',
    title: '',
    onDark: true
  }), React.createElement('h1', {
    style: {
      color: '#fff',
      fontSize: 'clamp(30px,4vw,48px)',
      marginBottom: 16,
      fontFamily: 'var(--font-display)'
    }
  }, 'Built for expats, by ', React.createElement('em', {
    style: {
      color: 'var(--gold-light)'
    }
  }, 'Diego Beltrán.')), React.createElement('p', {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 17,
      lineHeight: 1.6
    }
  }, "We know what it means to navigate a foreign healthcare system without support in your language. That's why Mexpat Safe exists."))), React.createElement('section', {
    style: {
      padding: '80px 80px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 64,
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement('div', {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      aspectRatio: '3/4'
    }
  }, React.createElement('img', {
    src: PHOTO,
    alt: 'Diego Beltrán',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 15%'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement(CredentialCard, {
    icon: '🏅',
    title: 'Authorized Bupa Partner',
    description: 'Full portfolio access · No intermediaries'
  }), React.createElement(CredentialCard, {
    icon: '📋',
    title: 'CNSF Licensed · Cédula A1',
    description: 'Clave Y40634 · Regulated advisor since 2022'
  }), React.createElement(CredentialCard, {
    icon: '🌐',
    title: '100+ Active Clients',
    description: 'English & Spanish · Expat-first approach'
  }))), React.createElement('div', null, React.createElement(SectionHeader, {
    tag: 'Meet your advisor',
    title: 'Diego Beltrán'
  }), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--gray)',
      lineHeight: 1.7,
      marginBottom: 16
    }
  }, "I've been working in the Mexican insurance industry since 2022. Today I serve over 100 active clients — most of them expats from the United States, Canada, and Europe who chose Mexico as their home."), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--gray)',
      lineHeight: 1.7,
      marginBottom: 32
    }
  }, 'My goal is simple: that every person I work with feels they have a friend in their corner, not just an advisor.'), React.createElement(Button, {
    variant: 'primary',
    icon: '📅'
  }, "Let's Talk")))), React.createElement('section', {
    style: {
      background: 'var(--navy-soft)',
      padding: '72px 80px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 20
    }
  }, React.createElement(StatCard, {
    tone: 'light',
    value: '190+',
    label: 'Countries in network'
  }), React.createElement(StatCard, {
    tone: 'light',
    value: '$2M+',
    label: 'Max annual coverage'
  }), React.createElement(StatCard, {
    tone: 'light',
    value: '100%',
    label: 'English-first service'
  }), React.createElement(StatCard, {
    tone: 'light',
    value: '1',
    label: 'Advisor, always you'
  })), React.createElement('div', null, React.createElement('h2', {
    style: {
      fontSize: 'clamp(24px,3vw,34px)',
      color: 'var(--navy)',
      marginBottom: 20,
      fontFamily: 'var(--font-display)'
    }
  }, 'Global protection, local peace of mind.'), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--gray)',
      lineHeight: 1.75,
      marginBottom: 16
    }
  }, 'We believe every expat in Mexico deserves to understand their health coverage — in their own language, without confusing paperwork.'), React.createElement(Button, {
    variant: 'primary'
  }, 'Explore Plans →')))));
}
window.MexpatSafeWebsite = Object.assign(window.MexpatSafeWebsite || {}, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SectionHeader,
  Button,
  ContactCard
} = window.MexpatSafeDesignSystem_2de3b4;
function Contact() {
  return React.createElement('div', null, React.createElement('section', {
    style: {
      background: 'linear-gradient(135deg, var(--navy-deep) 60%, var(--navy-mid) 100%)',
      padding: '80px 80px 72px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 680
    }
  }, React.createElement(SectionHeader, {
    tag: 'Get in touch',
    title: '',
    onDark: true
  }), React.createElement('h1', {
    style: {
      color: '#fff',
      fontSize: 'clamp(30px,4vw,48px)',
      marginBottom: 14,
      fontFamily: 'var(--font-display)'
    }
  }, "Let's find the right ", React.createElement('span', {
    style: {
      color: 'var(--gold)'
    }
  }, 'coverage for you')), React.createElement('p', {
    style: {
      color: 'rgba(255,255,255,0.75)',
      fontSize: 17
    }
  }, 'English-speaking. Fast response. No pressure.'))), React.createElement('section', {
    style: {
      padding: '80px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 600,
      margin: '0 auto 48px',
      textAlign: 'center'
    }
  }, React.createElement(SectionHeader, {
    tag: 'Choose your path',
    title: 'How would you like to connect?',
    align: 'center'
  })), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      maxWidth: 900,
      margin: '0 auto'
    }
  }, React.createElement(ContactCard, {
    emoji: '💬',
    title: 'Quick question?',
    description: "Drop us a message on WhatsApp. We'll qualify your needs and get back to you within a few hours.",
    cta: React.createElement(Button, {
      variant: 'whatsapp',
      icon: '💬',
      style: {
        marginTop: 'auto'
      }
    }, 'Open WhatsApp Chat')
  }), React.createElement(ContactCard, {
    emoji: '📅',
    title: 'Ready for a real quote?',
    description: "Book a consultation and we'll walk you through your options and build a plan that fits.",
    cta: React.createElement(Button, {
      variant: 'gold',
      icon: '📅',
      style: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 'auto'
      }
    }, 'Book Free Consultation')
  }))), React.createElement('section', {
    style: {
      background: 'var(--navy)',
      padding: '48px 80px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['🌐', 'English-first', 'All communication in English'], ['⏱', 'Fast response', 'Same business day reply'], ['🛡', 'Bupa Certified', 'Authorized Bupa agent'], ['🔒', 'Private & secure', 'LFPDPPP compliant']].map(([i, t, d]) => React.createElement('div', {
    key: t,
    style: {
      textAlign: 'center',
      padding: '24px 16px'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 28,
      marginBottom: 10
    }
  }, i), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      color: '#fff',
      marginBottom: 6,
      fontWeight: 600
    }
  }, t), React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, d))))));
}
window.MexpatSafeWebsite = Object.assign(window.MexpatSafeWebsite || {}, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  useState
} = React;
const {
  Navbar,
  Footer,
  WhatsAppFloat,
  Button,
  Badge,
  SectionHeader,
  StatCard,
  TestimonialCard
} = window.MexpatSafeDesignSystem_2de3b4;
const LOGO_WHITE = '../../assets/logos/mexpatsafe-logo-white.svg';
const BUPA = '../../assets/logos/partners/bupa-logo.png';
const BCBS = '../../assets/logos/partners/blue-cross-blue-shield-logo.png';
const NAV_LINKS = [{
  label: 'Home',
  href: 'home'
}, {
  label: 'About',
  href: 'about'
}, {
  label: 'Plans',
  href: 'plans'
}, {
  label: 'Contact',
  href: 'contact'
}];
function Reveal({
  children
}) {
  return React.createElement('div', null, children);
}
function Home() {
  return React.createElement('div', null, React.createElement('section', {
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(160deg, #c5d8e8 0%, #8cb3cc 40%, #5c88a6 100%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(105deg, rgba(7,35,61,0.78) 0%, rgba(7,35,61,0.6) 45%, rgba(7,35,61,0.25) 100%)'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 680,
      padding: '100px 0 100px 80px'
    }
  }, React.createElement(Badge, {
    tone: 'eyebrow'
  }, 'Certified Bupa Partner'), React.createElement('h1', {
    style: {
      fontSize: 'clamp(38px,5vw,64px)',
      color: '#fff',
      lineHeight: 1.08,
      margin: '22px 0',
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, 'Health Insurance', React.createElement('br'), 'for ', React.createElement('em', {
    style: {
      color: 'var(--gold-light)'
    }
  }, 'Expats'), React.createElement('br'), 'in Mexico'), React.createElement('p', {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.65,
      marginBottom: 36,
      maxWidth: 480
    }
  }, 'Bupa-backed global coverage. English-first service. We handle everything from your first quote to your last claim.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 36,
      flexWrap: 'wrap'
    }
  }, React.createElement(StatCard, {
    tone: 'glass',
    value: '190+',
    label: 'Countries covered'
  }), React.createElement(StatCard, {
    tone: 'glass',
    value: '100%',
    label: 'English service'
  }), React.createElement(StatCard, {
    tone: 'glass',
    value: '15min',
    label: 'Free consultation'
  })), React.createElement(Button, {
    variant: 'primary',
    size: 'lg',
    icon: '📅'
  }, 'Book a Free Consultation'))), React.createElement('div', {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--gray-mid)',
      padding: '20px 80px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement('img', {
    src: BUPA,
    alt: 'Bupa',
    style: {
      height: 42
    }
  }), React.createElement('div', {
    style: {
      width: 1,
      height: 28,
      background: 'var(--gray-mid)'
    }
  }), React.createElement('img', {
    src: BCBS,
    alt: 'Blue Cross Blue Shield',
    style: {
      height: 26
    }
  })), React.createElement('div', {
    style: {
      width: 1,
      height: 40,
      background: 'var(--gray-mid)'
    }
  }), React.createElement('p', {
    style: {
      fontSize: 13,
      color: 'var(--gray)',
      lineHeight: 1.6
    }
  }, 'Authorized Bupa Partner · English-speaking advisors · Global coverage through the ', React.createElement('strong', {
    style: {
      color: 'var(--navy)'
    }
  }, "world's largest medical network")))), React.createElement('section', {
    style: {
      background: 'var(--navy)',
      padding: '90px 80px'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, React.createElement(SectionHeader, {
    tag: 'Why Mexpat Safe',
    title: 'The Bupa advantage, delivered in English.',
    subtitle: "We're not a generic broker. We're a Bupa-certified agency built specifically for expats living in Mexico.",
    align: 'center',
    onDark: true
  })), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 14,
      maxWidth: 1100,
      margin: '0 auto',
      overflow: 'hidden'
    }
  }, [['01', 'Global Coverage, Local Roots', "Bupa's BCBS network covers you across Mexico and worldwide.", '190+ countries'], ['02', 'English-Speaking Advisors', 'No language barriers, ever. Your advisor picks up the phone.', 'Always in English'], ['03', 'Certified Bupa Partner', 'Direct access to Bupa plans. No middlemen, no surprises.', 'Bupa certified']].map(([n, t, d, tagText], i) => React.createElement('div', {
    key: n,
    style: {
      padding: '36px 32px',
      borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.06)',
      letterSpacing: -2,
      marginBottom: -8
    }
  }, n), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: '#fff',
      marginBottom: 12
    }
  }, t), React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.6)',
      lineHeight: 1.7
    }
  }, d), React.createElement(Badge, {
    tone: 'accent'
  }, tagText))))), React.createElement('section', {
    style: {
      padding: '90px 80px'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      maxWidth: 1100,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement(SectionHeader, {
    tag: 'How It Works',
    title: 'Coverage in 3 simple steps.',
    subtitle: "Getting covered shouldn't be complicated."
  }), React.createElement('div', {
    style: {
      marginTop: 40
    }
  }, [['1', 'Book a free consultation', '15 minutes via video call. No commitment required.'], ['2', 'Receive your personalized proposal', 'We compare Bupa plans and send you real pricing.'], ['3', 'Get covered', 'Sign your policy and start living with peace of mind.']].map(([n, t, d], i) => React.createElement('div', {
    key: n,
    style: {
      display: 'flex',
      gap: 24,
      padding: '24px 0',
      borderBottom: i < 2 ? '1px solid var(--gray-light)' : 'none'
    }
  }, React.createElement('div', {
    style: {
      width: 40,
      height: 40,
      background: 'var(--navy)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, n), React.createElement('div', null, React.createElement('h4', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      color: 'var(--navy)',
      marginBottom: 6,
      fontWeight: 600
    }
  }, t), React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--gray)',
      lineHeight: 1.65
    }
  }, d)))))), React.createElement('div', {
    style: {
      background: 'linear-gradient(160deg,#c5d8e8 0%,#8cb3cc 50%,#5c88a6 100%)',
      borderRadius: 16,
      minHeight: 380
    }
  }))), React.createElement('section', {
    style: {
      background: 'var(--gray-bg)',
      padding: '90px 80px'
    }
  }, React.createElement('div', {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, React.createElement(SectionHeader, {
    tag: 'What expats say',
    title: 'Real people. Real coverage.',
    align: 'center'
  })), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement(TestimonialCard, {
    quote: 'Mexpat Safe made the whole process effortless.',
    name: 'Sarah K.',
    meta: 'American expat · Guadalajara'
  }), React.createElement(TestimonialCard, {
    quote: 'Finally an advisor who explains everything in plain English.',
    name: 'James R.',
    meta: 'Canadian retiree · Puerto Vallarta'
  }), React.createElement(TestimonialCard, {
    quote: 'The interactive proposal made it so easy to compare options.',
    name: 'Lisa M.',
    meta: 'British expat · Mexico City'
  }))), React.createElement('section', {
    style: {
      background: 'var(--navy)',
      padding: '90px 80px',
      textAlign: 'center'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px,3.5vw,44px)',
      color: '#fff',
      marginBottom: 16
    }
  }, 'Ready to stop worrying about your healthcare?'), React.createElement('p', {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.65)',
      marginBottom: 40,
      maxWidth: 500,
      margin: '0 auto 40px'
    }
  }, "A 15-minute conversation is all it takes. We'll find the right Bupa plan — no pressure, no jargon."), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement(Button, {
    variant: 'gold',
    size: 'lg',
    icon: '📅'
  }, 'Book a Free Consultation'), React.createElement(Button, {
    variant: 'outline-white',
    size: 'lg',
    icon: '💬'
  }, 'Message on WhatsApp'))));
}
window.MexpatSafeWebsite = {
  Home,
  Navbar,
  Footer,
  WhatsAppFloat,
  NAV_LINKS,
  LOGO_WHITE
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Plans.jsx
try { (() => {
const {
  useState
} = React;
const {
  SectionHeader,
  Button,
  ComparisonCard,
  FAQItem
} = window.MexpatSafeDesignSystem_2de3b4;
const PROFILES = [{
  tab: 'Retiree',
  name: 'Bupa Global Choice',
  coverage: 'Full worldwide coverage, incl. USA/Canada',
  desc: 'Built for retirees splitting time between Mexico and their home country — no network restrictions.',
  highlight: 'Most comprehensive'
}, {
  tab: 'Remote Worker',
  name: 'Bupa Select',
  coverage: 'Latin America + home-country visits',
  desc: 'For remote workers based in Mexico who travel occasionally — strong outpatient coverage.',
  highlight: 'Best value'
}, {
  tab: 'Family',
  name: 'Bupa Nacional Plus',
  coverage: 'Mexico-wide hospital network',
  desc: 'Family plans with maternity and pediatric coverage across Mexico\u2019s top private hospitals.',
  highlight: 'Maternity included'
}, {
  tab: 'Young Expat',
  name: 'Bupa Vital',
  coverage: 'Mexico + emergency abroad',
  desc: 'A lean entry plan for younger expats who want solid emergency protection at a lower premium.',
  highlight: 'Lowest premium'
}];
function Plans() {
  const [active, setActive] = useState(0);
  const p = PROFILES[active];
  return React.createElement('div', null, React.createElement('section', {
    style: {
      padding: '80px 80px 64px',
      background: 'var(--navy-deep)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 680
    }
  }, React.createElement(SectionHeader, {
    tag: 'Plans',
    title: '',
    onDark: true
  }), React.createElement('h1', {
    style: {
      color: '#fff',
      fontSize: 'clamp(30px,4vw,48px)',
      marginBottom: 14,
      fontFamily: 'var(--font-display)'
    }
  }, 'Find the Bupa plan built for your profile'), React.createElement('p', {
    style: {
      color: 'rgba(255,255,255,0.65)',
      fontSize: 17,
      lineHeight: 1.6
    }
  }, 'Four expat profiles. Four Bupa plan families. Pick the one closest to your situation.'))), React.createElement('section', {
    style: {
      padding: '80px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, PROFILES.map((prof, i) => React.createElement('button', {
    key: prof.tab,
    onClick: () => setActive(i),
    style: {
      padding: '10px 20px',
      border: i === active ? '1.5px solid var(--navy)' : '1.5px solid var(--gray-mid)',
      borderRadius: 8,
      background: i === active ? 'var(--navy)' : '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: i === active ? '#fff' : 'var(--gray)',
      cursor: 'pointer'
    }
  }, prof.tab))), React.createElement('div', {
    style: {
      background: 'var(--gray-bg)',
      borderRadius: 14,
      padding: '40px 44px',
      borderLeft: '4px solid var(--gold)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(22px,3vw,30px)',
      color: 'var(--navy)',
      marginBottom: 6
    }
  }, p.name), React.createElement('div', {
    style: {
      fontSize: 15,
      color: 'var(--gold)',
      fontWeight: 700,
      marginBottom: 16
    }
  }, p.coverage), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--gray)',
      lineHeight: 1.7,
      marginBottom: 20
    }
  }, p.desc), React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--navy)',
      color: 'var(--gold-light)',
      padding: '8px 18px',
      borderRadius: 6,
      fontSize: 13,
      fontWeight: 600
    }
  }, p.highlight))), React.createElement('section', {
    style: {
      padding: '80px',
      background: 'var(--gray-bg)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      marginBottom: 48
    }
  }, React.createElement('h2', {
    style: {
      fontSize: 'clamp(24px,3vw,36px)',
      color: 'var(--navy)',
      fontFamily: 'var(--font-display)'
    }
  }, 'How Bupa compares')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, React.createElement(ComparisonCard, {
    vsLabel: 'VS CIGNA',
    planName: 'Bupa Global Choice'
  }, React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--gray)',
      lineHeight: 1.6
    }
  }, 'Lower deductibles and dedicated English claims support.')), React.createElement(ComparisonCard, {
    vsLabel: 'VS GNP / AXA',
    planName: 'Bupa Nacional Plus'
  }, React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--gray)',
      lineHeight: 1.6
    }
  }, 'Wider private hospital network across expat hubs.')), React.createElement(ComparisonCard, {
    vsLabel: 'VS OUT-OF-POCKET',
    planName: 'Bupa Vital'
  }, React.createElement('p', {
    style: {
      fontSize: 14,
      color: 'var(--gray)',
      lineHeight: 1.6
    }
  }, 'Predictable premiums instead of catastrophic exposure.'))))), React.createElement('section', {
    style: {
      padding: '80px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: 64
    }
  }, React.createElement('div', null, React.createElement(SectionHeader, {
    tag: 'Common questions',
    title: ''
  }), React.createElement('h2', {
    style: {
      fontSize: 'clamp(24px,3vw,34px)',
      color: 'var(--navy)',
      marginTop: 12,
      fontFamily: 'var(--font-display)'
    }
  }, 'FAQ')), React.createElement('div', null, React.createElement(FAQItem, {
    question: 'Does Bupa cover pre-existing conditions?',
    answer: 'It depends on the plan and your medical history — we review this in your free consultation.'
  }), React.createElement(FAQItem, {
    question: 'Can I keep my plan if I leave Mexico?',
    answer: 'Yes — Bupa Global Choice travels with you across 190+ countries.'
  }), React.createElement(FAQItem, {
    question: 'How fast can I get covered?',
    answer: 'Most clients are covered within two weeks of their consultation.'
  }), React.createElement(FAQItem, {
    question: 'Is there a waiting period?',
    answer: 'Waiting periods vary by plan and condition — we walk through this in your proposal.'
  })))), React.createElement('section', {
    style: {
      background: 'var(--navy)',
      padding: '80px',
      textAlign: 'center'
    }
  }, React.createElement('h1', {
    style: {
      color: '#fff',
      fontSize: 'clamp(26px,3.5vw,40px)',
      marginBottom: 14,
      fontFamily: 'var(--font-display)'
    }
  }, 'Ready to get covered?'), React.createElement(Button, {
    variant: 'gold',
    size: 'lg',
    icon: '📅'
  }, 'Book a Free Consultation')));
}
window.MexpatSafeWebsite = Object.assign(window.MexpatSafeWebsite || {}, {
  Plans
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Plans.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ComparisonCard = __ds_scope.ComparisonCard;

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.CredentialCard = __ds_scope.CredentialCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FAQItem = __ds_scope.FAQItem;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.WhatsAppFloat = __ds_scope.WhatsAppFloat;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
