const orderSuccess = () => {
  return (
    <>
      export default function OrderSuccess(){" "}
      {
        <main className="bg-[#f9f9f9] text-[#1b1b1b] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <section className="text-center mb-24 max-w-2xl mx-auto">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-black/10 bg-white shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  check
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif mb-6">
                Cảm ơn bạn đã đặt hàng!
              </h1>

              <p className="text-lg text-gray-600 mb-4">
                Đơn hàng số{" "}
                <span className="font-bold text-black">#ELG-882910</span> đã
                được tiếp nhận.
              </p>

              <p className="text-gray-500 leading-relaxed">
                Một email xác nhận chi tiết đã được gửi đến địa chỉ email của
                bạn. Chúng tôi sẽ thông báo khi đơn hàng bắt đầu được vận
                chuyển.
              </p>
            </section>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* LEFT */}
              <div className="lg:col-span-8 space-y-10">
                {/* Status */}
                <div className="bg-white border border-gray-200 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-3">
                      Trạng thái đơn hàng
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                      <span className="font-semibold">
                        Đã xác nhận & Đang xử lý
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-12 bg-gray-200" />

                  <div>
                    <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-3">
                      Dự kiến giao hàng
                    </p>

                    <p className="font-medium">
                      14 Tháng 11 - 16 Tháng 11, 2024
                    </p>
                  </div>
                </div>

                {/* Products */}
                <div className="bg-white border border-gray-200 p-8">
                  <h2 className="text-2xl font-serif mb-10">
                    Chi tiết sản phẩm
                  </h2>

                  <div className="space-y-10">
                    {/* Product 1 */}
                    <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-100 pb-10">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2_i4VfW5sdqb4lrRHk2puWdU0qL9CGf-jSqBrVE2Nic1maM4GUDi51haO6SHqKEYZZPLgwnD6m4-EVZpsy4xRWLcutI4gXWSz2uaVP4qBu8Q2Ue5xnY5GKfbSDH5KdSwpwzGoYaWkmaQgq8OvzWYcnOihffpdXJL05uHcVMIY6tOtmwnFhmxpld0r01eTfTstBLvMfJ6Trbfjva_0hQd8pWp_QW0VyIDWb-lN2UGGm12amsHMq9VALHu9MRENi_EXFrnS8pfOKjeW"
                        alt="product"
                        className="w-full sm:w-32 aspect-[3/4] object-cover"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            Áo Khoác Wool Dạ Tailored
                          </h3>

                          <p className="text-gray-500 mb-3">
                            Màu sắc: Midnight Black | Cỡ: M
                          </p>

                          <p className="italic text-gray-500">Số lượng: 1</p>
                        </div>

                        <p className="font-bold mt-4">12,500,000₫</p>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex flex-col sm:flex-row gap-6">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJMMpXLl1bi-OPT6SvuqTp8bq0Mjwh4mkv6N2kkwFIzjy54_Ak2DAK4L4EQHUlThsZ3f3QSz9I4tIdUJkF6pDk1TA7D-oZiUiGtVVftln94kKAuwQYIDdGd09Q9GPgP3bBo7MRpq2BIjWK4mwM-C14TFdpjH8MHwqQrZUuj_D7WivY5-A_YupN5dYgqFF3EcDsKxtNKllJVSX3KR8oCaq6SR5UdsMz9YZ0YMLr7g02LDSgpPp6cVxmfsGgxUZj_LhBSB96I6U451QD"
                        alt="product"
                        className="w-full sm:w-32 aspect-[3/4] object-cover"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            Khăn Lụa Họa Tiết Monogram
                          </h3>

                          <p className="text-gray-500 mb-3">
                            Màu sắc: Silver Grey | Cỡ: OS
                          </p>

                          <p className="italic text-gray-500">Số lượng: 1</p>
                        </div>

                        <p className="font-bold mt-4">3,200,000₫</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 p-8">
                    <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-6">
                      Địa chỉ giao hàng
                    </p>

                    <div className="space-y-2 text-gray-700">
                      <p className="font-semibold">Nguyễn Minh Anh</p>
                      <p>25 Đường Lê Lợi, Phường Bến Nghé</p>
                      <p>Quận 1, TP. Hồ Chí Minh</p>
                      <p>700000, Việt Nam</p>

                      <p className="pt-4 text-gray-500">(+84) 90 123 4567</p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 p-8">
                    <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-6">
                      Phương thức vận chuyển
                    </p>

                    <div className="space-y-3">
                      <p className="font-semibold">
                        Giao hàng Cao cấp (Express)
                      </p>

                      <p className="text-gray-500 leading-relaxed">
                        Dự kiến nhận hàng trong 2-3 ngày làm việc kể từ khi xuất
                        kho.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <aside className="lg:col-span-4">
                <div className="bg-white border border-gray-200 p-8 sticky top-24">
                  <h2 className="text-2xl font-serif mb-8">Thanh toán</h2>

                  <div className="mb-8">
                    <p className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-4">
                      Phương thức thanh toán
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined">
                        credit_card
                      </span>

                      <span>Visa kết thúc bằng •••• 4242</span>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-gray-200 pt-8 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tạm tính</span>
                      <span>15,700,000₫</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Phí vận chuyển</span>
                      <span>Miễn phí</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Thuế (VAT 8%)</span>
                      <span>1,256,000₫</span>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-gray-200 text-xl font-semibold">
                      <span>Tổng cộng</span>
                      <span>16,956,000₫</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-black text-white py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black border border-black transition-all duration-300">
                      Tiếp tục mua sắm
                    </button>

                    <button className="w-full border border-black py-4 uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                      In hóa đơn
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      }
    </>
  );
};
export default orderSuccess;
