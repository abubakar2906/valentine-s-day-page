'use client'

interface TanjiroPageProps {
  onNext: () => void
}

export default function TanjiroPage({ onNext }: TanjiroPageProps) {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/tanj.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <div>
              <h3 className="text-white font-semibold tracking-wide">TANJIRO</h3>
              <p className="text-purple-300 text-xs">KAMADO</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-xs font-medium">DEMON SLAYER</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side - Image & Stats */}
          <div className="space-y-6">
            {/* Character Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 overflow-hidden">
                <img 
                  src="/tanj.png" 
                  alt="Demon Slayer"
                  className="w-full h-80 object-cover rounded-xl mb-4"
                />
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-orange-500/20">
                    <p className="text-2xl font-bold text-orange-400">100</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Passion</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-red-500/20">
                    <p className="text-2xl font-bold text-red-400">100</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Strength</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-pink-500/20">
                    <p className="text-2xl font-bold text-pink-400">100</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Kindness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Title Card */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full" />
                <h1 className="text-3xl font-bold text-white">Like Tanjiro's Heart</h1>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                You carry the same unwavering passion and determination. That fire in your heart that never dims, even when things get tough.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            </div>

            {/* Qualities */}
            <div className="space-y-3">
              {/* Quality 1 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-orange-500/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-orange-300 mb-1">Your Passion</h3>
                    <p className="text-gray-400 text-sm">The way you care about everything you do, putting your whole heart into it</p>
                  </div>
                </div>
              </div>

              {/* Quality 2 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-red-500/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-600/20 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-300 mb-1">Your Strength</h3>
                    <p className="text-gray-400 text-sm">How you face every challenge head-on, never backing down</p>
                  </div>
                </div>
              </div>

              {/* Quality 3 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-pink-300 mb-1">Your Kindness</h3>
                    <p className="text-gray-400 text-sm">That gentle heart that cares for everyone around you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Promise Section */}
            <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-lg">✨</span>
                </div>
                <h4 className="text-lg font-semibold text-orange-300">Our Promise</h4>
              </div>
              <p className="text-gray-200 italic">
                "You've always wanted us to watch Demon Slayer together...
                <br />
                <span className="text-orange-300 font-semibold not-italic">I promise we will ❤️</span>"
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={onNext}
              className="w-full group bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-500 hover:via-red-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Continue
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}