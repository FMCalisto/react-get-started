// Promise

import loadImage from'./load-image'

let addImg = (src) => {

    let imgElement =
        document.createElement("img")

    imgElement.src = src
    document.body.appendChild(imgElement)

}

Promise.all([
    loadImage('images/image1.png'),
    loadImage('images/image2.png'),
    loadImage('images/image3.png'),
    loadImage('images/image4.png')
])
.then((images) => {
    images.forEach(img => addImg(img.src))
})
