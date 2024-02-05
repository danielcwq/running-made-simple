import React, { useState } from "react";
import Navigation from "@/components/navigation";
import Link from "next/link";
export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md md:max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold my-3 text-center">Blog</h1>
          <p className="">
            Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link> and
            <Link href="https://danielching.me"> Daniel Ching</Link>
          </p>
          <Navigation />
        </div>
        <h2 className="my-5 font-bold text-xl flex justify-start">
          Articles & Resources
        </h2>
        <div>
          <ul className="list-disc pl-5">
            <li>
              <Link
                href="https://betterhumans.pub/how-to-get-good-at-2-4km-a-comprehensive-guide-85e9669ee19c"
                target="_blank"
                className="hover:text-blue-600 italic"
              >
                How to Get Good at 2.4km
              </Link>
              : Daniel's manifesto on improving your 2.4km run time, top Google
              search result (targetted to more experienced runners).
            </li>
          </ul>{" "}
          <ul className="list-disc pl-5">
            <li>
              <Link
                href="https://betterhumans.pub/preventing-overtraining-achieving-sustainable-growth-c47fcc6c2d7f"
                target="_blank"
                className="hover:text-blue-600 italic"
              >
                Preventing Overtraining: Achieving Sustainable Growth
              </Link>
              : Daniel's article on training sustainably.
            </li>
          </ul>
          <ul className="list-disc pl-5 my-3">
            <li>
              <Link
                href="https://www.youtube.com/watch?v=qqY7BWsvF1c&t=17s&ab_channel=MOKYingRen"
                target="_blank"
                className="hover:text-blue-600 italic"
              >
                Running Made Simple Webinar Part 1
              </Link>
              : Mok's video on the science behind running.
            </li>
          </ul>
          <ul className="list-disc pl-5 my-3">
            <li>
              <Link
                href="https://www.youtube.com/watch?v=OqiqgGAZn9U&ab_channel=MOKYingRen"
                target="_blank"
                className="hover:text-blue-600 italic"
              >
                Running Made Simple Webinar Part 2
              </Link>
              : Mok's video on training zones.
            </li>
          </ul>
          <ul className="list-disc pl-5 my-3">
            <li>
              <Link
                href="https://www.youtube.com/watch?v=OR9RMuVBtSM&ab_channel=MOKYingRen"
                target="_blank"
                className="hover:text-blue-600 italic"
              >
                Running Made Simple Webinar Part 3
              </Link>
              : Mok's video on understanding the training program.
            </li>
          </ul>
          <ul className="list-disc pl-5 my-3">
            <li>
              <Link
                href="https://www.youtube.com/watch?v=3BaBjUdh8V0&ab_channel=MOKYingRen"
                target="_blank"
                className="hover:text-blue-600 italic"
              >
                Running Made Simple Webinar Part 4
              </Link>
              : Mok's video on the 2.4km race strategy.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
