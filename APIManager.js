//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
        console.log(this.data);
    }


    kanyaApi() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: (data) => {
                this.data.quote = data.quote
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
        });
    }

    aboutMeApi() {
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=all-meat&sentences=2&start-with-lorem=1`,
            success: (data) => {
                this.data.aboutMe = data[0]
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    pokemonApi() {
        let id = Math.floor(Math.random() * 100)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
            success: (data) => {
                this.data.pokemon = {
                    data: data.forms[0].name,
                    img: data.sprites.front_default
                }
            }
        })
    }

    userApi() {
        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=7`,
            success: (data) => {
                this.data.user = {
                    firstName: data.results[0].name.first,
                    lastName: data.results[0].name.last,
                    location: data.results[0].location.country,
                    city: data.results[0].location.city,
                    img: data.results[0].picture.large,
                },
                this.data.friends = []
                for (let i = 0; i < 6; i++) {
                    this.data.friends.push({
                        firstName: data.results[i].name.first,
                        lastName: data.results[i].name.last
                    })
                }
            }
        })
    }

}

