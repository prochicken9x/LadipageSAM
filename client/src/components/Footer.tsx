import React from "react";
import { Send, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleComingSoon = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Nội dung đang được cập nhật. Vui lòng quay lại sau!");
  };

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Cột 1: Logo + giới thiệu */}
          <div>
            <div className="flex items-center mb-4">
              <a href="/" className="flex justify-center items-center w-full">
                <img
                  src="https://i.imgur.com/Fla56Yn.png"
                  alt="Logo SAM GLOBAL BATTERY"
                  className="h-14 object-contain"
                />
              </a>
            </div>
            <p className="text-green-700 mb-4">
              Bình ắc quy Hàn Quốc cao cấp, tối ưu cho ô tô, công nghiệp và hệ
              thống điện dự phòng.
            </p>
            <p className="text-green-700 text-sm">
              Bản quyền thuộc về CÔNG TY CỔ PHẦN SAM GLOBAL BATTERY
            </p>
          </div>

          {/* Cột 2: Truy cập nhanh */}
          <div>
            <h4 className="text-green-700 font-heading font-bold text-lg mb-4">
              Truy cập nhanh
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-green-700 hover:text-white transition"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-green-700 hover:text-white transition"
                >
                  Quyền lợi đại lý
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-700 hover:text-white transition"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-green-700 hover:text-white transition"
                >
                  Hợp tác ngay
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
            <h4 className="text-green-700 font-heading font-bold text-lg mb-4">
              Hỗ trợ
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={handleComingSoon}
                  className="text-green-700 hover:text-white transition"
                >
                  Hỗ trợ kỹ thuật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleComingSoon}
                  className="text-green-700 hover:text-white transition"
                >
                  Thông tin bảo hành
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleComingSoon}
                  className="text-green-700 hover:text-white transition"
                >
                  Thông tin đại lý
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleComingSoon}
                  className="text-green-700 hover:text-white transition"
                >
                  Tìm ắc quy
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-green-700 hover:text-white transition"
                >
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
          <div>
            <h4 className="text-green-700 font-heading font-bold text-lg mb-4">
              Đăng ký
            </h4>
            <p className="text-green-700 mb-4">
              Nhận thông tin về những chính sách đại lý mới nhất từ công ty
              chúng tôi
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-neutral-900 border-2 border-orange-500"
                  disabled
                />
                <button
                  type="button"
                  className="bg-accent hover:bg-opacity-90 px-4 rounded-r-md transition cursor-not-allowed"
                  disabled
                >
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-6 text-center text-neutral-400 text-sm">
          <div className="flex flex-wrap justify-center space-x-4 mb-2">
            <a
              href="#"
              onClick={handleComingSoon}
              className="text-green-700 hover:text-white transition"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              onClick={handleComingSoon}
              className="text-green-700 hover:text-white transition"
            >
              Điều khoản dịch vụ
            </a>
            <a
              href="#"
              onClick={handleComingSoon}
              className="text-green-700 hover:text-white transition"
            >
              Hợp đồng đại lý
            </a>
            <a
              href="#"
              onClick={handleComingSoon}
              className="text-green-700 hover:text-white transition"
            >
              Bản đồ trang web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
