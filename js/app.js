// == МАССИВЫ ==  //

//== Массиво попапов ==//

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

//== Массив жанров ==//

const genresByMood = {
    joy: [
        { name: "Фэнтези", 
            arcana: "Маг", 
            description: "Мир волшебства, магии и великих приключений.", 
            image: "https://i.postimg.cc/Y9W5CBpq/The-Magician.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"
         },
        { name: "Приключения", 
            arcana: "Дурак", 
            description: "Опасные путешествия и неожиданные открытия.", 
            image: "https://i.postimg.cc/q7R00Fhz/Fool.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"
         },
        { name: "Хоррор", 
            arcana: "Повешенный", 
            description: "Ощущение страха, леденящие душу тайны.", 
            image: "https://i.postimg.cc/2SjNFtx2/The-Hanged-Man.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"}
    ],
    calm: [
        { name: "Классика", 
            arcana: "Иерофант", 
            description: "Вечные произведения, наполняющие смыслом.", 
            image: "https://i.postimg.cc/2SHRHxcm/The-Hierophant.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Драма", 
            arcana: "Сила", 
            description: "Глубокие переживания, испытания и борьба.", 
            image: "https://i.postimg.cc/HnQ1BDKP/Power.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Психологический триллер", 
            arcana: "Луна", 
            description: "Напряжённые события и загадки разума.", 
            image: "https://i.postimg.cc/JhGwSBvX/Moon.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"}
    ],
    sadness: [
        { name: "Романтическая проза", 
            arcana: "Императрица", 
            description: "Чувственные истории о любви и жизни.", 
            image: "https://i.postimg.cc/tCNH6bFs/The-Empress.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Исторический роман", 
            arcana: "Император", 
            description: "Путешествия во времени и судьбы людей.", 
            image: "https://i.postimg.cc/T3QGzxPz/Emperor.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Детектив", 
            arcana: "Правосудие", 
            description: "Расследования, преступления и поиски истины.", 
            image: "https://i.postimg.cc/JnHLHBQ8/Justice.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"}
    ],
    inspiration: [
        { name: "Научная фантастика", 
            arcana: "Звезда", 
            description: "Технологии будущего и великие открытия.", 
            image: "https://i.postimg.cc/SQ84yCs7/Star.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Экшн", 
            arcana: "Колесница", 
            description: "Динамичные события, погони и схватки.", 
            image: "https://i.postimg.cc/wTpp3MRK/The-Chariot.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Трагедия", 
            arcana: "Смерть", 
            description: "Сильные эмоции, неизбежные потери и катарсис.", 
            image: "https://i.postimg.cc/sg3sHx3P/Death.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"}
    ],
    tiredness: [
        { name: "Готическая литература", 
            arcana: "Дьявол", 
            description: "Мрачные тайны, заброшенные замки и судьбы.", 
            image: "https://i.postimg.cc/0NBvNCDZ/Devil.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Философский роман", 
            arcana: "Отшельник", 
            description: "Размышления о жизни, судьбе и смысле.", 
            image: "https://i.postimg.cc/mkxGY2dH/Hermit.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Мистика", 
            arcana: "Жрица", 
            description: "Скрытые знания, предчувствия и судьбоносные знаки.", 
            image: "https://i.postimg.cc/HLRGmk1h/The-Priestess.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"}
    ],
    confusion: [
        { name: "Юмор", 
            arcana: "Солнце", 
            description: "Забавные истории, поднимающие настроение.", 
            image: "https://i.postimg.cc/DfqVVhjx/The-sun.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Сказка", 
            arcana: "Колесо Фортуны", 
            description: "Волшебные истории, где добро побеждает зло.", 
            image: "https://i.postimg.cc/zvw4Twbs/The-Wheel-of-Fortune.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"},
        { name: "Романтика", 
            arcana: "Влюблённые", 
            description: "Сердечные переживания, чувства и судьба.", 
            image: "https://i.postimg.cc/d3cz7N1R/The-lovers.png",
            imageArcana: "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png"}
    ]
};

// == Массив книг == //

