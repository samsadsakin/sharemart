
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

      {/* ================= FLOATING HEARTS ================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <span className="absolute left-[8%] top-[12%] text-2xl opacity-60 animate-bounce">
          ❤️
        </span>

        <span className="absolute right-[10%] top-[20%] text-xl opacity-60 animate-pulse">
          💕
        </span>

        <span className="absolute bottom-[18%] left-[12%] text-xl opacity-50 animate-pulse">
          💗
        </span>

        <span className="absolute bottom-[12%] right-[12%] text-2xl opacity-60 animate-bounce">
          💕
        </span>

        <span className="absolute left-[45%] top-[8%] text-lg opacity-40 animate-pulse">
          ✨
        </span>

      </div>

      {/* ================= STEP 0 ================= */}

      {step === 0 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/85 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <div className="mb-6 text-6xl animate-pulse">
              💌
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
              A Little Surprise
            </p>

            <h1 className="mb-5 text-4xl font-bold text-gray-800 sm:text-5xl">
              For My Favourite Person ❤️
            </h1>

            <p className="mb-8 text-base leading-8 text-gray-600 sm:text-lg">
              I made something special for you.
              <br />
              It will only take a few moments...
              <br />
              So please stay with me. 🥺💕
            </p>

            <button
              onClick={nextStep}
              className="btn h-14 w-full rounded-full border-0 bg-pink-500 text-white shadow-lg hover:bg-pink-600"
            >
              Start Our Little Story
              <FaArrowRight />
            </button>

            <p className="mt-6 text-sm text-gray-400">
              Made with lots of ❤️
            </p>

          </div>

        </section>
      )}

      {/* ================= STEP 1 ================= */}

      {step === 1 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <FaHeart className="mx-auto mb-6 text-5xl text-pink-500 animate-pulse" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-400">
              Question 01
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Do you know something?
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              You have become one of the most
              <br />
              special people in my life. ❤️
            </p>

            <div className="grid gap-4">

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-pink-100 text-pink-600 hover:bg-pink-200"
              >
                I Know 🥰
              </button>

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-purple-600 hover:bg-purple-200"
              >
                Tell Me 🤭
              </button>

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-rose-100 text-rose-600 hover:bg-rose-200"
              >
                Really? ❤️
              </button>

            </div>

          </div>

        </section>
      )}

      {/* ================= STEP 2 ================= */}

      {step === 2 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <FaStar className="mx-auto mb-6 text-5xl text-yellow-400" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-400">
              Something From My Heart
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Let me tell you...
            </h2>

            <p className="mb-8 text-lg leading-9 text-gray-600">
              Every conversation with you,
              <br />
              every smile,
              <br />
              every little moment...
              <br />
              somehow became precious to me. 💕
            </p>

            <div className="rounded-3xl bg-gradient-to-r from-pink-100 to-purple-100 p-6">

              <p className="font-medium leading-8 text-gray-700">
                You make ordinary moments feel special.
                <br />
                And honestly...
                <br />
                I don't want to lose that feeling. ❤️
              </p>

            </div>

            <button
              onClick={nextStep}
              className="btn mt-8 rounded-full border-0 bg-pink-500 px-8 text-white hover:bg-pink-600"
            >
              Continue ❤️
              <FaArrowRight />
            </button>

          </div>

        </section>
      )}

      {/* ================= STEP 3 ================= */}

      {step === 3 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <FaGift className="mx-auto mb-6 text-5xl text-pink-500" />

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-400">
              One Important Question
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Are you ready?
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Because there is something
              <br />
              I have wanted to say for a while... 🥺
            </p>

            <button
              onClick={nextStep}
              className="btn h-14 w-full rounded-full border-0 bg-pink-500 text-white shadow-lg hover:bg-pink-600"
            >
              Tell Me ❤️
              <FaArrowRight />
            </button>

          </div>

        </section>
      )}

      {/* ================= STEP 4 ================= */}

      {step === 4 && (
        <section className="flex min-h-screen items-center justify-center px-5">

          <div className="w-full max-w-2xl rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

            <div className="mb-6 text-6xl">
              🥺❤️
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
              From My Heart
            </p>

            <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-6xl">
              Will You Be Mine? 💍
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-lg leading-9 text-gray-600">
              Not just for today.
              <br />
              Not just for a moment.
              <br />
              But for all the beautiful moments
              <br />
              waiting for us. ❤️
            </p>

            <div className="grid gap-4">

              <button
                onClick={nextStep}
                className="btn h-16 rounded-2xl border-0 bg-pink-500 text-lg text-white shadow-lg hover:bg-pink-600"
              >
                YES ❤️
              </button>

              <button
                onClick={nextStep}
                className="btn h-16 rounded-2xl border-0 bg-rose-100 text-lg text-pink-600 hover:bg-rose-200"
              >
                YES, OF COURSE 🥰
              </button>

              <button
                onClick={nextStep}
                className="btn h-14 rounded-2xl border-0 bg-purple-100 text-purple-600 hover:bg-purple-200"
              >
                Let Me Think 🤭
              </button>

            </div>

          </div>

        </section>
      )}

      {/* ================= FINAL PAGE ================= */}

      {step === 5 && (
        <section className="min-h-screen px-5 py-12">

          <div className="mx-auto max-w-4xl">

            {/* SUCCESS */}

            <div className="rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12">

              <FaRing className="mx-auto mb-6 text-6xl text-pink-500 animate-pulse" />

              <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
                My Favourite Answer
              </p>

              <h1 className="mb-6 text-4xl font-bold text-pink-600 sm:text-6xl">
                You Said YES! ❤️
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-9 text-gray-600">
                And just like that...
                <br />
                you made my heart a little happier.
                <br />
                I hope this is only the beginning
                <br />
                of our beautiful story. 🥰
              </p>

            </div>

            {/* ================= DUO PHOTO ================= */}

            <div className="mt-8 rounded-[2rem] bg-white/90 p-6 shadow-2xl backdrop-blur-md sm:p-10">

              <div className="mb-8 text-center">

                <FaCamera className="mx-auto mb-3 text-3xl text-pink-500" />

                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                  Our Little World ❤️
                </h2>

                <p className="mt-2 text-gray-500">
                  One picture. One beautiful memory. 💕
                </p>

              </div>

              {/* YOUR DUO PHOTO */}

              <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 p-3 shadow-xl">

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src="/images/us.jpg"
                    alt="Me and My Favourite Person"
                    className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
                  />

                </div>

                <div className="py-5 text-center">

                  <p className="text-2xl font-bold text-pink-600">
                    Me & You ❤️
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    One heart, two people, countless memories. 🥰
                  </p>

                </div>

              </div>

            </div>

            {/* ================= LOVE MESSAGE ================= */}

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-pink-500 to-purple-500 p-8 text-center text-white shadow-2xl sm:p-12">

              <FaRegHeart className="mx-auto mb-6 text-5xl" />

              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                My Promise To You
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-9 text-white/90 sm:text-lg">
                I cannot promise that every day will be perfect.
                But I can promise that I will always value you,
                respect you, support you, and cherish every beautiful
                moment we get to share together.
              </p>

              <div className="my-8 h-px bg-white/30" />

              <p className="text-3xl font-bold">
                You & Me ❤️
              </p>

              <p className="mt-3 text-white/70">
                Maybe this is where our beautiful story begins...
              </p>

            </div>

            {/* ================= FINAL HEART ================= */}

            <div className="py-12 text-center">

              <div className="mb-4 text-5xl animate-pulse">
                ❤️
              </div>

              <p className="text-sm text-gray-400">
                Made especially for you
              </p>

            </div>

          </div>

        </section>
      )}

    </main>
  );
}
