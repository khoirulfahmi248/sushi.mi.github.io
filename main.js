document.querySelectorAll(".btnDetail").forEach((item) => {
    item.addEventListener("click", (e) => {
      let parent = e.target.closest(".card");
  
      if (!parent) {
        console.error("Cannot find parent card element.");
        return;
      }

      //new fungsi
      let phone = document.querySelector(".btnBeli").dataset.phone;

  
      let gambar = parent.querySelector(".card-img-top").src;
      let harga = parent.querySelector(".harga").textContent;
      let judul = parent.querySelector(".card-text").textContent;
      let deskripsi = parent.querySelector(".deskripsi")
        ? parent.querySelector(".deskripsi").innerHTML
        : "<i>tidak ada informasi yang tersedia</i>";
  
      let tombolModal = document.querySelector(".btnModal");
      tombolModal.click();

      tombolModal.addEventListener("click", closeModal);

      function closeModal() {
  // Hapus event listener di sini
       tombolModal.removeEventListener("click", closeModal);
      }
  
      document.querySelector(".modalTitle").textContent = judul;
      let image = document.createElement("img");
      image.src = gambar;
      image.classList.add("w-100");
      document.querySelector(".modalImage").innerHTML = "";
      document.querySelector(".modalImage").appendChild(image);
      document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
      document.querySelector(".modalHarga").innerHTML = harga;
  
      // Memperbarui jumlah dengan nilai dari elemen dengan ID "quantity"
      let jumlah = parseInt(document.getElementById("quantity").textContent);
  
      //const nohp = "628157771525";
      let deskripsiClean = deskripsi.replace(/<[^>]*>?/gm, "");
  
      // Memperbarui URL pesan WhatsApp dengan menggabungkan deskripsi produk dan jumlah unit yang benar
      let pesan = `https://api.whatsapp.com/send?phone=${+628157771525}&text=Halo Kak,saya mau pesan produk ini: ${deskripsiClean} (${jumlah} pack)`;
  
      document.querySelector(".btnBeli").href = pesan;
  
      if (deskripsi === "<i>tidak ada informasi yang tersedia</i>") {
        document.querySelector(".btnBeli").classList.add("disabled");
      } else {
        document.querySelector(".btnBeli").classList.remove("disabled");
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
  
  document.addEventListener("DOMContentLoaded", function () {
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const quantityElement = document.getElementById("quantity");
  
    let quantity = 1;
  
    function updateQuantity() {
      quantityElement.textContent = quantity;
    }
  
    incrementButton.addEventListener("click", function () {
      quantity++;
      updateQuantity();
      updateWhatsAppLink(); // Memanggil fungsi untuk memperbarui tautan WhatsApp secara live
    });
  
    decrementButton.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--; // Pastikan jumlah tidak kurang dari 1
        updateQuantity();
        updateWhatsAppLink(); // Memanggil fungsi untuk memperbarui tautan WhatsApp secara live
      }
    });
  
    function updateWhatsAppLink() {
      let jumlah = parseInt(document.getElementById("quantity").textContent);
      //let nohp = "+628157771525"; // Ganti dengan nomor WhatsApp yang sesuai
      //let deskripsiClean = document.querySelector(".deskripsi").textContent;
      let deskripsiClean = document.getElementById("modalDeskripsi").textContent;
  
      // Memperbarui URL pesan WhatsApp dengan menggabungkan deskripsi produk dan jumlah unit yang benar secara live
      let pesan = `https://api.whatsapp.com/send?phone=${+628157771525}&text=Halo Kak, saya mau pesan produk ini: ${deskripsiClean} (${jumlah} pack)`;
  
      document.querySelector(".btnBeli").href = pesan;
    }
   
    
  
    updateQuantity();
    updateWhatsAppLink(); // Memanggil fungsi untuk menginisialisasi tautan WhatsApp saat halaman dimuat
  });

//   refreshButton.addEventListener("click", function () {
//   // Refresh halaman (Anda juga dapat memilih untuk mereset komponen lain sesuai kebutuhan)
//   location.reload();
// });

  
