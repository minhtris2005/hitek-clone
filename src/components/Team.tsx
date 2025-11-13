import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Nguyễn Văn A",
      role: "Giám đốc điều hành",
      image: "",
      initials: "NVA"
    },
    {
      name: "Trần Thị B",
      role: "Giám đốc công nghệ",
      image: "",
      initials: "TTB"
    },
    {
      name: "Lê Văn C",
      role: "Giám đốc phát triển",
      image: "",
      initials: "LVC"
    },
    {
      name: "Phạm Thị D",
      role: "Trưởng phòng thiết kế",
      image: "",
      initials: "PTD"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Đội ngũ của chúng tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Những con người tài năng đang làm nên sự khác biệt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-gradient-primary text-white text-xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="h-5 w-5 mx-auto" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
