const insanlar = [
    {
        id: 1,
        isim: "Doğukan",
        soyisim: "Öztürk",
        yaş:19
    },
    {
        id: 2,
        isim: "Selen",
        soyisim: "Kavici",
        yaş: 18
    },
    {
        id:3,
        isim: "Atlas",
        soyisim: "Öztürk",
        yaş: 3
    },
    {
        id:4,
        isim: "Almira",
        soyisim: "Kavici",
        yaş: 12
    },
    {
        id: 5,
        isim: "Muhammed",
        soyisim: "Bozaba",
        yaş: 19
    },
    {
        id: 6,
        isim: "Emre",
        soyisim: "Karaarslan",
        yaş: 21
    },
    {
        id:7,
        isim: "Berkay",
        soyisim: "Akgün",
        yaş: 23
    }
];

const findByName = insanlar.find(insan => insan.isim === "Atlas");

console.log(findByName);