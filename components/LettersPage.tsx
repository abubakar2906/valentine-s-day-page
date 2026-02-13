'use client'

import { useState } from 'react'

const paragraphs = [
  {
    name: 'Ahmad Babangida',
    text: 'I love you with the conviction of Ahmad — a love that doesn\'t shy away from challenge, a love that grows and reshapes itself to match the depth and strength I see in you. Every choice I make is grounded in knowing that being with you means showing up fully, honestly, and without reservation.',
    book: 'Broken',
    cover: '/broken.png',
  },
  {
    name: 'Sadiq',
    text: 'I love you with the steadiness of Sadiq — quietly present, dependable, a love that holds its ground even when the world feels uncertain. In every small act, every moment shared, I am here for you, unwavering, noticing and cherishing all that makes you who you are.',
    book: 'Haftasu Bebi',
    cover: '/hafsatu-bebi.png',
  },
  {
    name: 'Ibrahim',
    text: 'I love you with the intensity of Ibrahim — openly, boldly, with admiration and passion that refuses to stay hidden. This love celebrates you in all your brilliance, invests in your happiness, and chooses you, day after day, in ways both quiet and profound.',
    book: 'Haftasu Bebi',
    cover: '/hafsatu-bebi.png',
  },
]

interface LettersPageProps {
  onNext: () => void
}

export default function LettersPage({ onNext }: LettersPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isBookOpen, setIsBookOpen] = useState(false)

  const handleNext = () => {
    if (currentIndex === paragraphs.length - 1) {
      onNext()
    } else {
      setIsBookOpen(false)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, 300)
    }
  }

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsBookOpen(false)
      setTimeout(() => {
        setCurrentIndex(index)
      }, 300)
    }
  }

  const handleOpenBook = () => {
    setIsBookOpen(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-stone-100 flex flex-col items-center justify-center px-4 md:px-8 py-12">
      <div className="w-full max-w-5xl">
        {/* Book Display */}
        <div className="relative">
          <div className="relative mx-auto" style={{ perspective: '2000px' }}>
            {!isBookOpen ? (
              /* Closed Book - Show Cover */
              <div 
                key={`cover-${currentIndex}`}
                className="book-cover-container mx-auto animate-fade-in cursor-pointer"
                onClick={handleOpenBook}
                style={{
                  maxWidth: '400px',
                }}
              >
                <div 
                  className="relative bg-white rounded-sm overflow-hidden group hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)',
                    aspectRatio: '2/3',
                  }}
                >
                  <img
                    src={paragraphs[currentIndex].cover}
                    alt={paragraphs[currentIndex].book}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Click to Open Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-6 py-3 rounded-full">
                      <p className="font-serif text-gray-800 text-sm">Click to Open</p>
                    </div>
                  </div>
                </div>

                {/* Book Shadow */}
                <div 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-xl rounded-full"
                  style={{ filter: 'blur(20px)' }}
                />
              </div>
            ) : (
              /* Open Book - Show Letter Pages */
              <div 
                key={`open-${currentIndex}`} 
                className="book-container bg-white rounded-sm overflow-hidden animate-book-open"
                style={{
                  boxShadow: '0 10px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)',
                  maxWidth: '900px',
                  margin: '0 auto'
                }}
              >
                {/* Book Pages - Open Book Layout */}
                <div className="grid md:grid-cols-2 min-h-[500px]">
                  {/* Left Page */}
                  <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-12 border-r border-amber-200/50">
                    {/* Page Number */}
                    <div className="absolute top-6 left-6 text-xs text-gray-400 font-serif">
                      {currentIndex * 2 + 1}
                    </div>
                    
                    {/* Decorative Quote Mark */}
                    <div className="text-6xl md:text-8xl text-amber-200/40 font-serif leading-none mb-4">
                      "
                    </div>
                    
                    {/* Character Name */}
                    <div className="mb-6">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                        {paragraphs[currentIndex].name}
                      </h2>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-sans">
                        from {paragraphs[currentIndex].book}
                      </p>
                    </div>
                  </div>

                  {/* Right Page */}
                  <div className="relative bg-gradient-to-bl from-amber-50 to-yellow-50 p-8 md:p-12 flex flex-col justify-center">
                    {/* Page Number */}
                    <div className="absolute top-6 right-6 text-xs text-gray-400 font-serif">
                      {currentIndex * 2 + 2}
                    </div>
                    
                    {/* Letter Text */}
                    <div className="space-y-6">
                      <p className="font-serif text-base md:text-lg leading-relaxed text-gray-700 first-letter:text-4xl first-letter:font-bold first-letter:text-gray-800 first-letter:mr-1 first-letter:float-left">
                        {paragraphs[currentIndex].text}
                      </p>
                      
                      {/* Signature */}
                      <div className="flex justify-end mt-8">
                        <div className="text-right">
                          <p className="font-serif italic text-gray-600">With all my love,</p>
                          <p className="font-serif text-xl text-gray-800 mt-1">Your Love</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Spine Shadow Effect */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-amber-900/10 to-transparent pointer-events-none hidden md:block" />
              </div>
            )}

            {/* Book Shadow for Open Book */}
            {isBookOpen && (
              <div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-8 bg-black/10 blur-xl rounded-full"
                style={{ filter: 'blur(20px)' }}
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-6 mt-12">
          {/* Page Indicator Dots */}
          <div className="flex gap-3 justify-center">
            {paragraphs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-700 scale-125' 
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
                aria-label={`Go to letter ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group px-10 py-3.5 bg-amber-900 text-amber-50 font-serif text-base hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 rounded-sm"
          >
            <span className="flex items-center gap-2">
              {currentIndex === paragraphs.length - 1 ? 'Continue to Next Chapter' : 'Turn Page'}
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bookOpen {
          0% {
            transform: perspective(2000px) rotateY(-15deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: perspective(2000px) rotateY(0deg) scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .animate-book-open {
          animation: bookOpen 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .book-container {
          position: relative;
        }

        /* Paper texture effect */
        .book-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>
    </main>
  )
}