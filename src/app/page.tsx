"use client"

import { Leaf, Star, Package, MessageCircle, Award, Phone } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466233776-owwowrxb.jpg"
          logoAlt="Огурчик Logo"
          brandName="Огурчик"
          button={{
            text: "Заказать",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Огурчик - Натуральный Сок"
          description="Свежие соки из отборных огурцов без консервантов и искусственных добавок. Натуральная польза в каждом глотке."
          tag="100% Натуральный"
          tagIcon={Leaf}
          buttons={[
            {
              text: "Купить сейчас",
              href: "contact"
            },
            {
              text: "Узнать больше",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466236124-478y4ede.jpg",
              imageAlt: "Свежие овощи для сока"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466237166-hjq50cui.jpg",
              imageAlt: "Органические соки"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466238307-m81s95ud.jpg",
              imageAlt: "Здоровый зеленый сок"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466239395-9x7ta6bf.jpg",
              imageAlt: "Упаковка натурального сока"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466240548-7a8m3txg.jpg",
              imageAlt: "Свежий сок в стакане"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="О Нас"
          description={[
            "Мы специализируемся на производстве высококачественных соков из свежих огурцов, выращенных в экологически чистых условиях.",
            "Наша миссия - предоставить людям доступ к натуральным и полезным напиткам без химических добавок и консервантов."
          ]}
          buttons={[
            {
              text: "Наши продукты",
              href: "product"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Почему выбирают Огурчик"
          description="Узнайте о преимуществах наших натуральных соков"
          tag="Преимущества"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Богат витаминами",
              description: "Высокое содержание витамина C, К и калия для поддержания здоровья и иммунитета",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466243285-vsllsaru.jpg",
              imageAlt: "Витамины в соке"
            },
            {
              id: 2,
              title: "100% натуральный",
              description: "Никаких искусственных добавок, консервантов или красителей - только чистая природа",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466244898-oeaj7j5p.jpg",
              imageAlt: "Натуральные ингредиенты"
            },
            {
              id: 3,
              title: "Свежесть каждый день",
              description: "Ежедневное производство обеспечивает максимальную свежесть и вкус продукта",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466246116-fj67l13m.jpg",
              imageAlt: "Свежий сок"
            },
            {
              id: 4,
              title: "Экологичная упаковка",
              description: "Используем перерабатываемые материалы для заботы об окружающей среде",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466247263-z0dhz0pi.jpg",
              imageAlt: "Эко упаковка"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Наши продукты"
          description="Выберите идеальный сок Огурчик для себя"
          tag="Каталог"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "classic",
              name: "Огурчик Классический",
              price: "150₽",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466248740-f22qrl3u.jpg",
              imageAlt: "Классический сок Огурчик"
            },
            {
              id: "premium",
              name: "Огурчик Премиум",
              price: "220₽",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466249865-6fatnb2i.jpg",
              imageAlt: "Премиум сок Огурчик"
            },
            {
              id: "family",
              name: "Огурчик Семейный",
              price: "380₽",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466251421-wvsh48wd.jpg",
              imageAlt: "Семейный сок Огурчик"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Отзывы наших клиентов"
          description="Узнайте, что говорят о нас покупатели"
          tag="Отзывы"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Анна Петрова",
              role: "Мама двоих детей",
              company: "Москва",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466252801-g2xwlj3p.jpg",
              imageAlt: "Анна Петрова"
            },
            {
              id: "2",
              name: "Дмитрий Козлов",
              role: "Спортсмен",
              company: "Санкт-Петербург",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466254062-dgmbqiav.jpg",
              imageAlt: "Дмитрий Козлов"
            },
            {
              id: "3",
              name: "Елена Смирнова",
              role: "Диетолог",
              company: "Екатеринбург",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466255194-a1b17r3p.jpg",
              imageAlt: "Елена Смирнова"
            },
            {
              id: "4",
              name: "Алексей Иванов",
              role: "Офисный работник",
              company: "Новосибирск",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466256420-4ssstz2t.jpg",
              imageAlt: "Алексей Иванов"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Нам доверяют"
          description="Огурчик представлен в лучших магазинах и заведениях страны"
          tag="Партнеры"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466257504-98vsm343.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466258982-vp5jrc62.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466259942-6qevnk2c.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466261337-yp1qevbv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466262564-md1zfd96.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466263534-ss1cc10m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466264917-dpvrk76i.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Связаться с нами"
          title="Заказать сок Огурчик"
          description="Оставьте заявку и мы свяжемся с вами для оформления заказа. Доставка по всей России."
          tagIcon={Phone}
          inputPlaceholder="Ваш email"
          buttonText="Отправить заявку"
          termsText="Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466266044-77d98z9d.jpg"
          imageAlt="Свяжитесь с нами"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763466233776-owwowrxb.jpg"
          logoText="Огурчик"
          copyrightText="© 2025 | Огурчик. Все права защищены."
          columns={[
            {
              title: "Продукция",
              items: [
                {
                  label: "Классический",
                  href: "product"
                },
                {
                  label: "Премиум",
                  href: "product"
                },
                {
                  label: "Семейный",
                  href: "product"
                }
              ]
            },
            {
              title: "Компания",
              items: [
                {
                  label: "О нас",
                  href: "about"
                },
                {
                  label: "Контакты",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}