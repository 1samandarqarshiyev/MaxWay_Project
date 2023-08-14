// MAXBOX ------------------------------------------------------------------------------------------------

var maxboxes = {
    "1" : {
        "img" : "images/maxbox_traditional.png",
        "name" : "Макси BOX Традиция",
        "text" : "Сэндвич Original, картофель-фри, кола 0,4 л, соус на ...",
        "cost" : 35000,
    },
    "2" : {
        "img" : "images/maxbox_known.jpg",
        "name" : "Макси BOX Популярный",
        "text" : "Лаваш Original, картофель-фри, кола 0,4 л, соус на вы...",
        "cost" : 40000,
    },
    "3" : {
        "img" : "images/maxbox_retro.jpg",
        "name" : "Макси BOX Ретро",
        "text" : "Шаурма Original, картофель-фри, кола 0,4 л, соус на ...",
        "cost" : 38000,
    },
    "4" : {
        "img" : "images/maxbox_panini.jpg",
        "name" : "Макси BOX Панини",
        "text" : "Панини Original, картофель-фри, кола 0,4 л, соус на в...",
        "cost" : 38000,
    },
    "5" : {
        "img" : "images/maxbox_trend.jpg",
        "name" : "Макси BOX Тренд",
        "text" : "Гамбургер, картофель-фри, кола 0,4 л, соус на выбор ",
        "cost" : 35000,
    },
    "6" : {
        "img" : "images/minibox.jpg",
        "name" : "Мини BOX",
        "text" : "Лонгер, картофель-фри, coca-cola 0,3 л, соус на выбор",
        "cost" : 25000,
    },
};

var maxbox = '';
for ( var key in maxboxes) {
    maxbox+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    maxbox+='        <div class="block">';
    maxbox+='            <div class="block1">';
    maxbox+='                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    maxbox+='                    <img src="'+maxboxes[key].img+'" alt="" class="img-fluid">';
    maxbox+='                </div>';
    maxbox+='            </div>';
    maxbox+='            <div class="block2">';
    maxbox+='                <div class="row">';
    maxbox+='                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    maxbox+='                        <h5>'+maxboxes[key].name+'</h5>';
    maxbox+='                    </div>';
    maxbox+='                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    maxbox+='                        <p>'+maxboxes[key].text+'</p>';
    maxbox+='                    </div>';
    maxbox+='                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    maxbox+='                        <h5><span>'+maxboxes[key].cost+'</span></h5> <p><span>сум</span></p>';
    maxbox+='                    </div>';
    maxbox+='                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    maxbox+='                        <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    maxbox+='                    </div>';
    maxbox+='                </div>';
    maxbox+='            </div>';
    maxbox+='        </div>';
    maxbox+='    </div>';
};

document.getElementById('maxbox1').innerHTML = maxbox;

// CLUB SANDWICH ----------------------------------------------------------------------------------------

var clubsandwiches = {
    "1" : {
        "img" : "images/klab_sandwich.jpg",
        "name" : "Клаб сэндвич",
        "text" : "Сэндвич Original, картофель-фри, соус на выбор ",
        "cost" : 30000,
    },
    "2" : {
        "img" : "images/sendvich_original.jpg",
        "name" : "Сэндвич Original",
        "text" : "Тостер хлеб, куриный шницель, свежие огурцы, помидоры...",
        "cost" : 25000,
    },
};

var clubsandwich = '';
for ( var key in clubsandwiches) {
    clubsandwich+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    clubsandwich+='        <div class="block">';
    clubsandwich+='            <div class="block1">';
    clubsandwich+='                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    clubsandwich+='                    <img src="'+clubsandwiches[key].img+'" alt="" class="img-fluid">';
    clubsandwich+='                </div>';
    clubsandwich+='            </div>';
    clubsandwich+='            <div class="block2">';
    clubsandwich+='                <div class="row">';
    clubsandwich+='                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    clubsandwich+='                        <h5>'+clubsandwiches[key].name+'</h5>';
    clubsandwich+='                    </div>';
    clubsandwich+='                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    clubsandwich+='                        <p>'+clubsandwiches[key].text+'</p>';
    clubsandwich+='                    </div>';
    clubsandwich+='                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    clubsandwich+='                        <h5><span>'+clubsandwiches[key].cost+'</span></h5> <p><span>сум</span></p>';
    clubsandwich+='                    </div>';
    clubsandwich+='                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    clubsandwich+='                        <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    clubsandwich+='                    </div>';
    clubsandwich+='                </div>';
    clubsandwich+='            </div>';
    clubsandwich+='        </div>';
    clubsandwich+='    </div>';
};

