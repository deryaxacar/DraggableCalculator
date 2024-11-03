## Sürüklenebilir Hesap Makinesı

---

![GIF](https://github.com/deryaxacar/DraggableCalculator/blob/main/cvid.gif)

---

Bu proje, kullanıcıların temel matematiksel işlemleri gerçekleştirmesine olanak tanıyan basit bir html-css ve js hesap makinesi uygulamasıdır. Kullanıcı dostu bir arayüze sahip olan bu hesap makinesi, sayıları girmeyi ve işlemleri yapmayı kolaylaştırır. Aynı zamanda sürüklenebilir özelliğe sahipir.

## Özellikler

- **Temel İşlemler**: Toplama, çıkarma, çarpma ve bölme işlemleri.
- **Kullanıcı Arayüzü**: Basit ve anlaşılır butonlar ile kullanıcı dostu bir tasarım.
- **Sürüklenebilir Arayüz**: Hesap makinesi penceresi, kullanıcı tarafından sürüklenebilir.
- **Temizleme Butonu**: Girdi alanını sıfırlamak için "C" butonu.
- **Sonuç Hesaplama**: "=" butonu ile işlemlerin sonuçları anında hesaplanır.

## Gereksinimler

- HTML, CSS ve JavaScript bilgisi.
- Tarayıcı üzerinde çalıştırılabilir.

## Kurulum

1. Proje dosyalarını indirin veya klonlayın.
2. `index.html` dosyasını bir tarayıcıda açın.

## Dosya Yapısı

- **index.html**: Uygulamanın ana HTML yapısını içerir.
- **style.css**: Uygulamanın stil ve tasarımını tanımlar.
- **script.js**: Uygulamanın işlevselliğini sağlayan JavaScript kodunu içerir.

## Fonksiyonlar

### `appendToResult(value)`
- **Açıklama**: Kullanıcıdan gelen sayıları veya işlemleri sonucu eklemek için kullanılır.
- **Kullanım**: Buton tıklamalarıyla çağrılır. Örneğin, kullanıcı "7" butonuna bastığında `appendToResult('7')` çağrılır.

### `clearResult()`
- **Açıklama**: Hesap makinesinin girdi alanını sıfırlamak için kullanılır.
- **Kullanım**: "C" butonuna basıldığında çağrılır.

### `calculateResult()`
- **Açıklama**: Girdi alanındaki matematiksel ifadeyi hesaplar ve sonucu görüntüler.
- **Kullanım**: "=" butonuna basıldığında çağrılır. `eval()` fonksiyonu ile işlem gerçekleştirilir.

### `startDrag(e)`
- **Açıklama**: Hesap makinesinin sürüklenebilmesini sağlamak için kullanılır. Kullanıcı fareyi tıkladığında bu fonksiyon çalışır.
- **Kullanım**: Hesap makinesinin başlık kısmına tıklanarak sürüklendiğinde çağrılır.

---
