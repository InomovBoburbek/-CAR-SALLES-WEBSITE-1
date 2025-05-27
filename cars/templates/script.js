document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');

    mobileMenuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Language Switcher
    const languageSelect = document.getElementById('language-select');

    // Translations
    const translations = {
        en: {
            // Navigation
            home: "Home",
            cars: "Cars",
            about: "About",
            contact: "Contact",

            // Hero Section
            heroTitle: "Find Your Perfect Car",
            heroSubtitle: "Discover the best deals on premium vehicles",
            exploreBtn: "Explore Cars",

            // Cars Section
            featuredCars: "Featured Cars",
            allBrands: "All Brands",
            allPrices: "All Prices",
            lowPrice: "$0 - $20,000",
            mediumPrice: "$20,000 - $50,000",
            highPrice: "$50,000+",
            viewDetails: "View Details",
            addToCart: "Add to Cart",
            loadMore: "Load More",

            // About Section
            aboutUs: "About Us",
            aboutText1: "AutoMarket is a premier car dealership with over 15 years of experience in the automotive industry. We pride ourselves on offering high-quality vehicles at competitive prices.",
            aboutText2: "Our team of experts is dedicated to providing exceptional customer service and helping you find the perfect car that meets your needs and budget.",
            carsSold: "Cars Sold",
            yearsExperience: "Years Experience",
            satisfaction: "Satisfaction",

            // Contact Section
            contactUs: "Contact Us",
            nameLabel: "Name",
            emailLabel: "Email",
            phoneLabel: "Phone",
            messageLabel: "Message",
            sendMessage: "Send Message",
            address: "123 Car Street, Automotive City, AC 12345",
            workingHours: "Mon-Sat: 9:00 AM - 6:00 PM",

            // Footer
            footerTagline: "Your trusted partner in finding the perfect car",
            quickLinks: "Quick Links",
            newsletter: "Newsletter",
            newsletterText: "Subscribe to our newsletter for the latest updates and offers",
            subscribe: "Subscribe",
            copyright: "© 2023 AutoMarket. All rights reserved.",

            // Cart
            emptyCart: "Your cart is empty",
            total: "Total:",
            viewCart: "View Cart",
            checkout: "Checkout",
            yourCart: "Your Cart",
            continueShopping: "Continue Shopping",
            proceedToCheckout: "Proceed to Checkout",

            // Checkout
            personalInfo: "Personal Information",
            addressLabel: "Address",
            paymentInfo: "Payment Information",
            cardNameLabel: "Name on Card",
            cardNumberLabel: "Card Number",
            expiryDateLabel: "Expiry Date",
            cvvLabel: "CVV",
            orderSummary: "Order Summary",
            backToCart: "Back to Cart",
            placeOrder: "Place Order",

            // Order Confirmation
            orderConfirmation: "Order Confirmation",
            thankYou: "Thank you for your order!",
            orderConfirmationMessage: "Your order has been placed successfully. You will receive a confirmation email shortly.",
            orderDetails: "Order Details",
            orderNumber: "Order Number:",
            orderDate: "Order Date:",
            orderTotal: "Order Total:"
        },
        ru: {
            // Navigation
            home: "Главная",
            cars: "Автомобили",
            about: "О нас",
            contact: "Контакты",

            // Hero Section
            heroTitle: "Найдите свой идеальный автомобиль",
            heroSubtitle: "Откройте для себя лучшие предложения на премиальные автомобили",
            exploreBtn: "Просмотреть автомобили",

            // Cars Section
            featuredCars: "Популярные автомобили",
            allBrands: "Все марки",
            allPrices: "Все цены",
            lowPrice: "$0 - $20,000",
            mediumPrice: "$20,000 - $50,000",
            highPrice: "$50,000+",
            viewDetails: "Подробнее",
            addToCart: "В корзину",
            loadMore: "Загрузить еще",

            // About Section
            aboutUs: "О нас",
            aboutText1: "AutoMarket - это премиальный автосалон с более чем 15-летним опытом работы в автомобильной индустрии. Мы гордимся тем, что предлагаем высококачественные автомобили по конкурентоспособным ценам.",
            aboutText2: "Наша команда экспертов стремится обеспечить исключительное обслуживание клиентов и помочь вам найти идеальный автомобиль, который соответствует вашим потребностям и бюджету.",
            carsSold: "Проданных авто",
            yearsExperience: "Лет опыта",
            satisfaction: "Удовлетворенность",

            // Contact Section
            contactUs: "Свяжитесь с нами",
            nameLabel: "Имя",
            emailLabel: "Эл. почта",
            phoneLabel: "Телефон",
            messageLabel: "Сообщение",
            sendMessage: "Отправить сообщение",
            address: "123 Автомобильная улица, Автомобильный город, AC 12345",
            workingHours: "Пн-Сб: 9:00 - 18:00",

            // Footer
            footerTagline: "Ваш надежный партнер в поиске идеального автомобиля",
            quickLinks: "Быстрые ссылки",
            newsletter: "Рассылка",
            newsletterText: "Подпишитесь на нашу рассылку для получения последних обновлений и предложений",
            subscribe: "Подписаться",
            copyright: "© 2023 AutoMarket. Все права защищены.",

            // Cart
            emptyCart: "Ваша корзина пуста",
            total: "Итого:",
            viewCart: "Просмотр корзины",
            checkout: "Оформить заказ",
            yourCart: "Ваша корзина",
            continueShopping: "Продолжить покупки",
            proceedToCheckout: "Перейти к оформлению",

            // Checkout
            personalInfo: "Личная информация",
            addressLabel: "Адрес",
            paymentInfo: "Информация об оплате",
            cardNameLabel: "Имя на карте",
            cardNumberLabel: "Номер карты",
            expiryDateLabel: "Срок действия",
            cvvLabel: "CVV",
            orderSummary: "Сводка заказа",
            backToCart: "Вернуться в корзину",
            placeOrder: "Разместить заказ",

            // Order Confirmation
            orderConfirmation: "Подтверждение заказа",
            thankYou: "Спасибо за ваш заказ!",
            orderConfirmationMessage: "Ваш заказ успешно размещен. Вскоре вы получите электронное письмо с подтверждением.",
            orderDetails: "Детали заказа",
            orderNumber: "Номер заказа:",
            orderDate: "Дата заказа:",
            orderTotal: "Сумма заказа:"
        },
        uz: {
            // Navigation
            home: "Bosh sahifa",
            cars: "Avtomobillar",
            about: "Biz haqimizda",
            contact: "Aloqa",

            // Hero Section
            heroTitle: "O'zingizga mos avtomobilni toping",
            heroSubtitle: "Premium avtomobillar uchun eng yaxshi takliflarni kashf eting",
            exploreBtn: "Avtomobillarni ko'rish",

            // Cars Section
            featuredCars: "Mashhur avtomobillar",
            allBrands: "Barcha brendlar",
            allPrices: "Barcha narxlar",
            lowPrice: "$0 - $20,000",
            mediumPrice: "$20,000 - $50,000",
            highPrice: "$50,000+",
            viewDetails: "Batafsil",
            addToCart: "Savatga qo'shish",
            loadMore: "Ko'proq yuklash",

            // About Section
            aboutUs: "Biz haqimizda",
            aboutText1: "AutoMarket - avtomobil sohasida 15 yildan ortiq tajribaga ega bo'lgan premium avtosalon. Biz raqobatbardosh narxlarda yuqori sifatli avtomobillarni taklif etishdan faxrlanamiz.",
            aboutText2: "Bizning ekspertlar jamoasi mijozlarga ajoyib xizmat ko'rsatishga va sizga ehtiyojlaringiz va byudjetingizga mos keladigan mukammal avtomobilni topishga yordam berishga intiladi.",
            carsSold: "Sotilgan avtomobillar",
            yearsExperience: "Yillik tajriba",
            satisfaction: "Mamnuniyat",

            // Contact Section
            contactUs: "Biz bilan bog'laning",
            nameLabel: "Ism",
            emailLabel: "Elektron pochta",
            phoneLabel: "Telefon",
            messageLabel: "Xabar",
            sendMessage: "Xabar yuborish",
            address: "123 Avtomobil ko'chasi, Avtomobil shahri, AC 12345",
            workingHours: "Du-Sha: 9:00 - 18:00",

            // Footer
            footerTagline: "Mukammal avtomobilni topishda ishonchli hamkoringiz",
            quickLinks: "Tezkor havolalar",
            newsletter: "Yangiliklar",
            newsletterText: "So'nggi yangiliklar va takliflar uchun bizning yangiliklarimizga obuna bo'ling",
            subscribe: "Obuna bo'lish",
            copyright: "© 2023 AutoMarket. Barcha huquqlar himoyalangan.",

            // Cart
            emptyCart: "Savatingiz bo'sh",
            total: "Jami:",
            viewCart: "Savatni ko'rish",
            checkout: "Buyurtma berish",
            yourCart: "Sizning savatingiz",
            continueShopping: "Xarid qilishni davom ettirish",
            proceedToCheckout: "Buyurtma berishga o'tish",

            // Checkout
            personalInfo: "Shaxsiy ma'lumotlar",
            addressLabel: "Manzil",
            paymentInfo: "To'lov ma'lumotlari",
            cardNameLabel: "Kartadagi ism",
            cardNumberLabel: "Karta raqami",
            expiryDateLabel: "Amal qilish muddati",
            cvvLabel: "CVV",
            orderSummary: "Buyurtma xulosasi",
            backToCart: "Savatga qaytish",
            placeOrder: "Buyurtma berish",

            // Order Confirmation
            orderConfirmation: "Buyurtma tasdiqlandi",
            thankYou: "Buyurtmangiz uchun rahmat!",
            orderConfirmationMessage: "Sizning buyurtmangiz muvaffaqiyatli joylashtirildi. Tez orada tasdiqlovchi xat olasiz.",
            orderDetails: "Buyurtma tafsilotlari",
            orderNumber: "Buyurtma raqami:",
            orderDate: "Buyurtma sanasi:",
            orderTotal: "Buyurtma summasi:"
        },
        ar: {
            // Navigation
            home: "الرئيسية",
            cars: "السيارات",
            about: "من نحن",
            contact: "اتصل بنا",

            // Hero Section
            heroTitle: "اعثر على سيارتك المثالية",
            heroSubtitle: "اكتشف أفضل العروض على السيارات الفاخرة",
            exploreBtn: "استكشف السيارات",

            // Cars Section
            featuredCars: "السيارات المميزة",
            allBrands: "جميع العلامات التجارية",
            allPrices: "جميع الأسعار",
            lowPrice: "$0 - $20,000",
            mediumPrice: "$20,000 - $50,000",
            highPrice: "$50,000+",
            viewDetails: "عرض التفاصيل",
            addToCart: "أضف إلى السلة",
            loadMore: "تحميل المزيد",

            // About Section
            aboutUs: "من نحن",
            aboutText1: "أوتوماركت هو وكيل سيارات متميز مع أكثر من 15 عامًا من الخبرة في صناعة السيارات. نحن نفخر بتقديم سيارات عالية الجودة بأسعار تنافسية.",
            aboutText2: "فريقنا من الخبراء مكرس لتقديم خدمة عملاء استثنائية ومساعدتك في العثور على السيارة المثالية التي تلبي احتياجاتك وميزانيتك.",
            carsSold: "سيارات مباعة",
            yearsExperience: "سنوات الخبرة",
            satisfaction: "رضا العملاء",

            // Contact Section
            contactUs: "اتصل بنا",
            nameLabel: "الاسم",
            emailLabel: "البريد الإلكتروني",
            phoneLabel: "الهاتف",
            messageLabel: "الرسالة",
            sendMessage: "إرسال الرسالة",
            address: "123 شارع السيارات، مدينة السيارات، AC 12345",
            workingHours: "الاثنين-السبت: 9:00 صباحًا - 6:00 مساءً",

            // Footer
            footerTagline: "شريكك الموثوق في العثور على السيارة المثالية",
            quickLinks: "روابط سريعة",
            newsletter: "النشرة الإخبارية",
            newsletterText: "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والعروض",
            subscribe: "اشترك",
            copyright: "© 2023 أوتوماركت. جميع الحقوق محفوظة.",

            // Cart
            emptyCart: "سلة التسوق فارغة",
            total: "المجموع:",
            viewCart: "عرض السلة",
            checkout: "إتمام الشراء",
            yourCart: "سلة التسوق الخاصة بك",
            continueShopping: "مواصلة التسوق",
            proceedToCheckout: "المتابعة إلى الدفع",

            // Checkout
            personalInfo: "المعلومات الشخصية",
            addressLabel: "العنوان",
            paymentInfo: "معلومات الدفع",
            cardNameLabel: "الاسم على البطاقة",
            cardNumberLabel: "رقم البطاقة",
            expiryDateLabel: "تاريخ الانتهاء",
            cvvLabel: "رمز التحقق",
            orderSummary: "ملخص الطلب",
            backToCart: "العودة إلى السلة",
            placeOrder: "تقديم الطلب",

            // Order Confirmation
            orderConfirmation: "تأكيد الطلب",
            thankYou: "شكرا لطلبك!",
            orderConfirmationMessage: "تم تقديم طلبك بنجاح. سوف تتلقى رسالة تأكيد بالبريد الإلكتروني قريبًا.",
            orderDetails: "تفاصيل الطلب",
            orderNumber: "رقم الطلب:",
            orderDate: "تاريخ الطلب:",
            orderTotal: "إجمالي الطلب:"
        }
    };

    // Apply translations based on selected language
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-key]');

        // Set document direction for RTL languages
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Initialize with default language (English)
    applyTranslations('en');

    // Change language when select changes
    languageSelect.addEventListener('change', function() {
        applyTranslations(this.value);
    });

    // Car Filtering
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const carCards = document.querySelectorAll('.car-card');

    function filterCars() {
        const selectedBrand = brandFilter.value;
        const selectedPrice = priceFilter.value;

        carCards.forEach(card => {
            const brand = card.getAttribute('data-brand');
            const price = card.getAttribute('data-price');

            const brandMatch = selectedBrand === 'all' || brand === selectedBrand;
            const priceMatch = selectedPrice === 'all' || price === selectedPrice;

            if (brandMatch && priceMatch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    brandFilter.addEventListener('change', filterCars);
    priceFilter.addEventListener('change', filterCars);

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, phone, message });

        // Show success message (in a real app, this would happen after successful submission)
        alert('Thank you for your message! We will contact you soon.');

        // Reset form
        contactForm.reset();
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get email value
        const email = this.querySelector('input[type="email"]').value;

        // In a real application, you would send this data to a server
        console.log('Newsletter subscription:', email);

        // Show success message
        alert('Thank you for subscribing to our newsletter!');

        // Reset form
        this.reset();
    });

    // Load More Button (simulated functionality)
    const loadMoreBtn = document.querySelector('.load-more button');
    let clickCount = 0;

    loadMoreBtn.addEventListener('click', function() {
        clickCount++;

        if (clickCount >= 2) {
            this.disabled = true;
            this.textContent = 'No More Cars';
            return;
        }

        // In a real application, this would load more cars from a server
        // For this demo, we'll clone existing cars
        const carsGrid = document.querySelector('.cars-grid');
        const carCards = document.querySelectorAll('.car-card');

        // Clone the first 3 cars and append them to the grid
        for (let i = 0; i < 3 && i < carCards.length; i++) {
            const clone = carCards[i].cloneNode(true);
            clone.style.opacity = '0';
            clone.style.transform = 'translateY(30px)';
            carsGrid.appendChild(clone);

            // Add event listener to the cloned add to cart button
            const addToCartBtn = clone.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const name = this.getAttribute('data-name');
                const price = parseFloat(this.getAttribute('data-price'));
                const image = this.getAttribute('data-image');

                addToCart(id, name, price, image);
            });

            // Trigger animation
            setTimeout(() => {
                clone.style.opacity = '1';
                clone.style.transform = 'translateY(0)';
            }, i * 200);
        }
    });

    // Shopping Cart Functionality
    let cart = [];
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const emptyCartMessage = document.querySelector('.empty-cart-message');

    // Add to Cart Button Click
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');

            addToCart(id, name, price, image);
        });
    });

    // Add to Cart Function
    function addToCart(id, name, price, image) {
        // Check if item is already in cart
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price,
                image,
                quantity: 1
            });
        }

        // Update cart UI
        updateCart();

        // Show success message with animation
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <p>${name} added to cart!</p>
            </div>
        `;
        document.body.appendChild(notification);

        // Add animation class
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Update Cart UI
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Add pulse animation to cart icon
        cartCount.classList.add('pulse');
        setTimeout(() => {
            cartCount.classList.remove('pulse');
        }, 1000);

        // Update cart items
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            totalAmount.textContent = '$0';
            return;
        }

        emptyCartMessage.style.display = 'none';

        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmount.textContent = `$${total.toLocaleString()}`;

        // Add items to cart dropdown
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toLocaleString()} x ${item.quantity}</div>
                </div>
                <div class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = this.getAttribute('data-id');
                removeFromCart(id);
            });
        });
    }

    // Remove item from cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
        updateCartModal();
        updateCheckoutModal();
    }

    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Open Modal Function
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close Modal Function
    function closeModal() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal when clicking on close button
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close modal when clicking on overlay
    overlay.addEventListener('click', closeModal);

    // Cart Modal
    const viewCartBtn = document.querySelector('.view-cart-btn');
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const totalAmountLarge = document.querySelector('.total-amount-large');

    viewCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        updateCartModal();
        openModal('cart-modal');
    });

    // Update Cart Modal
    function updateCartModal() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'empty-cart-message';
            emptyMessage.textContent = translations[languageSelect.value].emptyCart;
            cartItemsContainer.appendChild(emptyMessage);
            totalAmountLarge.textContent = '$0';
            return;
        }

        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmountLarge.textContent = `$${total.toLocaleString()}`;

        // Add items to cart modal
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item-large';
            cartItem.style.opacity = '0';
            cartItem.style.transform = 'translateX(20px)';
            cartItem.innerHTML = `
                <div class="cart-item-image-large">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details-large">
                    <div class="cart-item-name-large">${item.name}</div>
                    <div class="cart-item-price-large">$${item.price.toLocaleString()} x ${item.quantity}</div>
                </div>
                <div class="cart-item-remove-large" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);

            // Animate item entrance
            setTimeout(() => {
                cartItem.style.opacity = '1';
                cartItem.style.transform = 'translateX(0)';
            }, index * 100);
        });

        // Add event listeners to remove buttons
        document.querySelectorAll('.cart-item-remove-large').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const cartItem = this.closest('.cart-item-large');

                // Animate item removal
                cartItem.style.opacity = '0';
                cartItem.style.transform = 'translateX(20px)';

                setTimeout(() => {
                    removeFromCart(id);
                }, 300);
            });
        });
    }

    // Continue Shopping Button
    const continueShoppingBtn = document.querySelector('.continue-shopping');
    continueShoppingBtn.addEventListener('click', closeModal);

    // Checkout Modal
    const checkoutBtn = document.querySelector('.checkout-btn');
    const proceedToCheckoutBtn = document.querySelector('.proceed-to-checkout');
    const orderItems = document.querySelector('.order-items');
    const checkoutTotalAmount = document.querySelector('.checkout-total-amount');

    checkoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert(translations[languageSelect.value].emptyCart);
            return;
        }
        updateCheckoutModal();
        openModal('checkout-modal');
    });

    proceedToCheckoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert(translations[languageSelect.value].emptyCart);
            return;
        }
        updateCheckoutModal();
        closeModal();
        openModal('checkout-modal');
    });

    // Update Checkout Modal
    function updateCheckoutModal() {
        orderItems.innerHTML = '';

        if (cart.length === 0) {
            checkoutTotalAmount.textContent = '$0';
            return;
        }

        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        checkoutTotalAmount.textContent = `$${total.toLocaleString()}`;

        // Add items to order summary
        cart.forEach((item, index) => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.style.opacity = '0';
            orderItem.style.transform = 'translateY(10px)';
            orderItem.innerHTML = `
                <div class="order-item-name">${item.name} x ${item.quantity}</div>
                <div class="order-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
            `;
            orderItems.appendChild(orderItem);

            // Animate item entrance
            setTimeout(() => {
                orderItem.style.opacity = '1';
                orderItem.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Back to Cart Button
    const backToCartBtn = document.querySelector('.back-to-cart');
    backToCartBtn.addEventListener('click', function() {
        closeModal();
        openModal('cart-modal');
    });

    // Checkout Form Submission
    const checkoutForm = document.getElementById('checkout-form');

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('checkout-name').value;
        const email = document.getElementById('checkout-email').value;
        const phone = document.getElementById('checkout-phone').value;
        const address = document.getElementById('checkout-address').value;
        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvv = document.getElementById('card-cvv').value;

        // In a real application, you would send this data to a payment processor
        console.log('Order submitted:', {
            customer: { name, email, phone, address },
            payment: { cardName, cardNumber, cardExpiry, cardCvv },
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });

        // Generate order details
        const orderNumber = Math.floor(100000 + Math.random() * 900000);
        const orderDate = new Date().toLocaleDateString();
        const orderTotal = `$${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}`;

        // Update order confirmation details
        document.getElementById('order-number').textContent = orderNumber;
        document.getElementById('order-date').textContent = orderDate;
        document.getElementById('order-total').textContent = orderTotal;

        // Show confirmation modal
        closeModal();
        openModal('confirmation-modal');

        // Clear cart
        cart = [];
        updateCart();

        // Reset form
        checkoutForm.reset();
    });

    // Continue Shopping Final Button
    const continueShoppingFinalBtn = document.querySelector('.continue-shopping-final');
    continueShoppingFinalBtn.addEventListener('click', closeModal);

    // Initialize cart
    updateCart();

    // Scroll Animation
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Call on page load

    // Animated Counter
    function startCounters() {
        const counters = document.querySelectorAll('.counter-animation');

        counters.forEach(counter => {
            const windowHeight = window.innerHeight;
            const elementTop = counter.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible && !counter.classList.contains('animate')) {
                counter.classList.add('animate');

                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = Math.ceil(target / 100); // Increment every 20ms
                let count = 0;

                const updateCounter = () => {
                    if (count < target) {
                        count += step;
                        counter.textContent = count;
                        setTimeout(updateCounter, 20); // Update every 20ms
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
            }
        });
    }

    // Check if counters are in viewport and start animation
    function checkCountersVisibility() {
        const counters = document.querySelectorAll('.counter-animation');

        counters.forEach(counter => {
            const windowHeight = window.innerHeight;
            const elementTop = counter.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                startCounters();
                window.removeEventListener('scroll', checkCountersVisibility); // Remove listener after starting
            }
        });
    }

    window.addEventListener('scroll', checkCountersVisibility);
    checkCountersVisibility(); // Check on page load
});