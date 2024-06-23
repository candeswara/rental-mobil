document.addEventListener('DOMContentLoaded', function() {
    // You get the current window width
    var width = window.innerWidth;
  
    //Than you define the AOS settings for different widths
    if (width <= 600) { // For example, this can be for mobile devices
      AOS.init({
        offset: 200, 
        duration: 1000
      });
    } else if (width > 600 && width <= 900) { // And you make a condition for tablets too
      AOS.init({
        offset: 300,
        duration: 1200
      });
    } else { // Else for just, you know, desktops
      AOS.init();
    }
  });

const navEL = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 56){
    navEL.classList.add('navbar-scrolled');
  }else if (window.scrollY < 56){
    navEL.classList.remove('navbar-scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length === 0) {
    console.error('No elements found with the class "nav-link"');
    return;
  }
  window.addEventListener('scroll', () => {
    navLinks.forEach(navLink => {
      if (window.scrollY >= 56) {
        navLink.classList.add('text-white');
      } else {
        navLink.classList.remove('text-white');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinksHover = document.querySelectorAll('.nav-link');
  if (navLinksHover.length === 0) {
    console.error('No elements found with the class "nav-link"');
    return;
  }
  window.addEventListener('scroll', () => {
    navLinksHover.forEach(navLink => {
      if (window.scrollY >= 56) {
        navLink.classList.add('scrolled');
      } else {
        navLink.classList.remove('scrolled');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');
  const originalLogoSrc = '../assets/images/logo.png';
  const scrolledLogoSrc = '../assets/images/logo-scrolled.png';

  if (!logo) {
    console.error('No element found with the ID "logo"');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
      logo.src = scrolledLogoSrc;
    } else {
      logo.src = originalLogoSrc;
    }
  });
});


const x = document.getElementById('nama');
const y = document.getElementById('hari');
const telepon = document.getElementById('telepon');
const btntrans = document.getElementById('transaksi1');
const bayar = document.getElementById('inputGroupSelect01');
const mobilSelect = document.getElementById('mobilSelect');
const outputnama = document.getElementById('outnama');
const outputtelepon = document.getElementById('outtelepon');
const outputhari = document.getElementById('outhari');
const outputbayar = document.getElementById('outbayar');
const outputmobil = document.getElementById('outmobil');
const outputtotal = document.getElementById('outtotal');

const namaError = document.getElementById('namaError');
const teleponError = document.getElementById('teleponError');
const hariError = document.getElementById('hariError');

const rupiah = (t) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(t);
}

function validateInput() {
    let valid = true;

    // Reset error messages
    namaError.style.display = 'none';
    teleponError.style.display = 'none';
    hariError.style.display = 'none';

    // Validate nama
    if (x.value.trim() === "") {
        namaError.style.display = 'block';
        valid = false;
    }

    // Validate telepon
    if (telepon.value.trim() === "" || !/^\d+$/.test(telepon.value.trim())) {
        teleponError.style.display = 'block';
        valid = false;
    }

    // Validate hari
    if (y.value.trim() === "" || y.value <= 0) {
        hariError.style.display = 'block';
        valid = false;
    }

    return valid;
}

function muncul() {
    if (!validateInput()) {
        return;
    }

    const mobilInfo = mobilSelect.value.split('|');
    const mobilNama = mobilInfo[0];
    const mobilHarga = parseInt(mobilInfo[1]);
    let totalHarga = mobilHarga * y.value;

    outputnama.innerHTML = "Nama Penyewa : " + x.value;
    outputtelepon.innerHTML = "Nomor Telepon : " + telepon.value;
    outputhari.innerHTML = "Lama sewa : " + y.value + " Hari";
    outputbayar.innerHTML = "Dengan pembayaran menggunakan : " + bayar.value;
    outputmobil.innerHTML = "Mobil yang di sewa : " + mobilNama;
    outputtotal.innerHTML = "Dengan total pembayaran : " + rupiah(totalHarga);

    // Close the first modal
    var firstModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    firstModal.hide();

    // Open the second modal
    var secondModal = new bootstrap.Modal(document.getElementById('transaksi'));
    secondModal.show();
}

btntrans.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button behavior
    muncul();
});


