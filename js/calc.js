
let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.querySelector('.name'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    restDaysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;

function onChange () {
        personsSum = +this.value;
                total = (restDaysSum + personsSum)*4000;

                if (restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                } else{
                    totalValue.innerHTML = total;
                }
    };

persons.addEventListener('keyup', onChange); 
        
restDays.addEventListener('keyup', onChange);
    

place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });


