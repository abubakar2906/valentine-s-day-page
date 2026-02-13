'use client'

interface YamiPageProps {
  onNext: () => void
}

export default function YamiPage({ onNext }: YamiPageProps) {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/yami.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
            <div>
              <h3 className="text-white font-semibold tracking-wide">YAMI</h3>
              <p className="text-purple-300 text-xs">SUKEHIRO</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-xs font-medium">BLACK CLOVER</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side - Image */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 overflow-hidden">
                <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="/yami.png" 
                    alt="Yami Sukehiro"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Title Card */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
                <h1 className="text-3xl font-bold text-white">The Yami Situation</h1>
              </div>
              <p className="text-xl text-purple-300 mb-2">
                You think <span className="font-bold text-pink-400">Yami Sukehiro</span> is sexy...
              </p>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300">
                But I'm Sexier 😤
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-4" />
            </div>

            {/* Comparison List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-purple-300 px-2">Why I'm Better:</h3>
              
              {/* Reason 1 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-pink-300 mb-1">He's Fictional</h4>
                    <p className="text-gray-400 text-sm">I'm actually real and here for you every day</p>
                  </div>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-pink-300 mb-1">He's Tough</h4>
                    <p className="text-gray-400 text-sm">But I'm gentle with you in all the ways that matter</p>
                  </div>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-pink-300 mb-1">He's Got Dark Magic</h4>
                    <p className="text-gray-400 text-sm">I've got something better—my love for YOU</p>
                  </div>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="group bg-slate-900/60 backdrop-blur-xl rounded-xl p-4 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">😎</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-pink-300 mb-1">He's a Squad Captain</h4>
                    <p className="text-gray-400 text-sm">I'm captain of Team Us, and we're undefeated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <span className="text-lg">💜</span>
                </div>
                <h4 className="text-lg font-semibold text-pink-300">Real Talk</h4>
              </div>
              <p className="text-gray-200">
                So yeah, have your little crush...
                <br />
                <span className="text-pink-300 font-bold">But we both know who's got your heart for real 😏</span>
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={onNext}
              className="w-full group bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Alright, Alright, Continue
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