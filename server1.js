const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
const products = [
  {
    "id": 1,
    "name": "پیتزا دونر استیک متوسط",
    "image": "./images/shop/پیتزا گوشت و قارچ متوسط.jpg",
    "detail": "خمیر پیتزا ، دونر استیک گوشت ، قارچ ، پنیر موزارلا ، سس آلفردو و زیتون سیاه",
    "price": 120000,
    "categoryId": "pizza"
  },
  {
    "id": 2,
    "name": "پیتزا رست بیف پنجره ای",
    "image": "./images/shop/پیتزا رست بیف متوسط.jpg",
    "detail": "خمیر پیتزا ، رست بیف ، سس آلفردو ، قارچ ، زیتون سیاه و پنیر موزارلا",
    "price": 180000,
    "categoryId": "pizza"
  },
  {
    "id": 3,
    "name": "پیتزا پپرونی پنجره ای متوسط",
    "image": "./images/shop/پیتزا پپرونی متوسط.jpg",
    "detail": "خمیر پیتزا پنجره ای ، پپرونی ، سس تند ، پنیر موزارلا و فلفل هالوپینو",
    "price": 300000,
    "categoryId": "pizza"
  },
  {
    "id": 4,
    "name": "پیتزا گوشت و قارچ متوسط",
    "image": "./images/shop/پیتزا گوشت و قارچ متوسط.jpg",
    "detail": "خمیر پیتزا پنجره ای ، گوشت چرخ کرده ، قارچ ، فلفل دلمه ای و پنیر موزارلا",
    "price": 340000,
    "categoryId": "pizza"
  },
  {
    "id": 5,
    "name": "پیتزا چیکن الفردو متوسط",
    "image": "./images/shop/پیتزا چیکن الفردو متوسط.jpg",
    "detail": "خمیر پیتزا پنجره ای ، استیک مرغ ، قارچ ، پنیر موزارلا ، سس آلفردو و فلفل دلمه ای",
    "price": 290000,
    "categoryId": "pizza"
  },
  {
    "id": 6,
    "name": "پیتزا ریو پنجزه ای",
    "image": "./images/shop/پیتزا ریو متوسط.jpg",
    "detail": "خمیر پیتزا پنجره ای ، پپرونی ، دونر استیک گوشت ، استیک مرغ ، قارچ ، پنیر موزارلا",
    "price": 400000,
    "categoryId": "pizza"
  },
  {
    "id": 7,
    "name": "پیتزا مخلوط متوسط",
    "image": "./images/shop/پیتزا مخلوط متوسط.jpg",
    "detail": "خمیر پیتزا ، کراکف ، استیک مرغ ، ژامبون گوشت و مرغ ، فلفل دلمه ای ، پنیر موزارلا و قارچ",
    "price": 315000,
    "categoryId": "pizza"
  },
  {
    "id": 8,
    "name": "پیتزا سبزیجات ",
    "image": "./images/shop/پیتزا سبزیجات متوسط.jpg",
    "detail": "خمیر پیتزا پنجره ای ، نخود فرنگی ، ذرت ، هویج ، قارچ ، گوجه فرنگی ، پنیر موزارلا ، فلفل دلمه ای",
    "price": 200000,
    "categoryId": "pizza"
  },
  {
    "id": 9,
    "name": "پیتزا کینگ متوسط",
    "image": "./images/shop/پیتزا کینگ متوسط.jpg",
    "detail": "خمیر پیتزا ، هات داگ ، ژامبون گوشت و مرغ ، قارچ ، پنیر موزارلا ، فلفل دلمه ای و زیتون سیاه",
    "price": 250000,
    "categoryId": "pizza"
  },
  {
    "id": 10,
    "name": "همبرگر",
    "image": "./images/shop/burger.jpg",
    "detail": "یک عدد برگر 160 گرمی ، نان گرد رومال دار کنجدی ، گوجه فرنگی ، خیار شور و کاهو",
    "price": 420000,
    "categoryId": "burger"
  },
  {
    "id": 11,
    "name": "چیزبرگر",
    "image": "./images/shop/چیز برگر .jpg",
    "detail": "یک عدد برگر 160 گرمی ، یک ورق پنیر گودا ، قارچ ، نان گرد رومال دار کنجدی ، گوجه فرنگی ، خیار شور",
    "price": 270000,
    "categoryId": "burger"
  },
  {
    "id": 12,
    "name": "برگر فیله",
    "image": "./images/shop/برگر جدید شماره 1 copy.jpg",
    "detail": "برگر 160گرم ، فیله مرغ گریل شده ، قارچ و پنیر گودا",
    "price": 260000,
    "categoryId": "burger"
  },
  {
    "id": 13,
    "name": "قارچ برگر",
    "image": "./images/shop/قارچ برگر.jpg",
    "detail": "یک عدد برگر 160 گرمی ، قارچ ، گوجه فرنگی ، نان گرد رومال دار کنجدی ، خیار شور و کاهو",
    "price": 220000,
    "categoryId": "burger"
  },
  {
    "id": 14,
    "name": "برگر تنوری",
    "image": "./images/shop/برگر جدید شماره 2 copy.jpg",
    "detail": "برگر 160گرم ، ژامبون گوشت تنوری ، قارچ و پنیر گودا",
    "price": 240000,
    "categoryId": "burger"
  },
  {
    "id": 15,
    "name": "دابل برگر",
    "image": "./images/shop/دابل چیز برگر.jpg",
    "detail": " برگر 160 گرمی ، پنیر گودا ،کاهو ، گوجه ، خیارشور ، قارچ و نان گرد رومال دار کنجدی",
    "price": 300000,
    "categoryId": "burger"
  },
  {
    "id": 16,
    "name": "زینگر ساده",
    "image": "./images/shop/زینگر copy.jpg",
    "detail": "یک عدد برگر 160 گرمی ، قارچ ، گوجه فرنگی ، نان گرد رومال دار کنجدی ، خیار شور و کاهو",
    "price": 300000,
    "categoryId": "burger"
  },
  {
    "id": 17,
    "name": "زینگر برگر",
    "image": "./images/shop/زینگر برگر.jpg",
    "detail": "یک عدد برگر 160 گرمی ، قارچ ، گوجه فرنگی ، نان گرد رومال دار کنجدی ، خیار شور و کاهو",
    "price": 300000,
    "categoryId": "burger"
  },
  {
    "id": 18,
    "name": "فیله سوخاری (نرمال)",
    "image": "./images/shop/سوخاری.jpg",
    "detail": "4 تکه فیله مرغ سوخاری، سیب زمینی سرخ کرده، یک عدد نان",
    "price": 393000,
    "category": "sokhari"
  }, {
    "id": 19,
    "name": "میکس سوخاری ران",
    "image": "./images/shop/سوخاری 5 تکه .jpg",
    "detail": "سه عدد مرغ سوخاری(ران یا سینه) دو عدد فیله سوخاری، سه عدد بال سوخاری، دو پرس سیب زمینی، ",
    "price": 320000,
    "category": "sokhari"
  }, {
    "id": 20,
    "name": "سبد سوخاری",
    "image": "./images/shop/سبد سوخاری.jpg",
    "detail": "یک عدد سینه سوخاری، 2 تکه بال سوخاری یا 2 عدد سینه سوخاری و یک تکه بال سوخاری",
    "price": 450000,
    "category": "sokhari"
  }, {
    "id": 21,
    "name": "سبد سوخاری",
    "image": "./images/shop/سبد سوخاری.jpg",
    "detail": "یک عدد سینه سوخاری، 2 تکه بال سوخاری یا 2 عدد سینه سوخاری و یک تکه بال سوخاری",
    "price": 450000,
    "category": "sokhari"
  },{
    "id": 22,
    "name": "هات داگ",
    "image": "./images/shop/هات داگ کلاسیک.jpg",
    "detail": "یک عدد هات داگ سرخ شده ، سس مخصوص ، کاهو ، گوجه ، خیارشور و نان فرانسوی کنجدی",
    "price": 270000,
    "categoryId": "sandwich"
  },{
    "id": 23,
    "name": "ژامبون مرغ",
    "image": "./images/shop/چیز برگر .jpg",
    "detail": "ژامبون گوشت و مرغ ، کاهو ، گوجه ، خیارشور و نان فرانسوی کنجدی",
    "price": 200000,
    "categoryId": "sandwich"
  },{
    "id": 24,
    "name": "قورمه سبزی",
    "image": "./images/shop/ghorme.jpg",
    "detail": " ۳۰۰ گرم قورمه سبزی با ۳۰ گرم گوشت گوساله، ۳۵۰ گرم برنج ایرانی",
    "price": 370000,
    "categoryId": "irani"
  },
]

app.post('/api/products-by-category', (req, res) => {
  const { categoryIds } = req.body; // آرایه‌ای از categoryId ها

  if (!Array.isArray(categoryIds)) {
    return res.status(400).json({ error: 'categoryIds باید آرایه باشد.' });
  }

  const filteredProducts = products.filter(product =>
    categoryIds.includes(product.categoryId)
  );

  // دسته‌بندی محصولات بر اساس categoryId
  const grouped = categoryIds.reduce((acc, id) => {
    acc[id] = filteredProducts.filter(p => p.categoryId === id);
    return acc;
  }, {});

  res.json(grouped);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
