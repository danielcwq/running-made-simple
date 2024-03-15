import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // Effect to apply the dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Effect to check for saved preference in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);
  return (
    <>
      <Head>Running Made Simple</Head>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold my-6 text-center">
              Running Made Simple
            </h1>
            <p className="">
              Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link>{" "}
              and
              <Link href="https://danielching.me"> Daniel Ching</Link>
            </p>
            <div className="bg-white p-4 shadow-md rounded-lg max-w-2xl mx-auto mb-4">
              <div className="flex flex-col space-y-4 justify-center items-center">
                <Link
                  href="/training-zone-calculator"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-64"
                >
                  Training Zone Calculator
                </Link>
                <Link
                  href="/race-pace-calculator"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-64"
                >
                  Race Pace Calculator
                </Link>
                <Link
                  href="/2.4kmTrainingPlan"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-64"
                >
                  2.4km Training Plan Generator
                </Link>
                <Link
                  href="/blog"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-64"
                >
                  Blog
                </Link>
              </div>
            </div>
            <h2 className="mt-5 font-bold text-xl flex justify-start">About</h2>
            <p className="my-5 text-justify">
              This hub was built in hopes of easing the burden for beginners to
              get started in running. Born out of a Yakun coffee chat, crafted
              with love.
            </p>
            <p className="mt-2 text-justify">
              Running doesn't have to be hard or tedious. It starts with small
              steps. We believe that knowledge shouldn't be gatekept; we're
              offering you these customised plans completely free.
            </p>
            <h2 className="mt-5 font-bold text-xl flex justify-start">
              What's to come
            </h2>
            <div>
              <p className="mt-2 text-justify">
                We're currently developing an additional page where a 2.4km
                training plan would be generated based on your inputs, making
                the plan fully customisable. We hope to develop this to a full
                scale app, giving training plans for longer distances (5k, 10k,
                HM, FM) and utilising AI to support further customisation.
              </p>
            </div>
            <h2 className="mt-5 font-bold text-xl flex justify-start">
              Behind this initiative{" "}
            </h2>
            <div className="flex flex-col items-center justify-start mt-5">
              <div className="w-28 h-28 relative mr-4 mb-4 sm:mb-0">
                <Image
                  src="/mugshot-mok.png"
                  alt="Mok Ying Ren"
                  layout="fill"
                  className="rounded-full"
                  objectFit="cover"
                />
              </div>
              <p className="text-justify">
                <strong>
                  <Link href="https://mokyingren.sg">Mok Ying Ren</Link>
                </strong>{" "}
                is an Associate Consultant at the Department of Orthopaedics at
                NUH, 2x SEA Games Gold Medallist.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start mt-5">
              <div className="w-28 h-28 relative mr-4 mb-4 sm:mb-0">
                <Image
                  src="/mugshot-daniel.png"
                  alt="Daniel Ching"
                  layout="fill"
                  className="rounded-full mb-5"
                  objectFit="cover"
                />
              </div>
              <p className="text-justify">
                <strong>
                  <Link href="https://danielching.me">Daniel</Link>
                </strong>{" "}
                is a full-time NSF. He's interested in AI, physiology and the
                intersection of these two fields.
              </p>
            </div>
            <div>
              <p className="mt-2 text-justify">
                They both attend Redemption Hill Church and share a common
                passion for running!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
