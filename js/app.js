

//book animation

// let currentPage = 1;

// function toggleClass(e, toggleClassName) {
//   if(e.className.includes(toggleClassName)) {
//     e.className = e.className.replace(' ' + toggleClassName, '');
//   } else {
//     e.className += ' ' + toggleClassName;
//   }
// }

// function movePage(e, page) {
//   if (page == currentPage) {
//     currentPage+=2;
//     toggleClass(e, "left-side");
//     toggleClass(e.nextElementSibling, "left-side");
    
//   }
//   else if (page = currentPage - 1) {
//     currentPage-=2;
//     toggleClass(e, "left-side");
//     toggleClass(e.previousElementSibling, "left-side");
//   }
  
// }




let scrollValue = 0;
const maxScroll = 300;
const minScale = 1;
const maxScale = 1.7;

const background = document.querySelector(".room");
const windowElement = document.querySelector(".window");
const zoomContainer = document.querySelector(".zoom-container");
const mball = document.querySelector(".mball");
const tablet = document.querySelector(".tablet");
const clouds = document.querySelector(".clouds");
const frm = document.querySelector(".frm");
const darkOverlay = document.querySelector(".dark-overlay");

const cloudLeftTop = document.querySelector(".cloud-left-top");
const cloudRightTop = document.querySelector(".cloud-right-top");
const cloudLeftBottom = document.querySelector(".cloud-left-bottom");
const cloudRightBottom = document.querySelector(".cloud-right-bottom");


const stepSound = new Audio("https://res.cloudinary.com/dtawhdjlp/video/upload/v1742077416/audios/Shag_erveqa.mp3");
stepSound.volume = 0.6;
stepSound.preload = "auto";

let soundEnabled = false;
let isLightOn = false;
let isTransitioning = false;
let isScrolling = false;
let stepProgress = 0;
let lastStepTime = 0;

const magicBall = document.querySelector(".mball-container");
const clickHint = document.querySelector(".click-hint");

// 🔦 Фонарь мягко следует за курсором
document.addEventListener("mousemove", (e) => {
    if (!isLightOn) {
        let x = e.clientX;
        let y = e.clientY;

        requestAnimationFrame(() => {
            darkOverlay.style.maskImage = `radial-gradient(circle 6rem at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)`;
            darkOverlay.style.webkitMaskImage = `radial-gradient(circle 6rem at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)`;
        });
    }
});

// 🔮 Нажатие на магический шар включает свет
magicBall.addEventListener("click", () => {
    if (!soundEnabled) {
        stepSound.play().catch(() => {});
        stepSound.pause();
        soundEnabled = true;

        clickHint.textContent = "Иди вперёд (скролл)";
        document.querySelector(".mball").style.animation = "none";

        darkOverlay.classList.remove("light-off");
        darkOverlay.classList.add("light-on");
        isLightOn = true;
    }
});

// 📜 Скролл → убираем текст мгновенно
window.addEventListener("wheel", () => {
    if (soundEnabled) {
        clickHint.style.opacity = "0";
        clickHint.style.visibility = "hidden";
    }
});

// 🦶 Плавные шаги + звук (БЕЗ ЗАЛИПАНИЯ!)
function animateStep() {
    if (!isScrolling || scrollValue >= maxScroll * 0.8) return;

    stepProgress += 0.08;
    let stepOffset = Math.sin(stepProgress) * 4;
    background.style.transform = `translateY(${stepOffset}px) scale(${minScale + (scrollValue / maxScroll) * (maxScale - minScale)})`;

    let now = Date.now();
    if (soundEnabled && now - lastStepTime > 400) {
        stepSound.currentTime = 0;
        stepSound.play();
        lastStepTime = now;
    }

    requestAnimationFrame(animateStep);
}

