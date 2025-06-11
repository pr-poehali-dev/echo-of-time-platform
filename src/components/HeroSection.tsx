import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { PLATFORM_CONFIG, STATS } from "@/lib/constants";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-red-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-red-50 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={PLATFORM_CONFIG.logo}
              alt={PLATFORM_CONFIG.name}
              className="h-24 w-24 mx-auto mb-4"
            />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {PLATFORM_CONFIG.name}
            </h1>
            <p className="text-xl text-red-600 font-medium mb-6">
              {PLATFORM_CONFIG.tagline}
            </p>
          </div>

          {/* Main message */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Каждая история важна. Каждая память бесценна.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Присоединяйтесь к крупнейшему сообществу хранителей исторической
              памяти. Делитесь семейными историями, изучайте архивы, создавайте
              связи между прошлым и настоящим.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              >
                <Icon name="Archive" size={20} className="mr-2" />
                Исследовать архив
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Поделиться историей
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
