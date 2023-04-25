const get = (req,res) =>{
    res.send([
        {
            "id": 1,
            "name": "Apple iPhone 14 Pro Max (128 GB)",
            "category": "Mobile",
            "image": "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX342_.jpg",
            "price": 127999,
            "oPrice": "₹1,39,900"
        },
        {
            "id": 2,
            "name": "Apple iPhone 14 (512 GB) ",
            "category": "Mobile",
            "image": "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX342_.jpg",
            "price": 101999,
            "oPrice": "₹1,09,900"
        },
        {
            "id": 3,
            "name": "iPhone 14 Plus (256 GB)",
            "category": "Mobile",
            "image": "https://m.media-amazon.com/images/I/71emcsxsRPL._SX679_.jpg",
            "price": 100304,
            "oPrice": "₹1,10,304"

        },
        {
            "id": 4,
            "name": "OnePlus 10 R",
            "category": "Mobile",
            "image": "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_SS450_.jpg",
            "price": 35000,
            "oPrice": "₹38,499"

        },
        {
            "id": 5,
            "name": "OnePlus Nord 2T",
            "category": "Mobile",
            "image": "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
            "price": 16500,
            "oPrice": "₹19,000"

        },
        {
            "id": 6,
            "name": "OnePlus Nord 2T",
            "category": "Mobile",
            "image": "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
            "price": 16500,
            "oPrice": "₹19,000"
          },
          {
            "id": 7,
            "name": "OnePlus 11R 5G ",
            "category": "Ipad",
            "image": "https://m.media-amazon.com/images/I/41g1pQr8xUL._SX300_SY300_QL70_FMwebp_.jpg",
            "price": 40999,
            "oPrice": "₹44,999"
          }
    ])
}

module.exports.apiController = get