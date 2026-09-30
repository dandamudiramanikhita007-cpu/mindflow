const KEY = "beauty-store";
const PRODUCTS = [
  {
    id: 1,
    name: "Vitamin C Serum",
    brand: "Minimalist",
    price: 699,
    group: "Skincare",
    category: "Face",
    option: "30 ml",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Matte Lipstick",
    brand: "Maybelline",
    price: 499,
    group: "Makeup",
    category: "Lips",
    option: "One Size",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Hydrating Moisturizer",
    brand: "Cetaphil",
    price: 799,
    group: "Skincare",
    category: "Face",
    option: "100 ml",
    img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Shampoo Conditioner",
    brand: "Loreal",
    price: 899,
    group: "Haircare",
    category: "Hair",
    option: "650 ml",
    img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Eau De Parfum",
    brand: "Skinn",
    price: 1499,
    group: "Fragrance",
    category: "Perfume",
    option: "100 ml",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Sunscreen SPF 50",
    brand: "Aqualogica",
    price: 599,
    group: "Skincare",
    category: "Face",
    option: "50 g",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Kajal Eyeliner",
    brand: "Lakme",
    price: 299,
    group: "Makeup",
    category: "Eyes",
    option: "One Size",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Hair Serum",
    brand: "Streax",
    price: 399,
    group: "Haircare",
    category: "Hair",
    option: "115 ml",
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Body Lotion",
    brand: "Nivea",
    price: 449,
    group: "Bath & Body",
    category: "Body",
    option: "400 ml",
    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Beard Grooming Kit",
    brand: "Beardo",
    price: 999,
    group: "Mens Grooming",
    category: "Men",
    option: "One Size",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
  },
];
function money(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}
function cart() {
  return JSON.parse(localStorage.getItem(KEY + "_cart") || "[]");
}
function save(c) {
  localStorage.setItem(KEY + "_cart", JSON.stringify(c));
  counts();
}
function wish() {
  return JSON.parse(localStorage.getItem(KEY + "_wish") || "[]");
}
function counts() {
  document
    .querySelectorAll("[data-cart]")
    .forEach((e) => (e.textContent = cart().reduce((s, x) => s + x.qty, 0)));
  document
    .querySelectorAll("[data-wish]")
    .forEach((e) => (e.textContent = wish().length));
}
function toast(s) {
  let e = document.getElementById("toast");
  if (!e) {
    e = document.createElement("div");
    e.id = "toast";
    document.body.append(e);
  }
  e.textContent = s;
  e.className = "toast show";
  setTimeout(() => (e.className = "toast"), 1600);
}
function add(p, o) {
  let c = cart(),
    x = c.find((a) => a.id === p.id && a.option === o);
  x ? x.qty++ : c.push({ ...p, qty: 1, option: o });
  save(c);
  toast("Added to cart ✓");
}
function toggle(p) {
  let w = wish(),
    i = w.findIndex((x) => x.id === p.id);
  i >= 0 ? w.splice(i, 1) : w.push(p);
  localStorage.setItem(KEY + "_wish", JSON.stringify(w));
  counts();
}
function search() {
  let q = document.getElementById("search").value;
  location.href = "../products/index.html?q=" + encodeURIComponent(q);
}
document.addEventListener("DOMContentLoaded", counts);
