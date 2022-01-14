<template>
  <div class="signup">
    <div class="signup_title">投资人生</div>

    <div class="signup_input">
      <img class="signup_input_img" src="@/assets/game/10.png" />
      <van-field
        class="signup_input_input"
        :rules="[{ required: true, message: '请输入绑定的手机号' }]"
        v-model="account.phone"
        label-width="42"
        placeholder="请输入绑定的手机号"
        label="手机号"
      />
    </div>

    <div class="signup_input">
      <img class="signup_input_img" src="@/assets/game/11.png" />
      <van-field
        class="signup_input_input"
        :rules="[{ required: true, message: '请输入验证码' }]"
        v-model="account.code"
        label-width="42"
        placeholder="请输入验证码"
        label="验证码"
      >
        <template #button>
          <div v-if="codetimeout" class="signup_btn" @click="getcode">发送</div>
          <div v-if="!codetimeout" class="signup_btn">倒计时：{{ numtime }}</div>
          <!-- <van-button size="small" type="primary">发送验证码</van-button> -->
        </template>
      </van-field>
    </div>

    <div class="signup_clause">
      <img v-if="isClause" class="signup_clause_img" src="@/assets/game/12.png" />
      <img v-if="!isClause" class="signup_clause_img" src="@/assets/game/13.png" />
      <div class="signup_clause_text">我已阅读并同意XXX条款</div>
    </div>

    <div class="signup_btnxx" @click="clickSignUp">
      <img class="signup_btn_img" src="@/assets/game/09.png" />
      <div class="signup_btn_text" >登录</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import api from "@/api/api";
import { Notify } from "vant";
export default {
  setup() {
    // let store = useStore();
    const { proxy } = getCurrentInstance(); //this

    const fromConfig = reactive({
      account: {
        phone: "15251609976",
        code: "",
      },
      numtime: 1,
      codetimeout: true,
      isClause: false,
    });

    const router = useRouter();
    const gotusignup = () => {
      router.push("/signup");
    };
    const getcode = async () => {
      try {
        let option = {
          phone: fromConfig.account.phone,
        };
        console.log("option", option);
        const res = await api.pay.TencentSendSms(option);

        console.log("TencentSendSms", res);
        const { code, data } = res;
        if (code == 0) {
          fromConfig.numtime = 60;
          fromConfig.codetimeout = false;
          setTimeout(() => {
            fromConfig.codetimeout = true;
          }, 3000);
          getTime();
          console.log("data", data);
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    const getTime = () => {
      let interval = setInterval(() => {
        fromConfig.numtime--;
        if (fromConfig.numtime == 0) {
          clearInterval(interval);
        }
      }, 1000);
    };

    const clickSignUp = () => {
      if (fromConfig.account.phone && fromConfig.account.code) {
        let regPhong = /^1[3456789]\d{9}$/;
        // return regPhong.test(value)
        let isphone = regPhong.test(fromConfig.account.phone);
        console.log("isphone", isphone);

        if (isphone) {
          singnuptrue();
        }
      } else {
        Notify("请输入全部信息");
      }
    };
    const singnuptrue = async () => {
      try {
        let option = {
          code: fromConfig.account.code,
          phone: fromConfig.account.phone,
        };
        console.log("option", option);
        const res = await api.game.UserLogin(option);

        console.log("res", res);
        const { code, data } = res;
        if (code == 0) {
          proxy.$store.commit("SET_USER_INFO", data);
          let testuse = JSON.stringify(data);
          // sessionStorage.setItem("userinfo", testuse);
          localStorage.setItem("userinfo", testuse);
          console.log("data", proxy.$store.state.userinfo);

          router.push({
            path: "/gameView",
          });
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    return { ...toRefs(fromConfig), gotusignup, getcode, clickSignUp };
  },
};
</script>

<style lang="scss">
.signup {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffbc2e;
  .signup_title {
    margin-top: 127px;
    font-size: 30px;
    font-family: HappyZcool-2016;
    font-weight: 400;
    color: #fefefe;
  }
  .signup_btnxx {
    margin-top: 61px;
    width: 179px;
    height: 46px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .signup_btn_img {
      position: absolute;
      width: 179px;
      height: 46px;
    }
    .signup_btn_text {
      position: absolute;
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
      color: #fefefe;
    }
  }
  .signup_clause {
    margin-top: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    .signup_clause_img {
      display: flex;
      width: 10px;
      height: 10px;
    }
    .signup_clause_text {
      display: flex;
      //   margin-top: 17px;
      font-size: 12px;
      line-height: 12px;
      color: #ffffff;
      margin-left: 6px;
    }
  }
  .signup_input {
    margin-top: 19px;
    width: 230px;
    height: 45px;
    display: flex;
    align-items: center;
    flex-direction: row;
    // justify-content: space-between;
    box-shadow: 0px 5px 12px 1px rgba(54, 34, 29, 0.3);
    border-radius: 5px;
    overflow: hidden;
    background: #ffffff;
    .signup_input_input {
      padding: 0;
      margin-left: 3px;
      .van-field__control {
        width: 90px;
      }
    }
    .signup_btn {
      color: #ffbc2e;
    }
    .signup_input_img {
      margin-left: 9px;
      width: 17px;
      height: 17px;
      background: #ffffff;
    }
  }
}
</style>
