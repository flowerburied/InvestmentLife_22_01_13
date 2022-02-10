<template>
  <div class="game_index">
    <!-- <img class="game_index_bgimgx" src="@/assets/game/15.png" /> -->
    <!-- <img class="game_index_bgimgx" src="@/assets/game/28.gif" /> -->
    <firstview></firstview>
    <gameComp ref="gameComp" @walkCallback="walkCallback"></gameComp>
    <!-- v-if="isshowMask" -->
    <gameMask
      v-if="isshowMask"
      @getUserInfo="getUserInfo"
      @clearMaski="clearMaski"
    ></gameMask>

    <!-- 筛子 -->
    <div class="index_bottom">
      <img
        v-if="isShowGif"
        @click="drawNum"
        class="index_bottom_img"
        src="@/assets/game/06.png"
      />
      <img
        v-if="!isShowGif"
        class="index_bottom_img"
        :src="`${numUrl}?${new Date().getTime()}`"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { qrcanvas } from "qrcanvas";
import api from "@/api/api";
// import firstview from "@/components/userInfoView";
import firstview from "@/components/newuserInfo";
import gameComp from "@/components/gameComp";
import gameMask from "@/components/gameMask";
import { Notify } from "vant";
export default {
  name: "About",
  mounted() {
    // console.log("test", this.$store.state.test);
  },
  components: {
    firstview,
    gameComp,
    gameMask,
  },
  setup() {
    // let store = useStore();
    const { proxy } = getCurrentInstance(); //this
    onMounted(() => {
      proxy.$store.dispatch("starytime");
    });

    const fromConfig = reactive({
      isShowGif: true,
      numUrl: require("@/assets/game/dice/shaking1.gif"),

      isshowMask: false,
    });

    // const router = useRouter();
    // const toabout = () => {
    //   router.push("/about");
    // };
    const walkCallback = () => {
      console.log("walkCallback");
      // fromConfig.numUrl = require("@/assets/game/06.png");
      fromConfig.isShowGif = true;
      fromConfig.isshowMask = true;
      getUserInfo();

      proxy.$store.dispatch("stopTime");
      proxy.$store.dispatch("starytime");
    };
    const clearMaski = () => {
      fromConfig.isshowMask = false;
    };

    const drawNum = async () => {
      // let num = 8;
      //   luckDraw(num);
      // proxy.$refs.gameComp.luckDraw(num);
      try {
        proxy.$store.commit("SET_MASK_LIST", null);
        let option = {
          uid: proxy.$store.state.userinfo.id,
        };
        console.log("option", option);
        const res = await api.game.Rand(option);

        console.log("res", res);
        const { code, data, msg } = res;
        if (code == 0) {
          if (data) {
            fromConfig.isShowGif = false;
            fromConfig.numUrl = data.Url;
            // require(`@/assets/game/dice/shaking${data.Dice}.gif`);
            console.log("data", data);
            // console.log("data.investment.length", data.investment.length);
            // console.log("data.subject.length", data.subject.length);
            if (data.investment.length == 0 && data.subject.length == 0) {
              console.log("结算");
              settlement(data.Event);
            } else {
              // console.log("不结算，弹框",data.investment.data[0]);
              let val = null;
              if (data.investment.length != 0) {
                val = {
                  type: 0,
                  content: data.investment,
                  title: data.investment.data[0],
                };
              } else if (data.subject.length != 0) {
                val = {
                  type: 1,
                  content: data.subject,
                };
              }

              proxy.$store.commit("SET_MASK_LIST", val);
            }

            setTimeout(() => {
              proxy.$refs.gameComp.luckDraw(data.Dice);
            }, 3000);
          } else {
            Notify(msg);
          }
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    const settlement = async (Event) => {
      try {
        let option = {
          Event: Event,
          uid: proxy.$store.state.userinfo.id,
        };
        console.log("option", option);
        const res = await api.game.settlement(option);

        const { code, msg } = res;
        if (code == 0) {
          // proxy.$store.commit("SET_MASK_LIST", null);
          let val = null;
          if (res.data) {
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].content = JSON.parse(res.data[i].content);
            }
            val = {
              type: 2,
              title: msg,
              data: res.data,
            };
          } else {
            val = {
              type: 2,
              title: msg,
            };
          }
          console.log("val", val);
          proxy.$store.commit("SET_MASK_LIST", val);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    const getUserInfo = async () => {
      try {
        let option = {
          uid: proxy.$store.state.userinfo.id,
        };
        console.log("option", option);
        const res = await api.game.getUserInfo(option);
        console.log("res", res);
        const { code, data } = res;
        if (code == 0) {
          if (data.income) {
            let merge = parseFloat(data.income);
            data.income = merge;

            data.merge = merge + data.income;
          } else {
            data.merge = 0;
            data.income = 0;
          }
          console.log("data", data);
          proxy.$store.commit("SET_USER_INFO", data);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    return { ...toRefs(fromConfig), drawNum, walkCallback, clearMaski, getUserInfo };
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
  background: #FDE4C5;
  .game_index_bgimgx {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100vh;
  }
  .index_bottom {
    z-index: 1005;
    position: fixed;
    bottom: 165px;
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
