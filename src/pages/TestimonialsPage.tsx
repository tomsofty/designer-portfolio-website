import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const API_URL = "https://functions.poehali.dev/2d448e83-4a8f-48e2-ae7e-c526b37b9f4d";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: ""
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.error("Ошибка загрузки отзывов:", error);
      toast.error("Не удалось загрузить отзывы");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.role.trim() || !formData.content.trim()) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Спасибо! Ваш отзыв отправлен на модерацию");
        setFormData({ name: "", role: "", content: "" });
      } else {
        toast.error(data.error || "Ошибка при отправке отзыва");
      }
    } catch (error) {
      console.error("Ошибка отправки отзыва:", error);
      toast.error("Не удалось отправить отзыв");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Отзывы клиентов</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Что говорят обо мне мои клиенты и партнеры
          </p>

          <Card className="mb-12 max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Оставить отзыв</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={submitting}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Должность и компания"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    disabled={submitting}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваш отзыв"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    disabled={submitting}
                    rows={4}
                  />
                </div>
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? "Отправка..." : "Отправить отзыв"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Загрузка отзывов...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Пока нет одобренных отзывов</p>
            </div>
          ) : (
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
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
