const KEY = "fashion-store";
const PRODUCTS = [
  {
    id: 1,
    name: "Men Casual Shirt",
    brand: "Netplay",
    price: 1499,
    group: "Men",
    category: "Clothing",
    option: "S,M,L,XL",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Women Floral Dress",
    brand: "ONLY",
    price: 2299,
    group: "Women",
    category: "Clothing",
    option: "XS,S,M,L",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Classic Sneakers",
    brand: "Nike",
    price: 3499,
    group: "Unisex",
    category: "Shoes",
    option: "6,7,8,9,10",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Leather Handbag",
    brand: "Lavie",
    price: 2799,
    group: "Women",
    category: "Bags",
    option: "One Size",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Running Shoes",
    brand: "Puma",
    price: 2999,
    group: "Men",
    category: "Shoes",
    option: "7,8,9,10",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Womens Sneakers",
    brand: "Adidas",
    price: 3199,
    group: "Women",
    category: "Shoes",
    option: "5,6,7,8",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Denim Jacket",
    brand: "Levis",
    price: 3999,
    group: "Unisex",
    category: "Clothing",
    option: "S,M,L,XL",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Minimal Watch",
    brand: "Fossil",
    price: 4999,
    group: "Unisex",
    category: "Watches",
    option: "One Size",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Kids Hoodie",
    brand: "H&M",
    price: 1299,
    group: "Kids",
    category: "Clothing",
    option: "XS,S,M,L",
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Travel Backpack",
    brand: "Wildcraft",
    price: 1899,
    group: "Unisex",
    category: "Bags",
    option: "One Size",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "Cotton T Shirt",
    brand: "Roadster",
    price: 999,
    group: "Men",
    category: "Clothing",
    option: "S,M,L,XL",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "Silk Top",
    brand: "Biba",
    price: 1799,
    group: "Women",
    category: "Clothing",
    option: "XS,S,M,L",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80",
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
