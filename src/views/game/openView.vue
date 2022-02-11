<template>
  <div class="open_view">
    <img class="open_view_log" src="@/assets/game/07.png" />
    <div class="open_view_text">创业·就业财商小游戏</div>

    <div class="open_view_bottom">
      <img class="view_bottom_img" src="@/assets/game/08.png" />

      <div class="view_bottom_btn" @click="gotusignup">
        <img class="bottom_btn_img" src="@/assets/game/09.png" />
        <div class="bottom_btn_text">点击进入</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    // let store = useStore();
    // const { proxy } = getCurrentInstance(); //this

    const fromConfig = reactive({});

    const router = useRouter();
    const gotusignup = () => {
      router.push("/signup");
    };

    return { ...toRefs(fromConfig), gotusignup };
  },
};
</script>

<style lang="scss">
.open_view {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffbc2e;
  .open_view_log {
    width: 292px;
    height: 223px;
    margin-top: 83px;
  }
  .open_view_text {
    margin-top: 11px;
    color: #ec7d22;
    font-size: 16px;
    line-height: 16px;
  }
  .open_view_bottom {
    z-index: 1010;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 334px;
    display: flex;
    align-items: center;
    justify-content: center;
    .view_bottom_img {
      width: 100%;
      height: 334px;
    }
    .view_bottom_btn {
      z-index: 1111;
      // margin-top: 210px;
      position: absolute;
      width: 178px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      .bottom_btn_img {
        position: absolute;
        top: 0;
        left: 0;
        width: 178px;
        height: 46px;
      }
      .bottom_btn_text {
        position: absolute;
        z-index: 1001;
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
        color: #fefefe;
      }
    }
  }
}
</style>
