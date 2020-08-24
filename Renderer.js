
class Renderer {

    kanyaRender(data) {
        $(".quote-container").empty()
        const source = $("#kanya-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({ data })
        $(".quote-container").append(newHtml)
    }

    aboutMeRender(data) {
        $(".meat-container").empty()
        const source = $("#about-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({ data })
        $(".meat-container").append(newHtml)
    }

    pokemonRender(data) {
        $(".pokemon-container").empty()
        const source = $("#poke-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(data)
        $(".pokemon-container").append(newHtml)
    }


    userRender(data) {
        $(".user-container").empty()
        console.log(data)
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(data)
        $(".user-container").append(newHtml)
    }
    friendsRender(data) {
        $(".friends").empty()
        console.log(data)
        const source = $("#friend-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({data})
        $(".friends-container").append(newHtml)
    }
}
