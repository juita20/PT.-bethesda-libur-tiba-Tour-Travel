import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            halamanAktif: 'Home',

            showLoginModal: false,
            authMode: 'login', // 'login', 'googleAccountChooser', 'socialInput'
            selectedProvider: '',
            userLogin: null,

            authForm: {
                nama: '',
                email: '',
                password: ''
            },

            formPemesananUmum: {
                namaPemesan: '',
                nomorTelepon: '',
                jenisLayanan: 'Explore Singapore One Day Trip',
                jenisPerjalanan: 'Pulang Pergi',
                tanggal: '2026-09-01',
                tanggalPulang: '2026-09-01',
                jumlahPax: '1 Orang',
                catatan: ''
            },

            // ==========================================
            // 1. KATEGORI WISATA DOMESTIK & LOKAL
            // ==========================================
            daftarDomestik: [
                {
                    nama: 'Adventure Ranoh Island (One Day Tour Package)',
                    sub: 'Dewasa: Rp 550,000 | Anak-Anak: Rp 350,000',
                    harga: 'Mulai Rp 350.000',
                    img: 'https://www.hariankepri.com/wp-content/uploads/2021/10/IMG-20211003-WA0037.jpg',
                    itinerary: [
                        '09.30-10.00: Standby at Galang port jembatan enam',
                        '10.00-10.20: Galang port to Ranoh island (speedboat)',
                        '10.20-10.30: Arrive Ranoh and welcome drink',
                        '10.30-12.00: Free and easy / Water sport Activities',
                        '12.00-13.00: Lunch',
                        '13.00-15.00: Free and easy / Water sport Activities',
                        '15.00-15.30: Tea Time',
                        '15.30-16.00: Preparing back to Galang port',
                        '16.00-16.20: Ranoh island to Galang port (speedboat)'
                    ],
                    termasuk: ['One Day Tour Access', 'Water Sports Facility (Free facilities like Single/Double Canoe, Waterpark, Dragon Boat)', 'Island Activities & Beach Access', 'Makan Siang (Set Lunch)'],
                    tidakTermasuk: ['Dinner & breakfast (untuk stay overnight)', 'Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Ranoh Island Beach', url: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1280,h_853/w_79,x_14,y_14,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/pywqjva2sey98kmx1dkn/PulauRanohdiBatamdariSingapura.jpg' },
                        { judul: 'Water Sports Area', url: 'https://tourbatamsingaporemalaysia.com/wp-content/uploads/2022/09/Ranoh-Island-Batam-840x473.jpeg' }
                    ]
                },
                {
                    nama: 'Tour to Kepri Coral Resort (One Day Tour Package)',
                    sub: 'Dewasa: Rp 400.000 (1 Pax) | Anak (4-10): Rp 350.000 (1 Pax)',
                    harga: 'Mulai Rp 350.000',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdJcNDoi4_yFLz7IG7djkNIns0hEKCCMtHrX6A98EbKJdzvsLnunwHk2U&s=10',
                    itinerary: [
                        'Berkumpul di titik keberangkatan Batam',
                        'Perjalanan laut menuju Kepri Coral Resort',
                        'Menikmati fasilitas floating pontoon & snorkeling',
                        'Makan siang di restoran terapung',
                        'Bersantai di kolam renang & pantai resort',
                        'Perjalanan kembali ke Batam'
                    ],
                    termasuk: ['One Day Resort Access', 'Floating Pontoon Experience', 'Swimming Pool & Beach Facilities', 'Makan Siang'],
                    tidakTermasuk: ['Alat Snorkeling Sewaan Tambahan', 'Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Kepri Coral Pontoon', url: 'https://gokepri.com/gokepri/uploads/2023/12/D7C90DBF-767A-4ACE-91C3-45FAF000A97F.jpeg' },
                        { judul: 'Resort Beach & Pool', url: 'https://kencanawisatabatamtour.com/wp-content/uploads/2025/11/q5O3grIQUh4l2snTsDgnGwNyMeBVVt1acsqfrVOA-1-1024x576.jpg' }
                    ]
                },
                {
                    nama: 'Kiki Beach Resort Batam - Lagoon Villa',
                    sub: 'Slot Terbatas (Sisa 2 Unit Saja)',
                    harga: 'Rp 1.380.000',
                    img: 'https://images.trvl-media.com/lodging/104000000/103150000/103140200/103140163/7c5d2ba8.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
                    itinerary: [
                        'Check-in di Kiki Beach Resort Batam (Check-in Pukul 14.00)',
                        'Menikmati suasana eksklusif Lagoon Villa',
                        'Aktivitas pantai pribadi & sunset view',
                        'Check-out keesokan harinya'
                    ],
                    termasuk: ['Lagoon Villa Stay', 'Resort Access', 'Private Experience'],
                    tidakTermasuk: ['Makan malam di luar paket', 'Transportasi pribadi'],
                    galeri: [
                        { judul: 'Lagoon Villa View', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVuNAel4lWKlUCpoX2QUsxptAsGGXGczHRjJMc8D1vQpzWD1jixfzg-o&s=10' },
                        { judul: 'Lagoon Villa View', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vmLCZn2lSYaT_NFav4Xi1E8dGoG566AJktZmCFxjH6XFmUJMH0RETxQ&s=10' }
                    ]
                },
                {
                    nama: 'Let\'s Explore Bintan + Treasure Bay',
                    sub: 'All-In Trip',
                    harga: 'Rp 450.000 / Person',
                    img: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/03/28/b93932e9-704e-4a26-9ce0-653b1c3d0b30-1711621174381-dc65e89eb046b3eb42fd9940dcc6a8c6.png',
                    itinerary: [
                        'Sleeping Budha',
                        'Gurun Pasir Bintan',
                        'Telaga Biru',
                        'Lagoi Bay Bintan',
                        'Lagoi Lake',
                        'Treasure Bay Lagoi'
                    ],
                    termasuk: ['Tiket Kapal (PP)', 'Transport Bintan', 'Tour Guide', 'Mineral Water 1x', 'Tiket Masuk Wisata', 'Tour Leader Batam', 'Makan Siang'],
                    tidakTermasuk: ['Pengeluaran Pribadi', 'Tips Tour Leader Sukarela'],
                    galeri: [
                        { judul: 'Sleeping Buddha', url: 'https://hypeabis.id/assets/photo/20211205170011000000HSC01779.jpg' },
                        { judul: 'Gurun Pasir', url: 'https://www.tempatwisata.pro/users_media/3066/Bukit%20Pasir%20Bintan11.jpg' },
                        { judul: 'Telaga Biru', url: 'https://cms.kepriprov.go.id/api/files/uploads/2026/04/94a7346b-42d9-4907-8d8c-1c1c4e468fde.webp' },
                        { judul: 'Lagoy Bay Bintan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pcSW6tEq8DMEw1MXTb21yLMgJastqSVpkpkYDGnodJFBcCatQ50G6Rs&s=10' },
                        { judul: 'Treasure Bay', url: 'https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/sjmkl8dg0qnfmckgrn4b/ChillCove@TreasureBayBintan-Klook.jpg' }
                    ]
                },
                {
                    nama: 'Let\'s Explore Bintan + Tj. Pinang',
                    sub: 'All-In Trip',
                    harga: 'Rp 300.000 / Person',
                    img: 'https://awsimages.detik.net.id/community/media/visual/2020/02/24/c64e7873-4a09-4e3e-81fc-9a7c2931bc69_169.jpeg?w=1200',
                    itinerary: [
                        'Sleeping Buddha',
                        'Gurun Pasir Bintan',
                        'Telaga Biru',
                        'Lagoi Bay Bintan',
                        'Lagoi Lake',
                        'Patung 1000'
                    ],
                    termasuk: ['Tiket Kapal (PP)', 'Transport Bintan', 'Tour Guide', 'Mineral Water 1x', 'Tiket Masuk Wisata', 'Tour Leader Batam', 'Makan Siang'],
                    tidakTermasuk: ['Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Sleeping Buddha', url: 'https://hypeabis.id/assets/photo/20211205170011000000HSC01779.jpg' },
                        { judul: 'Gurun Pasir Bintan', url: 'https://www.tempatwisata.pro/users_media/3066/Bukit%20Pasir%20Bintan11.jpg' },
                        { judul: 'Telaga Biru', url: 'https://cms.kepriprov.go.id/api/files/uploads/2026/04/94a7346b-42d9-4907-8d8c-1c1c4e468fde.webp' },
                        { judul: 'lagoi Like', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkm_QWKwG2q9LGK3CpGeqnHN2zNJ4SsnomO7bLuJiVrOKpRGK9M0tAH-Y&s=10' },
                        { judul: 'Patung 1000 / Vihara', url: 'https://penelitianpariwisata.id/wp-content/uploads/2024/09/WiharaPatungSeribu.jpeg' }
                    ]
                },
                {
                    nama: 'Fun Day @ Nongsa Resorts',
                    sub: 'Min: 30 Pax',
                    harga: 'Rp 200.000 Nett / Pax',
                    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Kedatangan peserta di Nongsa Resorts',
                        'Sesi Ice Breaking & Telematch Games dipandu instruktur profesional',
                        'Istirahat menikmati Iced Infuse Water',
                        'Makan siang bersama (1x Lunch)',
                        'Closing & foto bersama'
                    ],
                    termasuk: ['5 Preferred Telematch Games Programs', 'Conducted by Professional Instructor', 'Free Flow Iced Infuse Water', 'Standart Sound System', '1X Lunch'],
                    tidakTermasuk: ['Transportasi Bus Tambahan', 'Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Outbound & Telematch', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '1 Day City Tour Batam Island',
                    sub: 'Start Airport, Hotel, Ferry Terminal',
                    harga: 'Rp 350.000 / Pax',
                    img: 'https://investasiproperti.id/wp-content/uploads/2023/04/jembatan-di-batam.jpg',
                    itinerary: [
                        'Day 01 (Lunch): We will pick up the tour participants at the hotel, airport, or ferry terminal start from 09.00 am',
                        'Visit to Batam Grand Mosque',
                        'Monument Welcome to Batam',
                        'Visit to Dinos Gate',
                        'Playing gokart racing',
                        'Visit to 3D The Illution',
                        'Visit to layer cake & souvenir shop',
                        'Visit to Next Level Beach Front Bar & Infinity Beach Club',
                        'Visit Elite Adventur & Sea Sport',
                        'Visit to Blue Fire Beach Club',
                        'Drop to hotel or ferry terminal at 05.00 pm'
                    ],
                    termasuk: ['Land transport during trip according the itinerary', '1 time lunch at halal local restaurant', 'Local tour guide with Bahasa or English speaking', 'Free 1 bottle of mineral water'],
                    tidakTermasuk: ['Travel insurance', 'Entrance fee & rides (*) are not include', 'Personal expenses', 'Mandatory tipping for tour guide, as your wishes'],
                    galeri: [
                        { judul: 'Grand Batam Mall', url: 'https://i2.wp.com/blog.tripcetera.com/wp-content/uploads/2020/01/60sixthroads_79784584_852774951820123_5267064150324062788_n.jpg' },
                        { judul: 'Monument Welcome To Batam', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpb22P-8HQF0Nwt97ruDNHoqXUy5F8g9UKeDQRk9MVO_H1gr6NeZ7Y0yM&s=10' },
                        { judul: 'Dinos Gate', url: 'https://gokepri.com/gokepri/uploads/2022/07/C3C92DEC-8A68-47E5-815C-4EDD10E8DFA5.jpeg' },
                        { judul: 'Gokart Racing', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1e/7b/81/golden-city-go-kart.jpg?w=1200&h=-1&s=1' },
                        { judul: '3D The Illution', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2HkcYlPSJ07xZ_YO8JbOKV2Byz7wA0fdgknO3D9Vhv6le9_ho67ZzUM&s=10' },
                        { judul: 'Blue Fire Beach Club', url: 'https://rentalmobilbatam212.com/wp-content/uploads/2024/12/Blue-Fire-Beach-Club-Destinasi-Liburan-Tahun-Baru-Favorit-di-Batam.jpg' }
                    ]
                }
            ],

            // ==========================================
            // 2. KATEGORI TOUR MANCANEGARA (LUAR NEGERI)
            // ==========================================
            daftarInternasional: [
                {
                    nama: 'Explore Singapore One Day Trip',
                    sub: 'Start Batam & Changi Airport',
                    harga: 'Mulai Rp 900.000',
                    img: 'https://skorcard.app/wp-content/uploads/2024/10/tempat-wisata-di-singapura.jpg',
                    itinerary: [
                        'Peserta Start Batam : Berkumpul di pelabuhan Batam Centre paling telat jam 06.40 WIB pagi',
                        'Peserta Start Tanjung Pinang : Bertemu di Pelabuhan Tanah Merah',
                        'Peserta Start Changi : Berkumpul di Jewel Changi paling telat jam 10.30 SG Time',
                        'Visit ke air terjun Jewel Changi & patung singa Merlion Park',
                        'Shopping di Bugis Street Market',
                        'Photo stop di taman Gardens by The Bay',
                        'Photo stop di Universal Studio - Resort World Sentosa',
                        'Experience naik monorail ke Vivo City',
                        'Shopping di Vivo City Mall, salah satu mall terbesar di Singapura',
                        'Menyeberang kembali ke Batam & perjalanan selesai',
                        'Peserta Start Changi : Perjalanan selesai di Vivo City Mall',
                        'Peserta Start Tanjung Pinang : Perjalanan selesai di Sentosa & didrop ke Tanah Merah Ferry Terminal'
                    ],
                    termasuk: [
                        'Tiket ferry Batam / Tj. Pinang ke Singapura + sea port tax PP',
                        'Transport selama perjalanan sesuai program',
                        '1x makan siang halal',
                        'Tour leader menemani perjalanan hingga kembali ke Batam',
                        'Gratis 1 botol air mineral di perjalanan',
                        'Gratis apply Singapore Arrival Card',
                        'Gratis apply All Indonesia Arrival Card'
                    ],
                    tidakTermasuk: [
                        'Asuransi perjalanan, pengeluaran pribadi, & penambahan jadwal',
                        'Tipping untuk tour leader adalah wajib. Nominal sukarela'
                    ],
                    galeri: [
                        { judul: 'Air Terjun Jewel Changi', url: 'https://www.cibsejournal.com/wp-content/uploads/2021/02/pp26-Landscape-pic-of-waterfall.jpg' },
                        { judul: 'Merlion Park', url: 'https://www.rukita.co/stories/wp-content/uploads/2022/10/Hotelscom.jpg' },
                        { judul: 'Bugis street Market', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwPDUpSpeNp92QqTXJowP3T72N_epsHwbpsrnW_cyQqf9S_XQTCjfX20&s=10' },
                        { judul: 'Gardens by the Bay', url: 'https://statik.tempo.co/data/2022/06/12/id_1117024/1117024_720.jpg' },
                        { judul: 'Unversal Studio', url: 'https://daniaexperiences.com/wp-content/uploads/2021/09/img_5952-1280x853-1.jpg?w=1024' },
                        { judul: 'Monorail Experience', url: 'https://landtransportguru.net/web/wp-content/uploads/2017/03/Sentosa-Monorail-Blue.jpg' }
                    ]
                },
                {
                    nama: '3D2N Tour 2 Negara (Malaysia - Singapore)',
                    sub: 'Start Batam: 3,25 JT | Start KLIA: 2,95 JT',
                    harga: 'Mulai Rp 2,95 JT',
                    img: 'https://www.ruparupa.com/blog/wp-content/uploads/2022/07/Screenshot-1478.jpg',
                    itinerary: [
                        'HARI PERTAMA (Peserta Start Batam: Berkumpul di pelabuhan Batam Centre, Menyeberang ke Johor Bahru, Visit ke Putera Jaya, Free time di Alor Street Bukit Bintang & cek in hotel) / (Peserta Start KLIA: Peserta mendarat di bandara KLIA & dijemput driver, Drop ke hotel & cek in, Agenda bebas sendiri, tidak termasuk makan siang)',
                        'HARI KEDUA (Visit ke Genting Highland, Experience naik kereta gantung, Shopping di Genting Premium Outlet, Visit ke situs Hindu Batu Caves, Photo stop di menara kembar Petronas, Cek in hotel di Melaka)',
                        'HARI KETIGA (Visit ke kota tua Melaka, Photo stop di Legoland, Menyeberang ke Singapore, Visit ke Merlion Park, Visit ke taman Gardens by The Bay, Visit ke Jewel Changi, Peserta start KLIA, drop ke Changi airport / Peserta start Batam, Photo stop Universal Studio & drop ke pelabuhan / Menyeberang ke Batam & perjalanan selesai)'
                    ],
                    termasuk: [
                        'Tiket ferry dari Batam ke Johor Bahru + tax + fuel charge PP',
                        'Transportasi bus wisata selama perjalanan sesuai program',
                        'Menginap 2 malam di Malaysia. Hotel setara bintang 4, twin sharing',
                        '3x makan siang, 2x sarapan pagi (Start Batam)',
                        '2x makan siang, 2x sarapan pagi (Start KLIA)',
                        'Tour leader menemani perjalanan',
                        'Tour guide lokal berbahasa Melayu',
                        'Gratis 1 botol air mineral di bus per orang',
                        'Gratis apply arrival card',
                        'Gratis tiket kereta gantung Genting Awana Skyway'
                    ],
                    tidakTermasuk: [
                        'Asuransi perjalanan mulai Rp. 130,000 / orang (Tidak wajib, namun disarankan)',
                        'Pengeluaran pribadi & penambahan jadwal diluar program',
                        'Tiket pesawat PP (start Kuala Lumpur)',
                        'Tipping untuk tour leader adalah sifatnya wajib, nominal sukarela'
                    ],
                    galeri: [
                        { judul: 'Alor Street Bukit Bintang', url: 'https://i0.wp.com/labirutour.com/wp-content/uploads/2024/12/jalan-alor-food-street.jpg?fit=900%2C600&ssl=1' },
                        { judul: 'Genting Highland', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9DL3qVaXibgUTjikAvkIVM2rFaaAWDTQ9xLLFcHyiGAtkrx1u74zHyCn&s=10' },
                        { judul: 'Experience Kereta Gantung', url: 'https://images.trvl-media.com/place/7521/db2e31d2-576d-49b1-95f7-d21bee0d2701.jpg' },
                        { judul: 'Genting Premium Outlet', url: 'https://www.premiumoutlets.com.my/images/ghpo/home/features/features-01@xs.png?v2' },
                        { judul: 'Situs Hindu Batu Caves', url: 'https://img.static-kl.com/transform/674a02fd-35a4-4766-9a0d-4fcc123a57e7/' },
                        { judul: 'LegoLand ', url: 'https://infobanknews.com/wp-content/uploads/2019/07/legoland.jpg' }
                    ]
                },
                {
                    nama: '3D2N Malaysia - Only (Kuala Lumpur - Genting Highland)',
                    sub: 'Start Batam: 3,25 JT | Start KLIA: 2,95 JT',
                    harga: 'Mulai Rp 2,95 JT',
                    img: 'https://cdn1-production-images-kly.akamaized.net/A4h4WCi9COBLPrRmu4Z_tp4oO_M=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/741606/original/058099800_1411536193-spectacular-petronas-twin-towers-at-dusk-kuala-lumpur-malaysia-.jpg',
                    itinerary: [
                        'HARI PERTAMA (Peserta Start Batam: Berkumpul di pelabuhan batam Centre, Menyeberang ke Johor Bahru, Visit ke Putera jaya, Free time di Alor Street Bukit Bintang & cek in hotel) / (Peserta Start KLIA: Peserta mendarat di bandara KLIA & dijemput driver, Drop ke hotel & cek in, Agenda bebas sendiri, tidak termasuk makan siang)',
                        'HARI KEDUA (Visit ke Genting Highland, Experience naik kereta gantung, Shopping di Genting Premium Outlet, Visit ke situs Hindu Batu Caves, Photo stop di menara kembar Petronas, Peserta start Batam melanjutkan perjalanan ke Melaka / Peserta start Kuala Lumpur, drop ke hotel)',
                        'HARI KETIGA (Peserta Start Kuala Lumpur: Drop ke bandara - tidak daapt makan siang) / (Peserta Start Batam: Visit ke kota tua Melaka, Photo stop di Legoland, Menyeberang ke Batam & perjalanan selesai)'
                    ],
                    termasuk: ['Hotel', 'Transport', 'Meal', 'Guide', 'Ferry'],
                    tidakTermasuk: ['Pengeluaran Pribadi', 'Tipping Guide'],
                    galeri: [
                        { judul: 'Menara Kembar Petronas', url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=500&q=80' },
                        { judul: 'Alor Street Bukit Bintang', url: 'https://i0.wp.com/labirutour.com/wp-content/uploads/2024/12/jalan-alor-food-street.jpg?fit=900%2C600&ssl=1' },
                        { judul: 'Genting Highland', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9DL3qVaXibgUTjikAvkIVM2rFaaAWDTQ9xLLFcHyiGAtkrx1u74zHyCn&s=10' },
                        { judul: 'Experience Kereta Gantung', url: 'https://images.trvl-media.com/place/7521/db2e31d2-576d-49b1-95f7-d21bee0d2701.jpg' },
                        { judul: 'Genting Premium Outlet', url: 'https://www.premiumoutlets.com.my/images/ghpo/home/features/features-01@xs.png?v2' },
                        { judul: 'Situs Hindu Batu Caves', url: 'https://img.static-kl.com/transform/674a02fd-35a4-4766-9a0d-4fcc123a57e7/' }
                    ]
                },
                {
                    nama: '4D3N Bangkok - Pattaya',
                    sub: 'Start Batam / Bangkok',
                    harga: 'Mulai Rp 2.700.000',
                    img: 'https://i0.wp.com/www.lesclefsdor.org/wp-content/uploads/2024/03/1.-Bangkok-at-night.png?fit=1200%2C620&ssl=1',
                    itinerary: [
                        'Day 01 (No Meal): Peserta start Batam, berkumpul di pelabuhan Batam Centre jam 06.30 pagi & menyeberang ke Singapore, Drop ke Changi Airport & terbang ke Bangkok (TL tidak ikut terbang), Sampai Bangkok, dijemput oleh guide & drop ke hotel, Peserta dari kota lain, dapat terbang langsung ke Bangkok',
                        'Day 02 (Breakfast, Lunch, Dinner): Visit ke Honey Bee Farm & The Valley of Dinosaurs (Dino Park), Nongnooch Village (Pertunjukan gajah & budaya Thailand), Visit ke Laser Budha Hill & Shopping di Erawadee Herb Shop, Photo stop di Hard Rock Cafe, Pattaya Beach, & cek in hotel',
                        'Day 03 (Breakfast, Lunch): Visit Gems Galley Museum of Stone & dark train ride, Menyusuri sungai Chaopraya & visit ke Wat Arun Temple, Shopping di Platinum Fashion Mall & Asiatique Night Market',
                        'Day 04 (Breakfast): Drop ke bandara & terbang kembali ke Indonesia, Peserta start Batam, terbang ke SG & drop ke Harbour Front'
                    ],
                    termasuk: [
                        'Tiket ferry Batam ke Singapore + sea port tax PP',
                        'Shuttle dari pelabuhan ke bandara Changi PP',
                        'Tiket pesawat Singapore ke Bangkok PP (Max. Rp. 3,000,000/orang) + bagasi kabin 7 kg only',
                        'Transport bus wisata selama perjalanan sesuai program',
                        'Menginap 2 malam di Bangkok, 1 malam di Pattaya. Hotel setara bintang 3. Twin sharing',
                        '2x makan siang, 1x makan malam, 3x sarapan pagi',
                        'Professional tour guide lokal berbahasa Indonesia',
                        'Tiket masuk tempat wisata sesuai program',
                        'Tipping untuk guide & driver lokal Thailand',
                        'Tour leader menemani dari Batam hingga cek in di Changi airport'
                    ],
                    tidakTermasuk: ['Asuransi perjalanan', 'Pengeluaran pribadi & penambahan jadwal diluar program'],
                    galeri: [
                        { judul: 'Honey Bee Farm', url: 'https://amarthawisata.com/wp-content/uploads/2025/12/honey-bee-farm.webp' },
                        { judul: 'The Valley of Dinosaurs (Dino Park)', url: 'https://www.bkkkids.com/wp-content/uploads/2023/08/Nong-Nooch-Valley-of-the-Dinosaurs-8.jpg' },
                        { judul: 'Laser Budha Hill', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZpQznNaTS-jERdMFJEC4GpVC6j7ypOtcbweTPxfAb61dzLUZ_1A_p3Y&s=10' },
                        { judul: 'Pattaya Beach', url: 'https://atmindgroup.com/alterahotelandresidence/wp-content/uploads/2024/02/website-article-1640-x-924-px-6.jpg' },
                        { judul: 'Sungai Chao Pharaya', url: 'https://cdn.pixabay.com/photo/2023/03/28/04/03/chao-phraya-river-7882179_960_720.jpg' }
                    ]
                },
                {
                    nama: '4D3N Phuket - Phiphi Island',
                    sub: 'Start Batam / Phuket',
                    harga: 'Mulai Rp 5.000.000',
                    img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Day 01 (No Meal): Peserta start Batam, berkumpul di pelabuhan Batam Centre jam 06.30 pagi & menyeberang ke Singapore, Drop ke Changi Airport & terbang ke Phuket (TL tidak ikut terbang), Sampai Phuket, dijemput oleh guide & drop ke hotel, Peserta dari kota lain, dapat terbang langsung ke Phuket',
                        'Day 02 (Breakfast, Lunch): Menuju pelabuhan, menyeberang ke Phi Phi Island, Visit ke Pileh Lagoon, Viking Cave, & Snorkeling di Monkey / Maya Bay, Bersantai di Tosai Beach, Visit ke Khai Nhai Island & kembali ke Phuket',
                        'Day 03 (Breakfast, Lunch): Check out hotel, visit ke Sino Portuguest Old Town Walking Street, Visit ke Wat Chalong Temple, Honey Bee Farm, & Promthep cape, Visit ke Patong Beach & Bangla Road',
                        'Day 04 (Breakfast): Drop ke bandara & terbang kembali ke Indonesia, Peserta start Batam, terbang ke SG & drop ke Harbour Front'
                    ],
                    termasuk: [
                        'Tiket ferry Batam ke Singapore + sea port tax PP',
                        'Shuttle dari pelabuhan ke bandara Changi PP',
                        'Tiket pesawat Singapore ke Phuket PP (Max. Rp. 3,000,000/orang) + bagasi kabin 7 kg only',
                        'Transport bus wisata selama perjalanan sesuai program',
                        'Menginap 3 malam di Phuket. Hotel setara bintang 3. Twin sharing',
                        '2x makan siang, 3x sarapan pagi',
                        'Professional tour guide lokal berbahasa Indonesia',
                        'Tiket masuk tempat wisata sesuai program',
                        'Tipping untuk guide & driver lokal Thailand',
                        'Tour leader menemani dari Batam hingga cek in di Changi airport'
                    ],
                    tidakTermasuk: ['Asuransi perjalanan', 'Pengeluaran pribadi & penambahan jadwal diluar program'],
                    galeri: [
                        { judul: 'Phi Phi Island', url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '4D3N Chiang Mai - Chiang Rai',
                    sub: 'Start Batam / Chiang Mai',
                    harga: 'Mulai Rp 4.100.000',
                    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Day 01 (No Meal): Peserta start Batam, berkumpul di pelabuhan Batam Centre jam 06.30 pagi & menyeberang ke Singapore, Drop ke Changi Airport & terbang ke Chiang Mai (TL tidak ikut terbang), Sampai Chiang Mai, dijemput oleh guide & drop ke hotel, Peserta dari kota lain, dapat terbang langsung ke Chiang Mai',
                        'Day 02 (Breakfast, Lunch): Transfer ke Mae Khacan Hot Spring, Visit ke Wat Rong Khun Temple & Wat Rong Sue Ten, Visit ke Black Hose Art Museum & Long neck village, Transfer kembali ke Chiang Mai',
                        'Day 03 (Breakfast, Lunch): Transfer ke King - Queen pagoda, Hiking selama lebih kurang 2 jam, di Kew mea Pan Nature Trail, Visit ke Wachiratharn Water Fall & Hmong Hill Market',
                        'Day 04 (Breakfast): Drop ke bandara & terbang kembali ke Indonesia, Peserta start Batam, terbang ke SG & drop ke Harbour Front'
                    ],
                    termasuk: [
                        'Tiket ferry Batam ke Singapore + sea port tax PP',
                        'Shuttle dari pelabuhan ke bandara Changi PP',
                        'Tiket pesawat Singapore ke Chiang Mai PP (Max. Rp. 3,000,000/orang) + bagasi kabin 7 kg only',
                        'Transport bus wisata selama perjalanan sesuai program',
                        'Menginap 3 malam di Chiang Mai. Hotel setara bintang 3. Twin sharing',
                        '2x makan siang, 3x sarapan pagi',
                        'Professional tour guide lokal berbahasa Indonesia',
                        'Tiket masuk tempat wisata sesuai program',
                        'Tipping untuk guide & driver lokal Thailand',
                        'Tour leader menemani dari Batam hingga cek in di Changi airport'
                    ],
                    tidakTermasuk: ['Asuransi perjalanan', 'Pengeluaran pribadi & penambahan jadwal diluar program'],
                    galeri: [
                        { judul: 'Chiang Mai Temple', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '4D Maafushi - Maldives',
                    sub: 'Start Batam & Maldives',
                    harga: 'Mulai Rp 3.000.000 (Exclude Flight)',
                    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'HARI 01 (No Meal): Terbang ke Maldives by flight. Durasi perjalanan 4,5 jam, Disambut oleh team kami di bandara Male & transfer ke pulau Maafushi, Cek in hotel di Maafushi & agenda bebas',
                        'HARI 02 (Breakfast, Lunch, Dinner): Sarapan pagi dihotel, Mengikuti fullday hopping Island & snorkeling, Sore kembali ke hotel & dinner di hotel',
                        'HARI 03 (Breakfast): Free & easy dihotel, Peserta dapat menambahkan aktivitas lain pada hari ini seperti resort tour, shark bay, atau lainnya',
                        'HARI 04 (Breakfast): Cek out hotel, transfer ke bandara by boat, Terbang kembali ke Indonesia & perjalanan selesai'
                    ],
                    termasuk: [
                        'Tiket pesawat dari Indonesia ke Maldives PP max. Rp. 3,000,000',
                        'Tiket ferry Batam ke SG / Johor & shuttle airport (Start Batam)',
                        'Gratis bagasi kabin max. 1 item 7 kilo PP',
                        'Shuttle sharing boat dari bandara male ke pulau Maafushi PP',
                        'Menginap 3 malam dihotel di pulau Maafushi. Twin sharing',
                        '1x makan siang, 1x malam malam, 3x sarapan pagi. Halal food',
                        'Gratis 1x aktivitas hopping island & snorkeling + Snorkeling gear',
                        'Team yang menjemput dibandara & mengantar ke bandara berbahasa Inggris'
                    ],
                    tidakTermasuk: [
                        'Asuransi perjalanan',
                        'Pengeluaran pribadi & penambahan jadwal diluar program',
                        'Additional tiket pesawat apabila saat booking, telah melewati limit yang di tentukan'
                    ],
                    galeri: [
                        { judul: 'Maafushi Beach', url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '6D Taipei - Yilan City - Taiwan',
                    sub: 'Start Batam & Singapore',
                    harga: 'Mulai Rp 8.000.000',
                    img: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'HARI 01 (No Meal): Peserta berkumpul di pelabuhan Batam Centre jam 16.00 sore hari, Menyeberang ke Singapura dengan kapal ferry, Drop ke bandara Changi & terbang dini hari ke Taipei, Peserta dari kota lain, dapat langsung ke Singapura atau transit via Batam',
                        'HARI 02 (Lunch, Dinner): Mendarat pagi di Taipei pagi hari setelah penerbangan 5 jam, Visit ke Yangmingshan Volcanic Landscape, Visit ke Flower Clock & Thermal Valley, Cek in hotel & istirahat',
                        'HARI 03 (Breakfast, Lunch, Dinner): Visit ke Yilan Lanyang Museum, Visit ke Traditional Art Centre Yilan, Check in hotel di Yilan City',
                        'HARI 04 (Breakfast, Lunch): Visit ke Yehliu Geopark, Experience pelepasan sky lantern atau lampion terbang, Visit ke Shenkeng Old Street, Visit ke Ximending',
                        'HARI 05 (Breakfast, Lunch, Dinner): Visit ke Dadaocheng & ke Shihlin Residence, Photo stop dengan view menara 101, Visit ke CKS Memorial Hall & Pinnaple bakery, Drop ke bandara, terbang tengah malam ke Singapore',
                        'HARI 06 (Breakfast): Mendarat pagi di Singapore & drop ke pelabuhan Harbour Front, peserta daapt shopping di Vivo City Mall, Menyeberang kembali ke Batam & perjalanan selesai, Peserta dari kota lain, dapat terbang kembali ke daerah via Singapura atau daapt transit via Batam'
                    ],
                    termasuk: ['Hotel', 'Transport', 'Guide', 'City Tour'],
                    tidakTermasuk: ['Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Taipei City', url: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '5D Winter South Korea (Seoul - Nami Island)',
                    sub: 'Start Batam',
                    harga: 'Mulai Rp 13,5 JT',
                    img: 'https://images.unsplash.com/photo-1538485399081-0d32f6cdee4d?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'HARI 1 (No Meal): Peserta berkumpul di bandara Hang Nadim, Terbang ke Incheon Korea tengah malam',
                        'HARI 2 (Lunch, Dinner): Mendarat pagi di Incheon, Visit ke Ski Resort, Visit ke Nami Island, Visit ke Starfield Library & Gangnam Statue',
                        'HARI 3 (Breakfast, Lunch, Dinner): Visit ke Ginseng Centre & Cosmetic Shop, Visit ke Gyeongbokgung Palace, Visit ke Chyeonggecheon Stream, Free time di Hyundai Premium Outlet',
                        'HARI 4 (Breakfast, Lunch): Visit ke Redpine Oil Store, Visit ke Amethys Gallery, Visit ke Namsan Seoul Tower, Visit ke Duty Free Shop, Free time di Myeongdong Food & Fashion Street',
                        'HARI 5 (Breakfast): Free & easy hingga cek out, Visit ke Myeongpum Souvenir Shop, Drop ke Incheon Airport & terbang kembali ke Batam, Mendarat di Batam tengah malam & perjalanan selesai'
                    ],
                    termasuk: ['Group Visa', 'Hotel', 'Transport', 'Meal', 'Guide'],
                    tidakTermasuk: ['Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Nami Island Winter', url: 'https://images.unsplash.com/photo-1538485399081-0d32f6cdee4d?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '8D Winter South Korea (Seoul - Busan - Mt. Seorak)',
                    sub: 'Start Batam',
                    harga: 'Mulai Rp 23,5 JT',
                    img: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'HARI 1 (No Meal): Peserta berkumpul di bandara Hang Nadim, Terbang ke Incheon Korea tengah malam',
                        'HARI 2 (Lunch, Dinner): Mendarat pagi di Incheon, Visit ke Ski Resort, Visit ke Nami Island, Visit ke Starfield Library & Gangnam Statue',
                        'HARI 3 (Breakfast, Lunch, Dinner): Visit ke Ginseng Centre & Cosmetic Shop, Visit ke Gyeongbokgung Palace, Visit ke Chyeonggecheon Stream, Free time di Hyundai Premium Outlet',
                        'HARI 4 (Breakfast, Lunch): Visit ke Redpine Oil Store, Visit ke Amethys Gallery, Visit ke Namsan Seoul Tower, Visit ke Duty Free Shop, Free time di Myeongdong Food & Fashion Street',
                        'HARI 5 (Breakfast, Lunch, Dinner): Free & easy hingga cek out, Visit ke Myeongpum Souvenir Shop, Visit ke Gwongeumseong Fortress dengan cable car, Visit Shinheungsa Temple & Golden Bronze Big Buddha Statue',
                        'HARI 6 (Breakfast, Lunch): Melanjutkan perjalanan ke Busan, Visit ke Jagalchi Fish Market and free time di BIFF Square',
                        'HARI 7 (Breakfast, Lunch, Dinner): Visit Gamcheon Cultural Village and Oryukdo Skywalk, Melewati Gwanganli Bridge, Visit Haedong Yonggungsa Temple, Visit Blue Line Skypark, naik sky capsule (one way), Photo stop at The Bay 101 and free time at Heundae Beach',
                        'HARI 8 (Breakfast): Cek out hotel, Drop ke Incheon Airport, Terbang kembali ke Batam & perjalanan selesai'
                    ],
                    termasuk: ['Group Visa', 'Busan Sky Capsule', 'Hotel', 'Transport', 'Meal', 'Guide'],
                    tidakTermasuk: ['Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Busan View', url: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '8D Autumn Japan (Osaka - Kyoto - Toyohashi - Mt. Fuji - Tokyo)',
                    sub: 'Harga Promo Start From Rp 25,7 Jt',
                    harga: 'Rp 25,7 JT',
                    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'HARI 1 (Meal On Board): Berkumpul di Changi Airport, Terbang dengan Cathay Pacific jam 20.05 dari SIN - KIX transit HK',
                        'HARI 2 (Breakfast On Board, Lunch): Landing di Osaka jam 6.40, Visit ke Osaka Castle, Visit ke Namba Yasaka Shrine, Visit ke Shinsaibashi-suji Shopping Street, Visit ke Dontombori Food Street, Cek in hotel',
                        'HARI 3 (Breakfast, Lunch): Visit ke Shinsekai & Tsutenkaku, Melanjutkan perjalanan ke Kyoto dengan bus, Visit ke Fushimi Inari, Visit ke Kiyomizu-dera, Visit ke Gion & menginap di Toyohashi',
                        'HARI 4 (Breakfast, Lunch): Visit ke Kawaguchi & Oishi Park, Shopping di Gotemba Premium Outlet, Menginap di Namazu',
                        'HARI 5 (Breakfast, Lunch): Visit ke Sensō-ji & Nakamise Shopping Street, Photo stop di Tokyo Skytree, Visit ke Shibuya Scramble Crossing, Shopping di Harajuku Shopping Street, Cek in hotel di Tokyo',
                        'HARI 6 (Breakfast): Agenda kosong, tidak ada guide & transport, Peserta dapt explore kota Tokyo masing-masing atau bermain di Disney Land dengan biaya sendiri',
                        'HARI 7 (Breakfast, Dinner On Board): Check out hotel siang hari, Drop ke Narita Airport, Terbang ke Singapura dengan Cathay pacific jam 16.45 transit HK',
                        'HARI 8 (Breakfast On Board): Landing di Singapura jam 05.40, Peserta dari kota lain lanijuit terbang ke kota asal, Peserta dari Batam di drop ke pelabuhan Harbour Front, Perjalanan selesai'
                    ],
                    termasuk: ['Flight by Cathay Pacific', 'Hotel', 'Transport', 'Guide', 'Meal', 'Ferry', 'Gratis Apply Visa Waiver'],
                    tidakTermasuk: ['Pengeluaran Pribadi', 'Optional Tour'],
                    galeri: [
                        { judul: 'Tokyo Tower', url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '7D Turki (Istanbul - Cappadocia)',
                    sub: 'All In Include',
                    harga: 'Mulai Rp 14.900.000',
                    img: 'https://images.unsplash.com/photo-1524231757913-215fce3a4b5a?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Day 01 (No Meal): Peserta berkumpul di pelabuhan Batam Centre, menyeberang ke Singapore, Terbang dari Singapore menuju Istanbul (Total 14 jam perjalanan)',
                        'Day 02 (Lunch, Dinner | Stay di Bursa): Tiba di Istanbul, visit ke Grand Mosque, Visit ke KeTophane Clock Tower, Osman, & Orhan Ghazi Tombs',
                        'Day 03 (Breakfast, Lunch, Dinner | Stay di Cappadocia): Transfer ke Cappadocia, Visit ke Pigeon Valley & Underground City, Visit ke Jewellery & game stone workshop',
                        'Day 04 (Breakfast, Lunch, Dinner | Cappadocia): Visit ke traditional Hanwoven carpet atelier, Visit ke salt lake & melanjutkan perjalanan kembali ke Istanbul',
                        'Day 05 (Breakfast, Lunch, Dinner | Istanbul): Perjalanan kembali ke Istanbul & visit ke Traditional Handmade Carpet Store, Photo stop di Salt lake & stay di Ankara',
                        'Day 06 (Breakfast, Lunch): Visit ke Leater Factory With Fashion Show, Visit ke Blue Mosque, Hippodrome, & Photostop di hagia Sophia, Terbang kembali ke Singapore dan bermalam di pesawat. Total 15 jam perjalanan',
                        'Day 07 (No Meal): Sampai di Singapore, drop ke Harbour Front & menyeberang kembali ke Batam'
                    ],
                    termasuk: [
                        'Tiket pesawat dari SG ke Istanbul + airport tax PP (Max. Rp. 8,000,000 PP)',
                        'Gratis bagasi 20 kg + 6 kg kabin (selama promo)',
                        'Tiket ferry Batam ke Singapore + tax PP & shuttle airport',
                        'Transport bus wisata selama perjalanan sesuai program',
                        'Menginap 4 malam di hotel setara *4, Twin share',
                        '5x makan siang, 4x makan malam, 4x sarapan pagi',
                        'Tour guide lokal & tour leader berbahasa Indonesia',
                        'Tiket masuk tempat wisata & Gratis air mineral',
                        'Tiket Bosphorus Cruise',
                        'Biaya tipping untuk guide & driver Turki'
                    ],
                    tidakTermasuk: [
                        'Asuransi perjalanan Rp. 300,000/orang (disarankan)',
                        'Pengeluaran pribadi & penambahan jadwal diluar program',
                        'Biaya kelebihan bagasi & porter'
                    ],
                    galeri: [
                        { judul: 'Blue Mosque Istanbul', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80' },
                        { judul: 'Cappadocia Balloons', url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '6D Shanghai - Hangzhou - Suzhou',
                    sub: 'Start Batam / KLIA',
                    harga: 'Mulai Rp 13.000.000',
                    img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Day 01 (Lunch): Peserta berkumpul di pelabuhan Batam Centre jam 05.20 pagi, Menyeberang ke Johor Bahru & selanjutnya menuju Kuala Lumpur, Drop ke bandara KLIA & terbang malam ke Shanghai',
                        'Day 02 (Lunch, Dinner): Mendarat pagi di Shanghai setelah penerbangan 5 jam & 45 menit, Transfer ke Suzhou & visit ke Zhouzhuang Water Town, Visit ke Humble Administrators garden, Visit ke Silk Store & kemudian cek in hotel di Suzhou',
                        'Day 03 (Breakfast, Lunch, Dinner): Transfer ke hangzhou & visit ke West lake, Visit ke Hefang Street, Visit ke Jasmine tea shop, Cek in hotel di Hangzhou & istirahat',
                        'Day 04 (Breakfast, Lunch): Transfer ke Shanghai & visit ke Xintiandi, Visit ke The Bund & photo stop Oriental Pearl TV tower, Visit ke Nanjing Road & free easy, Visit ke Jewelry Store & Medicine Store, Cek in hotel di Shanghai & istirahat',
                        'Day 05 (Breakfast, Lunch): Visit ke Starbuch Shanghai, Photo stop di LB boat & visit ke Yu Garden, Visit ke City God Temple (Chenghuang Miao)',
                        'Day 06 (Breakfast): Drop pagi ke bandara, Terbang dari Shanghai menuju Singapura, Peserta yang kembali ke batam akan di drop ke pelabuhan untuk menyeberang ke Batam & perjalanan selesai'
                    ],
                    termasuk: [
                        'Tiket ferry Batam ke Johor Bahru & Singapore ke Batam + tax (khusus peserta dari Batam)',
                        'Tiket pesawat Kuala Lumpur (KUL) ke Shanghai (PVG) & Shanghai (PVG) ke Singapore (SIN) berdasarkan harga promo',
                        'Gratis bagasi kabin max. 7 kilo PP',
                        'Transportasi bus wisata selama perjalanan sesuai program',
                        'Menginap 4 malam di China. Hotel setara bintang 3, Twin sharing',
                        '5x lunch, 2x dinner, 4x breakfast (Start Batam)',
                        '4x lunch, 2x dinner, 4x breakfast (Start Kuala Lumpur)',
                        'Tour guide lokal berbahasa Indonesia / Inggris tergantung ketersediaan',
                        'Tour leader menemani selama perjalanan (jika min. 10 pax)',
                        'Biaya visa grup China Min. 10 orang',
                        'Biaya tipping guide & driver di China'
                    ],
                    tidakTermasuk: [
                        'Asuransi perjalanan, pengeluaran pribadi, & penambahan jadwal',
                        'Penambahan tiket pesawat, apabila pada saat pembayaran total harga tiket lebih dari limit yang ditentukan'
                    ],
                    galeri: [
                        { judul: 'Shanghai Bund', url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=500&q=80' },
                        { judul: 'Hangzhou West Lake', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '6D5N Dubai - Desert Safari',
                    sub: 'Start Batam',
                    harga: 'Mulai Rp 13.850.000',
                    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Hari Pertama (No Meal): Peserta start Batam, Berkumpul di pelabuhan Batam Centre sore hari & menyeberang ke Singapore. Drop ke Changi airport, Terbang ke Dubai dini hari, Peserta dari kota lain yang memiliki penerbangan langsung ke Singapura, dapat mengambil penerbangan langsung ke Singapura',
                        'Hari Kedua (Dinner Cruise): Landing di Dubai jam 5 pagi waktu setempat. Drop ke hotel (check in hotel mulai jam 15.00). Agenda free & easy, Sore hari dijemput & drop ke Dubai Creek untuk dinner cruise',
                        'Hari Ketiga (Breakfast): Sarapan pagi dihotel & tamu akan dijemput jam 09.00 pagi untuk half day city tour hingga jam 14.00, Visit ke Dubai Frame & Museum of The Future, Melewati Jumeirah & photo stop di Burj Al Arab, Drop ke Dubai Downtown, Dubai Mall, dan photo dengan View Burj Khalifa, Drop ke hotel & agenda bebas',
                        'Hari Keempat (Breakfast, Dinner): Sarapan pagi dihotel & agenda bebas masing-masing, Sore jam 14.30 akan dijemput untuk mengikuti kegiatan desert safari dan dune bashing, Mengunjungi desert camp & aktivitas tatto henna, Experience naik unta & shisha, Makan malam dengan pertunjukan spesial',
                        'Hari Kelima (Breakfast): Sarapan pagi dihotel & kemudian free & easy, Cek out hotel & drop ke bandara untuk terbang kembali ke Singapore pada malam hari',
                        'Hari Keenam (No Meal): Mendarat di Singapore pada pagi hari & akan dijemput oleh driver. Drop ke Harbour Front, menyeberang kembali ke Batam & perjalanan selesai, Peserta dari kota selain Batam, dapat mengambil penerbangan langsung dari Singapura ke kota asal'
                    ],
                    termasuk: [
                        'Tiket ferry dari Batam ke Singapore + sea port tax PP',
                        'Shuttle transport dari pelabuhan ke bandara Changi PP',
                        'Tiket pesawat dari Singapore ke Dubai + bagasi kabin 7 kg & bagasi terdaftar 25 kg PP',
                        'Transport selama perjalanan di Dubai sesuai program',
                        'Menginap 3 malam dihotel setara bintang 3, twin sharing',
                        '2x dinner, 3x breakfast (Halal food)',
                        'Tour guide lokal berbahasa Inggris',
                        'Biaya paket deser safari, naik unda, dan aktivitas lain sesuai itinerary',
                        'Tour leader dari batam menemani hingga cek in di Changi Airport'
                    ],
                    tidakTermasuk: [
                        'Biaya apply visa Rp. 1,200,000/orang',
                        'Biaya tipping wajib Rp. 500,000/orang',
                        'Biaya asuransi mulai Rp. 200,000/orang (tidak wajib)',
                        'Biaya selisih tiket pesawat, apabila saat booking melebihi limit harga yang ditentukan. Serta jika kelebihan bagasi',
                        'Penambahan perjalanan & pengeluaran pribadi diluar program'
                    ],
                    galeri: [
                        { judul: 'Burj Khalifa Dubai', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80' },
                        { judul: 'Desert Safari', url: 'https://images.unsplash.com/photo-14513375f6013-394c45162a24?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '10-Day Trip Eropa (Prancis, Belgia, Jerman, Belanda, Swiss, Italia)',
                    sub: 'Promo Terbaik - Hanya 39,5 JT',
                    harga: 'Rp 39,5 JT',
                    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Day 01 (Meal On Board): Peserta berkumpul di pelabuhan Batam Centre, menyeberang ke Singapore, Terbang dari Singapore menuju Paris',
                        'Day 02 (No Meal | Paris): Mendarat di Paris Airport (CDG). Total penerbangan 18 jam dengan transit, Visit ke Louvre Museum & photo stop di Trocadero dengan view menara Eiffel, Visit ke Arc de Triomphe & Bateaux Mouches cruising di sungai Seine (opsional tix)',
                        'Day 03 (Breakfast | Paris - Brussel - Amsterdam): Transfer ke Brussel, Walking tour Grand Palace, Manneken Pis, & Chocolate Shop Brussel, Transfer ke Amsterdam',
                        'Day 04 (Breakfast | Amsterdam - Volendam - Zaanse Schans): Transfer ke Volendam & Souvenir di Volendam, Sesi photo di Volendam Photo Studio dengan kostum tradisional, Transfer ke Zaanse Schans & Photo stop di windmills / kincir angin, Kembali ke Amsterdam',
                        'Day 05 (Breakfast | Amsterdam - Cologne - Frankfurt): Transfer ke Cologne & Photo stop di Cologne Cathedral, Transfer ke Frankfurt',
                        'Day 06 (Breakfast | Frankfurt - Titisee - Lucerne): Transfer ke Titisee & Visit ke Visit cuckoo clock shops, Free & easy di Titisee & Transfer ke Lucerne, Walking tour Chapel Bridge & Shopping di Casagrande Souvenir Shop',
                        'Day 07 (Breakfast | Mt. Titlis - Excurtion): Transfer ke Engelberg, Naik Cable car ke Mount Titlis (tiket opsional) & Free time di puncak Mount Titlis, Kembali ke Engelberg & shopping di Lucerne',
                        'Day 08 (Breakfast | Lucerne - Milan): Transfer ke Milan & Walking tour dari Sforza castle sampai ke Duomo, Photo stop di Teatro alla Scala & Visit & shopping ke Galleria Vittorio Emanuele II, Visit ke Milan Cathedral & Free time untuk shopping, Photo stop di San Siro Stadium',
                        'Day 09 (Breakfast | Milan - Singapore Flight): Check out hotel & transfer ke Milan Malpensa Airport, Terbang kembali ke Singapore dengan durasi 17 jam termasuk transit',
                        'Day 10 (Meal On Board | Landing Singapore - Batam): Landing siang hari di Singapore & drop ke Harbour Front Ferry terminal, Menyeberang kembali ke Batam & perjalanan selesai'
                    ],
                    termasuk: [
                        'Tiket ferry dari Batam ke Singapore + tax PP',
                        'Tiket pesawat dari Singapore ke Paris & Milan ke Singapore + airport tax (based on tiket promosi)',
                        'Gratis bagasi 20 kg + 6 kg kabin (selama promo)',
                        'Transport bus wisata selama perjalanan sesuai program',
                        'Menginap 7 malam di hotel setara *2, *3, *4. Twin share + breakfast',
                        'Tour guide lokal berbahasa Indonesia',
                        'Tour leader dari Batam hingga kembali (Min. 10 pax)',
                        'Tiket masuk tempat wisata yang dikunjungi sesuai program',
                        'Tipping untuk guide & driver Eropa',
                        'Asuransi perjalanan dengan pertanggunggangan hinga 750 juta rupiah'
                    ],
                    tidakTermasuk: [
                        'Biaya visa Schengen Rp. 3,500,000 / orang',
                        'Min. peserta 10 orang dapat melakukan rekam biometrik di Batam dengan biaya tambahan mulai 1,5 Juta Rupiah',
                        'Makan siang & malam selama perjalanan sesuai program (estimasi 20 Euro / orang / sekali makan)',
                        'Tambahan tiket pesawat, apabila pada saat booking harga tiket telah melebihi harga yang ditentukan',
                        'Penambahan bagasi, porter, dan laundry.'
                    ],
                    galeri: [
                        { judul: 'Eiffel Tower Paris', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: 'Explore Hongkong, Macau & Shenzhen (SIC Trip)',
                    sub: 'Mulai 8 JT - 13 JT (Start Batam / Hongkong)',
                    harga: 'Mulai Rp 8 JT',
                    img: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Hari 1: Tiba di Hongkong & Victoria Peak tour',
                        'Hari 2: Disneyland / Free & Easy',
                        'Hari 3: Perjalanan ke Macau & Shenzhen',
                        'Hari 4-5: City tour & kepulangan'
                    ],
                    termasuk: ['Hotel', 'Transport', 'Guide', 'City Tour'],
                    tidakTermasuk: ['Tiket Pesawat Utama', 'Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Hongkong Skyline', url: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=500&q=80' }
                    ]
                },
                {
                    nama: '6D Tour China Shanghai (Hangzhou - Suzhou)',
                    sub: 'Promo All In - 13,5 JT',
                    harga: 'Rp 13,5 JT',
                    img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=500&q=80',
                    itinerary: [
                        'Hari 1: Tiba di Shanghai & The Bund tour',
                        'Hari 2: Hangzhou (West Lake & Pagoda)',
                        'Hari 3: Suzhou traditional gardens',
                        'Hari 4-5: Shanghai shopping & modern attractions',
                        'Hari 6: Kepulangan'
                    ],
                    termasuk: ['Tiket Pesawat', 'Makan', 'Hotel Bintang 4', 'Tiket Masuk Wisata', 'Tour Guide', 'Transportasi Bus', 'Visa Grup & Tipping'],
                    tidakTermasuk: ['Pengeluaran Pribadi'],
                    galeri: [
                        { judul: 'Shanghai Bund', url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=500&q=80' }
                    ]
                }
            ],

            tourPilihan: null
        };
    }

    handleFormUmumChange = (e) => {
        const { name, value } = e.target;
        const { formPemesananUmum } = this.state;

        let updatedForm = { ...formPemesananUmum, [name]: value };

        // Jika tanggal pergi diubah, pastikan tanggal pulang tidak mendahului tanggal pergi yang baru
        if (name === 'tanggal' && updatedForm.jenisPerjalanan === 'Pulang Pergi') {
            if (updatedForm.tanggalPulang < value) {
                updatedForm.tanggalPulang = value;
            }
        }

        this.setState({ formPemesananUmum: updatedForm });
    };

    handleAuthChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            authForm: { ...this.state.authForm, [name]: value }
        });
    };

    handleEmailContinue = (e) => {
        e.preventDefault();
        const { email } = this.state.authForm;
        if (!email) {
            alert('Mohon masukkan alamat email Anda!');
            return;
        }
        const namaAkun = email.split('@')[0];
        this.setState({
            userLogin: namaAkun,
            showLoginModal: false,
            authForm: { nama: '', email: '', password: '' }
        });
        alert(`Berhasil masuk dengan email: ${email}`);
    };

    handleSocialClick = (provider) => {
        if (provider === 'Google') {
            this.setState({ authMode: 'googleAccountChooser' });
        } else {
            this.setState({ authMode: 'socialInput', selectedProvider: provider });
        }
    };

    handleGoogleAccountSelect = (namaAkun, emailAkun) => {
        this.setState({
            userLogin: `${namaAkun} (Google)`,
            showLoginModal: false,
            authMode: 'login'
        });
        alert(`Berhasil masuk menggunakan akun Google: ${emailAkun}`);
    };

    handleSocialLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state.authForm;
        const { selectedProvider } = this.state;

        if (!email || !password) {
            alert('Mohon masukkan email dan password akun ' + selectedProvider + ' Anda.');
            return;
        }

        const namaAkun = email.split('@')[0];
        this.setState({
            userLogin: `${namaAkun} (${selectedProvider})`,
            showLoginModal: false,
            authMode: 'login',
            authForm: { nama: '', email: '', password: '' }
        });
        alert(`Berhasil masuk menggunakan akun ${selectedProvider}!`);
    };

    handleLogout = () => {
        if (window.confirm('Apakah Anda yakin ingin keluar (Log Out)?')) {
            this.setState({ userLogin: null });
            alert('Anda telah berhasil keluar.');
        }
    };

    handleBookingUmumSubmit = (e) => {
        e.preventDefault();
        const { namaPemesan, nomorTelepon, jenisLayanan, jenisPerjalanan, tanggal, tanggalPulang, jumlahPax, catatan } = this.state.formPemesananUmum;

        if (!namaPemesan || !nomorTelepon) {
            alert('Mohon isi Nama Lengkap dan Nomor WhatsApp Anda!');
            return;
        }

        const todayStr = new Date().toISOString().split('T')[0];

        // VALIDASI KEAMANAN: Tanggal pergi tidak boleh di masa lalu
        if (tanggal < todayStr) {
            alert('❌ Kesalahan Tanggal: Tanggal Keberangkatan (Pergi) tidak boleh di masa lalu!');
            return;
        }

        // VALIDASI KEAMANAN: Tanggal pulang tidak boleh lebih awal dari tanggal pergi
        if (jenisPerjalanan === 'Pulang Pergi' && tanggalPulang < tanggal) {
            alert('❌ Kesalahan Tanggal: Tanggal Pulang tidak boleh lebih awal dari Tanggal Keberangkatan (Pergi)!');
            return;
        }

        let infoTanggal = `*Tgl Pergi:* ${tanggal}`;
        if (jenisPerjalanan === 'Pulang Pergi') {
            infoTanggal += `\n*Tgl Pulang:* ${tanggalPulang}`;
        }

        const pesanWap = `Halo Admin PT. Bethesda Libur Tiba Tour & Travel,\n\nSaya ingin memesan:\n*Paket Tour:* ${jenisLayanan}\n*Jenis Perjalanan:* ${jenisPerjalanan}\n*Nama Pemesan:* ${namaPemesan}\n*No. WhatsApp:* ${nomorTelepon}\n${infoTanggal}\n*Jumlah/Pax:* ${jumlahPax}\n*Catatan:* ${catatan || '-'}\n\nMohon info selanjutnya. Terima kasih!`;
        window.open(`https://wa.me/6281313137843?text=${encodeURIComponent(pesanWap)}`, '_blank');
    };

    pilihLayanan = (namaLayanan) => {
        this.setState({
            formPemesananUmum: { ...this.state.formPemesananUmum, jenisLayanan: namaLayanan },
            halamanAktif: 'Booking'
        });
    };

    pilihPaketTour = (paket) => {
        this.setState({
            tourPilihan: paket,
            formPemesananUmum: { ...this.state.formPemesananUmum, jenisLayanan: paket.nama }
        });
        const detailSec = document.getElementById('detail-tour-section');
        if (detailSec) {
            detailSec.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {
        const { halamanAktif, daftarDomestik, daftarInternasional, tourPilihan, formPemesananUmum, showLoginModal, authMode, selectedProvider, authForm, userLogin } = this.state;

        // Mendapatkan tanggal hari ini secara dinamis dengan format YYYY-MM-DD
        const todayDate = new Date().toISOString().split('T')[0];

        const listLayanan = [
            { icon: '🚢', judul: 'TIKET PELNI' },
            { icon: '🚢', judul: 'TIKET FERRY SINGAPORE' },
            { icon: '🚢', judul: 'TIKET FERRY MALAYSIA' },
            { icon: '✈️', judul: 'TIKET PESAWAT' },
            { icon: '🌴', judul: 'TIKET WISATA' },
            { icon: '🏢', judul: 'TOUR DOMESTIC' },
            { icon: '🗺️', judul: 'TOUR MANCANEGARA' },
            { icon: '🏨', judul: 'VOUCHER HOTEL' },
            { icon: '🚗', judul: 'RENT CAR' }
        ];

        return (
            <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#333', backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '60px', position: 'relative' }}>

                {/* TOP NAVBAR */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1e3c72', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🌴 PT. Bethesda Libur Tiba Tour & Travel
                    </div>
                    <div style={{ display: 'flex', gap: '25px', fontSize: '0.95rem', fontWeight: '500', color: '#555' }}>
                        <span onClick={() => this.setState({ halamanAktif: 'Home' })} style={{ cursor: 'pointer', color: halamanAktif === 'Home' ? '#1976d2' : '#555', fontWeight: halamanAktif === 'Home' ? 'bold' : '500' }}>Home</span>
                        <span onClick={() => this.setState({ halamanAktif: 'Booking' })} style={{ cursor: 'pointer', color: halamanAktif === 'Booking' ? '#1976d2' : '#555', fontWeight: halamanAktif === 'Booking' ? 'bold' : '500' }}>Booking</span>
                        <span onClick={() => this.setState({ halamanAktif: 'Partnership' })} style={{ cursor: 'pointer', color: halamanAktif === 'Partnership' ? '#1976d2' : '#555', fontWeight: halamanAktif === 'Partnership' ? 'bold' : '500' }}>Partnership</span>
                        <span onClick={() => this.setState({ halamanAktif: 'Blog' })} style={{ cursor: 'pointer', color: halamanAktif === 'Blog' ? '#1976d2' : '#555', fontWeight: halamanAktif === 'Blog' ? 'bold' : '500' }}>Blog</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        {userLogin ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontWeight: 'bold', color: '#2e7d32', backgroundColor: '#e8f5e9', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    👤 {userLogin}
                                </span>
                                <button onClick={this.handleLogout} style={{ padding: '8px 14px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}>
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <button onClick={() => this.setState({ showLoginModal: true, authMode: 'login' })} style={{ padding: '8px 22px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
                                Login / Daftar
                            </button>
                        )}
                    </div>
                </div>

                {/* MODAL / POP-UP LOGIN TRIP.COM & GOOGLE CHOOSER */}
                {showLoginModal && (
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '15px' }}>
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', width: '450px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '35px 30px', position: 'relative', textAlign: 'center' }}>
                            <button onClick={() => this.setState({ showLoginModal: false, authMode: 'login' })} style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#888' }}>✕</button>

                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#222', margin: '0 0 10px 0' }}>
                                {authMode === 'googleAccountChooser' ? 'Pilih akun' : (authMode === 'socialInput' ? `Login dengan ${selectedProvider}` : 'Login / Daftar')}
                            </h2>

                            {authMode === 'login' && (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.85rem', color: '#555', marginBottom: '25px' }}>
                                        <span>📅 Kelola pemesanan dengan mudah</span>
                                    </div>

                                    <form onSubmit={this.handleEmailContinue}>
                                        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                                            <input type="email" name="email" value={authForm.email} onChange={this.handleAuthChange} placeholder="Harap masukkan alamat email" required style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box', fontSize: '1rem', outline: 'none' }} />
                                        </div>
                                        <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#e0e0e0', color: '#777', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', marginBottom: '20px' }}>
                                            Lanjutkan dengan Email
                                        </button>
                                    </form>

                                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: '#aaa', margin: '0 0 20px 0', fontSize: '0.9rem' }}>
                                        <div style={{ flex: 1, borderBottom: '1px solid #ddd' }}></div>
                                        <span style={{ padding: '0 15px' }}>atau</span>
                                        <div style={{ flex: 1, borderBottom: '1px solid #ddd' }}></div>
                                    </div>

                                    {/* TOMBOL SOSIAL MEDIA DENGAN IKON & WARNA ASLI */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
                                        <div onClick={() => this.handleSocialClick('Google')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '12px', borderRadius: '8px', border: '1px solid #dadce0', cursor: 'pointer', backgroundColor: 'white', color: '#3c4043', fontWeight: 'bold', fontSize: '0.95rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" /><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.15v3.14C3.15 21.37 7.23 24 12 24z" /><path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.39-1.49-.39-2.24s.14-1.52.39-2.24V6.62H1.15C.42 8.1 0 9.77 0 12s.42 3.9 1.15 5.38l4.12-3.14z" /><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.15 2.63 1.15 6.62l4.12 3.14c.95-2.85 3.6-4.96 6.73-4.96z" /></svg>
                                            Lanjutkan dengan Google
                                        </div>

                                        <div onClick={() => this.handleSocialClick('Apple')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '12px', borderRadius: '8px', border: '1px solid #222', cursor: 'pointer', backgroundColor: '#222', color: 'white', fontWeight: 'bold', fontSize: '0.95rem' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.82 5.09c.63-.78 1.05-1.86.93-2.94-.92.04-2.03.62-2.68 1.39-.58.68-1.09 1.77-.95 2.83 1.03.08 2.07-.51 2.7-1.28z" /></svg>
                                            Lanjutkan dengan Apple
                                        </div>

                                        <div onClick={() => this.handleSocialClick('Facebook')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '12px', borderRadius: '8px', border: '1px solid #1877F2', cursor: 'pointer', backgroundColor: '#1877F2', color: 'white', fontWeight: 'bold', fontSize: '0.95rem' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                            Lanjutkan dengan Facebook
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* PILIH AKUN GOOGLE CHOOSER */}
                            {authMode === 'googleAccountChooser' && (
                                <div style={{ textAlign: 'left', marginTop: '10px' }}>
                                    <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>Lanjutkan ke <b>PT. Bethesda Libur Tiba</b></p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                                        <div onClick={() => this.handleGoogleAccountSelect('Juita Nastika', 'juita.nastika20@gmail.com')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', cursor: 'pointer', backgroundColor: '#f9f9f9' }}>
                                            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#1976d2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JN</div>
                                            <div>
                                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>Juita Nastika</div>
                                                <div style={{ fontSize: '0.75rem', color: '#666' }}>juita.nastika20@gmail.com</div>
                                            </div>
                                        </div>

                                        <div onClick={() => this.handleGoogleAccountSelect('Mariska Pratiwi', 'mrskaptrw@gmail.com')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', cursor: 'pointer', backgroundColor: '#f9f9f9' }}>
                                            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#388e3c', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>MP</div>
                                            <div>
                                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>Mariska Pratiwi</div>
                                                <div style={{ fontSize: '0.75rem', color: '#666' }}>mrskaptrw@gmail.com</div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" onClick={() => this.setState({ authMode: 'login' })} style={{ width: '100%', padding: '10px', backgroundColor: '#f1f3f5', color: '#333', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Kembali</button>
                                </div>
                            )}

                            {/* FORM INPUT PASSWORD UNTUK APPLE / FACEBOOK */}
                            {authMode === 'socialInput' && (
                                <form onSubmit={this.handleSocialLoginSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '15px' }}>Silakan masukkan kredensial akun <b>{selectedProvider}</b> Anda:</p>
                                    <div style={{ marginBottom: '15px' }}>
                                        <input type="email" name="email" value={authForm.email} onChange={this.handleAuthChange} placeholder="Email" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <input type="password" name="password" value={authForm.password} onChange={this.handleAuthChange} placeholder="Kata Sandi" required style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button type="button" onClick={() => this.setState({ authMode: 'login' })} style={{ flex: 1, padding: '12px', backgroundColor: '#f1f3f5', color: '#333', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Kembali</button>
                                        <button type="submit" style={{ flex: 1, padding: '12px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Masuk</button>
                                    </div>
                                </form>
                            )}

                            <p style={{ fontSize: '0.75rem', color: '#777', lineHeight: '1.4', margin: '15px 0 0 0' }}>
                                Dengan login atau mendaftar, Anda dianggap telah menyetujui <span style={{ color: '#1976d2', cursor: 'pointer' }}>Syarat dan Ketentuan</span> dan <span style={{ color: '#1976d2', cursor: 'pointer' }}>Kebijakan Privasi</span> PT. Bethesda Libur Tiba.
                            </p>
                        </div>
                    </div>
                )}

                {/* 1. HALAMAN HOME */}
                {halamanAktif === 'Home' && (
                    <div>
                        <div style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', padding: '50px 20px 70px 20px', textAlign: 'center' }}>
                            <span style={{ backgroundColor: 'rgba(25, 118, 210, 0.1)', color: '#1976d2', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                PT. Bethesda Libur Tiba Tour & Travel
                            </span>
                            <h1 style={{ fontSize: '2.8rem', color: '#1e3c72', margin: '15px 0 10px 0' }}>
                                KATALOG PAKET TOUR LENGKAP
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#555', fontStyle: 'italic', fontWeight: '600', maxWidth: '600px', margin: '0 auto' }}>
                                Your Journey, Our Priority
                            </p>
                        </div>

                        {/* Layanan Utama */}
                        <div style={{ maxWidth: '1000px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                                <h2 style={{ fontSize: '1.8rem', color: '#1e3c72', margin: '0' }}>✨ Layanan Utama Kami</h2>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                                {listLayanan.map((layanan, index) => (
                                    <div key={index} onClick={() => this.pilihLayanan(layanan.judul)} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '15px 20px', borderRadius: '10px', boxShadow: '0 3px 8px rgba(0,0,0,0.05)', borderLeft: '4px solid #1976d2', cursor: 'pointer' }}>
                                        <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>{layanan.icon}</span>
                                        <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#1e3c72' }}>{layanan.judul}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* KATEGORI 1: DOMESTIK */}
                        <div style={{ maxWidth: '1100px', margin: '50px auto 0 auto', padding: '0 20px' }}>
                            <div style={{ marginBottom: '20px', borderBottom: '3px solid #388e3c', paddingBottom: '10px' }}>
                                <h2 style={{ fontSize: '1.8rem', color: '#2e7d32', margin: '0' }}>🌴 Paket Wisata Domestik & Lokal</h2>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '4px 0 0 0' }}>Nikmati liburan seru di pulau dan resort terbaik sekitar Batam & Kepri.</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                                {daftarDomestik.map((paket, index) => (
                                    <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden', border: tourPilihan && tourPilihan.nama === paket.nama ? '3px solid #2e7d32' : '1px solid #eee' }}>
                                        <div style={{ height: '180px', backgroundImage: `url("${paket.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                        <div style={{ padding: '20px' }}>
                                            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#1e3c72' }}>{paket.nama}</h3>
                                            <p style={{ fontSize: '0.85rem', color: '#777', margin: '0 0 12px 0' }}>📍 {paket.sub}</p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '1.1rem', color: '#e65100', fontWeight: 'bold' }}>{paket.harga}</span>
                                                <button onClick={() => this.pilihPaketTour(paket)} style={{ padding: '8px 16px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}>
                                                    Lihat Detail →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* KATEGORI 2: INTERNASIONAL */}
                        <div style={{ maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
                            <div style={{ marginBottom: '20px', borderBottom: '3px solid #1976d2', paddingBottom: '10px' }}>
                                <h2 style={{ fontSize: '1.8rem', color: '#1976d2', margin: '0' }}>✈️ Paket Tour Mancanegara (Luar Negeri)</h2>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '4px 0 0 0' }}>Jelajahi keindahan negara tetangga hingga benua Eropa bersama pemandu profesional.</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                                {daftarInternasional.map((paket, index) => (
                                    <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden', border: tourPilihan && tourPilihan.nama === paket.nama ? '3px solid #1976d2' : '1px solid #eee' }}>
                                        <div style={{ height: '180px', backgroundImage: `url("${paket.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                        <div style={{ padding: '20px' }}>
                                            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#1e3c72' }}>{paket.nama}</h3>
                                            <p style={{ fontSize: '0.85rem', color: '#777', margin: '0 0 12px 0' }}>📍 {paket.sub}</p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '1.1rem', color: '#e65100', fontWeight: 'bold' }}>{paket.harga}</span>
                                                <button onClick={() => this.pilihPaketTour(paket)} style={{ padding: '8px 16px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}>
                                                    Lihat Detail →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DETAIL TOUR PILIHAN */}
                        {tourPilihan && (
                            <div style={{ maxWidth: '1100px', margin: '0 auto 50px auto', padding: '0 20px' }}>
                                <div id="detail-tour-section" style={{ padding: '40px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', borderTop: '6px solid #1e3c72' }}>
                                    <div style={{ backgroundColor: '#1e3c72', color: 'white', padding: '20px 25px', borderRadius: '8px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: '#ff9800', padding: '3px 10px', borderRadius: '4px', fontWeight: 'bold' }}>Detail Paket Pilihan</span>
                                            <h2 style={{ fontSize: '2rem', margin: '10px 0 5px 0' }}>{tourPilihan.nama}</h2>
                                            <p style={{ margin: 0, fontSize: '1rem', color: '#e3f2fd' }}>{tourPilihan.sub}</p>
                                        </div>
                                        <button onClick={() => this.setState({ tourPilihan: null })} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
                                    </div>

                                    {/* Galeri Tempat Kunjungan */}
                                    <div style={{ marginBottom: '35px' }}>
                                        <h3 style={{ color: '#1e3c72', fontSize: '1.3rem', marginBottom: '15px' }}>📸 Galeri Tempat yang Akan Dikunjungi</h3>
                                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                            {tourPilihan.galeri && tourPilihan.galeri.map((foto, idx) => (
                                                <div key={idx} style={{ flex: 1, minWidth: '240px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
                                                    <div style={{ height: '180px', backgroundImage: `url("${foto.url}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                                    <div style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#1e3c72', fontSize: '0.95rem' }}>{foto.judul}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Itinerary Tour */}
                                    {tourPilihan.itinerary && (
                                        <div style={{ backgroundColor: '#f1f8e9', padding: '20px', borderRadius: '8px', border: '1px solid #c8e6c9', marginBottom: '20px' }}>
                                            <h4 style={{ color: '#2e7d32', margin: '0 0 10px 0', fontSize: '1.1rem' }}>📅 Itinerary Tour</h4>
                                            <ul style={{ paddingLeft: '20px', margin: 0, color: '#333', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                {tourPilihan.itinerary.map((kegiatan, idx) => (
                                                    <li key={idx} style={{ marginBottom: '6px' }}>{kegiatan}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Paket Termasuk */}
                                    <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px', border: '1px solid #c8e6c9', marginBottom: '20px' }}>
                                        <h4 style={{ color: '#2e7d32', margin: '0 0 10px 0', fontSize: '1.1rem' }}>✅ Paket Termasuk</h4>
                                        <ul style={{ paddingLeft: '20px', margin: 0, color: '#333', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                            {tourPilihan.termasuk.map((item, idx) => (
                                                <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Paket Tidak Termasuk */}
                                    {tourPilihan.tidakTermasuk && (
                                        <div style={{ backgroundColor: '#ffebee', padding: '20px', borderRadius: '8px', border: '1px solid #ffcdd2', marginBottom: '30px' }}>
                                            <h4 style={{ color: '#c62828', margin: '0 0 10px 0', fontSize: '1.1rem' }}>❌ Paket Tidak Termasuk</h4>
                                            <ul style={{ paddingLeft: '20px', margin: 0, color: '#333', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                {tourPilihan.tidakTermasuk.map((item, idx) => (
                                                    <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div style={{ textAlign: 'center' }}>
                                        <button onClick={() => {
                                            this.setState({
                                                formPemesananUmum: { ...this.state.formPemesananUmum, jenisLayanan: tourPilihan.nama },
                                                halamanAktif: 'Booking'
                                            });
                                        }} style={{ padding: '15px 40px', backgroundColor: '#388e3c', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(56,142,60,0.3)' }}>
                                            🚀 Lanjut ke Halaman Booking Paket Ini
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 2. HALAMAN BOOKING */}
                {halamanAktif === 'Booking' && (
                    <div style={{ maxWidth: '800px', margin: '40px auto 0 auto', padding: '30px', backgroundColor: 'white', borderRadius: '14px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderTop: '5px solid #1976d2' }}>
                        <h2 style={{ color: '#1e3c72', margin: '0 0 5px 0', fontSize: '1.8rem' }}>📝 Halaman Pemesanan & Booking</h2>
                        <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '25px' }}>Silakan isi formulir di bawah ini untuk pemesanan paket tour wisata pilihan Anda.</p>

                        <form onSubmit={this.handleBookingUmumSubmit}>

                            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', backgroundColor: '#f1f3f5', padding: '6px', borderRadius: '8px', width: 'fit-content' }}>
                                <button type="button" onClick={() => this.setState({ formPemesananUmum: { ...formPemesananUmum, jenisPerjalanan: 'Sekali Jalan' } })} style={{ padding: '8px 20px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer', backgroundColor: formPemesananUmum.jenisPerjalanan === 'Sekali Jalan' ? '#1976d2' : 'transparent', color: formPemesananUmum.jenisPerjalanan === 'Sekali Jalan' ? 'white' : '#555' }}>
                                    Sekali Jalan
                                </button>
                                <button type="button" onClick={() => this.setState({ formPemesananUmum: { ...formPemesananUmum, jenisPerjalanan: 'Pulang Pergi' } })} style={{ padding: '8px 20px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer', backgroundColor: formPemesananUmum.jenisPerjalanan === 'Pulang Pergi' ? '#1976d2' : 'transparent', color: formPemesananUmum.jenisPerjalanan === 'Pulang Pergi' ? 'white' : '#555' }}>
                                    Pulang Pergi (PP)
                                </button>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px' }}>
                                <div style={{ flex: 1, minWidth: '220px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Nama Pemesan / Ketua</label>
                                    <input type="text" name="namaPemesan" value={formPemesananUmum.namaPemesan} onChange={this.handleFormUmumChange} placeholder="Nama lengkap" required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: 1, minWidth: '220px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>No. WhatsApp</label>
                                    <input type="tel" name="nomorTelepon" value={formPemesananUmum.nomorTelepon} onChange={this.handleFormUmumChange} placeholder="08xxxxxxxxxx" required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px' }}>
                                <div style={{ flex: 1, minWidth: '220px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Pilihan Paket Tour</label>
                                    <input type="text" name="jenisLayanan" value={formPemesananUmum.jenisLayanan} onChange={this.handleFormUmumChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', backgroundColor: '#f1f3f5', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: 1, minWidth: '220px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Tanggal Pergi (Keberangkatan)</label>
                                    {/* Atribut min={todayDate} memastikan tanggal di masa lalu (seperti bulan Agustus) terkunci otomatis */}
                                    <input type="date" name="tanggal" min={todayDate} value={formPemesananUmum.tanggal} onChange={this.handleFormUmumChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                                </div>
                            </div>

                            {formPemesananUmum.jenisPerjalanan === 'Pulang Pergi' && (
                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px', color: '#1976d2' }}>📅 Tanggal Pulang</label>
                                    {/* Atribut min={formPemesananUmum.tanggal} mengunci tanggal pulang agar tidak bisa mendahului tanggal pergi */}
                                    <input type="date" name="tanggalPulang" min={formPemesananUmum.tanggal} value={formPemesananUmum.tanggalPulang} onChange={this.handleFormUmumChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #1976d2', boxSizing: 'border-box', backgroundColor: '#e3f2fd' }} />
                                </div>
                            )}

                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Jumlah / Pax</label>
                                <input type="text" name="jumlahPax" value={formPemesananUmum.jumlahPax} onChange={this.handleFormUmumChange} placeholder="Contoh: 2 Orang" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Catatan Tambahan</label>
                                <textarea name="catatan" value={formPemesananUmum.catatan} onChange={this.handleFormUmumChange} placeholder="Catatan khusus..." rows="3" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}></textarea>
                            </div>
                            <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 4px 10px rgba(37,211,102,0.3)' }}>
                                💬 Kirim Pemesanan via WhatsApp Admin
                            </button>
                        </form>
                    </div>
                )}

                {/* 3. HALAMAN PARTNERSHIP */}
                {halamanAktif === 'Partnership' && (
                    <div style={{ maxWidth: '800px', margin: '40px auto 0 auto', padding: '30px', backgroundColor: 'white', borderRadius: '14px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                        <h2 style={{ color: '#1e3c72', fontSize: '1.8rem' }}>🤝 Kerja Sama & Partnership</h2>
                        <p style={{ color: '#555', lineHeight: '1.6' }}>
                            PT. Bethesda Libur Tiba Tour & Travel terbuka untuk kerja sama dengan agen travel lokal, instansi perusahaan, maupun penyedia akomodasi hotel dan transportasi. Hubungi nomor admin kami untuk informasi kemitraan resmi.
                        </p>
                    </div>
                )}

                {/* 4. HALAMAN BLOG */}
                {halamanAktif === 'Blog' && (
                    <div style={{ maxWidth: '800px', margin: '40px auto 0 auto', padding: '30px', backgroundColor: 'white', borderRadius: '14px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                        <h2 style={{ color: '#1e3c72', fontSize: '1.8rem' }}>📰 Blog & Tips Perjalanan</h2>
                        <p style={{ color: '#555', lineHeight: '1.6' }}>
                            Temukan berbagai artikel menarik seputar panduan wisata ke luar negeri, tips liburan hemat bersama keluarga, serta informasi terbaru seputar persyaratan dokumen perjalanan.
                        </p>
                    </div>
                )}

                {/* FOOTER INFORMASI KONTAK & ALAMAT */}
                <div style={{ maxWidth: '1000px', margin: '60px auto 0 auto', padding: '25px 30px', backgroundColor: '#1e3c72', color: 'white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#ff9800' }}>More Information :</h4>
                        <p style={{ margin: '3px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>📞 0812 7496 6641</p>
                        <p style={{ margin: '3px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>📞 0821 6044 1809</p>
                    </div>
                    <div>
                        <p style={{ margin: '3px 0', fontSize: '0.95rem' }}>🌐 @Bethesdatour&travel</p>
                    </div>
                    <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#ff9800' }}>PT. BETHESDA LIBUR TIBA</h4>
                        <p style={{ margin: '2px 0', fontSize: '0.90rem' }}>Tour & Travel</p>
                        <p style={{ margin: '2px 0', fontSize: '0.85rem', color: '#e3f2fd' }}>Gardan Raya Blok GD3 No. 12 Batam kota</p>
                    </div>
                </div>

            </div>
        );
    }
}