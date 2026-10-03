"use client";

import Link from "next/link";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

const categories = [
  ["📱", "Mobile"],
  ["💻", "Electronics"],
  ["👕", "Fashion"],
  ["💄", "Beauty"],
  ["🏠", "Home"],
  ["🛒", "Grocery"],
  ["⚽", "Sports"],
];

const products = [
  ["📱", "Redmi Note 13", 22999, 28999, 20, 4.5],
  ["🎧", "TWS Wireless Earbuds", 1699, 1999, 15, 4.3],
  ["⌚", "Smart Watch", 3749, 4999, 25, 4.6],
  ["🔋", "Power Bank", 1399, 1999, 30, 4.4],
  ["🎧", "Wireless Headphones", 2799, 3399, 18, 4.5],
  ["📱", "Phone Case", 499, 640, 22, 4.2],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-blue-50/50 pb-16 lg:pb-0">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-blue-100">

        <div className="navbar max-w-7xl mx-auto px-4">

          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost btn-circle text-blue-600">
              <FaBars />
            </button>

            <ul className="menu dropdown-content mt-3 w-52 rounded-xl bg-white shadow-lg">
              {categories.map(([icon, name]) => (
                <li key={name}>
                  <Link href="#">
                    {icon} {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-600">Share</span>
            <span className="text-orange-500">Mart</span>
          </Link>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="join w-full">
              <input
                className="input input-bordered join-item w-full bg-blue-50/50 border-blue-100"
                placeholder="Search products..."
              />
              <button className="btn join-item bg-blue-100 text-blue-600 border-blue-100 hover:bg-blue-200">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-1 ml-auto">

            <Link
              href="/login"
              className="btn btn-ghost hidden sm:flex text-blue-600"
            >
              <FaUser /> Login
            </Link>

            <button className="btn btn-ghost btn-circle text-pink-500 hidden sm:flex">
              <FaHeart />
            </button>

            <Link
              href="/cart"
              className="btn btn-ghost btn-circle text-orange-500"
            >
              <div className="indicator">
                <FaShoppingCart />
                <span className="badge badge-error badge-xs indicator-item">
                  2
                </span>
              </div>
            </Link>

          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="md:hidden px-4 pb-3">
          <div className="join w-full">
            <input
              className="input input-bordered join-item w-full bg-blue-50/50 border-blue-100"
              placeholder="Search products..."
            />
            <button className="btn join-item bg-blue-100 text-blue-600 border-blue-100">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden lg:block border-t border-blue-50">
          <div className="max-w-7xl mx-auto px-4 flex gap-8 h-11 items-center text-sm">
            <Link className="text-blue-600 font-semibold" href="/">
              Home
            </Link>
            <Link href="/products">All Products</Link>
            <Link href="/flash-sale">Flash Sale</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

      </header>


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-5">

        {/* HERO */}
        <section className="grid lg:grid-cols-4 gap-4">

          {/* CATEGORIES */}
          <aside className="hidden lg:block bg-white rounded-2xl border border-blue-100 overflow-hidden">

            <div className="p-4 bg-blue-100 text-blue-700 font-semibold">
              <FaBars className="inline mr-2" />
              All Categories
            </div>

            <div className="p-2">
              {categories.map(([icon, name]) => (
                <Link
                  key={name}
                  href="#"
                  className="flex justify-between p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600"
                >
                  <span>{icon} {name}</span>
                  <span>›</span>
                </Link>
              ))}
            </div>

          </aside>


          {/* BANNER */}
          <div className="lg:col-span-3">

            <div className="min-h-[270px] rounded-2xl p-7 md:p-10
                            bg-gradient-to-r from-blue-100 via-purple-50 to-orange-100
                            flex items-center">

              <div>

                <span className="badge bg-orange-100 text-orange-600 border-orange-200">
                  Special Offer
                </span>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-700 mt-3">
                  Big Shopping Sale
                </h1>

                <p className="text-slate-500 mt-3 max-w-md">
                  Find your favorite products at amazing prices.
                </p>

                <button className="mt-5 px-6 py-3 rounded-xl
                                   bg-orange-100 text-orange-600
                                   border border-orange-200
                                   hover:bg-orange-200 transition">
                  Shop Now →
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">

          <Feature
            icon={<FaTruck />}
            title="Free Delivery"
            color="bg-green-50 text-green-600"
          />

          <Feature
            icon={<FaShieldAlt />}
            title="Secure Payment"
            color="bg-blue-50 text-blue-600"
          />

          <Feature
            icon={<FaBolt />}
            title="Fast Delivery"
            color="bg-purple-50 text-purple-600"
          />

        </div>


        {/* FLASH SALE */}
        <section className="mt-8">

          <Title icon={<FaBolt />} text="Flash Sale" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">

            {products.map((p, i) => (
              <Product key={i} data={p} />
            ))}

          </div>

        </section>


        {/* CATEGORY */}
        <section className="mt-8">

          <Title text="Shop By Category" />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">

            {categories.map(([icon, name], i) => {

              const colors = [
                "bg-blue-50 text-blue-600",
                "bg-purple-50 text-purple-600",
                "bg-pink-50 text-pink-600",
                "bg-orange-50 text-orange-600",
                "bg-green-50 text-green-600",
                "bg-yellow-50 text-yellow-600",
                "bg-cyan-50 text-cyan-600",
              ];

              return (
                <Link
                  href="#"
                  key={name}
                  className={`${colors[i]} rounded-2xl p-4 text-center hover:shadow-md transition`}
                >
                  <div className="text-3xl">{icon}</div>
                  <p className="text-xs md:text-sm font-medium mt-2">
                    {name}
                  </p>
                </Link>
              );
            })}

          </div>

        </section>


        {/* BEST SELLING */}
        <section className="mt-8">

          <Title text="Best Selling" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">

            {[...products].reverse().map((p, i) => (
              <Product key={i} data={p} />
            ))}

          </div>

        </section>

      </div>


      {/* MOBILE NAV */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-blue-100 z-50">

        <div className="grid grid-cols-5">

          <Bottom icon={<FaSearch />} text="Home" />
          <Bottom icon={<FaBars />} text="Category" />
          <Bottom icon={<FaHeart />} text="Wishlist" />
          <Bottom icon={<FaShoppingCart />} text="Cart" />
          <Bottom icon={<FaUser />} text="Account" />

        </div>

      </div>

    </main>
  );
}


/* PRODUCT */

function Product({ data }) {

  const [icon, name, price, oldPrice, discount, rating] = data;

  return (
    <div className="bg-white rounded-2xl border border-blue-100 overflow-hidden
                    hover:shadow-md hover:border-blue-200 transition">

      <div className="relative h-28 md:h-36 bg-gradient-to-br from-blue-50 to-purple-50
                      flex items-center justify-center">

        <span className="text-5xl">{icon}</span>

        <span className="absolute top-2 left-2 px-2 py-1 rounded-md
                         bg-orange-100 text-orange-600 text-xs font-semibold">
          -{discount}%
        </span>

        <button className="absolute top-2 right-2 w-7 h-7 rounded-full
                           bg-pink-50 text-pink-500 flex items-center justify-center">
          <FaHeart size={12} />
        </button>

      </div>

      <div className="p-3">

        <h3 className="text-sm font-medium text-slate-700 line-clamp-2 min-h-10">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-xs mt-2">
          <FaStar className="text-yellow-400" />
          <span className="text-slate-500">{rating}</span>
          <span className="text-slate-400">(120 sold)</span>
        </div>

        <div className="mt-2">
          <span className="font-bold text-blue-600">
            ৳{price.toLocaleString()}
          </span>

          <span className="text-xs text-slate-400 line-through ml-2">
            ৳{oldPrice.toLocaleString()}
          </span>
        </div>

        <button className="w-full mt-3 py-2 rounded-lg
                           bg-orange-50 text-orange-600
                           border border-orange-100
                           hover:bg-orange-100 transition text-sm font-medium">
          <FaShoppingCart className="inline mr-1" />
          Add to Cart
        </button>

      </div>

    </div>
  );
}


/* FEATURE */

function Feature({ icon, title, color }) {
  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-4 flex items-center gap-3">

      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
        {icon}
      </div>

      <span className="text-sm font-medium text-slate-600">
        {title}
      </span>

    </div>
  );
}


/* TITLE */

function Title({ icon, text }) {
  return (
    <div className="flex items-center justify-between mb-4">

      <h2 className="text-xl md:text-2xl font-bold text-slate-700 flex items-center gap-2">
        {icon && <span className="text-orange-500">{icon}</span>}
        {text}
      </h2>

      <Link
        href="/products"
        className="text-sm text-blue-600 hover:text-blue-700"
      >
        View All →
      </Link>

    </div>
  );
}


/* MOBILE BUTTON */

function Bottom({ icon, text }) {
  return (
    <button className="py-2 flex flex-col items-center gap-1 text-xs text-slate-500 hover:text-blue-600">
      <span className="text-base">{icon}</span>
      {text}
    </button>
  );
}