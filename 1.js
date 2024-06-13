function reverseAlphabets(str) {
    // Pisahkan angka dari string
    let alphabets = str.slice(0, -1); // Mengambil semua karakter kecuali karakter terakhir
    let number = str.slice(-1); // Mengambil karakter terakhir

    // Balik urutan huruf
    let reversedAlphabets = alphabets.split('').reverse().join('');

    // Gabungkan huruf yang telah dibalik dengan angka
    return reversedAlphabets + number;
}

let originalString = "NEGIE1";
let result = reverseAlphabets(originalString);
console.log(result);