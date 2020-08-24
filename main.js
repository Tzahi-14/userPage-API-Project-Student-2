const api = new APIManager()
const render = new Renderer()

$("#load-data").on("click", function () {
    api.kanyaApi()
    api.aboutMeApi()
    api.pokemonApi()
    api.userApi()
})

$("#display").on("click", function () {
    let data = api.data
    console.log(data)
    render.kanyaRender(api.data.quote)
    render.pokemonRender(api.data.pokemon)
    render.friendsRender(api.data.friends)
    render.aboutMeRender(api.data.aboutMe)
    render.userRender(api.data.user)
})
$("#save").on("click",function(){
    localStorage.data = JSON.stringify(api.data)
    console.log(JSON.parse(localStorage.data))
})


$("#load-page").on("click",function(){
    const data = JSON.parse(localStorage.data)
    render.kanyaRender(data.quote)
    render.pokemonRender(data.pokemon)
    render.friendsRender(data.friends)
    render.aboutMeRender(data.aboutMe)
    render.userRender(data.user)
})