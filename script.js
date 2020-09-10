var nilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];

var total = 0;
// var bnykNilai = nilai.length;

for (i = 0; i < nilai.length; i++) {
    total += nilai[i]
}
document.write('Nilai rata-rata santri adalah: ')
document.write(total / nilai.length)