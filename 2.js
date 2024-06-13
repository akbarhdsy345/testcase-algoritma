function longest(sentence) {
    // Pisahkan kalimat menjadi array kata-kata
    const words = sentence.split(' ');

    // Inisialisasi kata terpanjang
    let longestWord = '';

    // Iterasi melalui setiap kata dalam kalimat
    for (let word of words) {
        // Jika panjang kata saat ini lebih panjang dari kata terpanjang sebelumnya
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Mengembalikan kata terpanjang dan panjangnya
    return `${longestWord}: ${longestWord.length} character`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence)); 
// Output: "mengerjakan: 11 character"
