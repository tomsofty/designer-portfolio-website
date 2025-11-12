import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">Обо мне</h1>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="order-2 md:order-1 animate-fade-in animate-delay-100">
              <h2 className="text-2xl font-medium mb-4">Привет, я Имя Дизайнера</h2>
              <p className="text-muted-foreground mb-4">
                Я специализируюсь на создании минималистичного дизайна, который эффективно 
                передает сообщение бренда и создает впечатление.
              </p>
              <p className="text-muted-foreground mb-6">
                С опытом работы более 5 лет в области графического и веб-дизайна, я помогаю 
                брендам выделиться через визуальные решения, которые сочетают в себе эстетику и функциональность.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-secondary/40 border-none">
                  <h3 className="font-medium mb-1">Опыт</h3>
                  <p className="text-sm text-muted-foreground">5+ лет</p>
                </Card>
                <Card className="p-4 bg-tertiary/30 border-none">
                  <h3 className="font-medium mb-1">Проекты</h3>
                  <p className="text-sm text-muted-foreground">100+ успешных</p>
                </Card>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2 animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden bg-primary/20 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Фото дизайнера" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/50 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-tertiary/40 -z-10" />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in animate-delay-200">
            <div>
              <h3 className="text-2xl font-medium mb-4">Мой подход</h3>
              <p className="text-muted-foreground">
                Каждый проект начинается с глубокого понимания целей клиента и аудитории. 
                Я верю, что хороший дизайн должен не только выглядеть красиво, но и решать 
                конкретные бизнес-задачи. Минимализм для меня — это не отсутствие элементов, 
                а присутствие только необходимых.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4">Навыки</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-6 bg-secondary/30 border-none">
                  <h4 className="font-medium mb-2">Графический дизайн</h4>
                  <p className="text-sm text-muted-foreground">
                    Логотипы, брендинг, визуальная идентичность
                  </p>
                </Card>
                <Card className="p-6 bg-tertiary/20 border-none">
                  <h4 className="font-medium mb-2">Веб-дизайн</h4>
                  <p className="text-sm text-muted-foreground">
                    UI/UX, адаптивные интерфейсы, прототипирование
                  </p>
                </Card>
                <Card className="p-6 bg-primary/10 border-none">
                  <h4 className="font-medium mb-2">Типографика</h4>
                  <p className="text-sm text-muted-foreground">
                    Работа со шрифтами, композиция, читаемость
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4">Образование и достижения</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Магистр изящных искусств в области графического дизайна</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Награда Design Excellence Award 2022</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Спикер на конференции Design Summit 2023</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Публикации в журналах Design Today и Creative Review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
