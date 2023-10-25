function showNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(function() {
        notification.classList.add('show');
    }, 10);
}

function closeNotification() {
    var notification = document.getElementById('notification');
    notification.classList.remove('show');
    setTimeout(function() {
        notification.style.display = 'none';
    }, 300);
}
