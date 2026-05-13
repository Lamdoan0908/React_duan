const Payment = () => {
  return (
    <>
      {" "}
      {
        <main className="bg-[#f9f9f9] text-[#1b1b1b] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* LEFT */}
              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif mb-10">
                    Phương thức thanh toán
                  </h1>

                  <div className="space-y-8">
                    {/* Credit Card */}
                    <div className="border-b border-gray-200 pb-8">
                      <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="payment"
                            defaultChecked
                            className="w-4 h-4"
                          />

                          <span className="uppercase tracking-[0.2em] text-sm font-medium">
                            Thẻ tín dụng / Ghi nợ
                          </span>
                        </label>

                        <div className="flex gap-2">
                          <span className="material-symbols-outlined">
                            credit_card
                          </span>

                          <span className="material-symbols-outlined">
                            account_balance_wallet
                          </span>
                        </div>
                      </div>

                      <form className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                          <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                            Số thẻ
                          </label>

                          <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-3 focus:outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                            Ngày hết hạn
                          </label>

                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-3 focus:outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                            CVV
                          </label>

                          <input
                            type="text"
                            placeholder="123"
                            className="w-full bg-transparent border-0 border-b border-gray-300 px-0 py-3 focus:outline-none focus:border-black"
                          />
                        </div>
                      </form>
                    </div>

                    {/* Bank */}
                    <div className="border-b border-gray-200 pb-8">
                      <label className="flex items-center gap-3 cursor-pointer mb-5">
                        <input
                          type="radio"
                          name="payment"
                          className="w-4 h-4"
                        />

                        <span className="uppercase tracking-[0.2em] text-sm font-medium">
                          Chuyển khoản ngân hàng
                        </span>
                      </label>

                      <div className="pl-7 text-gray-500 space-y-2">
                        <p>Tên tài khoản: CÔNG TY TNHH ÉLÉGANCE</p>
                        <p>Số tài khoản: 1234567890</p>
                        <p>Ngân hàng: Vietcombank - Chi nhánh Hội Sở</p>

                        <p className="italic text-sm">
                          Nội dung: [Mã đơn hàng] - [Số điện thoại]
                        </p>
                      </div>
                    </div>

                    {/* Wallet */}
                    <div>
                      <label className="flex items-center gap-3 cursor-pointer mb-5">
                        <input
                          type="radio"
                          name="payment"
                          className="w-4 h-4"
                        />

                        <span className="uppercase tracking-[0.2em] text-sm font-medium">
                          Ví điện tử
                        </span>
                      </label>

                      <div className="pl-7 flex gap-4">
                        <span className="border border-gray-300 px-4 py-2 text-sm uppercase">
                          MoMo
                        </span>

                        <span className="border border-gray-300 px-4 py-2 text-sm uppercase">
                          VNPay
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-8">
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="material-symbols-outlined">
                      verified_user
                    </span>

                    <span className="uppercase tracking-[0.2em] text-xs">
                      Secure Payment SSL
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="material-symbols-outlined">
                      local_shipping
                    </span>

                    <span className="uppercase tracking-[0.2em] text-xs">
                      Worldwide Delivery
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="material-symbols-outlined">
                      published_with_changes
                    </span>

                    <span className="uppercase tracking-[0.2em] text-xs">
                      30-Day Returns
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <aside className="lg:col-span-5">
                <div className="bg-[#f3f3f3] p-8 md:p-10 sticky top-24">
                  <h2 className="text-2xl font-serif mb-8">Tóm tắt đơn hàng</h2>

                  {/* Product 1 */}
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBknnTCPXW0PlmMU8TLJqdqxKB2FBJjvN0bX6KktvBy9uX8M7gwKu3IOiLX-mSRlnDdJDkuej2AureBeqn3SCE3ewJ5qJxPgJmynuy92rNLFiqL9Z4SGfcsWbbDuAPhv8Tzrkyq8z0hjgWHf0HyCeiKKbZum0L-snUhFpXvPz0w7ssSA8ZFlL8BcAcDVZmjlsgkyOCSGJ5taa9izquZfoZ6L8qh5BLPM1XJIN5NkuOrtXtTxsBj9L5cNO-uuJyK2iNtEGhLkiIY-vK7"
                        alt="product"
                        className="w-20 h-24 object-cover"
                      />

                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-semibold leading-tight">
                            Váy Lụa Maison Ivory
                          </h3>

                          <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mt-2">
                            Size: M
                          </p>
                        </div>

                        <p>8.500.000₫</p>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex gap-4">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxA4tTs9v8eHOKjpLdM7ZZr0c0hupJIgmrbDfXkPB_fNRbhYjWY6ryQFNZlRWmQrdb5fwKf79bSkZr2qD-dQFBX1-T9wYh7PGXS1ds56571RE97icxJCAAgX3UoFmP2nDDWsLrxLvwwRrmP3rCI3GJeRGmjTRnv7ThWw5MXi0iXU39MTU8I0GCVdOxwrmraVgZLmIgQ7GiUOAtCsGib8AIycfiNuodqT9IlznFVBTfbD92_1fZ2T53mfvoKRy4VdoT7bP2W6QZp0Oc"
                        alt="product"
                        className="w-20 h-24 object-cover"
                      />

                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-semibold leading-tight">
                            Túi Cầm Tay Structured Black
                          </h3>

                          <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mt-2">
                            OS
                          </p>
                        </div>

                        <p>4.200.000₫</p>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="space-y-4 pt-8 border-t border-gray-300">
                    <div className="flex justify-between text-gray-500">
                      <span>Tạm tính</span>
                      <span>12.700.000₫</span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span>Vận chuyển</span>
                      <span>Miễn phí</span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span>Thuế</span>
                      <span>Bao gồm</span>
                    </div>

                    <div className="flex justify-between items-end pt-4 border-t border-gray-300">
                      <span className="text-2xl font-serif">Tổng cộng</span>

                      <span className="text-2xl font-serif">12.700.000₫</span>
                    </div>
                  </div>

                  <button className="w-full bg-black text-white py-5 mt-10 uppercase tracking-[0.2em] text-sm hover:bg-gray-800 transition-all duration-300">
                    Thanh toán ngay
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
                    Bằng việc nhấn "Thanh toán ngay", bạn đồng ý với Điều khoản
                    & Điều kiện của ÉLÉGANCE.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </main>
      }
    </>
  );
};
export default Payment;
