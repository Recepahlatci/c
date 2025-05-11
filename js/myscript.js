// Form işlemleri ve veri görüntüleme

// Formdan veri alınıp localStorage'a kaydedilir
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("kayitFormu");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const ad = document.getElementById("ad").value;
            const soyad = document.getElementById("soyad").value;
            const email = document.getElementById("email").value;

            const kullaniciVerisi = {
                ad,
                soyad,
                email
            };

            localStorage.setItem("kayitliKullanici", JSON.stringify(kullaniciVerisi));

            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";
            form.reset();
        });
    }

    // Kayıtlar sayfasında veriyi göster
    const kullaniciBilgileriDiv = document.getElementById("kullaniciBilgileri");

    if (kullaniciBilgileriDiv) {
        const veri = localStorage.getItem("kayitliKullanici");

        if (veri) {
            const k = JSON.parse(veri);
            kullaniciBilgileriDiv.innerHTML = `
                <p><strong>Ad:</strong> ${k.ad}</p>
                <p><strong>Soyad:</strong> ${k.soyad}</p>
                <p><strong>Email:</strong> ${k.email}</p>
            `;
        } else {
            kullaniciBilgileriDiv.innerHTML = "<p>Kayıtlı kullanıcı bulunamadı.</p>";
        }
    }
});
