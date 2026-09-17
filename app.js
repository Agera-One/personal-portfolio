/* ============================================================
   Agera One — Backend Developer
   app.js (Fixed Layout & Grid Alignment)
   ============================================================ */

/* ——— DATA ——— */

const PROFIL = {
  nama: "Agera One",
  peran: "Backend Developer",
  kontak: [
    { 
      label: "Email", 
      nilai: "dzakiprasetyo8@gmail.com", 
      url: "mailto:dzakiprasetyo8@gmail.com" 
    },
    { 
      label: "GitHub", 
      nilai: "Agera-One", 
      url: "https://github.com/Agera-One" 
    },
    { 
      label: "Instagram", 
      nilai: "_jesko", 
      url: "https://instagram.com/_jesko" 
    },
  ],
};

const PROYEK = [
  {
    nomor: "01",
    nama: "Website Invoice Digital",
    ringkas:
      "Situs web pembuatan faktur adalah aplikasi berbasis PHP native yang digunakan untuk mengelola pelanggan, item, faktur, pembayaran, dan laporan penjualan.",
    peran: "Backend Developer",
    tahun: "2026",
    status: "Selesai",
    teknologi: ["HTML", "Javascript", "PHP", "Bootstrap"],
    fitur: [
      "Manajemen data pelanggan dan item/produk",
      "Pembuatan dan pengelolaan faktur",
      "Pencatatan dan pelacakan status pembayaran",
      "Laporan penjualan berdasarkan periode",
    ],
    gambar: [
      "invoice/dashboard.png",
      "invoice/invoice.png",
      "invoice/invoice-detail.png",
      "invoice/payment.png",
      "invoice/company.png"
    ],
    gambarJalur: "proyek-01.png",
    gambarKeterangan: "[Ganti dengan screenshot halaman utama proyek]",
    github: "https://github.com/Agera-One/invoicing-wevelope.git",
    demo: "https://jesko.semanggilima.my.id/",
  },
  {
    nomor: "02",
    nama: "Sistem Pengarsipan Dokumen",
    ringkas:
      "Platform digital yang dirancang untuk mengelola, menyimpan, dan menyusun dokumen secara efisien guna meminimalkan penggunaan kertas fisik (paperwork).",
    peran: "Fullstack Developer",
    tahun: "2025",
    status: "Selesai",
    teknologi: ["Laravel", "Tailwind CSS", "React"],
    fitur: [
      "Unggah dan penyimpanan dokumen dalam struktur folder/kategori",
      "Pencarian dokumen berdasarkan nama, kategori, atau tanggal",
      "Pengaturan hak akses dokumen per pengguna",
      "Riwayat aktivitas dokumen (unggah, ubah, hapus)",
    ],
    gambar: [
      "pengarsipan/dashboard.png",
      "pengarsipan/document.png"
    ],
    gambarJalur: "proyek-02.png",
    gambarKeterangan: "[Ganti dengan screenshot proyek]",
    github: "#",
    demo: null,
  },
  {
    nomor: "03",
    nama: "Sistem Pendaftaran Magang",
    ringkas:
      "Sistem yang dioptimalkan untuk menangani seluruh proses pengajuan magang, mulai dari pengiriman dokumen awal hingga tahapan seleksi administrasi.",
    peran: "Fullstack Developer",
    tahun: "2025",
    status: "Selesai",
    teknologi: ["Laravel", "Tailwind CSS", "Javascript"],
    fitur: [
      "Formulir pendaftaran dan unggah berkas persyaratan",
      "Verifikasi dan seleksi administrasi oleh admin",
      "Pelacakan status pendaftaran oleh pendaftar",
      "Notifikasi perubahan status pendaftaran",
    ],
    gambar: [
      "magang/lowongan.png",
      "magang/dashboard-siswa.png",
      "magang/dashboard-perusahaan.png",
      "magang/pelamar.png",
    ],
    gambarJalur: "proyek-03.png",
    gambarKeterangan: "[Ganti dengan screenshot proyek]",
    github: "#",
    demo: null,
  },
  {
    nomor: "04",
    nama: "Platform Publikasi Artikel",
    ringkas:
      "Pusat publikasi konten online yang memungkinkan pengguna untuk menulis, menyunting, dan membaca artikel/postingan blog dengan mudah.",
    peran: "Backend Developer",
    tahun: "2025",
    status: "Selesai",
    teknologi: ["Laravel", "Tailwind CSS", "Javascript"],
    fitur: [
      "Editor untuk menulis dan menyunting artikel",
      "Pengelolaan kategori dan tag artikel",
      "Manajemen status draf dan publikasi",
      "Halaman baca artikel untuk pengunjung",
    ],
    gambar: [
      "artikel/home.png",
      "artikel/recommend.png",
      "artikel/artikel.png",
    ],
    gambarJalur: "proyek-04.png",
    gambarKeterangan: "[Ganti dengan screenshot proyek]",
    github: "#",
    demo: null,
  },
  {
    nomor: "05",
    nama: "Website PPDB Sekolah",
    ringkas:
      "Platform digital Penerimaan Peserta Didik Baru (PPDB) yang memungkinkan calon siswa untuk melakukan pendaftaran sekolah secara online.",
    peran: "Backend Developer",
    tahun: "2025",
    status: "Selesai",
    teknologi: ["Laravel", "Tailwind CSS", "Javascript"],
    fitur: [
      "Formulir pendaftaran calon siswa secara online",
      "Unggah dokumen persyaratan (Ijazah, KK, Akta)",
      "Verifikasi dan validasi berkas pendaftaran oleh admin/panitia",
      "Pengumuman hasil seleksi penerimaan siswa baru",
    ],
    gambar: [
      "ppdb/alur.png",
      "ppdb/kelas.png",
      "ppdb/formulir.png",
    ],
    gambarJalur: "proyek-05.png",
    gambarKeterangan: "[Ganti dengan screenshot proyek]",
    github: "#",
    demo: null,
  },
];

