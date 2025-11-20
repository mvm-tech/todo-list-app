// Zdem polnoy zagruzki DOM pered vypolneniem scripta
//document.addEventListener('DOMContentLoaded', function() {

//Nahodim elementy na stranitse po ih ID y soxranyaem ih v peremennye
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList'); 
//Funkciya dlya dobavleniya novoy zadachi v spisok  

//Funkciya, kotoray  bydet vypolnytsya pri nazatii na knopku "Dobavit"

function addTask() {
    //Poluchaem tekst iz polya vvoda y ubiraem lihnie probely po kraym
    const taskText = taskInput.value.trim(); 
    //Metod trim() udalyaet probely s nachala y kontsa stroki

    //Proveryem, ne pustoe li, pole vvoda
    if (taskText === '') {
        alert('Pozhaluista, vvedite zadachu!');
        return; //Preryvaem vypolnenie funkcii
    }
  

    //Sozdaem novyy element spiska (li)
    const li = document.createElement('li'); //Dinamicheski sozdaiem novyi HTML element, 
  //  a konkretno <li> dlya nashgo spiska zadach
    li.className = 'task-item'; //Dobavlyaem klass dlya stilya

    //Zapolnyem ego HTML-soderzhimym
     //li.innerHTML = `<span>${taskText}</span>       Staryi kod pered dobavleniem check box y zacherkivaniem
    //<button class="delete-btn">Udaliti</button>`;  

   


li.innerHTML = `
<input type="checkbox"
class="complete-checkbox">
<span class="task-text">${taskText}</span>
<button class="delete-btn">Удалить</button>
`;





    //Dobovlyem sozdannyi element <li> v nash spisok <ul>

    taskList.appendChild(li);

    //Ochishchaem pole vvoda posle dobavleniya zadachi

    taskInput.value = '';
    //Stavim fokus obratno v pole vvoda dly udobstva

    taskInput.focus();

  }

    //Shag 3.3: Veshaem obrabotchiki sobytii

  //  Sobytie dly knopki "Dobavit"
  addTaskBtn.addEventListener('click', addTask);

  //Sobytie dlya poly vvoda (dobavlenie po nazhatiy Enter)
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
  });
  //Sobytie dly knopki "Udalit" (ispolzuem delegirovanie sobytii)

    taskList.addEventListener('click', function(event) {
        //Proveryaem, byl li klik po knopke c klassom 'delete-btn'
        if (event.target.classList.contains('delete-btn')) {
            //Naходим roditeley elementa knopki (eto <li>) y udalyaem ego
            const li = event.target.closest('li');
            li.remove();
        }
    
            //Obrabotchik dly otmetki zadachi kak vypolnennoy
            taskList.addEventListener('change', function(event) {
            //Proveryem chto klicnuli imenno po checboxu
            if
            (event.target.classList.contains('complete-checkbox')) {
            const taskText =
            event.target.nextElementSibling;
            // Perekluchaem class 'completed' u texta zadachi

            taskText.classList.toggle('completed');
            }
        });
      });