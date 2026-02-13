'use client'

import { useState, useEffect } from 'react'
import LettersPage from '@/components/LettersPage'
import TanjiroPage from '@/components/TanjiroPage'
import YamiPage from '@/components/YamiPage'
import EntergalacticPage from '@/components/EntergalacticPage'

type Section = 'landing' | 'letters' | 'tanjiro' | 'yami' | 'entergalactic'

export default function ValentinesDay() {
  const [currentSection, setCurrentSection] = useState<Section>('landing')

  const getYouTubeVideoId = (section: Section): string => {
    switch (section) {
      case 'letters':
        return 'VArOUfVOjqI' // Replace with actual YouTube video ID
      case 'tanjiro':
      case 'yami':
        return 'QceVTChhlJM' // Replace with actual YouTube video ID
      case 'entergalactic':
        return 'o-VMJ1DNyf0' // Replace with actual YouTube video ID
      default:
        return ''
    }
  }

  const handleSectionChange = (section: Section) => {
    setCurrentSection(section)
  }

  if (currentSection === 'landing') {
    return (
      <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <div className="text-center max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-8 tracking-wide text-gray-900">
            Hey Habeebah
          </h1>
          <p className="font-serif text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            I have something special to share with you...
          </p>
          <button
            onClick={() => handleSectionChange('letters')}
            className="px-8 py-4 bg-black text-white font-serif text-lg hover:bg-gray-800 transition-colors"
          >
            Open
          </button>
        </div>
      </main>
    )
  }

  const videoId = getYouTubeVideoId(currentSection)

  return (
    <>
      {/* Hidden YouTube Player */}
      {videoId && (
        <div className="hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
            allow="autoplay"
          />
        </div>
      )}

      {currentSection === 'letters' && (
        <LettersPage onNext={() => handleSectionChange('tanjiro')} />
      )}
      {currentSection === 'tanjiro' && (
        <TanjiroPage onNext={() => handleSectionChange('yami')} />
      )}
      {currentSection === 'yami' && (
        <YamiPage onNext={() => handleSectionChange('entergalactic')} />
      )}
      {currentSection === 'entergalactic' && (
        <EntergalacticPage onNext={() => handleSectionChange('landing')} />
      )}
    </>
  )
}