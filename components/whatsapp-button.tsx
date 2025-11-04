"use client"

import React from "react"

export function WhatsAppButton() {
  const phoneNumber = "201110544057"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden="true"
      >
        <path fill="#ffffff" d="M0 0h32v32H0z" fillOpacity="0" />
        <path
          fill="currentColor"
          d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.6 4.43 1.72 6.35L3.2 28.8l6.69-1.72a12.72 12.72 0 0 0 6.12 1.56c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.8-12.8-12.8zm0 23.04c-1.97 0-3.9-.53-5.6-1.54l-.4-.24-3.97 1.02 1.06-3.86-.26-.4a10.23 10.23 0 0 1-1.58-5.42c0-5.66 4.6-10.26 10.26-10.26 5.66 0 10.26 4.6 10.26 10.26 0 5.66-4.6 10.26-10.26 10.26zm5.95-7.65c-.33-.17-1.96-.96-2.26-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.7.08-.33-.17-1.38-.51-2.63-1.63-.97-.86-1.62-1.92-1.8-2.24-.19-.33-.02-.51.14-.68.14-.14.33-.38.49-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.17-.74-1.78-1.01-2.44-.27-.66-.54-.55-.74-.55-.19 0-.41-.03-.63-.03-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71 0 1.6 1.16 3.15 1.32 3.37.16.22 2.27 3.46 5.49 4.85.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.96-.8 2.24-1.58.28-.79.28-1.47.19-1.61-.08-.14-.3-.22-.63-.38z"
        />
      </svg>
    </a>
  )
}








