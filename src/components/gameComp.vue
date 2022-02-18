<template>
  <div class="index_game">
    <img
      class="canvas_box_firstimg"
      :style="{
        top: coordinateGroup[0].top - 732 + 'px',
        left: coordinateGroup[0].left - 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/32.png"
    />

    <img
      class="canvas_box_secimg"
      :style="{
        top: coordinateGroup[0].top - 686 + 'px',
        left: coordinateGroup[0].left + 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/31.png"
    />
    <img
      class="canvas_box_thirdimg"
      :style="{
        top: coordinateGroup[0].top - 516 + 'px',
        left: coordinateGroup[0].left - 70 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/30.png"
    />
    <img
      class="canvas_box_fourimg"
      :style="{
        top: coordinateGroup[0].top - 436 + 'px',
        left: coordinateGroup[0].left + 120 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/29.png"
    />

    <div
      class="canvas_box_fortestbao"
      v-for="(item, indexx) in coordinateGroup"
      :key="indexx"
      :style="{
        top: item.top - 736 + 'px',
        left: item.left + 'px',
        transitionProperty: transitionDuration,
      }"
    >
      <img
        v-for="(itgroup, ingroupxx) in item.group"
        :key="ingroupxx"
        class="canvas_box_fortest"
        :style="{
          top: itgroup.top + 'px',
          left: itgroup.left + 'px',
        }"
        :src="itgroup.bg"
      />
    </div>

    <div
      class="canvas_box_fortestbao"
      v-for="(item, indexx) in coordinateGroup"
      :key="indexx"
      :style="{
        top: item.top - 368 + 'px',
        left: item.left + 'px',
        transitionProperty: transitionDuration,
      }"
    >
      <img
        v-for="(itgroup, ingroupxx) in item.group"
        :key="ingroupxx"
        class="canvas_box_fortest"
        :style="{
          top: itgroup.top + 'px',
          left: itgroup.left + 'px',
        }"
        :src="itgroup.bg"
      />
    </div>

    <img
      class="canvas_box_firstimg"
      :style="{
        top: coordinateGroup[0].top + 4 + 'px',
        left: coordinateGroup[0].left - 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/32.png"
    />

    <img
      class="canvas_box_secimg"
      :style="{
        top: coordinateGroup[0].top + 50 + 'px',
        left: coordinateGroup[0].left + 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/31.png"
    />
    <img
      class="canvas_box_thirdimg"
      :style="{
        top: coordinateGroup[0].top + 220 + 'px',
        left: coordinateGroup[0].left - 70 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/30.png"
    />
    <img
      class="canvas_box_fourimg"
      :style="{
        top: coordinateGroup[0].top + 300 + 'px',
        left: coordinateGroup[0].left + 120 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/29.png"
    />

    <div
      class="canvas_box_fortestbao"
      v-for="(item, index) in coordinateGroup"
      :key="index"
      :style="{
        top: item.top + 'px',
        left: item.left + 'px',
        transitionProperty: transitionDuration,
      }"
      :ref="'coordinate' + index"
    >
      <img
        v-for="(itgroup, ingroup) in item.group"
        :key="ingroup"
        class="canvas_box_fortest"
        :style="{
          top: itgroup.top + 'px',
          left: itgroup.left + 'px',
        }"
        :ref="'coordinate' + index + ingroup"
        :src="itgroup.bg"
      />
    </div>
    <img
      class="canvas_box_firstimg"
      :style="{
        top: coordinateGroup[0].top - 364 + 'px',
        left: coordinateGroup[0].left - 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/32.png"
    />

    <img
      class="canvas_box_secimg"
      :style="{
        top: coordinateGroup[0].top - 318 + 'px',
        left: coordinateGroup[0].left + 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/31.png"
    />
    <img
      class="canvas_box_thirdimg"
      :style="{
        top: coordinateGroup[0].top - 148 + 'px',
        left: coordinateGroup[0].left - 70 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/30.png"
    />
    <img
      class="canvas_box_fourimg"
      :style="{
        top: coordinateGroup[0].top - 68 + 'px',
        left: coordinateGroup[0].left + 120 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/29.png"
    />

    <img
      class="canvas_box_firstimg"
      :style="{
        top: coordinateGroup[0].top + 372 + 'px',
        left: coordinateGroup[0].left - 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/32.png"
    />

    <img
      class="canvas_box_secimg"
      :style="{
        top: coordinateGroup[0].top + 418 + 'px',
        left: coordinateGroup[0].left + 150 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/31.png"
    />
    <img
      class="canvas_box_thirdimg"
      :style="{
        top: coordinateGroup[0].top + 588 + 'px',
        left: coordinateGroup[0].left - 70 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/30.png"
    />
    <img
      class="canvas_box_fourimg"
      :style="{
        top: coordinateGroup[0].top + 668 + 'px',
        left: coordinateGroup[0].left + 120 + 'px',
        transitionProperty: transitionDuration,
      }"
      src="@/assets/game/29.png"
    />

    <div
      class="canvas_box_fortestbao"
      v-for="(item, indexx) in coordinateGroup"
      :key="indexx"
      :style="{
        top: item.top + 368 + 'px',
        left: item.left + 'px',
        transitionProperty: transitionDuration,
      }"
    >
      <img
        v-for="(itgroup, ingroupxx) in item.group"
        :key="ingroupxx"
        class="canvas_box_fortest"
        :style="{
          top: itgroup.top + 'px',
          left: itgroup.left + 'px',
        }"
        :src="itgroup.bg"
      />
    </div>
  </div>
  <!-- 小人 -->
  <div class="game_character" ref="gameBtn">
    <img class="game_character_img" src="@/assets/game/26.png" />
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
export default {
  emits: {
    walkCallback: null,
  },
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance(); //this
    const fromConfig = reactive({
      // 23  36
      coordinateGroup: [
        {
          top: 0,
          left: 0,
          group: [
            { bg: require("@/assets/game/03.png"), top: 0, left: 0 },
            { bg: require("@/assets/game/02.png"), top: 23, left: 36 },
            { bg: require("@/assets/game/01.png"), top: 46, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 69, left: 108 },
            { bg: require("@/assets/game/03.png"), top: 92, left: 144 },
            { bg: require("@/assets/game/02.png"), top: 115, left: 108 },
            { bg: require("@/assets/game/01.png"), top: 138, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 161, left: 36 },
          ],
        },
        {
          top: 184,
          left: 0,
          group: [
            { bg: require("@/assets/game/03.png"), top: 0, left: 0 },
            { bg: require("@/assets/game/02.png"), top: 23, left: 36 },
            { bg: require("@/assets/game/01.png"), top: 46, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 69, left: 108 },
            { bg: require("@/assets/game/03.png"), top: 92, left: 144 },
            { bg: require("@/assets/game/02.png"), top: 115, left: 108 },
            { bg: require("@/assets/game/01.png"), top: 138, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 161, left: 36 },
          ],
        },
      ],

      coordinateGroupshow: [
        {
          top: 0,
          left: 0,
          group: [
            { bg: require("@/assets/game/03.png"), top: 0, left: 0 },
            { bg: require("@/assets/game/02.png"), top: 23, left: 36 },
            { bg: require("@/assets/game/01.png"), top: 46, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 69, left: 108 },
            { bg: require("@/assets/game/03.png"), top: 92, left: 144 },
            { bg: require("@/assets/game/02.png"), top: 115, left: 108 },
            { bg: require("@/assets/game/01.png"), top: 138, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 161, left: 36 },
          ],
        },
        {
          top: 184,
          left: 0,
          group: [
            { bg: require("@/assets/game/03.png"), top: 0, left: 0 },
            { bg: require("@/assets/game/02.png"), top: 23, left: 36 },
            { bg: require("@/assets/game/01.png"), top: 46, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 69, left: 108 },
            { bg: require("@/assets/game/03.png"), top: 92, left: 144 },
            { bg: require("@/assets/game/02.png"), top: 115, left: 108 },
            { bg: require("@/assets/game/01.png"), top: 138, left: 72 },
            { bg: require("@/assets/game/02.png"), top: 161, left: 36 },
          ],
        },
      ],

      gameBtn: null,
      clickView: [],
      presentCoor: {
        index: 1,
        ingroup: 7,
      },
      transitionDuration: "all",
      surplus: 0,
    });

    const luckDraw = (luckDrawNum) => {
      //   let luckDrawNum = 6;

      let presentCoor = fromConfig.presentCoor;
      // let presentCoor = calculationCoor;
      let getarray = [];
      var surplus = 0;
      for (let i = 0; i < luckDrawNum; i++) {
        let getoption = null;
        if (presentCoor.ingroup == 0 && presentCoor.index == 0) {
          console.log("结束循环", i);
          surplus++;
        } else {
          if (presentCoor.ingroup - 1 > -1) {
            getoption = {
              index: presentCoor.index,
              ingroup: presentCoor.ingroup - 1,
              refnum: presentCoor.index + "" + (presentCoor.ingroup - 1),
              transitionDuration: "all",
            };
            presentCoor.ingroup = presentCoor.ingroup - 1;
          } else {
            getoption = {
              index: presentCoor.index - 1,
              ingroup: 7,
              refnum: presentCoor.index - 1 + "" + 7,
              transitionDuration: "all",
            };
            presentCoor.index = presentCoor.index - 1;
            presentCoor.ingroup = 7;
          }
          getarray.push(getoption);
        }
      }

      console.log("surplus", surplus);
      console.log("getarray", getarray);
      fromConfig.surplus = surplus;
      if (getarray.length > 0) {
        let getarrayObj = getarray[getarray.length - 1];
        console.log("getarrayObj", getarrayObj);
        let newpresentCoor = {
          index: getarrayObj.index,
          ingroup: getarrayObj.ingroup,
        };
        fromConfig.presentCoor = newpresentCoor;
        recursion(getarray);
      } else {
        fromConfig.transitionDuration = "none";
        let newpresentCoor = {
          index: 1,
          ingroup: 7,
        };
        fromConfig.presentCoor = newpresentCoor;
        resetFun();
      }
    };
    const recursion = (animateArray) => {
      console.log("animateArray", animateArray);
      if (animateArray.length != 0) {
        if (animateArray[0].index == 1 && animateArray[0].ingroup == 7) {
          fromConfig.transitionDuration = "none";
        } else {
          fromConfig.transitionDuration = animateArray[0].transitionDuration;
        }

        testSrray(animateArray[0].refnum);
        animateArray.splice(0, 1);
        setTimeout(() => {
          recursion(animateArray);
        }, 1000);
      } else {
        if (fromConfig.surplus) {
          fromConfig.transitionDuration = "none";
          let newpresentCoor = {
            index: 1,
            ingroup: 7,
          };
          fromConfig.presentCoor = newpresentCoor;
          resetFun();
        } else {
          // 结束
          emit("walkCallback");
        }
      }
    };
    const resetFun = () => {
      for (let i = 0; i < fromConfig.coordinateGroup.length; i++) {
        if (i == 0) {
          fromConfig.coordinateGroup[i].top = 0;
          fromConfig.coordinateGroup[i].left = 0;
        } else if (i == 1) {
          fromConfig.coordinateGroup[i].top = 184;
          fromConfig.coordinateGroup[i].left = 0;
        }
      }

      // if (fromConfig.surplus != 1) {
      // 轮回
      setTimeout(() => {
        // fromConfig.surplus
        let onsurplus = fromConfig.surplus - 1;
        console.log("onsurplus", onsurplus);

        if (onsurplus > 0) {
          luckDraw(onsurplus);
        } else {
          // 结束
          emit("walkCallback");
        }
        // if (onsurplus != 1 || onsurplus != 0) {
        //   luckDraw(onsurplus);
        // } else if (onsurplus == -1) {
        //   // 结束
        //   proxy.$emit("walkCallback");
        // } else {
        //   // 结束
        //   proxy.$emit("walkCallback");
        // }
      }, 1000);
      // }
    };
    const testSrray = async (numtest) => {
      let getref = eval("proxy.$refs.coordinate" + numtest);
      const { offsetTop, offsetLeft, offsetParent } = getref;
      let thirdView = offsetParent.offsetParent;
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
    };

    return { ...toRefs(fromConfig), luckDraw };
  },
};
</script>

