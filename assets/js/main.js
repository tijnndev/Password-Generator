const button = document.querySelector('.button')
const input = document.querySelector('.input')
const symbol = document.getElementById('symbols')
const numbers = document.getElementById('numbers')

button.addEventListener('click', async (e) => {
    input.placeholder = randomString(12);
})
function randomString(len) {
    let charSet = ""
    if (symbol.checked && numbers.checked) {
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+_?/><{}[]';
    } else if (symbol.checked) {
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-=+_?/><{}[]';

    } else if (numbers.checked) {
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    } else {
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    }

    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

input.addEventListener('click', async (e) => {
    if (input.placeholder.length > 1) {
        var clipboard = document.createElement("textarea");
        clipboard.style.height = 0;
        clipboard.style.width = 0;
        clipboard.style.position = 'relative';
        clipboard.style.right = '1000rem';
        clipboard.value = input.placeholder;
        document.body.appendChild(clipboard);
        clipboard.select();
        if (document.execCommand('copy')) {

            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }

    }
})