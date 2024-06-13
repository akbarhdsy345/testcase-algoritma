function countOccurrences(input, query) {
    // Buat array untuk menyimpan hasil
    let result = [];

    // Iterasi melalui setiap kata dalam array QUERY
    for (let q of query) {
        // Hitung berapa kali kata q muncul dalam array INPUT
        let count = input.filter(word => word === q).length;
        // Tambahkan hasil ke array result
        result.push(count);
    }

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(countOccurrences(INPUT, QUERY)); 
// Output: [1, 0, 2]
