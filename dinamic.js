

const display = document.querySelector('.display');
const button = document.querySelectorAll('.button');
let res = '';
let percentFlag = false;
let initialValue = null;
let percentValue = null;
button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('sqrt') &&!btn.classList.contains('percent') && !btn.classList.contains('primary') && !btn.classList.contains('clear')) {
            res += btn.innerHTML;
            display.textContent = res;
            if (percentFlag) {
                percentValue = Number(res);

            }
        }
         if (btn.classList.contains('sqrt')) {
            res = Math.sqrt(res);
            res = Number(res.toFixed(6));
            display.textContent = res;
         }
        if (btn.classList.contains('clear')) {
            display.textContent = 0;
            res = '';
            percentValue = null;
            percentFlag = false;
        }
        if (btn.classList.contains('percent') && res) {
            if (!percentFlag) {
                res = eval(res);
                initialValue = Number(res);
                display.textContent = res + '%';
                res = '';
                percentFlag = true
            }
        }
        if (btn.classList.contains('primary')) {
           try {
            if (res.trim() !== '') {
                res = eval(res);
                res = Number(res.toFixed(6));
                display.textContent = res;
                if (percentFlag) {
                    res = (initialValue / 100) * percentValue;
                    display.textContent = res;
                    percentFlag = false;
                }
            }
            if (!isFinite(res)) {
                   display.textContent = 'Ошибка';
                   res = '';
                }
            } catch {
            	display.textContent = "Ошибка";
            }
        }
    });
});