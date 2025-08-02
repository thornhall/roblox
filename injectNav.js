async function injectNav() {
    const resp = await fetch('nav.html');
    if (!resp.ok) return;
    const html = await resp.text();
    document.getElementById('shared-nav').innerHTML = html;

    const burger = document.querySelector('.burger');
    const mobile = document.querySelector('.mobile-menu');
    if (burger && mobile) {
        burger.addEventListener('click', () => {
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            mobile.classList.toggle('open');
        });

        const links = mobile.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobile.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

injectNav();


