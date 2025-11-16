import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const paintings = [
  {
    id: 1,
    title: "Закат над морем",
    size: "60x80 см",
    price: "15 000 ₽",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    description: "Акрил на холсте"
  },
  {
    id: 2,
    title: "Горный пейзаж",
    size: "50x70 см",
    price: "12 000 ₽",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Масло на холсте"
  },
  {
    id: 3,
    title: "Цветущий сад",
    size: "70x90 см",
    price: "18 000 ₽",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    description: "Акрил на холсте"
  },
  {
    id: 4,
    title: "Абстракция в синем",
    size: "80x100 см",
    price: "22 000 ₽",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    description: "Смешанная техника"
  },
  {
    id: 5,
    title: "Осенний лес",
    size: "60x80 см",
    price: "16 000 ₽",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    description: "Масло на холсте"
  },
  {
    id: 6,
    title: "Городская панорама",
    size: "90x120 см",
    price: "25 000 ₽",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    description: "Акрил на холсте"
  }
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Мои работы</h1>
            <p className="text-xl text-muted-foreground">
              Исследуйте коллекцию моих работ
            </p>
          </div>

          <div className="mb-20 animate-fade-in animate-delay-100">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Картины</h2>
              <p className="text-lg text-muted-foreground">
                Физические картины для вашего интерьера
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paintings.map((painting, index) => (
                <Card 
                  key={painting.id}
                  className="group overflow-hidden border-none bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-primary/10">
                    <img 
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{painting.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{painting.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{painting.size}</span>
                      <span className="text-lg font-medium">{painting.price}</span>
                    </div>
                    <Button className="w-full">
                      Подробнее
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;