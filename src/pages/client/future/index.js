function Future() {
  return (
    <main className="pt-32">
      {/* Title */}
      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-16 text-center">
        <h2 className="text-5xl md:text-7xl text-primary mb-6">
          Sản Phẩm Nổi Bật
        </h2>

        <p className="text-on-surface-variant max-w-2xl mx-auto italic">
          Sự giao thoa hoàn hảo giữa kỹ thuật may đo tinh xảo và tư duy thời
          trang đương đại.
        </p>
      </section>

      {/* Filters */}
      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-12">
        <div className="border-y border-outline-variant/30 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 overflow-x-auto">
            <button className="text-on-surface-variant hover:text-primary">
              Danh Mục
            </button>

            <button className="text-on-surface-variant hover:text-primary">
              Kích Cỡ
            </button>

            <button className="text-on-surface-variant hover:text-primary">
              Màu Sắc
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-on-surface-variant/60">24 Sản phẩm</span>

            <button className="text-primary">Sắp xếp</button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
                  <button className="bg-black text-white px-6 py-3">
                    Thêm Vào Giỏ
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1">{item.name}</h3>

                <p className="text-on-surface-variant mb-2">{item.material}</p>

                <p className="text-primary">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button className="border border-primary px-10 py-4 hover:bg-primary hover:text-white transition">
            Xem Thêm Sản Phẩm
          </button>
        </div>
      </section>

      {/* Banner */}
      <section className="relative w-full h-[700px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-5">
          <span className="tracking-[0.4em] text-white block mb-6">
            THE MUSE
          </span>

          <blockquote className="text-3xl md:text-6xl text-white italic max-w-4xl">
            "Thời trang không chỉ là những gì bạn mặc, mà là cách bạn cảm nhận
            về chính mình."
          </blockquote>
        </div>
      </section>
    </main>
  );
}

const products = [
  {
    name: "Đầm Lụa Dạ Tiệc Midnight",
    material: "Black Silk",
    price: "12.500.000 VND",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
  {
    name: "Áo Blazer Cấu Trúc Ivory",
    material: "Pure Wool",
    price: "8.900.000 VND",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    name: "Túi Cầm Tay Sculptural",
    material: "Calf Leather",
    price: "15.200.000 VND",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    name: "Khăn Lụa Monogram",
    material: "100% Silk",
    price: "3.200.000 VND",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  },
  {
    name: "Giày Cao Gót Minimal",
    material: "Nappa Leather",
    price: "6.500.000 VND",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Quần Ống Rộng Xếp Ly",
    material: "Wool Blend",
    price: "4.800.000 VND",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },
];

export default Future;
