import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      remember,
    });

    // call api login here
  };

  return (
    <section className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-5 md:p-16 bg-surface min-h-screen">
      <div className="w-full max-w-md space-y-10">
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl text-primary mb-2">Chào mừng bạn</h1>

          <p className="text-on-surface-variant italic">
            Đăng nhập để tiếp tục hành trình khám phá phong cách.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm tracking-widest text-on-surface-variant">
                EMAIL
              </label>

              <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm tracking-widest text-on-surface-variant">
                MẬT KHẨU
              </label>

              <input
                type="password"
                placeholder="Mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary outline-none"
                required
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />

              <span className="text-sm text-on-surface-variant">GHI NHỚ</span>
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              QUÊN MẬT KHẨU?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg hover:opacity-90 transition duration-300"
          >
            ĐĂNG NHẬP
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-outline-variant"></div>

          <span className="mx-4 text-sm text-on-surface-variant">HOẶC</span>

          <div className="flex-grow border-t border-outline-variant"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg hover:bg-gray-100 transition"
          >
            GOOGLE
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg hover:bg-gray-100 transition"
          >
            FACEBOOK
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-on-surface-variant">
          Chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="text-primary font-semibold hover:underline"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