// 📜 Основной скролл (ВОЗВРАЩАЕМ ОБЛАКА!)
window.addEventListener("wheel", (e) => {
    if (isTransitioning) return;

    isScrolling = true;
    setTimeout(() => { isScrolling = false; }, 200);

    scrollValue += e.deltaY * 0.03;
    scrollValue = Math.max(0, Math.min(maxScroll, scrollValue));

    let scale = minScale + (scrollValue / maxScroll) * (maxScale - minScale);

    if (scrollValue < maxScroll * 0.8) {
        requestAnimationFrame(animateStep);
    } else {
        stepProgress = 0;
        background.style.transform = `scale(${scale})`;
    }

    // 📌 Окно и портал (80%)
    if (scrollValue > maxScroll * 0.8) {
        windowElement.classList.add("opened");
        zoomContainer.classList.add("opened");
    } else {
        windowElement.classList.remove("opened");
        zoomContainer.classList.remove("opened");
    }

    // 🔮 Исчезновение объектов (85%)
    if (scrollValue > maxScroll * 0.85) {
        mball.style.opacity = "0";
        tablet.style.opacity = "0";
        windowElement.style.opacity = "0";
    } else {
        mball.style.opacity = "1";
        tablet.style.opacity = "1";
        windowElement.style.opacity = "1";
    }

    // ☁️ **ОБЛАКА СНОВА РАЗЪЕЗЖАЮТСЯ**
    if (scrollValue > maxScroll * 0.8) {
        let shiftX = ((scrollValue - maxScroll * 0.85) / (maxScroll * 0.15)) * 100;
        let shiftY = ((scrollValue - maxScroll * 0.85) / (maxScroll * 0.15)) * 50;

        cloudLeftTop.style.transform = `translateX(-${shiftX}vw) translateY(-${shiftY}vh)`;
        cloudRightTop.style.transform = `translateX(${shiftX}vw) translateY(-${shiftY}vh)`;
        cloudLeftBottom.style.transform = `translateX(-${shiftX}vw) translateY(${shiftY * 1.5}vh)`;
        cloudRightBottom.style.transform = `translateX(${shiftX}vw) translateY(${shiftY * 1.5}vh)`;
    }

    // 🌙 Луна уходит вверх (85%)
    if (scrollValue > maxScroll * 0.85) {
        let moonShift = ((scrollValue - maxScroll * 0.85) / (maxScroll * 0.15)) * 120;
        zoomContainer.style.transform = `translateY(-${moonShift}%)`;

        let roomOpacity = 1 - (scrollValue - maxScroll * 0.85) / (maxScroll * 0.15);
        background.style.opacity = roomOpacity;
    }

    // 🌫 **ОБЛАКА ПАДАЮТ ВНИЗ (95%)**
    if (scrollValue > maxScroll * 0.95) {
        let fallShift = ((scrollValue - maxScroll * 0.95) / (maxScroll * 0.05)) * 100;
        cloudLeftTop.style.transform = `translateY(${fallShift}vh)`;
        cloudRightTop.style.transform = `translateY(${fallShift}vh)`;
        cloudLeftBottom.style.transform = `translateY(${fallShift}vh)`;
        cloudRightBottom.style.transform = `translateY(${fallShift}vh)`;
    }

    // 🌀 Когда луна ушла, `frm` плавно появляется
    if (scrollValue >= maxScroll) {
        isTransitioning = true;

        zoomContainer.style.transition = "transform 2s ease-out";
        zoomContainer.style.transform = "translateY(-250%)";

        frm.style.transition = "transform 1.8s ease-in-out, opacity 1.5s ease-in-out";
        frm.classList.add("active");

        // ☁️ **Облака уезжают вниз полностью**
        clouds.style.transition = "transform 2.5s ease-in-out, opacity 1.5s ease-in-out";
        clouds.style.transform = "translateY(100vh)";

        setTimeout(() => {
            background.classList.add("hidden");
            isTransitioning = false;
        }, 1500);
    }
});


// === СВЕТЛЯЧКИ ===

