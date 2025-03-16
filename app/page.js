export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
         style={{
           backgroundImage: "url('/sign_img.jpg')",
         }}>
      <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
        Welcome to MockIt!
        </h1>
        <a href="/dashboard" className=" hover:bg-black text-black hover:text-white border-2 border-black font-semibold py-3 px-4 rounded-xl text-xl transition-all duration-200 group">
        Get Started <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">→</span>
        </a>
        </div>
    </div>
  );
}
