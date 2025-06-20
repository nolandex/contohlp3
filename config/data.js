// Anda bisa menempatkan ini di file seperti /config/data.ts atau /lib/config.js

// Impor 'ReactNode' jika Anda menggunakan TypeScript dan ingin tipe yang lebih ketat untuk SVG
// import { ReactNode } from "react";

export const config = {
  // --- NAMA BRAND & INFO UMUM ---
  // Ubah nama website Anda di sini, maka semua bagian website akan ikut berubah.
  brandName: "AI Potret ID", // <--- PUSAT NAMA WEBSITE

  // --- BAGIAN HERO ---
  hero: {
    badge: "Layanan Baru!",
    title: "Ubah Foto Biasa Jadi Potret Luar Biasa dengan AI",
    description:
      "Dapatkan potret artistik berkualitas tinggi yang dibuat oleh teknologi AI canggih. Sempurna untuk foto profil media sosial, CV, atau hadiah unik.",
    buttons: [
      {
        text: "Lihat Paket Harga",
        link: "#pricing", // Arahkan ke bagian harga
        icon: "ArrowUpRight",
      },
      {
        text: "Hubungi Kami",
        link: "https://wa.me/085156779923?text=Halo,%20saya%20tertarik%20dengan%20jasa%20AI%20potret.", // Link WhatsApp langsung
        icon: "CirclePlay",
        variant: "outline",
      },
    ],
    image: "/images/hero-image.jpg", // Ganti dengan gambar hero Anda
  },

  // --- BAGIAN FITUR ---
  features: {
    title: "Kenapa Memilih Layanan Kami?",
    items: [
      {
        icon: "Zap",
        title: "Proses Cepat & Efisien",
        description:
          "Tidak perlu menunggu lama. Potret AI Anda akan siap dalam hitungan jam, bahkan menit!",
        image: "/images/fitur-1.jpg", // Ganti dengan gambar yang sesuai
      },
      {
        icon: "BookCheck",
        title: "Gaya Artistik Beragam",
        description:
          "Pilih dari puluhan gaya seni yang unik, mulai dari realistik, kartun, hingga lukisan cat minyak.",
        image: "/images/fitur-2.jpg", // Ganti dengan gambar yang sesuai
      },
      {
        icon: "Goal",
        title: "Hasil Resolusi Tinggi",
        description:
          "Dapatkan file gambar dengan kualitas terbaik, tajam, dan siap untuk dicetak atau diunggah.",
        image: "/images/fitur-3.jpg", // Ganti dengan gambar yang sesuai
      },
      {
        icon: "Users",
        title: "Sempurna Untuk Semua Kebutuhan",
        description:
          "Cocok untuk foto profil LinkedIn, Instagram, CV, branding pribadi, atau sebagai hadiah.",
        image: "/images/fitur-4.jpg", // Ganti dengan gambar yang sesuai
      },
      {
        icon: "ChartPie",
        title: "Harga Terjangkau",
        description:
          "Nikmati kualitas potret studio profesional dengan biaya yang jauh lebih hemat.",
        image: "/images/fitur-5.jpg", // Ganti dengan gambar yang sesuai
      },
      {
        icon: "FolderSync",
        title: "Privasi Terjamin",
        description:
          "Kami menghargai privasi Anda. Foto yang Anda unggah akan dihapus setelah potret selesai dibuat.",
        image: "/images/fitur-6.jpg", // Ganti dengan gambar yang sesuai
      },
    ],
  },

  // --- BAGIAN TESTIMONI ---
  testimonials: {
    title: "Apa Kata Mereka?",
    items: [
      {
        id: 1,
        name: "Andi Saputra",
        designation: "Selebgram",
        company: "@andisaputra",
        testimonial:
          "Keren banget hasilnya! Foto profilku jadi lebih profesional dan menarik banyak perhatian. Prosesnya juga cepet banget. Recommended!",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        name: "Citra Lestari",
        designation: "Mahasiswi",
        company: "Universitas Gadjah Mada",
        testimonial:
          "Aku pakai ini buat foto CV dan LinkedIn. Hasilnya rapi dan profesional, beda dari yang lain. Temen-temenku sampai nanya bikin di mana.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: 3,
        name: "Budi Santoso",
        designation: "Freelancer",
        company: "Upwork",
        testimonial:
          "Sebagai freelancer, branding itu penting. Layanan ini bantu aku bikin foto profil yang 'menjual' dan terpercaya. Harganya juga pas di kantong.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: 4,
        name: "Dewi Anggraini",
        designation: "Pengusaha",
        company: "Kue Lezat",
        testimonial:
          "Saya pesan untuk hadiah ulang tahun suami, dan dia suka banget! Hasilnya unik dan artistik. Pelayanannya juga ramah via WhatsApp.",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
  },

  // --- BAGIAN HARGA ---
  pricing: {
    title: "Paket Harga",
    items: [
      {
        name: "Starter",
        price: 19, // Harga dalam ribuan Rupiah, misalnya 19.000
        description: "Dapatkan 20 potret AI dengan 2 pilihan gaya unik.",
        features: [
          "Waktu proses ~5 jam",
          "20 potret AI",
          "Pilihan 2 gaya",
          "Pilihan 2 filter",
          "2 kredit perbaikan (retouch)",
        ],
        buttonText: "Pesan Paket Starter",
        buttonLink: "https://wa.me/085156779923?text=Halo,%20saya%20tertarik%20dengan%20paket%20Starter.",
      },
      {
        name: "Advanced",
        price: 29,
        isRecommended: true,
        description: "Dapatkan 50 potret AI dengan 5 pilihan gaya unik.",
        features: [
          "Waktu proses ~3 jam",
          "50 potret AI",
          "Pilihan 5 gaya",
          "Pilihan 5 filter",
          "5 kredit perbaikan (retouch)",
        ],
        buttonText: "Pesan Paket Advanced",
        buttonLink: "https://wa.me/085156779923?text=Halo,%20saya%20tertarik%20dengan%20paket%20Advanced.",
        isPopular: true,
      },
      {
        name: "Premium",
        price: 49,
        description: "Dapatkan 100 potret AI dengan 10 pilihan gaya unik.",
        features: [
          "Waktu proses prioritas ~1 jam",
          "100 potret AI",
          "Pilihan 10 gaya",
          "Pilihan 10 filter",
          "10 kredit perbaikan (retouch)",
        ],
        buttonText: "Pesan Paket Premium",
        buttonLink: "https://wa.me/085156779923?text=Halo,%20saya%20tertarik%20dengan%20paket%20Premium.",
      },
    ],
  },

  // --- BAGIAN FAQ (PERTANYAAN UMUM) ---
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    description:
      "Temukan jawaban cepat untuk pertanyaan umum mengenai layanan kami.",
    items: [
      {
        question: "Bagaimana cara kerjanya?",
        answer:
          "Anda cukup mengirimkan beberapa foto selfie Anda, pilih paket dan gaya yang diinginkan, lalu lakukan pembayaran. Kami akan memprosesnya dan mengirimkan hasilnya langsung kepada Anda.",
      },
      {
        question: "Foto seperti apa yang harus saya kirim?",
        answer:
          "Kirimkan 10-15 foto selfie dengan berbagai ekspresi dan sudut pandang, serta pencahayaan yang baik. Hindari menggunakan kacamata hitam, masker, atau foto yang buram.",
      },
      {
        question: "Berapa lama proses pembuatannya?",
        answer:
          "Tergantung pada paket yang Anda pilih. Paket Premium kami memiliki waktu proses prioritas sekitar 1 jam, sementara paket lain berkisar antara 3-5 jam.",
      },
      {
        question: "Dalam format apa saya akan menerima hasilnya?",
        answer:
          "Anda akan menerima file gambar dalam format JPG atau PNG dengan resolusi tinggi yang bisa langsung Anda gunakan atau cetak.",
      },
      {
        question: "Apakah privasi foto saya aman?",
        answer:
          "Tentu saja. Kami sangat menjaga privasi pelanggan. Foto asli yang Anda kirim akan kami hapus dari sistem kami setelah potret AI Anda selesai dibuat dan dikirimkan.",
      },
      {
        question: "Bisakah saya meminta revisi?",
        answer:
          "Setiap paket memiliki 'kredit perbaikan' (retouch credit) yang bisa Anda gunakan jika ada detail kecil yang ingin disesuaikan. Hubungi kami untuk info lebih lanjut.",
      },
    ],
  },

  // --- BAGIAN FOOTER ---
  footer: {
    logo: {
      // Ganti SVG ini dengan logo bisnis Anda jika ada
      svg: `<svg id="logo-7" width="124" height="32" viewBox="0 0 124 32" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>`,
      description:
        "Menciptakan potret digital luar biasa yang membawa lebih banyak senyum di dunia maya.",
    },
    sections: [
      {
        title: "Layanan",
        links: [
          { title: "Tentang Kami", href: "#" },
          { title: "Fitur", href: "#features" },
          { title: "Galeri Hasil", href: "#" }, // Anda bisa membuat bagian galeri
          { title: "Harga", href: "#pricing" },
        ],
      },
      {
        title: "Dukungan",
        links: [
          { title: "FAQ", href: "#faq" },
          { title: "Hubungi Kami (WA)", href: "https://wa.me/085156779923" },
          { title: "Syarat & Ketentuan", href: "#" },
          { title: "Kebijakan Privasi", href: "#" },
        ],
      },
    ],
    socialLinks: [
      // Ganti link '#' dengan link media sosial Anda
      { icon: "TwitterIcon", href: "#" }, 
      { icon: "DribbbleIcon", href: "#" }, // Mungkin lebih cocok Instagram atau TikTok
      { icon: "GithubIcon", href: "#" },
    ],
    copyright: {
       // Teks ini akan menggunakan brandName dari atas secara otomatis
      text: `© {YEAR} AI Potret ID. Hak Cipta Dilindungi.`, // <--- Baris ini sekarang statis lagi untuk kesederhanaan, tapi bisa dibuat dinamis jika dibutuhkan
      link: "#",
    },
  },
};
