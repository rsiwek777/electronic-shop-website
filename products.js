const products = [
	{
		id: 1,
		type: 'phone',
		name: 'Xiaomi Redmi Note 10S 6/128GB Onyx Gray',
		description: `Ekran:6,43"
        Procesor:MediaTek Helio G95
        Pamięć RAM:6 GB
        Pamięć wbudowana:128 GB`,
		price: 1099.0,
		sale: true,
		saleAmount: 200.0,
		image: './images/phone1.png',
	},
	{
		id: 2,
		type: 'phone',
		name: 'Samsung Galaxy A53 5G 6/128GB 120Hz Black',
		description: `Ekran:6,5"
        Procesor:Samsung Exynos 1280
        Pamięć RAM:6 GB
        Pamięć wbudowana:128 GB`,
		price: 2099.0,
		sale: true,
		saleAmount: 400.0,
		image: './images/phone2.png',
	},
	{
		id: 3,
		type: 'phone',
		name: 'Samsung Galaxy A32 SM-A325F 4/128GB Black',
		description: `Ekran:6,4"
        Procesor:MediaTek MT6769T Helio G80
        Pamięć RAM:4 GB
        Pamięć wbudowana:128 GB`,
		price: 1299.0,
		sale: true,
		saleAmount: 300.0,
		image: './images/phone3.png',
	},
	{
		id: 4,
		type: 'phone',
		name: 'Apple iPhone 13 128GB Starlight',
		description: `Ekran:6,1"
        Procesor:Apple A15 Bionic
        Pamięć RAM:4 GB
        Pamięć wbudowana:128 GB`,
		price: 4499.0,
		sale: false,
		image: './images/phone4.png',
	},
	{
		id: 5,
		type: 'phone',
		name: 'ASUS ZenFone 8 8/128GB Black',
		description: `Ekran:5,92"
        Procesor:Qualcomm Snapdragon 888
        Pamięć RAM:8 GB
        Pamięć wbudowana:128 GB`,
		price: 2999.0,
		sale: true,
		saleAmount: 700.0,
		image: './images/phone5.png',
	},
	{
		id: 6,
		type: 'phone',
		name: 'Apple iPhone 11 64GB Black',
		description: `Ekran:6,1"
        Procesor:Apple A13 Bionic
        Pamięć RAM:4 GB
        Pamięć wbudowana:64 GB`,
		price: 2599.0,
		sale: false,
		image: './images/phone6.png',
	},
	{
		id: 7,
		type: 'phone',
		name: 'Motorola Edge 20 Lite 5G 8/128GB Electric Graphite 90Hz',
		description: `Ekran:6,7"
        Procesor:MediaTek Dimensity 720
        Pamięć RAM:8 GB
        Pamięć wbudowana:128 GB`,
		price: 1699.0,
		sale: false,
		image: './images/phone7.png',
	},
	{
		id: 8,
		type: 'phone',
		name: 'realme 9 Pro+ 6+128GB Aurora Green OIS 60W',
		description: `Ekran:6,4"
        Procesor:MediaTek Dimensity 920 MT6877T
        Pamięć RAM:6 GB
        Pamięć wbudowana:128 GB`,
		price: 1649.0,
		sale: true,
		saleAmount: 50.0,
		image: './images/phone8.png',
	},
	{
		id: 9,
		type: 'phone',
		name: 'Samsung Galaxy S22 Ultra 12/512GB Green',
		description: `Ekran:6,8"
        Procesor:Samsung Exynos 2200
        Pamięć RAM:12 GB
        Pamięć wbudowana:512 GB`,
		price: 6499.0,
		sale: false,
		image: './images/phone9.png',
	},
	{
		id: 10,
		type: 'phone',
		name: 'Apple iPhone 14 Pro Max 1TB Deep Purple',
		description: `Ekran:6,7"
        Procesor:Apple A16 Bionic
        Pamięć RAM:6 GB
        Pamięć wbudowana:1 TB`,
		price: 10499.0,
		sale: false,
		image: './images/phone10.png',
	},
	{
		id: 11,
		type: 'laptop',
		name: 'Acer Nitro 5 i5-11400H/16GB/512 RTX3050Ti 144Hz',
		description: `Procesor:Intel Core i5-11400H
        Pamięć:16 GB
        Grafika:NVIDIA GeForce RTX 3050 Ti + Intel UHD Graphics
        Typ ekranu:Matowy, LED, IPS`,
		price: 4199.0,
		sale: false,
		image: './images/laptop1.png',
	},
	{
		id: 12,
		type: 'laptop',
		name: 'Apple MacBook Air M1/16GB/256/Mac OS Space Gray US',
		description: `Procesor:Apple M1
        Pamięć:16 GB
        Grafika:Apple M1
        Typ ekranu:Błyszczący, LED, IPS, Retina`,
		price: 6499.0,
		sale: false,
		image: './images/laptop2.png',
	},
	{
		id: 13,
		type: 'laptop',
		name: 'Dell Inspiron G15 5511 i5-11260H/16GB/512/Win11 RTX3050',
		description: `Procesor:Intel Core i5-11260H
        Pamięć:16 GB
        Grafika:NVIDIA GeForce RTX 3050 + Intel UHD Graphics
        Typ ekranu:Matowy, LED, WVA`,
		price: 4199.0,
		sale: true,
		saleAmount: 200.0,
		image: './images/laptop3.png',
	},
	{
		id: 14,
		type: 'laptop',
		name: 'Gigabyte G5 GD i5-11400H/16GB/512 RTX3050 144Hz',
		description: `Procesor:Intel Core i5-11400H
        Pamięć:16 GB
        Grafika:NVIDIA GeForce RTX 3050 + Intel UHD Graphics
        Typ ekranu:Matowy, LED, IPS`,
		price: 4349.0,
		sale: true,
		saleAmount: 550.0,
		image: './images/laptop4.png',
	},
	{
		id: 15,
		type: 'laptop',
		name: 'Gigabyte G5 GD i5-11400H/16GB/512 RTX3050 144Hz',
		description: `Procesor:AMD Ryzen™ 5 5600H
        Pamięć:16 GB
        Grafika:NVIDIA GeForce RTX 3060 + AMD Radeon™ Graphics
        Typ ekranu:Matowy, LED, IPS`,
		price: 5999.0,
		sale: false,
		image: './images/laptop5.png',
	},
	{
		id: 16,
		type: 'laptop',
		name: 'Apple MacBook Air M1/8GB/256/Mac OS Space Gray',
		description: `Procesor:Apple M1
        Pamięć:8 GB
        Grafika:Apple M1
        Typ ekranu:Błyszczący, LED, IPS, Retina`,
		price: 5399.0,
		sale: false,
		image: './images/laptop6.png',
	},
	{
		id: 17,
		type: 'laptop',
		name: 'Razer Blade 15 i7/32GB/1TB/Win11 RTX3070Ti 360Hz',
		description: `Procesor:Intel Core i7-12800H
        Pamięć:32 GB
        Grafika:NVIDIA GeForce RTX 3070 Ti + Intel Iris Xe Graphics
        Typ ekranu:Matowy, LED, IPS`,
		price: 16399.0,
		sale: false,
		image: './images/laptop7.png',
	},
	{
		id: 18,
		type: 'tv',
		name: 'Philips 70PUS7956',
		description: `Przekątna ekranu:70"
        Rozdzielczość:UHD 4K 3840 x 2160
        Typ telewizora:LED
        Klasa energetyczna:G`,
		price: 3299.0,
		sale: true,
		saleAmount: 300.0,
		image: './images/tv1.png',
	},
	{
		id: 19,
		type: 'tv',
		name: 'Philips 70PUS8546',
		description: `Przekątna ekranu:70"
        Rozdzielczość:UHD 4K 3840 x 2160
        Typ telewizora:LED
        Klasa energetyczna:G`,
		price: 4499.0,
		sale: false,
		image: './images/tv2.png',
	},
	{
		id: 20,
		type: 'tv',
		name: 'Xiaomi Mi TV Q1 75"',
		description: `Przekątna ekranu:75"
        Rozdzielczość:UHD 4K 3840 x 2160
        Typ telewizora:QLED
        Klasa energetyczna:G`,
		price: 6199.0,
		sale: false,
		image: './images/tv3.png',
	},
	{
		id: 21,
		type: 'tv',
		name: 'Samsung QE75Q67BA',
		description: `Przekątna ekranu:75"
        Rozdzielczość:UHD 4K 3840 x 2160
        Typ telewizora:QLED
        Klasa energetyczna:E`,
		price: 6499.0,
		sale: false,
		image: './images/tv4.png',
	},
	{
		id: 22,
		type: 'pc',
		name: 'G4M3R HERO i5-12400F/16GB/1TB/RTX3060/W11x',
		description: `System:Microsoft Windows 11 Home
        Procesor:Intel Core i5-12400F
        Grafika:NVIDIA GeForce RTX 3060
        Pamięć RAM:16 GB`,
		price: 6550.0,
		sale: false,
		image: './images/pc1.png',
	},
	{
		id: 22,
		type: 'pc',
		name: 'Acer Nitro 50 i5-11400F/16GB/512 RTX3060Ti',
		description: `System:Brak systemu
        Procesor:Intel Core i5-11400F
        Grafika:NVIDIA GeForce RTX 3060 Ti
        Pamięć RAM:16 GB`,
		price: 5249.0,
		sale: false,
		image: './images/pc2.png',
	},
	{
		id: 23,
		type: 'pc',
		name: 'ASUS ROG Strix G10CE i5-11400F/16GB/512/Win11 RTX3060',
		description: `System:Microsoft Windows 11 Home
        Procesor:Intel Core i5-11400F
        Grafika:NVIDIA GeForce RTX 3060
        Pamięć RAM:16 GB`,
		price: 5399.0,
		sale: true,
        saleAmount: 100.0,
		image: './images/pc3.png',
	},
]
