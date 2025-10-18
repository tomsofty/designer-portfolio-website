import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/e78bb9b6-a7ea-4a29-aab7-edbd012bb2fb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Заявка отправлена!",
          description: data.message,
          duration: 5000,
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary/10 py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Давайте работать вместе</h3>
            <p className="text-muted-foreground mb-6">
              Готовы обсудить ваш проект? Заполните форму, и я свяжусь с вами в ближайшее время.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/80 border-primary/20"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/80 border-primary/20"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/80 border-primary/20"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/80 border-primary/20 min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Контактная информация</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="Mail" className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">designer@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="Phone" className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Локация</p>
                  <p className="text-muted-foreground">Москва, Россия</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                  <Icon name="Facebook" className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                  <Icon name="Instagram" className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                  <Icon name="Twitter" className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                  <Icon name="Linkedin" className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/20">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Имя Дизайнера. Все права защищены.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Создано с <Icon name="Heart" className="inline w-4 h-4 text-red-500" /> в poehali.dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