document.getElementById('clubsandwich1').innerHTML = clubsandwich;

// LAVASH ----------------------------------------------------------------------------------------

var lavashes = {
    "1" : {
        "img" : "images/lavash.jpg",
        "name" : "Лаваш",
        "text" : "Лаваш, говяжье мясо-донар, помидор, чипсы, томатный с...",
        "cost" : 25000,
    },
    "2" : {
        "img" : "images/lavash_mini.jpg",
        "name" : "Лаваш мини",
        "text" : "Лаваш, говяжье мясо-донар, помидор, чипсы, томатны...",
        "cost" : 22000,
    },
};

var lavash = '';
for ( var key in lavashes) {
    lavash+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    lavash+='        <div class="block">';
    lavash+='            <div class="block1">';
    lavash+='                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    lavash+='                    <img src="'+lavashes[key].img+'" alt="" class="img-fluid">';
    lavash+='                </div>';
    lavash+='            </div>';
    lavash+='            <div class="block2">';
    lavash+='                <div class="row">';
    lavash+='                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    lavash+='                        <h5>'+lavashes[key].name+'</h5>';
    lavash+='                </div>';
    lavash+='               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    lavash+='                   <p>'+lavashes[key].text+'</p>';
    lavash+='               </div>';
    lavash+='                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    lavash+='                      <h5><span>'+lavashes[key].cost+'</span></h5> <p><span>сум</span></p>';
    lavash+='               </div>';
    lavash+='                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    lavash+='                     <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    lavash+='                 </div>';
    lavash+='              </div>';
    lavash+='          </div>';
    lavash+='       </div>';
    lavash+='   </div>';
};

document.getElementById('lavash1').innerHTML = lavash;

// SHAWARMA ----------------------------------------------------------------------------------------

var shawarmas = {
    "1" : {
        "img" : "images/shawarma.jpg",
        "name" : "Шаурма",
        "text" : "Донар булочка, говяжье мясо-донар, соленые огурцы, пом...",
        "cost" : 25000,
    },
};

var shawarma = '';
for ( var key in shawarmas) {
    shawarma+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    shawarma+='      <div class="block">';
    shawarma+='       <div class="block1">';
    shawarma+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    shawarma+='                 <img src="'+shawarmas[key].img+'" alt="" class="img-fluid">';
    shawarma+='             </div>';
    shawarma+='          </div>';
    shawarma+='          <div class="block2">';
    shawarma+='              <div class="row">';
    shawarma+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    shawarma+='                     <h5>'+shawarmas[key].name+'</h5>';
    shawarma+='             </div>';
    shawarma+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    shawarma+='                <p>'+shawarmas[key].text+'</p>';
    shawarma+='             </div>';
    shawarma+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    shawarma+='                    <h5><span>'+shawarmas[key].cost+'</span></h5> <p><span>сум</span></p>';
    shawarma+='             </div>';
    shawarma+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    shawarma+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    shawarma+='              </div>';
    shawarma+='             </div>';
    shawarma+='       </div>';
    shawarma+='     </div>';
    shawarma+='  </div>';
};

document.getElementById('shawarma1').innerHTML = shawarma;

// DONAR KEBAB ----------------------------------------------------------------------------------------

var donarkebabs = {
    "1" : {
        "img" : "images/donar_kebab.jpg",
        "name" : "Донар кебаб ",
        "text" : "Говяжье донар-мясо, рис с кукурузой, картофель-фри, с...",
        "cost" : 40000,
    },
    "2" : {
        "img" : "images/donarbox.jpg",
        "name" : "Донар BOX",
        "text" : "Говяжье донар-мясо, картофель-фри, рис ",
        "cost" : 35000,
    },
    "3" : {
        "img" : "images/donarbox+cola.jpg",
        "name" : "Донар BOX + 0.4 Coca cola",
        "text" : "Донар BOX, coca-cola разливная 0,4 л ",
        "cost" : 25000,
    },
    "4" : {
        "img" : "images/bread.jpg",
        "name" : "<br>Хлеб",
        "text" : "Мягкая булочка <br>",
        "cost" : 3000,
    },
};

