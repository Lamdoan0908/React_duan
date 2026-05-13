function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h2 className="text-3xl tracking-widest mb-4">ÉLÉGANCE</h2>

          <p className="text-gray-400 max-w-sm">
            Kiến tạo phong cách sang trọng và thanh lịch.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Pinterest</a>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">
        © 2024 ÉLÉGANCE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
