import { Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Tầm nhìn",
      description: "Trở thành đối tác công nghệ hàng đầu, mang đến giá trị vượt trội cho khách hàng"
    },
    {
      icon: Users,
      title: "Đội ngũ",
      description: "Chuyên gia giàu kinh nghiệm, tận tâm và luôn cập nhật công nghệ mới nhất"
    },
    {
      icon: Zap,
      title: "Đổi mới",
      description: "Không ngừng sáng tạo, áp dụng các công nghệ tiên tiến nhất vào thực tiễn"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Về chúng tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-card p-8 md:p-12 rounded-lg shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Câu chuyện của chúng tôi
              </h3>
              <p className="text-muted-foreground mb-4">
                Được thành lập vào năm 2014, TechCorp bắt đầu với sứ mệnh đơn giản: giúp các doanh nghiệp tận dụng sức mạnh của công nghệ để phát triển.
              </p>
              <p className="text-muted-foreground">
                Qua nhiều năm, chúng tôi đã phát triển từ một startup nhỏ thành một công ty công nghệ hàng đầu, phục vụ khách hàng trên toàn quốc với đội ngũ chuyên gia giàu kinh nghiệm.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Dự án hoàn thành</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Khách hàng</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Chuyên gia</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
