import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Hiện tại còn những khu vực nào đang cần mở đại lý?",
    answer:
      "Chúng tôi đang mở rộng hệ thống đại lý trên toàn quốc. Trong quá trình đăng ký, chúng tôi sẽ trao đổi với bạn về các khu vực còn trống và tư vấn lựa chọn khu vực phù hợp nhất với hoạt động kinh doanh của bạn.Ngoài ra, chúng tôi còn có chính sách độc quyền khu vực cho đối tác tiên phong và đáp ứng đủ tiêu chí cụ thể.",
  },
  {
    question: "Làm thế nào để đăng ký đại lý?",
    answer:
      "Quy trình đăng ký đại lý tại SAM Global Battery rất đơn giản và nhanh chóng.Bạn chỉ cần liên hệ với chúng tôi qua hotline, email hoặc điền thông tin vào biểu mẫu đăng ký trên website.Sau khi tiếp nhận thông tin, đội ngũ tư vấn sẽ liên hệ để tìm hiểu nhu cầu kinh doanh, hướng dẫn chuẩn bị hồ sơ cần thiết và tư vấn khu vực phân phối phù hợp.Khi hoàn tất đánh giá và ký kết thỏa thuận hợp tác, bạn sẽ chính thức trở thành đại lý ủy quyền của SAM Global Battery và nhận được đầy đủ quyền lợi, hỗ trợ từ chúng tôi..",
  },
  {
    question: "SAM hỗ trợ đào tạo và hỗ trợ đại lý như thế nào?",
    answer:
      "Chúng tôi cung cấp chương trình đào tạo toàn diện bao gồm kiến thức sản phẩm, thông số kỹ thuật, cách xử lý kỹ thuật và kỹ năng bán hàng. Gói hỗ trợ dành cho đại lý bao gồm tài liệu marketing, cập nhật sản phẩm định kỳ, hỗ trợ kỹ thuật,hỗ trợ vận chuyển, xử lý bảo hành để đồng hành và hỗ trợ hoạt động kinh doanh của bạn.",
  },
  {
    question: "Chính sách bảo hành bình ắc quy tại SAM ra sao?",
    answer:
      "Các sản phẩm ắc quy được SAM áp dụng chính sách bảo hành cạnh tranh, tùy theo từng dòng sản phẩm và các ứng dụng đặc biệt sẽ có chính sách bảo hành riêng. Khi trở thành đại lý, bạn sẽ được đào tạo đầy đủ về quy trình bảo hành và được hỗ trợ qua hệ thống quản lý đại lý trực tuyến để đảm bảo thời gian bảo hành luôn ngắn nhất",
  },
  {
    question: "Thời gian xét duyệt hồ sơ đăng ký đại lý mất bao lâu?",
    answer:
      "Sau khi nhận được thông tin và yêu cầu từ quý khách, chúng tôi sẽ tiến hành làm việc sớm nhất có thể. Quy trình bao gồm: xem xét hồ sơ, đánh giá khu vực thị trường, thẩm định năng lực kinh doanh và ký kết hợp đồng đại lý. Sau khi được chấp thuận, chúng tôi sẽ hỗ trợ bạn tham gia đào tạo ban đầu và chuẩn bị hàng hóa nhập kho.",
  },
  {
    question: "SAM Global Battery có giao hàng tận nơi cho đại lý không?",
    answer:
      "Có. Sam Global Battery hỗ trợ giao hàng tận nơi cho đại lý trên toàn quốc.Tùy thuộc vào vị trí địa lý và số lượng đơn hàng, chúng tôi sẽ tư vấn phương thức vận chuyển phù hợp nhất nhằm đảm bảo sản phẩm được giao nhanh chóng, an toàn và tối ưu chi phí cho đại lý.Đối với khu vực TP.HCM và các tỉnh lân cận, chúng tôi có chính sách giao hàng linh hoạt, hỗ trợ miễn phí hoặc ưu đãi cước vận chuyển theo đơn hàng.Đối với các khu vực xa hơn, chúng tôi phối hợp với các đối tác vận chuyển uy tín để đảm bảo hàng hóa được giao tận tay đại lý trong thời gian sớm nhất.Đội ngũ chăm sóc khách hàng của SAM Global Battery luôn sẵn sàng hỗ trợ theo dõi đơn hàng và xử lý kịp thời mọi yêu cầu trong quá trình giao nhận.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Nhận câu trả lời cho các câu hỏi thường gặp khi đăng ký làm đại lý
            ắc quy của SAM GLOBAL BATTERY
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${activeIndex === index ? "faq-active" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <button
                  className="w-full px-6 py-4 text-left font-heading font-bold flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="text-primary transition-transform" />
                  ) : (
                    <ChevronDown className="text-primary transition-transform" />
                  )}
                </button>
                <div
                  id={`faq-content-${index}`}
                  className="faq-content px-6 pb-4"
                  style={{
                    maxHeight: activeIndex === index ? 500 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <p className="text-neutral-700 mb-4">
              Bạn chưa thấy câu hỏi của mình ở đây?
            </p>
            <a
              href="#contact"
              className="text-primary font-medium hover:text-primary-dark transition inline-flex items-center"
            >
              Hãy liên hệ để chúng tôi được hỗ trợ bạn!
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
