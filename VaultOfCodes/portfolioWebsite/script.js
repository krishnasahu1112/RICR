// script.js
document.addEventListener('DOMContentLoaded', () => {
  /* ------------ Helpers ------------ */
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const create = (tag, props = {}) => Object.assign(document.createElement(tag), props);

  /* ------------ Email / Offer button ------------ */
  const emailInput = qs('#em input[type="email"]');
  const emailBtn = qs('#em button');
  if (emailInput && emailBtn) {
    const msg = create('div');
    msg.style.marginTop = '8px';
    msg.style.fontSize = '14px';
    qs('#content').appendChild(msg);

    emailBtn.addEventListener('click', () => {
      const val = (emailInput.value || '').trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) {
        msg.textContent = 'Please enter your email.';
        msg.style.color = 'crimson';
        return;
      }
      if (!re.test(val)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.style.color = 'crimson';
        return;
      }
      msg.textContent = 'Thanks — offer request received!';
      msg.style.color = 'green';
      emailInput.value = '';
    });
  }

  /* ------------ Toggle active for mid nav buttons ------------ */
  const midBtns = qsa('#midButtons > div');
  midBtns.forEach(btn => {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => {
      midBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // subtle feedback
      btn.style.transform = 'translateY(-2px)';
      setTimeout(() => (btn.style.transform = ''), 150);
    });
  });

  /* ------------ Projects: modal details when clicking SEE DETAILS (.b1) ------------ */
  const projectButtons = qsa('#projectContent .b1');
  function createModal() {
    const overlay = create('div');
    overlay.id = 'project-modal';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.6)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    const box = create('div');
    box.style.maxWidth = '720px';
    box.style.width = '90%';
    box.style.background = 'white';
    box.style.padding = '20px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';

    const close = create('button', { textContent: 'Close' });
    close.style.float = 'right';
    close.style.cursor = 'pointer';
    close.addEventListener('click', () => overlay.remove());

    const title = create('h3');
    title.style.marginTop = '6px';
    const desc = create('p');

    box.appendChild(close);
    box.appendChild(title);
    box.appendChild(desc);
    overlay.appendChild(box);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    return { overlay, title, desc };
  }

  projectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // find related project title & desc (nearest .items container)
      const card = btn.closest('.items') || btn.closest('.items') || btn.parentElement;
      const titleEl = qs('h5', card) || qs('h4', card) || { textContent: 'Project' };
      const pEl = qs('p', card) || { textContent: 'No description available.' };

      const modal = createModal();
      modal.title.textContent = titleEl.textContent;
      modal.desc.textContent = pEl.textContent;
      document.body.appendChild(modal.overlay);
    });
  });

  /* ------------ Contact form validation & fake submit ------------ */
  const contactFormBox = qs('#contactForm #form');
  if (contactFormBox) {
    const textInputs = qsa('input[type="text"]', contactFormBox);
    const messageEl = qs('#message', document); // message id exists globally
    const radioGroup = qsa('input[name="interested"]', contactFormBox);
    const submitBtn = qs('#contactForm #form button') || qs('#contactForm #form input[type="button"]');

    // create feedback area
    const contactMsg = create('div');
    contactMsg.style.marginTop = '10px';
    contactFormBox.appendChild(contactMsg);

    (submitBtn || create('button')).addEventListener('click', (ev) => {
      ev.preventDefault && ev.preventDefault();
      const fname = (textInputs[0] && textInputs[0].value.trim()) || '';
      const lname = (textInputs[1] && textInputs[1].value.trim()) || '';
      const message = (messageEl && messageEl.value.trim()) || '';
      const interested = radioGroup.some(r => r.checked);

      if (!fname || !lname) {
        contactMsg.textContent = 'Please enter your first and last name.';
        contactMsg.style.color = 'crimson';
        return;
      }
      if (!interested) {
        contactMsg.textContent = 'Please select an area of interest.';
        contactMsg.style.color = 'crimson';
        return;
      }
      if (!message) {
        contactMsg.textContent = 'Please write your message.';
        contactMsg.style.color = 'crimson';
        return;
      }

      // fake submit
      contactMsg.textContent = 'Message sent — we will contact you within 24 hours.';
      contactMsg.style.color = 'green';
      // reset small fields
      textInputs.forEach(i => i.value = '');
      if (messageEl) messageEl.value = '';
      radioGroup.forEach(r => r.checked = false);
    });
  }

  /* ------------ Hero image lightbox ------------ */
  const heroImg = qs('#image img');
  if (heroImg) {
    heroImg.style.cursor = 'zoom-in';
    heroImg.addEventListener('click', () => {
      const overlay = create('div');
      overlay.style.position = 'fixed';
      overlay.style.inset = '0';
      overlay.style.background = 'rgba(0,0,0,0.85)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '9998';
      const big = create('img');
      big.src = heroImg.src;
      big.style.maxWidth = '90%';
      big.style.maxHeight = '90%';
      big.style.borderRadius = '8px';
      overlay.appendChild(big);
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  }

  /* ------------ Back to top button ------------ */
  const toTop = create('button', { id: 'backToTop', textContent: '↑ Top' });
  toTop.style.position = 'fixed';
  toTop.style.right = '20px';
  toTop.style.bottom = '20px';
  toTop.style.padding = '8px 12px';
  toTop.style.borderRadius = '6px';
  toTop.style.border = 'none';
  toTop.style.cursor = 'pointer';
  toTop.style.display = 'none';
  toTop.style.zIndex = '9999';
  document.body.appendChild(toTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) toTop.style.display = 'block';
    else toTop.style.display = 'none';
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ------------ Small accessibility: keyboard close for modals (Esc) ------------ */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      qsa('#project-modal, [id="project-modal"]').forEach(el => el.remove());
      qsa('div[style*="position: fixed"][style*="rgba(0,0,0,0.85)"]').forEach(el => el.remove());
    }
  });
});
