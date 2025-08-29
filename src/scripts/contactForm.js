(function () {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toastMsg');
    if (!form || !toast) return;

    function showToast(message, type = 'success', ms = 3500) {
        (msgEl || toast).textContent = message;
        toast.className = `toast toast--${type}`;         // reseta classes
        toast.style.setProperty('--toast-duration', ms + 'ms'); // sincroniza a barra
        // força recomeçar a animação ao reabrir
        // void toast.offsetWidth; // (opcional, geralmente não precisa)
        toast.classList.add('toast--show');
        clearTimeout(showToast.t);
        showToast.t = setTimeout(() => toast.classList.remove('toast--show'), ms);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (form.querySelector('[name="_gotcha"]')?.value) return; // honeypot

        const btn = form.querySelector('button[type="submit"]');
        const original = btn?.innerHTML;

        try {
            if (btn) { btn.disabled = true; btn.innerHTML = 'Enviando...'; }

            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.reset();
                showToast('Mensagem enviada com sucesso!', 'success', 3500);
            } else {
                showToast('Não foi possível enviar. Tente novamente.', 'error', 3500);
            }
        } catch {
            showToast('Falha de rede. Tente novamente.', 'error', 3500);
        } finally {
            if (btn) { btn.disabled = false; btn.innerHTML = original; }
        }
    });
})();
