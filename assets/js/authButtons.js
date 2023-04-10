const adminButtons = document.querySelectorAll('.adminButtons')

if (document.cookie)
    adminButtons.forEach(element => element.classList.remove('hidden'))
else
    adminButtons.forEach(element => element.classList.add('hidden'))


