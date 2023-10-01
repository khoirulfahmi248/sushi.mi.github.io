document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    const nohp = "62857123123";
    let deskripsiClean = deskripsi.replace(/<[^>]*>?/gm, ""); // tambahkan regex untuk menghapus tag html seperti <br>, <p>, <i>, dll
    let pesan = `https://api.whatsapp.com/send?phone=${+628157771525}&text=Halo Kak, saya mau pesan produk ini: ${deskripsiClean}`;

    document.querySelector(".btnBeli").href = pesan;

    if (deskripsi == "<i>tidak ada informasi yang tersedia</i>") {
      // tambahkan kondisi jika deskripsi tidak tersedia
      document.querySelector(".btnBeli").classList.add("disabled"); // tambahkan class disabled jika deskripsi tidak tersedia
    } else {
      document.querySelector(".btnBeli").classList.remove("disabled"); // hapus class disabled jika deskripsi tersedia
    }
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
