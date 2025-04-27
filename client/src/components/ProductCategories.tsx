import React from "react";
import { Factory, ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const productCategories = [
  {
    title: "Ắc quy khởi động",
    description:
      "Ắc quy khởi động thương hiệu Colossus được sản xuất và nhập khẩu trực tiếp từ Hàn Quốc, theo tiêu chuẩn quốc tế. Ắc quy Colossus là bình kín, miễn bảo dưỡng. Cho hiệu suất cao, độ bền và tuổi thọ vượt trội, hạn chế tự xả điện, vận hành tốt trong mọi điều kiện thời tiết.",
    tags: [
      "Ô tô gia đình",
      "Ô tô du lịch",
      "Ô tô tải",
      "Ô tô đầu kéo",
      "Tàu,thuyền",
    ],
    image: "https://i.imgur.com/AynxDpv.png",
  },
  {
    title: "Ắc quy xe nâng",
    description:
      "Được sản xuất với công nghệ vượt trội của Sebang Global Battery, cung cấp nguồn điện mạnh mẽ cho bất kỳ xe nâng điện nào.Dễ bảo trì, hiệu suất mạnh mẽ với chu kỳ nâng cao.",
    tags: ["Xe nâng điện", "Xe nâng Pallet", "Thiết bị công nghiệp"],
    image: "https://i.imgur.com/AoLwQ5Y.png",
  },
  {
    title: "Ắc quy xe golf",
    description:
      "Dòng sản phẩm Longest được sản xuất dựa trên kỹ thuật ắc quy chì-axit tiên tiến của Sebang, kết tinh từ hơn 60 năm nghiên cứu và phát triển. Đây là dòng ắc quy chuyên dụng cho các thiết bị sử dụng ắc quy xả sâu bao gồm: xe golf, xe điện và các phương tiện vận chuyển không người lái..",
    tags: [
      "Xe golf",
      "Xe điện du lịch",
      "Thiết bị vận chuyển không người lái (AV)",
      "Xe rác điện",
      "Xe lăn điện",
    ],
    image: "https://i.imgur.com/BUssyQK.png",
  },
  {
    title: "Thiết bị lưu điện",
    description:
      "Dòng ắc quy được sản xuất theo công nghệ hiện đại, tiêu chuẩn quốc tế.Hiệu suất ổn định, tuổi thọ rất cao, hạn chế tự phóng điện, đảm bảo an toàn",
    tags: [
      "Hệ thống UPS",
      "Thiết bị lưu điện",
      "Năng lượng tái tạo(điện mặt trời, điện gió,..)",
      "Thiết bị viễn thông",
      "Thiết bị y tế",
      "Thiết bị an ninh",
    ],
    image: "https://i.imgur.com/axtFQXZ.png",
  },
];

const ProductCategories: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Các dòng sản phẩm tiêu biểu
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Sam Global Battery chuyên phân phối các dòng ắc quy chất lượng cao,
            là sản phẩm của tập đoàn SEBANG - Số 1 tại Hàn Quốc. Ắc quy Colossus
            cho ô tô, ắc quy Rocket cho xe nâng, xe golf và thiết bị lưu điện
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-blue overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              {/* Ảnh nền + Title */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Phần mô tả, tag, nút tải catalogue */}
              <div className="p-4">
                <p className="text-lg font-bold text-green-700 mb-2">
                  {category.title}
                </p>
                <p className="text-green-700 mb-4">{category.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-neutral-100 text-green-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Nút tải catalogue */}
                <a
                  href="#"
                  className="text-primary font-medium flex items-center hover:text-primary-dark transition"
                >
                  Tải Catalogue
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <a
            href="#"
            className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition"
          >
            Download Full Product Catalog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
