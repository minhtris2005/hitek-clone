import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              TechCorp
            </h3>
            <p className="text-background/80 mb-4">
              Đối tác công nghệ tin cậy cho sự phát triển bền vững của doanh nghiệp bạn.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#services" className="hover:text-background transition-colors">Phát triển phần mềm</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Quản lý dữ liệu</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Điện toán đám mây</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">An ninh mạng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">Giới thiệu</a></li>
              <li><a href="#team" className="hover:text-background transition-colors">Đội ngũ</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-background/80">
              <li>Tầng 10, Tòa nhà ABC</li>
              <li>123 Đường XYZ, Quận 1</li>
              <li>TP. Hồ Chí Minh</li>
              <li className="pt-2">+84 123 456 789</li>
              <li>info@techcorp.vn</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 TechCorp. Bản quyền thuộc về công ty.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
