import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">PORTFOLIO</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-light text-black mb-6 animate-fade-in">
                Дизайнер
                <br />
                <span className="text-gray-400">Интерфейсов</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
                Создаю минималистичные и функциональные дизайны, которые решают задачи пользователей
              </p>
              <div className="flex items-center justify-center gap-6 animate-fade-in">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-black mb-8">Обо мне</h2>
              <p className="text-lg text-gray-600 mb-6">
                Я дизайнер с 5-летним опытом создания цифровых продуктов. Специализируюсь на UX/UI дизайне, 
                брендинге и создании дизайн-систем.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Мой подход основан на глубоком понимании пользователей и решении их задач через простые, 
                элегантные интерфейсы.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-2">50+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-2">5</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Palette" size={24} className="text-black mr-3" />
                  <h3 className="text-xl font-medium text-black">UI/UX Design</h3>
                </div>
                <p className="text-gray-600">Создание пользовательских интерфейсов и исследование опыта</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Layers" size={24} className="text-black mr-3" />
                  <h3 className="text-xl font-medium text-black">Дизайн-системы</h3>
                </div>
                <p className="text-gray-600">Разработка масштабируемых компонентов и гайдлайнов</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-black mr-3" />
                  <h3 className="text-xl font-medium text-black">Мобильные приложения</h3>
                </div>
                <p className="text-gray-600">Дизайн нативных и веб-приложений для мобильных устройств</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">Портфолио</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Избранные проекты, которые демонстрируют мой подход к решению дизайн-задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <img 
                  src="img/7d130e83-9563-4437-a168-5160fde2ab78.jpg" 
                  alt="Мобильное приложение" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Кейс
                  </Button>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">Мобильное приложение</h3>
                <p className="text-gray-600">Дизайн банковского приложения с фокусом на безопасность и удобство</p>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <img 
                  src="img/c84c7ec4-7927-4fd1-a670-b843755c0f81.jpg" 
                  alt="Веб-платформа" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Icon name="Monitor" size={16} className="text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Кейс
                  </Button>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">Веб-платформа</h3>
                <p className="text-gray-600">Редизайн корпоративного портала с улучшением UX на 40%</p>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <img 
                  src="img/d5635a6b-8715-4521-9e13-075bfef017a9.jpg" 
                  alt="Дизайн-система" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Icon name="Layers" size={16} className="text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Кейс
                  </Button>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">Дизайн-система</h3>
                <p className="text-gray-600">Создание единой системы компонентов для продуктовой линейки</p>
              </CardContent>
            </Card>

            {/* Project Card 4 */}
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Icon name="Smartphone" size={16} className="text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Кейс
                  </Button>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">E-commerce</h3>
                <p className="text-gray-600">Мобильный интернет-магазин с интуитивным процессом покупки</p>
              </CardContent>
            </Card>

            {/* Project Card 5 */}
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={16} className="text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Кейс
                  </Button>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">SaaS продукт</h3>
                <p className="text-gray-600">Дашборд аналитики с фокусом на визуализацию данных</p>
              </CardContent>
            </Card>

            {/* Project Card 6 */}
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={16} className="text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Кейс
                  </Button>
                </div>
                <h3 className="text-xl font-medium text-black mb-2">Медицинское приложение</h3>
                <p className="text-gray-600">Платформа для записи к врачам с упрощенным интерфейсом</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Готов к новым проектам</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Если у вас есть интересная задача или вы хотите обсудить сотрудничество — напишите мне
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-3">
              Написать в Telegram
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;