function createFirefly() {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    
    let startX = Math.random() * window.innerWidth; // Рандомная начальная позиция по X
    let startY = Math.random() * window.innerHeight; // Рандомная начальная позиция по Y
    let duration = Math.random() * 3 + 2; // Разная скорость полета

    firefly.style.left = `${startX}px`;
    firefly.style.top = `${startY}px`;
    document.body.appendChild(firefly);

    firefly.animate([
        { transform: `translateZ(0) scale(0.5)`, opacity: 0 },
        { transform: `translateZ(200px) scale(1.5)`, opacity: 1 },
        { transform: `translateZ(400px) scale(0.8)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: "ease-out",
        fill: "forwards"
    });

    // Удаляем после завершения анимации
    setTimeout(() => {
        firefly.remove();
    }, duration * 1000);
}

// Запускаем светлячков при прокрутке
window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) { // Летим только если скроллим вниз
        for (let i = 0; i < 3; i++) {
            setTimeout(createFirefly, i * 200);
        }
    }
});

  

  /* Функция, создающая частицы при нажатии на кнопку PlayButton*/
  function pop(e) {
    let amount = 30;
     if (e.target.dataset.type === 'shadow' || e.target.dataset.type === 'line') {
       amount = 60;
     }
    
     // Получаем координаты центра кнопки
     const bbox = e.target.getBoundingClientRect();
     const x = bbox.left + bbox.width / 2;
     const y = bbox.top + bbox.height / 2;
    
     // Создаем заданное количество частиц
     for (let i = 0; i < amount; i++) {
       createParticle(x, y, e.target.dataset.type);
     }
   }

   /* Функция создания отдельных частиц */
   function createParticle(x, y, type) {
     const particle = document.createElement('div');
     particle.classList.add('particle');
     document.body.appendChild(particle);
    
     let size = Math.floor(Math.random() * 30 + 10);
     let destinationX = (Math.random() - 0.5) * 200; // Разброс частиц по горизонтали
     let destinationY = (Math.random() - 0.5) * 200; // Разброс частиц по вертикали
     let rotation = Math.random() * 520;
     let delay = Math.random() * 200;

     // Если тип частицы - символ, создаем сердечко с разными цветами
     if (type === 'symbol') {
       particle.innerHTML = '&#9829;';
       const colors = ['#E3B0F0', '#BD5DDE', '#9721FF'];
      particle.style.color = colors[Math.floor(Math.random() * colors.length)];
       particle.style.fontSize = `${size}px`;
     }

     particle.style.width = `${size}px`;
     particle.style.height = `${size}px`;
     particle.style.left = `${x}px`;
     particle.style.top = `${y}px`;
     particle.style.position = 'absolute';
    
     // Анимация движения и исчезновения частиц
     const animation = particle.animate([
       {
         transform: `translate(-50%, -50%) scale(1) rotate(0deg)`,
         opacity: 1
       },
       {
         transform: `translate(${destinationX}px, ${destinationY}px) scale(0.5) rotate(${rotation}deg)`,
        opacity: 0
       }
     ], {
       duration: Math.random() * 1000 + 1500,
       easing: 'ease-out',
       delay: delay
     });
    
     // Удаляем частицу после завершения анимации
     animation.onfinish = () => particle.remove();
   }

   // Назначаем обработчик события клика на кнопку
   document.getElementById("buttonPlay").addEventListener("click", pop);
  


// === SWIPER СЛАЙДЕР ===

    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        speed: 1500,
        centeredSlides: true,
        slidesPerView: 3,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        },
        breakpoints: {
            0: {  
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {  
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {  
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    });




// Ускорение видео заднего фона
const video = document.querySelector('video');
if (video) video.playbackRate = 2;


// === ВОСПРОИЗВЕДЕНИЕ ЗВУКА ПРИ ПРОКРУТКЕ ===
const slideAudio = document.querySelector(".showcase__audio");
const popupWrapperShow = document.querySelector(".popup-wrapper.show");

function playSound() {
    if (slideAudio && !popupWrapperShow) {
        slideAudio.play().catch(error => console.log(`Автовоспроизведение заблокировано: ${error.message}`, error));
        slideAudio.play().catch(error => console.log("Автовоспроизведение заблокировано:", error));
    }
}

showSlider.on("slideChangeTransitionStart", playSound);
document.querySelectorAll(".swiper-slide").forEach(slide => {
    slide.addEventListener("click", playSound);
});

// === ВОСПРОИЗВЕДЕНИЕ ЗВУКА ПРИ НАЖАТИИ PlayButton ===


// === ПОПАПЫ ===

window.onload = function () {
   

    // Массив попапов
     const moodData = {
        "Радость": { 
            title: "Мёд и&nbsp;травы", 
            text1: "Этот аромат воплощает умиротворение и&nbsp;тепло. Натуральный мёд сочетается с&nbsp;ароматом свежесобранных трав – полевых ромашек, шалфея и&nbsp;мяты. В&nbsp;сочетании эти ароматы дарят чувство глубокой гармонии и&nbsp;расслабления, успокаивая нервы и&nbsp;позволяя замедлиться в&nbsp;суматохе повседневности.", 
            text2: "Аромат «Мёд и&nbsp;травы» способствует глубокому расслаблению, снижению стресса и&nbsp;достижению внутреннего равновесия. Он&nbsp;помогает отключиться от&nbsp;внешнего мира, сосредоточиться на&nbsp;настоящем моменте и&nbsp;окунуться в&nbsp;атмосферу умиротворения. Идеально подходит для&nbsp;состояния спокойствия, когда хочется восстановить силы и&nbsp;найти тишину для&nbsp;размышлений." 
        },
        "Спокойствие": { 
            title: "Апельсин с&nbsp;розмарином и&nbsp;кардамоном", 
            text1: "В&nbsp;этой композиции апельсин становится источником бодрости и&nbsp;оптимизма. Розмарин помогает сбалансировать яркость апельсина, придавая аромату глубину и&nbsp;изысканность, а&nbsp;также напоминая о&nbsp;спокойствии средиземноморских пейзажей. Кардамон завершает композицию, добавляя экзотическую теплоту и&nbsp;мягкую пряность.", 
            text2: "Аромат «Апельсин с&nbsp;розмарином и&nbsp;кардамоном» действует как&nbsp;настоящий взрыв свежести. Он&nbsp;стимулирует воображение, побуждает к&nbsp;творчеству и&nbsp;наполняет пространство ощущением праздника, при&nbsp;этом сохраняя баланс между яркостью и&nbsp;глубиной." 
        },
        "Грусть": { 
            title: "Печёное яблоко с&nbsp;корицы и&nbsp;ноткой карамели", 
            text1: "Тёплый, уютный аромат печёного яблока с&nbsp;корицы, слегка приправленного карамелью, создаёт ощущение тихой, немного ностальгической грусти. Он&nbsp;напоминает уютный осенний вечер, когда за&nbsp;окном моросит дождь, а&nbsp;в&nbsp;доме пахнет свежей выпечкой и&nbsp;тёплыми пряностями. Этот запах вызывает чувство глубокой меланхолии, согревая душу и&nbsp;одновременно заставляя вспоминать минувшие моменты, полные тёплой, но&nbsp;печальной красоты.", 
            text2: "Аромат помогает погрузиться в&nbsp;размышления, позволяя ощутить всю глубину грусти, но&nbsp;при&nbsp;этом дарит мягкое чувство утешения, словно старые, любимые воспоминания согревают сердце." 
        },
        "Вдохновение": { 
            title: "Лимонный сорбет с&nbsp;имбирем и&nbsp;свежей мятой", 
            text1: "Яркий и&nbsp;освежающий аромат лимонного сорбета, дополненный лёгкой пикантностью имбиря и&nbsp;свежестью мяты, пробуждает творческие силы и&nbsp;дарит заряд энергии. Этот запах напоминает о&nbsp;свежем дыхании весны, когда всё вокруг начинает расцветать, и&nbsp;каждая нота аромата – это как&nbsp;вдохновение для&nbsp;новых идей. Он&nbsp;одновременно освежает и&nbsp;стимулирует ум, открывая новые горизонты для&nbsp;воображения.", 
            text2: "Аромат вызывает мгновенное чувство прилива творчества и&nbsp;бодрости, словно каждое вдохновение становится ярким аккордом в&nbsp;симфонии жизни, побуждая к&nbsp;новым свершениям и&nbsp;идеям." 
        },
        "Усталость": { 
            title: "Свежесваренный кофе с&nbsp;поджаренными орехами и&nbsp;лёгкой ванилью", 
            text1: "Этот аромат создан для&nbsp;того, чтобы оживить и&nbsp;зарядить энергией. Насыщенный, бодрящий запах свежесваренного кофе, дополненный тёплыми нотами поджаренных орехов и&nbsp;нежной ванилью, словно приглашает на&nbsp;короткий перерыв, чтобы восстановить силы. Он&nbsp;вызывает ассоциации с&nbsp;утренними ритуалами, когда первая чашка кофе способна разбудить даже самую сонную душу, даря заряд бодрости и&nbsp;ясности.", 
            text2: "Аромат быстро взбодрит, словно волна энергии, помогая избавиться от&nbsp;накопившейся усталости и&nbsp;давая ощущение обновления и&nbsp;готовности к&nbsp;новым свершениям." 
        },
        "Растерянность": { 
            title: "Свежеиспечённое ванильное печенье с&nbsp;лёгким оттенком белого персика", 
            text1: "Мягкий, немного сладкий аромат свежеиспечённого ванильного печенья, с&nbsp;тонкими нюансами белого персика, создаёт ощущение утончённой, тёплой растерянности. Он&nbsp;напоминает о&nbsp;тех моментах, когда всё вокруг кажется немного неопределённым, но&nbsp;при&nbsp;этом наполнено уютом и&nbsp;детской нежностью. Этот запах вызывает ассоциации с&nbsp;домашним теплом, когда в&nbsp;воздухе витает запах свежей выпечки, способной успокоить нервы и&nbsp;подарить чувство безопасности.", 
            text2: "Аромат помогает обрести ясность в&nbsp;моменты замешательства, напоминая, что&nbsp;даже в&nbsp;состоянии растерянности можно найти утешение и&nbsp;спокойствие, словно возвращаясь к&nbsp;самым простым и&nbsp;родным вещам." 
        }
        };

  
        const buttons = document.querySelectorAll(".features");

        if (!buttons.length) return;
        
        let popupWrapper = document.querySelector(".popup-wrapper");
        if (!popupWrapper) return;
        
        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
        
                const mood = button.getAttribute("data-mood");
                if (!moodData[mood]) return;
        
                const popupTitle = popupWrapper.querySelector("#popup-title");
                const popupText1 = popupWrapper.querySelector("#popup-text1");
                const popupText2 = popupWrapper.querySelector("#popup-text2");
        
                if (!popupTitle || !popupText1 || !popupText2) return;
        
                popupTitle.innerHTML = moodData[mood].title;
                popupText1.innerHTML = moodData[mood].text1;
                popupText2.innerHTML = moodData[mood].text2;
        
                popupWrapper.classList.add("show");
                document.querySelector(".showcase__content-wrapper").classList.add("blurred");
                document.querySelector(".potiontext").classList.add("blurred");
        
                const closeButton = popupWrapper.querySelector(".popup-close");
                if (!closeButton.dataset.listenerAdded) {
                    closeButton.addEventListener("click", function () {
                        popupWrapper.classList.remove("show");
                        document.querySelector(".showcase__content-wrapper").classList.remove("blurred");
                        document.querySelector(".potiontext").classList.remove("blurred");
                    });
                    closeButton.dataset.listenerAdded = "true";
                }
            });
        });
        
        // Закрытие попапа при клике вне него
        document.addEventListener("click", function (e) {
            if (!popupWrapper.classList.contains("show")) return;
        
            if (!e.target.closest(".popup") && !e.target.classList.contains("features")) {
                popupWrapper.classList.remove("show");
                document.querySelector(".showcase__content-wrapper").classList.remove("blurred");
                document.querySelector(".potiontext").classList.remove("blurred");
            }
        });
        
    

};



// === ПЕРЕХОДЫ МЕЖДУ СЕКЦИЯМИ ===
function showSection(to, delay = 0) {
    setTimeout(() => {
        // Скрываем все секции
        document.querySelectorAll("section").forEach(section => {
            section.classList.add("hidden");
        });

        // Отображаем нужную секцию
        const toSection = document.getElementById(to);
        if (!toSection) {
            console.error(`❌ Ошибка: секция #${to} не найдена`);
            return;
        }

        toSection.classList.remove("hidden");
        toSection.style.opacity = "1";

        // Если переходим к showcase, обновляем Swiper и ставим "Спокойствие" по центру
        if (to === "showcase") {
            setTimeout(() => {
                showSlider.update();
                showSlider.slideTo(getSlideIndex("Спокойствие"), 0);
            }, 100);
        }
    }, delay);
}

