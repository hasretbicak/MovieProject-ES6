const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url"); 
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");



// Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){

    form.addEventListener("submit", addFilm);  // formdaki submit eventine basıldığında

    document.addEventListener("DOMContentLoaded", function(){   // document başladığında 


        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });

    cardbody.addEventListener("click", deleteFilm);   // cardbodye click eventine basıldığında

    clear.addEventListener("click", clearAllFilms);
}


//Film Ekleme 

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director ==="" || url ===""){

        //Hata
        UI.displayMessage("Tüm Alanları Doldurun!", "danger");
    }
    else{
        //Yeni Film
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm);  // Filmi Arayüze Ekleme

        Storage.addFilmToStorage(newFilm);  // Filmi Storage'a Ekleme

        UI.displayMessage("Film Başarıyla Eklendi...", "success");
    }



    UI.clearInputs(titleElement, directorElement, urlElement);   // ekledikten sonra inputların içerisini silme

    e.preventDefault();
}

// Seçilen Filmi Silme

function deleteFilm(e){

    if(e.target.id === "delete-film"){

        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessage("Film Başarıyla Silindi..", "success");
    }

}

// Bütün Filmleri Silme

function clearAllFilms(){

    if(confirm("Bütün Filmleri Silmek İstediğinizden Emin misiniz?")){

        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage(); 
    }

}

    
