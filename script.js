(function() {
    const toggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute ('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String (!expanded));
            mobileNav.hidden = expanded;
        });
    }

    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalOk = document.getElementById('modal-ok');
    const details = document.getElementById('offer-details');
    const backdrop = document.getElementById('modal-backdrop');
    const modalPanel = document.getElementById('modal-panel');

    function openModal () {
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        if (modalPanel) {
            modalPanel.setAttribute('tabindex', '-1');
            modalPanel.focus ();
        }
    }


})