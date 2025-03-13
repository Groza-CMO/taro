document.addEventListener("DOMContentLoaded", function () {
    // === 1. Инициализация Swiper-слайдера ===
    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        },
        allowTouchMove: true,
        slideToClickedSlide: false,
        breakpoints: {
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 }
        }
    });

    // === 2. Ускорение видео заднего фона ===
    const video = document.querySelector('video');
    if (video) video.playbackRate = 2;

    // === 3. Функция плавного переключения экранов ===
    function showSection(sectionId) {
        document.querySelectorAll("section").forEach(section => {
            section.style.opacity = "0";
            setTimeout(() => {
                section.classList.add("hidden");
            }, 500);
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            setTimeout(() => {
                targetSection.classList.remove("hidden");
                targetSection.style.opacity = "1";
            }, 500);
        }
    }

    // При загрузке показываем только `screen1`
    showSection("screen1");

    // === 4. Частицы (анимация при нажатии) ===
    function createParticle(x, y, type) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);

        let size = Math.floor(Math.random() * 20 + 10);
        let destinationX = (Math.random() - 0.5) * 200;
        let destinationY = (Math.random() - 0.5) * 200;
        let rotation = Math.random() * 520;
        let delay = Math.random() * 200;

        if (type === "symbol") {
            particle.innerHTML = "&#10084;";
            const colors = ["#E3B0F0", "#BD5DDE", "#9721FF"];
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.fontSize = `${size}px`;
        }

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.position = "absolute";

        const animation = particle.animate([
            { transform: "translate(-50%, -50%) scale(1) rotate(0deg)", opacity: 1 },
            { transform: `translate(${destinationX}px, ${destinationY}px) scale(0.5) rotate(${rotation}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 1000 + 1500,
            easing: "ease-out",
            delay: delay
        });

        animation.onfinish = () => particle.remove();
    }

    function pop(e) {
        if (!e.target) return;
        let amount = e.target.dataset.type === "shadow" || e.target.dataset.type === "line" ? 60 : 30;

        const bbox = e.target.getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;

        for (let i = 0; i < amount; i++) {
            createParticle(x, y, e.target.dataset.type);
        }
    }

    const buttonPlay = document.getElementById("buttonPlay");
    if (buttonPlay) {
        buttonPlay.addEventListener("click", pop);
        buttonPlay.addEventListener("click", () => showSection("showcase"));
    }

    // === 5. Попапы ===
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
    
    document.querySelectorAll(".features").forEach(button => {
        button.addEventListener("click", function () {
            const mood = this.getAttribute("data-mood");
            if (!moodData[mood]) return;

            document.getElementById("popup-title").innerText = moodData[mood].title;
            document.getElementById("popup-text1").innerText = moodData[mood].text1;
            document.getElementById("popup-text2").innerText = moodData[mood].text2;

            document.querySelector(".popup-wrapper").classList.add("show");
        });
    });

    document.querySelector(".popup-close")?.addEventListener("click", function () {
        document.querySelector(".popup-wrapper").classList.remove("show");
    });

    // === 6. Анимация карточек книг ===
    document.querySelectorAll(".card-genre").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });

    // === 7. Навигация ===
    document.getElementById("btnRead")?.addEventListener("click", () => showSection("genreOrFateScreen"));
    document.getElementById("btnChooseGenre")?.addEventListener("click", () => showSection("genreSelectionScreen"));
    document.getElementById("btnRandomGenre")?.addEventListener("click", () => showSection("magicMirrorScreen"));
    document.getElementById("btnPlay")?.addEventListener("click", () => showSection("gamesScreen"));

    // === 8. Воспроизведение звука при прокрутке ===
    const slideAudio = document.querySelector(".showcase__audio");

    function playSound() {
        if (slideAudio) {
            slideAudio.play().catch(error => console.log("Ошибка воспроизведения:", error));
        }
    }

    showSlider.on("slideChangeTransitionStart", playSound);

    // === 9. Кнопки "Назад" ===
    document.querySelectorAll(".btn-back").forEach(button => {
        button.addEventListener("click", function () {
            const targetScreen = this.getAttribute("data-target");
            showSection(targetScreen);
        });
    });
});
