import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
              <div className="text-7xl">🤖</div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            MI-IA.CO
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Plataforma de Inteligencia Artificial y Automatización
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            >
              📝 Registrarse
            </Link>
            <Link
              href="/dashboard"
              className="bg-indigo-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl border-2 border-white/20"
            >
              📊 Ver Dashboard
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">Automatización</h3>
              <p className="text-purple-200 text-sm">
                Workflows inteligentes con n8n
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🗄️</div>
              <h3 className="text-white font-bold text-lg mb-2">Base de Datos</h3>
              <p className="text-purple-200 text-sm">
                Supabase en tiempo real
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-white font-bold text-lg mb-2">Next.js 14</h3>
              <p className="text-purple-200 text-sm">
                Tecnología de vanguardia
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-purple-300 text-sm">
            <p>Powered by Supabase + n8n + Next.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}
