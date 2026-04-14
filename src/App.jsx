import { useState, useEffect } from "react";
import "./App.css";
import heroImg from "./assets/gallery/g8.jpeg";
import slide1 from "./assets/gallery/gallery_1.jpeg";
import slide2 from "./assets/gallery/gallery_2.jpeg";
import slide3 from "./assets/gallery/gallery_3.jpeg";
import slide4 from "./assets/gallery/gallery_4.jpeg";
// Импорт всех JPEG изображений из папки gallery
//

const services = [
    {
        title: "Татуировки",
        description:
            "Черно-белая графика с вниманием к пластике тела, композиции и контрасту.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.4 3.8c1.6 1.6 1.6 4.2 0 5.8l-2.5 2.5-5.8-5.8 2.5-2.5c1.6-1.6 4.2-1.6 5.8 0Z" />
                <path d="m9 7.2 5.8 5.8-6.9 6.9a3.2 3.2 0 0 1-2 1l-2.1.2.2-2.1a3.2 3.2 0 0 1 1-2L9 7.2Z" />
                <path d="m13.2 5.3 5.5 5.5" />
            </svg>
        ),
    },
    {
        title: "Коррекция",
        description:
            "Обновление старых работ, усиление глубины, деталей и общего характера татуировки.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 14c2.2-3.8 5.3-5.7 9.2-5.7 2.6 0 4.9.8 6.8 2.4" />
                <path d="m17 4 3 6-6 .2" />
                <path d="M20 10c-2.2 3.8-5.3 5.7-9.2 5.7-2.6 0-4.9-.8-6.8-2.4" />
                <path d="m7 20-3-6 6-.2" />
            </svg>
        ),
    },
    {
        title: "Консультации",
        description:
            "Помощь с идеей, размещением, масштабом и подготовкой к сеансу без лишнего стресса.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 18h-.1a7 7 0 1 1 6.7-8.9A7 7 0 0 1 12 18Z" />
                <path d="M9.4 9.3a2.7 2.7 0 0 1 5.2 1c0 1.8-2 2.4-2.6 3.6" />
                <path d="M12 17.2v.1" />
            </svg>
        ),
    },
];

