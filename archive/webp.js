var imagemin = require("imagemin"), // The imagemin module.
    webp = require("imagemin-webp"), // imagemin's WebP plugin.
    outputFolder = "./img", // Output folder
    PNGImages = "./img/convert/*.png", // PNG images
    JPEGImages = "./img/convert/*.jpg"; // JPEG images

imagemin([PNGImages], outputFolder, {
    plugins: [webp({
        lossless: false // Losslessly encode images
    })]
});

imagemin([JPEGImages], outputFolder, {
    plugins: [webp({
        quality: 65 // Quality setting from 0 to 100
    })]
});