// Функция получения индекса слайда по настроению
function getSlideIndex(mood) {
    let slides = document.querySelectorAll(".swiper-slide");
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].querySelector(".features")?.textContent.trim() === mood) {
            return i;
        }
    }
    return 0; // Если не нашли, по умолчанию первый слайд
}

// Обработчик клика по кнопке "Начать игру" с задержкой перед переходом
document.getElementById("buttonPlay")?.addEventListener("click", function (e) {
    pop(e); // Запускаем анимацию частиц

    // Ждем 2.5 секунды перед переходом
    showSection("showcase", 2000);
});

// Переход от showcase к choiceScreen
document.querySelector(".emotion")?.addEventListener("click", function () {
    showSection("choiceScreen");
});

// ==Массив жанров == //


const genresByMood = {
    joy: [
        { name: "Фэнтези", arcana: "Маг", description: "Мир волшебства, магии и великих приключений." },
        { name: "Приключения", arcana: "Дурак", description: "Опасные путешествия и неожиданные открытия." },
        { name: "Хоррор", arcana: "Повешенный", description: "Ощущение страха, леденящие душу тайны." }
    ],
    calm: [
        { name: "Классика", arcana: "Иерофант", description: "Вечные произведения, наполняющие смыслом." },
        { name: "Драма", arcana: "Сила", description: "Глубокие переживания, испытания и борьба." },
        { name: "Психологический триллер", arcana: "Луна", description: "Напряжённые события и загадки разума." }
    ],
    sadness: [
        { name: "Романтическая проза", arcana: "Императрица", description: "Чувственные истории о любви и жизни." },
        { name: "Исторический роман", arcana: "Император", description: "Путешествия во времени и судьбы людей." },
        { name: "Детектив", arcana: "Правосудие", description: "Расследования, преступления и поиски истины." }
    ],
    inspiration: [
        { name: "Научная фантастика", arcana: "Звезда", description: "Технологии будущего и великие открытия." },
        { name: "Экшн", arcana: "Колесница", description: "Динамичные события, погони и схватки." },
        { name: "Трагедия", arcana: "Смерть", description: "Сильные эмоции, неизбежные потери и катарсис." }
    ],
    tiredness: [
        { name: "Готическая литература", arcana: "Дьявол", description: "Мрачные тайны, заброшенные замки и судьбы." },
        { name: "Философский роман", arcana: "Отшельник", description: "Размышления о жизни, судьбе и смысле." },
        { name: "Мистика", arcana: "Жрица", description: "Скрытые знания, предчувствия и судьбоносные знаки." }
    ],
    confusion: [
        { name: "Юмор", arcana: "Солнце", description: "Забавные истории, поднимающие настроение." },
        { name: "Сказка", arcana: "Колесо Фортуны", description: "Волшебные истории, где добро побеждает зло." },
        { name: "Романтика", arcana: "Влюблённые", description: "Сердечные переживания, чувства и судьба." }
    ]
};

