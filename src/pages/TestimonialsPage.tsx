import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  },
  {
    id: 4,
    name: "Елена Волкова",
    role: "Руководитель проекта, Digital Agency",
    content: "Потрясающая работа! Дизайнер не просто выполнил задачу, а предложил инновационные решения, которые значительно улучшили пользовательский опыт нашего продукта.",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Дмитрий Соколов",
    role: "Владелец, Retail Network",
    content: "Профессионал своего дела. Работа была выполнена в срок, с высоким качеством и креативностью. Наши продажи выросли после ребрендинга!",
    avatar: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Ольга Новикова",
    role: "Арт-директор, Creative Studio",
    content: "Сотрудничество было легким и приятным. Дизайнер быстро схватывает суть задачи и воплощает идеи в жизнь с невероятным вниманием к деталям.",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Отзывы клиентов</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Что говорят обо мне мои клиенты и партнеры
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="border border-primary/20 bg-white/50 animate-fade-in hover:shadow-lg transition-shadow"
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
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
