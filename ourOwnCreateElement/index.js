window.onload = init;

function init() {

    document.getElementById("root").appendChild(createElement("div", { id: 7 }, [createElement("h1", { id: 8 }, ["Hello world"]), createElement("p", { id: 7 }, ["paragraph text"])]))


    function createElement(type, props, children) {
        var node = document.createElement(type)

        if (props) {
            Object.keys(props).forEach(key => {
                node.setAttribute(key, props[key]);
            })
        }

        if (children) {
            children.forEach(child => {
                if (typeof child == "string") {
                    var text = document.createTextNode(child)
                    node.appendChild(text)
                }

                else {
                    node.appendChild(child)

                }
            })
        }

        return node

    }

}