// == Массив книг == //

const books = [
    {
        genre: "Приключения",
        tarot: "Дурак",
        books: [
            { title: "Тим Талер или Проданный смех", author: "Джеймс Крюс", link: "https://www.livelib.ru/book/1008965113-tim-taler-ili-prodannyj-smeh-dzhejms-kryus" },
            { title: "Необыкновенные приключения Синего человека", author: "Луи Буссенар", link: "" },
            { title: "Остров Погибших Кораблей", author: "Александр Беляев", link: "https://www.livelib.ru/book/1005721498-ostrov-pogibshih-korablej-aleksandr-belyaev" },
            { title: "Посмертные записки Пиквикского клуба", author: "Чарльз Диккенс", link: "https://www.livelib.ru/book/1010032225-posmertnye-zapiski-pikvikskogo-kluba-charlz-dikkens" },
            { title: "Лес повешенных лисиц", author: "Арто Паасилинна", link: "https://www.litres.ru/book/arto-paasilinna-2/les-poveshennyh-lisic-68024696/" }
        ]
    },
    {
        genre: "Фэнтези",
        tarot: "Маг",
        books: [
            { title: "Отдел 15к", author: "Андрей Васильев", link: "" },
            { title: "Профессиональный некромант", author: "Александра Лисина", link: "https://www.litres.ru/book/aleksandra-lisina/professionalnyy-nekromant-pentalogiya-v-odnom-tome-67769349/" },
            { title: "Академия последнего шанса", author: "Александра Шервинская", link: "https://www.litres.ru/series/akademiya-poslednego-shansa-831019/?art_types=text_book" },
            { title: "Адвокат вампира", author: "Елена Комарова, Юлия Луценко", link: "https://www.litres.ru/book/elena-komarova-32391450/advokat-vampira-68751342/" },
            { title: "Джекаби", author: "Уильям Риттер", link: "https://www.litres.ru/book/uillyam-ritter/dzhekabi-23565844/" }
        ]
    },
    {
        genre: "Романтическая проза",
        tarot: "Императрица",
        books: [
            { title: "Дом на краю ночи", author: "Кэтрин Бэннер", link: "https://www.litres.ru/book/ketrin-benner/dom-na-krau-nochi-24615144/" },
            { title: "Ежевичная зима", author: "Сара Джио", link: "https://www.litres.ru/book/sara-dzhio/ezhevichnaya-zima-8494418/" },
            { title: "Время гладить кошек", author: "Ринат Валиуллин", link: "https://www.litres.ru/book/rinat-valiullin/vremya-gladit-koshek-70759645/" },
            { title: "Ожог от северного сияния", author: "Наталия Беззубенко", link: "https://www.litres.ru/book/nataliya-bezzubenko/ozhog-ot-severnogo-siyaniya-70184023/" },
            { title: "Птифур. Шоколадное сердце кондитера", author: "Анна Муссен", link: "https://www.litres.ru/book/anna-mussen-18487531/ptifur-shokoladnoe-serdce-konditera-69325936/" }
        ]
    },
    {
        genre: "Классика",
        tarot: "Иерофант",
        books: [
            { title: "Скорбь Сатаны", author: "Мария Корелли", link: "https://www.litres.ru/book/mariya-korelli/skorb-satany-42383431/" },
            { title: "Чайка Джонатан Ливингстон", author: "Ричард Бах", link: "https://www.litres.ru/book/richard-bah/chayka-dzhonatan-livingston-39848905/" },
            { title: "Мартин Иден", author: "Джек Лондон", link: "https://www.litres.ru/book/dzhek-london/martin-iden-119433/" },
            { title: "Парфюмер. История одного убийцы", author: "Патрик Зюскинд", link: "https://www.litres.ru/book/patrik-zuskind/parfumer-istoriya-odnogo-ubiycy-134668/" },
            { title: "Большие надежды", author: "Чарльз Диккенс", link: "" }
        ]
    },

    {
        genre: "Экшн",
        tarot: "Колесница",
        books: [
            { title: "Дом лжи", author: "Дэвид Эллис", link: "https://www.litres.ru/book/devid-ellis/dom-lzhi-70254631/" },
            { title: "Тринадцать", author: "Стив Кавана", link: "https://www.litres.ru/book/stiv-kavana/trinadcat-69030028/" },
            { title: "Институт", author: "Стивен Кинг", link: "https://www.litres.ru/book/stiven-king/institut-51598283/" },
            { title: "Безвозвратность", author: "Anne Dar", link: "https://www.litres.ru/book/anne-dar/bezvozvratnost-70920784/" },
            { title: "Идеальный мир для социопата", author: "Олег Сапфир", link: "https://www.litres.ru/book/oleg-sapfir-32864530/idealnyy-mir-dlya-sociopata-71655337/" }
        ]
    },
    {
        genre: "Мистика",
        tarot: "Жрица",
        books: [
            { title: "Пока течёт река", author: "Диана Сеттерфилд", link: "" },
            { title: "Дом на болотах", author: "Зои Сомервилл", link: "https://www.litres.ru/book/zoi-somervill/dom-na-bolotah-70078456/" },
            { title: "Избушка на краю омута", author: "Полина Луговцова", link: "https://www.litres.ru/book/polina-lugovcova/izbushka-na-krau-omuta-43437991/" },
            { title: "Гретель и её бесы", author: "Герман Рыльский, Тамара Рыльская", link: "https://www.litres.ru/book/german-rylskiy/gretel-i-ee-besy-69162838/" },
            { title: "История с кладбищем", author: "Нил Гейман", link: "https://www.litres.ru/book/nil-geyman/istoriya-s-kadbischem-650505/" }
        ]
    },
    {
        genre: "Исторический роман",
        tarot: "Император",
        books: [
            { title: "Король зимы", author: "Бернард Корнуэлл", link: "https://www.litres.ru/book/bernard-kornuell/korol-zimy-139688/" },
            { title: "Мария Стюарт", author: "Стефан Цвейг", link: "" },
            { title: "Татуировщик из Освенцима", author: "Хезер Моррис", link: "" },
            { title: "Княгиня Ольга. Невеста из чащи", author: "Елизавета Дворецкая", link: "https://www.litres.ru/book/elizaveta-dvoreckaya/knyaginya-olga-nevesta-iz-chaschi-11655424/" },
            { title: "Столпы земли", author: "Кен Фоллетт", link: "https://www.litres.ru/book/ken-follett-2/stolpy-zemli-120560/" }
        ]
    },
    {
        genre: "Романтика",
        tarot: "Влюблённые",
        books: [
            { title: "Слёзы чёрной вдовы", author: "Анастасия Логинова", link: "https://www.litres.ru/book/anastasiya-loginova-22307416/slezy-chernoy-vdovy-35254625/" },
            { title: "Пока не закончатся звёзды", author: "Инма Рубиалес", link: "https://www.litres.ru/book/inma-rubiales-33242677/poka-ne-zakonchatsya-zvezdy-71343136/" },
            { title: "Академия проклятий", author: "Елена Звёздная", link: "" },
            { title: "Королёк – птичка певчая", author: "Решад Нури Гюнтекин", link: "https://www.litres.ru/book/reshad-nuri-guntekin/korolek-ptichka-pevchaya-137236/" },
            { title: "Гамбит Королевы", author: "Элизабет Фримантл", link: "" }
        ]
    },
    {
        genre: "Драма",
        tarot: "Сила",
        books: [
            { title: "Хроники странствующего кота", author: "Хиро Арикава", link: "https://www.livelib.ru/tag/%D0%B4%D1%80%D0%B0%D0%BC%D0%B0" },
            { title: "Вероника решает умереть", author: "Пауло Коэльо", link: "https://www.livelib.ru/selection/863-sotsialnopsihologicheskie-dramy" },
            { title: "Милые кости", author: "Элис Сиболд", link: "https://www.livelib.ru/selection/863-sotsialnopsihologicheskie-dramy" },
            { title: "Всё закончится на нас", author: "Колин Гувер", link: "https://www.litres.ru/book/kolin-guver/vse-zakonchitsya-na-nas-54908589/" },
            { title: "Одиночество Мередит", author: "Клэр Александер", link: "https://www.litres.ru/book/kler-aleksander/odinochestvo-meredit-70732636/" }
        ]
    },
    {
        genre: "Философский роман",
        tarot: "Отшельник",
        books: [
            { title: "Час откровения", author: "Мюриель Барбери", link: "https://www.litres.ru/book/muriel-barberi/chas-otkroveniya-68910903/" },
            { title: "Там, где растёт синий", author: "Юна Летц", link: "https://www.litres.ru/book/una-letc/tam-gde-rastet-siniy-6574102/" },
            { title: "Молитва к звёздам", author: "Арина Зарудко", link: "https://www.litres.ru/book/arina-zarudko/molitva-k-zvezdam-64032861/" },
            { title: "Волшебная гора", author: "Томас Манн", link: "https://www.litres.ru/book/tomas-mann/volshebnaya-gora-8600333/" },
            { title: "О дивный новый мир", author: "Олдос Леонард Хаксли", link: "https://www.litres.ru/book/oldos-leonard-haksli/o-divnyy-novyy-mir-14332383/" }
        ]
    },
    {
        genre: "Сказка",
        tarot: "Колесо Фортуны",
        books: [
            { title: "Страна сказок. За гранью сказки", author: "Крис Колфер", link: "https://www.livelib.ru/book/1002731347-strana-skazok-za-granyu-skazki-kris-kolfer" },
            { title: "Страшные сказки с Чёрного корабля", author: "Крис Пристли", link: "https://www.livelib.ru/book/1007578921-strashnye-skazki-s-chjornogo-korablya-kris-pristli" },
            { title: "Ходячий замок", author: "Диана Уинн Джонс", link: "https://www.litres.ru/book/diana-uinn-dzhons/hodyachiy-zamok-133804/" },
            { title: "Ведьма Дивнозёрья", author: "Алан Чароит", link: "" },
            { title: "Рождественский поросёнок", author: "Дж. К. Роулинг", link: "https://www.litres.ru/book/dzhoan-ketlin-rouling/rozhdestvenskiy-porosenok-66549392/" }
        ]
    },
    {
        genre: "Детектив",
        tarot: "Правосудие",
        books: [
            { title: "Ледяная река", author: "Ариэль Лохен", link: "https://www.litres.ru/book/ariel-lohen/ledyanaya-reka-71274922/" },
            { title: "Тайна Дома трёх вязов", author: "Валентен Мюссо", link: "https://www.litres.ru/book/valentin-musso/tayna-doma-treh-vyazov-71595916/" },
            { title: "Опасная игра бабули. Руководство по раскрытию собственного убийства", author: "Кристен Перрин", link: "https://www.litres.ru/book/kristen-perrin/opasnaya-igra-babuli-rukovodstvo-po-raskrytiu-sobstvennogo-70990000/" },
            { title: "Последнее дело Холмса", author: "Артуро Перес-Реверте", link: "https://www.litres.ru/book/arturo-peres-reverte/poslednee-delo-holmsa-70884097/" },
            { title: "Наблюдатель", author: "Шарлотта Линк", link: "https://www.litres.ru/book/sharlotta-link/nabludatel-69958261/" }
        ]
    },
    {
        genre: "Хоррор",
        tarot: "Повешенный",
        books: [
            { title: "Никто не уйдет живым", author: "Адам Нэвилл", link: "https://www.litres.ru/book/adam-nevill-2/nikto-ne-uydet-zhivym-51683354/" },
            { title: "Зеркальная страна", author: "Кэрол Джонстон", link: "https://www.litres.ru/book/kerol-dzhonston/zerkalnaya-strana-67859586/" },
            { title: "Воображаемый друг", author: "Стивен Чбоски", link: "https://www.litres.ru/book/stiven-chboski/voobrazhaemyy-drug-8738564/" },
            { title: "Призрак в лунном свете", author: "Говард Филлипс Лавкрафт", link: "https://www.litres.ru/book/govard-lavkraft/prizrak-v-lunnom-svete-67698759/" },
            { title: "Колыбельная", author: "Чак Паланик", link: "https://www.litres.ru/book/chak-palanik/kolybelnaya-139503/" }
        ]
    },
    {
        genre: "Трагедия",
        tarot: "Смерть",
        books: [
            { title: "Запах стекла", author: "Джеймс Карден", link: "https://www.litres.ru/book/dzheyms-karden/zapah-stekla-71723581/" },
            { title: "О дивный тленный мир. Когда смерть – дело жизни", author: "Хейли Кэмпбелл", link: "https://www.litres.ru/book/heyli-kempbell/o-divnyy-tlennyy-mir-kogda-smert-delo-zhizni-68958093/" },
            { title: "Обреченный", author: "Чеченский Алекс", link: "https://www.litres.ru/book/rash-rashidovich-hadakan/obrechennyy-57329401/" },
            { title: "Между виной и любовью", author: "Ирина Колин", link: "https://www.litres.ru/book/irina-kolin/mezhdu-vinoy-i-lubovu-70519159/" },
            { title: "Ад бесконечных страданий", author: "Максим Ставрогин", link: "https://www.litres.ru/book/maksim-stavrogin-32448456/ad-beskonechnyh-stradaniy-68897043/" }
        ]
    },
    {
        genre: "Готическая литература",
        tarot: "Дьявол",
        books: [
            { title: "Тень ветра", author: "Карлос Руис Сафон", link: "https://www.litres.ru/book/karlos-ruis-safon/ten-vetra-143699/" },
            { title: "Ловец чудес", author: "Рита Хоффман", link: "https://www.litres.ru/book/rita-hoffman/lovec-chudes-70619998/" },
            { title: "Мемуары Дьявола", author: "Фредерик Сулье", link: "https://www.litres.ru/book/frederik-sule/memuary-dyavola-68686944/" },
            { title: "Книга Готель", author: "Мэри МакМайн", link: "https://www.litres.ru/book/meri-makmayn/kniga-gotel-70642273/" },
            { title: "Мастер и Маргарита", author: "Михаил Булгаков", link: "https://www.litres.ru/book/mihail-bulgakov/master-i-margarita-illustrirovannoe-izdanie-24434994/" }
        ]
    },
    {
        genre: "Научная фантастика",
        tarot: "Звезда",
        books: [
            { title: "Тропой человека", author: "Ник Ричмонд", link: "https://www.litres.ru/book/nik-richmond/tropoy-cheloveka-70951555/" },
            { title: "Цветы для Элджернона", author: "Дэниел Киз", link: "https://www.litres.ru/book/deniel-kiz/cvety-dlya-eldzhernona-145410/" },
            { title: "Пикник на обочине", author: "Аркадий и Борис Стругацкие", link: "https://www.litres.ru/book/arkadiy-i-boris-strugackie/piknik-na-obochine-127607/" },
            { title: "Николас Эймерик, инквизитор", author: "Валерио Эванджелисти", link: "https://www.litres.ru/book/valerio-evandzhelisti/nikolas-eymerik-inkvizitor-71382556/" },
            { title: "Новый Вавилон", author: "Мишель Бюсси", link: "https://www.litres.ru/book/mishel-bussi/novyy-vavilon-71199055/" }
        ]
    },

    {
        genre: "Психологический триллер",
        tarot: "Луна",
        books: [
            { title: "За спиной", author: "Майк Омер", link: "https://www.litres.ru/book/mayk-omer/za-spinoy-71603914/" },
            { title: "Утес чайки", author: "Шарлотта Линк", link: "https://www.litres.ru/book/sharlotta-link/utes-chayki-71335276/" },
            { title: "Одиннадцать подснежников", author: "Ребекка Дзанетти", link: "https://www.litres.ru/book/rebekka-dzanetti/odinnadcat-podsnezhnikov-69576184/" },
            { title: "А затем она исчезла", author: "Клэр Дуглас", link: "https://www.litres.ru/book/kler-duglas/a-zatem-ona-ischezla-71087953/" },
            { title: "Последний пассажир", author: "Уилл Дин", link: "https://www.litres.ru/book/uill-din/posledniy-passazhir-71272687/" }
        ]
    },
    {
        genre: "Юмор / Оптимистичная проза",
        tarot: "Солнце",
        books: [
            { title: "Мужики воскресают по вторникам", author: "Кристина Агатова", link: "https://www.litres.ru/book/kristina-agatova/muzhiki-voskresaut-po-vtornikam-67969005/" },
            { title: "Тяготы домохозяйства", author: "Александр Райн", link: "https://www.litres.ru/book/aleksandr-rayn/tyagoty-domohozyaystva-67823327/" },
            { title: "Полный сантехник", author: "Слава Сэ", link: "https://www.litres.ru/book/slava-se/polnyy-santehnik-39454955/" },
            { title: "Ещё тридцать восемь кошек до сорока", author: "Ольга Назарова", link: "https://www.litres.ru/book/olga-stanislavovna-nazarova/esche-tridcat-vosem-koshek-do-soroka-68944857/" },
            { title: "Другой Холмс, или Великий сыщик глазами очевидцев. Начало", author: "Евгений Бочковский", link: "https://www.litres.ru/book/evgeniy-bochkovskiy/drugoy-holms-ili-velikiy-syschik-glazami-ochevidcev-na-49790050/" }
        ]
    }


];


