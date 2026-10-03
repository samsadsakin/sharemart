
"use client";

import { useState } from "react";

import {
  FaHeart,
  FaRegHeart,
  FaArrowRight,
  FaStar,
  FaCamera,
  FaRing,
  FaGift,
} from "react-icons/fa";

export default function ProposalPage() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 text-gray-800">

      {/* ================= ভাসমান হার্ট ================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <span className="absolute left-[8%] top-[12%] animate-bounce text-2xl opacity-60">
          ❤️
        </span>

        <span className="absolute right-[10%] top-[20%] animate-pulse text-xl opacity-60">
          💕
        </span>

        <span className="absolute bottom-[18%] left-[12%] animate-pulse text-xl opacity-50">
          💗
        </span>

        <span className="absolute bottom-[12%] right-[12%] animate-bounce text-2xl opacity-60">
          💕
        </span>

        <span className="absolute left-[45%] top-[8%] animate-pulse text-lg opacity-40">
          ✨
        </span>

      </div>

      {/* =====================================================
          প্রথম পেজ
      ===================================================== */}

      {step === 0 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/85 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <div className="mb-6 animate-pulse text-6xl">
              💌
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
              একটি ছোট্ট সারপ্রাইজ
            </p>

            <h1 className="mb-5 text-4xl font-bold text-gray-800 sm:text-5xl">
              আমার প্রিয় মানুষটির জন্য ❤️
            </h1>

            <p className="mb-8 text-base leading-8 text-gray-600 sm:text-lg">
              তোমার জন্য ছোট্ট একটা জিনিস তৈরি করেছি।
              <br />
              মাত্র কয়েকটা মুহূর্ত আমার সাথে থেকো...
              <br />
              তারপর তোমাকে একটা কথা বলবো। 🥺💕
            </p>

            <button
              onClick={nextStep}
              className="btn h-14 w-full rounded-full border-0 bg-pink-500 text-white shadow-lg hover:bg-pink-600"
            >
              আমাদের গল্প শুরু করি
              <FaArrowRight />
            </button>

            <p className="mt-6 text-sm text-gray-400">
              অনেক ভালোবাসা দিয়ে তৈরি ❤️
            </p>

          </div>

        </section>
      )}

      {/* =====================================================
          দ্বিতীয় পেজ
      ===================================================== */}

      {step === 1 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <FaHeart className="mx-auto mb-6 animate-pulse text-5xl text-pink-500" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-400">
              প্রশ্ন ০১
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              তুমি কি একটা কথা জানো?
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              তুমি আমার জীবনের
              <br />
              সবচেয়ে বিশেষ মানুষগুলোর একজন হয়ে গেছো। ❤️
            </p>

            <div className="grid gap-4">

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-pink-100 text-pink-600 hover:bg-pink-200"
              >
                জানি 🥰
              </button>

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-purple-600 hover:bg-purple-200"
              >
                বলো তো 🤭
              </button>

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-rose-100 text-rose-600 hover:bg-rose-200"
              >
                সত্যি? ❤️
              </button>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          তৃতীয় পেজ
      ===================================================== */}

      {step === 2 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <FaStar className="mx-auto mb-6 text-5xl text-yellow-400" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-400">
              আমার মনের কথা
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              তাহলে শোনো...
            </h2>

            <p className="mb-8 text-lg leading-9 text-gray-600">
              তোমার সাথে প্রতিটা কথা,
              <br />
              তোমার প্রতিটা হাসি,
              <br />
              তোমার সাথে কাটানো প্রতিটা মুহূর্ত...
              <br />
              আমার কাছে অনেক মূল্যবান হয়ে গেছে। 💕
            </p>

            <div className="rounded-3xl bg-gradient-to-r from-pink-100 to-purple-100 p-6">

              <p className="font-medium leading-8 text-gray-700">
                তুমি সাধারণ মুহূর্তগুলোকে
                <br />
                অসাধারণ করে দিতে পারো।
                <br />
                আর সত্যি বলতে...
                <br />
                আমি এই অনুভূতিটা হারাতে চাই না। ❤️
              </p>

            </div>

            <button
              onClick={nextStep}
              className="btn mt-8 rounded-full border-0 bg-pink-500 px-8 text-white hover:bg-pink-600"
            >
              সামনে এগিয়ে চলো ❤️
              <FaArrowRight />
            </button>

          </div>

        </section>
      )}

      {/* =====================================================
          চতুর্থ পেজ
      ===================================================== */}

      {step === 3 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <FaGift className="mx-auto mb-6 text-5xl text-pink-500" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-400">
              একটি গুরুত্বপূর্ণ কথা
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              তুমি কি প্রস্তুত?
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              কারণ অনেকদিন ধরে
              <br />
              মনের মধ্যে একটা কথা জমিয়ে রেখেছি...
              <br />
              আজ সেটা তোমাকে বলতে চাই। 🥺❤️
            </p>

            <button
              onClick={nextStep}
              className="btn h-14 w-full rounded-full border-0 bg-pink-500 text-white shadow-lg hover:bg-pink-600"
            >
              বলো ❤️
              <FaArrowRight />
            </button>

          </div>

        </section>
      )}

      {/* =====================================================
          মূল PROPOSE পেজ
      ===================================================== */}

      {step === 4 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-2xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <div className="mb-6 text-6xl">
              🥺❤️
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
              আমার মনের গভীর থেকে
            </p>

            <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-6xl">
              তুমি কি আমার হবে? 💍
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-lg leading-9 text-gray-600">
              শুধু আজকের জন্য নয়।
              <br />
              শুধু কিছু মুহূর্তের জন্য নয়।
              <br />
              আমাদের সামনে থাকা
              <br />
              সুন্দর সব মুহূর্তের জন্য। ❤️
            </p>

            <div className="grid gap-4">

              <button
                onClick={nextStep}
                className="btn h-16 rounded-2xl border-0 bg-pink-500 text-lg text-white shadow-lg hover:bg-pink-600"
              >
                হ্যাঁ ❤️
              </button>

              <button
                onClick={nextStep}
                className="btn h-16 rounded-2xl border-0 bg-rose-100 text-lg text-pink-600 hover:bg-rose-200"
              >
                অবশ্যই হ্যাঁ 🥰
              </button>

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-purple-600 hover:bg-purple-200"
              >
                একটু ভাবি 🤭
              </button>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          FINAL PAGE
      ===================================================== */}

      {step === 5 && (
        <section className="min-h-screen px-5 py-12">

          <div className="mx-auto max-w-4xl">

            {/* SUCCESS CARD */}

            <div className="rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

              <FaRing className="mx-auto mb-6 animate-pulse text-6xl text-pink-500" />

              <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
                আমার সবচেয়ে প্রিয় উত্তর
              </p>

              <h1 className="mb-6 text-4xl font-bold text-pink-600 sm:text-6xl">
                তুমি হ্যাঁ বলেছো! ❤️
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-9 text-gray-600">
                আর এই ছোট্ট একটা "হ্যাঁ"
                <br />
                আমার পুরো পৃথিবীটাকে
                <br />
                একটু বেশি সুন্দর করে দিলো। 🥰
                <br />
                <br />
                আশা করি এটাই আমাদের
                <br />
                সুন্দর গল্পের শুরু। ❤️
              </p>

            </div>

            {/* =================================================
                DUO PHOTO
            ================================================= */}

            <div className="mt-8 rounded-[2rem] bg-white/90 p-6 shadow-2xl backdrop-blur-md sm:p-10">

              <div className="mb-8 text-center">

                <FaCamera className="mx-auto mb-3 text-3xl text-pink-500" />

                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                  আমাদের ছোট্ট পৃথিবী ❤️
                </h2>

                <p className="mt-2 text-gray-500">
                  একটি ছবি, একটি সুন্দর স্মৃতি। 💕
                </p>

              </div>

              {/* ================= আপনার দুজনের ছবি ================= */}

              <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 p-3 shadow-xl">

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src="/images/us.jpg"
                    alt="আমাদের দুজনের ছবি"
                    className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
                  />

                </div>

                <div className="py-5 text-center">

                  <p className="text-2xl font-bold text-pink-600">
                    তুমি আর আমি ❤️
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    দুজন মানুষ, একটি সুন্দর গল্প। 🥰
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                শেষ মেসেজ
            ================================================= */}

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-pink-500 to-purple-500 p-8 text-center text-white shadow-2xl sm:p-12">

              <FaRegHeart className="mx-auto mb-6 text-5xl" />

              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                তোমার জন্য আমার প্রতিশ্রুতি
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-9 text-white/90 sm:text-lg">
                আমি প্রতিশ্রুতি দিতে পারি না যে
                আমাদের প্রতিটা দিন পারফেক্ট হবে।
                <br />
                কিন্তু আমি প্রতিশ্রুতি দিতে পারি,
                তোমাকে সবসময় সম্মান করবো,
                তোমার পাশে থাকার চেষ্টা করবো
                এবং আমাদের প্রতিটা সুন্দর মুহূর্তকে
                হৃদয়ে ধরে রাখবো। ❤️
              </p>

              <div className="my-8 h-px bg-white/30" />

              <p className="text-3xl font-bold">
                তুমি আর আমি ❤️
              </p>

              <p className="mt-3 text-white/70">
                হয়তো এখান থেকেই শুরু আমাদের সুন্দর গল্প...
              </p>

            </div>

            {/* ================= শেষ হার্ট ================= */}

            <div className="py-12 text-center">

              <div className="mb-4 animate-pulse text-5xl">
                ❤️
              </div>

              <p className="text-sm text-gray-400">
                শুধু তোমার জন্য তৈরি
              </p>

            </div>

          </div>

        </section>
      )}

    </main>
  );
}
