import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query"; // <-- cần import thêm dòng này
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";

const formSchema = insertContactMessageSchema;
type FormValues = z.infer<typeof formSchema>;

const ApplicationForm: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "dealer-inquiry", // Default luôn chọn Dealer Inquiry
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Đã gửi đăng ký",
        description: "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ bạn sớm nhất.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Gửi thất bại",
        description: error instanceof Error ? error.message : "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="apply" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Đăng ký làm đại lý
            </h2>
            <p className="text-neutral-700 max-w-2xl mx-auto">
              Điền nhanh thông tin bên dưới để trở thành đối tác của SAM Global Battery!
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-100 p-8 rounded-lg shadow-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ và Tên *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại *</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Đang gửi..." : "Đăng Ký Ngay"}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
