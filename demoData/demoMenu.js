const menu = [
    // ========== ĐỒ UỐNG ==========
    {
        id: 1,
        name: "Trà sữa",
        price: 25000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/e6/59/2e/e6592e7815518c8a8d5311b4f6afbf30.jpg",
        description: 'Trà sữa truyền thống full topping'
    },
    {
        id: 2,
        name: "Cà phê sữa",
        price: 20000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/03/3e/be/033ebe2b2bdc2b97ab77b9f4de5dbfdf.jpg",
        description: "Cà phê sữa đá thơm ngon béo ngậy"
    },
    {
        id: 6,
        name: "Sinh tố bơ",
        price: 25000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/46/d8/15/46d815be729c637ceaf9be14d1f80a04.jpg",
        description: "Sinh tố bơ béo thơm ngon"
    },
    {
        id: 11,
        name: "Nước ép cam",
        price: 20000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/20/56/44/205644e9c3334aefb25f107e30498b21.jpg",
        description: 'Cam ép tự nhiên nguyên chất'
    },
    {
        id: 13,
        name: "Trà đào",
        price: 28000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/ef/23/56/ef2356d569cac198828b3d31da13451f.jpg",
        description: "Trà đào cam sả mát lạnh"
    },
    {
        id: 14,
        name: "Nước mía",
        price: 15000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/9f/cc/ed/9fcced04dcbaaa42d5b5d5a335eec993.jpg",
        description: "Nước mía tươi nguyên chất"
    },
    {
        id: 15,
        name: "Soda chanh",
        price: 22000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/fe/69/27/fe692763f2708c8e428321258aeb2891.jpg",
        description: "Soda chanh tươi mát"
    },
    {
        id: 16,
        name: "Trà chanh",
        price: 18000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/9c/15/0c/9c150c164299e289b787e43e85ff4868.jpg",
        description: "Trà chanh giải khát"
    },

    // ========== MÓN CHÍNH ==========
    {
        id: 3,
        name: "Phở bò",
        price: 40000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/8d/e1/ab/8de1ab3778ad5d639eccf1df1975f820.jpg",
        description: "Phở bò đặc biệt"
    },
    {
        id: 4,
        name: "Bánh mì",
        price: 15000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/25/78/15/25781588994be5a464a016f98ceda21c.jpg",
        description: "Bánh mì kẹp thịt"
    },
    {
        id: 5,
        name: "Bánh canh",
        price: 30000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/10/82/4e/10824e306084fa8f96ceab4b89e94971.jpg",
        description: "Bánh canh cá đặc sản"
    },
    {
        id: 7,
        name: "Bún chả",
        price: 50000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/5f/7c/a0/5f7ca04bee500c53272e1534954f2712.jpg",
        description: "Bún chả Hà Nội đặc sản"
    },
    {
        id: 9,
        name: "Cơm tấm",
        price: 40000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/8e/e3/1b/8ee31bb72b464b246e90003b4a16991d.jpg",
        description: 'Cơm tấm sườn bì chả'
    },
    {
        id: 10,
        name: "Mì xào",
        price: 35000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/55/0d/8f/550d8f49bb60b283f255d203b3858828.jpg",
        description: "Mì xào hải sản"
    },
    {
        id: 12,
        name: "Bánh xèo",
        price: 45000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/33/6b/65/336b656f607efabfafc9cf8b0276cd53.jpg",
        description: "Bánh xèo tôm mực thơm ngon"
    },
    {
        id: 17,
        name: "Hủ tiếu",
        price: 35000,
        category: "Món chính",
        image: "https://i.pinimg.com/1200x/69/5b/94/695b94e269388ceb9460d604ea757a74.jpg",
        description: "Hủ tiếu Nam Vang"
    },
    {
        id: 18,
        name: "Bún bò Huế",
        price: 45000,
        category: "Món chính",
        image: "https://i.pinimg.com/1200x/f4/41/e4/f441e4d163c5cc83ce64f29098ad34fa.jpg",
        description: "Bún bò Huế cay nồng đặc trưng"
    },
    {
        id: 19,
        name: "Cơm chiên",
        price: 35000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/53/cb/fd/53cbfd08a30d6280bc2e532078bad0a2.jpg",
        description: "Cơm chiên Dương Châu"
    },
    {
        id: 20,
        name: "Gà rán",
        price: 55000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/5c/7a/bf/5c7abf4bf3ac7440af505641a682d7cc.jpg",
        description: "Gà rán giòn tan"
    },
    {
        id: 21,
        name: "Bò kho",
        price: 50000,
        category: "Món chính",
        image: "https://i.pinimg.com/736x/f9/64/3b/f9643b176011682764c302cf251c3705.jpg",
        description: "Bò kho bánh mì"
    },
    {
        id: 22,
        name: "Lẩu thái",
        price: 150000,
        category: "Món chính",
        image: "https://i.pinimg.com/1200x/65/c7/b2/65c7b2f98000cc42d242ff0edb937deb.jpg",
        description: "Lẩu thái chua cay (2-3 người)"
    },

    // ========== MÓN PHỤ ==========
    {
        id: 23,
        name: "Gỏi cuốn",
        price: 25000,
        category: "Món phụ",
        image: "https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/11/nu%CC%9Bo%CC%9B%CC%81c-ma%CC%86%CC%81m-cha%CC%82%CC%81m-go%CC%89i-cuo%CC%82%CC%81n-1200x900.png",
        description: "Gỏi cuốn tôm thịt (2 cuốn)"
    },
    {
        id: 24,
        name: "Chả giò",
        price: 30000,
        category: "Món phụ",
        image: "https://i.pinimg.com/1200x/21/09/ca/2109cab9a2cd17edd673957157839be3.jpg",
        description: "Chả giò giòn rụm (4 cuốn)"
    },
    {
        id: 25,
        name: "Bánh cuốn",
        price: 30000,
        category: "Món phụ",
        image: "https://i.pinimg.com/736x/7b/bd/0f/7bbd0f40d5dc4b2205ec43d37ffc11b7.jpg",
        description: "Bánh cuốn nóng"
    },
    {
        id: 26,
        name: "Rau muống xào",
        price: 25000,
        category: "Món phụ",
        image: "https://i.pinimg.com/736x/0c/29/9b/0c299b8cd97a48085f574b5a79577dd1.jpg",
        description: "Rau muống xào tỏi"
    },

    // ========== TRÁNG MIỆNG ==========
    {
        id: 8,
        name: "Chè thập cẩm",
        price: 30000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/55/16/8b/55168b574e8045e32420508f28c8c0c0.jpg",
        description: "Chè thập cẩm nhiều loại đậu"
    },
    {
        id: 27,
        name: "Chè bưởi",
        price: 25000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/7f/2b/6c/7f2b6c185d4c3d0674c39eaba8a476d0.jpg",
        description: "Chè bưởi mát lạnh"
    },
    {
        id: 28,
        name: "Kem dừa",
        price: 30000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/ef/70/2f/ef702f1320ed66375dff1d5916791cb1.jpg",
        description: "Kem dừa tươi mát"
    },
    {
        id: 29,
        name: "Bánh flan",
        price: 20000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/736x/70/22/93/7022931a2655af78ec41a44fa0b57937.jpg",
        description: "Bánh flan caramel"
    },
    {
        id: 30,
        name: "Sữa chua dẻo",
        price: 18000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/f1/f5/56/f1f5566a8fd06bf0a751769e408ce8e6.jpg",
        description: "Sữa chua dẻo thơm ngon"
    },
    {
        id: 31,
        name: "Bánh tráng trộn",
        price: 20000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/54/22/85/542285f26dd1ee1fec2bfa6b6c1d5ab2.jpg",
        description: "Bánh tráng trộn đầy đủ"
    },

    // ========== THÊM ĐỒ UỐNG ==========
    {
        id: 32,
        name: "Trà sữa matcha",
        price: 30000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/f3/35/3d/f3353da22218a4de90629ea801d6d0ff.jpg",
        description: "Trà sữa matcha Nhật Bản"
    },
    {
        id: 33,
        name: "Cà phê đen",
        price: 15000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg",
        description: "Cà phê đen đậm đà"
    },
    {
        id: 34,
        name: "Sinh tố xoài",
        price: 28000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/b3/76/c7/b376c71b505f1bb6f39030069ad42d58.jpg",
        description: "Sinh tố xoài tươi ngọt"
    },
    {
        id: 35,
        name: "Sinh tố dâu",
        price: 28000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/a0/b7/80/a0b7801ead5625090a8b3b7490cf5fcc.jpg",
        description: "Sinh tố dâu tây tươi mát"
    },
    {
        id: 36,
        name: "Nước dừa tươi",
        price: 20000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/736x/0d/dd/7b/0ddd7bd4a584b7717208555d3a8f9e01.jpg",
        description: "Nước dừa tươi nguyên trái"
    },
    {
        id: 37,
        name: "Trà ô long",
        price: 22000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/54/28/24/542824a334290980c912a0a0f3721526.jpg",
        description: "Trà ô long thơm ngon"
    },
    {
        id: 38,
        name: "Mojito",
        price: 35000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/e3/68/dc/e368dc22c62b6eb59798c64e6e48fd59.jpg",
        description: "Mojito bạc hà chanh"
    },
    {
        id: 39,
        name: "Sữa tươi",
        price: 18000,
        category: "Đồ uống",
        image: "https://i.pinimg.com/1200x/b0/76/39/b07639548316dfe58ef1a2c5dd3f4dec.jpg",
        description: "Sữa tươi không đường"
    },

    // ========== THÊM TRÁNG MIỆNG ==========
    {
        id: 40,
        name: "Chè đậu đỏ",
        price: 22000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/736x/5c/42/e8/5c42e80f008f900744ddbec994503a3d.jpg",
        description: "Chè đậu đỏ nước cốt dừa"
    },
    {
        id: 41,
        name: "Kem que",
        price: 15000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/736x/44/f7/a8/44f7a8eef208970ac6f366a73bcf8a96.jpg",
        description: "Kem que các vị"
    },
    {
        id: 42,
        name: "Trái cây dĩa",
        price: 35000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/5a/3d/35/5a3d35d937765d1b7f5ee05b849a98f3.jpg",
        description: "Trái cây tươi theo mùa"
    },
    {
        id: 43,
        name: "Rau câu dừa",
        price: 18000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/736x/51/46/64/5146649c69305a12dcb9c24e8413669a.jpg",
        description: "Rau câu dừa mát lạnh"
    },
    {
        id: 44,
        name: "Chè khúc bạch",
        price: 28000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/736x/d9/70/a3/d970a315018de0b03d14ed24c52a9d71.jpg",
        description: "Chè khúc bạch trái cây"
    },
    {
        id: 45,
        name: "Kem bơ",
        price: 30000,
        category: "Tráng miệng",
        image: "https://i.pinimg.com/1200x/24/a7/41/24a741930862496fd870855c26bfdf67.jpg",
        description: "Kem bơ béo ngậy"
    }
]