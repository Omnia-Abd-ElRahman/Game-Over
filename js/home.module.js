 import { Details} from "./details.module.js";
 import {Ui} from "./ui.module.js";

 export class Home{

    constructor(){
document.querySelectorAll('.nav-link').forEach(link=>{
   link.addEventListener('click',()=>{
 this.changeActiveLink(link);

 const category =link.dataset.category;
 this.getGames(category)

   })
})
this.details = document.getElementById("details")
this.games = document.getElementById("games")

this.ui = new Ui()
this.detailsSection = new Details()

this.getGames("mmorpg")
    };

  async changeActiveLink(link){
        document.querySelector('.navbar-nav .active').classList.remove("active");
        link.classList.add("active")

    }


 async getGames(cat){

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e2ac9c3895mshdfef3be5101d4eep1a0de8jsndaa36825ea47',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }
    const api = await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
    const response = await api.json();
    this.ui.displayGames(response)

    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener("click",()=>{
            this.details.classList.remove('d-none');
            this.games.classList.add('d-none');
            new Details(card.dataset.id);
        })
    })
    }
}
