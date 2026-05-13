import { Link } from "react-router-dom";

const orderItems = [
  {
    id: 1,
    name: "Váy Lụa Maison Ivory",
    price: "12.500.000₫",
    size: "36 (S)",
    color: "Kem Ngà",
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Túi Cầm Tay Structured Black",
    price: "8.200.000₫",
    size: "O/S",
    color: "Đen Nhám",
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function OrderDetail() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1b1b1b]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-16">
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/new"
              className="text-sm font-medium uppercase tracking-[0.2em] text-black/60 hover:text-black transition"
            >
              Collections
            </Link>

            <Link
              to="/new"
              className="text-sm font-medium uppercase tracking-[0.2em] text-black/60 hover:text-black transition"
            >
              New Arrivals
            </Link>
          </div>

          <Link to="/" className="text-2xl font-semibold tracking-[0.3em] uppercase">
            ÉLÉGANCE
          </Link>

          <div className="flex items-center gap-5">
            <Link to="/" className="text-xl hover:opacity-70 transition">
              ⌕
            </Link>

            <Link to="/cart" className="relative text-xl hover:opacity-70 transition">
              👜
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                2
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-16 lg:py-20">
        {/* HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-black/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              CHI TIẾT ĐƠN HÀNG
            </p>

            <h2 className="mb-2 text-4xl font-semibold md:text-5xl">
              Mã đơn #ELG12345
            </h2>

            <p className="text-sm text-black/60">Đặt vào 24 Tháng 5, 2024</p>
          </div>

          <span className="inline-flex w-fit border border-black px-4 py-2 text-xs font-medium uppercase tracking-[0.2em]">
            Đang giao hàng
          </span>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <div className="space-y-20 lg:col-span-8">
            {/* PRODUCTS */}
            <section>
              <h3 className="mb-10 border-b border-black/10 pb-4 text-2xl font-semibold">
                Sản phẩm của bạn
              </h3>

              <div className="space-y-12">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col gap-8 md:flex-row"
                  >
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 md:w-40">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between py-2">
                      <div>
                        <div className="mb-2 flex items-start justify-between">
                          <h4 className="text-lg font-semibold">{item.name}</h4>

                          <span className="text-lg font-semibold">{item.price}</span>
                        </div>

                        <div className="space-y-1 text-sm font-medium uppercase tracking-[0.15em] text-black/60">
                          <p>Size: {item.size}</p>

                          <p>Màu sắc: {item.color}</p>

                          <p>Số lượng: {item.quantity}</p>
                        </div>
                      </div>

                      <button className="mt-5 w-fit text-xs font-medium uppercase tracking-[0.2em] underline underline-offset-4 hover:opacity-50 transition">
                        Yêu cầu hoàn trả
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TIMELINE */}
            <section>
              <h3 className="mb-12 text-2xl font-semibold">
                Hành trình đơn hàng
              </h3>

              <div className="relative">
                <div className="absolute left-3 top-0 h-full w-px bg-black/10 md:left-0 md:top-3 md:h-px md:w-full"></div>

                <div className="relative z-10 grid grid-cols-1 gap-y-10 md:grid-cols-4">
                  {/* STEP 1 */}
                  <div className="flex gap-5 md:flex-col md:items-center md:text-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white ring-4 ring-[#f9f9f9]">
                      ✓
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em]">
                        Đã đặt hàng
                      </p>

                      <p className="text-xs font-medium text-black/60">24/05, 10:30</p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex gap-5 md:flex-col md:items-center md:text-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white ring-4 ring-[#f9f9f9]">
                      ✓
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em]">
                        Đang xử lý
                      </p>

                      <p className="text-xs font-medium text-black/60">24/05, 14:15</p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="flex gap-5 md:flex-col md:items-center md:text-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black ring-4 ring-[#f9f9f9]">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em]">
                        Đang giao hàng
                      </p>

                      <p className="text-xs font-medium text-black/60">25/05, 09:00</p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="flex gap-5 opacity-40 md:flex-col md:items-center md:text-center">
                    <div className="h-6 w-6 rounded-full bg-gray-300 ring-4 ring-[#f9f9f9]"></div>

                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em]">
                        Hoàn tất
                      </p>

                      <p className="text-xs font-medium text-black/60">Dự kiến 27/05</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-8 lg:col-span-4">
            {/* SUMMARY */}
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <h3 className="mb-8 border-b border-black/10 pb-4 text-xs font-bold uppercase tracking-[0.25em]">
                TÓM TẮT ĐƠN HÀNG
              </h3>

              <div className="mb-8 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-black/60 font-medium">Tạm tính</span>

                  <span className="font-medium">20.700.000₫</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-black/60 font-medium">Phí vận chuyển</span>

                  <span className="font-medium">Miễn phí</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-black/60 font-medium">Thuế (VAT)</span>

                  <span className="font-medium">2.070.000₫</span>
                </div>
              </div>

              <div className="flex items-end justify-between border-t border-black/10 pt-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Tổng cộng
                </span>

                <span className="text-2xl font-semibold">22.770.000₫</span>
              </div>
            </div>

            {/* SHIPPING */}
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em]">
                🚚 THÔNG TIN VẬN CHUYỂN
              </h4>

              <div className="space-y-4 text-sm text-black/70">
                <div>
                  <p className="font-semibold text-black text-base">Nguyễn Minh Anh</p>

                  <p className="text-sm">
                    123 Đường Lê Lợi, Phường Bến Thành,
                    <br />
                    Quận 1, Thành phố Hồ Chí Minh
                  </p>

                  <p className="text-sm">+84 90 123 4567</p>
                </div>

                <div className="border-t border-black/10 pt-4">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em]">
                    Phương thức giao hàng
                  </p>

                  <p className="text-sm font-medium text-black">Giao hàng Hỏa tốc (1-2 ngày)</p>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em]">
                💳 THANH TOÁN
              </h4>

              <div className="space-y-2 text-sm text-black/70">
                <p className="font-medium">Thẻ tín dụng (Visa •••• 8899)</p>

                <p className="text-xs font-medium">Giao dịch đã được xác nhận</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 pt-6">
              <Link
                to="/"
                className="rounded-xl border border-black bg-black py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black text-center"
              >
                Tiếp tục mua sắm
              </Link>

              <button className="rounded-xl border border-black py-4 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-black hover:text-white">
                Tải hóa đơn (PDF)
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
