//alert('hello world')


 function iswindy(speed) {
    if (speed > 5){
        return true;
    } else {
        return false;
    }
}

if (iswindy(3) === true) {
    alert('it is windy');
} else {
    alert('it is not windy');
}

if (iswindy(10) === true) {
    alert('it is windy');
} else {
    alert('it is not windy');
}