/* ——— UTILITAS ——— */

const el = (tag, kelas, isi) => {
  const n = document.createElement(tag);
  if (kelas) n.className = kelas;
  if (isi !== undefined && isi !== null) n.textContent = isi;
  return n;
};

const adaIsi = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v));

/* ——— BAGIAN PROYEK & CAROUSEL ——— */

function buatKepala(proyek) {
  const kepala = el("div", "proyek-kepala muncul");
  kepala.appendChild(el("span", "proyek-nomor mono", proyek.nomor));
  kepala.appendChild(el("h3", "proyek-nama", proyek.nama));

  if (adaIsi(proyek.status)) {
    const status = el("span", "status");
    const titik = el(
      "span",
      "status-titik" +
        (proyek.status === "Sedang Dikembangkan" ? " aktif" : ""),
    );
    titik.setAttribute("aria-hidden", "true");
    status.appendChild(titik);
    status.appendChild(document.createTextNode(proyek.status));
    kepala.appendChild(status);
  }
  return kepala;
}

function buatGambarCarousel(proyek) {
  const bingkai = el("div", "bingkai");

  const kepala = el("div", "bingkai-kepala");
  const titik = el("span", "bingkai-titik");
  titik.setAttribute("aria-hidden", "true");
  titik.append(el("span"), el("span"), el("span"));
  kepala.appendChild(titik);
  kepala.appendChild(
    el("span", "bingkai-jalur", proyek.gambarJalur || proyek.nama),
  );
  bingkai.appendChild(kepala);

  const container = el("div", "carousel-container");
  const track = el("div", "carousel-track");

  const gambarList =
    Array.isArray(proyek.gambar) && proyek.gambar.length > 0
      ? proyek.gambar
      : [null];

  gambarList.forEach((src) => {
    const slide = el("div", "carousel-slide");
    if (src) {
      const img = el("img");
      img.src = src;
      img.alt = "Screenshot " + proyek.nama;
      img.loading = "lazy";
      slide.appendChild(img);
    } else {
      const isi = el("div", "bingkai-isi");
      isi.setAttribute("role", "img");
      const kisi = el("span", "bingkai-kisi");
      kisi.setAttribute("aria-hidden", "true");
      isi.appendChild(kisi);
      isi.appendChild(
        el(
          "p",
          "bingkai-teks",
          proyek.gambarKeterangan || "[Ganti dengan screenshot proyek]",
        ),
      );
      slide.appendChild(isi);
    }
    track.appendChild(slide);
  });

  container.appendChild(track);

  if (gambarList.length > 1) {
    let indexSekarang = 0;

    const btnPrev = el("button", "carousel-btn prev", "‹");
    const btnNext = el("button", "carousel-btn next", "›");
    const dotsWadah = el("div", "carousel-dots");

    const updateCarousel = (idx) => {
      indexSekarang = idx;
      track.style.transform = `translateX(-${indexSekarang * 100}%)`;
      dotsWadah.querySelectorAll(".carousel-dot").forEach((d, i) => {
        d.classList.toggle("active", i === indexSekarang);
      });
    };

    gambarList.forEach((_, i) => {
      const dot = el("button", "carousel-dot" + (i === 0 ? " active" : ""));
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        updateCarousel(i);
      });
      dotsWadah.appendChild(dot);
    });

    btnPrev.addEventListener("click", (e) => {
      e.preventDefault();
      const newIdx =
        (indexSekarang - 1 + gambarList.length) % gambarList.length;
      updateCarousel(newIdx);
    });

    btnNext.addEventListener("click", (e) => {
      e.preventDefault();
      const newIdx = (indexSekarang + 1) % gambarList.length;
      updateCarousel(newIdx);
    });

    container.appendChild(btnPrev);
    container.appendChild(btnNext);
    container.appendChild(dotsWadah);
  }

  bingkai.appendChild(container);

  const figure = el("figure");
  figure.style.margin = "0";
  figure.appendChild(bingkai);

  const kaki = el("figcaption", "bingkai-kaki");
  kaki.appendChild(el("span", null, "Screenshot proyek"));
  if (proyek.github || proyek.demo) {
    kaki.appendChild(el("span", "bingkai-petunjuk", "Prinjau Proyek"));
  }
  figure.appendChild(kaki);

  return figure;
}

