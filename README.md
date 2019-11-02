# fenomen-js
## Radyo Fenomen yayınlarına ulaşmak için basitleştirilmiş API

# Tanımlama ve Kullanımı

fenomen.js dosyası html dosyanıza
```
<script src="/fenomen.js"></script>
```
olarak import edilir.
Demo dosyası demo klasörü içerisinde mevcuttur.

Kanallara erişim Fenomen objesi içerisinde ki tanımlanan sabitlerle yapılır.
11 Adet Radyo Fenomen Kanalı Mevcuttur.
İstenilen Yayın bilgilerine Fenomen fonksiyonundan obje üretilip, get metodu çağırılarak kullanılır.

```javascript

	var radyo = new Fenomen();
	
```

get metodunun ilk parametresi bir callback fonksiyonu, ikinci parametresi ise fenomen kanallarından birinin adı,
üçüncü parametre ise isteğe göre ses kalite seçeneğidir.
Tanımsız olarak değeri 128 kbps dır.
Ses Kalitesi 64,128 ve 256 değerini alabilir.
256 kbps kalitesi sadece FENOMEN ve FENOMEN_TURK kanallarını destekler.


callback fonksiyonuna javascript objesi olarak bir değer pas geçirilir.
ve gelen data ile istenilen bilgilere ulaşılır.

```javascript

	var radyo = new Fenomen();
			
			radyo.get(function(data){
			
				//işlemler
			
			},radyo.channels.FENOMEN_TURK, 256);
			
```

## data objesi hiyerarşisi

```javascript
		
	audio: {
		src
		type
		quality
	},

	channel: {
		name
		desc
		logo
	},
	song: {
		artist
		title
		lyrics
		status
		albumCover
	}

```



