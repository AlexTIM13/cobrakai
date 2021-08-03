const { response } = require("express");

let tshirtsDb = [
  {
    id: 1,
    sku: 1001,
    category: "Men",
    type: "CobraKai",
    tShirt: "Cobra-Kai",
    price: 10,
    image: "https://i.pinimg.com/originals/31/91/6b/31916b27c3ffabca71489f814032965e.png",
    quantity: 10,
  },
  {
    id: 2,
    sku: 1002,
    category: "Men",
    type: "CobraKai",
    tShirt: "No Mercy",
    price: 15,
    image: "https://images.emilyshirt.com/2021/04/karate-kid-movie-cobra-kai-johnny-lawrence-skeleton-t-shirt-unisex.jpg",
    quantity: 5,
  },
  {
    id: 3,
    sku: 1003,
    category: "Men",
    type: "CobraKai",
    tShirt: "Strike first",
    price: 18,
    image: "https://ae01.alicdn.com/kf/H0a914af5e1dd4f49af8a27e2605ccc52r/2020-80-s-Vintage-Clothing-Cobra-Kai-Tshirt-Men-Karate-kids-T-Shirt-Strike-First-Strike.jpg_q50.jpg",
    quantity: 7,
  }
]

let id = 4;

module.exports = {
  gettShirts: (req, res) => {
    console.log("you made succes request")
    res.status(200).send(tshirtsDb);
  },
  addtShirts: (req, res) => {
    const {sku, category, type, tShirt, price, image, quantity} = req.body;

    const newTshirt = {
      sku,
      category,
      type,
      tShirt,
      price,
      image,
      quantity,
      id,
    }

    id++;
    tshirtsDb.push(newTshirt)
    res.status(200).send(tshirtsDb);
  },
    updateSku: (req, res) => {
      let newTshirtArr = tshirtsDb.map(tShirt => {
        if(+req.params.id === +tShirt.id) {
          return {...tShirt, sku: req.params.sku}
        } else {
          return tShirt
        }
      }) 

        tshirtsDb = newTshirtArr
        res.status(200).send(tshirtsDb)

    },
    deleteSku: (req, res) => {
      const {deleteId} = req.query;
      const deleteIndex = tshirtsDb.findIndex(tshirt => tshirt === deleteId)
      tshirtsDb.splice(deleteIndex)
      res.status(200).send(tshirtsDb)
    }

}
 