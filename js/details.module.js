import { Ui} from "./ui.module.js";
export  class Details{
    constructor(id){
        document.getElementById("btnClose").addEventListener('click',()=>{
            document.getElementById("details").classList.add("d-none");
            document.getElementById("games").classList.remove("d-none")
        });

        this.getDetails(id)

    }
    

    async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e2ac9c3895mshdfef3be5101d4eep1a0de8jsndaa36825ea47',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        const response = await api.json()
        new Ui().displayDetails(response);
    }
}