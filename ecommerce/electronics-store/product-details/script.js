const KEY = "electronics-store";
const PRODUCTS = [
  {
    id: 1,
    name: "Galaxy Smartphone",
    brand: "Samsung",
    price: 39999,
    group: "Mobiles",
    category: "Phone",
    option: "8 GB / 128 GB",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "iPhone Pro",
    brand: "Apple",
    price: 99999,
    group: "Mobiles",
    category: "Phone",
    option: "256 GB",
    img: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    brand: "ASUS",
    price: 74999,
    group: "Laptops",
    category: "Laptop",
    option: "16 GB / 1 TB",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    brand: "Sony",
    price: 8999,
    group: "Audio",
    category: "Headphones",
    option: "Noise Cancelling",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "4K Smart TV",
    brand: "LG",
    price: 54999,
    group: "TV",
    category: "Television",
    option: "55 inch",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Mirrorless Camera",
    brand: "Canon",
    price: 67999,
    group: "Cameras",
    category: "Camera",
    option: "24 MP",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Smart Watch",
    brand: "Apple",
    price: 42999,
    group: "Accessories",
    category: "Watch",
    option: "GPS",
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: 3999,
    group: "Audio",
    category: "Speaker",
    option: "20 W",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    brand: "Keychron",
    price: 6999,
    group: "Gaming",
    category: "Keyboard",
    option: "RGB",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Robot Vacuum",
    brand: "Xiaomi",
    price: 24999,
    group: "Smart Home",
    category: "Cleaning",
    option: "LDS Navigation",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80",
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
