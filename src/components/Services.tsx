import { Code, Database, Cloud, Shield, Smartphone, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Phát triển phần mềm",
      description: "Xây dựng ứng dụng web và phần mềm tùy chỉnh theo nhu cầu doanh nghiệp"
    },
    {
      icon: Database,
      title: "Quản lý dữ liệu",
      description: "Giải pháp lưu trữ, xử lý và phân tích dữ liệu quy mô lớn"
    },
    {
      icon: Cloud,
      title: "Điện toán đám mây",
      description: "Triển khai và quản lý hạ tầng cloud cho doanh nghiệp"
    },
    {
      icon: Shield,
      title: "An ninh mạng",
      description: "Bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa an ninh"
    },
    {
      icon: Smartphone,
      title: "Ứng dụng di động",
      description: "Phát triển ứng dụng iOS và Android chuyên nghiệp"
    },
    {
      icon: BarChart,
      title: "Phân tích kinh doanh",
      description: "Công cụ BI và dashboard để ra quyết định dựa trên dữ liệu"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cung cấp giải pháp công nghệ toàn diện, từ phát triển phần mềm đến tư vấn chiến lược số
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
