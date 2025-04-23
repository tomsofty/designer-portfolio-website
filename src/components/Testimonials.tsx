import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Алексей Смирнов",
    role: "CEO, Tech Solutions",
    content: "Работа с этим дизайнером превзошла все мои ожидания. Отличное понимание нашего бренда и потребностей аудитории. Результат получился именно таким, как мы хотели.",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Мария Петрова",
    role: "Маркетинг-директор, Brand Co",
    content: "Очень талантливый дизайнер с чувством стиля и вниманием к деталям. Наш редизайн получил множество положительных отзывов от клиентов. Обязательно продолжим сотрудничество.",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Иван Козлов",
    role: "Основатель, Startup Hub",
    content: "Креативный подход и профессионализм на каждом этапе работы. Дизайнер создал для нашего стартапа айдентику, которая помогла нам выделиться среди конкурентов.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Отзывы</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="border border-primary/20 bg-white/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/20">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;