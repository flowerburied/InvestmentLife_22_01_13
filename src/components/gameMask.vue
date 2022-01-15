<template>
  <div class="game_mask">
    <div class="game_mask_bg"></div>

    <div class="game_mask_management" v-if="$store.state.maskList.type == 2">
      <div class="mask_management_box">
        <img class="management_box_img" src="@/assets/game/25.png" />
        <div class="management_box_title">{{ $store.state.maskList.title }}</div>
      </div>

      <div class="sec_answer_btn">
        <div class="answer_btn_box" @click="clearMask">
          <img class="btn_box_img" src="@/assets/game/09.png" />
          <div class="btn_box_text">知道了</div>
        </div>
      </div>
    </div>

    <div class="game_mask_management" v-if="$store.state.maskList.type == 0">
      <div class="mask_management_box">
        <img class="management_box_img" src="@/assets/game/17.png" />
        <div class="management_box_title">{{ $store.state.maskList.title }}</div>

        <div class="management_box_flow first_box">
          <div class="box_flow_box">
            <div class="flow_box_money">
              {{ $store.state.maskList.content.data.Investmentamount }}万
            </div>
          </div>
          <div class="box_flow_title">投资金额</div>
        </div>
        <div class="management_box_flow sec_box">
          <div class="box_flow_box">
            <div class="flow_box_money">
              {{ $store.state.maskList.content.data.Income }}%
            </div>
          </div>
          <div class="box_flow_title">月收入</div>
        </div>

        <div class="management_box_con">
          {{ $store.state.maskList.content.data.content }}
        </div>
      </div>

      <div class="mask_management_btn" v-if="!changemask">
        <div class="management_btn_box" @click="investment">
          <img class="btn_box_img" src="@/assets/game/09.png" />
          <div class="btn_box_text">投资</div>
        </div>
        <div class="management_btn_box" @click="clearMask">
          <img class="btn_box_img" src="@/assets/game/18.png" />
          <div class="btn_box_text">放弃</div>
        </div>
      </div>

      <div class="first_investment" v-if="changemask">
        <img class="first_investment_img" src="@/assets/game/16.png" />
        <div class="first_investment_text">{{ changemask }}</div>
        <div class="first_investment_btn" @click="clearMask">知道了</div>
      </div>
    </div>

    <div class="game_mask_management" v-if="$store.state.maskList.type == 1">
      <!-- style="height: 490px" -->
      <div class="mask_management_box">
        <img class="management_box_img" src="@/assets/game/21.png" />
        <div class="management_box_title">请完成选项</div>

        <div class="manage_sec_subject">
          {{ $store.state.maskList.content.data.title }}
        </div>

        <div class="manage_sec_line"></div>

        <div class="manage_sec_answer">
          <div class="sec_answer_bao" @click="changeval('a')">
            <div class="answer_bao_text">
              A. {{ $store.state.maskList.content.data.a }}
            </div>
            <img
              v-if="changeval == 'a'"
              class="answer_bao_img"
              src="@/assets/game/20.png"
            />
          </div>
          <div class="sec_answer_bao" @click="changeval('b')">
            <div class="answer_bao_text">
              B. {{ $store.state.maskList.content.data.b }}
            </div>
            <img
              v-if="changeval == 'b'"
              class="answer_bao_img"
              src="@/assets/game/20.png"
            />
          </div>
          <div class="sec_answer_bao" @click="changeval('c')">
            <div class="answer_bao_text">
              C. {{ $store.state.maskList.content.data.c }}
            </div>
            <img
              v-if="changeval == 'c'"
              class="answer_bao_img"
              src="@/assets/game/20.png"
            />
          </div>
          <div class="sec_answer_bao" @click="changeval('d')">
            <div class="answer_bao_text">
              D. {{ $store.state.maskList.content.data.d }}
            </div>
            <img
              v-if="changeval == 'd'"
              class="answer_bao_img"
              src="@/assets/game/20.png"
            />
          </div>
        </div>
      </div>

      <div class="sec_answer_btn" v-if="!changemask">
        <div class="answer_btn_box" @click="Submitval">
          <img class="btn_box_img" src="@/assets/game/09.png" />
          <div class="btn_box_text">提交</div>
        </div>
      </div>

      <div class="sec_answer_rightwrong" v-if="changemask">
        <img class="answer_rightwrong_bgimg" src="@/assets/game/22.png" />
        <img
          class="answer_rightwrong_img"
          v-if="changemask.type == 1"
          src="@/assets/game/23.png"
        />
        <img
          class="answer_rightwrong_img"
          v-if="changemask.type == 0"
          src="@/assets/game/24.png"
        />
        <div class="answer_rightwrong_right">
          {{ changemask.type == 1 ? "答对啦！" : "答错啦！" }}
        </div>
        <div class="answer_rightwrong_event">{{ changemask.msg }}</div>
        <div class="answer_rightwrong_btn" @click="clearMask">知道了</div>
      </div>
    </div>

    <!-- end -->
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
import api from "@/api/api";
import { Notify } from "vant";
export default {
  props: {
    investmenttype: {
      type: Number,
      default: 1,
    },
  },

  setup() {
    const { proxy } = getCurrentInstance(); //this
    const fromConfig = reactive({
      changeval: null,
      changemask: null,
    });
    const changeval = (val) => {
      console.log("val", val);
      fromConfig.changeval = val;
    };

    const investment = async () => {
      try {
        let option = {
          index: proxy.$store.state.maskList.content.index,
          uid: proxy.$store.state.userinfo.id,
        };
        console.log("option", option);
        const res = await api.game.investment(option);

        // console.log("res", res);
        const { code, msg } = res;
        if (code == 0) {
          fromConfig.changemask = msg;

          proxy.$emit("getUserInfo");
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    const clearMask = () => {
      (fromConfig.changeval = null),
        (fromConfig.changemask = null),
        proxy.$emit("clearMaski");
    };

    const Submitval = async () => {
      try {
        if (fromConfig.changeval) {
          let option = {
            index: proxy.$store.state.maskList.content.index,
            uid: proxy.$store.state.userinfo.id,
            option: fromConfig.changeval,
          };
          console.log("option", option);
          const res = await api.game.answer(option);

          // console.log("res", res);
          const { code, msg } = res;
          if (code == 0) {
            // console.log("data", data);
            let changemaskxx = null;
            if (msg == "回答错误") {
              changemaskxx = {
                type: 0,
                msg: msg,
              };

              
            } else {
              changemaskxx = {
                type: 1,
                msg: msg,
              };
            }

            fromConfig.changemask = changemaskxx;

            proxy.$emit("getUserInfo");
            // proxy.$store.commit("SET_MASK_LIST", null);
          }
        } else {
          Notify("请选择");
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    // console.log("props==>", props.investmenttype); //输出的值是 undefined
    return { ...toRefs(fromConfig), changeval, investment, clearMask, Submitval };
  },
};
</script>

<style lang="scss">
.game_mask {
  z-index: 1001;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  // flex-direction: column;
  justify-content: center;
  //  opacity: 0.4;
  //   background: #fff5fc;
  .game_mask_bg {
    z-index: 1001;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.4;
    background: #505050;
  }
  .game_mask_management {
    position: relative;
    z-index: 1010;

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .sec_answer_rightwrong {
      position: absolute;

      width: 303px;
      height: 248px;
      // background: #2b68d9;
      display: flex;
      align-items: center;
      flex-direction: column;
      .answer_rightwrong_bgimg {
        position: absolute;

        width: 303px;
        height: 248px;
      }
      .answer_rightwrong_right {
        position: relative;
        margin-top: 13px;
        font-size: 14px;
        font-weight: 500;
        color: #d9602b;
        line-height: 14px;
      }
      .answer_rightwrong_img {
        position: relative;
        margin-top: 51px;
        width: 50px;
        height: 50px;
      }
      .answer_rightwrong_event {
        position: relative;
        margin-top: 7px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #d9602b;
        line-height: 16px;
      }
      .answer_rightwrong_btn {
        position: relative;
        margin-top: 14px;
        padding: 20px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        text-decoration: underline;
        color: #463210;
        line-height: 14px;
      }
    }

    .sec_answer_btn {
      margin-top: 27px;
      width: 303px;
      display: flex;
      justify-content: center;
      .answer_btn_box {
        width: 177px;
        height: 47px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .btn_box_img {
          position: absolute;
          width: 177px;
          height: 47px;
        }
        .btn_box_text {
          position: absolute;
          font-size: 16px;
          line-height: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #fefefe;
        }
      }
    }

    .first_investment {
      width: 303px;
      height: 178px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      .first_investment_img {
        width: 303px;
        height: 178px;
        position: absolute;
      }
      .first_investment_text {
        margin-top: 69px;
        position: relative;
        font-size: 16px;
        font-weight: bold;
        color: #2b66d5;
        line-height: 16px;
      }
      .first_investment_btn {
        position: relative;
        margin-top: 30px;
        font-size: 14px;
        font-weight: 500;
        text-decoration: underline;
        color: #463210;
        line-height: 14px;
      }
    }

    .mask_management_btn {
      margin-top: 27px;
      width: 303px;

      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      .management_btn_box {
        width: 114px;
        height: 47px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .btn_box_img {
          position: absolute;
          width: 114px;
          height: 47px;
        }
        .btn_box_text {
          position: absolute;
          font-size: 16px;
          line-height: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #fefefe;
        }
      }
    }

    .mask_management_box {
      width: 303px;
      height: 414px;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;

      .manage_sec_line {
        margin-top: 13px;
        position: relative;
        width: 209px;
        height: 1px;
        background: #c6a783;
      }
      .manage_sec_answer {
        margin-top: 17px;
        position: relative;
        width: 209px;
        display: flex;
        flex-direction: column;
        .sec_answer_bao {
          margin-top: 12px;
          display: flex;
          position: relative;
          .answer_bao_text {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #463210;
            line-height: 18px;
          }
          .answer_bao_img {
            position: absolute;
            width: 20px;
            height: 15px;
          }
        }
      }
      .manage_sec_subject {
        margin-top: 15px;
        position: relative;
        width: 209px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #463210;
        line-height: 18px;
      }

      .management_box_img {
        position: absolute;
        width: 303px;
        // height: 490px;
        height: 414px;
      }
      .management_box_title {
        position: relative;
        margin-top: 108px;
        font-size: 18px;
        line-height: 18px;
        font-family: zcoolqingkehuangyouti;
        font-weight: 400;
        color: #463210;
      }
      .management_box_con {
        // position: absolute;
        position: relative;
        margin-top: 41px;
        width: 199px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #463210;
        font-size: 14px;
      }
      .first_box {
        margin-top: 17px;
      }
      .sec_box {
        margin-top: 9px;
      }
      .management_box_flow {
        width: 99px;
        height: 44px;
        position: relative;
        display: flex;
        justify-content: center;
        .box_flow_title {
          position: absolute;
          width: 66px;
          height: 12px;
          background: #c3e3f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #463210;
          line-height: 11px;
        }
        .box_flow_box {
          position: absolute;
          top: 5px;
          width: 99px;
          height: 39px;
          background: #c3e3f6;
          border: 1px solid #2b68d9;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          .flow_box_money {
            margin-top: 17px;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #463210;
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>
