var nama = "Iki";
var peran = "Tabib";

if (nama.length !== 0 && peran.length !==0) {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    if (peran === 'Ksatria') {
	console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
    } 
    else if (peran === 'Tabib') {
	console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
    } 
    else if (peran === 'Penyihir') {
	console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
    }
    else {
        console.log("Data yang anda masukkan invalid");
    }
}
    else if (nama.length !== 0 && peran.length === 0) {
	console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
    }

else {
   console.log('Nama harus diisi!');
}
