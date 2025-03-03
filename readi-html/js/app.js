

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

  /* Функция, создающая частицы при нажатии на кнопку PlayButton*/
  // function pop(e) {
  //   let amount = 30;
  //   if (e.target.dataset.type === 'shadow' || e.target.dataset.type === 'line') {
  //     amount = 60;
  //   }
    
  //   // Получаем координаты центра кнопки
  //   const bbox = e.target.getBoundingClientRect();
  //   const x = bbox.left + bbox.width / 2;
  //   const y = bbox.top + bbox.height / 2;
    
  //   // Создаем заданное количество частиц
  //   for (let i = 0; i < amount; i++) {
  //     createParticle(x, y, e.target.dataset.type);
  //   }
  // }

  // /* Функция создания отдельных частиц */
  // function createParticle(x, y, type) {
  //   const particle = document.createElement('div');
  //   particle.classList.add('particle');
  //   document.body.appendChild(particle);
    
  //   let size = Math.floor(Math.random() * 20 + 10);
  //   let destinationX = (Math.random() - 0.5) * 200; // Разброс частиц по горизонтали
  //   let destinationY = (Math.random() - 0.5) * 200; // Разброс частиц по вертикали
  //   let rotation = Math.random() * 520;
  //   let delay = Math.random() * 200;

  //   // Если тип частицы - символ, создаем сердечко с разными цветами
  //   if (type === 'symbol') {
  //     particle.innerHTML = '&#10084;';
  //     const colors = ['#E3B0F0', '#BD5DDE', '#9721FF'];
  //     particle.style.color = colors[Math.floor(Math.random() * colors.length)];
  //     particle.style.fontSize = `${size}px`;
  //   }

  //   particle.style.width = `${size}px`;
  //   particle.style.height = `${size}px`;
  //   particle.style.left = `${x}px`;
  //   particle.style.top = `${y}px`;
  //   particle.style.position = 'absolute';
    
  //   // Анимация движения и исчезновения частиц
  //   const animation = particle.animate([
  //     {
  //       transform: `translate(-50%, -50%) scale(1) rotate(0deg)`,
  //       opacity: 1
  //     },
  //     {
  //       transform: `translate(${destinationX}px, ${destinationY}px) scale(0.5) rotate(${rotation}deg)`,
  //       opacity: 0
  //     }
  //   ], {
  //     duration: Math.random() * 1000 + 1500,
  //     easing: 'ease-out',
  //     delay: delay
  //   });
    
  //   // Удаляем частицу после завершения анимации
  //   animation.onfinish = () => particle.remove();
  // }

  // // Назначаем обработчик события клика на кнопку
  // document.getElementById("buttonPlay").addEventListener("click", pop);
  


// === SWIPER СЛАЙДЕР ===
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
        0: {  // 👈 Для всех устройств меньше 480px
            slidesPerView: 1
        },
        480: {  // 👈 От 480px до 640px
            slidesPerView: 2
        },
        640: {  // 👈 От 640px и выше
            slidesPerView: 3
        }
    }
});


// Ускорение видео заднего фона
document.querySelector('video').playbackRate = 2;

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


// === Переходы между секциями ===
const sections = document.querySelectorAll("section");

document.getElementById("buttonPlay").addEventListener("click", function() {
    document.querySelector(".screen1").style.display = "none";
    document.querySelector(".showcase").style.display = "block";
});






