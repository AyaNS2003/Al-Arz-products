import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
            Welcome to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Al-Arz Products</span>
          </h1>
          <p className="text-xl text-gray-300">
            React + Tailwind CSS is ready to go! 🚀
          </p>
        </div>

        {/* Card Component */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-white mb-2">Counter Demo</h2>
            <p className="text-gray-300">Click the button to test interactivity</p>
          </div>

          {/* Counter */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-6xl font-bold text-cyan-400">
              {count}
            </div>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 ease-out"
            >
              Increment Counter
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-6 py-2 bg-white/10 text-white font-medium rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Vite</h3>
            <p className="text-gray-400">Lightning-fast HMR and build tool</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-xl font-semibold text-white mb-2">React</h3>
            <p className="text-gray-400">Modern UI library with hooks</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Tailwind</h3>
            <p className="text-gray-400">Utility-first CSS framework</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
