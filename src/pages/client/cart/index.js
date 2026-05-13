const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Váy Lụa Maison Ivory",
      color: "Ivory",
      size: "M",
      price: "4.200.000₫",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBptIOhQAoUwslAo1tH3Ffbe8H_HWq6tZt4SejirzzbVNaVqxKdmWGlgigNO46eNZUNPZRRFfJhbvwVU2tlG9SZQLYdmTFL3wwSigbJQfW0j1TN3nxZ13gtPg8KGiprw1jlYy77I2RDm8AsOQIY1QGNc7tyvJyPpqCDKN6ccl9OvtYo3ERe9cLCAZ8CTkf_wOeNsdx77h1R2JWIbmeX3dsF2pq41KBESZh8QQ6PNgz6od4eUrQSJXP_e6xUHVE9YGSrG1N_EcvXBpL3",
    },
    {
      id: 2,
      name: "Túi Cầm Tay Structured Black",
      color: "Black",
      size: "O/S",
      price: "8.500.000₫",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ3zOGzrKWG9KdI1ysB43T2Tw7tcRxmjNHPdxAu7rRFo3sp_373X9EIM-sKsoIrIV4umM1RiDK_WfZJf5BnAV0yiytegtQErRuaHaoZGHzYAoi-ePwu44-mtKKTaJAtdQlvzAIed_EQP7z0b6Xl9pLrC0bWJnCDkQZ7CSxgLQUsZZnv9k-3VDow9qBldaZL9uWrCtWU-DlVlk_cq_LR8I3KnHrqwuNZP0BJLRWXWpTEkZPUNawfa7JtaiaJr8aT2H_i4iFOF_ogflI",
    },
  ];

  const suggestions = [
    {
      name: "Áo Choàng Len Minimal",
      price: "6.800.000₫",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDClD5PHp5U-THtSbgF1pqFJyk3_2M0rGfW-xmjTKUKQsCvqI8PKvZc4gTSsuIojRcgR5qys_prqEiPr7114dhWpPe765J-YkgalBDgYCfWXcd0pp_p8AsvvAAALuKBVyW6k7PO8TnhRmhp77THgNIw7Nt8ZR0kaXPw6vRfQJD3rUXh--cabotJocWw003V5xPgmcs_Xit2uPl5R2xfua9UFvEpkrlgs-zqkT01plCPoLDE12vwYJoxz6eAYJmjC9S59gfd4PK_UvAv",
    },
    {
      name: "Sơ Mi Poplin White",
      price: "2.400.000₫",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNzpCymMASbhCgQIP67DmTIcOkA72tg2qiEvpAmydDiTaUfAc9dcV4qKd2T_9ModenibOqa34SU2NSAqMXjfsEIBuiwbvURoYu9XmrTNQnCSsac2zleS25Odb-oc1ichMMbA6PgJmnVITYDOPAlyjadu2n9VM1YecrHwc3OqAicKqzKQtKN5DnwQbhnERLJ4810LmVLOymGntZ2oHhaBEfwbpDMLD3fqrgTFWz5Cl4mpQecfRJpDQd0UHzHjKs79AOYO40ESSuxVa8",
    },
    {
      name: "Vòng Cổ Arch Geometric",
      price: "1.950.000₫",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuANk9-Ut63OsRAd4iAvXAZ_wro3hHTMV0ibYNLu9W04Bwdto5sVj1zhsdwjMcKg7-g35HAhh7nnHtCeZQSkszHQOEzB-PGKBDklcrS0lQKBfJN1q_RFbtDNQ1morhRAkEPNelGPKEzgPUswozVtq5N6toVrVhxmgHzOEV3j5KZQuF4PMoyNtI0SDGMBibTrU11W8xoofXjLM16_va_XTSIaWBBjIXUyt5T71aAYVoqzHJ0UVlBv-rfzmjO2x7_5EqfR9Qfg1czYA8xW",
    },
    {
      name: "Giày Loafer Da Polished",
      price: "5.200.000₫",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCebvaFxgl4vdc6E6MAMcjzwqmXuCgk5pwFU29D84vPLQbw8byWQk5l9E1fDRSeIY1vXtIb9HM2yeivlkY-3bnQbbKxvOq53MT4xexvcS11x3B-2l_JqNLn-t6T6cdoCfkn0peaaVVawIaOkdmY9V9FM1-EJuBC4T6BRI2dPo9ZItx9Anh04P2uYwodTWwcPLv2YnOBAUppisxWNGo_j9n6-OYz9N6Gk41eahCj5GKZ4Cintg7hhORYXnMtBplFMjXwbrb6QpJqI_LT",
    },
  ];

  return (
    <main className="bg-[#f9f9f9] text-[#1b1b1b] pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Giỏ hàng của bạn
          </h1>

          <p className="text-gray-500">
            {cartItems.length} sản phẩm trong túi của bạn
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-8 space-y-10">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-8 border-b border-gray-200 pb-10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-52 aspect-[3/4] object-cover"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between gap-6">
                    <div>
                      <h2 className="text-2xl font-serif mb-3">{item.name}</h2>

                      <p className="text-gray-500 mb-1">
                        Màu sắc: {item.color}
                      </p>

                      <p className="text-gray-500">Kích cỡ: {item.size}</p>
                    </div>

                    <p className="text-xl font-medium">{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center border border-gray-300">
                      <button className="px-4 py-2 hover:bg-gray-100">−</button>

                      <span className="px-6">1</span>

                      <button className="px-4 py-2 hover:bg-gray-100">+</button>
                    </div>

                    <button className="uppercase tracking-widest text-sm text-gray-500 hover:text-black transition">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button className="uppercase tracking-[0.2em] text-sm hover:translate-x-2 transition">
              ← Tiếp tục mua sắm
            </button>
          </div>

          {/* Right */}
          <aside className="lg:col-span-4">
            <div className="bg-[#f3f3f3] p-8 sticky top-28">
              <h2 className="text-3xl font-serif mb-8">Tóm tắt đơn hàng</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tạm tính</span>
                  <span>12.700.000₫</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Phí vận chuyển</span>
                  <span className="italic text-gray-500">Tính ở bước sau</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="uppercase tracking-widest text-sm mb-3">
                  Mã giảm giá
                </p>

                <div className="flex border-b border-black">
                  <input
                    type="text"
                    placeholder="Nhập mã của bạn"
                    className="flex-1 bg-transparent outline-none py-2"
                  />

                  <button className="uppercase text-sm tracking-widest">
                    Áp dụng
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif">Tổng cộng</span>

                  <span className="text-3xl font-serif">12.700.000₫</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] hover:bg-gray-800 transition">
                Tiến hành thanh toán
              </button>

              <div className="mt-8 space-y-4 text-sm uppercase tracking-wider text-gray-500">
                <p>✓ Thanh toán bảo mật 100%</p>
                <p>✓ Giao hàng miễn phí toàn quốc</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Suggestions */}
        <section className="mt-32">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif">Có thể bạn sẽ thích</h2>

            <div className="w-20 h-px bg-black mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {suggestions.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[3/4] w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <h3 className="font-medium mb-1">{item.name}</h3>

                <p className="text-gray-500">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cart;
