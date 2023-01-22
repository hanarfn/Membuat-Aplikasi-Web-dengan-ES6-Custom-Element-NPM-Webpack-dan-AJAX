
const movie = [
  {
    name: 'Peaky Blinders (2013)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
    description: 'Sebuah epik keluarga gangster berlatar di Birmingham, Inggris pada tahun 1919 dan berpusat pada sebuah geng yang menjahit pisau silet di puncak topi mereka, dan bos mereka yang garang Tommy Shelby, yang bermaksud untuk naik ke dunia.',
  },
  {
    name: 'SPYxFAMILY (2022)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg',
    description: 'Master mata-mata Twilight adalah yang terbaik dalam hal penyamaran dalam misi berbahaya atas nama dunia yang lebih baik. Tetapi ketika dia menerima tugas yang paling mustahil—menikah dan punya anak—dia mungkin akhirnya berada di atas kepalanya! Tidak seorang pun yang bergantung pada orang lain, Twilight memiliki pekerjaannya yang cocok untuknya mendapatkan seorang istri dan seorang anak untuk misinya menyusup ke sekolah swasta elit.',
  },
  {
    name: 'Pinocchio (2022)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg',
    description: 'Sebuah aksi langsung dan CGI yang menceritakan kembali kisah tercinta boneka kayu yang memulai petualangan mendebarkan untuk menjadi anak laki-laki sejati. Karakter lain termasuk Geppetto, pemahat kayu yang membangun dan memperlakukan Pinokio seolah-olah dia adalah putra kandungnya; Jiminy Cricket, yang menjadi pemandu Pinokio sekaligus "hati nurani"nya; Peri Biru; "Jujur" Yohanes; Sofia the Seagull dan The Coachman.',
  },
  {
    name: 'Fast & Furious (2009)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/95MVDO5VyjbzqInMFx6P576Ds0x.jpg',
    description: 'Fast & Furious merupakan sebuah film Amerika Serikat yang dirilis pada tahun 2009 Film yang disutradarai oleh Justin Lin ini pemainnya antara lain oleh Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster, dan masih banyak lagi. Tanggal rilisnya pada 3 April 200.',
  },
  {
    name: 'House of the Dragon (2022)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
    description: 'Seri prekuel menemukan dinasti Targaryen di puncak mutlak kekuatannya, dengan lebih dari 15 naga di bawah kuk mereka. Sebagian besar kerajaan—nyata dan imajinasi—hancur dari ketinggian seperti itu. Dalam kasus Targaryen, kejatuhan lambat mereka dimulai hampir 193 tahun sebelum peristiwa Game of Thrones, ketika Raja Viserys Targaryen melanggar tradisi seabad dengan menamai putrinya Rhaenyra pewaris Tahta Besi.',
  },
  {
    name: 'Simpsons (1989)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zI3E2a3WYma5w8emI35mgq5Iurx.jpg',
    description: 'Bertempat di Springfield, kota rata-rata di Amerika, pertunjukan ini berfokus pada kejenakaan dan petualangan sehari-hari keluarga Simpson; Homer, Marge, Bart, Lisa dan Maggie, serta ribuan pemain virtual. Sejak awal, serial ini telah menjadi ikon budaya pop, menarik ratusan selebriti menjadi bintang tamu. Acara ini juga menjadi terkenal karena satirnya yang tak kenal takut terhadap kehidupan politik, media, dan Amerika secara umum.',
  },
  {
    name: 'DC League of Super-Pets (2022)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
    description: 'When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.',
  },
  {
    name: 'Doctor Strange in the Multiverse of Madness (2022)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
    description: 'Sinopsis Doctor Strange in the Multiverse of Madness mengisahkan Stephen Strange yang kedatangan tamu dari semesta lain, yaitu America Chavez. Kehadiran America ke semesta Strange yang berada di universe utama MCU adalah untuk meminta bantuan sang superhero.',
  },
  {
    name: 'She-Hulk: Attorney at Law (2022)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3qO7wycn6o0lUJf15dupMFbEBTY.jpg',
    description: 'Jennifer Walters menavigasi kehidupan rumit seorang pengacara tunggal berusia 30-an yang juga merupakan raksasa superpowered hijau 6-kaki-7-inci.',
  },
  {
    name: 'See (2019)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg',
    description: 'See akan bersetting di masa depan, setelah sebuah virus mematikan membuat populasi manusia berkurang. Mereka yang selamat dari virus tersebut, akan mengalami kebutaan. Jason Momoa akan berperan sebagai Baba Voss, ayah dari sepasang anak kembar dengan kemampuan melihatnya, yang harus melindungi sukunya melawan seorang ratu yang sangat kuat yang menginginkan kedua anaknya mati.',
  },
  {
    name: 'Jujutsu Kaisen 0 (2021)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7wZAwXRt8cZSavUkZxKCc2dDnaE.jpg',
    description: 'Yuta Okkotsu adalah siswa sekolah menengah yang gugup yang menderita masalah serius — teman masa kecilnya Rika telah berubah menjadi kutukan dan tidak akan meninggalkannya sendirian. Karena Rika bukanlah kutukan biasa, penderitaannya diperhatikan oleh Satoru Gojo, seorang guru di SMA Jujutsu, sebuah sekolah tempat para pengusir setan belajar cara memerangi kutukan.',
  },
  {
    name: 'Fast & Furious Presents: Hobbs & Shaw (2019)',
    fanArt: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg',
    description: 'Hobbs & Shaw cinema film baru barat yang sangat seru Ini bercerita Luke Hobbs terpaksa membentuk aliansi yang mustahil dengan Deckard Shaw. Keduanya terpaksa bersatu membantu Hattie Shaw untuk memburu senjata virus berbahaya dan Brixton. Brixton adalah penjahat jenis baru yang berhasil mengubah dirinya menjadi manusia super. Keberadaanya menjadi ancaman bagi umat manusia.',
  }
];
export default movie;