'use client'

import { useState } from 'react'

interface EntergalacticPageProps {
  onNext: () => void
}

const sections = [
  {
    part: 1,
    text: "Relationships aren't perfect, but with you, every imperfection feels worth it. From June 15th until now, these past eight months, every moment with you has made life lighter, calmer, more alive. When I talk to you, I feel peace, your laugh, your giggle, your soft, quiet ways they make life feel like a dream I never wanna wake from.",
    image: '/triogal.png',
  },
  {
    part: 2,
    text: "I love your strength, your intelligence, the way you challenge me and teach me things I didn't know, like the first time you corrected me on the word \"verbatim.\" I love your small, perfect features, your tummy, your arms, your thighs, even your knees that you hate so much. I love the way you love me, how it becomes an excuse to tease me, to push me, and yet still feel gentle and warm.",
    image: '/tg.png',
  },
  {
    part: 3,
    text: "Every time I see you, I feel proud, inspired, and reminded why life is worth living. I work to give you the life you deserve, to make sure you have everything you dream of, from the jetour car you keep seeing so much to the little joys you carry with you. You are incredible, powerful, soft, and brilliant, someone I adore wholly, someone who makes every day better just by being in it. I love you, deeply, endlessly, in ways that only the two of us will ever fully understand.",
    image: '/mnh.png',
    isFinal: true
  }
]

export default function EntergalacticPage({ onNext }: EntergalacticPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex === sections.length - 1) {
      onNext()
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const currentSection = sections[currentIndex]

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Cosmic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/enterG.png)',
        }}
      />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div 
          key={currentIndex}
          className="grid md:grid-cols-2 gap-8 items-center animate-fade-in"
        >
          {/* Left Side - Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={currentSection.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Poem Text */}
              <div>
                <p className="text-xl md:text-3xl leading-relaxed text-white font-light">
                  {currentSection.text}
                </p>
              </div>

              {/* Final Section Signature */}
              {currentSection.isFinal && (
                <div className="space-y-6 pt-8 border-t border-white/20">
                  <p className="text-3xl md:text-5xl font-serif text-white">
                    I love you Habeebah
                  </p>
                  <p className="text-xl md:text-2xl text-purple-200">
                    Happy Valentine's Day
                  </p>
                  <p className="text-lg md:text-xl text-purple-300 italic">
                    Since June 15, 2024
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center gap-6 pt-6">
                {/* Progress */}
                <div className="flex gap-2">
                  {sections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-12 bg-white'
                          : 'w-8 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to part ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors group"
                >
                  <span className="text-lg font-light">
                    {currentIndex === sections.length - 1 ? 'Start Over' : 'Continue'}
                  </span>
                  <svg 
                    className="w-6 h-6 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d={currentIndex === sections.length - 1 ? "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" : "M17 8l4 4m0 0l-4 4m4-4H3"} 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </main>
  )
}