function buatMeta(proyek) {
  const isi = [];
  if (adaIsi(proyek.peran)) isi.push(["Peran", proyek.peran]);
  if (adaIsi(proyek.tahun)) isi.push(["Tahun", proyek.tahun]);
  if (!isi.length) return null;

  const dl = el("dl", "meta");
  isi.forEach(([label, nilai]) => {
    const blok = el("div");
    blok.appendChild(el("dt", null, label));
    blok.appendChild(el("dd", null, nilai));
    dl.appendChild(blok);
  });
  return dl;
}

function buatDaftar(judul, item, kelas) {
  if (!adaIsi(item)) return null;
  const blok = el("div");
  blok.appendChild(el("h4", "blok-judul", judul));
  const ul = el("ul", kelas);
  item.forEach((t) =>
    ul.appendChild(el("li", null, kelas === "daftar-fitur" ? "— " + t : t)),
  );
  blok.appendChild(ul);
  return blok;
}

function buatTautan(proyek) {
  if (!proyek.github && !proyek.demo) return null;
  const blok = el("div", "proyek-tautan");
  const tambah = (teks, url) => {
    const a = el("a", "tautan");
    a.href = url;
    a.appendChild(document.createTextNode(teks + " "));
    a.appendChild(el("span", "panah", "↗"));
    blok.appendChild(a);
  };
  if (proyek.github) tambah("Lihat di GitHub", proyek.github);
  if (proyek.demo) tambah("Lihat Demo", proyek.demo);
  return blok;
}

function bungkus(anak, kelas, tunda) {
  const n = el("div", kelas ? "muncul " + kelas : "muncul");
  if (tunda) n.style.setProperty("--tunda", tunda + "ms");
  n.appendChild(anak);
  return n;
}

function buatProyek(proyek, indeks) {
  const artikel = el("article", "proyek");

  /* 1. Tempatkan Judul di atas Grid */
  artikel.appendChild(buatKepala(proyek));

  /* 2. Container Grid khusus Gambar & Samping */
  const grid = el("div", "grid proyek-grid");
  artikel.appendChild(grid);

  const gambarKanan = indeks % 2 === 1;
  const gambar = buatGambarCarousel(proyek);
  const meta = buatMeta(proyek);
  const fitur = buatDaftar("Fitur Utama", proyek.fitur, "daftar-fitur");
  const teknologi = buatDaftar(
    "Teknologi",
    proyek.teknologi,
    "daftar-teknologi",
  );
  const tautan = buatTautan(proyek);

  /* Kolom Detail / Samping */
  const samping = el("div", "proyek-samping");
  if (adaIsi(proyek.ringkas))
    samping.appendChild(el("p", "proyek-ringkas", proyek.ringkas));
  if (meta) samping.appendChild(meta);
  if (fitur) samping.appendChild(fitur);
  if (teknologi) samping.appendChild(teknologi);
  if (tautan) samping.appendChild(tautan);

  /* 3. Bungkus dengan span grid k-7 dan k-5 secara rapi */
  const divGambar = bungkus(
    gambar,
    "k-7 " + (gambarKanan ? "urut-2" : "urut-1"),
    100,
  );
  const divSamping = bungkus(
    samping,
    "k-5 " + (gambarKanan ? "urut-1" : "urut-2"),
    160,
  );

  grid.appendChild(divGambar);
  grid.appendChild(divSamping);

  return artikel;
}

