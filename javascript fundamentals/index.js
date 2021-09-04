window.onload = init;

function init() {
    //normal function definition
    function namedFunction() {
        console.log("named function called")
    }

    //normal function definition
    const constAnnonymousFunction = function () {
        console.log("annonymous function assigned to const called")
    }

    //arrow function
    const arrowFunction = () => {
        console.log("arrow function called")
    }

    // one line arrow function
    const oneLineArrowFunction = () => /* this is the return statement*/("hello from one line arrow function")

    //equivalent to one line arrow function
    const oneLineNormalArrowFunction = () => {
        return "hello from one line arrow function"
    }

    namedFunction()
    constAnnonymousFunction()
    arrowFunction()
    console.log(oneLineArrowFunction())

    const arr = [1, 2, 3, 4, 5]
    const arr2 = [6, 7, 8]


    document.getElementById("filtered").innerHTML = "filtered array : " + arr.filter(item => item <= 3)

    document.getElementById("mapped").innerHTML = "mapped array : " + arr.map(item => {
        if (item <= 3)
            item = item * 2
        return item
    })

    let sum = 0
    arr.forEach(item => sum += item)
    document.getElementById("foreach").innerHTML = "accumalation by forEach : " + sum


    document.getElementById("reduced").innerHTML = "reduced sum : " + arr.reduce((accumalator, item) => (accumalator += item), 1)

    document.getElementById("spreadarray").innerHTML = "spreadded array : " + [0, ...arr, ...arr2, 9]

    //irregular key must be written as string because - is a special character
    const obj = { id: 2, name: "Ahmed", age: 22, "irregular-key": 10 }

    document.getElementById("object").innerHTML = "our object : " + obj
    document.getElementById("cleanobject").innerHTML = "clean object : " + objToString(obj)
    document.getElementById("spreadobject").innerHTML = "spreaded object : " + objToString({ ...obj, id: 5, job: "engineer" })

    //referencing an object :
    let x = "age"
    console.log(obj.id, obj['irregular-key'], obj[x])

    function objToString(obj) {
        let out = "{\n"
        //template string example
        Object.keys(obj).forEach(key => out += `${key} : ${obj[key]},\n`)

        out += "}"
        return out
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000)
    })
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })
    const promiseResolver = async () => {
        await promise
        console.log("waited 3")
        await promise2
        console.log("waited 2")

        console.log("after promise")
    }

    promiseResolver()

    const ourFetch = (uri, method = "GET", body) => {
        let fetchObj = {
            method: method.toUpperCase(),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }
        if (body && typeof body == "object") {
            fetchObj.body = JSON.stringify(body)
        }
        return fetch(uri, fetchObj).then(data => data.json())
    }

    ourFetch("https://jsonplaceholder.typicode.com/users").then(data => console.log(data))

}
