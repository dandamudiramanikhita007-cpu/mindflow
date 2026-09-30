const KEY = "grocery-store";
const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Bananas",
    brand: "Fresh Farm",
    price: 60,
    group: "Fruits",
    category: "Produce",
    option: "1 kg",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Red Apples",
    brand: "Fresh Farm",
    price: 180,
    group: "Fruits",
    category: "Produce",
    option: "1 kg",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Tomatoes",
    brand: "Organic Valley",
    price: 70,
    group: "Vegetables",
    category: "Produce",
    option: "1 kg",
    img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Fresh Milk",
    brand: "MilkyWay",
    price: 68,
    group: "Dairy",
    category: "Milk",
    option: "1 L",
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Brown Bread",
    brand: "Harvest",
    price: 55,
    group: "Bakery",
    category: "Bread",
    option: "400 g",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Orange Juice",
    brand: "Tropicana",
    price: 130,
    group: "Beverages",
    category: "Juice",
    option: "1 L",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "Potato Chips",
    brand: "Lays",
    price: 40,
    group: "Snacks",
    category: "Chips",
    option: "100 g",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "Basmati Rice",
    brand: "India Gate",
    price: 249,
    group: "Staples",
    category: "Rice",
    option: "5 kg",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "Dishwash Liquid",
    brand: "Vim",
    price: 125,
    group: "Household",
    category: "Cleaning",
    option: "500 ml",
    img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "Chocolate Cookies",
    brand: "Sunfeast",
    price: 85,
    group: "Snacks",
    category: "Biscuits",
    option: "300 g",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80",
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
  location.href = "../categories/index.html?q=" + encodeURIComponent(q);
}
document.addEventListener("DOMContentLoaded", counts);
