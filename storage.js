class Storage{


    // Storage'a Film Ekleme

    static addFilmToStorage(newFilm){

        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        localStorage.setItem("films", JSON.stringify(films));
    
    }
     
    
    // Storage'daki Filmleri Getir
    
    static getFilmsFromStorage(){
    
        let films;
    
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{ 
            films = JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    
    }
    
    // Seçilen Filmi Storage'dan Silme
    
    static deleteFilmFromStorage(filmTitle){
    
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film, index){     // Filmler arasında gezinme
    
            if(film.title === filmTitle){  
                films.splice(index,1);   //  objenin içinden 1 index silme
            }
            
        });
    
        localStorage.setItem("films", JSON.stringify(films));  // fili tekrar string hale getirme
    
    }
    
    // Bütün Filmleri Storage'dan Silme
    
    static clearAllFilmsFromStorage(){
    
        localStorage.removeItem("films");
    }
}

