import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sẵn sàng bắt đầu dự án của bạn? Hãy để lại thông tin, chúng tôi sẽ liên hệ ngay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Gửi tin nhắn</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Họ và tên *" 
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email *" 
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Số điện thoại *" 
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Nội dung tin nhắn *" 
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Gửi tin nhắn
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Địa chỉ</h4>
                  <p className="text-muted-foreground">
                    Tầng 10, Tòa nhà ABC<br />
                    123 Đường XYZ, Quận 1<br />
                    TP. Hồ Chí Minh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Điện thoại</h4>
                  <p className="text-muted-foreground">
                    +84 123 456 789<br />
                    +84 987 654 321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    info@techcorp.vn<br />
                    support@techcorp.vn
                  </p>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg mt-8">
                <h4 className="font-semibold mb-2">Giờ làm việc</h4>
                <p className="text-muted-foreground">
                  Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                  Thứ 7: 8:00 - 12:00<br />
                  Chủ nhật: Nghỉ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
