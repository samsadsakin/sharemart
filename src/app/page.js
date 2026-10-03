
"use client";

import { useState } from "react";

import {
  FaHeart,
  FaStar,
  FaArrowRight,
  FaCamera,
  FaSmile,
  FaGift,
  FaRing,
  FaLock,
  FaUnlock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaComments,
  FaCoffee,
  FaMusic,
  FaKissWinkHeart,
} from "react-icons/fa";


// ==========================================================
// 15 MEMORY DATA
// ==========================================================

const memories = [
  {
    image: "/images/1.jpg",
    number: "01",
    title: "প্রথম দিন ❤️",
    subtitle: "যেদিন গল্পটার শুরু",
    text:
      "সেদিন হয়তো আমরা কেউই জানতাম না যে এই ছোট্ট মুহূর্তটা একদিন এত special হয়ে যাবে। কিন্তু এখন পিছনে তাকালে মনে হয়, গল্পটার শুরুটা ঠিক সেখান থেকেই হয়েছিল। 🌸",
    emoji: "🌸",
  },

  {
    image: "/images/2.jpg",
    number: "02",
    title: "প্রথম কথা 💬",
    subtitle: "একটা ছোট্ট conversation",
    text:
      "প্রথম কথাগুলো হয়তো খুব সাধারণ ছিল। কিন্তু সেই সাধারণ কথাগুলোই ধীরে ধীরে আমার কাছে অসাধারণ হয়ে উঠতে শুরু করেছিল। তোমার সাথে কথা বলতে ভালো লাগতো। 🥰",
    emoji: "💬",
  },

  {
    image: "/images/3.jpg",
    number: "03",
    title: "আরেকটা দিন 🌷",
    subtitle: "আরেকটু পরিচয়",
    text:
      "দিন যেতে যেতে তোমাকে একটু একটু করে চিনতে শুরু করলাম। তোমার কথা, তোমার হাসি, তোমার ছোট ছোট অভ্যাস—সবকিছুই আলাদা করে মনে থাকতে শুরু করলো। 💕",
    emoji: "🌷",
  },

  {
    image: "/images/4.jpg",
    number: "04",
    title: "প্রথম Meet Up ☕",
    subtitle: "সামনাসামনি দেখা",
    text:
      "অনলাইনের কথা থেকে বাস্তবের দেখা—এই মুহূর্তটা আলাদা ছিল। সামনে বসে তোমাকে দেখা, তোমার সাথে কথা বলা—সবকিছু যেন একটু অন্যরকম সুন্দর ছিল। 🥺❤️",
    emoji: "☕",
  },

  {
    image: "/images/5.jpg",
    number: "05",
    title: "সেই Meet Up ❤️",
    subtitle: "কিছু মুহূর্ত মনে থেকে যায়",
    text:
      "সেদিনের সময়টা হয়তো খুব বেশি দীর্ঘ ছিল না। কিন্তু কিছু মুহূর্ত সময় দিয়ে মাপা যায় না। সেই দিনের কিছু স্মৃতি আজও আমার কাছে অনেক special। 💖",
    emoji: "❤️",
  },

  {
    image: "/images/6.jpg",
    number: "06",
    title: "আরেকটা দেখা 🌸",
    subtitle: "আরেকটু কাছাকাছি",
    text:
      "এরপর আবার দেখা। আর তখন বুঝতে পারলাম—তোমার সাথে সময় কাটানোর একটা আলাদা আনন্দ আছে। সময় কখন চলে যায়, সেটা বুঝতেই পারি না। 😊",
    emoji: "🌸",
  },

  {
    image: "/images/7.jpg",
    number: "07",
    title: "একসাথে কিছু সময় 🥰",
    subtitle: "হাসি আর গল্প",
    text:
      "কিছু সময় শুধু কথা বলেই কেটে যায়। কখনো হাসি, কখনো মজা, কখনো ছোটখাটো ঝগড়া—সব মিলিয়েই তো একটা সুন্দর সম্পর্কের গল্প তৈরি হয়। 😄❤️",
    emoji: "🥰",
  },

  {
    image: "/images/8.jpg",
    number: "08",
    title: "আরও একটি স্মৃতি 📸",
    subtitle: "ক্যামেরায় বন্দি একটা মুহূর্ত",
    text:
      "ছবিটা শুধু একটা ছবি না। এর পেছনে একটা দিন আছে, একটা মুহূর্ত আছে, একটা অনুভূতি আছে। আর সেই কারণেই এই ছবিটা আমার কাছে special। 📸💕",
    emoji: "📸",
  },

  {
    image: "/images/9.jpg",
    number: "09",
    title: "সুন্দর একটা দিন 🌷",
    subtitle: "তোমার সাথে",
    text:
      "তোমার সাথে কাটানো প্রতিটা দিন আলাদা। সবদিন হয়তো perfect ছিল না, কিন্তু প্রতিটা দিনের মধ্যেই কিছু না কিছু সুন্দর ছিল। ❤️",
    emoji: "🌷",
  },

  {
    image: "/images/10.jpg",
    number: "10",
    title: "আরেকটা Meet Up 💕",
    subtitle: "আরও কিছু স্মৃতি",
    text:
      "আবার দেখা, আবার গল্প, আবার হাসি। মাঝে মাঝে মনে হয়, আমাদের সবচেয়ে সুন্দর memory-গুলো খুব সাধারণ দিন থেকেই তৈরি হয়েছে। 🥺",
    emoji: "💕",
  },

  {
    image: "/images/11.jpg",
    number: "11",
    title: "এই মুহূর্তটা ✨",
    subtitle: "একটা সুন্দর স্মৃতি",
    text:
      "এই ছবিটার দিকে তাকালে শুধু ছবিটা দেখি না। সেই সময়টা মনে পড়ে। সেই অনুভূতিটা মনে পড়ে। আর মনে হয়—হ্যাঁ, এই মুহূর্তটা সত্যিই সুন্দর ছিল। ✨❤️",
    emoji: "✨",
  },

  {
    image: "/images/12.jpg",
    number: "12",
    title: "আমাদের গল্প 💖",
    subtitle: "একটু একটু করে",
    text:
      "আমাদের গল্পটা হয়তো কোনো সিনেমার মতো শুরু হয়নি। কিন্তু ছোট ছোট মুহূর্ত, ছোট ছোট কথা আর অনেকগুলো স্মৃতি মিলে এটা আমাদের নিজেদের গল্প হয়ে গেছে। 💖",
    emoji: "💖",
  },

  {
    image: "/images/13.jpg",
    number: "13",
    title: "তোমার সাথে ❤️",
    subtitle: "ভালো লাগার কারণ",
    text:
      "তোমার সাথে থাকার সময় একটা জিনিস খুব ভালো লাগে—নিজের মতো থাকা যায়। হাসা যায়, মজা করা যায়, কথা বলা যায়। এই comfortable feeling-টাই অনেক special। 🥰",
    emoji: "❤️",
  },

  {
    image: "/images/14.jpg",
    number: "14",
    title: "প্রায় শেষ... 🥺",
    subtitle: "কিন্তু গল্প শেষ নয়",
    text:
      "এতগুলো ছবি দেখার পর একটা জিনিস বুঝতে পারো? আমাদের অনেকগুলো স্মৃতি আছে। কিন্তু আমি চাই না এগুলো এখানেই শেষ হয়ে যাক। আরও অনেক memory বানাতে চাই। 🌸",
    emoji: "🥺",
  },

  {
    image: "/images/15.jpg",
    number: "15",
    title: "আমাদের ❤️",
    subtitle: "শেষ ছবি নয়",
    text:
      "এই ১৫ নম্বর ছবিটা শেষ ছবি হতে পারে, কিন্তু আমি চাই এটা আমাদের গল্পের শেষ না হোক। বরং এখান থেকেই আরও অনেক সুন্দর দিনের শুরু হোক। ❤️",
    emoji: "💍",
  },
];


