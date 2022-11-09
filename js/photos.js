const getPhoto = (id) => {

    if (id == "") {
        alert("Debe ingresar un id")
        return
    }

    const endpoint = "https://jsonplaceholder.typicode.com/photos/"+id
    fetch(endpoint)
    .then((response) => response.json())
    .then((json) => showPhoto(json.url));
    
}

const showPhoto = (url) => {

    photo = document.getElementById("photo")
    photo.src = url

}

consultarBtn = document.getElementById("consultarBtn")
photoId = document.getElementById("photoId")

consultarBtn.addEventListener("click", () => getPhoto(photoId.value))