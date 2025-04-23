import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-tertiary/20 blur-3xl" />
      </div>
      
      <div className="container max-w-4xl text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Превращаю идеи в визуальные истории
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Создаю уникальный дизайн, который привлекает внимание и вдохновляет
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Узнать больше
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-foreground hover:bg-primary/10"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            Посмотреть работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;