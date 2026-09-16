let janji = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Berhasil!");
  }, 2000);
});

async function jalankan() {
  let hasil = await janji;
  console.log(hasil);
}

jalankan();