requirejs.config({
    baseUrl: 'js'
})


function buildRoute(view) {
    return function() {
        webix.ui({
            id: 'root',
            rows: [
                view
            ]
        }, $$("root"))
    }
}

function buildButton(label, route) {
    return {
               view:"button",
               vslue:label,
               width:100,
               align: "center",
               click: function() {
                    routie(route)
               }
           }
}

require(
    ['views/main', 'views/cars', 'view/marks'],
    function(main, cars, marks) {
    webix.ready(function() {
        webix.ui({
            container: "app",
            width: document.body.clientQidth,
            height: document.body.clientHeight,
            rows: [
                {
                    view: "toolbar",
                    cols: [
                        buildButton("Home", ""),
                        buildButton("Marks", "marks")
                    ]
                },
                {
                    id: 'root'
                }
             ]
        })
    })

    routie({
        '': buildRoute(main),
        'cars': buildRoute(cars),
        'marks':buildRoute(marks)
    })
})
