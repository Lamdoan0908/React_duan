const products = [
  {
    id: 1,
    title: "Đầm Silk Midnight",
    price: "4,250,000đ",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    id: 2,
    title: "Blazer Ivory Sculpt",
    price: "6,800,000đ",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    id: 3,
    title: "Giày Cao Gót",
    price: "3,900,000đ",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "Túi Monolith",
    price: "8,500,000đ",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
];

function homePage() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="mb-16">
        <p className="uppercase text-sm tracking-widest mb-3">
          Latest Collections
        </p>

        <h2 className="text-4xl">Sản phẩm mới</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="group">
            <div className="overflow-hidden mb-4 aspect-[3/4]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="font-semibold mb-1">{item.title}</h3>

            <p className="text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default homePage;
