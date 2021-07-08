// links = document.querySelectorAll('a[href^="#"]');
// links.forEach(item => item.addEventListener('click',
//  function(e) {
// 	e.preventDefault();
// 	let id = item.getAttribute('href').slice(1);

//     let element = document.getElementById(id);
//     let headerOffset = 58;
//     let elementPosition = element.getBoundingClientRect().top;
//     let offsetPosition = elementPosition - headerOffset;

//     window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//     });
// }));


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