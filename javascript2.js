var branches = {
    "1" : {
        "name" : "MAX WAY MEGA PLANET",
        "adress" : "улица Ниязбек, 1",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "2" : {
        "name" : "MAX WAY AVIASOZLAR",
        "adress" : "улица Авиасозлар, 23",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "3" : {
        "name" : "MAX WAY RISOVIY",
        "adress" : "Узбекистан, Ташкент, Алтынкульская улица, 10",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "4" : {
        "name" : "MAX WAY PARUS",
        "adress" : "улица Катартал, 60/5",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 10:00-03:00",
        "tel" : "+998901156515",
    },
    "5" : {
        "name" : "MAX WAY MAGIC CITY",
        "adress" : "Узбекистан, Ташкент, улица Бабура, 174/6",
        "open" : "Закрыто до 12:00",
        "data" : "Пн-Вс: 12:00-22:00",
        "tel" : "+998901156515",
    },
    "6" : {
        "name" : "MAX WAY SAMARQAND DARVOZA",
        "adress" : "Узбекистан, Ташкент, улица Коратош, 5А",
        "open" : "Закрыто до 10:00",
        "data" : "Пн-Вс: 10:00-22:00",
        "tel" : "+998901156515",
    },
    "7" : {
        "name" : "MAX WAY PARKENT",
        "adress" : "Узбекистан, Ташкент, Яшнободский район, массив Мавлоно Риёзи, 30В",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "8" : {
        "name" : "MAX WAY UNIVERSAM",
        "adress" : "Узбекистан, Ташкент, проспект Амира Темура, 41/3",
        "open" : "Закрыто до 09:00",
        "data" : "Пн-Вс: 09:00-18:00",
        "tel" : "+998901156515",
    },
    "9" : {
        "name" : "MAX WAY ROYSON",
        "adress" : "Узбекистан, Ташкент, улица Заркайнар, 2",
        "open" : "Закрыто до 09:00",
        "data" : "Пн-Вс: 09:00-01:00",
        "tel" : "+998901156515",
    },
    "10" : {
        "name" : "MAX WAY NEXT",
        "adress" : "Узбекистан, Ташкент, улица Бабура, 6",
        "open" : "Закрыто до 10:00",
        "data" : "Пн-Вс: 10:00-22:00",
        "tel" : "+998901156515",
    },
    "11" : {
        "name" : "MAX WAY MUQUMIY",
        "adress" : "Узбекистан, Ташкент, улица Чиланзар",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "12" : {
        "name" : "MAX WAY GRAND MIR",
        "adress" : "Узбекистан, Ташкент, улица Шота Руставели, 9А",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "13" : {
        "name" : "MAX WAY SAYRAM",
        "adress" : "Узбекистан, Ташкент, улица Юнусота",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "14" : {
        "name" : "MAX WAY MAKSIM GORKIY",
        "adress" : "махалля Элобод",
        "open" : "Закрыто до 09:00",
        "data" : "Пн-Вс: 09:00-00:00",
        "tel" : "+998901156515",
    },
    "15" : {
        "name" : "MAX WAY SERGELI",
        "adress" : "Узбекистан, Ташкент, Сергелийский район, массив Сергели-VIIIА, 11",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "16" : {
        "name" : "MAX WAY FONTAN",
        "adress" : "проспект Амира Темура",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },
    "17" : {
        "name" : "MAX WAY MINOR",
        "adress" : "MaxWay",
        "open" : "Открыт до 03:00",
        "data" : "Пн-Вс: 09:00-03:00",
        "tel" : "+998901156515",
    },  
};

var branch = "";
for (var key in branches) {
    branch+='    <div class="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 box">';
    branch+='        <div class="block">';
    branch+='            <div class="row">';
    branch+='                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 name">';
    branch+='                    <div>';
    branch+='                        <h3>'+branches[key].name+'</h3>';
    branch+='                        <p>'+branches[key].adress+'</p>';
    branch+='                    </div>';
    branch+='                </div>';
    branch+='                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 hour">';
    branch+='                    <p>'+branches[key].open+'</p>';
    branch+='                </div>';
    branch+='            </div>';
    branch+='        <hr>';
    branch+='            <div class="row">';
    branch+='                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 work">';
    branch+='                    <div>';
    branch+='                        <p class="data">График работы:</p>';
    branch+='                        <p>'+branches[key].data+'</p>';
    branch+='                    </div>';
    branch+='                </div>';
    branch+='                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 tel">';
    branch+='                    <div>';
    branch+='                        <p class="phone">Телефон:</p>';
    branch+='                        <a href="tel:'+branches[key].tel+'">'+branches[key].tel+'</a>';
    branch+='                    </div>';
    branch+='                </div>';
    branch+='            </div>';
    branch+='        </div>';
    branch+='    </div>';
    branch+='    <div class="col-xl-4 col-lg-4 col-md-2 col-sm-0 col-0 box"></div>';

    document.getElementById('branch1').innerHTML = branch;
































}