function App() {
    const imageModules = import.meta.glob("./assets/gallery/*.jpeg", {
        eager: true,
    });

    // Преобразование в массив URL
    const images = Object.values(imageModules).map((module) => module.default);

    const gallerySlides = images.map((image) => ({
        image,
    }));

    const [currentSlide, setCurrentSlide] = useState(0);
    const [gallerySlide, setGallerySlide] = useState(0);

    const slides = [
        {
            image: slide1,
        },
        {
            image: slide2,
        },
        {
            image: slide3,
        },
        {
            image: slide4,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Автопрокрутка каждые 3 секунды

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextGallerySlide = () => {
        setGallerySlide((prev) => (prev + 1) % gallerySlides.length);
    };

    const prevGallerySlide = () => {
        setGallerySlide(
            (prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length,
        );
    };

    useEffect(() => {
        const galleryInterval = setInterval(() => {
            setGallerySlide((prev) => (prev + 1) % gallerySlides.length);
        }, 3500);

        return () => clearInterval(galleryInterval);
    }, [gallerySlides.length]);

    return (
        <>
            <header className="header">
                <h1>sashadark.tatts</h1>
                <nav>
                    <a href="#about">О мастере</a>
                    <a href="#services">Услуги</a>
                    <a href="#gallery">Галерея</a>
                    <a href="#contacts">Контакты</a>
                </nav>
            </header>

            <section id="hero" className="hero-section">
                <div className="hero-content">
                    <div className="slider">
                        {/* <button className="slider-btn prev" onClick={prevSlide}>
                            &lt;
                        </button> */}
                        <img
                            src={slides[currentSlide].image}
                            alt={`Slide ${currentSlide + 1}`}
                            className="slide-image fade-in"
                        />
                        {/* <button className="slider-btn next" onClick={nextSlide}>
                            &gt;
                        </button> */}
                    </div>
                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${
                                    index === currentSlide ? "active" : ""
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                    <p className="hero-text fade-in">
                        Профессиональные татуировки в темном стиле. Опытные
                        мастера, качественные материалы, индивидуальный подход.
                    </p>
                    <button className="cta-button fade-in">Записаться</button>
                </div>
            </section>

            <section id="about" className="about-section">
                <h2>О мастере</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-name">
                            Мастер <span>Александр</span>
                        </p>
                        <p>
                            Для меня татуировка — это по большей части
                            украшение, которое дополняет и подчеркивает твою
                            анатомию тела при правильном расположении и размере.
                        </p>
                        <p>
                            Я работаю исключительно в черно-белой графике со
                            своей стилизацией, люблю мрачные сюжеты и считаю,
                            что контраст в работах — залог успеха.
                        </p>
                        <p>Так же участвую в тату конвенциях 5 лет.</p>
                    </div>
                    <div className="about-image-wrapper">
                        <img
                            src={heroImg}
                            alt="Тату мастер"
                            className="about-image"
                        />
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <h2>Услуги</h2>
                <p className="services-lead">
                    Каждая работа собирается под анатомию, настроение и ритм
                    будущей татуировки.
                </p>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-item">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="gallery" className="gallery-section">
                <h2>Галерея работ</h2>
                <div className="gallery-slider">
                    <div key={gallerySlide} className="gallery-slide fade-in">
                        <img
                            src={gallerySlides[gallerySlide].image}
                            alt={`Галерея ${gallerySlide + 1}`}
                            className="gallery-image"
                        />
                    </div>
                </div>
                <div className="slider-dots">
                    {gallerySlides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === gallerySlide ? "active" : ""}`}
                            onClick={() => setGallerySlide(index)}
                        ></span>
                    ))}
                </div>
            </section>

            <section id="contacts" className="contacts-section">
                <h2>Контакты</h2>
                <div className="contact-grid">
                    <div className="contacts-info">
                        <p>Адрес: г. Уфа, ул. Заки Валиди 5</p>
                        <p className="contact-social">
                            <a
                                href="tel:+79373404490"
                                aria-label="Телефон +7 937 340 44 90"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6.6 3.5h3l1.3 4.1-1.8 1.8a16.5 16.5 0 0 0 5.5 5.5l1.8-1.8 4.1 1.3v3a1.9 1.9 0 0 1-2.1 1.9A16.9 16.9 0 0 1 4.7 5.6 1.9 1.9 0 0 1 6.6 3.5Z" />
                                </svg>
                                <span>+7 937 340 44 90</span>
                            </a>
                        </p>
                        <p className="contact-social">
                            <a
                                href="https://www.instagram.com/sashadark.tatts/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram sashadark.tatts"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <rect
                                        x="3.5"
                                        y="3.5"
                                        width="17"
                                        height="17"
                                        rx="5"
                                    />
                                    <circle cx="12" cy="12" r="4.2" />
                                    <circle cx="17.4" cy="6.7" r="1.1" />
                                </svg>
                                <span>@sashadark.tatts</span>
                            </a>
                        </p>
                        <p className="contact-social">
                            <a
                                href="https://t.me/sashatattoodark"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Telegram @sashatattoodark"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M21.4 4.6 18.3 19c-.2 1-.8 1.3-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2l-10.4 6.5-4.5-1.4c-1-.3-1-.9.2-1.4L20 3.7c.8-.3 1.6.2 1.4.9Z" />
                                </svg>
                                <span>
                                    Запись - консультация · @sashatattoodark
                                </span>
                            </a>
                        </p>
                        <p className="contact-social">
                            <a
                                href="https://t.me/sashadarktatts"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Telegram канал с работами @sashadarktatts"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M21.4 4.6 18.3 19c-.2 1-.8 1.3-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2l-10.4 6.5-4.5-1.4c-1-.3-1-.9.2-1.4L20 3.7c.8-.3 1.6.2 1.4.9Z" />
                                </svg>
                                <span>Портфолио · @sashadarktatts</span>
                            </a>
                        </p>
                    </div>
                    <div className="contact-map-wrapper">
                        <iframe
                            title="TATOO Salon map"
                            className="contact-map"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=55.9248%2C54.7191%2C55.9348%2C54.7251&layer=mapnik&marker=54.7221%2C55.9298"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 TATOO SALON. Все права защищены.</p>
            </footer>
        </>
    );
}

export default App;