const books = [
    {
        genre: "Приключения",
        tarot: "Дурак",
        books: [
            { 
                title: "Тим Талер или Проданный смех", 
                author: "Джеймс Крюс", 
                link: "https://www.livelib.ru/book/1008965113-tim-taler-ili-prodannyj-smeh-dzhejms-kryus",
                description: "История мальчика, который продал свой смех дьяволу в обмен на способность выигрывать любые пари. Но стоило ли оно того?",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Необыкновенные приключения Синего человека", 
                author: "Луи Буссенар", 
                link: "",
                description: "Захватывающее путешествие по миру в поисках приключений, спрятанных сокровищ и неожиданных встреч.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Остров Погибших Кораблей", 
                author: "Александр Беляев", 
                link: "https://www.livelib.ru/book/1005721498-ostrov-pogibshih-korablej-aleksandr-belyaev",
                description: "Таинственный остров, на котором собрались корабли, потерпевшие крушение. Здесь герои сталкиваются с неожиданными опасностями и открытиями.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Посмертные записки Пиквикского клуба", 
                author: "Чарльз Диккенс", 
                link: "https://www.livelib.ru/book/1010032225-posmertnye-zapiski-pikvikskogo-kluba-charlz-dikkens",
                description: "Классический английский юмор, забавные приключения и нелепые ситуации, в которые попадают члены Пиквикского клуба.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Лес повешенных лисиц", 
                author: "Арто Паасилинна", 
                link: "https://www.litres.ru/book/arto-paasilinna-2/les-poveshennyh-lisic-68024696/",
                description: "Финская авантюрная история о мужчине, решившем спрятаться от общества в лесу, но внезапно оказавшемся в центре необычных событий.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            }
        ]
    },

    {
        genre: "Фэнтези",
        tarot: "Маг",
        books: [
            { 
                title: "Отдел 15к", 
                author: "Андрей Васильев", 
                link: "",
                description: "Необычная городская фантастика о таинственном отделе, занимающемся расследованием магических преступлений.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Профессиональный некромант", 
                author: "Александра Лисина", 
                link: "https://www.litres.ru/book/aleksandra-lisina/professionalnyy-nekromant-pentalogiya-v-odnom-tome-67769349/",
                description: "Саркастичный и увлекательный роман о некроманте, которому приходится балансировать между учебой и миром живых и мертвых.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Академия последнего шанса", 
                author: "Александра Шервинская", 
                link: "https://www.litres.ru/series/akademiya-poslednego-shansa-831019/?art_types=text_book",
                description: "Фэнтезийная академия, куда попадают те, у кого остался последний шанс изменить судьбу.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Адвокат вампира", 
                author: "Елена Комарова, Юлия Луценко", 
                link: "https://www.litres.ru/book/elena-komarova-32391450/advokat-vampira-68751342/",
                description: "Что делать, если твой клиент - вампир, а ты юрист в мире, где магия - не сказка?",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            },
            { 
                title: "Джекаби", 
                author: "Уильям Риттер", 
                link: "https://www.litres.ru/book/uillyam-ritter/dzhekabi-23565844/",
                description: "Шерлок Холмс, но с мистическим уклоном: детектив с паранормальными способностями расследует загадочные преступления.",
                imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
            }
        ]
    },

    {
    genre: "Романтическая проза",
    tarot: "Императрица",
    books: [
        { 
            title: "Дом на краю ночи", 
            author: "Кэтрин Бэннер", 
            link: "https://www.litres.ru/book/ketrin-benner/dom-na-krau-nochi-24615144/",
            description: "Семейная сага, разворачивающаяся на небольшом итальянском острове, полная любви, тайн и магии.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ежевичная зима", 
            author: "Сара Джио", 
            link: "https://www.litres.ru/book/sara-dzhio/ezhevichnaya-zima-8494418/",
            description: "Трогательная история о любви, потере и судьбах двух женщин, разделенных десятилетиями, но связанных одной тайной.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Время гладить кошек", 
            author: "Ринат Валиуллин", 
            link: "https://www.litres.ru/book/rinat-valiullin/vremya-gladit-koshek-70759645/",
            description: "Философская проза о любви, одиночестве и поиске смысла в привычных вещах.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ожог от северного сияния", 
            author: "Наталия Беззубенко", 
            link: "https://www.litres.ru/book/nataliya-bezzubenko/ozhog-ot-severnogo-siyaniya-70184023/",
            description: "История любви, которая вспыхнула среди холодных северных пейзажей и изменила жизнь героев.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Птифур. Шоколадное сердце кондитера", 
            author: "Анна Муссен", 
            link: "https://www.litres.ru/book/anna-mussen-18487531/ptifur-shokoladnoe-serdce-konditera-69325936/",
            description: "Романтическая история о девушке-кондитере, которой придется разобраться в своих чувствах и найти своё место в жизни.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Классика",
    tarot: "Иерофант",
    books: [
        { 
            title: "Скорбь Сатаны", 
            author: "Мария Корелли", 
            link: "https://www.litres.ru/book/mariya-korelli/skorb-satany-42383431/",
            description: "Готический роман о сделке с дьяволом, иллюзиях богатства и моральном выборе.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Чайка Джонатан Ливингстон", 
            author: "Ричард Бах", 
            link: "https://www.litres.ru/book/richard-bah/chayka-dzhonatan-livingston-39848905/",
            description: "Философская притча о свободе, самопознании и преодолении границ возможного.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Мартин Иден", 
            author: "Джек Лондон", 
            link: "https://www.litres.ru/book/dzhek-london/martin-iden-119433/",
            description: "История молодого писателя, который борется за признание, любовь и своё место в мире.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Парфюмер. История одного убийцы", 
            author: "Патрик Зюскинд", 
            link: "https://www.litres.ru/book/patrik-zuskind/parfumer-istoriya-odnogo-ubiycy-134668/",
            description: "Мрачный и завораживающий роман о гениальном парфюмере с ужасающим даром.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Большие надежды", 
            author: "Чарльз Диккенс", 
            link: "",
            description: "Роман о взрослении, надеждах и разочарованиях, переплетенных с неожиданными поворотами судьбы.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},


{
    genre: "Экшн",
    tarot: "Колесница",
    books: [
        { 
            title: "Дом лжи", 
            author: "Дэвид Эллис", 
            link: "https://www.litres.ru/book/devid-ellis/dom-lzhi-70254631/",
            description: "Напряжённый триллер о заговоре, предательстве и смертельной игре, где правда — лишь иллюзия.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Тринадцать", 
            author: "Стив Кавана", 
            link: "https://www.litres.ru/book/stiv-kavana/trinadcat-69030028/",
            description: "Необычный судебный триллер, где убийца не на скамье подсудимых, а среди присяжных.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Институт", 
            author: "Стивен Кинг", 
            link: "https://www.litres.ru/book/stiven-king/institut-51598283/",
            description: "Жуткая история о детях с необычными способностями, оказавшихся в таинственном учреждении.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Безвозвратность", 
            author: "Anne Dar", 
            link: "https://www.litres.ru/book/anne-dar/bezvozvratnost-70920784/",
            description: "Жёсткий боевик с элементами триллера о человеке, для которого назад дороги нет.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Идеальный мир для социопата", 
            author: "Олег Сапфир", 
            link: "https://www.litres.ru/book/oleg-sapfir-32864530/idealnyy-mir-dlya-sociopata-71655337/",
            description: "Криминальная история с харизматичным антигероем, для которого этот мир — лишь игровая площадка.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Мистика",
    tarot: "Жрица",
    books: [
        { 
            title: "Пока течёт река", 
            author: "Диана Сеттерфилд", 
            link: "",
            description: "Таинственный роман о загадочном ребёнке, появившемся после трагедии на реке.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Дом на болотах", 
            author: "Зои Сомервилл", 
            link: "https://www.litres.ru/book/zoi-somervill/dom-na-bolotah-70078456/",
            description: "Атмосферная готическая история о доме, который хранит жуткие тайны прошлого.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Избушка на краю омута", 
            author: "Полина Луговцова", 
            link: "https://www.litres.ru/book/polina-lugovcova/izbushka-na-krau-omuta-43437991/",
            description: "Леденящий душу мистический триллер о странном доме и его зловещих обитателях.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Гретель и её бесы", 
            author: "Герман Рыльский, Тамара Рыльская", 
            link: "https://www.litres.ru/book/german-rylskiy/gretel-i-ee-besy-69162838/",
            description: "Мрачная сказка для взрослых, где ведьмы и демоны оказываются ближе, чем кажется.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "История с кладбищем", 
            author: "Нил Гейман", 
            link: "https://www.litres.ru/book/nil-geyman/istoriya-s-kadbischem-650505/",
            description: "Увлекательная и немного жуткая сказка о мальчике, выросшем среди духов и призраков.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},

{
    genre: "Исторический роман",
    tarot: "Император",
    books: [
        { 
            title: "Король зимы", 
            author: "Бернард Корнуэлл", 
            link: "https://www.litres.ru/book/bernard-kornuell/korol-zimy-139688/",
            description: "Мрачная и реалистичная версия легенды о короле Артуре, полная битв и интриг.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Мария Стюарт", 
            author: "Стефан Цвейг", 
            link: "",
            description: "Биографический роман о трагической судьбе королевы Шотландии, её любви и борьбе за власть.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Татуировщик из Освенцима", 
            author: "Хезер Моррис", 
            link: "",
            description: "Основанная на реальных событиях история любви, выжившей в ужасах концлагеря.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Княгиня Ольга. Невеста из чащи", 
            author: "Елизавета Дворецкая", 
            link: "https://www.litres.ru/book/elizaveta-dvoreckaya/knyaginya-olga-nevesta-iz-chaschi-11655424/",
            description: "История легендарной княгини Ольги, её силы и борьбы за русскую землю.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Столпы земли", 
            author: "Кен Фоллетт", 
            link: "https://www.litres.ru/book/ken-follett-2/stolpy-zemli-120560/",
            description: "Монументальный роман о строительстве собора, политических интригах и борьбе за власть в Средневековье.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Романтика",
    tarot: "Влюблённые",
    books: [
        { 
            title: "Слёзы чёрной вдовы", 
            author: "Анастасия Логинова", 
            link: "https://www.litres.ru/book/anastasiya-loginova-22307416/slezy-chernoy-vdovy-35254625/",
            description: "Любовный роман с элементами мистики и детектива, где страсть и тайны идут рука об руку.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Пока не закончатся звёзды", 
            author: "Инма Рубиалес", 
            link: "https://www.litres.ru/book/inma-rubiales-33242677/poka-ne-zakonchatsya-zvezdy-71343136/",
            description: "Пронзительная история о первой любви, потерях и звёздах, которые ведут нас по жизни.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Академия проклятий", 
            author: "Елена Звёздная", 
            link: "",
            description: "Магическая академия, где любовь и опасные приключения идут бок о бок.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Королёк – птичка певчая", 
            author: "Решад Нури Гюнтекин", 
            link: "https://www.litres.ru/book/reshad-nuri-guntekin/korolek-ptichka-pevchaya-137236/",
            description: "Трогательная история о сильной женщине, её любви, мечтах и борьбе за счастье.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Гамбит Королевы", 
            author: "Элизабет Фримантл", 
            link: "",
            description: "Исторический роман о страсти, власти и шахматах, где игра ведётся на поле дворцовых интриг.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Драма",
    tarot: "Сила",
    books: [
        { 
            title: "Хроники странствующего кота", 
            author: "Хиро Арикава", 
            link: "https://www.livelib.ru/tag/%D0%B4%D1%80%D0%B0%D0%BC%D0%B0",
            description: "Трогательная история о дружбе, путешествиях и поиске смысла жизни глазами кота.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Вероника решает умереть", 
            author: "Пауло Коэльо", 
            link: "https://www.livelib.ru/selection/863-sotsialnopsihologicheskie-dramy",
            description: "История девушки, оказавшейся в психиатрической клинике, которая заново учится ценить жизнь.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Милые кости", 
            author: "Элис Сиболд", 
            link: "https://www.livelib.ru/selection/863-sotsialnopsihologicheskie-dramy",
            description: "Рассказ убитой девочки о жизни, смерти и том, как её семья справляется с утратой.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Всё закончится на нас", 
            author: "Колин Гувер", 
            link: "https://www.litres.ru/book/kolin-guver/vse-zakonchitsya-na-nas-54908589/",
            description: "Эмоциональный роман о любви, насилии и трудном выборе, который может изменить всё.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Одиночество Мередит", 
            author: "Клэр Александер", 
            link: "https://www.litres.ru/book/kler-aleksander/odinochestvo-meredit-70732636/",
            description: "История о женщине, которая привыкла к одиночеству, но жизнь подбрасывает ей шанс на перемены.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Философский роман",
    tarot: "Отшельник",
    books: [
        { 
            title: "Час откровения", 
            author: "Мюриель Барбери", 
            link: "https://www.litres.ru/book/muriel-barberi/chas-otkroveniya-68910903/",
            description: "Глубокая история о поиске смысла жизни, красоты и истины в искусстве.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Там, где растёт синий", 
            author: "Юна Летц", 
            link: "https://www.litres.ru/book/una-letc/tam-gde-rastet-siniy-6574102/",
            description: "Философская проза о принятии себя, одиночестве и внутренней свободе.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Молитва к звёздам", 
            author: "Арина Зарудко", 
            link: "https://www.litres.ru/book/arina-zarudko/molitva-k-zvezdam-64032861/",
            description: "История о мечтах, вере и стремлении к свету даже в самые тёмные времена.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Волшебная гора", 
            author: "Томас Манн", 
            link: "https://www.litres.ru/book/tomas-mann/volshebnaya-gora-8600333/",
            description: "Классический роман о духовном путешествии, времени и философии бытия.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "О дивный новый мир", 
            author: "Олдос Леонард Хаксли", 
            link: "https://www.litres.ru/book/oldos-leonard-haksli/o-divnyy-novyy-mir-14332383/",
            description: "Антиутопия о мире, где комфорт и технологии подавляют человеческую сущность.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Сказка",
    tarot: "Колесо Фортуны",
    books: [
        { 
            title: "Страна сказок. За гранью сказки", 
            author: "Крис Колфер", 
            link: "https://www.livelib.ru/book/1002731347-strana-skazok-za-granyu-skazki-kris-kolfer",
            description: "Фэнтезийное путешествие в мир сказок, где классические истории оживают заново.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Страшные сказки с Чёрного корабля", 
            author: "Крис Пристли", 
            link: "https://www.livelib.ru/book/1007578921-strashnye-skazki-s-chjornogo-korablya-kris-pristli",
            description: "Жуткие истории в духе старинных легенд, рассказанные загадочным моряком.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ходячий замок", 
            author: "Диана Уинн Джонс", 
            link: "https://www.litres.ru/book/diana-uinn-dzhons/hodyachiy-zamok-133804/",
            description: "Очаровательная история о девушке, превращённой в старуху, и волшебнике, который скрывает тайны.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ведьма Дивнозёрья", 
            author: "Алан Чароит", 
            link: "",
            description: "Магическая история о ведьме, чьи способности могут изменить судьбы целого мира.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Рождественский поросёнок", 
            author: "Дж. К. Роулинг", 
            link: "https://www.litres.ru/book/dzhoan-ketlin-rouling/rozhdestvenskiy-porosenok-66549392/",
            description: "Добрая рождественская сказка о волшебном путешествии в поисках потерянной игрушки.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Детектив",
    tarot: "Правосудие",
    books: [
        { 
            title: "Ледяная река", 
            author: "Ариэль Лохен", 
            link: "https://www.litres.ru/book/ariel-lohen/ledyanaya-reka-71274922/",
            description: "Запутанное расследование в глухой провинции, где холод скрывает страшные тайны.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Тайна Дома трёх вязов", 
            author: "Валентен Мюссо", 
            link: "https://www.litres.ru/book/valentin-musso/tayna-doma-treh-vyazov-71595916/",
            description: "Готический детектив о доме с мрачной историей и преступлении, укрывшемся в прошлом.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Опасная игра бабули.", 
            author: "Кристен Перрин", 
            link: "https://www.litres.ru/book/kristen-perrin/opasnaya-igra-babuli-rukovodstvo-po-raskrytiu-sobstvennogo-70990000/",
            description: "Детективная история, где пожилая леди берётся за расследование собственного убийства.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Последнее дело Холмса", 
            author: "Артуро Перес-Реверте", 
            link: "https://www.litres.ru/book/arturo-peres-reverte/poslednee-delo-holmsa-70884097/",
            description: "Альтернативный взгляд на Шерлока Холмса и его последнее, самое загадочное дело.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Наблюдатель", 
            author: "Шарлотта Линк", 
            link: "https://www.litres.ru/book/sharlotta-link/nabludatel-69958261/",
            description: "Психологический триллер, где за жизнью героев наблюдает тот, кто скрывается в тени.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Хоррор",
    tarot: "Повешенный",
    books: [
        { 
            title: "Никто не уйдет живым", 
            author: "Адам Нэвилл", 
            link: "https://www.litres.ru/book/adam-nevill-2/nikto-ne-uydet-zhivym-51683354/",
            description: "Жуткий хоррор о девушке, поселившейся в доме, полном кошмаров и ужасных тайн.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Зеркальная страна", 
            author: "Кэрол Джонстон", 
            link: "https://www.litres.ru/book/kerol-dzhonston/zerkalnaya-strana-67859586/",
            description: "Мрачный и атмосферный роман о таинственном зеркале, открывающем дверь в другой мир.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Воображаемый друг", 
            author: "Стивен Чбоски", 
            link: "https://www.litres.ru/book/stiven-chboski/voobrazhaemyy-drug-8738564/",
            description: "Жуткая история о мальчике, исчезнувшем на несколько дней и вернувшемся с 'другом'.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Призрак в лунном свете", 
            author: "Говард Филлипс Лавкрафт", 
            link: "https://www.litres.ru/book/govard-lavkraft/prizrak-v-lunnom-svete-67698759/",
            description: "Классическая готическая новелла Лавкрафта, наполненная ужасом и потусторонними силами.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Колыбельная", 
            author: "Чак Паланик", 
            link: "https://www.litres.ru/book/chak-palanik/kolybelnaya-139503/",
            description: "Странный и пугающий роман о смертельной колыбельной, уносящей жизни тех, кто её слышит.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Трагедия",
    tarot: "Смерть",
    books: [
        { 
            title: "Запах стекла", 
            author: "Джеймс Карден", 
            link: "https://www.litres.ru/book/dzheyms-karden/zapah-stekla-71723581/",
            description: "Глубокая и мрачная история о судьбе и неизбежности, окутанная символизмом.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "О дивный тленный мир. Когда смерть – дело жизни", 
            author: "Хейли Кэмпбелл", 
            link: "https://www.litres.ru/book/heyli-kempbell/o-divnyy-tlennyy-mir-kogda-smert-delo-zhizni-68958093/",
            description: "Исследование культуры смерти и людей, работающих с ней ежедневно.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Обреченный", 
            author: "Чеченский Алекс", 
            link: "https://www.litres.ru/book/rash-rashidovich-hadakan/obrechennyy-57329401/",
            description: "История о человеке, чья судьба предрешена, и о попытках найти надежду в безысходности.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Между виной и любовью", 
            author: "Ирина Колин", 
            link: "https://www.litres.ru/book/irina-kolin/mezhdu-vinoy-i-lubovu-70519159/",
            description: "Трагическая история любви и морального выбора, ведущего к неизбежным последствиям.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ад бесконечных страданий", 
            author: "Максим Ставрогин", 
            link: "https://www.litres.ru/book/maksim-stavrogin-32448456/ad-beskonechnyh-stradaniy-68897043/",
            description: "Роман, погружающий читателя в бездну человеческих страданий и экзистенциальных вопросов.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Готическая литература",
    tarot: "Дьявол",
    books: [
        { 
            title: "Тень ветра", 
            author: "Карлос Руис Сафон", 
            link: "https://www.litres.ru/book/karlos-ruis-safon/ten-vetra-143699/",
            description: "Таинственная история о проклятой книге, скрывающей мрачные тайны прошлого.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ловец чудес", 
            author: "Рита Хоффман", 
            link: "https://www.litres.ru/book/rita-hoffman/lovec-chudes-70619998/",
            description: "Мрачный роман о загадочном артефакте, способном исполнить желания, но за определённую цену.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Мемуары Дьявола", 
            author: "Фредерик Сулье", 
            link: "https://www.litres.ru/book/frederik-sule/memuary-dyavola-68686944/",
            description: "Готический роман о сделке с Дьяволом, влекущей за собой неизбежные последствия.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Книга Готель", 
            author: "Мэри МакМайн", 
            link: "https://www.litres.ru/book/meri-makmayn/kniga-gotel-70642273/",
            description: "Мрачная сказка с элементами мистики о судьбоносных тайнах старинного дома.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Мастер и Маргарита", 
            author: "Михаил Булгаков", 
            link: "https://www.litres.ru/book/mihail-bulgakov/master-i-margarita-illustrirovannoe-izdanie-24434994/",
            description: "Культовый роман о столкновении добра и зла, любви и мистики в советской Москве.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Научная фантастика",
    tarot: "Звезда",
    books: [
        { 
            title: "Тропой человека", 
            author: "Ник Ричмонд", 
            link: "https://www.litres.ru/book/nik-richmond/tropoy-cheloveka-70951555/",
            description: "Футуристическая история о выживании и поиске смысла в бескрайнем космосе.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Цветы для Элджернона", 
            author: "Дэниел Киз", 
            link: "https://www.litres.ru/book/deniel-kiz/cvety-dlya-eldzhernona-145410/",
            description: "Пронзительный роман о гениальности, человечности и трагической цене интеллекта.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Пикник на обочине", 
            author: "Аркадий и Борис Стругацкие", 
            link: "https://www.litres.ru/book/arkadiy-i-boris-strugackie/piknik-na-obochine-127607/",
            description: "Культовый роман о таинственной Зоне и её смертельно опасных аномалиях.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Николас Эймерик, инквизитор", 
            author: "Валерио Эванджелисти", 
            link: "https://www.litres.ru/book/valerio-evandzhelisti/nikolas-eymerik-inkvizitor-71382556/",
            description: "Альтернативная история о мрачных временах инквизиции и паранормальных расследованиях.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Новый Вавилон", 
            author: "Мишель Бюсси", 
            link: "https://www.litres.ru/book/mishel-bussi/novyy-vavilon-71199055/",
            description: "Фантастический триллер о будущем, где память — самая ценная валюта.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Психологический триллер",
    tarot: "Луна",
    books: [
        { 
            title: "За спиной", 
            author: "Майк Омер", 
            link: "https://www.litres.ru/book/mayk-omer/za-spinoy-71603914/",
            description: "Захватывающий триллер о серийном убийце, наблюдающем за своими жертвами из тени.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Утес чайки", 
            author: "Шарлотта Линк", 
            link: "https://www.litres.ru/book/sharlotta-link/utes-chayki-71335276/",
            description: "Психологическая драма о тайнах, спрятанных за стенами уединённого дома на утёсе.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Одиннадцать подснежников", 
            author: "Ребекка Дзанетти", 
            link: "https://www.litres.ru/book/rebekka-dzanetti/odinnadcat-podsnezhnikov-69576184/",
            description: "Женщина становится целью охотника, который оставляет подснежники в знак грядущего убийства.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "А затем она исчезла", 
            author: "Клэр Дуглас", 
            link: "https://www.litres.ru/book/kler-duglas/a-zatem-ona-ischezla-71087953/",
            description: "Мрачная история о пропавшей девушке и расследовании, ведущем к шокирующей правде.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Последний пассажир", 
            author: "Уилл Дин", 
            link: "https://www.litres.ru/book/uill-din/posledniy-passazhir-71272687/",
            description: "Триллер с элементами хоррора: круизный лайнер превращается в ловушку без выхода.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
},
{
    genre: "Юмор / Оптимистичная проза",
    tarot: "Солнце",
    books: [
        { 
            title: "Мужики воскресают по вторникам", 
            author: "Кристина Агатова", 
            link: "https://www.litres.ru/book/kristina-agatova/muzhiki-voskresaut-po-vtornikam-67969005/",
            description: "Забавный роман о сложностях женской жизни, любви и неожиданных поворотах судьбы.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Тяготы домохозяйства", 
            author: "Александр Райн", 
            link: "https://www.litres.ru/book/aleksandr-rayn/tyagoty-domohozyaystva-67823327/",
            description: "Юмористическая история о мужчинах, оказавшихся в роли домохозяек.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Полный сантехник", 
            author: "Слава Сэ", 
            link: "https://www.litres.ru/book/slava-se/polnyy-santehnik-39454955/",
            description: "Лёгкий и весёлый сборник рассказов о повседневных абсурдных ситуациях.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Ещё тридцать восемь кошек до сорока", 
            author: "Ольга Назарова", 
            link: "https://www.litres.ru/book/olga-stanislavovna-nazarova/esche-tridcat-vosem-koshek-do-soroka-68944857/",
            description: "Комичная проза о приключениях женщины, переживающей кризис среднего возраста с котами.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        },
        { 
            title: "Другой Холмс, или Великий сыщик глазами очевидцев. Начало", 
            author: "Евгений Бочковский", 
            link: "https://www.litres.ru/book/evgeniy-bochkovskiy/drugoy-holms-ili-velikiy-syschik-glazami-ochevidcev-na-49790050/",
            description: "Необычный взгляд на приключения Шерлока Холмса с юмористическим уклоном.",
            imageBooks: "https://i.postimg.cc/MT3wpbd7/image-1993764041.png"
        }
    ]
}



];


// Для редактирования определённого экрана без отбрасывания к началу
// window.addEventListener("beforeunload", () => {
//     const activeSection = document.querySelector("section:not(.hidden)"); 
//     if (activeSection) {
//         sessionStorage.setItem("lastSection", activeSection.id);
//     }
// });

// // //  После загрузки страницы возвращаемся к сохранённой секции
// window.addEventListener("load", () => {
//     const lastSection = sessionStorage.getItem("lastSection");
//     if (lastSection) {
//         showSection(lastSection);
//     }
// });

// == АНИМАЦИИ ГЛАВНОГО ЭКРАНА  == //

let scrollValue = 0;
const maxScroll = 300;
const minScale = 1;
const maxScale = 1.7;

const background = document.querySelector(".room");
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
let frmAppeared = false; 

const magicBall = document.querySelector(".mball-container");
const clickHint = document.querySelector(".click-hint");
let hintHidden = false;

function checkScreenSize() {
    if (window.innerWidth < 1200) {
        background.style.display = "none";

        frm.style.display = "block";
        frm.style.opacity = "1";
        frm.style.filter = "blur(0px) contrast(1)";
        frm.classList.remove("show-ink");

        darkOverlay.style.display = "none";
        frmAppeared = true;
    } else {
        background.style.display = "block";

        frm.style.display = "none";
        frm.style.opacity = "0";
        frm.style.filter = "blur(20px) contrast(0.5)";
        frm.classList.remove("show-ink"); // сбрасываем эффект

        darkOverlay.style.display = "block";
        frmAppeared = false;
    }
}



window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);


document.addEventListener("mousemove", (e) => {
    if (!isLightOn && window.innerWidth >= 1200) {
        let x = e.clientX;
        let y = e.clientY;

        requestAnimationFrame(() => {
            darkOverlay.style.maskImage = `radial-gradient(circle 4rem at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)`;
            darkOverlay.style.webkitMaskImage = `radial-gradient(circle 4rem at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)`;
        });
    }
});


magicBall.addEventListener("click", () => {
    if (!soundEnabled) {
        stepSound.play().catch(() => {});
        stepSound.pause();
        soundEnabled = true;

        // Показываем подсказку
        if (clickHint) {
            clickHint.textContent = "Иди вперёд (скролл)";
            clickHint.style.display = "block";
            clickHint.style.opacity = "1";
            clickHint.style.transition = "opacity 0.5s ease, background-color 0.5s ease";
           
        }

        if (mball) {
            mball.style.animation = "none";
        }

        darkOverlay.classList.remove("light-off");
        darkOverlay.classList.add("light-on");
        isLightOn = true;
    }
});

window.addEventListener("wheel", (e) => {
    if (!hintHidden && clickHint && getComputedStyle(clickHint).opacity !== "0") {
        hintHidden = true;

        clickHint.style.opacity = "0";
        clickHint.style.backgroundColor = "transparent";
        

        setTimeout(() => {
            clickHint.textContent = "";
        }, 2000);
    }

    // Блокируем скролл при переходе, на мобилке или если frm уже появился
    if (isTransitioning || window.innerWidth < 1200 || frmAppeared) return;

    isScrolling = true;
    setTimeout(() => { isScrolling = false; }, 200);

    scrollValue += e.deltaY * 0.03;
    scrollValue = Math.max(0, Math.min(maxScroll, scrollValue));

    let scale = minScale + (scrollValue / maxScroll) * (maxScale - minScale);

    // Анимация шага
    if (scrollValue < maxScroll * 0.8) {
        requestAnimationFrame(animateStep);
    } else {
        stepProgress = 0;
        background.style.transform = `scale(${scale})`;
    }

    // Звук шагов
    let now = Date.now();
    if (soundEnabled && now - lastStepTime > 400 && !frmAppeared) {
        stepSound.currentTime = 0;
        stepSound.play();
        lastStepTime = now;
    }

    // Скрытие шарика и планшета при приближении
    if (scrollValue > maxScroll * 0.80) {
        mball.style.opacity = "0";
        tablet.style.opacity = "0";
    } else {
        mball.style.opacity = "1";
        tablet.style.opacity = "1";
    }

    // Движение облаков
    if (scrollValue > maxScroll * 0.8) {
        let shiftX = ((scrollValue - maxScroll * 0.85) / (maxScroll * 0.15)) * 100;
        let shiftY = ((scrollValue - maxScroll * 0.85) / (maxScroll * 0.15)) * 50;

        cloudLeftTop.style.transform = `translateX(-${shiftX}vw) translateY(-${shiftY}vh)`;
        cloudRightTop.style.transform = `translateX(${shiftX}vw) translateY(-${shiftY}vh)`;
        cloudLeftBottom.style.transform = `translateX(-${shiftX}vw) translateY(${shiftY * 1.5}vh)`;
        cloudRightBottom.style.transform = `translateX(${shiftX}vw) translateY(${shiftY * 1.5}vh)`;
    }

    // Смещение камеры и затухание комнаты
    if (scrollValue > maxScroll * 0.85) {
        let moonShift = ((scrollValue - maxScroll * 0.85) / (maxScroll * 0.15)) * 120;
        zoomContainer.style.transform = `translateY(-${moonShift}%)`;

        let roomOpacity = 1 - (scrollValue - maxScroll * 0.85) / (maxScroll * 0.15);
        background.style.opacity = roomOpacity;
    }

    if (scrollValue >= maxScroll && window.innerWidth >= 1200 && !frmAppeared) {
        console.log("🔥 Переход к frm активирован");
        isTransitioning = true;
    
        zoomContainer.style.transition = "transform 1s ease-out";
        zoomContainer.style.transform = "translateY(-250%)";
    
        frm.style.display = "block";
        frm.classList.remove("show-ink");
        
        // Удаляем лишние inline-стили
        frm.style.opacity = "";
        frm.style.filter = "";
        
        requestAnimationFrame(() => {
          void frm.offsetWidth;
          frm.classList.add("show-ink");
          frmAppeared = true;
        });
        
    
        setTimeout(() => {
            background.classList.add("hidden");
            isTransitioning = false;
        }, 1500);
    }
    
    
    
});




function animateStep() {
    if (!isScrolling || scrollValue >= maxScroll * 0.8 || frmAppeared) return;

    stepProgress += 0.08;
    let stepOffset = Math.sin(stepProgress) * 4;
    background.style.transform = `translateY(${stepOffset}px) scale(${minScale + (scrollValue / maxScroll) * (maxScale - minScale)})`;

    let now = Date.now();
    if (soundEnabled && now - lastStepTime > 400 && !frmAppeared) {
        stepSound.currentTime = 0;
        stepSound.play();
        lastStepTime = now;
    }

    requestAnimationFrame(animateStep);
}


// === СВЕТЛЯЧКИ ===

function createFirefly() {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    
    let startX = Math.random() * window.innerWidth; 
    let startY = Math.random() * window.innerHeight; 
    let duration = Math.random() * 3 + 2; 

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

    
    setTimeout(() => {
        firefly.remove();
    }, duration * 1000);
}


window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) { 
        for (let i = 0; i < 3; i++) {
            setTimeout(createFirefly, i * 200);
        }
    }
});

  
// === 2 screen = ///

  /* Функция, создающая частицы при нажатии на кнопку PlayButton */
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
    particle.style.zIndex = "1000";  // 

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


// === 3 screen = //
//  === SWIPER СЛАЙДЕР === //

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

// === ВОСПРОИЗВЕДЕНИЕ ЗВУКА ПРИ НАЖАТИИ PlayButton === (дописать) //

// === showcase screen === //

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

// == Попапы == //
window.onload = function () { 
    console.log("Страница загружена!");

    const buttons = document.querySelectorAll(".features");
    const popupWrapper = document.querySelector(".popup-wrapper");

    if (buttons.length && popupWrapper) {
        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
        
                const mood = button.getAttribute("data-mood");
                if (!moodData[mood]) return;
        
                popupWrapper.querySelector("#popup-title").innerHTML = moodData[mood].title;
                popupWrapper.querySelector("#popup-text1").innerHTML = moodData[mood].text1;
                popupWrapper.querySelector("#popup-text2").innerHTML = moodData[mood].text2;
        
                popupWrapper.classList.add("show");
                document.querySelector(".showcase__content-wrapper").classList.add("blurred");
                document.querySelector(".potiontext").classList.add("blurred");

                // Закрытие по кнопке
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
    }

    // == Карточки жанров ==

    const moodMapping = {
        "Радость": "joy",
        "Спокойствие": "calm",
        "Грусть": "sadness",
        "Вдохновение": "inspiration",
        "Усталость": "tiredness",
        "Растерянность": "confusion"
    };

    // === ВЫБОР ЭМОЦИИ НА SHOWCASE ===
    document.querySelectorAll(".features").forEach(option => {
        option.addEventListener("click", function () {
            const moodName = this.dataset.mood;
            const selectedMoodKey = moodMapping[moodName];
            console.log(`Выбрали: ${moodName} (${selectedMoodKey})`);

            if (!selectedMoodKey) {
                console.error("Нет подходящего жанра для эмоции:", moodName);
                return;
            }

            // **СОХРАНЯЕМ** выбранное настроение
            sessionStorage.setItem("selectedMoodKey", selectedMoodKey);

           
        });
    });

    // === ПЕРЕХОД НА ВЫБОР ЖАНРА ===
    document.getElementById("btnChooseGenre")?.addEventListener("click", function () {
        const selectedMoodKey = sessionStorage.getItem("selectedMoodKey");
        if (!selectedMoodKey) {
            console.error("Не выбрана эмоция! Нельзя выбрать жанр.");
            return;
        }

        console.log("Переход к выбору жанра для:", selectedMoodKey);
        renderGenreCards(selectedMoodKey);
        showSection("genreSelectionScreen");
    });

    // === Переход на выбор жанра или судьбы ===
    document.getElementById("btnRead")?.addEventListener("click", function () {
        showSection("genreOrFateScreen");
    });

    // === Переход в Magic Mirror ===
    document.getElementById("btnRandomGenre")?.addEventListener("click", function () {
        showSection("magicMirrorScreen");
    });
};


// === genreSelectionScreen = //

// Молнии 
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const mirror = document.querySelector(".mirrordame");


const lightningStrikeLength = 25; // Количество сегментов одной молнии
const lightningBoltLength = 15; // Длина одного сегмента
const lightningThickness = 5; // Начальная толщина молнии
const canvasWidth = (canvas.width = 350);
const canvasHeight = (canvas.height = 500);


const createVector = (x, y) => ({ x, y });


const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);


const clearCanvas = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.beginPath();
};


const drawLine = (start, end, thickness, opacity) => {
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.lineTo(end.x, end.y);
  context.lineWidth = thickness;
  context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
  context.shadowBlur = 15;
  context.shadowColor = "#bd9df2";
  context.stroke();
  context.closePath();
};


class Lightning {
  constructor(x, y) {
    this.segments = [];
    this.opacity = 1;
    this.thickness = lightningThickness;

    let startX = x;
    let startY = y;

    for (let i = 0; i < lightningStrikeLength; i++) {
      let endX = getRandomInteger(startX - 10, startX + 10);
      let endY = startY + lightningBoltLength;

      this.segments.push({
        start: createVector(startX, startY),
        end: createVector(endX, endY),
      });

      startX = endX;
      startY = endY;
    }
  }

  draw() {
    this.segments.forEach((segment) => {
      drawLine(segment.start, segment.end, this.thickness, this.opacity);
    });
  }

  fadeOut() {
    this.opacity -= 0.03;
    this.thickness -= 0.2;
  }
}


let lightnings = [];


const createLightningStrike = () => {
  for (let i = 0; i < getRandomInteger(2, 5); i++) {
    let x = getRandomInteger(canvasWidth * 0.2, canvasWidth * 0.8);
    lightnings.push(new Lightning(x, 0));
  }


  mirror.classList.add("shaking");

  setTimeout(() => {
    mirror.classList.remove("shaking");
  }, 500); 
};


const animate = () => {
  clearCanvas();

  lightnings.forEach((lightning) => {
    lightning.draw();
    lightning.fadeOut();
  });


  lightnings = lightnings.filter((lightning) => lightning.opacity > 0);

  requestAnimationFrame(animate);
};


setInterval(createLightningStrike, getRandomInteger(8000, 10000));
animate();

//туманчик 

const mistLayers = document.querySelectorAll('.mist-layer');

function showMist() {
    mistLayers.forEach((mist) => {
        setTimeout(() => {
           
            let randomTop = Math.random() * 70 + 10; // От 10% до 80%
            mist.style.top = `${randomTop}%`;

          
            mist.style.animation = "mistAppear 6s ease-in-out";

           
            setTimeout(() => {
                mist.style.animation = "";
            }, 6000);
        }, Math.random() * 5000); 
    });
}


setInterval(showMist, Math.random() * 7000 + 5000);

showMist(); 


// === ФУНКЦИЯ СОЗДАНИЯ КАРТОЧЕК ЖАНРА ===
function renderGenreCards(moodKey, customGenres = null, targetContainer = null) {
    const genres = customGenres || genresByMood[moodKey];
    const container = targetContainer || document.querySelector(".cards-container");

    if (!container) {
        console.error("Карточки не найдены!");
        return;
    }

    container.innerHTML = ""; 

    let currentlyFlipped = null; 

    genres.forEach((genre, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        if (!targetContainer) {
            if (index === 0) card.classList.add("active");
            else if (index === 1) card.classList.add("next");
        }

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front" style="background: url('${genre.image}') center/cover no-repeat;">
                </div>
                <div class="card-back">  
                    <h3>${genre.name}</h3>
                    <p>${genre.description}</p>
                    <button class="books-btn" data-genre="${genre.name}">Выбрать книги</button>
                </div>
            </div>
        `;

        card.addEventListener("click", (event) => {
            event.stopPropagation();
            if (currentlyFlipped && currentlyFlipped !== card) {
                currentlyFlipped.classList.remove("flipped");
            }

            if (card.classList.contains("flipped")) {
                card.classList.remove("flipped");
                currentlyFlipped = null;
            } else {
                card.classList.add("flipped");
                currentlyFlipped = card;
            }
        });

        container.appendChild(card);

        // Обработчик на кнопку выбора книг
        card.querySelector(".books-btn").addEventListener("click", (event) => {
            event.stopPropagation();
            const genre = event.target.dataset.genre;

            console.log(`📖 Переход к книгам жанра: ${genre}`);

            // Сохраняем выбранный жанр
            sessionStorage.setItem("selectedGenre", genre);
            console.log(`✅ Сохранён жанр: ${genre}`);

            // Переход к экрану с книгами
            showSection("booksScreen");

        });
    });

    document.addEventListener("click", (event) => {
        if (currentlyFlipped && !event.target.closest(".card")) {
            currentlyFlipped.classList.remove("flipped");
            currentlyFlipped = null;
        }
    });
}



// == Mirror Screen == //

    // ===  ПЕРЕХОД НА СЛУЧАЙНЫЙ ВЫБОР ЖАНРА ===
    document.getElementById("btnRandomGenre")?.addEventListener("click", function () {
        if (!selectedMoodKey) {
            console.error("Не выбрана эмоция! Нельзя довериться судьбе.");
            return;
        }

        console.log("Случайный выбор жанра для:", selectedMoodKey);
        const randomGenre = getRandomGenre(selectedMoodKey);
        console.log(`🎲 Вам выпал жанр: ${randomGenre.name}`);

        document.getElementById("randomGenreText").textContent = `Ваш жанр: ${randomGenre.name}`;
        showSection("magicMirrorScreen");
    });


    // ===  ВЫБОР СЛУЧАЙНОГО ЖАНРА ===
    function getRandomGenre(moodKey) {
        const genres = genresByMood[moodKey];
        return genres[Math.floor(Math.random() * genres.length)];
    }



// === Механика рандома в зеркале === //
document.getElementById("btnRevealGenre").addEventListener("click", function () {
    const smokeContainer = document.querySelector(".smoke-container");
    const mirrorGlass = document.querySelector(".mirror-glass");
    const mirror = document.querySelector(".mirror");

    smokeContainer.classList.add("active");

    setTimeout(() => {

        const allGenres = Object.values(genresByMood).flat();
        const randomGenre = allGenres[Math.floor(Math.random() * allGenres.length)];

     
        const oldCard = mirror.querySelector(".card");
        if (oldCard) {
            oldCard.remove();
        }

        const card = document.createElement("div");
        card.classList.add("card", "mirror-card");
        card.innerHTML = `
        <div class="card-inner">
            <div class="card-front" style="background: url('${randomGenre.image}') center/cover no-repeat;">
            </div>
            <div class="card-back">
                <h3>${randomGenre.name}</h3>
                <p>${randomGenre.description}</p>
                <button class="books-btn" data-genre="${randomGenre.name}">Выбрать книги</button>
            </div>
        </div>
    `;
    
    const booksBtn = card.querySelector(".books-btn");
    booksBtn.addEventListener("click", () => {
        const genre = booksBtn.dataset.genre;
        console.log(`📚 Жанр из зеркала: ${genre}`);
        sessionStorage.setItem("selectedGenre", genre);
        showSection("booksScreen");
        setTimeout(() => {
            document.getElementById("cardDeck").classList.remove("hidden");
            document.getElementById("booksContainer").classList.add("hidden");
        }, 300);
    });
    
 
        mirror.appendChild(card);

  
        setTimeout(() => {
            card.classList.add("visible");
            mirrorGlass.classList.add("blurred"); // Добавляем блюр
        }, 500);


        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest(".mirror-card")) {
                card.classList.remove("visible");
                mirrorGlass.classList.remove("blurred");
                setTimeout(() => {
                    card.remove();
                }, 500);
            }
        });
    }, 3000);


    setTimeout(() => {
        smokeContainer.classList.remove("active");
    }, 6000);
});



// == Логика для booksScreen == //

// === Обработчик клика на колоду карт ===
document.getElementById("cardDeck").addEventListener("click", function () {
    const selectedGenre = sessionStorage.getItem("selectedGenre");
    if (!selectedGenre) {
        console.error("⚠️ Жанр не найден в sessionStorage!");
        return;
    }

    renderBooks(selectedGenre); // ВЫЗЫВАЕМ РЕНДЕР КНИГ
});


// === ФУНКЦИЯ РЕНДЕРА КНИГ ===
function renderBooks(genre) {
    console.log(`🃏 Вызов renderBooks() для жанра: ${genre}`);
    
    const booksContainer = document.getElementById("booksContainer");
    const deck = document.getElementById("cardDeck");

    // 1️⃣ Прячем колоду и показываем контейнер
    deck.classList.add("hidden");
    booksContainer.classList.remove("hidden");

    // 🎵 Добавляем звук раскладки карт
    const shuffleSound = new Audio("https://res.cloudinary.com/dtawhdjlp/video/upload/v1742501285/audios/playing-cards-shuffle_u8klfb.mp3");
    shuffleSound.play().catch(err => console.warn("⚠️ Ошибка воспроизведения звука:", err));

    // 2️⃣ Достаём выбранное настроение
    const selectedMoodKey = sessionStorage.getItem("selectedMoodKey");
    console.log(`🌟 Выбранное настроение (ключ): ${selectedMoodKey}`);

    if (!selectedMoodKey) {
        console.error("⚠️ Ошибка: Не найдено выбранное настроение (selectedMoodKey)!");
        return;
    }

    // 3️⃣ Достаём данные по жанру из `books`
    const selectedGenreData = books.find(b => b.genre === genre);

    if (!selectedGenreData) {
        console.error(`❌ Ошибка: Жанр "${genre}" не найден в books!`);
        booksContainer.innerHTML = "<p>😞 Книг в этом жанре не найдено.</p>";
        return;
    }

    const genreBooks = selectedGenreData.books || [];

    console.log(`📖 Найденные книги для жанра "${genre}":`, genreBooks);

    // 4️⃣ Получаем название аркана и картинку
    const genreArcanaName = selectedGenreData.tarot || "Неизвестный Аркан";
    const genreArcanaImage = selectedGenreData.imageArcana || "https://i.postimg.cc/MHH6Cq0L/pngwing-com-10.png";

    console.log(`🔮 Итоговые данные аркана: ${genreArcanaName}, изображение: ${genreArcanaImage}`);

    if (genreBooks.length === 0) {
        console.error("⚠️ Для этого жанра книг нет!");
        booksContainer.innerHTML = "<p>😞 Книг в этом жанре не найдено.</p>";
        return;
    }

    // Очищаем контейнер перед рендером
    booksContainer.innerHTML = "";

    // 5️⃣ Добавляем плавное появление карт с задержкой
    genreBooks.slice(0, 5).forEach((book, index) => {
        if (!book.imageBooks) {
            console.warn(`⚠️ У книги "${book.title}" нет картинки. Пропускаем.`);
            return;
        }

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.style.opacity = "0"; // Сначала скрываем

        bookCard.innerHTML = `
    <div class="book-card-inner">
        <div class="book-card-front">
            <p class="arcana-title"> ${genreArcanaName}</p>
            <h3>${book.title}</h3>
            <img src="${genreArcanaImage}" alt="Аркан" class="arcana-img">
            <p class="bookauthor">${book.author}</p>
        </div>
        <div class="book-card-back">
            <img src="${book.imageBooks}" alt="${book.title}" class="book-cover">
            <p class="descr-book">${book.description}</p>
            <a href="${book.link}" target="_blank" class="read-btn">Читать книгу</a>
        </div>
    </div>
`;

        // 6️⃣ Добавляем анимацию появления
        setTimeout(() => {
            bookCard.style.opacity = "1";
            bookCard.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            console.log(`🎴 Карточка книги добавлена: ${book.title}`);
        }, index * 400);

        // 7️⃣ Добавляем обработчик переворота
        bookCard.addEventListener("click", () => {
            bookCard.classList.toggle("flipped");
        });

        booksContainer.appendChild(bookCard);
    });

    // ⏳ Через 300 мс плавно показываем контейнер
    setTimeout(() => {
        booksContainer.style.opacity = "1";
    }, 300);

    console.log("📌 Итоговое содержимое booksContainer:", booksContainer.innerHTML);
}




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
            console.error(`Ошибка: секция #${to} не найдена`);
            return;
        }

        toSection.classList.remove("hidden");
        toSection.style.opacity = "1";

        // Специальная логика для showcase
        if (to === "showcase") {
            setTimeout(() => {
                showSlider.update();
                showSlider.slideTo(getSlideIndex("Спокойствие"), 0);
            }, 100);
        }
    }, delay);
}

// Получение индекса слайда
function getSlideIndex(mood) {
    let slides = document.querySelectorAll(".swiper-slide");
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].querySelector(".features")?.textContent.trim() === mood) {
            return i;
        }
    }
    return 0; 
}

// Обработчик клика на "Играть"
document.getElementById("buttonPlay")?.addEventListener("click", function (e) {
    pop(e); 
    showSection("showcase", 1500);
});

// Обработчик клика на "Выбрать настроение"
document.querySelector(".emotion")?.addEventListener("click", function () {
    showSection("choiceScreen");
});

// Обработчик клика на "Читать"
document.getElementById("btnRead")?.addEventListener("click", function () {
    showSection("genreOrFateScreen");
});

// Обработчик клика на "Выбрать жанр"
document.getElementById("btnChooseGenre")?.addEventListener("click", function () {
    const selectedMoodKey = sessionStorage.getItem("selectedMoodKey");
    if (!selectedMoodKey) {
        console.error("Не выбрана эмоция! Нельзя выбрать жанр.");
        return;
    }

    console.log("Переход к выбору жанра для:", selectedMoodKey);
    renderGenreCards(selectedMoodKey);
    showSection("genreSelectionScreen");
});

// Обработчик клика на "Довериться судьбе"
document.getElementById("btnRandomGenre")?.addEventListener("click", function () {
    showSection("magicMirrorScreen");
});

document.getElementById("btnPlay").addEventListener("click", function () {
   showSection("choiceGame");
});


// === ПЕРЕХОДЫ МЕЖДУ СЕКЦИЯМИ (КОНЕЦ) === 




// Игры
const games = [
    { title: "Тайны таро", link: "#" },
    { title: "Волшебные кристаллы", link: "#" },
    { title: "Магический пазл", link: "#" },
    { title: "Ловец снов", link: "#" },
    { title: "Книжное предсказание", link: "#" }
];



// // === ОТОБРАЖЕНИЕ ИГР ===
// function displayGames() {
//     const gamesContainer = document.getElementById("gamesContainer");
//     gamesContainer.innerHTML = "";

//     games.forEach(game => {
//         const gameCard = document.createElement("div");
//         gameCard.classList.add("game-card");
//         gameCard.innerHTML = `
//             <h3>${game.title}</h3>
//             <a href="${game.link}">Играть</a>
//         `;
//         gamesContainer.appendChild(gameCard);
//     });
// }





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
