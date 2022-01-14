<template>
  <div class="game_index">
    <firstview></firstview>
    <div class="index_game">
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
        <img
          v-for="(itgroup, ingroup) in item.group"
          :key="ingroup"
          class="canvas_box_fortest"
          :style="{
            top: itgroup.top + 'px',
            left: itgroup.left + 'px',
            transitionDuration: '1S',
          }"
          :ref="'coordinate' + index + ingroup"
          :src="itgroup.bg"
        />
      </div>
    </div>
    <!-- @click="luckDraw" -->
    <div class="game_character" ref="gameBtn">
      <img class="game_character_img" src="@/assets/game/02.png" />
    </div>

    <div class="index_bottom" @click="drawNum">
      <img class="index_bottom_img" src="@/assets/game/06.png" />
    </div>

    
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { qrcanvas } from "qrcanvas";
import firstview from "@/components/userInfoView";
export default {
  name: "About",
  mounted() {
    // console.log("test", this.$store.state.test);
  },
  components: {
    firstview,
  },
  setup() {
    // let store = useStore();
    const { proxy } = getCurrentInstance(); //this
    onMounted(() => {});

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
        // {
        //   top: 368,
        //   left: 0,
        //   group: [
        //     { bg: "#db1919", top: 0, left: 0 },
        //     { bg: "#f7d775", top: 23, left: 36 },
        //     { bg: "#0000ff", top: 46, left: 72 },
        //     { bg: "#f7d775", top: 69, left: 108 },
        //     { bg: "#db1919", top: 92, left: 144 },
        //     { bg: "#f7d775", top: 115, left: 108 },
        //     { bg: "#0000ff", top: 138, left: 72 },
        //     { bg: "#f7d775", top: 161, left: 36 },
        //   ],
        // },
      ],
      gameBtn: null,
      clickView: [],
      presentCoor: {
        index: 1,
        ingroup: 7,
      },
      transitionDuration: 1,
      surplus: 0,
    });

    // const router = useRouter();
    // const toabout = () => {
    //   router.push("/about");
    // };

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

      console.log("surplus", surplus);
      fromConfig.surplus = surplus;
      if (getarray.length > 0) {
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
      console.log("animateArray", animateArray);
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
            index: 1,
            ingroup: 7,
          };

          fromConfig.presentCoor = newpresentCoor;
          resetFun();
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

      if (fromConfig.surplus != 1) {
        setTimeout(() => {
          // fromConfig.surplus
          luckDraw(fromConfig.surplus);
        }, 1000);
      }
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

    const drawNum = () => {
      let num = 8;
      luckDraw(num);
    };

    return { ...toRefs(fromConfig), drawNum };
  },
};
</script>

<style lang="scss">
.game_index {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .game_character {
    margin-right: 96px;
    position: relative;
    top: 495px;

    width: 72px;
    height: 46px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    .game_character_img {
      width: 72px;
      height: 46px;
    }
  }

  .index_game {
    position: relative;
    width: 240px;
    top: 150px;
    // background: rgb(192, 198, 255);

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
  .index_bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 110px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    .index_bottom_img {
      width: 83px;
      height: 83px;
    }
  }
}
</style>