<style lang="scss">
.game_character {
  z-index: 100;
  margin-right: 96px;
  position: relative;
  // top: 495px;
  top: 345px;
  // bottom: 200px;

  width: 72px;
  height: 46px;
  // background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  .game_character_img {
    position: absolute;
    bottom: 10px;
    width: 107px;
    height: 107px;
  }
}
.index_game {
  position: relative;
  width: 240px;
  // top: 150px;
  top: 0;
  // background: rgb(192, 198, 255);
  .canvas_box_firstimg {
    z-index: 1002;
    position: absolute;
    width: 220px;
    height: 163px;
    transition-property: all; //过度动画
    transition-duration: 1s;
  }
  .canvas_box_secimg {
    z-index: 1002;
    position: absolute;
    width: 150px;
    height: 229px;
    transition-property: all; //过度动画
    transition-duration: 1s;
  }
  .canvas_box_thirdimg {
    z-index: 1002;
    position: absolute;
    width: 114px;
    height: 158px;
    transition-property: all; //过度动画
    transition-duration: 1s;
  }
  .canvas_box_fourimg {
    z-index: 1002;
    position: absolute;
    width: 182px;
    height: 145px;
    transition-property: all; //过度动画
    transition-duration: 1s;
  }

  .canvas_box_fortestbao {
    position: absolute;

    top: 0;
    left: 0;

    width: 240px;
    //   height: 180px;

    // background: #68ff75;
    transition-property: all; //过度动画
    transition-duration: 1s;
    .canvas_box_fortest {
      position: absolute;

      top: 23px;
      left: 36px;

      width: 72px;
      height: 46px;
      // background: #f7d775;

      transition-property: all; //过度动画
      transition-duration: 1s;
    }
  }
}
</style>
