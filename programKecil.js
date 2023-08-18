const myArr = [];                   // buat satu array / list

for (i=100; i>0; i--) {             // dari 1 sampai 100. Print semua angka ini dalam urutan terbalik,
    const a=i;
 //   console.log(a);
    if (!isPrime(a)){              // Jangan print angka bilangan prima (kita gunakan Fungsi Untuk mengecek suatu angka, prima atau bukan)
        let result = "";           // Buat varibel untuk menyimpan data 

        if (a%3 == 0) {
            result += "Foo";        // Ganti angka yang dapat dibagi dengan angka 3 dengan text "Foo".
        }

        if (a%5 == 0) {
            result += "Bar";        // Ganti angka yang dapat dibagi dengan angka 5 dengan text "Bar". (jika sudah kena yg "Foo" maka akan ditambah yg bar)
        }

        if (result == "") {         // Jika angka tidak dapat dibagi 3 maupun 5 maka variable akan dimasukan angka yg dicek tadi.
            result = a;
        }

        myArr.push(result);         // Masukan angka ke Array
     //   console.log(a);
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false; // 0 and 1 are not considered prime
    }
    for (j=2;j<n;j++) {
      if(n%j == 0) {
        return false; // return prime is false
      }
    }
    return true; // return prime true
}
  

console.log(myArr.join(', '));


