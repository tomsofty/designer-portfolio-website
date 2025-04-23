import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Обо мне</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-medium mb-4">Привет, я Имя Дизайнера</h3>
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
                <h4 className="font-medium mb-1">Опыт</h4>
                <p className="text-sm text-muted-foreground">5+ лет</p>
              </Card>
              <Card className="p-4 bg-tertiary/30 border-none">
                <h4 className="font-medium mb-1">Проекты</h4>
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
      </div>
    </section>
  );
};

export default About;