// Игры
const games = [
    { title: "Таро-квест", link: "#" },
    { title: "Игра в судьбу", link: "#" },
    { title: "Загадка книг", link: "#" },
    { title: "Тень прошлого", link: "#" },
    { title: "Книжное предсказание", link: "#" }
];

// === ВЫБОР ЭМОЦИИ ===
document.querySelectorAll(".features").forEach(button => {
    button.addEventListener("click", function () {
        const mood = this.getAttribute("data-mood");
        const selectedMoodTag = mood.toLowerCase();
        localStorage.setItem("selectedMood", selectedMoodTag);

        // Переход к выбору чтения/игры
        document.querySelector(".showcase").style.display = "none";
        document.querySelector("#choiceScreen").style.display = "block";
    });
});

// === ВЫБОР "ЧИТАТЬ" ===
document.getElementById("btnRead").addEventListener("click", function () {
    document.querySelector("#choiceScreen").style.display = "none";
    document.querySelector("#genreOrFateScreen").style.display = "block";
});

// === ВЫБОР ЖАНРА ===
document.getElementById("btnChooseGenre").addEventListener("click", function () {
    const selectedMoodTag = localStorage.getItem("selectedMood");
    const availableGenres = genres[selectedMoodTag];

    document.querySelector("#genre1").innerText = availableGenres[0];
    document.querySelector("#genre2").innerText = availableGenres[1];
    document.querySelector("#genre3").innerText = availableGenres[2];

    document.querySelector("#genreOrFateScreen").style.display = "none";
    document.querySelector("#genreSelectionScreen").style.display = "block";
});

