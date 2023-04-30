# ColorfulImgSimple
> ColorfulImgSimple是一个能够通过canvas获取图片主题色的js库，它修改自[ColorfulImg](https://github.com/hubingliang/colorfulImg)，现在更便于直接在静态页面中直接引用。

## 起步

引入ColorfulImgSimple
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/LittleStar-OuO/ColorfulImgSimple/ColorfulImgSimple.js"></script>
```

在你的静态页面中使用ColorfulImgSimple

```
<script>
colorfulImg('http://img.xjh.me/random_img.php').then((rgb) => {
	console.log(rgb);
});
</script>
```