var donarkebab = '';
for ( var key in donarkebabs) {
    donarkebab+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    donarkebab+='   <div class="block">';
    donarkebab+='    <div class="block1">';
    donarkebab+='           <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    donarkebab+='              <img src="'+donarkebabs[key].img+'" alt="" class="img-fluid">';
    donarkebab+='          </div>';
    donarkebab+='       </div>';
    donarkebab+='       <div class="block2">';
    donarkebab+='           <div class="row">';
    donarkebab+='               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    donarkebab+='                 <h5>'+donarkebabs[key].name+'</h5>';
    donarkebab+='          </div>';
    donarkebab+='          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    donarkebab+='             <p>'+donarkebabs[key].text+'</p>';
    donarkebab+='          </div>';
    donarkebab+='           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    donarkebab+='                  <h5><span>'+donarkebabs[key].cost+'</span></h5> <p><span>сум</span></p>';
    donarkebab+='          </div>';
    donarkebab+='            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    donarkebab+='             <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    donarkebab+='            </div>';
    donarkebab+='          </div>';
    donarkebab+='      </div>';
    donarkebab+='    </div>';
    donarkebab+='  </div>';
};

document.getElementById('donarkebab1').innerHTML = donarkebab;

// PANINI ----------------------------------------------------------------------------------------

var paninis = {
    "1" : {
        "img" : "images/panini.jpg",
        "name" : "Панини",
        "text" : "Булочка, говяжье мясо-донар, соленые огурцы, поми...",
        "cost" : 25000,
    },
};

var panini = '';
for ( var key in paninis) {
    panini+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    panini+='      <div class="block">';
    panini+='       <div class="block1">';
    panini+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    panini+='                 <img src="'+paninis[key].img+'" alt="" class="img-fluid">';
    panini+='             </div>';
    panini+='          </div>';
    panini+='          <div class="block2">';
    panini+='              <div class="row">';
    panini+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    panini+='                     <h5>'+paninis[key].name+'</h5>';
    panini+='             </div>';
    panini+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    panini+='                <p>'+paninis[key].text+'</p>';
    panini+='             </div>';
    panini+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    panini+='                    <h5><span>'+paninis[key].cost+'</span></h5> <p><span>сум</span></p>';
    panini+='             </div>';
    panini+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    panini+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    panini+='              </div>';
    panini+='             </div>';
    panini+='       </div>';
    panini+='     </div>';
    panini+='  </div>';
};

document.getElementById('panini1').innerHTML = panini;

// BURGER ----------------------------------------------------------------------------------------

var burgers = {
    "1" : {
        "img" : "images/gamburger.jpg",
        "name" : "Гамбургер",
        "text" : "Булочка гамбургер, соленые огурцы, помидоры, мясная к...",
        "cost" : 22000,
    },
    "2" : {
        "img" : "images/cheese_burger.jpg",
        "name" : "Чизбургер",
        "text" : "Булочка гамбургер, соленые огурцы, помидоры, мясная к...",
        "cost" : 25000,
    },
    "3" : {
        "img" : "images/bigburger.jpg",
        "name" : "Бигбургер",
        "text" : "Булочка гамбургер, соленые огурцы, помидоры, 2 мясной...",
        "cost" : 35000,
    },
};

var burger = '';
for ( var key in burgers) {
    burger+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    burger+='      <div class="block">';
    burger+='       <div class="block1">';
    burger+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    burger+='                 <img src="'+burgers[key].img+'" alt="" class="img-fluid">';
    burger+='             </div>';
    burger+='          </div>';
    burger+='          <div class="block2">';
    burger+='              <div class="row">';
    burger+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    burger+='                     <h5>'+burgers[key].name+'</h5>';
    burger+='             </div>';
    burger+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    burger+='                <p>'+burgers[key].text+'</p>';
    burger+='             </div>';
    burger+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    burger+='                    <h5><span>'+burgers[key].cost+'</span></h5> <p><span>сум</span></p>';
    burger+='             </div>';
    burger+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    burger+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    burger+='              </div>';
    burger+='             </div>';
    burger+='       </div>';
    burger+='     </div>';
    burger+='  </div>';
};

