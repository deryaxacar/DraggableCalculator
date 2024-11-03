<div align="center">
  <h2>Sürüklenebilir Hesap Makinesı</h2>
</div>

Bu proje, kullanıcıların temel matematiksel işlemleri gerçekleştirmesine olanak tanıyan basit bir html-css ve javascript kullanılarak oluşturulmuş hesap makinesi uygulamasıdır. Kullanıcı dostu bir arayüze sahip olan bu hesap makinesi, sayıları girmeyi ve işlemleri yapmayı kolaylaştırır. Aynı zamanda sürüklenebilir özelliğe sahipir.

---

![GIF](https://github.com/deryaxacar/DraggableCalculator/blob/main/cvid.gif)

---


**Özellikler**

- **Temel İşlemler**: Toplama, çıkarma, çarpma ve bölme işlemleri.
- **Kullanıcı Arayüzü**: Basit ve anlaşılır butonlar ile kullanıcı dostu bir tasarım.
- **Sürüklenebilir Arayüz**: Hesap makinesi penceresi, kullanıcı tarafından sürüklenebilir.
- **Temizleme Butonu**: Girdi alanını sıfırlamak için "C" butonu.
- **Sonuç Hesaplama**: "=" butonu ile işlemlerin sonuçları anında hesaplanır.

**Dosya Yapısı**

- **index.html**: Uygulamanın ana HTML yapısını içerir.
- **style.css**: Uygulamanın stil ve tasarımını tanımlar.
- **script.js**: Uygulamanın işlevselliğini sağlayan JavaScript kodunu içerir.

---

<div align="center">
  <h2>Fonksiyonlar</h2>
</div>

**`appendToResult(value)`**
- **Açıklama**: Kullanıcıdan gelen sayıları veya işlemleri sonucu eklemek için kullanılır.
- **Kullanım**: Buton tıklamalarıyla çağrılır. Örneğin, kullanıcı "7" butonuna bastığında `appendToResult('7')` çağrılır.

---

```js
/**
 * @param {string} value - Eklenecek değer (sayı veya işlem).
 */
function appendToResult(value) {
    console.log(resultElement.textContent);
    if (resultElement.textContent === '0') {
        resultElement.textContent = value; // İlk değer '0' ise, yeni değeri yaz.
    } else {
        resultElement.textContent += value; // Aksi takdirde değeri ekle.
    }
}
```

---

**`clearResult()`**
- **Açıklama**: Hesap makinesinin girdi alanını sıfırlamak için kullanılır.
- **Kullanım**: "C" butonuna basıldığında çağrılır.

---

```js
function clearResult() {
    resultElement.textContent = '0';
}
```

---

**`calculateResult()`**
- **Açıklama**: Girdi alanındaki matematiksel ifadeyi hesaplar ve sonucu görüntüler.
- **Kullanım**: "=" butonuna basıldığında çağrılır. `eval()` fonksiyonu ile işlem gerçekleştirilir.

---

```js
function calculateResult() {
    try {
        resultElement.textContent = eval(resultElement.textContent) || '';
    } catch (error) {
        resultElement.textContent = "error"; // Hata durumunda 'error' mesajı göster.
    }
}
```

---

**`startDrag(e)`**
- **Açıklama**: Hesap makinesinin sürüklenebilmesini sağlamak için kullanılır. Kullanıcı fareyi tıkladığında bu fonksiyon çalışır.
- **Kullanım**: Hesap makinesinin başlık kısmına tıklanarak sürüklendiğinde çağrılır.

---

```js

/**
 * @param {MouseEvent} e - Fare tıklama olayından gelen olay nesnesi.
 */
function startDrag(e) {
    // Hesap makinesinin sol üst köşesinin fare tıklama noktasına olan
    // mesafesini hesapla, böylece sürükleme sırasında doğru pozisyon korunur.
    let offsetX = e.clientX - calculator.getBoundingClientRect().left;
    let offsetY = e.clientY - calculator.getBoundingClientRect().top;

    /**
     * Kullanıcı fareyi hareket ettirdiğinde çalışacak fonksiyon.
     * Hesap makinesinin konumunu günceller.
     * 
     * @param {MouseEvent} event - Fare hareketi olayından gelen olay nesnesi.
     */
    function dragMove(event) {
        // Hesap makinesinin yeni konumunu ayarla.
        calculator.style.left = (event.clientX - offsetX) + 'px';
        calculator.style.top = (event.clientY - offsetY) + 'px';
    }

    /**
     * Kullanıcı fareyi bıraktığında çalışacak fonksiyon.
     * Sürükleme işlemini sonlandırır ve ilgili olay dinleyicilerini kaldırır.
     */
    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
    }

    // Fare hareket etmeye başladığında dragMove fonksiyonunu çağır,
    // fare bırakıldığında ise dragEnd fonksiyonunu çağır.
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

```

---

Bu readme dosyası Derya ACAR tarafından hazırlanmıştır.

---
