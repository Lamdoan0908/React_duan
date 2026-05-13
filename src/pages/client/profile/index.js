const profile = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          <div class="flex items-center gap-6">
            <div class="w-24 h-24 rounded-full overflow-hidden border border-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
                class="w-full h-full object-cover"
                alt="avatar"
              />
            </div>

            <div>
              <p class="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-2">
                ÉLÉGANCE Member
              </p>

              <h1 class="text-3xl md:text-5xl font-serif text-black mb-2">
                Minh Anh Nguyễn
              </h1>

              <p class="text-zinc-500">Thành viên từ 2023</p>
            </div>
          </div>

          <button class="border border-black px-6 py-3 uppercase tracking-[0.2em] text-xs hover:bg-black hover:text-white transition-all duration-500">
            Chỉnh sửa hồ sơ
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside class="lg:col-span-3">
            <div class="border border-zinc-200 p-8 sticky top-28">
              <nav class="space-y-6">
                <a
                  href="#info"
                  class="flex items-center justify-between uppercase tracking-[0.15em] text-xs text-black border-b border-black pb-2"
                >
                  <span>Thông tin</span>
                  <span>→</span>
                </a>

                <a
                  href="#orders"
                  class="flex items-center justify-between uppercase tracking-[0.15em] text-xs text-zinc-500 hover:text-black transition"
                >
                  <span>Đơn hàng</span>
                  <span>→</span>
                </a>

                <a
                  href="#address"
                  class="flex items-center justify-between uppercase tracking-[0.15em] text-xs text-zinc-500 hover:text-black transition"
                >
                  <span>Địa chỉ</span>
                  <span>→</span>
                </a>

                <a
                  href="#wishlist"
                  class="flex items-center justify-between uppercase tracking-[0.15em] text-xs text-zinc-500 hover:text-black transition"
                >
                  <span>Wishlist</span>
                  <span>→</span>
                </a>
              </nav>
            </div>
          </aside>

          <div class="lg:col-span-9 space-y-16">
            <section id="info" class="border border-zinc-200 p-8 md:p-12">
              <div class="flex items-center justify-between mb-10">
                <h2 class="text-2xl font-serif">Thông tin cá nhân</h2>

                <button class="uppercase tracking-[0.15em] text-xs border-b border-black">
                  Sửa đổi
                </button>
              </div>

              <div class="grid md:grid-cols-2 gap-10">
                <div class="space-y-8">
                  <div>
                    <p class="uppercase tracking-[0.15em] text-xs text-zinc-500 mb-2">
                      Họ và tên
                    </p>

                    <p class="text-lg">Minh Anh Nguyễn</p>
                  </div>

                  <div>
                    <p class="uppercase tracking-[0.15em] text-xs text-zinc-500 mb-2">
                      Email
                    </p>

                    <p class="text-lg">minhanh@example.com</p>
                  </div>
                </div>

                <div class="space-y-8">
                  <div>
                    <p class="uppercase tracking-[0.15em] text-xs text-zinc-500 mb-2">
                      Số điện thoại
                    </p>

                    <p class="text-lg">+84 90 123 4567</p>
                  </div>

                  <div>
                    <p class="uppercase tracking-[0.15em] text-xs text-zinc-500 mb-2">
                      Mật khẩu
                    </p>

                    <p class="text-lg">••••••••••••</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="orders" class="border border-zinc-200 p-8 md:p-12">
              <div class="flex items-center justify-between mb-10">
                <h2 class="text-2xl font-serif">Đơn hàng gần đây</h2>

                <button class="uppercase tracking-[0.15em] text-xs border-b border-black">
                  Xem tất cả
                </button>
              </div>

              <div class="space-y-5">
                <div class="border border-zinc-100 p-6 hover:bg-zinc-50 transition">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <p class="text-lg font-medium mb-2">#ELG-882910</p>

                      <p class="text-zinc-500">12 Tháng 10, 2023</p>
                    </div>

                    <div class="flex items-center gap-4">
                      <span class="px-4 py-2 bg-zinc-100 uppercase tracking-[0.15em] text-[10px]">
                        Đã giao
                      </span>

                      <p class="text-lg font-medium">12.500.000 ₫</p>
                    </div>
                  </div>
                </div>

                <div class="border border-zinc-100 p-6 hover:bg-zinc-50 transition">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <p class="text-lg font-medium mb-2">#ELG-882405</p>

                      <p class="text-zinc-500">05 Tháng 09, 2023</p>
                    </div>

                    <div class="flex items-center gap-4">
                      <span class="px-4 py-2 bg-zinc-100 uppercase tracking-[0.15em] text-[10px]">
                        Đã giao
                      </span>

                      <p class="text-lg font-medium">8.200.000 ₫</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="address" class="border border-zinc-200 p-8 md:p-12">
              <div class="flex items-center justify-between mb-10">
                <h2 class="text-2xl font-serif">Địa chỉ giao hàng</h2>

                <button class="uppercase tracking-[0.15em] text-xs border-b border-black">
                  + Thêm mới
                </button>
              </div>

              <div class="border border-zinc-100 p-8 relative">
                <span class="absolute top-6 right-6 bg-black text-white text-[10px] uppercase tracking-[0.15em] px-3 py-2">
                  Mặc định
                </span>

                <div class="space-y-3">
                  <p class="text-xl font-medium">Minh Anh Nguyễn</p>

                  <p class="text-zinc-600">123 Đường Lê Lợi</p>

                  <p class="text-zinc-600">Quận 1, TP. Hồ Chí Minh</p>

                  <p class="text-zinc-600">Việt Nam</p>
                </div>

                <div class="flex gap-6 mt-8">
                  <button class="uppercase tracking-[0.15em] text-xs underline underline-offset-4">
                    Sửa
                  </button>

                  <button class="uppercase tracking-[0.15em] text-xs text-red-500 underline underline-offset-4">
                    Xóa
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
export default profile;
