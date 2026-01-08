// Data Lengkap Destinasi Wisata Lombok Timur (Lotim)
const destinations = [
    // 1. Wisata Pantai
    {
        id: 1,
        name: "Pantai Tangsi (Pantai Pink)",
        location: "Jerowaru, Lombok Timur",
        category: "Pantai",
        price: "Rp 10.000",
        hours: "06.00 - 18.00",
        facilities: ["Perahu", "Warung", "Gazebo"],
        shortDesc: "Pantai ikonik dengan pasir berwarna merah muda alami.",
        description: "Salah satu dari sedikit pantai pink di dunia. Warna pink berasal dari serpihan karang merah yang bercampur pasir putih.",
        image: "https://images.unsplash.com/photo-1707038342414-0414006c5963?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Pantai Pink Segui",
        location: "Lombok Timur",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Alami"],
        shortDesc: "Varian pantai pink yang lebih sepi dan privat.",
        description: "Terletak tidak jauh dari Pantai Tangsi, menawarkan ketenangan dengan gradasi warna pasir pink yang juga memukau.",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Pantai Tanjung Ringgit",
        location: "Jerowaru, Lombok Timur",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Spot Foto", "Peninggalan Sejarah"],
        shortDesc: "Tebing karang megah dengan meriam peninggalan Jepang.",
        description: "Menghadap Samudera Hindia dengan tebing curam. Terdapat gua dan meriam peninggalan tentara Jepang Perang Dunia II.",
        image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Pantai Ekas",
        location: "Jerowaru, Lombok Timur",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Resort", "Surfing"],
        shortDesc: "Teluk tenang favorit peselancar dan pemancing.",
        description: "Terkenal dengan ombak surfing yang konsisten di luar teluk dan air tenang di dalam teluk.",
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Pantai Tanjung Bloam",
        location: "Jerowaru",
        category: "Pantai",
        price: "Rp 10.000",
        hours: "24 Jam",
        facilities: ["Spot Foto"],
        shortDesc: "Formasi batuan kuning cadas yang kontras dengan laut biru.",
        description: "Pemandangan tebing batuan kapur yang menjorok ke laut, diapit dua tebing karang menjulang.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Pantai Kaliantan",
        location: "Jerowaru",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Area Bau Nyale"],
        shortDesc: "Pantai luas tempat tradisi Bau Nyale.",
        description: "Garis pantai sangat panjang. Lokasi upacara adat menangkap cacing laut (Nyale) setiap tahun.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Pantai Labuhan Haji",
        location: "Labuhan Haji",
        category: "Pantai",
        price: "Rp 2.000",
        hours: "06.00 - 18.00",
        facilities: ["Taman", "Warung"],
        shortDesc: "Pantai kota dengan view sunrise yang indah.",
        description: "Tempat rekreasi keluarga di pagi hari untuk melihat matahari terbit. Ramai saat akhir pekan.",
        image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Pantai Surga",
        location: "Ekas",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Alami"],
        shortDesc: "Pantai tersembunyi dengan pasir putih halus.",
        description: "Sesuai namanya, keindahannya seperti surga yang tersembunyi. Akses jalan cukup menantang.",
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Pantai Penyisok",
        location: "Jerowaru",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Padang Savana"],
        shortDesc: "Padang savana luas di atas tebing laut.",
        description: "Perpaduan tebing karang berlapis-lapis dan padang rumput hijau yang luas langsung menghadap laut lepas.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Pantai Cemara",
        location: "Lombok Timur",
        category: "Pantai",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Warung"],
        shortDesc: "Pantai tenang untuk keluarga.",
        description: "Ombak yang tenang menjadikannya aman untuk anak-anak berenang.",
        image: "https://images.unsplash.com/photo-1520942702018-086521279b5c?auto=format&fit=crop&w=600&q=80"
    },

    // 2. Wisata Gili / Laut
    {
        id: 20,
        name: "Gili Kondo",
        location: "Sambelia",
        category: "Gili",
        price: "Rp 25.000 (Boat)",
        hours: "07.00 - 17.00",
        facilities: ["Camping Ground", "Snorkeling"],
        shortDesc: "Gili tak berpenghuni dengan pasir putih di Selat Alas.",
        description: "Menawarkan ketenangan absolut. Air sangat jernih dan terumbu karang masih sangat terjaga.",
        image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 21,
        name: "Gili Bidara",
        location: "Sambelia",
        category: "Gili",
        price: "Via Gili Kondo",
        hours: "24 Jam",
        facilities: ["Alami"],
        shortDesc: "Pulau kecil dengan pemukiman nelayan sederhana.",
        description: "Salah satu spot snorkeling terbaik di Lombok Timur dengan taman laut yang indah.",
        image: "https://images.unsplash.com/photo-1621868361665-2ba43135c320?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 22,
        name: "Gili Kapal",
        location: "Sambelia",
        category: "Gili",
        price: "Via Gili Kondo",
        hours: "Saat Surut",
        facilities: ["Tidak Ada"],
        shortDesc: "Pasir timbul di tengah laut (Sandbar).",
        description: "Gili ini akan hilang saat air pasang. Seolah-olah berjalan di atas air saat surut.",
        image: "https://images.unsplash.com/photo-1596423984572-1c25c6a7a55c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 23,
        name: "Gili Petagan",
        location: "Sambelia",
        category: "Gili",
        price: "Via Boat",
        hours: "08.00 - 17.00",
        facilities: ["Hutan Bakau"],
        shortDesc: "Pulau yang ditutupi hutan bakau Amazon-nya Lombok.",
        description: "Sensasi menyusuri lorong hutan bakau purba dengan perahu saat air pasang.",
        image: "https://images.unsplash.com/photo-1598588887647-750106828591?auto=format&fit=crop&w=600&q=80"
    },

    // 3. Wisata Gunung
    {
        id: 30,
        name: "Gunung Rinjani",
        location: "Sembalun",
        category: "Gunung",
        price: "Rp 150.000 / Hari",
        hours: "24 Jam",
        facilities: ["Pos Ranger", "Porter", "Camping"],
        shortDesc: "Atap Lombok 3.726 MDPL.",
        description: "Puncak tertinggi kedua di Indonesia. Jalur Sembalun adalah rute favorit pendaki untuk mencapai puncak.",
        image: "https://images.unsplash.com/photo-1555050556-2db479da78eb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 31,
        name: "Gunung Anak Dara",
        location: "Sembalun",
        category: "Gunung",
        price: "Rp 15.000",
        hours: "24 Jam",
        facilities: ["Pos Parkir"],
        shortDesc: "Tanjakan 'Cinta' mematikan dengan view Rinjani.",
        description: "Salah satu bukit tertinggi di Sembalun. Treknya terjal namun view sunset dan sunrise-nya juara.",
        image: "https://images.unsplash.com/photo-1542617478-43e9903930b8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 32,
        name: "Gunung Nanggi",
        location: "Sembalun",
        category: "Gunung",
        price: "Rp 15.000",
        hours: "24 Jam",
        facilities: ["Area Camping"],
        shortDesc: "Gunung purba dinding kaldera Sembalun.",
        description: "Tujuh bukit tertinggi (Seven Summit) Sembalun. Menawarkan view 360 derajat.",
        image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9dab?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 33,
        name: "Gunung Sangkareang",
        location: "Sembalun",
        category: "Gunung",
        price: "Rp 20.000",
        hours: "24 Jam",
        facilities: ["Alami"],
        shortDesc: "Puncak kedua Rinjani yang jarang didaki.",
        description: "Jalur teknis dan menantang. Sering disebut sebagai 'kepala' Rinjani.",
        image: "https://images.unsplash.com/photo-1505993597083-d3f2a9d83231?auto=format&fit=crop&w=600&q=80"
    },

    // 4. Wisata Bukit
    {
        id: 40,
        name: "Bukit Pergasingan",
        location: "Sembalun",
        category: "Bukit",
        price: "Rp 15.000",
        hours: "24 Jam",
        facilities: ["Toilet", "Warung"],
        shortDesc: "Bukit di atas awan terpopuler.",
        description: "Cukup 3-4 jam hiking. View petak sawah Sembalun yang warna-warni sangat jelas dari sini.",
        image: "https://images.unsplash.com/photo-1589133860538-2329df05d15a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 41,
        name: "Bukit Selong",
        location: "Sembalun",
        category: "Bukit",
        price: "Rp 5.000",
        hours: "24 Jam",
        facilities: ["Spot Bambu"],
        shortDesc: "Spot foto Desa Adat Beleq.",
        description: "Bukit rendah yang sangat mudah diakses anak-anak dan lansia. Spot foto Instagramable.",
        image: "https://images.unsplash.com/photo-1596401057633-565652f12251?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 42,
        name: "Bukit Sempana",
        location: "Sembalun",
        category: "Bukit",
        price: "Rp 10.000",
        hours: "24 Jam",
        facilities: ["Alami"],
        shortDesc: "Bukit dengan view padang savana luas.",
        description: "Termasuk Seven Summit Sembalun. Jalurnya melewati hutan dan berakhir di savana luas.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
    },

    // 5. Wisata Air Terjun
    {
        id: 50,
        name: "Air Terjun Mangku Sakti",
        location: "Sembalun",
        category: "Air Terjun",
        price: "Rp 10.000",
        hours: "08.00 - 17.00",
        facilities: ["Parkir", "Ojek"],
        shortDesc: "Air terjun belerang berwarna toska.",
        description: "Air mengandung belerang dari Rinjani, berwarna putih kebiruan. Dikelilingi batuan cadas putih.",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 51,
        name: "Air Terjun Jeruk Manis",
        location: "Tetebatu",
        category: "Air Terjun",
        price: "Rp 5.000",
        hours: "07.00 - 17.00",
        facilities: ["Jalur Rapi"],
        shortDesc: "Air terjun di hutan lindung TNGR.",
        description: "Suasana sangat asri dan sejuk. Dipercaya airnya bisa menyembuhkan penyakit dan menyuburkan rambut.",
        image: "https://images.unsplash.com/photo-1563296291-7d63944cb5a3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 52,
        name: "Air Terjun Umar Maya",
        location: "Sembalun",
        category: "Air Terjun",
        price: "Rp 5.000",
        hours: "08.00 - 17.00",
        facilities: ["Alami"],
        shortDesc: "Kolam alami berwarna biru.",
        description: "Terletak dekat Mangku Sakti. Airnya tenang seperti kolam renang pribadi di tengah hutan.",
        image: "https://images.unsplash.com/photo-1518182170546-0766aaef31e2?auto=format&fit=crop&w=600&q=80"
    },

    // 6. Wisata Desa & Alam
    {
        id: 60,
        name: "Desa Wisata Tetebatu",
        location: "Sikur",
        category: "Desa & Alam",
        price: "Gratis",
        hours: "24 Jam",
        facilities: ["Homestay", "Restoran"],
        shortDesc: "Ubud-nya Lombok.",
        description: "Pemandangan sawah terasering yang hijau dengan latar Gunung Rinjani. Suasana sangat tenang dan sejuk.",
        image: "https://images.unsplash.com/photo-1505993597083-d3f2a9d83231?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 61,
        name: "Desa Wisata Loyok",
        location: "Sikur",
        category: "Desa & Alam",
        price: "Gratis",
        hours: "08.00 - 17.00",
        facilities: ["Artshop"],
        shortDesc: "Pusat kerajinan anyaman bambu.",
        description: "Tempat melihat proses pembuatan anyaman bambu berkualitas tinggi khas Lombok.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sade_Village_Lombok.jpg"
    },
    {
        id: 62,
        name: "Savana Propok",
        location: "Sembalun",
        category: "Desa & Alam",
        price: "Rp 15.000",
        hours: "24 Jam",
        facilities: ["Camping Ground"],
        shortDesc: "Savana luas mirip New Zealand.",
        description: "Hamparan rumput luas yang sangat eksotis, terutama saat berkabut.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 63,
        name: "Pringgasela",
        location: "Pringgasela",
        category: "Desa & Alam",
        price: "Gratis",
        hours: "08.00 - 20.00",
        facilities: ["Galeri Tenun"],
        shortDesc: "Sentra tenun pewarna alam.",
        description: "Terkenal dengan kain tenunnya yang menggunakan pewarna alami dari akar dan kulit kayu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Desa_Sade%2C_Lombok.jpg/640px-Desa_Sade%2C_Lombok.jpg"
    },

    // 7. Wisata Budaya & Sejarah
    {
        id: 70,
        name: "Kampung Adat Sembalun (Desa Beleq)",
        location: "Sembalun",
        category: "Budaya",
        price: "Donasi",
        hours: "08.00 - 17.00",
        facilities: ["Rumah Adat"],
        shortDesc: "Desa pertama di Sembalun.",
        description: "Terdapat 7 rumah adat asli yang masih dijaga kelestariannya. Saksi sejarah peradaban Sembalun.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sade_Village_Lombok.jpg"
    },
    {
        id: 71,
        name: "Makam Ratu Mas Malela",
        location: "Labuhan Haji",
        category: "Budaya",
        price: "Gratis",
        hours: "08.00 - 17.00",
        facilities: ["Area Ziarah"],
        shortDesc: "Situs bersejarah penyebaran Islam.",
        description: "Makam bersejarah yang sering dikunjungi peziarah, memiliki nilai historis tinggi.",
        image: "https://images.unsplash.com/photo-1565038930214-09566ed8e37e?auto=format&fit=crop&w=600&q=80"
    }
];

