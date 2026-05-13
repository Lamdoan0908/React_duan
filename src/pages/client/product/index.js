import { useState } from "react";

const products = {
  black: {
    name: "Áo Thun Essential",
    price: "850.000₫",
    color: "Đen",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  beige: {
    name: "Áo Thun Essential",
    price: "850.000₫",
    color: "Be",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

const Product = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState(products.black.images[0]);

  const product = products[selectedColor];

  const changeColor = (color) => {
    setSelectedColor(color);
    setSelectedImage(products[color].images[0]);
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* LEFT */}
        <div>
          {/* MAIN IMAGE */}
          <div className="w-full bg-[#f5f5f5] overflow-hidden">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-[700px] object-cover"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`min-w-[90px] border p-1 transition ${
                  selectedImage === img
                    ? "border-black border-2"
                    : "border-gray-300"
                }`}
              >
                <img src={img} alt="" className="w-20 h-24 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:sticky lg:top-24 h-fit">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
            New Arrival
          </p>

          <h1 className="text-4xl font-serif mb-4">{product.name}</h1>

          <p className="text-3xl font-medium mb-8">{product.price}</p>

          <p className="text-gray-600 leading-relaxed mb-10">
            Thiết kế tối giản với chất liệu cotton premium mềm mại, form regular
            fit phù hợp mặc hàng ngày.
          </p>

          {/* COLOR */}
          <div className="mb-10">
            <p className="uppercase tracking-[0.2em] text-sm mb-4">
              Màu sắc: {product.color}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => changeColor("black")}
                className={`w-9 h-9 rounded-full bg-black ${
                  selectedColor === "black"
                    ? "ring-2 ring-black ring-offset-2"
                    : ""
                }`}
              />

              <button
                onClick={() => changeColor("beige")}
                className={`w-9 h-9 rounded-full bg-[#C19A6B] ${
                  selectedColor === "beige"
                    ? "ring-2 ring-black ring-offset-2"
                    : ""
                }`}
              />
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-10">
            <div className="flex justify-between mb-4">
              <p className="uppercase tracking-[0.2em] text-sm">Kích thước</p>

              <button className="text-sm underline">Size Guide</button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <button className="border py-4 hover:border-black">S</button>

              <button className="border py-4 bg-black text-white">M</button>

              <button className="border py-4 hover:border-black">L</button>

              <button className="border py-4 hover:border-black">XL</button>
            </div>
          </div>

          {/* BUTTON */}
          <div className="space-y-4">
            <button className="w-full bg-black text-white py-5 uppercase tracking-[0.2em] border border-black hover:bg-white hover:text-black transition">
              Thêm vào giỏ hàng
            </button>

            <button className="w-full border py-5 uppercase tracking-[0.2em] hover:border-black transition">
              Yêu thích
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
