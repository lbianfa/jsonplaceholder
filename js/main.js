const getPost = (id) => {

    if (id == "") {
        alert("Debe ingresar un id")
        return
    }

    const endpoint = "https://jsonplaceholder.typicode.com/posts/"+id
    fetch(endpoint)
    .then((response) => response.json())
    .then((json) => mapearDato(json));
    
}

const mapearDato = (data) => {
    console.log(data)
    userId = document.getElementById("userId")
    title = document.getElementById("title")
    content = document.getElementById("content")

    userId.innerText = data.userId
    title.innerText = data.title
    content.innerText = data.body
}

const deletePost = (id) => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts/"+id
    const options = {
        method: "DELETE"
    }
    fetch(endpoint, options)
    .then((response) => response.json())
    .then((json) => alert("Publicación eliminado correctamente"));
}

consultarBtn = document.getElementById("consultarBtn")
eliminarBtn = document.getElementById("eliminarBtn")
postId = document.getElementById("postId")

consultarBtn.addEventListener("click", () => getPost(postId.value))
eliminarBtn.addEventListener("click", () => deletePost(postId.value))