document.getElementById('burger1').innerHTML = burger;

// HOT-DOG ----------------------------------------------------------------------------------------

var hotdogs = {
    "1" : {
        "img" : "images/londer.jpg",
        "name" : "Лонгер",
        "text" : "Информация: Хот-дог булочка, кетчуп, майонез, наггетсы,...",
        "cost" : 15000,
    },
    "2" : {
        "img" : "images/hotdog.jpg",
        "name" : "Хот Дог",
        "text" : "Булочка хот-дог, канадская сосиска,соленые огурцы, по...",
        "cost" : 12000,
    },
    "3" : {
        "img" : "images/kingdog.jpg",
        "name" : "Кинг Дог",
        "text" : "Булочка хот-дог, 2 канадские сосиски, соленые огурцы, ...",
        "cost" : 20000,
    },
    "4" : {
        "img" : "images/cheese_dog.jpg",
        "name" : "Чиз дог",
        "text" : "Булочка хот-дог, канадская сосиска,соленые огурцы, по...",
        "cost" : 15000,
    },
};

var hotdog = '';
for ( var key in hotdogs) {
    hotdog+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    hotdog+='      <div class="block">';
    hotdog+='       <div class="block1">';
    hotdog+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    hotdog+='                 <img src="'+hotdogs[key].img+'" alt="" class="img-fluid">';
    hotdog+='             </div>';
    hotdog+='          </div>';
    hotdog+='          <div class="block2">';
    hotdog+='              <div class="row">';
    hotdog+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    hotdog+='                     <h5>'+hotdogs[key].name+'</h5>';
    hotdog+='             </div>';
    hotdog+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    hotdog+='                <p>'+hotdogs[key].text+'</p>';
    hotdog+='             </div>';
    hotdog+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    hotdog+='                    <h5><span>'+hotdogs[key].cost+'</span></h5> <p><span>сум</span></p>';
    hotdog+='             </div>';
    hotdog+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    hotdog+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    hotdog+='              </div>';
    hotdog+='             </div>';
    hotdog+='       </div>';
    hotdog+='     </div>';
    hotdog+='  </div>';
};

document.getElementById('hotdog1').innerHTML = hotdog;

// SNACK ----------------------------------------------------------------------------------------

var snacks = {
    "1" : {
        "img" : "images/free_kartoshka.jpg",
        "name" : "<br><br>Картофель Фри",
        "text" : "",
        "cost" : 8000,
    },
    "2" : {
        "img" : "images/po_derevenski.jpg",
        "name" : "<br><br>Картофель по-деревенски",
        "text" : "",
        "cost" : 14000,
    },
    "3" : {
        "img" : "images/box.jpg",
        "name" : "BOX",
        "text" : "Стрипсы (2 шт), фри (80 гр), наггетсы (4 шт) ",
        "cost" : 23000,
    },
    "4" : {
        "img" : "images/strips.jpg",
        "name" : "<br><br>Стрипсы",
        "text" : "",
        "cost" : 15000,
    },
    "5" : {
        "img" : "images/naggets.jpg",
        "name" : "<br><br>Наггетсы",
        "text" : "",
        "cost" : 15000,
    },
};

var snack = '';
for ( var key in snacks) {
    snack+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    snack+='      <div class="block">';
    snack+='       <div class="block1">';
    snack+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    snack+='                 <img src="'+snacks[key].img+'" alt="" class="img-fluid">';
    snack+='             </div>';
    snack+='          </div>';
    snack+='          <div class="block2">';
    snack+='              <div class="row">';
    snack+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    snack+='                     <h5>'+snacks[key].name+'</h5>';
    snack+='             </div>';
    snack+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    snack+='                <p>'+snacks[key].text+'</p>';
    snack+='             </div>';
    snack+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    snack+='                    <h5><span>'+snacks[key].cost+'</span></h5> <p><span>сум</span></p>';
    snack+='             </div>';
    snack+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    snack+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    snack+='              </div>';
    snack+='             </div>';
    snack+='       </div>';
    snack+='     </div>';
    snack+='  </div>';
};

document.getElementById('snack1').innerHTML = snack;

// DRINK ----------------------------------------------------------------------------------------

