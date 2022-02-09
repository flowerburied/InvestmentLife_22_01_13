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
      @click="testSrrayAdd"
      :style="{
        top: animate.top + 'px',
        left: animate.left + 'px',
        transitionDuration: '1S',
      }"
    ></div>
    <div class="canvas_box">
      <div
        class="canvas_box_fortestbao"
        v-for="(item, index) in coordinateGroup"
        :key="index"
        :style="{
          top: item.top + 'px',
          left: item.left + 'px',
          transitionDuration: +'S',
        }"
        :ref="'coordinate' + index"
      >
        <!-- :ref="'coordinate' + index" -->
        <div
          @click="showref(index, ingroup)"
          v-for="(itgroup, ingroup) in item.group"
          :key="ingroup"
          class="canvas_box_fortest"
          :style="{
            top: itgroup.top + 'px',
            left: itgroup.left + 'px',
            transitionDuration: '1S',
            background: itgroup.bg,
          }"
          :ref="'coordinate' + index + ingroup"
        >
          {{ index }}
        </div>
      </div>

      <!-- <div
        class="canvas_box_fortest"
        :style="{
          top: item.top + 'px',
          left: item.left + 'px',
          transitionDuration: '1S',
          background: item.bg,
        }"
        v-for="(item, index) in coordinate"
        :key="index"
      ></div> -->

      <!-- <div class="canvas_box_red"></div>
      <div class="canvas_box_yellow"></div>
      <div class="canvas_box_blue"></div>
      <div class="canvas_box_yellow_sec"></div>
      <div class="canvas_box_red_sec"></div>
      <div class="canvas_box_yellow_third"></div>
      <div class="canvas_box_blue_sec" ref="testdivsec" @click="testfun"></div>
      <div class="canvas_box_yellow_fourth"></div> -->
    </div>
    <div class="game_btn" ref="gameBtn" @click="luckDraw"></div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  nextTick,
  onUpdated,
  getCurrentInstance,
} from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { qrcanvas } from "qrcanvas";
export default {
  name: "About",
  mounted() {
    console.log("test", this.$store.state.test);
  },
  setup() {
    const { proxy } = getCurrentInstance(); //this
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
      // db1919  红
      // f7d775 黄
      // 0000ff 蓝
      // f7d775 黄
      coordinate: [
        { bg: "#db1919", top: 0, left: 0 },
        { bg: "#f7d775", top: 20, left: 40 },
        { bg: "#0000ff", top: 40, left: 80 },
        { bg: "#f7d775", top: 60, left: 120 },
        { bg: "#db1919", top: 80, left: 160 },
        { bg: "#f7d775", top: 100, left: 120 },
        { bg: "#0000ff", top: 120, left: 80 },
        { bg: "#f7d775", top: 140, left: 40 },
      ],
      coordinateGroup: [
        {
          top: 0,
          left: 0,
          group: [
            { bg: "#db1919", top: 0, left: 0 },
            { bg: "#f7d775", top: 20, left: 40 },
            { bg: "#0000ff", top: 40, left: 80 },
            { bg: "#f7d775", top: 60, left: 120 },
            { bg: "#db1919", top: 80, left: 160 },
            { bg: "#f7d775", top: 100, left: 120 },
            { bg: "#0000ff", top: 120, left: 80 },
            { bg: "#f7d775", top: 140, left: 40 },
          ],
        },
        {
          top: 160,
          left: 0,
          group: [
            { bg: "#db1919", top: 0, left: 0 },
            { bg: "#f7d775", top: 20, left: 40 },
            { bg: "#0000ff", top: 40, left: 80 },
            { bg: "#f7d775", top: 60, left: 120 },
            { bg: "#db1919", top: 80, left: 160 },
            { bg: "#f7d775", top: 100, left: 120 },
            { bg: "#0000ff", top: 120, left: 80 },
            { bg: "#f7d775", top: 140, left: 40 },
          ],
        },
        {
          top: 320,
          left: 0,
          group: [
            { bg: "#db1919", top: 0, left: 0 },
            { bg: "#f7d775", top: 20, left: 40 },
            { bg: "#0000ff", top: 40, left: 80 },
            { bg: "#f7d775", top: 60, left: 120 },
            { bg: "#db1919", top: 80, left: 160 },
            { bg: "#f7d775", top: 100, left: 120 },
            { bg: "#0000ff", top: 120, left: 80 },
            { bg: "#f7d775", top: 140, left: 40 },
          ],
        },
      ],
      gameBtn: null,
      clickView: [],
      presentCoor: {
        index: 2,
        ingroup: 7,
      },
      transitionDuration: 1,
      surplus: 0,
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

    const testSrray = async (numtest) => {
      // fromConfig.coordinateGroup.splice(2, 1);
      // setTimeout(() => {
      //   testSrrayAdd();
      // }, 2000);
      // console.log("proxy", proxy.$refs);

      // let getref = proxy.$refs.coordinate10;

      let getref = eval("proxy.$refs.coordinate" + numtest);
      // console.log("getref", getref);
      const { offsetTop, offsetLeft, offsetParent } = getref;
      // console.log("offsetParent", offsetParent);
      let thirdView = offsetParent.offsetParent;
      // console.log("thirdView", thirdView.offsetTop);
      // let secdiv = {
      //   offsetTop: offsetTop,
      //   offsetLeft: offsetLeft,
      //   offsetParentTop: offsetParent.offsetTop,
      //   offsetParentLeft: offsetParent.offsetLeft,
      //   thirdViewTop: thirdView.offsetTop,
      //   thirdViewLeft: thirdView.offsetLeft,
      // };

      let secdiv = {
        offsetTop: offsetTop + offsetParent.offsetTop + thirdView.offsetTop,
        offsetLeft: offsetLeft + offsetParent.offsetLeft + thirdView.offsetLeft,
      };

      // console.log("secdiv", secdiv);
      fromConfig.secdiv = secdiv;
      await testSrraySec();
    };

    const testSrraySec = async () => {
      let getref = fromConfig.gameBtn;
      const { offsetTop, offsetLeft } = getref;

      let firstdiv = {
        offsetTop: offsetTop,
        offsetLeft: offsetLeft,
      };
      fromConfig.firstdiv = firstdiv;
      await moveView();
    };

    const moveView = () => {
      // let getsectop=
      let option = {
        offsetTop: fromConfig.firstdiv.offsetTop - fromConfig.secdiv.offsetTop,
        offsetLeft: fromConfig.firstdiv.offsetLeft - fromConfig.secdiv.offsetLeft,
      };

      // console.log("option", option);

      for (let i = 0; i < fromConfig.coordinateGroup.length; i++) {
        fromConfig.coordinateGroup[i].top =
          fromConfig.coordinateGroup[i].top + option.offsetTop;
        fromConfig.coordinateGroup[i].left =
          fromConfig.coordinateGroup[i].left + option.offsetLeft;
      }

      let newarray = fromConfig.coordinateGroup;
      // newarray.splice(2, 1);
      fromConfig.coordinateGroup = newarray;
    };

    const testSrrayAdd = () => {
      let option = {
        top: 0,
        left: 0,
        group: fromConfig.coordinate,
      };
      // fromConfig.coordinateGroup.push(option);
      let initialPoint = fromConfig.coordinateGroup;
      // console.log("initialPoint", initialPoint);
      initialPoint.splice(2, 1);
      initialPoint.unshift(option);
      fromConfig.coordinateGroup = initialPoint;
    };
    const showref = (index, ingroup) => {
      // console.log("index,ingroup", index, ingroup);
      // let videoPlayer = eval("this.$refs.micSvgaAnim" + i)[0];
      let numt = index + "" + ingroup + "";
      console.log("numt", numt);
      console.log("fromConfig.coordinateGroup", fromConfig.coordinateGroup);
      let newarray = fromConfig.coordinateGroup;
      if (ingroup == "0") {
        console.log("newarray[index].top",newarray[index].top)
        if (newarray[index].top == "550") {
          let getadd = {
            top: fromConfig.coordinateGroup[index].top - 160,
            left: fromConfig.coordinateGroup[index].left,
            group: [
              { bg: "#db1919", top: 0, left: 0 },
              { bg: "#f7d775", top: 20, left: 40 },
              { bg: "#0000ff", top: 40, left: 80 },
              { bg: "#f7d775", top: 60, left: 120 },
              { bg: "#db1919", top: 80, left: 160 },
              { bg: "#f7d775", top: 100, left: 120 },
              { bg: "#0000ff", top: 120, left: 80 },
              { bg: "#f7d775", top: 140, left: 40 },
            ],
          };
          newarray.push(getadd);
          console.log("newarray", newarray);
          // newarray.splice(2,1)
          fromConfig.coordinateGroup = newarray;
          testSrray(numt);
        } else {
          testSrray(numt);
        }
      }else{
         testSrray(numt);
      }
      // if (numt == "00") {
      //   let getadd = {
      //     top: fromConfig.coordinateGroup[0].top - 160,
      //     left: fromConfig.coordinateGroup[0].left,
      //     group: [
      //       { bg: "#db1919", top: 0, left: 0 },
      //       { bg: "#f7d775", top: 20, left: 40 },
      //       { bg: "#0000ff", top: 40, left: 80 },
      //       { bg: "#f7d775", top: 60, left: 120 },
      //       { bg: "#db1919", top: 80, left: 160 },
      //       { bg: "#f7d775", top: 100, left: 120 },
      //       { bg: "#0000ff", top: 120, left: 80 },
      //       { bg: "#f7d775", top: 140, left: 40 },
      //     ],
      //   };
      //   newarray.push(getadd);
      //   console.log("newarray", newarray);
      //   // newarray.splice(2,1)
      //   fromConfig.coordinateGroup = newarray;
      //   setTimeout(() => {
      //     testSrray(numt);
      //   }, 2000);
      // } else {
      //   testSrray(numt);
      // }
    };

    // const coordinate = (el) => {
    //   // console.log("el", el);
    //   // let getView = [];
    //   fromConfig.clickView.push(el);
    //   // fromConfig.clickView = getView;

    //   // console.log("fromConfig.clickView ", fromConfig.clickView);
    // };

    // onUpdated(() => {
    //   console.log(" fromConfig.clickView", fromConfig.clickView);
    // });

    const resetFun = () => {
      for (let i = 0; i < fromConfig.coordinateGroup.length; i++) {
        if (i == 0) {
          fromConfig.coordinateGroup[i].top = 0;
          fromConfig.coordinateGroup[i].left = 0;
        } else if (i == 1) {
          fromConfig.coordinateGroup[i].top = 160;
          fromConfig.coordinateGroup[i].left = 0;
        } else if (i == 2) {
          fromConfig.coordinateGroup[i].top = 320;
          fromConfig.coordinateGroup[i].left = 0;
        }
      }

      setTimeout(() => {
        // fromConfig.surplus
        luckDraw();
      }, 1000);
    };

    const luckDraw = () => {
      let luckDrawNum = 6;

      // let animateArray = [
      //   { refnum: 24, transitionDuration: 3 },
      //   { refnum: 20, transitionDuration: 4 },
      //   { refnum: 14, transitionDuration: 4 },
      // ];
      // let calculationCoor = {
      //   index: 0,
      //   ingroup: 2,
      // };

      let presentCoor = fromConfig.presentCoor;
      // let presentCoor = calculationCoor;
      let getarray = [];
      var surplus = 0;
      for (let i = 0; i < luckDrawNum; i++) {
        // console.log("1-1", 0 - 1);
        let getoption = null;
        if (presentCoor.ingroup == 0 && presentCoor.index == 0) {
          console.log("结束循环", i);
          // continue;
          surplus++;
        } else {
          if (presentCoor.ingroup - 1 > -1) {
            getoption = {
              index: presentCoor.index,
              ingroup: presentCoor.ingroup - 1,
              refnum: presentCoor.index + "" + (presentCoor.ingroup - 1),
              transitionDuration: 1,
            };
            presentCoor.ingroup = presentCoor.ingroup - 1;
          } else {
            getoption = {
              index: presentCoor.index - 1,
              ingroup: 7,
              refnum: presentCoor.index - 1 + "" + 7,
              transitionDuration: 1,
            };
            presentCoor.index = presentCoor.index - 1;
            presentCoor.ingroup = 7;
          }
          getarray.push(getoption);
        }
      }

      // console.log("getarray", getarray);
      console.log("surplus", surplus);
      // let gopresentCoor = null;
      fromConfig.surplus = surplus;
      if (getarray.length > 0) {
        // console.log("getarray", getarray[getarray.length - 1]);
        // for(let i=0; i<animateArray.length;i++){
        //    testSrray(animateArray[i.refnum]);
        // }
        let getarrayObj = getarray[getarray.length - 1];
        let newpresentCoor = {
          index: getarrayObj.index,
          ingroup: getarrayObj.ingroup,
        };
        fromConfig.presentCoor = newpresentCoor;
        recursion(getarray);
      }
    };
    const recursion = (animateArray) => {
      if (animateArray.length != 0) {
        fromConfig.transitionDuration = animateArray[0].transitionDuration;
        testSrray(animateArray[0].refnum);
        animateArray.splice(0, 1);
        setTimeout(() => {
          recursion(animateArray);
        }, 1000);
      } else {
        if (fromConfig.surplus) {
          let newpresentCoor = {
            index: 2,
            ingroup: 7,
          };
          fromConfig.presentCoor = newpresentCoor;
          resetFun();
        }
      }
    };

    return {
      ...toRefs(fromConfig),
      toabout,
      animateFun,
      testfun,
      animatebox,
      testSrray,
      testSrrayAdd,
      showref,
      luckDraw,
      // coordinate,
    };
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
    top: 570px;
    left: 0;
    width: 80px;
    height: 40px;
    background: red;
  }
  .game_boxs {
    position: relative;
    // top: 20px;
    left: 0;
    width: 100px;
    height: 100px;
    background: #db1919;
    transition-property: all; //过度动画
    transition-duration: 1s;
  }
  .canvas_box {
    position: relative;
    // top: 50px;
    width: 240px;
    // height: 340px;
    background: rgb(192, 198, 255);

    .canvas_box_fortestbao {
      position: absolute;

      top: 0;
      left: 0;

      width: 240px;
      height: 180px;

      // background: #68ff75;
      transition-property: all; //过度动画
      transition-duration: 1s;
      .canvas_box_fortest {
        position: absolute;

        top: 20px;
        left: 40px;

        width: 80px;
        height: 40px;
        background: #f7d775;

        transition-property: all; //过度动画
        transition-duration: 1s;
      }
    }

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
      background: #0000ff;
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
