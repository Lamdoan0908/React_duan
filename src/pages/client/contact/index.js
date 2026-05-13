export default function ContactSection() {
  return (
    <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:gap-32">
        {/* LEFT - FORM */}
        <div className="space-y-10">
          <div>
            <span className="font-label-uppercase text-on-surface-variant block mb-4">
              GỬI YÊU CẦU
            </span>
            <h2 className="font-headline-md text-primary">
              Chúng tôi luôn sẵn lòng lắng nghe
            </h2>
          </div>

          <form className="space-y-8">
            <Input placeholder="Họ và Tên" />
            <Input placeholder="Địa chỉ Email" type="email" />

            <Select />

            <Textarea placeholder="Lời nhắn của bạn" />

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary font-label-uppercase border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              GỬI TIN NHẮN
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="space-y-14 pt-10 md:pt-0">
          <div>
            <span className="font-label-uppercase text-on-surface-variant block mb-4">
              THÔNG TIN
            </span>
            <h3 className="font-headline-sm text-primary mb-2">
              ÉLÉGANCE HQ Vietnam
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Tầng 45, Bitexco Financial Tower <br />2 Hải Triều, Quận 1, TP.HCM
            </p>
          </div>

          <div className="space-y-4">
            <ContactItem icon="call" text="+84 (0) 28 3823 4567" />
            <ContactItem icon="mail" text="concierge@elegance.com.vn" />
          </div>

          <div className="p-6 border border-outline-variant bg-surface-container-low">
            <h4 className="font-headline-sm mb-4">Giờ làm việc</h4>
            <div className="space-y-2 text-on-surface-variant">
              <Row label="Thứ Hai - Thứ Sáu" value="09:00 - 18:00" />
              <Row label="Thứ Bảy" value="10:00 - 16:00" />
              <Row label="Chủ Nhật" value="Đóng cửa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ INPUT COMPONENTS ------------------ */

function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full py-4 bg-transparent border-b border-outline-variant focus:border-primary outline-none transition"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      className="w-full py-4 bg-transparent border-b border-outline-variant focus:border-primary outline-none resize-none transition"
    />
  );
}

function Select() {
  return (
    <select className="w-full py-4 bg-transparent border-b border-outline-variant focus:border-primary outline-none text-on-surface-variant">
      <option value="">Chủ đề quan tâm</option>
      <option value="support">Hỗ trợ khách hàng</option>
      <option value="press">Báo chí & Truyền thông</option>
      <option value="wholesale">Hợp tác bán sỉ</option>
    </select>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-on-surface-variant">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
