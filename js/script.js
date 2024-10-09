// Ini javascript

console.log('Javascript Tersambung');

function validateForm() {
    console.log('validasi fungsi berhasil terpanggil');
    const inputSuhu = document.getElementById('input-suhu').value;

    if (inputSuhu == '') {
        alert('Inputan anda kosong');
    } else {
        calculate(inputSuhu);
    }
}

function calculate(value) {
    let result = parseInt(value) * 2;
    document.getElementById('hasil-suhu').value = result;
    document.getElementById('how-to-suhu').value = value + ' x 2 = ' + result;
}

function reset() {
    document.getElementById('hasil-suhu').value = '';
    document.getElementById('input-suhu').value = '';

    document.getElementById('how-to-suhu').value = '';
    console.log('bawah');
}