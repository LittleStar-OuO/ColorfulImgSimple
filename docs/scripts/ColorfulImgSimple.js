function colorfulImg(imgUrl) {
    return new Promise((resolve, reject) => {
        var blockSize = 5,
            defaultRGB = { r: 0, g: 0, b: 0 },
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data,
            width,
            height,
            i = -4,
            length,
            rgb = { r: 0, g: 0, b: 0 },
            count = 0;
        if (!context) {
            reject(defaultRGB);
        }
        var img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = function () {
            height = canvas.height = img.naturalHeight || img.offsetHeight || img.height;
            width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;

            context.drawImage(this, 0, 0);
            try {
                data = context.getImageData(0, 0, width, height);
            } catch (e) {
                reject(defaultRGB);
            }
            length = data.data.length;
            while ((i += blockSize * 4) < length) {
                ++count;
                rgb.r += data.data[i];
                rgb.g += data.data[i + 1];
                rgb.b += data.data[i + 2];
            }
            rgb.r = ~~(rgb.r / count);
            rgb.g = ~~(rgb.g / count);
            rgb.b = ~~(rgb.b / count);
            resolve(rgb);
        };
        img.src = imgUrl;
    });
}