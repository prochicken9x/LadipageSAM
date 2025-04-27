import React from "react";
import {
  TrendingUp,
  Medal,
  Wrench,
  Megaphone,
  Truck,
  Headphones,
  BadgeCheck,
  LifeBuoy,
  Handshake,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Trophy className="text-white text-xl" />,
    title: "Sản phẩm chất lượng cao",
    description:
      "Sản phẩm ắc quy Colossus và Rocket đến từ Tập đoàn Sebang Global Battery – số 1 tại Hàn Quốc, xuất khẩu đi hơn 130 quốc gia. Tất cả sản phẩm đều được sản xuất và nhập khẩu trực tiếp từ Hàn Quốc, đạt tiêu chuẩn quốc tế và trải qua quy trình kiểm soát chất lượng nghiêm ngặt.",
  },
  {
    icon: <TrendingUp className="text-white text-xl" />,
    title: "Lợi nhuận hấp dẫn, chiết khấu linh hoạt",
    description:
      "Được hưởng nhiều chính sách chiết khấu linh hoạt, phù hợp với đa dạng hình thức kinh doanh và từng giai đoạn phát triển của thị trường. Sam Global Battery luôn đảm bảo mức lợi nhuận hấp dẫn để cùng đối tác phát triển bền vững.",
  },
  {
    icon: <LifeBuoy className="text-white text-xl" />,
    title: "Hỗ trợ toàn diện",
    description:
      "Được hỗ trợ marketing chuyên nghiệp với đầy đủ POSM, chương trình khuyến mại, quảng cáo truyền thông. Song song đó, Sam Global Battery còn tư vấn, đào tạo kỹ thuật, hỗ trợ sau bán hàng và chính sách bảo hành tận tâm dành riêng cho từng đại lý.",
  },
  {
    icon: <Handshake className="text-white text-xl" />,
    title: "Quy trình hợp tác đơn giản",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Thống nhất điều khoản</li>
        <li>Ký kết hợp đồng</li>
        <li>Bắt tay triển khai</li>
        <li>Đồng hành – hỗ trợ toàn diện</li>
      </ul>
    ),
  },
  {
    icon: <Truck className="text-white text-xl" />,
    title: "Chuỗi cung ứng ổn định",
    description:
      "Với lợi thế làm việc trực tiếp với Sebang Battery Vina – công ty thuộc Tập đoàn Sebang tại Việt Nam, Sam Global Battery luôn chủ động nguồn hàng tại nhiều kho khu vực, thuận tiện giao nhận. Cam kết giao hàng đúng hạn, đủ số lượng và linh hoạt phương thức vận chuyển.",
  },
  {
    icon: <ShieldCheck className="text-white text-xl" />,
    title: "Chính sách độc quyền khu vực",
    description:
      "Sam Global Battery triển khai chính sách độc quyền khu vực cho các đối tác tiên phong đáp ứng tiêu chí hợp tác. Giúp đại lý kiểm soát thị trường, tránh bão hòa và đảm bảo biên lợi nhuận cao, phát triển kinh doanh ổn định lâu dài.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Vì Sao Nên Trở Thành Đại Lý Cùng Sam Global Battery!
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Sam Global Battery đồng hành cùng bạn trên hành trình kinh doanh ắc quy – với sản phẩm chất lượng, hỗ trợ tận tâm và chính sách ưu đãi vượt trội.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-neutral-100 p-8 rounded-lg border-t-4 border-primary shadow-blue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-primary text-white p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Sẵn sàng cùng Sam Global Battery chinh phục thành công trong
                kinh doanh?
              </h3>
              <p className="text-neutral-100">
                Trở thành đại lý chính thức ngay hôm nay và mang những sản phẩm
                ắc quy chất lượng quốc tế đến với khách hàng của bạn.
              </p>
            </div>
            <div className="text-center md:text-right">
              <a
                href="#apply"
                className="inline-block bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105"
              >
                Gia nhập ngay hôm nay
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
