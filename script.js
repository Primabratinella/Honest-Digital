(function() {
    const toggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute ('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded',String (!expanded));
            mobileNav.hidden = !expanded;
            mobileNav.setAttribute('aria-hidden',String(mobileNav.hidden));
        });
    }

    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalOk = document.getElementById('modal-ok');
    const details = document.getElementById('offer-details');
    const backdrop = document.getElementById('modal-backdrop');
    const modalPanel = document.getElementById('modal-panel');

    let lastFocused = null;

    function handleKeyDown (e) {
        if (e.key === 'Escape'){
            closeModal ();
            return;
        }

        if (e.key === 'Tab') {
            const focusable = modalPanel.querySelectorAll
            ('a[href],button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
            if (!focusable.length)return;
            const first = focusable [0];
            const last = focus[focusable.length -1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last){
                e.preventDefault();
                first.focus();
            }
        }
    }

    function openModal () {
        if (!modal || !modalPanel || !backdrop) return;
        lastFocused = document.activeElement;

        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
        backdrop.style.display ='block';
        document.body.style.overflow = 'hidden';

        modalPanel.focus();
        document.addEventListener('keydown', handleKeyDown);
    }

    function closeModal (){
        if (!modal || !modalPanel || !backdrop) return;

        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        backdrop.style.display = 'none';
        document.body.style.overflow = '';

        document.removeEventListener('keydown', handleKeyDown);
        if(lastFocused && typeof lastFocused.focus === 'function') {
            lastFocused.focus();
        }

        function handleKeyDown(e) {
            if (e.key === 'Escape')
                closeModal();
            return;
            
        }
        if (details) details.addEventListener('click', openModal);
        if(modalClose) modalClose.addEventListener('click', closeModal);
        if(modalOk) modalOk.addEventListener('click', closeModal);
        if(backdrop) backdrop.addEventListener('click', closeModal);

        if (modal){
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal ();
            });
        }
    }
})();