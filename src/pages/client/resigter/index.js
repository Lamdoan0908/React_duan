function Register() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-5 md:px-16 bg-surface py-12">
      <div className="w-full max-w-md">
        {/* Mobile Logo */}
        <div className="lg:hidden text-center mb-8">
          <span className="text-3xl tracking-tighter text-primary">Olu</span>
        </div>

        {/* Heading */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-4xl text-on-surface mb-2">Đăng ký tài khoản</h2>

          <p className="text-on-surface-variant italic">
            Nhập thông tin chi tiết để trở thành thành viên của Olu
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm uppercase mb-2 tracking-widest text-on-surface-variant">
              Họ tên
            </label>

            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 outline-none focus:border-primary"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm uppercase mb-2 tracking-widest text-on-surface-variant">
                Email
              </label>

              <input
                type="email"
                placeholder="example@olu.vn"
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm uppercase mb-2 tracking-widest text-on-surface-variant">
                Số điện thoại
              </label>

              <input
                type="tel"
                placeholder="090 123 4567"
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm uppercase mb-2 tracking-widest text-on-surface-variant">
              Mật khẩu
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 outline-none focus:border-primary"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm uppercase mb-2 tracking-widest text-on-surface-variant">
              Xác nhận mật khẩu
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 outline-none focus:border-primary"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input type="checkbox" />

            <p className="text-sm text-on-surface-variant">
              Tôi đồng ý với{" "}
              <a href="/terms" className="text-primary hover:underline">
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Chính sách bảo mật
              </a>
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg uppercase tracking-[0.2em] hover:opacity-90 transition"
          >
            Đăng ký
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-8">
          <div className="border-t border-outline-variant/30 w-full"></div>

          <span className="absolute px-4 bg-surface text-xs uppercase tracking-widest text-on-surface-variant">
            Hoặc đăng ký bằng
          </span>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <button className="flex-1 border border-outline-variant/40 py-3 rounded-lg hover:bg-gray-100 transition">
            GOOGLE
          </button>

          <button className="flex-1 border border-outline-variant/40 py-3 rounded-lg hover:bg-gray-100 transition">
            FACEBOOK
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-on-surface-variant">
            Bạn đã có tài khoản?
            <a href="/login" className="text-primary hover:underline ml-1">
              Đăng nhập ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
