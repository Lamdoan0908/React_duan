export default function New() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[716px] flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-6">
          <span className="uppercase tracking-[0.3em] text-gray-500">
            BST THU ĐÔNG 2024
          </span>

          <h1 className="text-4xl md:text-6xl italic font-serif">
            Sản phẩm mới
          </h1>

          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto leading-relaxed">
            Một bản giao hưởng của lụa satin và những đường cắt tinh xảo, nơi vẻ
            đẹp vượt thời gian gặp gỡ sự phóng khoáng hiện đại.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y py-6 px-6">
        <div className="flex flex-wrap justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto">
            <button>Tất cả sản phẩm</button>
            <button>Áo Khoác</button>
            <button>Váy Đầm</button>
            <button>Phụ Kiện</button>
            <button>Giày Dép</button>
          </div>

          <div className="flex gap-4">
            <button>Sắp xếp</button>
            <button>Bộ lọc</button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="flex justify-between">
                <h3 className="font-semibold uppercase">{item.name}</h3>
                <span>♡</span>
              </div>

              <p className="text-sm text-gray-500">{item.material}</p>
              <p className="mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-gray-200" />

          <div className="space-y-6">
            <h2 className="text-4xl font-serif">
              Vẻ đẹp là một hành trình tĩnh lặng.
            </h2>

            <p className="text-gray-600">
              Chúng tôi không tạo ra quần áo. Chúng tôi kiến tạo những khoảnh
              khắc.
            </p>

            <a className="border-b border-black w-fit">KHÁM PHÁ MAISON</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl uppercase tracking-widest">
            Join the Maison
          </h2>

          <p className="text-gray-600">Đăng ký để nhận thông tin mới nhất.</p>

          <div className="flex gap-3 flex-col md:flex-row">
            <input
              className="border-b flex-1 p-3 text-center"
              placeholder="Email của bạn"
            />
            <button className="bg-black text-white px-6 py-3">Đăng ký</button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Mock data */
const products = [
  {
    name: "Váy Lụa Satin",
    material: "100% Silk",
    price: "8.500.000 VND",
    image: "https://via.placeholder.com/600x800",
  },
  {
    name: "Áo Khoác Dạ Muse",
    material: "Premium Wool",
    price: "12.200.000 VND",
    image: "https://via.placeholder.com/600x800",
  },
  {
    name: "Sơ Mi Voan Aura",
    material: "Organza Silk",
    price: "4.900.000 VND",
    image: "https://via.placeholder.com/600x800",
  },
];