var drinks = {
    "1" : {
        "img" : "images/coca_cola_pour.jpg",
        "name" : "<br>Coca Cola (разлив)",
        "text" : "",
        "cost" : 6000,
    },
    "2" : {
        "img" : "images/coca_cola.jpg",
        "name" : "<br>Coca Cola",
        "text" : "",
        "cost" : 8000,
    },
    "3" : {
        "img" : "images/fanta.jpg",
        "name" : "<br>Fanta",
        "text" : "",
        "cost" : 8000,
    },
    "4" : {
        "img" : "images/fuse_tea.jpg",
        "name" : "<br>Fuse tea",
        "text" : "",
        "cost" : 8000,
    },
    "5" : {
        "img" : "images/dena.jpg",
        "name" : "<br>Сок Dena",
        "text" : "",
        "cost" : 15000,
    },
    "6" : {
        "img" : "images/bonaqua.jpg",
        "name" : "<br>Вода Bonaqua",
        "text" : "",
        "cost" : 3000,
    },
    "7" : {
        "img" : "images/black_tea.jpg",
        "name" : "Чай черный",
        "text" : "Чёрный чай (сахар по вкусу )",
        "cost" : 3000,
    },
    "8" : {
        "img" : "images/green_tea.jpg",
        "name" : "Чай зеленый",
        "text" : "Зеленый чай (сахар по вкусу) ",
        "cost" : 3000,
    },
    "9" : {
        "img" : "images/lemon_tea.jpg",
        "name" : "Чай с лимоном",
        "text" : "Чай с лимоном (сахар по вкусу)",
        "cost" : 6000,
    },
    "10" : {
        "img" : "images/americano.jpg",
        "name" : "Американо",
        "text" : "Натуральный зерновой кофе (эспрессо, вода) ",
        "cost" : 10000,
    },
    "11" : {
        "img" : "images/copuchino.jpg",
        "name" : "Капучино",
        "text" : "Натуральный зерновой кофе (эспрессо, молоко, вода) ",
        "cost" : 12000,
    },
    "12" : {
        "img" : "images/latte.jpg",
        "name" : "Латте",
        "text" : "Натуральный зерновой кофе (эспрессо, молоко, вода) ",
        "cost" : 12000,
    },
    "13" : {
        "img" : "images/disposable_cup.jpg",
        "name" : "<br>Одноразовый стакан",
        "text" : "",
        "cost" : 1000,
    },
};

var drink = '';
for ( var key in drinks) {
    drink+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    drink+='      <div class="block">';
    drink+='       <div class="block1">';
    drink+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    drink+='                 <img src="'+drinks[key].img+'" alt="" class="img-fluid">';
    drink+='             </div>';
    drink+='          </div>';
    drink+='          <div class="block2">';
    drink+='              <div class="row">';
    drink+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    drink+='                     <h5>'+drinks[key].name+'</h5>';
    drink+='             </div>';
    drink+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    drink+='                <p>'+drinks[key].text+'</p>';
    drink+='             </div>';
    drink+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    drink+='                    <h5><span>'+drinks[key].cost+'</span></h5> <p><span>сум</span></p>';
    drink+='             </div>';
    drink+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    drink+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    drink+='              </div>';
    drink+='             </div>';
    drink+='       </div>';
    drink+='     </div>';
    drink+='  </div>';
};

document.getElementById('drink1').innerHTML = drink;

// DESSERT ----------------------------------------------------------------------------------------

var desserts = {
    "1" : {
        "img" : "images/brauni.jpg",
        "name" : "Брауни",
        "text" : "Темный шоколад, грецкие орехи и шоколадный бисквит",
        "cost" : 18000,
    },
    "2" : {
        "img" : "images/tiramusi.jpg",
        "name" : "Тирамису",
        "text" : "Печенье Савоярди, маскарпоне, кофе",
        "cost" : 18000,
    },
    "3" : {
        "img" : "images/san_sebastian.jpg",
        "name" : "Сан-себастьян",
        "text" : "Молочный шоколад, крем-чиз и бисквит ",
        "cost" : 20000,
    },
};

