// * Функция для инициализации окна уведомления
document.getElementById("ShowEmailInfo").onclick = function() {
    var myAlert = document.getElementById('EmailInfo');
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}


// * Функция добавления текста в буфер обмена
document.getElementById("CopyEmailBtn").onclick = function() {
    navigator.clipboard.writeText('d.a.nazarov1@yandex.ru')
    .then(()=>{
        document.getElementById('CopySuccesses').style.display='block'
        setTimeout(function(){
            document.getElementById('CopySuccesses').style.display='none';
        }, 2000);
    })
    .catch(err =>{
        document.getElementById('CopyErrore').style.display='block'
        setTimeout(function(){
            document.getElementById('CopyErrore').style.display='none';
        }, 2000);
    });
}

// * Прокрутка страницы с учетом шапки 
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 58; 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});