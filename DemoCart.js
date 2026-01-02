const cartsByTable = {
    1: [
        { id: 1, name: "Trà sữa", price: 25000, quantity: 2, image: "https://i.pinimg.com/736x/e6/59/2e/e6592e7815518c8a8d5311b4f6afbf30.jpg", note: 'Không bỏ thạch' },
        { id: 2, name: "Cà phê sữa", price: 20000, quantity: 1, image: "https://i.pinimg.com/736x/03/3e/be/033ebe2b2bdc2b97ab77b9f4de5dbfdf.jpg", note: null },
        { id: 7, name: "Bún chả", price: 50000, quantity: 1, image: "https://i.pinimg.com/736x/5f/7c/a0/5f7ca04bee500c53272e1534954f2712.jpg", note: null },
        { id: 8, name: "Chè thập cẩm", price: 30000, quantity: 1, image: "https://i.pinimg.com/1200x/55/16/8b/55168b574e8045e32420508f28c8c0c0.jpg", note: null },
        { id: 9, name: "Cơm tấm", price: 40000, quantity: 1, image: "https://i.pinimg.com/736x/8e/e3/1b/8ee31bb72b464b246e90003b4a16991d.jpg", note: 'Nhiều cơm' }
    ],
    2: [
        { id: 3, name: "Phở bò", price: 40000, quantity: 1, image: "https://i.pinimg.com/736x/8d/e1/ab/8de1ab3778ad5d639eccf1df1975f820.jpg", note: null },
        { id: 10, name: "Mì xào", price: 35000, quantity: 2, image: "https://i.pinimg.com/736x/55/0d/8f/550d8f49bb60b283f255d203b3858828.jpg", note: null },
        { id: 11, name: "Nước ép cam", price: 20000, quantity: 1, image: "https://i.pinimg.com/1200x/20/56/44/205644e9c3334aefb25f107e30498b21.jpg", note: 'Ít đường' },
        { id: 12, name: "Bánh xèo", price: 45000, quantity: 1, image: "https://i.pinimg.com/736x/33/6b/65/336b656f607efabfafc9cf8b0276cd53.jpg", note: null },
        { id: 13, name: "Cháo gà", price: 30000, quantity: 1, image: "https://i.pinimg.com/1200x/9c/58/d9/9c58d9a529c8edbf3948a6691408c4eb.jpg", note: null },
        { id: 14, name: "Kem dừa", price: 25000, quantity: 1, image: "https://i.pinimg.com/1200x/ef/70/2f/ef702f1320ed66375dff1d5916791cb1.jpg", note: null }
    ],
    3: [
        { id: 4, name: "Bánh mì", price: 15000, quantity: 3, image: "https://i.pinimg.com/736x/25/78/15/25781588994be5a464a016f98ceda21c.jpg", note: null },
        { id: 15, name: "Cơm chiên", price: 40000, quantity: 1, image: "https://i.pinimg.com/736x/53/cb/fd/53cbfd08a30d6280bc2e532078bad0a2.jpg", note: null },
        { id: 16, name: "Gà rán", price: 60000, quantity: 1, image: "https://i.pinimg.com/736x/5c/7a/bf/5c7abf4bf3ac7440af505641a682d7cc.jpg", note: null },
        { id: 17, name: "Nước ngọt", price: 15000, quantity: 2, image: "https://i.pinimg.com/736x/0b/3a/3b/0b3a3b43984b885406fe53235231b468.jpg", note: null },
        { id: 18, name: "Bánh cuốn", price: 35000, quantity: 1, image: "https://i.pinimg.com/736x/7b/bd/0f/7bbd0f40d5dc4b2205ec43d37ffc11b7.jpg", note: null },
        { id: 19, name: "Súp lơ xào tỏi", price: 30000, quantity: 1, image: "https://i.pinimg.com/736x/a1/1b/08/a11b0853c9929b2eda67fa327eef92ad.jpg",note: null},
        { id: 20, name: "Trà chanh", price: 20000, quantity: 1, image: "https://i.pinimg.com/1200x/9c/15/0c/9c150c164299e289b787e43e85ff4868.jpg", note: null },
        { id: 21, name: "Bánh tráng trộn", price: 25000, quantity: 1, image: "https://i.pinimg.com/1200x/54/22/85/542285f26dd1ee1fec2bfa6b6c1d5ab2.jpg", note: null }
    ],
    4: [
        { id: 5, name: "Bánh canh", price: 30000, quantity: 2, image: "https://i.pinimg.com/736x/10/82/4e/10824e306084fa8f96ceab4b89e94971.jpg", note: null },
        { id: 22, name: "Hủ tiếu", price: 40000, quantity: 1, image: "https://i.pinimg.com/1200x/69/5b/94/695b94e269388ceb9460d604ea757a74.jpg", note: null },
        { id: 23, name: "Bò kho", price: 55000, quantity: 1, image: "https://i.pinimg.com/736x/f9/64/3b/f9643b176011682764c302cf251c3705.jpg", note: null },
        { id: 24, name: "Nước mía", price: 15000, quantity: 2, image: "https://i.pinimg.com/736x/9f/cc/ed/9fcced04dcbaaa42d5b5d5a335eec993.jpg", note: null }
    ],
    5: [
        { id: 6, name: "Sinh tố bơ", price: 25000, quantity: 2, image: "https://i.pinimg.com/736x/46/d8/15/46d815be729c637ceaf9be14d1f80a04.jpg", note: null },
        { id: 25, name: "Lẩu thái", price: 120000, quantity: 1, image: "https://i.pinimg.com/1200x/65/c7/b2/65c7b2f98000cc42d242ff0edb937deb.jpg", note: null },
        { id: 26, name: "Cá kho tộ", price: 70000, quantity: 1, image: "https://i.pinimg.com/736x/42/c2/4e/42c24e35c5a8967f796df1cca2105b63.jpg", note: null },
        { id: 27, name: "Rau muống xào tỏi", price: 30000, quantity: 1, image: "https://i.pinimg.com/736x/0c/29/9b/0c299b8cd97a48085f574b5a79577dd1.jpg", note: null },
        { id: 28, name: "Chè bưởi", price: 30000, quantity: 1, image: "https://i.pinimg.com/1200x/7f/2b/6c/7f2b6c185d4c3d0674c39eaba8a476d0.jpg", note: null }
    ]
};