// ==========================================================
// MAIN COMPONENT
// ==========================================================

export default function ProposalPage() {

  const [step, setStep] = useState(0);

  const [memoryIndex, setMemoryIndex] = useState(0);

  const [showLove, setShowLove] = useState(false);


  const next = () => {
    setStep((prev) => prev + 1);
  };


  const nextMemory = () => {

    if (memoryIndex < memories.length - 1) {

      setMemoryIndex((prev) => prev + 1);

    } else {

      setStep(17);

    }
  };


  const memory = memories[memoryIndex];


  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-pink-100
      via-rose-50
      to-purple-100
      text-gray-800
      "
    >


      {/* =====================================================
          FLOATING BACKGROUND EMOJIS
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <span className="absolute left-[5%] top-[8%] animate-bounce text-3xl opacity-60">
          ❤️
        </span>

        <span className="absolute right-[8%] top-[12%] animate-pulse text-3xl opacity-60">
          💕
        </span>

        <span className="absolute left-[15%] top-[35%] animate-pulse text-2xl opacity-50">
          🌸
        </span>

        <span className="absolute right-[15%] top-[40%] animate-bounce text-3xl opacity-50">
          💖
        </span>

        <span className="absolute bottom-[20%] left-[8%] animate-pulse text-3xl opacity-50">
          🌷
        </span>

        <span className="absolute bottom-[12%] right-[10%] animate-bounce text-3xl opacity-60">
          💝
        </span>

        <span className="absolute left-[45%] top-[6%] animate-pulse text-2xl opacity-40">
          ✨
        </span>

        <span className="absolute bottom-[35%] left-[45%] animate-pulse text-xl opacity-40">
          ✨
        </span>

        <span className="absolute right-[35%] top-[70%] animate-bounce text-2xl opacity-40">
          💗
        </span>

      </div>


      {/* =====================================================
          STEP 0
          WELCOME
      ===================================================== */}

      {step === 0 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div
            className="
            w-full
            max-w-md
            rounded-[2rem]
            border
            border-white/70
            bg-white/85
            p-7
            text-center
            shadow-2xl
            backdrop-blur-xl
            sm:p-10
            "
          >

            <div className="mb-5 animate-pulse text-7xl">
              💌
            </div>

            <div className="mb-5 text-2xl">
              🌸 💕 🌸
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-pink-500">
              বিশেষ একজনের জন্য
            </p>

            <h1 className="mb-5 text-4xl font-extrabold text-pink-600">
              হ্যালো Sweety ❤️
            </h1>

            <p className="mb-7 text-base leading-8 text-gray-600">

              তোমার জন্য একটা
              <br />

              ছোট্ট surprise তৈরি করেছি। 🥺

              <br />
              <br />

              কিন্তু এটা শুধু একটা
              <br />

              সাধারণ website না...

              <br />
              <br />

              এখানে আমাদের
              <br />

              কিছু সুন্দর মুহূর্ত আছে। ❤️

            </p>

            <div className="mb-6 rounded-3xl bg-pink-50 p-5">

              <p className="text-sm leading-7 text-pink-600">

                প্রথম দিন থেকে
                <br />

                একের পর এক
                <br />

                আমাদের memory দেখতে পাবে। 📸

              </p>

            </div>

            <button
              onClick={next}
              className="
              btn
              h-14
              w-full
              rounded-full
              border-0
              bg-pink-500
              text-white
              shadow-lg
              shadow-pink-200
              hover:bg-pink-600
              "
            >

              শুরু করি 💕
              <FaArrowRight />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 1
          FIRST QUESTION
      ===================================================== */}

      {step === 1 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-7 text-center shadow-2xl backdrop-blur-xl">

            <div className="mb-5 animate-bounce text-6xl">
              🌷
            </div>

            <p className="mb-2 text-sm font-bold text-pink-500">
              একটা ছোট্ট প্রশ্ন 💕
            </p>

            <h2 className="mb-5 text-3xl font-bold">
              Sweety, ready তো? 🥰
            </h2>

            <p className="mb-7 leading-8 text-gray-500">

              কারণ এখন থেকে
              <br />

              আমাদের কিছু memory
              <br />

              এক এক করে আসবে। 📸

            </p>


            <div className="grid gap-3">

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-pink-100 text-pink-600"
              >
                হ্যাঁ, দেখাও ❤️
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-purple-600"
              >
                অনেক বেশি ready 🥰
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-rose-100 text-rose-600"
              >
                দেখি কী আছে 🤭
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-fuchsia-100 text-fuchsia-600"
              >
                শুরু করো পাগল! 😂❤️
              </button>

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 2
          FIRST DAY
      ===================================================== */}

      {step === 2 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-7 text-center shadow-2xl backdrop-blur-xl">

            <FaCalendarAlt className="mx-auto mb-5 animate-pulse text-5xl text-pink-500" />

            <p className="mb-2 text-sm font-bold text-pink-500">
              Chapter 01
            </p>

            <h2 className="mb-5 text-3xl font-extrabold text-pink-600">
              প্রথম দিন 🌸
            </h2>

            <p className="mb-6 leading-8 text-gray-600">

              সব গল্পের একটা শুরু থাকে।

              <br />

              আমাদের গল্পেরও ছিল।

              <br />
              <br />

              হয়তো সেদিন বুঝিনি,
              <br />

              কিন্তু আজ বুঝি—
              <br />

              ওই দিনটাই ছিল
              <br />

              একটা সুন্দর গল্পের প্রথম পৃষ্ঠা। ❤️

            </p>

            <button
              onClick={() => {
                setMemoryIndex(0);
                next();
              }}
              className="btn h-14 w-full rounded-full border-0 bg-pink-500 text-white"
            >

              প্রথম ছবিটা দেখি 📸
              <FaCamera />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 3
          15 MEMORY JOURNEY
      ===================================================== */}

      {step === 3 && (

        <section className="min-h-screen px-4 py-8">

          <div className="mx-auto w-full max-w-md">

            {/* HEADER */}

            <div className="mb-5 text-center">

              <p className="text-xs font-bold uppercase tracking-[3px] text-pink-500">
                Our Memory Journey
              </p>

              <h1 className="mt-2 text-3xl font-extrabold text-pink-600">
                আমাদের গল্প ❤️
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {memoryIndex + 1} / 15 Memory
              </p>

            </div>


            {/* PROGRESS */}

            <div className="mb-6 flex gap-1">

              {memories.map((item, index) => (

                <div
                  key={item.number}
                  className={`
                    h-1.5
                    flex-1
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      index <= memoryIndex
                        ? "bg-pink-500"
                        : "bg-pink-200"
                    }
                  `}
                />

              ))}

            </div>


            {/* PHOTO CARD */}

            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl">

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  key={memory.image}
                  src={memory.image}
                  alt={memory.title}
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />


                {/* PHOTO NUMBER */}

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-pink-600 shadow-lg">

                  #{memory.number}

                </div>


                {/* EMOJI */}

                <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-3xl shadow-lg">

                  {memory.emoji}

                </div>

              </div>


              {/* TEXT */}

              <div className="p-5 text-center">

                <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-pink-400">
                  {memory.subtitle}
                </p>

                <h2 className="mb-4 text-3xl font-extrabold text-pink-600">
                  {memory.title}
                </h2>

                <p className="text-base leading-8 text-gray-600">
                  {memory.text}
                </p>


                {/* SMALL EMOJIS */}

                <div className="my-5 flex justify-center gap-2 text-xl">
                  ❤️ 💕 ✨ 🌸
                </div>


                {/* NEXT BUTTON */}

                <button
                  onClick={nextMemory}
                  className="
                  btn
                  h-14
                  w-full
                  rounded-full
                  border-0
                  bg-pink-500
                  text-white
                  shadow-lg
                  hover:bg-pink-600
                  "
                >

                  {memoryIndex === 14
                    ? "শেষ স্মৃতি থেকে সামনে ❤️"
                    : "পরের স্মৃতি দেখো →"}

                  <FaArrowRight />

                </button>

              </div>

            </div>


            {/* MEMORY MESSAGE */}

            <div className="mt-5 rounded-[1.5rem] bg-white/70 p-5 text-center backdrop-blur">

              <p className="text-sm leading-7 text-gray-500">

                একটা ছবি,
                একটা দিন,
                একটা গল্প...

                <br />

                আর ধীরে ধীরে
                <br />

                তৈরি হয়েছে
                <br />

                আমাদের অনেকগুলো স্মৃতি। ❤️

              </p>

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 4
          MEMORY FINISHED
      ===================================================== */}

      {step === 17 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-7 text-center shadow-2xl backdrop-blur-xl">

            <div className="mb-5 animate-bounce text-7xl">
              🥺
            </div>

            <h1 className="mb-6 text-4xl font-extrabold text-pink-600">
              ১৫টা ছবি শেষ... ❤️
            </h1>

            <p className="mb-7 text-lg leading-9 text-gray-600">

              প্রথম দিন থেকে
              <br />

              শেষ ছবিটা পর্যন্ত
              <br />

              তুমি আমাদের
              <br />

              অনেকগুলো মুহূর্ত দেখলে।

              <br />
              <br />

              কিন্তু Sweety...

              <br />

              <span className="font-bold text-pink-600">
                আমার মনে হয় গল্পটা এখনো শেষ হয়নি।
              </span>

            </p>

            <div className="rounded-3xl bg-pink-50 p-6">

              <p className="text-lg leading-8 text-pink-600">

                কারণ সামনে তো
                <br />

                আরও অনেক দিন আছে। 🌸

              </p>

            </div>

            <button
              onClick={next}
              className="btn mt-7 h-14 w-full rounded-full border-0 bg-pink-500 text-white"
            >

              আরও একটা কথা আছে... ❤️

              <FaArrowRight />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 18
          HEART MESSAGE
      ===================================================== */}

      {step === 18 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-xl">

            <FaHeart className="mx-auto mb-6 animate-pulse text-6xl text-red-400" />

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink-500">
              From My Heart
            </p>

            <h2 className="mb-6 text-3xl font-extrabold text-pink-600">
              Sweety...
            </h2>

            <p className="text-lg leading-9 text-gray-600">

              তোমার সাথে দেখা হওয়ার পর
              <br />

              বুঝেছি,
              <br />

              কিছু মানুষ জীবনে
              <br />

              হঠাৎ আসে।

              <br />
              <br />

              কিন্তু তারা
              <br />

              ধীরে ধীরে
              <br />

              জীবনের একটা
              <br />

              গুরুত্বপূর্ণ অংশ হয়ে যায়। ❤️

              <br />
              <br />

              তুমি আমার কাছে
              <br />

              তেমনই একজন। 🥺

            </p>

            <button
              onClick={next}
              className="btn mt-8 h-14 w-full rounded-full border-0 bg-pink-500 text-white"
            >

              একটা প্রশ্ন করি? 👀

              <FaArrowRight />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 19
          QUESTION
      ===================================================== */}

      {step === 19 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-7 text-center shadow-2xl backdrop-blur-xl">

            <div className="mb-6 text-7xl animate-bounce">
              🥰
            </div>

            <h2 className="mb-5 text-3xl font-extrabold">
              Sweety,
              <br />
              একটা কথা বলো তো...
            </h2>

            <p className="mb-7 text-gray-500 leading-8">

              আমাদের এই ছোট ছোট
              <br />

              memory-গুলো কি তোমারও
              <br />

              ভালো লাগে? ❤️

            </p>


            <div className="grid gap-3">

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-pink-100 text-pink-600"
              >
                অনেক ভালো লাগে ❤️
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-purple-600"
              >
                খুব বেশি ভালো লাগে 🥰
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-rose-100 text-rose-600"
              >
                আবার এমন দিন চাই 💕
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-fuchsia-100 text-fuchsia-600"
              >
                আরও অনেক memory চাই 😭❤️
              </button>

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 20
          SECRET
      ===================================================== */}

      {step === 20 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl">

            <FaLock className="mx-auto mb-6 animate-pulse text-6xl text-pink-500" />

            <h2 className="mb-5 text-3xl font-extrabold">
              একটা Secret আছে 🤫
            </h2>

            <p className="mb-7 leading-8 text-gray-500">

              ১৫টা ছবি দেখানো হলো।

              <br />
              <br />

              কিন্তু আসল কথাটা
              <br />

              এখনো বলা হয়নি। 👀

            </p>

            <div className="rounded-3xl bg-pink-50 p-6">

              <p className="font-semibold leading-8 text-pink-600">

                Secret খুলতে
                <br />

                নিচের button চাপো। ❤️

              </p>

            </div>

            <button
              onClick={next}
              className="btn mt-8 h-14 w-full rounded-full border-0 bg-pink-500 text-white"
            >

              Secret Open 🔓

              <FaUnlock />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 21
          SECRET MESSAGE
      ===================================================== */}

      {step === 21 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-gradient-to-br from-pink-500 to-purple-600 p-8 text-center text-white shadow-2xl">

            <FaUnlock className="mx-auto mb-6 animate-bounce text-6xl" />

            <h2 className="mb-6 text-3xl font-extrabold">
              Secret খুলে গেছে! 💕
            </h2>

            <p className="text-lg leading-9 text-white/95">

              Sweety...

              <br />
              <br />

              সত্যিটা হলো,
              <br />

              আমি তোমাকে শুধু
              <br />

              পছন্দ করি না।

              <br />
              <br />

              তোমার সাথে কথা বলা,
              <br />

              তোমার সাথে দেখা করা,
              <br />

              তোমার সাথে হাসাহাসি করা—

              <br />

              সবকিছুই আমার কাছে
              <br />

              অনেক বেশি special। ❤️

            </p>

            <button
              onClick={next}
              className="btn mt-8 h-14 w-full rounded-full border-0 bg-white text-pink-600"
            >

              শেষ কথাটা শুনবে? 💍

              <FaArrowRight />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 22
          BIG PROPOSAL
      ===================================================== */}

      {step === 22 && (

        <section className="flex min-h-screen items-center justify-center px-4 py-8">

          <div className="w-full max-w-md rounded-[2rem] bg-white/95 p-7 text-center shadow-2xl sm:p-10">

            <div className="mb-5 animate-bounce text-7xl">
              💍
            </div>

            <div className="mb-5 text-3xl">
              ❤️ 💕 ❤️
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-pink-500">
              Sweety
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-pink-600">
              একটা কথা বলবো? 🥺
            </h1>

            <p className="mb-7 text-lg leading-9 text-gray-600">

              আমি জানি না
              <br />

              ভবিষ্যৎ কেমন হবে।

              <br />
              <br />

              কিন্তু একটা জিনিস জানি...

              <br />
              <br />

              তোমাকে আমার পাশে
              <br />

              কল্পনা করলে
              <br />

              ভবিষ্যৎটা অনেক সুন্দর লাগে। ❤️

            </p>

            <div className="mb-7 rounded-3xl bg-gradient-to-r from-pink-100 via-rose-100 to-purple-100 p-6">

              <p className="text-2xl font-extrabold leading-10 text-pink-600">

                Sweety,

                <br />

                তুমি কি আমার সাথে

                <br />

                এই গল্পটা
                <br />

                আরও অনেক দূর
                <br />

                নিয়ে যাবে? ❤️

              </p>

            </div>


            <div className="grid gap-3">

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-pink-500 text-lg text-white shadow-lg"
              >
                হ্যাঁ ❤️
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-rose-100 text-lg text-pink-600"
              >
                অবশ্যই 🥰
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-lg text-purple-600"
              >
                একদম হ্যাঁ! 💕
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-fuchsia-100 text-lg text-fuchsia-600"
              >
                এতক্ষণে বললে! 😭❤️
              </button>

              <button
                onClick={next}
                className="btn h-14 rounded-2xl border-0 bg-pink-50 text-lg text-pink-500"
              >
                উত্তর তো তুমি জানোই 😌
              </button>

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 23
          CELEBRATION
      ===================================================== */}

      {step === 23 && (

        <section className="min-h-screen px-4 py-10">

          <div className="mx-auto w-full max-w-md">

            <div className="rounded-[2rem] bg-white/95 p-7 text-center shadow-2xl">

              <div className="mb-5 animate-bounce text-7xl">
                🎉
              </div>

              <div className="mb-5 text-3xl">
                ❤️ 💕 ❤️ 💕 ❤️
              </div>

              <h1 className="mb-6 text-4xl font-extrabold text-pink-600">
                Sweety বলেছে YES! 🥰
              </h1>

              <p className="text-lg leading-9 text-gray-600">

                আজকের দিনটা
                <br />

                একটু বেশি special হয়ে গেল।

                <br />
                <br />

                কারণ তুমি একটা
                <br />

                "হ্যাঁ" বলেছো।

                <br />
                <br />

                আর সেই "হ্যাঁ"
                <br />

                আমার কাছে
                <br />

                অনেক বড় কিছু। ❤️

              </p>

            </div>


            <div className="mt-6 rounded-[2rem] bg-gradient-to-br from-pink-500 to-purple-600 p-7 text-center text-white shadow-2xl">

              <FaKissWinkHeart className="mx-auto mb-5 text-5xl" />

              <h2 className="mb-5 text-3xl font-bold">
                আমাদের জন্য 💕
              </h2>

              <p className="leading-9 text-white/90">

                আরও অনেক দিন,

                <br />

                আরও অনেক Meet Up,

                <br />

                আরও অনেক ছবি,

                <br />

                আরও অনেক হাসি,

                <br />

                আর আরও অনেক memory। ❤️

              </p>

            </div>


            <button
              onClick={next}
              className="btn mt-6 h-14 w-full rounded-full border-0 bg-white text-pink-600 shadow-xl"
            >

              শেষ কথাটা দেখো ❤️

              <FaHeart />

            </button>

          </div>

        </section>

      )}


      {/* =====================================================
          STEP 24
          FINAL PROMISE
      ===================================================== */}

      {step === 24 && (

        <section className="min-h-screen px-4 py-10">

          <div className="mx-auto w-full max-w-md">

            <div className="rounded-[2rem] bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-8 text-center text-white shadow-2xl">

              <FaHeart className="mx-auto mb-6 animate-pulse text-6xl" />

              <h1 className="mb-7 text-4xl font-extrabold">
                Sweety ❤️
              </h1>

              <p className="text-base leading-9">

                আমি perfect নই।

                <br />
                <br />

                সবসময় সঠিক কথাও
                <br />

                বলতে পারবো না।

                <br />
                <br />

                কখনো হয়তো
                <br />

                তোমাকে রাগিয়ে ফেলবো।

                <br />

                কখনো তুমি আমার উপর
                <br />

                অভিমান করবে।

                <br />
                <br />

                কিন্তু একটা জিনিস
                <br />

                সত্যি—

                <br />
                <br />

                <span className="text-2xl font-extrabold">
                  তোমাকে হারাতে চাই না। ❤️
                </span>

                <br />
                <br />

                তোমাকে সম্মান করতে,
                <br />

                বুঝতে,
                <br />

                হাসাতে

                <br />

                এবং তোমার পাশে থাকার
                <br />

                চেষ্টা করতে চাই।

              </p>

              <div className="my-8 h-px bg-white/30" />

              <p className="text-3xl font-extrabold">
                Sweety ❤️
              </p>

              <p className="mt-3 text-sm text-white/80">
                তুমি থাকলে গল্পটা সম্পূর্ণ হয়। 🥰
              </p>

            </div>


            {/* FINAL EMOJIS */}

            <div className="py-12 text-center">

              <div className="mb-5 animate-pulse text-6xl">
                💖
              </div>

              <p className="text-lg font-bold text-pink-600">

                এই ছোট্ট পাগলামিটা
                <br />

                শুধু তোমার জন্য।

              </p>

              <div className="mt-5 text-2xl">
                🌸 💕 ❤️ 💕 🌸
              </div>

              <p className="mt-5 text-sm text-gray-400">
                Sweety-এর জন্য ❤️
              </p>

            </div>

          </div>

        </section>

      )}

    </main>
  );
}
