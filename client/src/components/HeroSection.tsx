import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* MOBILE HERO SECTION */}
      <section
        className="block lg:hidden bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('https://i.imgur.com/2mXRRYp.png')", // thay link ảnh mobile
        }}
      >
        <div className="container mx-auto px-4 py-10">
          <div className="bg-accent text-white font-bold py-2 px-4 rounded-md text-sm inline-block mb-4 shadow-md uppercase tracking-wide text-center">
            CƠ HỘI HỢP TÁC ĐẠI LÝ
          </div>

          <h1 className="text-xl font-heading font-bold leading-snug mb-4">
            <span className="block">Đồng Hành Cùng</span>
            <span className="block">SAM GLOBAL BATTERY</span>
            <br />
            Trở Thành Đại Lý Chính Thức Ngay Hôm Nay
          </h1>

          <p className="text-base text-white mb-6 max-w-full">
            Thương hiệu ắc quy hàng đầu Hàn Quốc. Sản phẩm bình ắc quy khởi động
            <span className="font-semibold text-white"> Colossus </span>
            cho ô tô, tàu thuyền, bình ắc quy
            <span className="font-semibold text-white"> Rocket </span>
            cho xe nâng, xe golf và thiết bị lưu điện.
            <br />
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105"
            >
              Đăng Ký Làm Đại Lý
            </a>
            <a
              href="#benefits"
              className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105"
            >
              Xem Quyền Lợi
            </a>
          </div>
        </div>
      </section>

      {/* DESKTOP HERO SECTION */}
      <section
        className="hidden lg:block bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('https://i.imgur.com/5bmpY9v.png')", // thay link ảnh desktop
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="bg-accent text-white font-bold py-3 px-6 rounded-md text-lg inline-block mb-6 shadow-md uppercase tracking-wide text-center">
              CƠ HỘI HỢP TÁC ĐẠI LÝ
            </div>

            <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-snug mb-6">
              <span className="block lg:inline lg:whitespace-nowrap">
                Đồng Hành Cùng SAM GLOBAL BATTERY
              </span>{" "}
              <span className="block lg:inline">
                Trở Thành Đại Lý Chính Thức Ngay Hôm Nay
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white max-w-full sm:max-w-xl lg:max-w-2xl mb-8">
              Thương hiệu ắc quy hàng đầu Hàn Quốc. Sản phẩm bình ắc quy khởi
              động
              <span className="font-semibold text-white"> Colossus </span>
              cho ô tô, tàu thuyền, bình ắc quy
              <span className="font-semibold text-white"> Rocket </span>
              cho xe nâng, xe golf và thiết bị lưu điện.
              <br />
              <span className="font-semibold text-white">
                Hợp tác đại lý – cùng phát triển và thành công.
              </span>
            </p>

            <div className="flex gap-4">
              <a
                href="#apply"
                className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105"
              >
                Đăng Ký Làm Đại Lý
              </a>
              <a
                href="#benefits"
                className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md text-center transition-all transform hover:scale-105"
              >
                Xem Quyền Lợi
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
