function Banner() {
  return (
    <section className="relative h-screen flex items-center">
      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-6 md:px-16 text-white">
        <p className="uppercase tracking-[0.3em] mb-4">L'ART DE VIVRE</p>

        <h1 className="text-5xl md:text-7xl mb-8">BST Mùa Thu 2024</h1>

        <button className="px-8 py-4 bg-white text-black">Khám phá ngay</button>
      </div>
    </section>
  );
}

export default Banner;
