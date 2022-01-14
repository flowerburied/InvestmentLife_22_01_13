<template>
  <div class="game_index">
    <firstview></firstview>
    <gameComp ref="gameComp" @walkCallback="walkCallback"></gameComp>
    <div class="index_bottom">
      <img
        v-if="isShowGif"
        @click="drawNum"
        class="index_bottom_img"
        src="@/assets/game/06.png"
      />
      <img v-if="!isShowGif" class="index_bottom_img" :src="numUrl" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { qrcanvas } from "qrcanvas";
import api from "@/api/api";
import firstview from "@/components/userInfoView";
import gameComp from "@/components/gameComp";
export default {
  name: "About",
  mounted() {
    // console.log("test", this.$store.state.test);
  },
  components: {
    firstview,
    gameComp,
  },
  setup() {
    // let store = useStore();
    const { proxy } = getCurrentInstance(); //this
    onMounted(() => {});

    const fromConfig = reactive({
      isShowGif: true,
      numUrl: require("@/assets/game/dice/shaking1.gif"),
    });

    // const router = useRouter();
    // const toabout = () => {
    //   router.push("/about");
    // };
    const walkCallback = () => {
      console.log("walkCallback");
      fromConfig.numUrl = require("@/assets/game/06.png");
      fromConfig.isShowGif = true;
    };

    const drawNum = async () => {
      // let num = 8;
      //   luckDraw(num);
      // proxy.$refs.gameComp.luckDraw(num);
      try {
        let option = {
          uid: proxy.$store.state.userinfo.id,
        };
        console.log("option", option);
        const res = await api.game.Rand(option);

        console.log("res", res);
        const { code, data } = res;
        if (code == 0) {
          fromConfig.isShowGif = false;
          fromConfig.numUrl = require(`@/assets/game/dice/shaking${data.Dice}.gif`);
          console.log("data", data);

          setTimeout(() => {
            proxy.$refs.gameComp.luckDraw(data.Dice);
          }, 3000);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    return { ...toRefs(fromConfig), drawNum, walkCallback };
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
