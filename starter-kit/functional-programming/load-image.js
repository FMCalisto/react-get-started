// Promise

import 'babelify/polyfill'

function loadImage(url) {
    return new Promise((resolve, reject) => {

        let image = new Image()

        image.onload = function() {
            resolve(image)
        }

        image.onerror = function() {
            let message =
                'Cloud not load image at ' + url
            reject(new Error(msg))
        }

        image.src = url

    })
}

export default loadImage
