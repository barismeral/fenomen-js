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
7 Adet Radyo Fenomen Kanalı Mevcuttur.
İstenilen Yayın bilgilerine Fenomen fonksiyonundan obje üretilip, get metodu çağırılarak kullanılır.

```javascript

	var radyo = new Fenomen();
	
```

get metodunun ilk parametresi feneomen kanallarından birinin adı, ikinci parametresi ise
bir callback fonksiyonudur.
callback fonksiyonuna javascript objesi olarak bir değer pas geçirilir.
ve gelen data ile istenilen bilgilere ulaşılır.

```javascript

	var radyo = new Fenomen();
			
			radyo.get(radyo.FENOMEN_TURK, function(data){
			
				//işlemler
			
			});
			
```

## data objesi hiyerarşisi

```javascript
		
	audio: {
		src
		type
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