function pasangProyek() {
  const wadah = document.getElementById("daftar-proyek");
  if (!wadah) return;
  const frag = document.createDocumentFragment();
  PROYEK.forEach((p, i) => frag.appendChild(buatProyek(p, i)));
  wadah.appendChild(frag);
}

/* ——— BAGIAN KONTAK ——— */

function ikonKontak(label) {
  const s = label.trim().toLowerCase();
  if (s.startsWith("email")) return "@";
  if (s.startsWith("github")) return "GH";
  if (s.startsWith("linkedin")) return "in";
  if (s.startsWith("instagram")) return "IG";
  return label.slice(0, 2).toUpperCase();
}

function pasangKontak() {
  const wadah = document.getElementById("kontak-daftar");
  if (!wadah) return;
  PROFIL.kontak.forEach((k) => {
    const li = el("li");

    li.appendChild(el("span", "kontak-ikon", ikonKontak(k.label)));

    const teks = el("div", "kontak-teks");
    teks.appendChild(el("span", "kontak-label", k.label));
    if (k.url) {
      const a = el("a", "kontak-nilai tautan");
      a.href = k.url;
      a.appendChild(document.createTextNode(k.nilai + " "));
      a.appendChild(el("span", "panah", "↗"));
      teks.appendChild(a);
    } else {
      teks.appendChild(el("span", "kontak-nilai", k.nilai));
    }
    li.appendChild(teks);

    if (!k.url && !k.nilai.startsWith("[")) {
      const btn = el("button", "kontak-salin", "Salin");
      btn.type = "button";
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(k.nilai);
          btn.textContent = "Tersalin";
          btn.classList.add("disalin");
          setTimeout(() => {
            btn.textContent = "Salin";
            btn.classList.remove("disalin");
          }, 1600);
        } catch (err) {
          /* Clipboard tidak tersedia — tombol dibiarkan diam-diam tanpa aksi */
        }
      });
      li.appendChild(btn);
    }

    wadah.appendChild(li);
  });
}

/* ——— ANIMASI SAAT MASUK VIEWPORT ——— */

function pasangMuncul() {
  const target = document.querySelectorAll(".muncul, .garis");
  if (!("IntersectionObserver" in window)) {
    target.forEach((t) => t.classList.add("tampil"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("tampil");
        obs.unobserve(e.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  target.forEach((t) => obs.observe(t));
}

/* ——— NAVIGASI ——— */

function pasangNavigasi() {
  const header = document.getElementById("situs-header");
  const isi = document.getElementById("progres-isi");
  const tombol = document.getElementById("nav-tombol");
  const menu = document.getElementById("nav-menu");

  const onScroll = () => {
    if (header) header.classList.toggle("teduh", window.scrollY > 24);
    if (isi) {
      const tinggi = document.documentElement.scrollHeight - window.innerHeight;
      isi.style.width =
        (tinggi > 0 ? (window.scrollY / tinggi) * 100 : 0) + "%";
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  if (tombol && menu) {
    const setBuka = (buka) => {
      menu.hidden = !buka;
      tombol.setAttribute("aria-expanded", String(buka));
      tombol.textContent = buka ? "Tutup" : "Menu";
    };
    tombol.addEventListener("click", () => setBuka(menu.hidden));
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") setBuka(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setBuka(false);
    });
  }

  const bagian = ["beranda", "proyek", "tentang", "teknologi", "kontak"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!bagian.length || !("IntersectionObserver" in window)) return;

  const tandai = (id) => {
    document.querySelectorAll("[data-nav]").forEach((a) => {
      a.classList.toggle("aktif", a.dataset.nav === id);
      if (a.classList.contains("nav-tautan")) {
        if (a.dataset.nav === id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      }
    });
  };

  const obs = new IntersectionObserver(
    (entries) => {
      const terlihat = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (terlihat[0]) tandai(terlihat[0].target.id);
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] },
  );

  bagian.forEach((b) => obs.observe(b));
}

/* ——— STATISTIK HERO (diambil dari data nyata) ——— */

function pasangStatistik() {
  const target = document.getElementById("stat-proyek");
  if (target) target.textContent = PROYEK.length + " Proyek";
}

/* ——— MULAI ——— */

document.addEventListener("DOMContentLoaded", () => {
  pasangProyek();
  pasangKontak();
  pasangStatistik();
  pasangMuncul();
  pasangNavigasi();
});
