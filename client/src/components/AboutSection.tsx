import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "70+", label: "Năm kinh nghiệm" },
  { value: "130+", label: "Quốc gia nhập khẩu" },
  
  { value: "20Triệu+", label: "Ắc quy được sản xuất mỗi năm" },
  { value: "500+", label: "Đối tác trên thế giới" },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1544965894-b1c159cfc283?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Manufacturing facility",
  },
  {
    src: "https://images.unsplash.com/photo-1589792168516-60c58d5d5412?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Battery production",
  },
  {
    src: "https://images.unsplash.com/photo-1581092336384-edd949cc3bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Quality testing",
  },
  {
    src: "https://images.unsplash.com/photo-1596342332406-8618b00c2035?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Battery technology",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <span className="text-primary font-medium">VỀ CHÚNG TÔI</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 mt-2">
              SEBANG GLOBAL BATTERY & SAM GLOBAL BATTERY
            </h2>
            <p className="text-neutral-700 mb-4">
              SEBANG GLOBAL BATTERY - Thành lập từ năm 1952, Sebang Global
              Battery là nhà sản xuất ắc quy hàng đầu Hàn Quốc và nổi tiếng trên
              thế giới với thương hiệu Colossus và Rocket.Sebang cung cấp sản phẩm cho hơn 130 quốc
              gia, với năng lực sản xuất hơn 20 triệu ắc quy mỗi năm. Là đối tác
              OEM chiến lược của các thương hiệu ô tô lớn như: Hyundai, Kia, BMW
              và Volkswagen, Sebang đã khẳng định đẳng cấp qua chất lượng vượt
              trội và độ tin cậy bền bỉ. Với hơn 70 năm kinh
              nghiệm, Sebang không ngừng đổi mới để mang đến những sản phẩm ắc
              quy chất lượng cao, đáp ứng nhu cầu các ngành công nghiệp, giao
              thông và năng lượng. 
            </p>
            <p className="text-neutral-700 mb-6">
              SAM GLOBAL BATTERY – Đối tác phân phối chính thức của SEBANG
              BATTERY VINA, chuyên cung cấp các sản phẩm ắc quy chất lượng từ
              Sebang Global Battery. Chúng tôi là đơn vị phân phối sỉ hàng đầu
              tại Việt Nam với các sản phẩm ắc quy Colossus và Rocket, phục vụ
              nhu cầu của đại lý, garage và các đơn vị vận tải.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <div className="text-primary font-heading font-bold text-3xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-neutral-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
