var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiYXV6YWllaWh6YSIsImEiOiJja3ptaXVoOWI1ZmN1MnN0dm9leDR0aGJ1In0.lHRQ9xICr6-xb_fA_ziPTA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Daily Mie Ayam Padepokan Sempu',
    subtitle: 'Urip Gur Mampir Mie Ayam',
    byline: '-By Santri Sempu-',
    footer: 'Source: Mie Ayam Bromonilan, Prambanan, dan Jakal. <br> Digawe Nganggo: Niat Apik Pas Gabut.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Rumah Gus Sempu',
            image: 'assets/sempu.jpg',
            description: 'Rumah Gus Sempu digunakan sebagai titik kumpul serta pengumpulan niat untuk mendonasikan sebagian rejeki kepada UMKM, utamanya UMKM Mie Ayam.',
            location: {
                center: [110.44051918955019, -7.74159008707318],
                zoom: 15,
                pitch: 100,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mie Ayam Kidul Pamela 7',
            image: 'assets/pamela.jpg',
            description: 'Mie Ayam selatan pamela 7 merupakan mie ayam terdekat dari ponpes sempu, 1 paket mie ayam bakso + es teh hanya 15.000 Rupiah.',
            location: {
                center: [110.44915284540117, -7.74750528803909],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Mie Ayam Prambanan Lor Rel KA',
            image: 'assets/prambanan.jpg',
            description: 'Lokasi mie ayam ini menjadi ampiran pertama ketika ingin merasakan nikmatnya udara dingin malam ditemani gemuruh suara gerbong kereta api. selain itu jika si pemilik mie ayam sedang luang, beliau juga menemani para santri dan Gus nya untuk berbagi pengalaman hidup, termasuk pengalaman saru.',
            location: {
                center: [110.48807667458082, -7.759004140077741],
                zoom: 15,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Mie Ayam Jakal Pak... (Aku Lali)',
            image: 'assets/jakal.jpg',
            description: 'opsi mie ayam jakal menjadi favorit ketika gus dan santrinya gabut kepolen. jarak yang ditempuh kurang lebih 7 Km. Disini porsinya cenderung sedikit, namun pas untuk porsi para santri. harga 1 porsi mie ayam dibawah 10.000 rupiah',
            location: {
                center: [110.39388390485712, -7.736964749841612],
                zoom: 15,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: 'fourth-chapter',
        //     alignment: 'fully',
        //     hidden: false,
        //     title: 'Third Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [-58.54195, -34.71600],
        //         zoom: 4,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
