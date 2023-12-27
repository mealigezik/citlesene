let sepet = [];

function sepeteEkle(cesit) {
    const urun = {
        cesit: cesit,
        kilo: 5, // Örnek olarak her ürün 5 kg seciyor
        fiyat: cesit === 'tuzlu' ? 85 : 75 // Tuzlu cekirdek 75 TL/kg, tuzsuz cekirdek 85 TL/kg fiyat
    };

    sepet.push(urun);
    guncelleSepet();
}

function guncelleSepet() {
    const sepetListesi = document.getElementById('sepetListesi');
    const toplamTutarElement = document.getElementById('toplamTutar');

    sepetListesi.innerHTML = '';
    let toplamTutar = 0;

    sepet.forEach(urun => {
        const li = document.createElement('li');
        li.textContent = `${urun.cesit} cekirdek - ${urun.kilo} kg - ${urun.fiyat * urun.kilo} TL`;
        sepetListesi.appendChild(li);

        toplamTutar += urun.fiyat * urun.kilo;
    });

    toplamTutarElement.textContent = `Toplam Tutar: ${toplamTutar} TL`;
}

function siparisiTamamla() {
    alert('Siparişiniz alındı! Teşekkür ederiz.');
    sepet = [];
    guncelleSepet();
}
