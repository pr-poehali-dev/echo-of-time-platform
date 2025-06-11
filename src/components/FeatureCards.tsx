import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { FEATURES } from "@/lib/constants";

const FeatureCards = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Возможности платформы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мощные инструменты для сохранения, изучения и передачи исторической
            памяти
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={feature.icon as any} size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-red-50 group-hover:border-red-200"
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
