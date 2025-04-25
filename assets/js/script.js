var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')
var botaoContato = document.getElementById("botaoContato")

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

botaoContato.onclick = function () {
    const mensagem = document.getElementById("message").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const numeroWhatsApp = "551434133244";
    let url = ""

    if (nome === "" || mensagem === "") {
        url = `https://wa.me/${numeroWhatsApp}`;
    } else {
        const textoCodificado = encodeURIComponent(`Olá, me chamo ${nome}. ${mensagem}`);
        url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
    }

    window.open(url, "_blank");
};