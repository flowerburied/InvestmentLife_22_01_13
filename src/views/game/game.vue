<template>
  <div class="game">
    <!-- <van-button type="primary">{{ layout.labelCol.span }}</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger" @click="toabout">危险按钮</van-button>
    <div id="qrcode"></div> -->
    <div
      class="game_boxs"
      ref="testdiv"
      @click="animateFun"
      :style="{
        top: animate.top + 'px',
        left: animate.left + 'px',
        transitionDuration: '1S',
      }"
    ></div>
    <div class="canvas_box">
      <div class="canvas_box_red"></div>
      <div class="canvas_box_yellow"></div>
      <div class="canvas_box_blue"></div>
      <div class="canvas_box_yellow_sec"></div>
      <div class="canvas_box_red_sec"></div>
      <div class="canvas_box_yellow_third"></div>
      <div class="canvas_box_blue_sec" ref="testdivsec" @click="testfun"></div>
      <div class="canvas_box_yellow_fourth"></div>
    </div>
    <div class="game_btn" @click="animatebox"></div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { qrcanvas } from "qrcanvas";
export default {
  name: "About",
  mounted() {
    console.log("test", this.$store.state.test);
  },
  setup() {
    let store = useStore();
    onMounted(() => {
      // console.log("fromConfig", store.state.test);
      //   store.dispatch("testFun", "payload");
      //   nextTick(() => {
      //     var canvas = qrcanvas({
      //       data: "6666",
      //       size: 66,
      //     });
      //     document.getElementById("qrcode").innerHTML = "";
      //     document.getElementById("qrcode").appendChild(canvas);
      //   });
    });
    const fromConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      testdiv: null,
      firstdiv: null,
      testdivsec: null,
      secdiv: null,

      animate: {
        top: 0,
        left: 0,
      },
    });
    const router = useRouter();
    const toabout = () => {
      router.push("/about");
    };
    const animateFun = () => {
      let getref = fromConfig.testdiv;
      const { offsetTop, offsetLeft } = getref;
      console.log("offsetTop", offsetLeft);
      let firstdiv = {
        offsetTop: offsetTop,
        offsetLeft: offsetLeft,
      };
      fromConfig.firstdiv = firstdiv;
      animateFunsec();
    };
    const animateFunsec = () => {
      let getref = fromConfig.testdivsec;
      const { offsetTop, offsetLeft, offsetParent } = getref;
      //   console.log("offsetParent", offsetParent.offsetTop);
      let secdiv = {
        offsetTop: offsetTop,
        offsetLeft: offsetLeft,
        offsetParentTop: offsetParent.offsetTop,
        offsetParentLeft: offsetParent.offsetLeft,
      };
      fromConfig.secdiv = secdiv;
    };
    const testfun = () => {
      console.log("fromConfig.firstdiv", fromConfig.firstdiv);
      console.log("fromConfig.secdiv", fromConfig.secdiv);
    };
    const animatebox = async () => {
      await animateFun();
      let initialPoint = fromConfig.firstdiv;
      let endPoint = {
        offsetTop: fromConfig.secdiv.offsetTop + fromConfig.secdiv.offsetParentTop,
        offsetLeft: fromConfig.secdiv.offsetLeft + fromConfig.secdiv.offsetParentLeft,
      };
      let Difference = {
        offsetTop: endPoint.offsetTop - initialPoint.offsetTop,
        offsetLeft: endPoint.offsetLeft - initialPoint.offsetLeft,
      };
      fromConfig.animate.top = Difference.offsetTop;
      fromConfig.animate.left = Difference.offsetLeft;
      console.log("Difference", Difference);
    };

    return { ...toRefs(fromConfig), toabout, animateFun, testfun, animatebox };
  },
};
</script>

<style lang="scss">
.game {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .game_btn {
    position: relative;
    top: 170px;
    left: 0;
    width: 100px;
    height: 100px;
    background: red;
  }
  .game_boxs {
    position: relative;
    top: 81px;
    left: 0;
    width: 100px;
    height: 100px;
    background: red;
    transition-property: all; //过度动画
    transition-duration: 1s;
  }
  .canvas_box {
    position: relative;
    top: 183px;
    width: 238px;
    height: 340px;
    // background: gold;


    
    .canvas_box_red {
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 40px;
      background: red;
    }
    .canvas_box_yellow {
      position: absolute;

      top: 20px;
      left: 40px;

      width: 80px;
      height: 40px;
      background: #f7d775;
    }
    .canvas_box_blue {
      position: absolute;

      top: 40px;
      left: 80px;

      width: 80px;
      height: 40px;
      background: blue;
    }
    .canvas_box_yellow_sec {
      position: absolute;

      top: 60px;
      left: 120px;

      width: 80px;
      height: 40px;
      background: #f7d775;
    }

    .canvas_box_red_sec {
      position: absolute;

      top: 80px;
      left: 160px;

      width: 80px;
      height: 40px;
      background: red;
    }

    .canvas_box_yellow_third {
      position: absolute;

      top: 100px;
      left: 120px;

      width: 80px;
      height: 40px;
      background: #f7d775;
    }
    .canvas_box_blue_sec {
      position: absolute;

      top: 120px;
      left: 80px;

      width: 80px;
      height: 40px;
      background: blue;
    }
    .canvas_box_yellow_fourth {
      position: absolute;

      top: 140px;
      left: 40px;

      width: 80px;
      height: 40px;
      background: #f7d775;
    }
  }
}
</style>
