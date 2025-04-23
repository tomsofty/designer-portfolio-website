import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Типы проектов для категорий
type ProjectCategory = "all" | "web" | "branding" | "print";

// Данные о проектах
const projects = [
  {
    id: 1,
    title: "Редизайн сайта компании",
    category: "web",
    image: "/placeholder.svg",
    description: "Современный минималистичный дизайн для технологической компании"
  },
  {
    id: 2,
    title: "Брендинг для стартапа",
    category: "branding",
    image: "/placeholder.svg",
    description: "Полный комплект айдентики для инновационного стартапа"
  },
  {
    id: 3,
    title: "Дизайн каталога продукции",
    category: "print",
    image: "/placeholder.svg",
    description: "Стильный каталог с акцентом на фотографии продукции"
  },
  {
    id: 4,
    title: "Дизайн мобильного приложения",
    category: "web",
    image: "/placeholder.svg",
    description: "Интерфейс приложения для фитнеса с фокусом на удобство пользователя"
  },
  {
    id: 5,
    title: "Фирменный стиль ресторана",
    category: "branding",
    image: "/placeholder.svg",
    description: "Элегантный брендинг для нового ресторана"
  },
  {
    id: 6,
    title: "Дизайн упаковки",
    category: "print",
    image: "/placeholder.svg",
    description: "Креативная упаковка для линейки натуральной косметики"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-primary/5">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Мои работы</h2>
        
        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="web">Веб</TabsTrigger>
            <TabsTrigger value="branding">Брендинг</TabsTrigger>
            <TabsTrigger value="print">Печать</TabsTrigger>
          </TabsList>
          
          {(["all", "web", "branding", "print"] as ProjectCategory[]).map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => category === "all" || project.category === category)
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden border group hover:shadow-md transition-shadow duration-300 animate-fade-in">
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center">
          <Button variant="outline" className="border-primary hover:bg-primary/10">
            Посмотреть больше проектов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;