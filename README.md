# my-vue3-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


    <div
      class="game_boxs"
      ref="testdiv"
      @click="animateFun"
      :style="{ top: animate.top + 'px', left: animate.left + 'px',transitionDuration:'1S' }"
    ></div>
    动态绑定
    transition-property: all;  //过度动画
    transition-duration: 1s;