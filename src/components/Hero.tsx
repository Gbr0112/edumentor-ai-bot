
import { GraduationCap, Bot, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="fade-in space-y-2">
          <div className="flex justify-center mb-6">
            <div className="hero-animation">
              <Bot size={80} className="text-primary" />
            </div>
          </div>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Sua professora virtual
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            Aprenda com a{" "}
            <span className="text-primary">Professora Virtual</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Descubra uma nova forma de aprender com nossa professora virtual alimentada por inteligência artificial.
          </p>
        </div>

        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="group">
            Começar agora
            <GraduationCap className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            Ver material didático
            <Book className="ml-2 w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="fade-in mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Bot,
    title: "Aprendizado Personalizado",
    description: "Adaptamos o conteúdo ao seu ritmo e estilo de aprendizagem."
  },
  {
    icon: GraduationCap,
    title: "Suporte 24/7",
    description: "Assistência disponível a qualquer momento que você precisar."
  },
  {
    icon: Book,
    title: "Material Didático",
    description: "Conteúdo atualizado e organizado para facilitar seu aprendizado."
  }
];