var dessert = '';
for ( var key in desserts) {
    dessert+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    dessert+='      <div class="block">';
    dessert+='       <div class="block1">';
    dessert+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    dessert+='                 <img src="'+desserts[key].img+'" alt="" class="img-fluid">';
    dessert+='             </div>';
    dessert+='          </div>';
    dessert+='          <div class="block2">';
    dessert+='              <div class="row">';
    dessert+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    dessert+='                     <h5>'+desserts[key].name+'</h5>';
    dessert+='             </div>';
    dessert+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    dessert+='                <p>'+desserts[key].text+'</p>';
    dessert+='             </div>';
    dessert+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    dessert+='                   <h5><span>'+desserts[key].cost+'</span></h5> <p><span>сум</span></p>';
    dessert+='             </div>';
    dessert+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    dessert+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    dessert+='              </div>';
    dessert+='             </div>';
    dessert+='       </div>';
    dessert+='     </div>';
    dessert+='  </div>';
};

document.getElementById('dessert1').innerHTML = dessert;

// SAUCE ----------------------------------------------------------------------------------------

var sauces = {
    "1" : {
        "img" : "images/xalapeno.jpg",
        "name" : "Халапеньо",
        "text" : "",
        "cost" : 2000,
    },
    "2" : {
        "img" : "images/ketchup.jpg",
        "name" : "Кетчуп",
        "text" : "",
        "cost" : 2000,
    },
    "3" : {
        "img" : "images/cheese_sous.jpg",
        "name" : "Сырный соус",
        "text" : "",
        "cost" : 2000,
    },
    "4" : {
        "img" : "images/mayonnaise.jpg",
        "name" : "Майонез",
        "text" : "",
        "cost" : 2000,
    },
    "5" : {
        "img" : "images/garlic_sauce.jpg",
        "name" : "Чесночный соус",
        "text" : "",
        "cost" : 2000,
    },
};

var sauce = '';
for ( var key in sauces) {
    sauce+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    sauce+='      <div class="block">';
    sauce+='       <div class="block1">';
    sauce+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    sauce+='                 <img src="'+sauces[key].img+'" alt="" class="img-fluid">';
    sauce+='             </div>';
    sauce+='          </div>';
    sauce+='          <div class="block2">';
    sauce+='              <div class="row">';
    sauce+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    sauce+='                     <h5>'+sauces[key].name+'</h5>';
    sauce+='             </div>';
    sauce+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    sauce+='                <p>'+sauces[key].text+'</p>';
    sauce+='             </div>';
    sauce+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    sauce+='                   <h5><span>'+sauces[key].cost+'</span></h5> <p><span>сум</span></p>';
    sauce+='             </div>';
    sauce+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    sauce+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    sauce+='              </div>';
    sauce+='             </div>';
    sauce+='       </div>';
    sauce+='     </div>';
    sauce+='  </div>';
};

document.getElementById('sauce1').innerHTML = sauce;

// GARNIRY ----------------------------------------------------------------------------------------

var garniries = {
    "1" : {
        "img" : "images/rice.jpg",
        "name" : "Рис с кукурузой",
        "text" : "Сваренный рис лазер со сладкой кукурузой ",
        "cost" : 6000,
    },
    "2" : {
        "img" : "images/salad.jpg",
        "name" : "<br>Салат с капустой",
        "text" : "Салат микс из красной капусты ",
        "cost" : 6000,
    },
};

var garniry = '';
for ( var key in garniries) {
    garniry+='    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 foods">';
    garniry+='      <div class="block">';
    garniry+='       <div class="block1">';
    garniry+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_image">';
    garniry+='                 <img src="'+garniries[key].img+'" alt="" class="img-fluid">';
    garniry+='             </div>';
    garniry+='          </div>';
    garniry+='          <div class="block2">';
    garniry+='              <div class="row">';
    garniry+='                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_name">';
    garniry+='                     <h5>'+garniries[key].name+'</h5>';
    garniry+='             </div>';
    garniry+='             <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 food_text">';
    garniry+='                <p>'+garniries[key].text+'</p>';
    garniry+='             </div>';
    garniry+='              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 summa">';
    garniry+='                   <h5><span>'+garniries[key].cost+'</span></h5> <p><span>сум</span></p>';
    garniry+='             </div>';
    garniry+='               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 button">';
    garniry+='                  <button type="button" class="btn btn-primary btn-sm">Добавить</button>';
    garniry+='              </div>';
    garniry+='             </div>';
    garniry+='       </div>';
    garniry+='     </div>';
    garniry+='  </div>';
};

document.getElementById('garniry1').innerHTML = garniry;