import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Станьте частью истории</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу людей, которые создают живую историю
            через личные воспоминания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-8 text-center text-white">
              <Icon
                name="PenTool"
                size={48}
                className="mx-auto mb-4 text-white"
              />
              <h3 className="text-xl font-bold mb-3">Поделитесь историей</h3>
              <p className="text-red-100 mb-6">
                Расскажите свою семейную историю и помогите сохранить память для
                будущих поколений
              </p>
              <Button variant="secondary" className="w-full">
                Начать рассказ
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-8 text-center text-white">
              <Icon
                name="Search"
                size={48}
                className="mx-auto mb-4 text-white"
              />
              <h3 className="text-xl font-bold mb-3">Исследуйте архив</h3>
              <p className="text-red-100 mb-6">
                Изучайте тысячи документов, фотографий и свидетельств из нашего
                архива
              </p>
              <Button variant="secondary" className="w-full">
                Перейти к поиску
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-8 text-center text-white">
              <Icon
                name="Users"
                size={48}
                className="mx-auto mb-4 text-white"
              />
              <h3 className="text-xl font-bold mb-3">Присоединяйтесь</h3>
              <p className="text-red-100 mb-6">
                Станьте частью сообщества хранителей памяти и участвуйте в
                обсуждениях
              </p>
              <Button variant="secondary" className="w-full">
                Создать аккаунт
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
