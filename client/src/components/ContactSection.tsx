import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Tiêu đề */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-heading font-bold text-center"
        >
          LIÊN HỆ NGAY VỚI CHÚNG TÔI
        </motion.h2>

        {/* Mô tả */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-neutral-700 text-base md:text-lg text-center max-w-2xl mx-auto"
        >
          Có câu hỏi về sản phẩm hoặc hợp tác đại lý? Đội ngũ của SAM luôn sẵn
          sàng hỗ trợ bạn.
        </motion.p>

        {/* Nội dung */}
        <div className="flex flex-col md:flex-row md:justify-center md:gap-24">
          {/* Cột trái */}
          <div className="flex flex-col gap-10 w-full md:w-1/2 md:items-end">
            {/* Hotline */}
            <div className="flex items-center gap-4 w-full max-w-sm">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-lg mb-1">Hotline</h3>
                <a href="tel:19005308" className="text-primary font-semibold">
                  1900 5308
                </a>
                <p className="text-neutral-600 text-sm">
                  Thứ 2 - Thứ 6, 8am-5pm
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 w-full max-w-sm">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-lg mb-1">Email</h3>
                <a
                  href="mailto:kinhdoanh@samglobalbattery.com"
                  className="text-primary font-semibold"
                >
                  kinhdoanh@samglobalbattery.com
                </a>
                <p className="text-neutral-600 text-sm">
                  Phản hồi nhanh trong giờ làm việc
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải */}
          <div className="flex flex-col gap-10 w-full md:w-1/2 md:items-start mt-10 md:mt-0">
            {/* Địa chỉ */}
            <div className="flex items-center gap-4 w-full max-w-sm">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-lg mb-1">Địa chỉ</h3>
                <p className="text-neutral-700">
                  Số 3 Đường số 1, KCN Sóng Thần,
                  <br />
                  P. Dĩ An, TP. Dĩ An, Bình Dương
                </p>
              </div>
            </div>

            {/* Kết nối */}
            <div className="flex items-center gap-4 w-full max-w-sm">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Share2 className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-lg mb-1">
                  Kết nối với chúng tôi
                </h3>
                <div className="flex space-x-4 pt-2">
                  <a
                    href="#"
                    className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/samglobalbattery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition hover:scale-105"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition hover:scale-105"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition hover:scale-105"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
