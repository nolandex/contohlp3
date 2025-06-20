export const config = {
  hero: {
    badge: "Paket Bisnis Online",
    title: "Bangun Bisnis Online dalam Sekejap",
    description:
      "Bisnovo membantu Anda memiliki website, konten sosial media, chatbot, dan strategi promosi hanya dalam satu paket. Tanpa ribet. Tanpa coding.",
    buttons: [
      {
        text: "Pesan Sekarang",
        link: "https://wa.me/085156779923?text=Halo%2C%20saya%20ingin%20memesan%20Paket%20Setup%20Bisnis%20dari%20Bisnovo",
        icon: "ArrowUpRight",
      },
      {
        text: "Lihat Demo",
        link: "#demo",
        icon: "CirclePlay",
        variant: "outline",
      },
    ],
    image: "/images/bisnovo-hero.png",
  },

  features: {
    title: "Semua Kebutuhan Digital Anda dalam Satu Paket",
    items: [
      {
        icon: "Globe",
        title: "Website Profesional",
        description: "Dibuat cepat dan mobile-friendly, tampilkan produk atau jasa Anda secara elegan.",
        image: "/images/website.png",
      },
      {
        icon: "MessageCircleMore",
        title: "Chatbot WhatsApp & Instagram",
        description: "Auto-respon & bantu closing pelanggan tanpa harus standby terus.",
        image: "/images/chatbot.png",
      },
      {
        icon: "LayoutGrid",
        title: "Konten Sosial Media",
        description: "30+ desain konten siap posting, cocok untuk branding & promosi.",
        image: "/images/contents.png",
      },
      {
        icon: "TrendingUp",
        title: "Booster Sosmed",
        description: "Strategi engagement untuk menaikkan reach & followers akun Anda.",
        image: "/images/booster.png",
      },
      {
        icon: "PenLine",
        title: "Trik Copywriting",
        description: "Template kata-kata jualan yang terbukti menarik minat beli.",
        image: "/images/copywriting.png",
      },
      {
        icon: "Users",
        title: "Program Reseller",
        description: "Jual ulang dan dapatkan profit Rp20.000 per penjualan. Gratis bergabung.",
        image: "/images/reseller.png",
      },
    ],
  },

  testimonials: {
    title: "Apa Kata Mereka",
    items: [
      {
        id: 1,
        name: "Ayu Wulandari",
        designation: "Pemilik Online Shop",
        company: "DasterAyuu",
        testimonial:
          "Dulu bingung mulai dari mana. Setelah pakai Bisnovo, langsung punya website dan konten jualan! Worth it banget.",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      },
      {
        id: 2,
        name: "Denny Firmansyah",
        designation: "Reseller Bisnovo",
        company: "DF Agency",
        testimonial:
          "Jadi reseller Bisnovo gampang banget. Tinggal promosiin link aja, semua alat jualan udah disiapin.",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      {
        id: 3,
        name: "Nurul Azizah",
        designation: "Mahasiswa & Freelancer",
        company: "-",
        testimonial:
          "Aku order buat bantu klien UMKM. Semua tool dari Bisnovo langsung bisa dipakai. Gak nyangka cuma Rp200 ribu.",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      },
    ],
  },

  pricing: {
    title: "Paket Setup Bisnis Online",
    items: [
      {
        name: "Bisnovo Basic",
        price: 200000,
        description:
          "Paket lengkap setup bisnis online: website, konten, chatbot, copywriting, dan strategi promosi.",
        features: [
          "Website profesional (custom domain)",
          "Chatbot WhatsApp & IG",
          "30+ desain konten siap pakai",
          "Strategi boost sosial media",
          "Template copywriting jualan",
          "Program reseller (gratis)",
        ],
        buttonText: "Pesan Sekarang via WhatsApp",
        buttonLink: "https://wa.me/085156779923?text=Halo%2C%20saya%20ingin%20memesan%20Paket%20Bisnovo",
        isRecommended: true,
      },
    ],
  },

  faq: {
    title: "Pertanyaan Umum",
    description: "Temukan jawaban dari pertanyaan yang sering ditanyakan seputar layanan Bisnovo.",
    items: [
      {
        question: "Apakah saya harus bisa coding untuk menggunakan Bisnovo?",
        answer: "Tidak sama sekali. Semua sudah kami siapkan, Anda tinggal terima jadi dan langsung gunakan.",
      },
      {
        question: "Apakah bisa digunakan untuk bisnis dropship atau reseller?",
        answer:
          "Bisa. Justru kami mendesain Bisnovo agar cocok dipakai reseller, dropshipper, dan pemula sekalipun.",
      },
      {
        question: "Apakah saya bisa menjual kembali layanan Bisnovo?",
        answer:
          "Ya! Anda bisa jadi reseller Bisnovo secara gratis dan dapat profit Rp20.000 per penjualan. Kami siapkan tools dan web reseller-nya.",
      },
      {
        question: "Berapa lama proses setup setelah saya order?",
        answer: "Proses setup biasanya 1–2 hari kerja setelah data lengkap kami terima.",
      },
    ],
  },

  footer: {
    logo: {
      svg: "", // masukkan SVG logo Bisnovo jika ada
      description:
        "Bisnovo membantu Anda membangun bisnis online dari nol — dengan website, konten, chatbot, dan strategi promosi dalam satu paket.",
    },
    sections: [
      {
        title: "Produk",
        links: [
          { title: "Paket Setup Bisnis", href: "#pricing" },
          { title: "Fitur", href: "#features" },
          { title: "Demo", href: "#demo" },
          { title: "Testimoni", href: "#testimonials" },
          { title: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { title: "Tentang Bisnovo", href: "#" },
          { title: "Gabung Reseller", href: "https://wa.me/085156779923?text=Halo%2C%20saya%20ingin%20gabung%20reseller%20Bisnovo" },
          { title: "Kontak", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { title: "Syarat & Ketentuan", href: "#" },
          { title: "Kebijakan Privasi", href: "#" },
        ],
      },
    ],
    socialLinks: [
      { icon: "Instagram", href: "https://instagram.com/nolandavidco" },
      { icon: "WhatsApp", href: "https://wa.me/085156779923" },
    ],
    copyright: {
      text: "© 2025 Bisnovo. All rights reserved.",
      link: "https://bisnovo.my.id",
    },
  },
};
