import imagemin from "imagemin";
import jpegRecompress from "imagemin-jpeg-recompress";

const files = await imagemin(["img/*.jpg"], {
    destination: "optimg",
    plugins: [
        jpegRecompress({
            accurate: true,
            max: 70
        })
    ]
});

console.log(files);