// Group Configuration
const categoryGroups = {
    "1. Wisata Pantai 🏖️": ["Pantai"],
    "2. Wisata Gili / Laut ⛵": ["Gili"],
    "3. Wisata Gunung ⛰️": ["Gunung"],
    "4. Wisata Bukit 🌄": ["Bukit"],
    "5. Wisata Air Terjun 💦": ["Air Terjun"],
    "6. Wisata Desa & Alam 🌿": ["Desa & Alam"],
    "7. Wisata Budaya & Sejarah 🏛️": ["Budaya"]
};

// DOM Elements
const destinationsContainer = document.getElementById('destinations-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Modal Elements
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');

function init() {
    renderByCategory();
}

function renderByCategory() {
    destinationsContainer.innerHTML = '';
    // Disable grid layout for the main container
    destinationsContainer.style.display = 'block';

    for (const [groupName, categories] of Object.entries(categoryGroups)) {
        // Filter items for this group
        const groupItems = destinations.filter(d => categories.includes(d.category));

        if (groupItems.length > 0) {
            // Create Section Wrapper
            const section = document.createElement('div');
            section.className = 'category-section';
            section.style.marginBottom = '4rem';

            // Title
            const title = document.createElement('h3');
            title.textContent = groupName;
            title.style.fontSize = '1.8rem';
            title.style.color = 'var(--primary-color)';
            title.style.borderBottom = '2px solid var(--accent-color)';
            title.style.display = 'inline-block';
            title.style.marginBottom = '1.5rem';
            section.appendChild(title);

            // Grid
            const grid = document.createElement('div');
            grid.className = 'grid'; // Use existing grid class

            groupItems.forEach(dest => {
                grid.appendChild(createCard(dest));
            });

            section.appendChild(grid);
            destinationsContainer.appendChild(section);
        }
    }
}

function renderSearchResults(data) {
    destinationsContainer.innerHTML = '';

    if (data.length === 0) {
        destinationsContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h3 style="color: #666;">Destinasi tidak ditemukan</h3>
                <button onclick="resetSearch()" style="margin-top:1rem; padding:0.5rem 1rem; background:var(--primary-color); color:white; border:none; border-radius:5px; cursor:pointer;">Tampilkan Semua</button>
            </div>
        `;
        return;
    }

    // Title Result
    const title = document.createElement('h3');
    title.textContent = 'Hasil Pencarian';
    title.style.marginBottom = '2rem';
    destinationsContainer.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'grid';

    data.forEach(dest => {
        grid.appendChild(createCard(dest));
    });

    destinationsContainer.appendChild(grid);
}

function createCard(dest) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-img-container">
            <img src="${dest.image}" alt="${dest.name}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80'">
        </div>
        <div class="card-content">
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <span class="category-tag" style="background:#e0f2fe;">${dest.category}</span>
            </div>
            <h3 class="card-title">${dest.name}</h3>
            <p class="card-desc" style="font-size:0.85rem; color:#888;">📍 ${dest.location}</p>
            <p class="card-desc">${dest.shortDesc}</p>
            <button class="card-btn" onclick="openModal(${dest.id})">Lihat Detail</button>
        </div>
    `;
    return card;
}

function resetSearch() {
    searchInput.value = '';
    renderByCategory();
}

function handleSearch() {
    const keyword = searchInput.value.toLowerCase();

    if (keyword.length === 0) {
        renderByCategory();
        return;
    }

    const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(keyword) ||
        dest.location.toLowerCase().includes(keyword) ||
        dest.category.toLowerCase().includes(keyword)
    );
    renderSearchResults(filtered);
}

searchInput.addEventListener('input', handleSearch);
searchBtn.addEventListener('click', handleSearch);

// Modal Logic
window.openModal = function (id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;

    modalTitle.textContent = dest.name;
    modalImg.src = dest.image;

    const facilitiesList = dest.facilities.map(f => `<li>${f}</li>`).join('');

    document.querySelector('.modal-info').innerHTML = `
        <div class="info-item">
            <h4>Tiket</h4>
            <p>${dest.price}</p>
        </div>
        <div class="info-item">
            <h4>Jam Buka</h4>
            <p>${dest.hours}</p>
        </div>
    `;

    document.querySelector('.modal-details').innerHTML = `
        <h3>Deskripsi</h3>
        <p style="margin-bottom: 1.5rem; text-align:justify;">${dest.description}</p>
        <h3>Fasilitas</h3>
        <ul style="list-style: disc; padding-left: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
            ${facilitiesList}
        </ul>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('DOMContentLoaded', init);
