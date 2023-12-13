// class CekirdekUretici {
//     constructor() {
//         this.kuruyemisciListesi = {
//             'Kuruyemisci1': {'tuzlu': 0, 'tuzsuz': 0, 'odemeler': 0},
//             'Kuruyemisci2': {'tuzlu': 0, 'tuzsuz': 0, 'odemeler': 0}
//         };
//     }

//     cekirdekVer(kuruyemisci, miktar, cesit) {
//         this.kuruyemisciListesi[kuruyemisci][cesit] += miktar;
//     }

//     odemeAl(kuruyemisci, miktar) {
//         this.kuruyemisciListesi[kuruyemisci]['odemeler'] += miktar;
//     }

//     kalanOdeme(kuruyemisci) {
//         const toplamMiktar = (
//             this.kuruyemisciListesi[kuruyemisci]['tuzlu'] +
//             this.kuruyemisciListesi[kuruyemisci]['tuzsuz']
//         );
//         const odemeler = this.kuruyemisciListesi[kuruyemisci]['odemeler'];
//         return toplamMiktar - odemeler;
//     }
// }

// const cekirdekUretici = new CekirdekUretici();

// function guncelle() {
//     const kuruyemisciListesiDiv = document.getElementById('kuruyemisciListesi');
//     const sonuclarDiv = document.getElementById('sonuclar');

//     kuruyemisciListesiDiv.innerHTML = '<h2>Kuruyemişçi Listesi</h2>';
//     sonuclarDiv.innerHTML = '<h2>Sonuçlar</h2>';

//     for (const kuruyemisci in cekirdekUretici.kuruyemisciListesi) {
//         const stokDurumu = cekirdekUretici.kuruyemisciListesi[kuruyemisci];
//         const kalanOdeme = cekirdekUretici.kalanOdeme(kuruyemisci);

//         kuruyemisciListesiDiv.innerHTML += `<p>${kuruyemisci}: Tuzlu ${stokDurumu['tuzlu']}, Tuzsuz ${stokDurumu['tuzsuz']}</p>`;
//         sonuclarDiv.innerHTML += `<p>${kuruyemisci}: Kalan Ödeme ${kalanOdeme} TL</p>`;
//     }
// }

// // Örnek kullanım
// cekirdekUretici.cekirdekVer('Kuruyemisci1', 3, 'tuzlu');
// cekirdekUretici.cekirdekVer('Kuruyemisci2', 5, 'tuzsuz');
// cekirdekUretici.odemeAl('Kuruyemisci1', 15);

// guncelle();

class CekirdekUretici {
    constructor() {
        this.kuruyemisciListesi = {
            'Kuruyemisci1': {'tuzlu': 0, 'tuzsuz': 0, 'odemeler': 0},
            'Kuruyemisci2': {'tuzlu': 0, 'tuzsuz': 0, 'odemeler': 0},
            // Diğer kuruyemişçiler eklenmeli
        };
        this.toplamKilo = 0;
        this.toplamFiyat = 0;
    }

    cekirdekSatisi(kuruyemisci, kilo, fiyat, satilan) {
        const toplamTutar = kilo * fiyat;
        this.kuruyemisciListesi[kuruyemisci]['odemeler'] += toplamTutar;
        this.kuruyemisciListesi[kuruyemisci]['tuzlu'] += satilan;
        this.toplamKilo += satilan;
        this.toplamFiyat += toplamTutar;
        this.guncelle();
    }

    kalanOdeme(kuruyemisci) {
        const odemeler = this.kuruyemisciListesi[kuruyemisci]['odemeler'];
        return odemeler;
    }

    guncelle() {
        const sonuclarDiv = document.getElementById('sonuclar');
        sonuclarDiv.innerHTML = '<h2>Sonuçlar</h2>';

        for (const kuruyemisci in this.kuruyemisciListesi) {
            const stokDurumu = this.kuruyemisciListesi[kuruyemisci];
            const kalanOdeme = this.kalanOdeme(kuruyemisci);

            sonuclarDiv.innerHTML += `<p>${kuruyemisci}: Kalan Ödeme ${kalanOdeme} TL, Tuzlu Stok ${stokDurumu['tuzlu']} kg</p>`;
        }

        const toplamKiloElement = document.getElementById('toplamKilo');
        toplamKiloElement.textContent = `Toplam Satılan Kilo: ${this.toplamKilo} kg`;

        const toplamFiyatElement = document.getElementById('toplamFiyat');
        toplamFiyatElement.textContent = `Toplam Kazanç: ${this.toplamFiyat} TL`;
    }
}

const cekirdekUretici = new CekirdekUretici();

function cekirdekSatisi() {
    const cekirdekKilo = parseFloat(document.getElementById('cekirdekKilo').value);
    const cekirdekFiyat = parseFloat(document.getElementById('cekirdekFiyat').value);
    const kuruyemisciAdi = document.getElementById('kuruyemisciAdi').value;
    const satilan = parseFloat(document.getElementById('satilan').value);

    if (isNaN(cekirdekKilo) || isNaN(cekirdekFiyat) || isNaN(satilan)) {
        alert("Lütfen geçerli sayısal değerler girin.");
        return;
    }

    cekirdekUretici.cekirdekSatisi(kuruyemisciAdi, cekirdekKilo, cekirdekFiyat, satilan);
}
