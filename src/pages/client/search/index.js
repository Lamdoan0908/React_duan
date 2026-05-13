const Search = () => {
  const products = [
    {
      id: 1,
      name: "Áo Khoác Wool Oversized",
      price: "15.500.000₫",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Trench Coat Cổ Điển",
      price: "18.200.000₫",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Blazer Cashmere Đen",
      price: "12.800.000₫",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Áo Khoác Da Thuần Chay",
      price: "22.500.000₫",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Cardigan Dệt Kim Minimal",
      price: "8.900.000₫",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Áo Len Merino",
      price: "9.500.000₫",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-14">
      {/* SEARCH HERO */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="relative border-b border-black">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full bg-transparent py-5 pr-12 text-2xl md:text-4xl font-serif outline-none placeholder:text-gray-400"
          />

          <button className="absolute right-0 top-1/2 -translate-y-1/2">
            <span className="material-symbols-outlined text-3xl">
              arrow_forward
            </span>
          </button>
        </div>

        <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mt-8">
          Kết quả tìm kiếm cho
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mt-3">
          "Áo khoác thu đông"
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-14">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-[260px] flex-shrink-0">
          <div className="sticky top-24 space-y-10">
            {/* CATEGORY */}
            <div>
              <h3 className="uppercase tracking-[0.2em] text-xs border-b pb-3 mb-5">
                Danh mục
              </h3>

              <div className="space-y-3 text-sm">
                <button className="block text-left hover:opacity-60 transition">
                  Tất cả sản phẩm
                </button>

                <button className="block text-left font-medium">
                  Áo khoác (12)
                </button>

                <button className="block text-left hover:opacity-60 transition">
                  Váy đầm
                </button>

                <button className="block text-left hover:opacity-60 transition">
                  Phụ kiện
                </button>
              </div>
            </div>

            {/* SIZE */}
            <div>
              <h3 className="uppercase tracking-[0.2em] text-xs border-b pb-3 mb-5">
                Kích thước
              </h3>

              <div className="grid grid-cols-4 gap-2">
                <button className="border py-2 text-sm hover:border-black transition">
                  XS
                </button>

                <button className="border py-2 text-sm bg-black text-white">
                  S
                </button>

                <button className="border py-2 text-sm hover:border-black transition">
                  M
                </button>

                <button className="border py-2 text-sm hover:border-black transition">
                  L
                </button>
              </div>
            </div>

            {/* COLORS */}
            <div>
              <h3 className="uppercase tracking-[0.2em] text-xs border-b pb-3 mb-5">
                Màu sắc
              </h3>

              <div className="flex gap-3">
                <button className="w-6 h-6 rounded-full bg-black ring-2 ring-black ring-offset-2" />
                <button className="w-6 h-6 rounded-full bg-white border" />
                <button className="w-6 h-6 rounded-full bg-[#D2B48C]" />
                <button className="w-6 h-6 rounded-full bg-[#4A5D23]" />
              </div>
            </div>

            {/* PRICE */}
            <div>
              <h3 className="uppercase tracking-[0.2em] text-xs border-b pb-3 mb-5">
                Khoảng giá
              </h3>

              <input type="range" className="w-full accent-black" />

              <div className="flex justify-between mt-3 text-xs text-gray-500">
                <span>2.000.000₫</span>
                <span>25.000.000₫</span>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">
          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-10">
            <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
              12 sản phẩm
            </p>

            <div className="flex items-center gap-3">
              <span className="uppercase tracking-[0.2em] text-xs">
                Sắp xếp:
              </span>

              <select className="outline-none bg-transparent text-sm">
                <option>Mới nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
              </select>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#f5f5f5] mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    <button className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black border border-black transition">
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium">{product.name}</h3>

                  <p className="text-gray-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-8 mt-20">
            <button className="uppercase tracking-[0.2em] text-xs opacity-40">
              ← Trước
            </button>

            <div className="flex gap-4">
              <button className="border-b border-black pb-1 text-sm">01</button>

              <button className="text-sm text-gray-500 hover:text-black transition">
                02
              </button>

              <button className="text-sm text-gray-500 hover:text-black transition">
                03
              </button>
            </div>

            <button className="uppercase tracking-[0.2em] text-xs hover:opacity-60 transition">
              Tiếp →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Search;