// === ВЫБОР КОНКРЕТНОГО ЖАНРА ===
document.querySelectorAll(".card-genre").forEach(card => {
    card.addEventListener("click", function () {
        const selectedGenre = this.innerText;
        localStorage.setItem("selectedGenre", selectedGenre);

        document.querySelector("#genreSelectionScreen").style.display = "none";
        document.querySelector("#booksScreen").style.display = "block";
        displayBooks(selectedGenre);
    });
});

// === СЛУЧАЙНЫЙ ВЫБОР ЖАНРА ===
document.getElementById("btnRandomGenre").addEventListener("click", function () {
    const selectedMoodTag = localStorage.getItem("selectedMood");
    const availableGenres = genres[selectedMoodTag];
    const randomGenre = availableGenres[Math.floor(Math.random() * availableGenres.length)];

    localStorage.setItem("selectedGenre", randomGenre);

    document.querySelector("#magicMirrorScreen").style.display = "none";
    document.querySelector("#booksScreen").style.display = "block";
    displayBooks(randomGenre);
});

// === ОТОБРАЖЕНИЕ КНИГ ===
function displayBooks(genreName) {
    const selectedGenre = books.find(g => g.genre === genreName);
    if (!selectedGenre) return;

    const booksContainer = document.getElementById("booksContainer");
    booksContainer.innerHTML = "";

    selectedGenre.books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <a href="${book.link}" target="_blank">Читать эту книгу</a>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// === ВЫБОР "ИГРАТЬ" ===
document.getElementById("btnPlay").addEventListener("click", function () {
    document.querySelector("#choiceScreen").style.display = "none";
    document.querySelector("#gamesScreen").style.display = "block";
    displayGames();
});

// === ОТОБРАЖЕНИЕ ИГР ===
function displayGames() {
    const gamesContainer = document.getElementById("gamesContainer");
    gamesContainer.innerHTML = "";

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <a href="${game.link}">Играть</a>
        `;
        gamesContainer.appendChild(gameCard);
    });
}

// === НАВИГАЦИЯ МЕЖДУ СТРАНИЦАМИ ===
document.querySelectorAll(".btn-back").forEach(button => {
    button.addEventListener("click", function () {
        const targetScreen = this.getAttribute("data-target");
        document.querySelectorAll(".screen").forEach(screen => screen.style.display = "none");
        document.querySelector(`#${targetScreen}`).style.display = "block";
    });
});




