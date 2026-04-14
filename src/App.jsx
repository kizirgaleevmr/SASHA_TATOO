import { useState, useEffect } from "react";
import "./App.css";
import heroImg from "./assets/gallery/g8.jpeg";
import slide1 from "./assets/gallery/gallery_1.jpeg";
import slide2 from "./assets/gallery/gallery_2.jpeg";
import slide3 from "./assets/gallery/gallery_3.jpeg";
import slide4 from "./assets/gallery/gallery_4.jpeg";
// Импорт всех JPEG изображений из папки gallery
//

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
                <h1>TATOO SALON</h1>
                <nav>
                    <a href="#about">О нас</a>
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
                <h2>О нас</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Наш тату-салон специализируется на создании
                            уникальных татуировок в темных тонах. Мы используем
                            только высококачественные чернила и современное
                            оборудование.
                        </p>
                        <p>
                            Наша команда мастеров имеет многолетний опыт и
                            внимательный подход к каждому клиенту. Мы создаем
                            индивидуальные эскизы и делаем работу максимально
                            комфортной и безопасной.
                        </p>
                        <ul>
                            <li>Эксклюзивные авторские дизайны</li>
                            <li>Чистота и современные материалы</li>
                            <li>Поддержка на всех этапах</li>
                        </ul>
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
                <div className="services-grid">
                    <div className="service-item">
                        <div className="service-icon">🎨</div>
                        <h3>Татуировки</h3>
                        <p>
                            Полноцветные и черно-белые татуировки любого стиля и
                            сложности.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">🛠️</div>
                        <h3>Коррекция</h3>
                        <p>
                            Исправление старых татуировок, добавление деталей
                            или изменение дизайна.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">💬</div>
                        <h3>Консультации</h3>
                        <p>
                            Бесплатные консультации по выбору дизайна и
                            подготовке к процедуре.
                        </p>
                    </div>
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
                        <p>Адрес: ул. Примерная, 123, Москва</p>
                        <p>Телефон: +7 (123) 456-78-90</p>
                        <p>Email: info@tatoo-salon.ru</p>
                        <p>Instagram: @tatoo_salon</p>
                    </div>
                    <div className="contact-map-wrapper">
                        <iframe
                            title="TATOO Salon map"
                            className="contact-map"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=37.6180%2C55.7540%2C37.6280%2C55.7600&layer=mapnik&marker=55.7570%2C37.6230"
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
